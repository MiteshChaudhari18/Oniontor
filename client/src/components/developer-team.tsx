import { motion } from "framer-motion";
import { DeveloperCard } from "./developer-card";
import { developers } from "@/data/project-data";

export function DeveloperTeam() {
  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      
      <div className="absolute inset-0">
        
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet Our Development Team
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate developers who brought this vision to life with creativity, innovation, and technical expertise.
          </motion.p>
        </motion.div>

        {/* Updated grid layout: 2 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((developer, index) => (
            <DeveloperCard key={developer.id} developer={developer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
