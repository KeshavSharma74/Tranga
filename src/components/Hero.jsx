import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll and rename it

const Hero = () => {
  const testimonials = [
    {
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      text: 'The quality of the fragrance is impressive!',
      gradient: 'bg-gradient-to-r from-blue-400 to-purple-500',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      text: 'I love how easy it is to use!',
      gradient: 'bg-gradient-to-r from-green-300 to-blue-400',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      text: 'The selection of perfumes is great!',
      gradient: 'bg-gradient-to-r from-pink-400 to-red-500',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      text: 'The machine is a life-saver for a quick refresh!',
      gradient: 'bg-gradient-to-r from-purple-400 to-indigo-500',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
      text: 'Such a brilliant and convenient idea!',
      gradient: 'bg-gradient-to-r from-yellow-300 to-orange-400',
    },
    {
      avatar:
        'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
      text: 'Exceeded my expectations, truly.',
      gradient: 'bg-gradient-to-r from-cyan-400 to-teal-500',
    },
  ];

  const seamlessTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative pt-10 lg:pt-0 flex flex-col justify-between bg-[url('/bgImage.png')] bg-cover bg-center overflow-hidden min-h-screen"
    >
      {/* Dark Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center max-w-[1350px] mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-14 items-center w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-8 text-center lg:text-left lg:w-1/2 text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl text-[#14132C] font-extrabold leading-tight"
            >
              TAP. CHOOSE. ENJOY. <br /> IT'S THAT EASY.
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#14132C] max-w-lg mx-auto lg:mx-0 opacity-90"
            >
              Turn unused space into profit with our Convenience Pods — sleek, automated vending units that deliver premium products with zero hassle.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            >
              {/* Using ScrollLink for the button */}
              <ScrollLink
                to="discover-the-machine" // Target ID to scroll to
                spy={true}
                smooth={true}
                offset={-80} // Adjust for fixed header height if any
                duration={500}
                className="bg-gradient-to-r text-white from-violet-500 to-fuchsia-500 transition-all duration-300 font-semibold py-3 px-8 rounded-lg shadow-md hover:cursor-pointer hover:from-violet-600 hover:to-fuchsia-600 inline-block text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full h-full" // Ensure button fills the ScrollLink area
                >
                  Unlock new revenue
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-5 mb-10 lg:mb-0 justify-center items-center lg:w-1/2"
          >
            <img
              src="hero.png"
              alt="Fragrance Vending Machine"
              className="max-w-xs md:max-w-sm w-full"
            />
            <img
              src="hero1.png"
              alt="Fragrance Vending Machine"
              className="max-w-xs md:max-w-sm w-full hidden md:block"
            />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative bottom-8 left-0 w-full overflow-hidden py-8 z-10"
      >
        <div className="flex w-fit animate-scroll-left gap-6 px-6">
          {seamlessTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              text={testimonial.text}
              gradient={testimonial.gradient}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;