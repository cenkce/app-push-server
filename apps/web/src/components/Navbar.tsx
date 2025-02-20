import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useKeycloak } from "@/keycloak/useKeycloak";
import { useNavigate } from "@tanstack/react-router";
import { LogOut, Settings, User } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const account = keycloak.profile;

  console.log("Navbar", account);

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{account?.firstName?.charAt(0) ?? "U"}</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline">{account?.firstName}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate({ to: "/settings" })}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
