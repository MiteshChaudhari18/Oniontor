import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="glass-card-elevated border-2 border-white/30 dark:border-white/20 backdrop-blur-xl hover:scale-110 transition-all duration-500 shadow-xl w-14 h-14 bg-transparent"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-purple-600 drop-shadow-sm" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-400 drop-shadow-sm" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
