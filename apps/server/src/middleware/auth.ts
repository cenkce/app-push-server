import type { Context, MiddlewareHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import type { Env } from "../types/env";
import { Jwt } from "hono/utils/jwt";
import { getStorageProvider } from "../storage/factory";

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

    console.log("decodedToken", decodedToken);

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
    return decodedToken;
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

    if (!publicKeyResponse)
      publicKeyResponse = await fetch(
        `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`
      ).then((res) => res.json());

    console.log("publicKeyResponse", publicKeyResponse);

    try {
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

      const storage = getStorageProvider(c);
      const account = await storage.getAccountByEmail(
        res.payload.email as string
      );

      c.set("auth", {
        email: res.payload.email as string,
        accountId: account.id,
        isAuthenticated: true,
      });

      // try {
      //   // Try JWT first
      //   const payload = await verify(token, c.env.JWT_SECRET);
      //   c.set("auth", {
      //     accountId: payload.sub,
      //     isAuthenticated: true,
      //   });
      // } catch {
      //   // Try access key if JWT fails
      //   try {
      //     const accountId = await storage.getAccountIdFromAccessKey(token);
      //     c.set("auth", {
      //       accountId,
      //       isAuthenticated: true,
      //     });
      //   } catch {
      //     throw new HTTPException(401, { message: "Invalid access token" });
      //   }
      // }

      await next();
    } catch (error) {
      // console.error(error);
      if (error instanceof HTTPException) {
        throw error;
      }
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
