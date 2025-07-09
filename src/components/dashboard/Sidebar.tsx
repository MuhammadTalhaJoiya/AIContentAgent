import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Wand2,
  Palette,
  FileText,
  Search,
  ImageIcon,
  Mic,
  History,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Prompt Builder", icon: Wand2, href: "/prompt-builder" },
  { name: "Brand Style", icon: Palette, href: "/brand-style" },
  { name: "Content Generator", icon: FileText, href: "/content-generator" },
  { name: "SEO Optimizer", icon: Search, href: "/seo-optimizer" },
  { name: "Image & Video", icon: ImageIcon, href: "/image-video" },
  { name: "Voiceover", icon: Mic, href: "/voiceover" },
  { name: "History", icon: History, href: "/history" },
  { name: "Team Collaboration", icon: Users, href: "/team-collaboration" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onMobileClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 flex flex-col h-full bg-dashboard-sidebar-bg border-r border-border transition-all duration-300 ease-in-out",
          // Desktop behavior
          "lg:flex",
          collapsed ? "lg:w-16" : "lg:w-64",
          // Mobile behavior
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "w-64 lg:w-auto"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-white" />
              </div>
              <div className="hidden lg:block">
                <h1 className="font-semibold text-sm text-foreground">AI Content Agent</h1>
                <p className="text-xs text-muted-foreground">Factory</p>
              </div>
              <div className="lg:hidden">
                <h1 className="font-semibold text-sm text-foreground">AI Content Agent Factory</h1>
              </div>
            </div>
          )}
          
          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileClose}
            className="h-8 w-8 p-0 hover:bg-dashboard-sidebar-hover lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
          
          {/* Desktop collapse button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="hidden lg:flex h-8 w-8 p-0 hover:bg-dashboard-sidebar-hover"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 overflow-y-auto">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onMobileClose}
                    className={cn(
                      "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
                      "hover:bg-dashboard-sidebar-hover hover:text-foreground",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground",
                      collapsed ? "justify-center lg:justify-center" : "justify-start"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer - Hidden on mobile when collapsed, shown on desktop */}
        {!collapsed && (
          <div className="p-4 border-t border-border">
            <div className="bg-gradient-card p-3 rounded-xl border">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">Upgrade to Pro</p>
                  <p className="text-xs text-muted-foreground">Unlock advanced features</p>
                  <Button size="sm" className="w-full mt-2 h-7 text-xs">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}