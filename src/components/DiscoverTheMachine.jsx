import React from 'react';
// Import icons
import { BsShieldCheck } from 'react-icons/bs';
import { FiShoppingBag, FiPenTool, FiSliders } from 'react-icons/fi';
// Import motion
import { motion } from 'framer-motion';

// The reusable card component is now a motion component for easy animation
const FeatureCard = ({ icon, bgColor, title, description }) => (
  <motion.div 
    className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left transform hover:-translate-y-2 transition-transform duration-300'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bgColor}`}>
      {icon}
    </div>
    <h2 className='mt-6 text-xl font-semibold text-gray-900'>{title}</h2>
    <p className='mt-2 text-gray-500'>{description}</p>
  </motion.div>
);

const DiscoverTheMachine = () => {
  // New, rephrased feature content
  const features = [
    { 
      icon: <FiShoppingBag size={24} className="text-white" />,
      bgColor: 'bg-purple-500',
      title: 'Certified & Compliant',
      description: 'Fully compliant with all UK regulations, our machine is certified for safe operation, providing peace of mind for any establishment.',
    },
    { 
      icon: <FiPenTool size={24} className="text-white" />,
      bgColor: 'bg-blue-500',
      title: 'Effortless User Experience',
      description: 'Featuring a user-friendly interface that’s simple to navigate, we guarantee a seamless and enjoyable interaction for every customer.',
    },
    { 
      icon: <BsShieldCheck size={24} className="text-white" />,
      bgColor: 'bg-green-500',
      title: 'Robust Security Features',
      description: 'Engineered with durable, shatter-resistant glass and a built-in alarm, the machine is designed to be secure and tamper-proof.',
    },
    { 
      icon: <FiSliders size={24} className="text-white" />,
      bgColor: 'bg-pink-500',
      title: 'Customized for Your Brand',
      description: 'Tailor the experience with 5 curated fragrances and choose from 20 ambient LED colors to perfectly match your venue\'s aesthetic.',
    },
  ];

  return (
    <div className='max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center overflow-hidden'>
      
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl font-bold text-gray-800 mb-16'
      >
        Revolutionizing Public Aromas with<br className="hidden sm:block" />
        Innovation, Safety, and Style
      </motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
        
        {/* Left Column */}
        <div className='flex flex-col gap-10'>
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[2]} />
        </div>

        {/* Center Column: Image */}
        <motion.div 
          className="hidden lg:flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src="/hero.png" 
            alt="Tranga Machine" 
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Right Column */}
        <div className='flex flex-col gap-10'>
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[3]} />
        </div>

      </div>
    </div>
  );
};

export default DiscoverTheMachine;