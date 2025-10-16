import { motion } from "framer-motion";
import { Rocket, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectData } from "@/data/project-data";

export function CallToAction() {
  const handleViewDemo = () => {
    window.open(projectData.liveUrl, "_blank", "noopener,noreferrer");
  };

  const handleViewSource = () => {
    window.open(projectData.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-primary text-sm font-medium mb-8 border border-primary/30"
          >
            <Star className="w-5 h-5" />
            Ready to Explore?
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience Our Project
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover the full functionality of our project — from intuitive design to powerful features, everything is crafted to deliver the best experience possible.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Demo Button */}
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleViewDemo}
                className="bg-gradient-to-r from-black to-green-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <span>View Live Demo</span>
                <Rocket className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Source Button */}
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
  <Button
    variant="outline"
    size="lg"
    onClick={handleViewSource}
    className="glass-card border-2 border-primary/30 text-green-500 px-10 py-6 rounded-full text-lg font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
  >
    <span>View Source Code</span>
    <Github className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
  </Button>
</motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
