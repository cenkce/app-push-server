import { SELF, env } from "cloudflare:test";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  DEFAULT_TEST_USER,
  type TestAuth,
  createTestAuth,
} from "../utils/auth";
import { cleanupDatabase, getTestDb } from "../utils/db";

describe("Auth Routes", () => {
  let auth: TestAuth;
  const db = getTestDb();

  beforeEach(async () => {
    await cleanupDatabase();
    auth = createTestAuth(env.DB);
    await auth.setupTestAccount(DEFAULT_TEST_USER);
  });

  afterEach(async () => {
    await auth.cleanup();
  });

  describe("GET /auth/login", () => {
    it("should login using accesskey", async () => {
      const headers = await auth.getAuthHeaders();

      const response = await SELF.fetch("https://example.com/auth/login", {
        headers: headers,
      });

      expect(response.status).toBe(200);
    });
  });

  // describe("GET /auth/github/callback", () => {
  //   it("should handle invalid code", async () => {
  //     const response = await SELF.fetch(
  //       "https://example.com/auth/github/callback?code=invalid",
  //     );

  //     expect(response.status).toBe(400);
  //     expect(await response.json()).toEqual({
  //       error: "auth_failed",
  //       error_description: "Authentication failed",
  //     });
  //   });
  // });

  // describe("GET /auth/logout", () => {
  //   it("should clear session", async () => {
  //     const response = await SELF.fetch("https://example.com/auth/logout", {
  //       redirect: "manual",
  //     });

  //     expect(response.status).toBe(201);
  //     expect(response.headers.get("Location")).toBe("/login");
  //     expect(response.headers.get("Set-Cookie")).toMatch(
  //       /^session=;.*Max-Age=0/,
  //     );
  //   });

  //   it("should redirect to specified location", async () => {
  //     const response = await SELF.fetch(
  //       "http://example.com/auth/logout?redirect_to=/custom",
  //       {
  //         redirect: "manual",
  //       },
  //     );

  //     expect(response.status).toBe(302);
  //     expect(response.headers.get("Location")).toBe("/custom");
  //   });
  // });
});
