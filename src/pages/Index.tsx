import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Shield, Target } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced NLP algorithms analyze resumes and job descriptions for perfect candidate matches."
    },
    {
      icon: Target,
      title: "Skill Testing Platform",
      description: "Adaptive ProveIt tests that adjust difficulty based on performance and prevent cheating."
    },
    {
      icon: Shield,
      title: "Bias Reduction",
      description: "Anonymous candidate evaluation options to promote fair and unbiased hiring decisions."
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with insights on candidate performance and hiring metrics."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-foreground">ATS + ProveIt</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionary talent acquisition platform combining advanced AI resume analysis 
              with adaptive skill testing for smarter hiring decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="btn-neon text-lg px-8 py-4 group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/login">
                <Button variant="outline" className="btn-glass text-lg px-8 py-4">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Revolutionizing Talent Acquisition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of hiring with our comprehensive AI-driven platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-strong rounded-2xl p-6 hover-lift border-glass-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto text-center border-glass-border"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Ready to Transform Your Hiring Process?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies already using AI to find the perfect candidates.
          </p>
          
          <Link to="/register">
            <Button className="btn-neon text-lg px-12 py-4">
              Start Your Free Trial
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
