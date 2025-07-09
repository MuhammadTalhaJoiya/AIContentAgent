import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronDown, Search, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface TopNavbarProps {
  onMobileMenuToggle: () => void;
}

export function TopNavbar({ onMobileMenuToggle }: TopNavbarProps) {
  const [notifications] = useState(3);

  return (
    <header className="h-16 bg-dashboard-navbar-bg border-b border-border flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center flex-1 space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMobileMenuToggle}
          className="h-9 w-9 p-0 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects, prompts, or content..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-4">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 md:hidden">
          <Search className="h-4 w-4" />
        </Button>
        <Link to="/content-generator">
          <Button size="sm" className="hidden sm:flex h-9 px-4">
            <Plus className="h-4 w-4 sm:mr-2" />
            <span className="hidden lg:inline">Create New</span>
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">M</span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">My Workspace</span>
                <ChevronDown className="h-3 w-3" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">M</span>
                </div>
                <div>
                  <div className="font-medium">My Workspace</div>
                  <div className="text-xs text-muted-foreground">Personal</div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">T</span>
                </div>
                <div>
                  <div className="font-medium">Team Workspace</div>
                  <div className="text-xs text-muted-foreground">5 members</div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>+ Create Workspace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
            <Bell className="h-4 w-4" />
            {notifications > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {notifications}
              </Badge>
            )}
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 px-2 hover:bg-muted/50">
              <div className="flex items-center space-x-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="hidden xl:block text-left">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">john@company.com</div>
                </div>
                <ChevronDown className="h-3 w-3 hidden sm:block" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing & Usage</DropdownMenuItem>
            <DropdownMenuItem>Team Management</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}