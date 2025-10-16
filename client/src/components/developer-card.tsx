import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { type Developer } from "@/data/project-data";

interface DeveloperCardProps {
  developer: Developer;
  index: number;
}

const greenGlow = "from-green-400 via-green-500 to-green-600";
const roleGreen = "from-green-500 to-green-400";

export function DeveloperCard({ developer, index }: DeveloperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      {/* Card container with black background intact */}
      <div className="rounded-3xl p-10 relative overflow-hidden bg-black/70 border border-green-500/20 backdrop-blur-lg shadow-lg shadow-green-500/20 transition-all duration-500 hover:shadow-green-400/40">

        <div className="relative text-center">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative inline-block mb-6"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${greenGlow} rounded-full blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
            ></div>
            <div className="relative w-40 h-40 rounded-full mx-auto p-1 bg-gradient-to-r from-green-200/30 to-green-200/10 shadow-2xl shadow-green-500/30">
              <img
                src={developer.profileImage}
                alt={`${developer.name} - ${developer.role}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            className="text-xl font-bold text-green-100 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {developer.name}
          </motion.h3>

          {/* Role */}
          
          <p
            className={`font-semibold mb-4 bg-gradient-to-r ${roleGreen} bg-clip-text text-transparent`}
          >
            {developer.role}
            
          </p>

          {/* Bio */}
          <p className="text-green-300/80 text-sm mb-6 leading-relaxed">
            {developer.bio}
          </p>

          {/* LinkedIn and Resume */}
          <div className="flex justify-center gap-4 flex-wrap mb-4">
            {developer.linkedinUrl && (
              <motion.button
                onClick={() =>
                  window.open(developer.linkedinUrl, "_blank", "noopener,noreferrer")
                }
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-400/30"
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </motion.button>
            )}

            {developer.resumeUrl && (
              <motion.button
                onClick={() =>
                  window.open(developer.resumeUrl, "_blank", "noopener,noreferrer")
                }
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-gray-500/30"
              >
                <HiOutlineDocumentText className="text-lg" />
                <span>Resume</span>
              </motion.button>
            )}
          </div>

          {/* Portfolio */}
          {developer.portfilo && (
            <motion.button
              onClick={() =>
                window.open(developer.portfilo, "_blank", "noopener,noreferrer")
              }
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-flex items-center space-x-3 bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-400/30"
            >
              <HiOutlineDocumentText className="text-lg" />
              <span> Portfolio </span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>                                                                                                     
  );
}
