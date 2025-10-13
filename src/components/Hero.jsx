import React from 'react';
import TestimonialCard from './TestimonialCard'; // Make sure this component exists and is correctly implemented
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll and rename it

const Hero = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative pt-10 lg:pt-0 flex flex-col justify-center bg-[url('/backgroundImage.jpg')] bg-cover bg-center overflow-hidden min-h-screen"
    >
      {/* Dark Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-8 text-center lg:text-left lg:w-1/2">
            <motion.h1
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              // Changed text to white for contrast
              className="text-4xl text-[#14132C] sm:text-[4.5rem] md:text-[4.9rem] lg:text-[5.2rem] xl:text-[6rem] hero-heading font-extrabold leading-tight"
            >
              TAP. CHOOSE. ENJOY. <br /> IT'S THAT EASY.
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
               // Changed text to white for contrast
              className="text-sm text-[#14132C] md:text-xl  max-w-xl mx-auto lg:mx-0"
            >
              Turn unused space into profit and elevate your customer experience. Our sleek Pods unlock new revenue by providing on-demand luxury fragrance refreshes and nightlife essentials, offering instant convenience your guests will appreciate.
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.9,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            >
              <ScrollLink
                to="discover-the-machine"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 font-semibold py-3 px-8 rounded-full shadow-md hover:cursor-pointer hover:from-violet-600 hover:to-fuchsia-600 inline-block text-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-xl md:2xl h-full hover:cursor-pointer text-white bg-transparent border-none"
                >
                  Unlock new revenue
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* ===== IMAGE SECTION - CORRECTED ===== */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.6, 0.05, 0.01, 0.9]
            }}
            // The container is a column by default, and a row on medium screens up.
            // Added a gap for spacing between the images.
            className="flex flex-col md:flex-row gap-4 mb-10 lg:mb-0 justify-center items-center lg:w-1/2"
          >
            <motion.img
              src="fragnance.png"
              alt="Fragrance Vending Machine"
              // On mobile: 80% width, capped at 20rem.
              // On desktop: 50% width to share space, capped at 24rem.
              className="w-4/5 max-w-xs md:w-1/2 md:max-w-sm h-auto object-contain"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }}
            />
            <motion.img
              src="conveniance.png"
              alt="Convenience Vending Machine"
              // Same responsive classes applied here.
              className="w-4/5 max-w-xs md:w-1/2 md:max-w-sm h-auto object-contain"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section (Scrollable) */}
      {/* ... */}
    </motion.div>
  );
};

export default Hero;