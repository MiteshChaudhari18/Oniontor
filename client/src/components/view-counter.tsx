import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use a free API service for counting views
    const API_URL = "https://api.countapi.xyz";
    const NAMESPACE = "oniontor-project";
    const KEY = "total-views";

    const fetchViews = async () => {
      try {
        // First, check if this user has already been counted in this session
        const hasBeenCounted = sessionStorage.getItem("viewCounted");

        // Fetch current view count
        const response = await fetch(`${API_URL}/get/${NAMESPACE}/${KEY}`);
        const data = await response.json();
        const currentViews = data.value || 0;

        setViews(currentViews);

        // If user hasn't been counted yet, increment the counter
        if (!hasBeenCounted) {
          try {
            const incrementResponse = await fetch(
              `${API_URL}/hit/${NAMESPACE}/${KEY}`,
              { method: "GET" }
            );
            const incrementData = await incrementResponse.json();
            setViews(incrementData.value || currentViews + 1);
            sessionStorage.setItem("viewCounted", "true");
          } catch (error) {
            console.error("Failed to increment views:", error);
            // Fallback: increment locally
            setViews(currentViews + 1);
            sessionStorage.setItem("viewCounted", "true");
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch views:", error);
        // Fallback: use localStorage as backup
        const localViews = parseInt(
          localStorage.getItem("localViews") || "1116",
          10
        );
        const hasBeenCounted = sessionStorage.getItem("viewCounted");

        if (!hasBeenCounted) {
          const newViews = localViews + 1;
          localStorage.setItem("localViews", newViews.toString());
          setViews(newViews);
          sessionStorage.setItem("viewCounted", "true");
        } else {
          setViews(localViews);
        }
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  // Format number with commas
  const formatViews = (count: number | null) => {
    if (count === null) return "---";
    return count.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20 transition-all duration-300 cursor-pointer hover:bg-green-500/20 hover:border-green-400 hover:shadow-green-400/40">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Eye
              className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300"
              strokeWidth={2}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xs text-green-400/70 group-hover:text-green-300/70 transition-colors duration-300">
              Views
            </span>
            <span className="text-lg font-bold text-white group-hover:text-green-100 transition-colors duration-300">
              {isLoading ? (
                <span className="inline-block w-16 h-5 bg-green-500/20 rounded animate-pulse" />
              ) : (
                formatViews(views)
              )}
            </span>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          initial={false}
        />
      </motion.div>
    </motion.div>
  );
}

