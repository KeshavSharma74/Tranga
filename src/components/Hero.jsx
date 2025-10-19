import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative pt-10 lg:pt-0 flex flex-col justify-center bg-cover bg-center overflow-hidden min-h-screen"
      style={{ backgroundColor: '#A6D4FA' }} // Light Blue background
    >
      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center w-full">

          {/* Text Section */}
          <div className="flex flex-col w-full justify-center gap-8 text-center">
            <motion.h1
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="text-4xl text-gray-900 sm:text-[2.7rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.2rem] hero-heading font-extrabold"
              style={{ color: '#14132C' }} // Dark Blue text
            >
              Curate, Transact, Retain. <br />
              <span 
                className="text-[1.3rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem]"
                style={{ color: '#FF9178' }} // Burnt Orange for subheading
              >
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
              className="text-sm md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#14132C' }} // Dark Blue text
            >
              Tranga Pods are flexible, self-sustaining assets that turn unused space into high-performing micro-retail hubs. Choose the Convenience Pod, the Fragrance Pod, or both — and start driving revenue while keeping guests engaged.
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.9,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center"
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="transition-all duration-300 font-semibold py-3 px-8 rounded-full shadow-md hover:cursor-pointer hover:shadow-lg inline-block text-center"
                style={{ 
                  backgroundColor: '#FF9178', // Burnt Orange button
                  color: '#14132C' // Dark Blue text on button
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFFD3A'; // Electric Yellow on hover
                  e.target.style.boxShadow = '0 10px 25px rgba(255, 253, 58, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FF9178'; // Back to Burnt Orange
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-xl md:2xl h-full hover:cursor-pointer"
                >
                  + Add Discover the Pods
                </motion.button>
              </ScrollLink>
              
              {/* Secondary Button */}
              <ScrollLink
                to="product-showcase"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="transition-all duration-300 font-semibold py-3 px-8 rounded-full border-2 hover:cursor-pointer inline-block text-center"
                style={{ 
                  borderColor: '#14132C', // Dark Blue border
                  color: '#14132C', // Dark Blue text
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#14132C'; // Dark Blue background on hover
                  e.target.style.color = '#FFFFFF'; // White text on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#14132C';
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-xl md:2xl h-full hover:cursor-pointer"
                >
                  Start Earning Effortlessly
                </motion.button>
              </ScrollLink>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 1.2,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="mt-8"
            >
              <p className="text-lg font-semibold" style={{ color: '#14132C' }}>
                Micro-Retail, Maximized Profit → Small Space. Big Profit.
              </p>
              <p className="text-sm mt-2" style={{ color: '#14132C' }}>
                Turn any corner into a sleek, high-earning retail hub. Our pods stop revenue leaks by keeping guests inside your venue — spending more, staying longer, and elevating their experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: '#14132C' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: '#14132C' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;