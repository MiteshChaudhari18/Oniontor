import { motion } from "framer-motion";
import { Github, Globe, Mail, Heart } from "lucide-react";

export function Footer() {
  const handleGithubClick = () =>
    window.open(
      "https://github.com/MiteshChaudhari18/De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network.git",
      "_blank",
      "noopener,noreferrer"
    );

  const handleWebsiteClick = () =>
    window.open("https://drive.google.com/file/d/1mvrw_vDG3roNvDcDvRtKLLve_N8DE_Hw/view?usp=sharing", "_blank", "noopener,noreferrer");

  const handleEmailClick = () =>
    window.open("mailto:krunal2012003@gmail.com", "_blank", "noopener,noreferrer");

  return (
    <footer className="relative overflow-hidden text-green-100 py-16 bg-transparent">
      {/* Optional glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Container without green background */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="backdrop-blur-lg border border-green-500/20 rounded-2xl p-10 shadow-lg shadow-green-500/10 bg-transparent">
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-200 via-green-400 to-green-300 bg-clip-text text-white-green"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              De-anonymizing Entities on Onion Sites Operating on the TOR Network
            </motion.h3>
            <p className="text-green-300/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Innovating privacy research through deep web analysis and ethical intelligence tools.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 md:gap-10 mb-12"
          >
            {[{ icon: Github, onClick: handleGithubClick },
              { icon: Globe, onClick: handleWebsiteClick },
              { icon: Mail, onClick: handleEmailClick }].map(({ icon: Icon, onClick }, idx) => (
                <motion.button
                  key={idx}
                  onClick={onClick}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full hover:bg-green-700/20 transition-colors duration-300 text-green-300 hover:text-green-100 shadow-lg shadow-green-500/20 hover:shadow-green-400/40 bg-transparent"
                >
                  <Icon size={24} />
                </motion.button>
              ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-green-700/40 pt-6"
          >
            <p className="text-green-500/80 text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Development Team. Built with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="text-green-400"
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>
              & dedication.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
