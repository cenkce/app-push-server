import { keycloak } from "@/keycloak/KeycloakProvider";
import { config } from "../config";
import { Api, HttpClient } from "@code-push-cloudflare-workers/api-client";

export const api = new Api(
  new HttpClient({
    baseUrl: config.apiUrl,
    baseApiParams: { credentials: "include" },
    customFetch: async (input, init) => {
      const token = keycloak.token;
      const _init = {
        ...init,
      };
      if (token) {
        _init.headers = {
          ...init?.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return fetch(input, _init);
    },
  })
);
