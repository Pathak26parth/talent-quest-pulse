import { motion } from "framer-motion";

interface LoadingAnimationProps {
  progress?: number;
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingAnimation = ({ 
  progress = 0, 
  text = "Processing...", 
  size = "md" 
}: LoadingAnimationProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  const progressRing = (progress / 100) * 283; // 2π * 45 (radius)

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Morphing Orb */}
      <div className="relative">
        <motion.div
          className={`morph-orb ${sizeClasses[size]} neon-glow`}
          animate={{
            borderRadius: [
              "50%",
              "60% 40% 30% 70%",
              "40% 60% 70% 30%", 
              "70% 30% 40% 60%",
              "50%"
            ],
            scale: [1, 1.1, 0.9, 1.05, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="2"
            opacity="0.3"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - progressRing}
            className="drop-shadow-lg"
            animate={{
              strokeDashoffset: 283 - progressRing,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI) / 4) * 60],
                y: [0, Math.sin((i * Math.PI) / 4) * 60],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Text */}
      <div className="text-center">
        <motion.p
          className="text-lg font-medium text-foreground mb-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
        
        <div className="flex items-center justify-center space-x-2">
          <div className="text-sm text-muted-foreground font-mono">
            {progress.toFixed(0)}%
          </div>
          <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};