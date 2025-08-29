import { motion } from "framer-motion";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Users, BarChart3, TestTube2, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Mock user data - would come from auth context
  const mockUser = {
    name: "Sarah Johnson",
    role: "company" as const,
    avatar: "",
  };

  const handleAnalyzeResumes = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    // Simulate progressive loading
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      change: "+2 this week",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Total Candidates", 
      value: "1,247",
      change: "+156 this month",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Completed Tests",
      value: "89",
      change: "+23 this week", 
      icon: TestTube2,
      color: "text-accent"
    },
    {
      title: "Average Match Score",
      value: "87%",
      change: "+5% vs last month",
      icon: TrendingUp,
      color: "text-success"
    }
  ];

  const recentJobs = [
    { title: "Senior React Developer", candidates: 45, posted: "2 days ago", status: "Active" },
    { title: "UX Designer", candidates: 23, posted: "1 week ago", status: "Active" },
    { title: "Product Manager", candidates: 67, posted: "3 days ago", status: "Active" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingAnimation 
          progress={loadingProgress}
          text="Analyzing resumes with AI..."
          size="lg"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar userRole={mockUser.role} />
      
      <div className="flex-1 flex flex-col">
        <TopBar 
          userName={mockUser.name}
          userRole={mockUser.role}
          userAvatar={mockUser.avatar}
        />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold gradient-text">
              Welcome back, {mockUser.name}!
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your talent acquisition today.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover-lift border-glass-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* AI Analysis Card */}
            <Card className="glass-strong border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>AI-Powered Resume Analysis</span>
                </CardTitle>
                <CardDescription>
                  Upload resumes and get instant AI-powered candidate rankings with detailed insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Ready to analyze</p>
                    <p className="font-semibold">234 uploaded resumes</p>
                  </div>
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <Button 
                  onClick={handleAnalyzeResumes}
                  className="w-full btn-neon"
                >
                  Start AI Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Recent Jobs Card */}
            <Card className="glass-strong border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-secondary" />
                  <span>Recent Job Postings</span>
                </CardTitle>
                <CardDescription>
                  Manage your active job listings and track candidate applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentJobs.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg glass hover:bg-glass/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{job.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.candidates} candidates • {job.posted}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                        {job.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
                <Button variant="outline" className="w-full btn-glass">
                  View All Jobs
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
}