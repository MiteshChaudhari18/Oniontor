import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const handleArrowClick = () => {
    const overviewSection = document.getElementById("project-overview");
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/df3029f0-b697-4dea-8fd2-a28e240bc1fc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with a slight dark tint to improve text readability */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 -z-10"
        aria-hidden="true"
      />

      <motion.h1
        className="text-7xl mb-16 font-bold w-full max-w-full mx-auto text-center bg-gradient-to-r from-green-200 via-yellow-300 to-green-200 bg-clip-text text-transparent"
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundSize: "200% 100%",
          backgroundPosition: "left center",
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        De-anonymizing Entities on Onion Sites Operating on the TOR Network
      </motion.h1>

      {/* Container for Welcome and Arrow */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          className="text-2xl md:text-3xl text-yellow-400 mt-9 leading-relaxed cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={handleArrowClick} // Optional: click text also triggers scroll
        >
          Welcome to our Project
        </motion.p>

        <div
          className="flex justify-center mt-4 cursor-pointer"
          onClick={handleArrowClick}
          aria-label="Scroll down"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleArrowClick()}
        >
          <ArrowDown className="w-8 h-8 text-yellow-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
