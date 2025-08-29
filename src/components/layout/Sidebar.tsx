import { motion } from "framer-motion";
import { 
  Upload, 
  FileText, 
  BarChart3, 
  TestTube2, 
  Filter, 
  Settings,
  Users,
  Building2,
  Shield,
  Database,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userRole: "job_seeker" | "company" | "admin";
}

export const Sidebar = ({ userRole }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navigation = {
    job_seeker: [
      { name: "Upload Resume", href: "/upload", icon: Upload },
      { name: "Job Matches", href: "/matches", icon: FileText },
      { name: "Skill Tests", href: "/tests", icon: TestTube2 },
      { name: "Profile", href: "/profile", icon: Users },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
    company: [
      { name: "Job Descriptions", href: "/job-descriptions", icon: FileText },
      { name: "Candidates", href: "/candidates", icon: Users },
      { name: "Rankings", href: "/rankings", icon: BarChart3 },
      { name: "Skill Testing", href: "/skill-testing", icon: TestTube2 },
      { name: "Filters", href: "/filters", icon: Filter },
      { name: "Company", href: "/company", icon: Building2 },
    ],
    admin: [
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Companies", href: "/admin/companies", icon: Building2 },
      { name: "Question Bank", href: "/admin/questions", icon: Database },
      { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
      { name: "Security", href: "/admin/security", icon: Shield },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ]
  };

  const currentNavigation = navigation[userRole];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={cn(
        "h-screen glass-strong border-r border-glass-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-glass-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <div className="text-sm font-semibold gradient-text">
                ATS + ProveIt
              </div>
            </motion.div>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-glass border border-glass-border"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {currentNavigation.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-neon"
                    : "text-muted-foreground hover:text-foreground hover:bg-glass"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-colors",
                  active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                )} />
                
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="truncate"
                  >
                    {item.name}
                  </motion.span>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-glass-border">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-muted-foreground hover:text-foreground hover:bg-glass",
            collapsed ? "px-2" : "px-3"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3">Sign Out</span>}
        </Button>
      </div>
    </motion.div>
  );
};