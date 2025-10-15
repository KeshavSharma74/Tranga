import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative pt-24 lg:pt-0 flex flex-col justify-center min-h-screen overflow-hidden"
    >
      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center w-full ">
          
          {/* Text Section */}
          <div className="flex  flex-col justify-center gap-8 text-center lg:text-left lg:w-[50%]">
            <motion.h1
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="text-4xl text-gray-900 sm:text-[2.7rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.2rem] hero-heading font-extrabold "
            >
              TAP. ACQUIRE. ENHANCE. <br />
              <span className="bg-clip-text text-[1.3rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem] text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Seamless for Guests. Profitable for You.
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="text-sm text-gray-600 md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Tranga Pods is your flexible asset taking unused space, guaranteeing guest retention and maximized revenue. Choose the Convenience Pod (nightlife essentials that ensure guests stay put and enhance your income streams), the Fragrance Pod (luxury refreshes), or both systems. Our exclusive, sought-after product catalogue dynamically adapts to trends, driving high customer traffic to your venue.
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
                to="contact" // Updated to scroll to contact section
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="bg-white transition-all duration-300 font-semibold py-3 px-8 rounded-full shadow-md hover:cursor-pointer hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-500/20 inline-block text-center border border-gray-200"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-xl md:2xl h-full hover:cursor-pointer text-purple-600 hover:text-purple-600"
                >
                  Unlock new revenue
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* ===== IMAGE SECTION - NOW WITH TWO IMAGES ===== */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.6, 0.05, 0.01, 0.9]
            }}
            className=" flex flex-col sm:flex-row justify-center items-center lg:w-[60%] mt-10 lg:mt-0 gap-5" // Added gap-8 for spacing between images
          >
            {/* Convenience Pod Image */}
            <motion.img
              src="conveniancePod.png"
              alt="Convenience Pod"
              className=" h-full object-contain" // Adjusted max-width for two images
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;