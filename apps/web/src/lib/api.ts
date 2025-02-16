import { config } from "./config";
import { Api, HttpClient } from "@code-push-cloudflare-workers/api-client";

export const api = new Api(
  new HttpClient({
    baseUrl: config.apiUrl,
    baseApiParams: { credentials: "include" },
  })
);
