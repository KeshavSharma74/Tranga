import React from 'react';
// Import icons
import { IoWaterOutline } from 'react-icons/io5';
import { BsCreditCard } from 'react-icons/bs';
import { FaWandMagicSparkles } from 'react-icons/fa6';
// Import motion
import { motion } from 'framer-motion';

const HowItWorks = () => {
  // Features content (remains the same)
  const features = [
    {
      icon: <IoWaterOutline size={24} className="text-white" />,
      bgColor: 'bg-blue-500',
      title: '1. Choose Your Scent',
      description: 'Explore our exclusive library of premium perfumes. Our intuitive, modern interface makes discovering and choosing your desired aroma an effortless pleasure.',
    },
    {
      icon: <BsCreditCard size={24} className="text-white" />,
      bgColor: 'bg-purple-500',
      title: '2. Make a Payment',
      description: 'Complete your purchase instantly with a quick tap. Our secure, contactless terminal guarantees a seamless and swift transaction for every user.',
    },
    {
      icon: <FaWandMagicSparkles size={24} className="text-white" />,
      bgColor: 'bg-pink-500',
      title: '3. Enjoy the Fragrance',
      description: 'Receive a perfect mist of your chosen scent. This touch of accessible luxury enhances any visit, creating a memorable moment that elevates your venue.',
    },
  ];
  
  // Animation variants for the container of the feature cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make the children animate one after the other
      },
    },
  };

  // Animation variants for each feature card
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
  };

  return (
    <div className='max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center overflow-hidden'>
      
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-4xl sm:text-5xl font-bold text-gray-800'
      >
        The Tranga Experience: A Simple<br className="hidden sm:block" />
        <span className='text-blue-600'>Tap, Select, and Spray</span>
      </motion.h1>
      
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='mt-6 max-w-3xl mx-auto text-lg text-gray-600'
      >
        Becoming a social media sensation, Tranga provides an unforgettable attraction that draws in new visitors and gives your loyal clientele another reason to return.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10'
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left transform hover:-translate-y-2 transition-transform duration-300'
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${feature.bgColor}`}>
              {feature.icon}
            </div>
            <h2 className='mt-6 text-2xl font-semibold text-gray-900'>{feature.title}</h2>
            <p className='mt-2 text-gray-500'>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default HowItWorks;