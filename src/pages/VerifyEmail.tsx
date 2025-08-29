import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth/AuthLayout";

export default function VerifyEmail() {
  return (
    <AuthLayout
      title="Check Your Email"
      subtitle="We've sent you a verification link"
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center"
        >
          <Mail className="w-8 h-8 text-primary-foreground" />
        </motion.div>

        <div className="space-y-2">
          <p className="text-foreground">
            We've sent a verification email to your inbox.
          </p>
          <p className="text-sm text-muted-foreground">
            Click the link in the email to verify your account and get started.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-success" />
          <span>Email sent successfully</span>
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full btn-glass">
            Resend Email
          </Button>
          
          <Link to="/login">
            <Button variant="ghost" className="w-full">
              Back to Sign In
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}