import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/query";
import { router } from "./routes/router";
import "./index.css";
import KeycloakProvider from "./keycloak/KeycloakProvider";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeycloakProvider>
        <RouterProvider router={router}></RouterProvider>
      </KeycloakProvider>
    </QueryClientProvider>
  );
}
