import { useState } from "react";
import { motion } from "framer-motion";

const SafetySection = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const safetyFeatures = [
    "UL-Certified Components",
    "Hardwired Power Systems",
    "Fire-Resistant Materials",
    "Comprehensive Insurance Coverage",
    "Industry-Leading Reliability",
  ];

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      id="safety"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 sm:py-32 px-4"
      style={{
        backgroundColor: "#14132C",
        color: "white",
      }}
    >
      {/* ✨ Cursor-follow gradient effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 253, 58, 0.15), transparent 80%)`,
          transition: "background 0.1s ease-out",
        }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Certified.{" "}
          <span style={{ color: "#FF9178" }}>Insured. Trusted.</span>
        </h2>
        <p className="mt-5 text-lg leading-8 opacity-90 max-w-3xl mx-auto">
          Every Tranga Pod meets top U.S. safety standards and runs on fully
          certified, hardwired systems — ensuring seamless, worry-free
          integration.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {safetyFeatures.map((text, index) => (
            <motion.div
              key={text}
              className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 text-base font-medium backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                style={{ color: "#FFFD3A" }}
                className="font-bold text-lg"
              >
                ✓
              </span>
              <span className="text-white">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SafetySection;
