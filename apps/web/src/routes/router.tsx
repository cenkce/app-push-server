import { Layout } from "@/components/Layout";
import { AppDetailPage } from "@/pages/apps/AppDetailPage";
import { AppsPage } from "@/pages/apps/AppsPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { DeploymentDetailPage } from "@/pages/deployments/DeploymentDetailPage";
import { SettingsPage } from "@/pages/settings/SettingsPage";
import { useAuthStore } from "@/stores/auth";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";

// Auth guard
const authGuard = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated;

  if (!isAuthenticated) {
    throw redirect({
      to: "/login",
      search: {
        redirect_to: window.location.pathname,
      },
    });
  }
  return true;
};

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

// Public routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});


// Protected routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
  beforeLoad: authGuard,
});

const appsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apps",
  component: AppsPage,
  beforeLoad: authGuard,
});

const appDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apps/$appName",
  component: AppDetailPage,
  beforeLoad: authGuard,
});

const deploymentDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apps/$appName/deployments/$deploymentName",
  component: DeploymentDetailPage,
  beforeLoad: authGuard,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
  beforeLoad: authGuard,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  indexRoute,
  appsRoute,
  appDetailRoute,
  deploymentDetailRoute,
  settingsRoute,
]);

// Create router
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Type declarations
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
