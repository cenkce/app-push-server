import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import { authMiddleware } from "../middleware/auth";
import type { Env } from "../types/env";

export const authRouter = new OpenAPIHono<Env>();
authRouter.use("/*", authMiddleware());

const LoginErrorResponse = z.object({
  error: z.string(),
  error_description: z.string().optional(),
});

export const authenticatedRoute = new OpenAPIHono<Env>();

authenticatedRoute.openapi(
  createRoute({
    method: "get",
    path: "/authenticated",
    responses: {
      201: {
        description: "Ok",
      },
    },
  }),
  async (c) => {
    return c.json({
      status: 201,
    });
  }
);

createRoute({
  method: "get",
  path: "/authenticated",
  responses: {
    201: {
      description: "Ok",
    },
  },
});

const routes = {
  login: createRoute({
    method: "get",
    path: "/login",
    responses: {
      201: {
        description: "Ok",
      },
    },
  }),
  callback: createRoute({
    method: "get",
    path: "/github/callback",
    request: {
      query: z.object({
        code: z.string(),
        state: z.string().optional(),
      }),
    },
    responses: {
      302: {
        description: "Redirect to dashboard with session",
      },
      400: {
        content: {
          "application/json": {
            schema: LoginErrorResponse,
          },
        },
        description: "Login error",
      },
    },
  }),

  logout: createRoute({
    method: "get",
    path: "/logout",
    responses: {
      302: {
        description: "Redirect to login page",
      },
    },
  }),
};

// OAuth login
authRouter.openapi(routes.login, async (c) => {
  // const params = new URLSearchParams({
  //   client_id: c.env.GITHUB_CLIENT_ID,
  //   redirect_uri: `${c.env.SERVER_URL}/auth/github/callback?redirect_to=${c.req.query(
  //     "redirect_to",
  //   )}`,
  //   scope: "user:email",
  // });

  // return c.redirect(
  //   `https://github.com/login/oauth/authorize?${params.toString()}`,
  // );
  return c.json({
    status: 201,
  });
});

// OAuth callback
// router.openapi(routes.callback, async (c) => {
//   try {
//     const { code } = c.req.valid("query");
//     if (!code) {
//       return c.json(
//         {
//           error: "invalid_request",
//           error_description: "No code provided",
//         },
//         400
//       );
//     }

//     // Exchange code for access token
//     const accessToken = await getGitHubAccessToken(code, c.env);
//     // const githubUser = await getGitHubUser(accessToken);
//     const storage = getStorageProvider(c);

//     // Find or create account
//     let accountId: string;
//     try {
//       // const account = await storage.getAccountByEmail(githubUser.email);
//       // Update GitHub ID if not set
//       // if (!account.gitHubId) {
//       // await storage.updateAccount(account.email, {
//       //   ...account,
//       //   gitHubId: githubUser.id,
//       // });
//       // }
//       // accountId = account.id;
//     } catch {
//       // Create new account if registration is enabled
//       // if (c.env.ENABLE_ACCOUNT_REGISTRATION !== "true") {
//       //   return c.redirect("/login?error=registration_disabled");
//       // }
//       // accountId = await storage.addAccount({
//       //   email: githubUser.email,
//       //   name: githubUser.name,
//       //   gitHubId: githubUser.id,
//       //   createdTime: Date.now(),
//       //   linkedProviders: ["GitHub"],
//       // });
//     }

//     // Create access key for session
//     const accessKeyName = generateKey();
//     // await storage.addAccessKey(accountId, {
//     //   name: accessKeyName,
//     //   friendlyName: "GitHub OAuth Session",
//     //   createdBy: c.req.header("User-Agent") ?? "Unknown",
//     //   createdTime: Date.now(),
//     //   expires: Date.now() + 60 * 24 * 60 * 60 * 1000, // 60 days
//     //   isSession: true,
//     // });

//     // Create JWT token
//     // const token = await sign(
//     //   {
//     //     sub: accountId,
//     //     email: githubUser.email,
//     //   },
//     //   c.env.JWT_SECRET,
//     // );

//     // Set session cookie
//     // setCookie(c, "session", token, {
//     //   httpOnly: true,
//     //   secure: true,
//     //   sameSite: "Lax",
//     //   path: "/",
//     //   maxAge: 60 * 60 * 24, // 1 day
//     // });

//     // Handle post-login redirect
//     const error = c.req.query("error");
//     if (error) {
//       return c.redirect(`/login?error=${error}`);
//     }

//     const redirectTo = c.req.query("redirect_to") || "/dashboard";
//     return c.redirect(redirectTo);
//   } catch (error) {
//     console.error("Auth error:", error);

//     return c.json(
//       {
//         error: "auth_failed",
//         error_description: "Authentication failed",
//       },
//       400
//     );
//   }
// });

// Logout
// router.openapi(routes.logout, async (c) => {
//   // Clear session cookie
//   setCookie(c, "session", "", {
//     httpOnly: true,
//     secure: true,
//     sameSite: "Lax",
//     path: "/",
//     maxAge: 0,
//   });

//   const redirectTo = c.req.query("redirect_to") || "/login";
//   return c.redirect(redirectTo);
// });
