import Keycloak from "keycloak-js";
import { createContext, memo, useEffect } from "react";
import { KeycloakInitOptions } from "keycloak-js";
import { useAuthStore } from "@/stores/auth";

export type IAuthContextProps = {
  client?: Keycloak;
  initialized: boolean;
};

function createAuthContext(
  initialContext?: Partial<IAuthContextProps>
): React.Context<IAuthContextProps> {
  return createContext({
    initialized: false,
    ...initialContext,
  });
}

export const KeycloakContext = createAuthContext();

export const KeycloakContextConsumer = KeycloakContext.Consumer;
interface KeycloakAuthProviderProps {
  children: any;
}

const defaultOptions: KeycloakInitOptions = {
  onLoad: "login-required",
  // onLoad: "login-required",
};
export const keycloak = new Keycloak({
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
});

const init = await keycloak.init({ ...defaultOptions });
await keycloak?.loadUserProfile();

const KeycloakProvider: React.FC<KeycloakAuthProviderProps> = memo((props) => {
  const { setAuth, logout } = useAuthStore();
  useEffect(() => {
    keycloak.onTokenExpired = () => {
      logout();
    };
    keycloak.onAuthLogout = () => {
      logout();
    };
    if (init) {
      setAuth({ isAuthenticated: true, account: keycloak?.profile });
    }
  }, []);

  return (
    <KeycloakContext.Provider value={{ initialized: init, client: keycloak }}>
      {props.children}
    </KeycloakContext.Provider>
  );
});

export const KeycloakConsumer = KeycloakContext.Consumer;
export default KeycloakProvider;
