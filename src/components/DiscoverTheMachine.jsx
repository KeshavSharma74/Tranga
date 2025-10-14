import React from 'react';
// Import all necessary icons
import { BsShieldCheck } from 'react-icons/bs';
import { FiShoppingBag, FiPenTool, FiSliders, FiCpu } from 'react-icons/fi';
// Import motion for animations
import { motion } from 'framer-motion';

// --- UPDATED Data for the Fragrance Pod Section ---
const fragrancePodData = {
  title: "Elevate Your Atmosphere: ",
  highlight: "The Fragrance Pod",
  description: "Transform your venue's ambiance with an on-demand luxury experience. The Fragrance Pod is a sophisticated, high-end amenity that enhances your brand, delights your guests, and creates a memorable visit that keeps them coming back.",
  imageSrc: "/fragnance.png",
  altText: "Tranga Pods Fragrance Vending Machine",
  features: [
    { icon: <FiPenTool size={24} className="text-white" />, bgColor: 'bg-blue-500', title: 'Sleek, Premium Design', description: 'Our pod’s minimalist aesthetic complements any high-end decor, turning unused space into a sophisticated and profitable focal point.' },
    { icon: <FiSliders size={24} className="text-white" />, bgColor: 'bg-pink-500', title: 'Curated Scent Library', description: 'Align the experience with your brand by choosing from our exclusive collection of luxurious fragrances and customizable ambient LED lighting.' },
    { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-green-500', title: 'Secure & Tamper-Proof', description: 'Engineered with durable materials and a built-in alarm system, our pods are designed for total security in any public environment.' },
    { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-purple-500', title: 'Fully Certified & Insured', description: 'All pods are fully compliant with UK regulations and insured by us, offering you a completely risk-free and reliable operation.' },
  ],
};

// --- UPDATED Data for the Convenience Pod Section ---
const conveniencePodData = {
  title: "Capture Every Opportunity: ",
  highlight: "The Convenience Pod",
  description: "Turn minor inconveniences into a major revenue stream. The Convenience Pod acts as a safety net, stocking essential and unique items that prevent customers from leaving your venue, driving up their dwell time and total spend.",
  imageSrc: "/conveniance.png",
  altText: "Tranga Pods Convenience Vending Machine",
  features: [
    { icon: <FiShoppingBag size={24} className="text-white" />, bgColor: 'bg-cyan-500', title: 'Strategic Product Curation', description: 'We stock high-demand essentials and exclusive items not found elsewhere, turning your pod into a unique attraction and foot traffic driver.' },
    { icon: <FiCpu size={24} className="text-white" />, bgColor: 'bg-fuchsia-500', title: 'Automated Inventory', description: 'Our smart system monitors stock levels in real-time, ensuring your pod is always ready to serve and making the entire process hassle-free for you.' },
    { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-amber-500', title: 'Built for High Traffic', description: 'Designed with a rugged chassis and a secure contactless payment terminal to protect your investment and ensure continuous operation.' },
    { icon: <FiSliders size={24} className="text-white" />, bgColor: 'bg-indigo-500', title: 'Flawless Vending Experience', description: 'Our jam-free dispensing mechanism guarantees a smooth, frustration-free transaction that reflects well on your venue.' },
  ],
};

// Reusable card component
const FeatureCard = ({ icon, bgColor, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
    className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100/80 text-left h-full group'
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor} shadow-lg transition-transform duration-300 group-hover:scale-105`}>{icon}</div>
    <h3 className='mt-5 text-xl font-semibold text-gray-900'>{title}</h3>
    <p className='mt-2 text-base text-gray-600'>{description}</p>
  </motion.div>
);

const DiscoverTheMachine = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-rose-300 overflow-hidden">
      <div className='max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28'>

        {/* --- FRAGRANCE POD SECTION --- */}
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight'
          >
            {fragrancePodData.title}<span className="gradient-text">{fragrancePodData.highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {fragrancePodData.description}
          </motion.p>
        </div>

        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
          {/* Left Column */}
          <div className='flex flex-col gap-10'>
            <FeatureCard {...fragrancePodData.features[0]} />
            <FeatureCard {...fragrancePodData.features[2]} />
          </div>

          {/* Center Column: Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <img src={fragrancePodData.imageSrc} alt={fragrancePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
          </motion.div>

          {/* Right Column */}
          <div className='flex flex-col gap-10'>
            <FeatureCard {...fragrancePodData.features[1]} />
            <FeatureCard {...fragrancePodData.features[3]} />
          </div>
        </div>

        <div className="my-20 sm:my-28 border-t border-gray-200"></div>

        {/* --- CONVENIENCE POD SECTION --- */}
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight'
          >
            {conveniencePodData.title}<span className="gradient-text">{conveniencePodData.highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {conveniencePodData.description}
          </motion.p>
        </div>

        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
          {/* Left Column */}
          <div className='flex flex-col gap-10'>
            <FeatureCard {...conveniencePodData.features[0]} />
            <FeatureCard {...conveniencePodData.features[2]} />
          </div>

          {/* Center Column: Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <img src={conveniencePodData.imageSrc} alt={conveniencePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
          </motion.div>

          {/* Right Column */}
          <div className='flex flex-col gap-10'>
            <FeatureCard {...conveniencePodData.features[1]} />
            <FeatureCard {...conveniencePodData.features[3]} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiscoverTheMachine;