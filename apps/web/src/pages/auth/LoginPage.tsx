import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useKeycloak } from "@/keycloak/useKeycloak";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome to CodePush
          </CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full"
            variant="outline"
            asChild
            onClick={() => keycloak?.login()}
          >
            <div>Login</div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
