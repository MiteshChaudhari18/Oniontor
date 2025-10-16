import { motion } from "framer-motion";
import { projectData } from "@/data/project-data";

const colorMap = {
  blue: "from-lime-400 to-emerald-500",
  green: "from-green-400 to-teal-500",
  purple: "from-teal-500 to-green-600",
};

export function ProjectOverview() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Project Overview
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-16 max-w-10xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Onion Site De-anonymizer is a cybersecurity and OSINT tool designed to investigate .onion websites on the Tor network. It allows users to enter hidden service URLs, validates them, and securely connects through Tor to crawl their content. The tool analyzes gathered pages for patterns, metadata, leaks, or other clues that might reveal information about the site’s owner or link it to the regular internet. Using a deanonymization module, it attempts to correlate findings with public data sources, providing potential identity leads. Results are displayed in an interactive Streamlit dashboard with visual charts and tables, and can be exported for reporting or further investigation.
            </motion.p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {projectData.features.map((feature, index) => {
                const gradientClass =
                  colorMap[feature.color as keyof typeof colorMap];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -15, scale: 1.05, rotateY: 6 }}
                    className="p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-green-500/60 group relative overflow-hidden
                      bg-gradient-to-br from-[#1a2b27]/40 to-[#122822]/40 backdrop-blur-md border border-lime-400/20 hover:border-green-400"
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl`}
                    ></div>

                    <h3 className="text-2xl font-bold mb-4 text-green-700 group-hover:drop-shadow-[0_0_12px_rgba(0,255,0,1)] transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Video Section - Updated with Glow & Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="mb-16 relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-green-500/40 to-emerald-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.video
                src="/project.mp4"
                controls
                loop
                muted
                autoPlay
                playsInline
                className="rounded-3xl shadow-lg w-full max-w-4xl mx-auto border border-green-500/30"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl p-10 relative overflow-hidden bg-gradient-to-br from-[#1a2b27]/40 to-[#122822]/40 backdrop-blur-md border border-lime-400/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-green-400 to-white-300 bg-clip-text text-transparent mb-3">
                Built with Modern Technology
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {projectData.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white border border-green-500/30 hover:border-green-500/50 transition-all duration-100 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
