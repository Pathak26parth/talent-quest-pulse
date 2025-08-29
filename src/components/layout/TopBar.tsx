import { motion } from "framer-motion";
import { Bell, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TopBarProps {
  userName: string;
  userRole: "job_seeker" | "company" | "admin";
  userAvatar?: string;
}

export const TopBar = ({ userName, userRole, userAvatar }: TopBarProps) => {
  const roleLabels = {
    job_seeker: "Job Seeker",
    company: "Company",
    admin: "Administrator"
  };

  const roleColors = {
    job_seeker: "bg-gradient-secondary",
    company: "bg-gradient-primary", 
    admin: "bg-gradient-accent"
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 glass-strong border-b border-glass-border px-6 flex items-center justify-between"
    >
      {/* Left Section - Title */}
      <div className="flex items-center space-x-4">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold gradient-text"
        >
          AI-Powered ATS + ProveIt
        </motion.h1>
      </div>

      {/* Center Section - Search */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 max-w-md mx-8"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search candidates, jobs, tests..."
            className="pl-10 glass border-glass-border focus:ring-primary focus:border-primary"
          />
        </div>
      </motion.div>

      {/* Right Section - Notifications & User */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center space-x-4"
      >
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-glass border border-glass-border"
        >
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-xs">
            3
          </Badge>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-3 hover:bg-glass border border-glass-border px-3 py-2 h-auto"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={userAvatar} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm font-semibold">
                  {userName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-foreground">{userName}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${roleColors[userRole]} text-white border-0`}
                >
                  {roleLabels[userRole]}
                </Badge>
              </div>
              
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent
            align="end"
            className="w-56 glass-strong border-glass-border"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-glass-border" />
            <DropdownMenuItem className="hover:bg-glass focus:bg-glass">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-glass focus:bg-glass">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-glass-border" />
            <DropdownMenuItem className="hover:bg-glass focus:bg-glass text-destructive">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </motion.header>
  );
};