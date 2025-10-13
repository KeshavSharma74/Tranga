import React from 'react';
// Import all necessary icons
import { BsCreditCard } from 'react-icons/bs';
import { GiPerfumeBottle } from 'react-icons/gi';
import { RiMistFill } from 'react-icons/ri';
import { MdOutlineWidgets } from 'react-icons/md';
import { FaBoxOpen } from 'react-icons/fa';
// Import motion for animations
import { motion } from 'framer-motion';

// --- UPDATED Data for the Fragrance Section ---
const fragranceData = {
  title: 'The Fragrance Pod: A Touch of Luxury',
  subtitle: 'Offer a premium, high-end amenity that elevates your customer experience and sets your venue apart from the competition.',
  features: [
    {
      icon: <GiPerfumeBottle size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-rose-500 to-pink-500',
      title: '1. Select a Scent',
      description: 'Guests browse a curated library of high-end fragrances on a sleek, intuitive HD touchscreen, finding the perfect scent to match the moment.',
    },
    {
      icon: <BsCreditCard size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-violet-500 to-purple-500',
      title: '2. Tap to Pay',
      description: 'A simple, secure contactless payment makes the transaction effortless, accepting all major cards and mobile payment methods.',
    },
    {
      icon: <RiMistFill size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-sky-500 to-blue-500',
      title: '3. Elevate the Experience',
      description: 'A perfectly measured mist provides an immediate touch of luxury, creating a memorable experience that enhances your venue\'s premium atmosphere.',
    },
  ],
};

// --- UPDATED Data for the Convenience Section ---
const convenienceData = {
  title: 'The Convenience Pod: Never Lose a Customer',
  subtitle: 'Provide a safety net of essential items, ensuring your guests stay longer, spend more, and always have what they need.',
  features: [
    {
      icon: <MdOutlineWidgets size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-cyan-500 to-blue-500',
      title: '1. Pick an Essential',
      description: 'Guests browse unique, high-demand items from emergency chargers and mints to exclusive lifestyle essentials that act as a high foot traffic driver.',
    },
    {
      icon: <BsCreditCard size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-fuchsia-500 to-purple-500',
      title: '2. Tap to Pay',
      description: 'Our secure, user-friendly interface processes contactless payments in seconds, keeping the process quick and seamless.',
    },
    {
      icon: <FaBoxOpen size={28} className="text-white" />,
      bgColor: 'bg-gradient-to-tr from-amber-500 to-orange-500',
      title: '3. Stay and Spend',
      description: 'By providing an immediate solution, you eliminate any reason for guests to leave. This captured audience stays longer and ultimately increases their spend at your venue.',
    },
  ],
};

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-rose-50 overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">

        {/* --- MAIN HEADER (WITH GRADIENT) --- */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-gray-800 tracking-tight"
        >
          An Effortless Experience, <span className="gradient-text">A Seamless Profit</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
        >
          Our pods are designed for simplicity. See how your customers' intuitive three-step journey translates directly into a new, hassle-free revenue stream for your venue.
        </motion.p>

        {/* --- FRAGRANCE SECTION --- */}
        <div className="mt-24">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800"
          >
            {fragranceData.title}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-md text-gray-500"
          >
            {fragranceData.subtitle}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {fragranceData.features.map((feature, index) => (
              <motion.div key={`fragrance-${index}`} variants={itemVariants} className="bg-white/60 backdrop-blur-sm p-8 xl:min-h-[18rem] rounded-2xl shadow-xl border border-gray-100/80 text-left transform hover:-translate-y-2 transition-transform duration-300 group">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>{feature.icon}</div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- CONVENIENCE SECTION --- */}
        <div className="mt-24">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800"
          >
            {convenienceData.title}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-md text-gray-500"
          >
            {convenienceData.subtitle}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {convenienceData.features.map((feature, index) => (
              <motion.div key={`convenience-${index}`} variants={itemVariants} className="bg-white/60 min-h-[18rem] backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/80 text-left transform hover:-translate-y-2 transition-transform duration-300 group">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>{feature.icon}</div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;