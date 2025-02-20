import { config } from "@/config";
import { KeycloakProfile } from "keycloak-js";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  account?: KeycloakProfile | null;
  setAuth: (data: {
    isAuthenticated: boolean;
    account?: KeycloakProfile | null;
  }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  account: null,
  setAuth: (data) => set(data),
  logout: () => {
    set({ isAuthenticated: false, account: null });
    fetch(config.logoutUrl, { method: "GET" });
    // Clear session cookie
    document.cookie =
      "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
}));
