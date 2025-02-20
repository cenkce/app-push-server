import { useContext } from 'react';
import { KeycloakContext } from './KeycloakProvider';

export function useKeycloak() {
  const context = useContext(KeycloakContext);

  if (!context.client) {
    throw new Error('keycloak client has not been assigned to KeycloakProvider');
  }

  const { client, initialized } = context;
  
  return {
    initialized,
    keycloak: client
  };
}
