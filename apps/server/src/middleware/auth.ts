import type { Context, MiddlewareHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import type { Env } from "../types/env";
import { Jwt } from "hono/utils/jwt";
import { getStorageProvider } from "../storage/factory";
import { Account } from "../types/schemas";
import { ErrorCode } from "../types/error";

export type KeycloakParsedToken = {
  exp: number;
  iat: number;
  auth_time: number;
  iss: "http://localhost:8080/realms/code-push";
  sub: "249b0b8a-a5fb-4b1a-ba6e-e32037ecd17f";
  realm_access: { roles: string[] };
  resource_access: { account: Record<string, any> };
  // scope: "openid profile email";
  email_verified: true;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
};
async function validateToken({
  token,
  keycloakUrl,
  realm,
  clientId,
  publicKeyResponse,
}: {
  publicKeyResponse: any;
  token: string;
  keycloakUrl: string;
  realm: string;
  clientId: string;
}) {
  try {
    if (!token) {
      console.error("Token not provided");
      return false;
    }
    const decodedToken = Jwt.decode(token);

    const signingKey = publicKeyResponse.keys.find(
      (key: any) => key.use === "sig" && key.alg === "RS256"
    );

    if (!signingKey) {
      return false; // Signing key not found
    }

    const pemStart = "-----BEGIN CERTIFICATE-----\n";
    const pemEnd = "\n-----END CERTIFICATE-----";
    const pem = pemStart + signingKey.x5c[0] + pemEnd;

    if (decodedToken.payload.iss !== `${keycloakUrl}/realms/${realm}`) {
      return false; // Invalid issuer
    }

    if (decodedToken.payload.azp !== clientId) {
      return false; // Invalid audience
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.payload.exp! < currentTime) {
      return false; // Token expired
    }

    Jwt.verify(token, pem, "RS256");
    return decodedToken.payload as KeycloakParsedToken;
  } catch (error) {
    console.error("Error validating token:", error);
    return false; // Error in validating token
  }
}

export interface AuthContext {
  email: string;
  accountId: string;
  isAuthenticated: boolean;
}

declare module "hono" {
  interface ContextVariableMap {
    auth: AuthContext;
  }
}

export interface GitHubTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  error?: string;
  error_description?: string;
}

export interface GitHubUser {
  id: string;
  email: string;
  name: string;
}

interface GitHubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: string | null;
}

// export type GitHubProfile = {
//   id: string;
//   displayName: string;
//   username: string;
//   profileUrl: string;
//   photos: [{ value: string }];
//   emails: Array<{ value: string }>;
//   _json: {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     url: string;
//     html_url: string;
//     name: string;
//     email: string | null;
//     bio: string;
//   };
// };
let publicKeyResponse: any;

// Auth middleware
export const authMiddleware = (): MiddlewareHandler<Env> => {
  return async (c: Context<Env>, next: () => Promise<void>) => {
    const keycloakUrl = c.env.KEYCLOAK_URL;
    const realm = c.env.KEYCLOAK_REALM;
    const clientId = c.env.KEYCLOAK_CLIENT_ID;
    const storage = getStorageProvider(c);

    if (!publicKeyResponse)
      publicKeyResponse = await fetch(
        `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`
      ).then((res) => res.json());

    try {
      let accountId: string | undefined;
      let account: Account | undefined;

      let token: string | undefined;

      const authHeader = c.req.header("Authorization");
      if (authHeader) {
        const [type, headerToken] = authHeader.split(" ");
        if (type === "Bearer") {
          token = headerToken;
        }
      }

      if (!token) {
        throw new HTTPException(401, { message: "No authentication token" });
      }

      // check for access token
      try {
        accountId = await storage.getAccountIdFromAccessKey(token);
        if (accountId) account = await storage.getAccount(accountId as string);
      } catch (e) {
        if (e instanceof Error && "code" in e && e.code === ErrorCode.Expired) {
          throw new HTTPException(401, { message: "Access key expired" });
        } else if (e instanceof Error) console.log(e.message);
        else console.log("Access key not found");
      }
      // if there is a valid access key, set auth context and continue
      if (account) {
        c.set("auth", {
          email: account.email,
          accountId: account.id,
          isAuthenticated: true,
        });
        await next();
        return;
      }

      const res = await validateToken({
        publicKeyResponse,
        token,
        keycloakUrl,
        realm,
        clientId,
      });

      if (!res) {
        throw new HTTPException(401, { message: "Invalid access token" });
      }

      try {
        account = await storage.getAccountByEmail(res.email);

        accountId = account?.id;
      } catch (error) {
        if (
          error instanceof Error &&
          "code" in error &&
          error.code === ErrorCode.NotFound
        ) {
          if (!account) {
            // Create new account if token is valid but account is not found
            accountId = await storage.addAccount({
              email: res.email as string,
              name: res.name,
              ssoId: res.sub,
              createdTime: Date.now(),
              linkedProviders: ["Keycloak"],
            });
          }
        } else throw new HTTPException(401, { message: "Invalid account" });
      }

      if (accountId)
        c.set("auth", {
          email: res.email as string,
          accountId,
          isAuthenticated: true,
        });
      else throw new HTTPException(401, { message: "Invalid account" });

      await next();
    } catch (error) {
      // console.error(error);
      if (error instanceof HTTPException) {
        throw error;
      }
      console.error("Error in auth middleware:", error);
      throw new HTTPException(401, { message: "Authentication failed" });
    }
  };
};

// GitHub OAuth helpers
export async function getGitHubAccessToken(
  code: string,
  env: Env["Bindings"]
): Promise<string> {
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    client_secret: env.GITHUB_CLIENT_SECRET,
    redirect_uri: `http://localhost:5173`,
    code,
  });

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = (await response.json()) as GitHubTokenResponse;
  if (data.error) {
    throw new Error(data.error_description || "Failed to get access token");
  }

  return data.access_token;
}

// export async function getGitHubUser(accessToken: string): Promise<GitHubUser> {
//   const [userResponse, emailsResponse] = await Promise.all([
//     fetch("https://api.github.com/user", {
//       headers: {
//         authorization: `Bearer ${accessToken}`,
//         accept: "application/vnd.github.v3+json",
//         "user-agent": "code-push-cloudflare-workers/0.0",
//       },
//     }),
//     fetch("https://api.github.com/user/emails", {
//       headers: {
//         authorization: `Bearer ${accessToken}`,
//         accept: "application/vnd.github.v3+json",
//         "user-agent": "code-push-cloudflare-workers/0.0",
//       },
//     }),
//   ]);

//   if (!userResponse.ok || !emailsResponse.ok) {
//     throw new Error("Failed to get GitHub user data");
//   }

//   const [userData, emails] = await Promise.all([
//     userResponse.json<GitHubProfile["_json"]>(),
//     emailsResponse.json<
//       {
//         email: string;
//         primary: boolean;
//         verified: boolean;
//       }[]
//     >(),
//   ]);

//   // Find primary email
//   const primaryEmail = emails.find((email) => email.primary)?.email;
//   if (!primaryEmail) {
//     throw new Error("No primary email found");
//   }

//   return {
//     id: userData.id.toString(),
//     email: primaryEmail,
//     name: userData.name || userData.login,
//   };
// }
