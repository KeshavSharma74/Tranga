import React from 'react';
import { BsShieldCheck, BsCreditCard } from 'react-icons/bs';
import { FiSliders, FiCpu } from 'react-icons/fi';
import { GiPerfumeBottle } from 'react-icons/gi';
import { RiMistFill } from 'react-icons/ri';
import { MdOutlineWidgets } from 'react-icons/md';
import { FaBoxOpen, FaChartLine, FaShoppingBag, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const conveniencePodData = {
  title: "The Retention Pod — ",
  highlight: "Keep Guests In, Keep Profits Up.",
  description: "Instant access to trending essentials means guests never have to leave. You gain higher sales, stronger retention, and an effortless way to grow your revenue.",
  imageSrc: "/conveniancePod.png",
  altText: "Tranga Pods Convenience Vending Machine",
  features: [
    { 
      icon: <FaChartLine size={24} className="text-white" />, 
      bgColor: 'bg-[#FF9178]', 
      title: 'Strategic Data Monetization', 
      description: 'We track what sells and when — giving you insight into peak hours, guest behavior, and what drives demand. Every purchase builds a clearer picture of your crowd.' 
    },
    { 
      icon: <FaShoppingBag size={24} className="text-white" />, 
      bgColor: 'bg-[#A6D4FA]', 
      title: 'Dynamic Catalogue Intelligence', 
      description: 'Our catalogue evolves automatically with the latest lifestyle and event trends — so your pod always feels current, exciting, and relevant to your guests.' 
    },
    { 
      icon: <BsShieldCheck size={24} className="text-white" />, 
      bgColor: 'bg-[#FFFD3A]', 
      title: 'Engineered for High Traffic', 
      description: 'Our pods are crafted with premium materials and advanced tech to handle nonstop traffic. Security, reliability, and performance — guaranteed.' 
    },
    { 
      icon: <FiCpu size={24} className="text-white" />, 
      bgColor: 'bg-[#DB2A2A]', 
      title: 'Micro-Retail Ecosystem', 
      description: 'Inspired by European luxury design, each pod transforms your space into a mini ecosystem that drives engagement, style, and spending.' 
    },
  ],
};

const convenienceData = {
  title: 'Curate, Transact, Retain',
  features: [
    { 
      icon: <MdOutlineWidgets size={28} className="text-white" />, 
      bgColor: 'bg-[#FF9178]', 
      title: '1. Curate', 
      description: 'Guests browse our exclusive, sought-after product catalogue. This unique, trending mix drives demand and acts as a high-traffic magnet for your venue.' 
    },
    { 
      icon: <BsCreditCard size={28} className="text-white" />, 
      bgColor: 'bg-[#A6D4FA]', 
      title: '2. Transact', 
      description: 'Secure payment is contactless and instantaneous. We ensure zero friction, zero queue time, and a perfectly seamless guest experience.' 
    },
    { 
      icon: <FaBoxOpen size={28} className="text-white" />, 
      bgColor: 'bg-[#FFFD3A]', 
      title: '3. Retain', 
      description: 'By solving the forgotten-item crisis, your captive audience stays longer, spends more, and actively increases the spend at your venue.' 
    },
  ],
};

const fragrancePodData = {
  title: "The Reset Pod — ",
  highlight: "Scents That Elevate the Room.",
  description: "A rotating library of premium fragrances gives guests an effortless refresh. It's a subtle luxury touch that leaves a lasting impression.",
  imageSrc: "/fragnancePod.png",
  altText: "Tranga Pods Fragrance Vending Machine",
  features: [
    { 
      icon: <FaChartLine size={24} className="text-white" />, 
      bgColor: 'bg-[#A6D4FA]', 
      title: 'Advanced Demographic Intelligence', 
      description: 'Our fragrance data reveals what guests love most — helping you design smarter events, tailor promotions, and enhance your brand\'s atmosphere.' 
    },
    { 
      icon: <FaPalette size={24} className="text-white" />, 
      bgColor: 'bg-[#FF9178]', 
      title: 'Future-Proofed Luxury', 
      description: 'We constantly update our fragrance lineup with global trends. Every scent rotation keeps your space modern, relevant, and sophisticated.' 
    },
    { 
      icon: <BsShieldCheck size={24} className="text-white" />, 
      bgColor: 'bg-[#FFFD3A]', 
      title: 'Instant Brand Elevation', 
      description: 'Each pod turns ordinary space into a polished, high-value touchpoint — a small change that instantly upgrades your venue\'s image.' 
    },
    { 
      icon: <FiSliders size={24} className="text-white" />, 
      bgColor: 'bg-[#DB2A2A]', 
      title: 'Unseen Operational Luxury', 
      description: 'Completely automated and low-maintenance — from restocks to payments. It runs itself while enhancing your guest experience.' 
    },
  ],
};

const fragranceData = {
  title: 'Curate. Transact. Refresh.',
  features: [
    { 
      icon: <GiPerfumeBottle size={28} className="text-white" />, 
      bgColor: 'bg-[#FF9178]', 
      title: '1. Curate', 
      description: 'Guests browse our rotating library of exclusive, trend-setting fragrances. They instantly find the perfect curated luxury scent to match the moment.' 
    },
    { 
      icon: <BsCreditCard size={28} className="text-white" />, 
      bgColor: 'bg-[#A6D4FA]', 
      title: '2. Transact', 
      description: 'Payment is instantaneous, secure, and entirely frictionless. Our contactless technology completes the transaction in under a second, upholding the ultimate luxury service standard.' 
    },
    { 
      icon: <RiMistFill size={28} className="text-white" />, 
      bgColor: 'bg-[#FFFD3A]', 
      title: '3. Refresh', 
      description: 'Guests receive an exclusive, memory-making scent they can\'t get anywhere else. This signature sensory experience creates a positive association, driving repeat engagement with your venue.' 
    },
  ],
};

const FeatureCard = ({ icon, bgColor, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
    className='bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left h-full group hover:shadow-xl transition-all duration-300'
    style={{ color: '#14132C' }}
  >
    <div 
      className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
      style={{ backgroundColor: bgColor.includes('bg-[') ? bgColor.replace('bg-[', '').replace(']', '') : bgColor }}
    >
      {icon}
    </div>
    <h3 className='mt-5 text-xl font-semibold' style={{ color: '#14132C' }}>{title}</h3>
    <p className='mt-2 text-base' style={{ color: '#14132C' }}>{description}</p>
  </motion.div>
);

const ProductShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  
  const highlightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  
  const highlightItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* ---------- Solid color circles (no gradients) ---------- */}
      {/* Top-left large circle (E9F5FF) + smaller peach (FFE8E1) */}
      <div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          top: '-9rem',
          left: '-9rem',
          width: '680px',
          height: '680px',
          borderRadius: '9999px',
          backgroundColor: '#E9F5FF',
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          top: '-3rem',
          left: '-3rem',
          width: '420px',
          height: '420px',
          borderRadius: '9999px',
          backgroundColor: '#FFE8E1',
          opacity: 1,
        }}
      />

      {/* Bottom-right large circle (FFFFD9) + smaller light-blue accent */}
      <div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          bottom: '-9rem',
          right: '-9rem',
          width: '720px',
          height: '720px',
          borderRadius: '9999px',
          backgroundColor: '#FFFFD9',
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute z-0 pointer-events-none"
        style={{
          bottom: '-3rem',
          right: '-3rem',
          width: '420px',
          height: '420px',
          borderRadius: '9999px',
          backgroundColor: '#E9F5FF',
          opacity: 1,
        }}
      />

      {/* Main content (above the circles) */}
      <div className='max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative z-10' style={{ color: '#14132C' }}>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold tracking-tight"
          style={{ color: '#14132C' }}
        >
          Small Space. <span style={{ color: '#FF9178' }}>Big Profit.</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg"
          style={{ color: '#14132C' }}
        >
          Turn any corner into a sleek, high-earning retail hub. Our pods stop revenue leaks by keeping guests inside your venue — spending more, staying longer, and elevating their experience.
        </motion.p>
        
        {/* Retention Pod Section */}
        <div id="convenience-pod" className="mt-24">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className='text-4xl sm:text-5xl font-bold tracking-tight'
            style={{ color: '#14132C' }}
          >
            {conveniencePodData.title}<span style={{ color: '#FF9178' }}>{conveniencePodData.highlight}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.1 }} 
            viewport={{ once: true }} 
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: '#14132C' }}
          >
            {conveniencePodData.description}
          </motion.p>
        </div>
        
        {/* Revenue Section for Retention Pod */}
        <div className="mt-12">
          <motion.div
            className="rounded-2xl shadow-xl p-12 text-center text-white"
            variants={highlightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ backgroundColor: '#A6D4FA' }}
          >
            <motion.h2 variants={highlightItemVariants} className="text-base font-semibold tracking-wider uppercase opacity-80">
              PROVEN REVENUE GENERATION
            </motion.h2>
            <motion.p variants={highlightItemVariants} className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              $68,800
            </motion.p>
            <motion.p variants={highlightItemVariants} className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl opacity-90">
              That's the average earning for venues over a three-year period with our Retention Pods.
            </motion.p>
          </motion.div>
        </div>

        {/* Retention Pod Features */}
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
          <div className='flex flex-col gap-10'>
            <FeatureCard {...conveniencePodData.features[0]} />
            <FeatureCard {...conveniencePodData.features[1]} />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            viewport={{ once: true, amount: 0.3 }} 
            className="flex items-center justify-center"
          >
            <img src={conveniencePodData.imageSrc} alt={conveniencePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
          </motion.div>
          <div className='flex flex-col gap-10'>
            <FeatureCard {...conveniencePodData.features[2]} />
            <FeatureCard {...conveniencePodData.features[3]} />
          </div>
        </div>

        {/* How It Works - Retention Pod */}
        <motion.div 
          variants={containerVariants} 
          id="how-it-works" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {convenienceData.features.map((feature, index) => (
            <motion.div 
              key={`convenience-how-${index}`} 
              variants={itemVariants} 
              className="bg-white min-h-[18rem] p-8 rounded-2xl shadow-lg border border-gray-100 text-left transform hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl"
              style={{ color: '#14132C' }}
            >
              <div 
                className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                style={{ backgroundColor: feature.bgColor.includes('bg-[') ? feature.bgColor.replace('bg-[', '').replace(']', '') : feature.bgColor }}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold" style={{ color: '#14132C' }}>{feature.title}</h3>
              <p className="mt-3 text-base" style={{ color: '#14132C' }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="my-20 sm:my-28 border-t border-gray-200"></div>

        {/* Reset Pod Section */}
        <div id="discover-the-pods" className="mt-24">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className='text-4xl sm:text-5xl font-bold tracking-tight'
            style={{ color: '#14132C' }}
          >
            {fragrancePodData.title}<span style={{ color: '#FF9178' }}>{fragrancePodData.highlight}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.1 }} 
            viewport={{ once: true }} 
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: '#14132C' }}
          >
            {fragrancePodData.description}
          </motion.p>
        </div>

        {/* Revenue Section for Reset Pod */}
        <div className="mt-12">
          <motion.div
            className="rounded-2xl shadow-xl p-12 text-center text-white"
            variants={highlightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ backgroundColor: '#A6D4FA' }} // Light Blue background
          >
            <motion.h2 variants={highlightItemVariants} className="text-base font-semibold tracking-wider uppercase opacity-80">
              PROVEN REVENUE GENERATION
            </motion.h2>
            <motion.p variants={highlightItemVariants} className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              $73,080
            </motion.p>
            <motion.p variants={highlightItemVariants} className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl opacity-90">
              That's the average earning for venues over a three-year period with our Reset Pods.
            </motion.p>
          </motion.div>
        </div>

        {/* Reset Pod Features */}
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
          <div className='flex flex-col gap-10'>
            <FeatureCard {...fragrancePodData.features[0]} />
            <FeatureCard {...fragrancePodData.features[1]} />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            viewport={{ once: true, amount: 0.3 }} 
            className="flex items-center justify-center"
          >
            <img src={fragrancePodData.imageSrc} alt={fragrancePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
          </motion.div>
          <div className='flex flex-col gap-10'>
            <FeatureCard {...fragrancePodData.features[2]} />
            <FeatureCard {...fragrancePodData.features[3]} />
          </div>
        </div>

        {/* How It Works - Reset Pod */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {fragranceData.features.map((feature, index) => (
            <motion.div 
              key={`fragrance-how-${index}`} 
              variants={itemVariants} 
              className="bg-white min-h-[18rem] p-8 rounded-2xl shadow-lg border border-gray-100 text-left transform hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl"
              style={{ color: '#14132C' }}
            >
              <div 
                className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                style={{ backgroundColor: feature.bgColor.includes('bg-[') ? feature.bgColor.replace('bg-[', '').replace(']', '') : feature.bgColor }}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold" style={{ color: '#14132C' }}>{feature.title}</h3>
              <p className="mt-3 text-base" style={{ color: '#14132C' }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default ProductShowcase;
