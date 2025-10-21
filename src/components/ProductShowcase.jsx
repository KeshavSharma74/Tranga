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
<div
  className="relative overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at left center, rgba(166, 212, 250, 0.35) 0%, transparent 55%),
      radial-gradient(circle at right center, rgba(255, 145, 120, 0.32) 0%, transparent 55%),
      radial-gradient(circle at left center, rgba(255, 253, 58, 0.18) 0%, transparent 70%),
      radial-gradient(circle at right center, rgba(20, 19, 44, 0.2) 0%, transparent 70%),
      linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)
    `,
    backgroundBlendMode: "soft-light, normal",
  }}
>


      {/* ---------- Solid color circles (no gradients) ---------- */}
      {/* Top-left big circle (E9F5FF) and a slightly smaller peach circle (FFE8E1) on top */}
      <div
        aria-hidden="true"
        className="absolute -top-36 -left-36 rounded-full pointer-events-none -z-10"
        style={{
          width: 680,
          height: 680,
          backgroundColor: '#E9F5FF', // large light-blue circle
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 rounded-full pointer-events-none -z-10"
        style={{
          width: 420,
          height: 420,
          backgroundColor: '#FFE8E1', // smaller peach circle layered near top-left
          opacity: 1,
        }}
      />

      {/* Bottom-right big circle (FFFFD9) and a slightly offset light-blue accent */}
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -right-36 rounded-full pointer-events-none -z-10"
        style={{
          width: 720,
          height: 720,
          backgroundColor: '#FFFFD9', // large yellow circle
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 rounded-full pointer-events-none -z-10"
        style={{
          width: 420,
          height: 420,
          backgroundColor: '#E9F5FF', // accent light-blue circle
          opacity: 1,
        }}
      />

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
        <div id="discover-the-pods" className="mt-24">
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
            style={{ backgroundColor: '#A6D4FA' }} // Light Blue background
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
        <div id="" className="mt-24">
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

// import React from 'react';
// // Import all necessary icons from both files
// import { BsShieldCheck, BsCreditCard } from 'react-icons/bs';
// import { FiShoppingBag, FiPenTool, FiSliders, FiCpu } from 'react-icons/fi';
// import { GiPerfumeBottle } from 'react-icons/gi';
// import { RiMistFill } from 'react-icons/ri';
// import { MdOutlineWidgets } from 'react-icons/md';
// import { FaBoxOpen } from 'react-icons/fa';
// // Import motion for animations
// import { motion } from 'framer-motion';

// // --- Data from DiscoverTheMachine Component ---
// const fragrancePodData = {
//   title: "Elevate Your Atmosphere: ",
//   highlight: "The Fragrance Pod",
//   description: "Transform your venue's ambiance with an on-demand luxury experience. The Fragrance Pod is a sophisticated, high-end amenity that enhances your brand, delights your guests, and creates a memorable visit that keeps them coming back.",
//   imageSrc: "/fragnancePod.png",
//   altText: "Tranga Pods Fragrance Vending Machine",
//   features: [
//     { icon: <FiPenTool size={24} className="text-white" />, bgColor: 'bg-blue-500', title: 'Sleek, Premium Design', description: 'Our pod’s minimalist aesthetic complements any high-end decor, turning unused space into a sophisticated and profitable focal point.' },
//     { icon: <FiSliders size={24} className="text-white" />, bgColor: 'bg-pink-500', title: 'Curated Scent Library', description: 'Align the experience with your brand by choosing from our exclusive collection of luxurious fragrances and customizable ambient LED lighting.' },
//     { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-green-500', title: 'Secure & Tamper-Proof', description: 'Engineered with durable materials and a built-in alarm system, our pods are designed for total security in any public environment.' },
//     { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-purple-500', title: 'Fully Certified & Insured', description: 'All pods are fully compliant with UK regulations and insured by us, offering you a completely risk-free and reliable operation.' },
//   ],
// };

// const conveniencePodData = {
//   title: "Capture Every Opportunity: ",
//   highlight: "The Convenience Pod",
//   description: "Turn minor inconveniences into a major revenue stream. The Convenience Pod acts as a safety net, stocking essential and unique items that prevent customers from leaving your venue, driving up their dwell time and total spend.",
//   imageSrc: "/conveniancePod.png",
//   altText: "Tranga Pods Convenience Vending Machine",
//   features: [
//     { icon: <FiShoppingBag size={24} className="text-white" />, bgColor: 'bg-cyan-500', title: 'Strategic Product Curation', description: 'We stock high-demand essentials and exclusive items not found elsewhere, turning your pod into a unique attraction and foot traffic driver.' },
//     { icon: <FiCpu size={24} className="text-white" />, bgColor: 'bg-fuchsia-500', title: 'Automated Inventory', description: 'Our smart system monitors stock levels in real-time, ensuring your pod is always ready to serve and making the entire process hassle-free for you.' },
//     { icon: <BsShieldCheck size={24} className="text-white" />, bgColor: 'bg-amber-500', title: 'Built for High Traffic', description: 'Designed with a rugged chassis and a secure contactless payment terminal to protect your investment and ensure continuous operation.' },
//     { icon: <FiSliders size={24} className="text-white" />, bgColor: 'bg-indigo-500', title: 'Flawless Vending Experience', description: 'Our jam-free dispensing mechanism guarantees a smooth, frustration-free transaction that reflects well on your venue.' },
//   ],
// };

// // --- Data from HowItWorks Component ---
// const fragranceData = {
//   title: 'The Fragrance Pod: A Touch of Luxury',
//   subtitle: 'Offer a premium, high-end amenity that elevates your customer experience and sets your venue apart from the competition.',
//   features: [
//     { icon: <GiPerfumeBottle size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-rose-500 to-pink-500', title: '1. Select a Scent', description: 'Guests browse a curated library of high-end fragrances on a sleek, intuitive HD touchscreen, finding the perfect scent to match the moment.' },
//     { icon: <BsCreditCard size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-violet-500 to-purple-500', title: '2. Tap to Pay', description: 'A simple, secure contactless payment makes the transaction effortless, accepting all major cards and mobile payment methods.' },
//     { icon: <RiMistFill size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-sky-500 to-blue-500', title: '3. Elevate the Experience', description: 'A perfectly measured mist provides an immediate touch of luxury, creating a memorable experience that enhances your venue\'s premium atmosphere.' },
//   ],
// };

// const convenienceData = {
//   title: 'The Convenience Pod: Never Lose a Customer',
//   subtitle: 'Provide a safety net of essential items, ensuring your guests stay longer, spend more, and always have what they need.',
//   features: [
//     { icon: <MdOutlineWidgets size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-cyan-500 to-blue-500', title: '1. Pick an Essential', description: 'Guests browse unique, high-demand items from emergency chargers and mints to exclusive lifestyle essentials that act as a high foot traffic driver.' },
//     { icon: <BsCreditCard size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-fuchsia-500 to-purple-500', title: '2. Tap to Pay', description: 'Our secure, user-friendly interface processes contactless payments in seconds, keeping the process quick and seamless.' },
//     { icon: <FaBoxOpen size={28} className="text-white" />, bgColor: 'bg-gradient-to-tr from-amber-500 to-orange-500', title: '3. Stay and Spend', description: 'By providing an immediate solution, you eliminate any reason for guests to leave. This captured audience stays longer and ultimately increases their spend at your venue.' },
//   ],
// };


// // --- Reusable card component from DiscoverTheMachine ---
// const FeatureCard = ({ icon, bgColor, title, description }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//     viewport={{ once: true, amount: 0.5 }}
//     className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100/80 text-left h-full group'
//   >
//     <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor} shadow-lg transition-transform duration-300 group-hover:scale-105`}>{icon}</div>
//     <h3 className='mt-5 text-xl font-semibold text-gray-900'>{title}</h3>
//     <p className='mt-2 text-base text-gray-600'>{description}</p>
//   </motion.div>
// );


// const ProductShowcase = () => {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//     };
//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
//     };

//   return (
//     <div id="how-it-works" className="bg-gradient-to-br from-green-200 via-sky-200 to-purple-200  overflow-hidden">
//       <div className='max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center'>
        
//         {/* --- MAIN HEADER (from HowItWorks) --- */}
//         <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-5xl sm:text-6xl font-bold text-gray-800 tracking-tight"
//         >
//           An Effortless Experience, <span className="gradient-text">A Seamless Profit</span>
//         </motion.h1>
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
//         >
//           Our pods are designed for simplicity. See how your customers' intuitive journey translates directly into a new, hassle-free revenue stream for your venue.
//         </motion.p>
        
//         {/* --- SECTION 1: HOW IT WORKS (CONVENIENCE) --- */}
//         <div className="mt-24">
//           <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="text-3xl sm:text-4xl font-bold text-gray-800">
//             {convenienceData.title}
//           </motion.h2>
//           <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 max-w-2xl mx-auto text-md text-gray-500">
//             {convenienceData.subtitle}
//           </motion.p>
//           <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//             {convenienceData.features.map((feature, index) => (
//               <motion.div key={`convenience-${index}`} variants={itemVariants} className="bg-white/60 min-h-[18rem] backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/80 text-left transform hover:-translate-y-2 transition-transform duration-300 group">
//                 <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>{feature.icon}</div>
//                 <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
//                 <p className="mt-3 text-base text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* <div className="my-20 sm:my-28 border-t border-gray-200"></div> */}

//         {/* --- SECTION 2: DISCOVER THE MACHINE (CONVENIENCE) --- */}
//         <div id="discover-the-pods" className="mt-20 text-center">
//             <motion.h1 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight'>
//                 {conveniencePodData.title}<span className="">{conveniencePodData.highlight}</span>
//             </motion.h1>
//             <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//                 {conveniencePodData.description}
//             </motion.p>
//         </div>
//         <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
//             <div className='flex flex-col gap-10'>
//                 <FeatureCard {...conveniencePodData.features[0]} />
//                 <FeatureCard {...conveniencePodData.features[2]} />
//             </div>
//             <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="flex items-center justify-center">
//                 <img src={conveniencePodData.imageSrc} alt={conveniencePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
//             </motion.div>
//             <div className='flex flex-col gap-10'>
//                 <FeatureCard {...conveniencePodData.features[1]} />
//                 <FeatureCard {...conveniencePodData.features[3]} />
//             </div>
//         </div>

//         <div className="my-20 sm:my-28 border-t border-gray-200"></div>

//         {/* --- SECTION 3: HOW IT WORKS (FRAGRANCE) --- */}
//         <div className="mt-24">
//           <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="text-3xl sm:text-4xl font-bold text-gray-800">
//             {fragranceData.title}
//           </motion.h2>
//           <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-4 max-w-2xl mx-auto text-md text-gray-500">
//             {fragranceData.subtitle}
//           </motion.p>
//           <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//             {fragranceData.features.map((feature, index) => (
//               <motion.div key={`fragrance-${index}`} variants={itemVariants} className="bg-white/60 backdrop-blur-sm p-8 xl:min-h-[18rem] rounded-2xl shadow-xl border border-gray-100/80 text-left transform hover:-translate-y-2 transition-transform duration-300 group">
//                 <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>{feature.icon}</div>
//                 <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
//                 <p className="mt-3 text-base text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* <div className="my-20 sm:my-28 border-t border-gray-200"></div> */}

//         {/* --- SECTION 4: DISCOVER THE MACHINE (FRAGRANCE) --- */}
//         <div className="mt-20 text-center">
//             <motion.h1 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight'>
//                 {fragrancePodData.title}<span className="">{fragrancePodData.highlight}</span>
//             </motion.h1>
//             <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//                 {fragrancePodData.description}
//             </motion.p>
//         </div>
//         <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
//             <div className='flex flex-col gap-10'>
//                 <FeatureCard {...fragrancePodData.features[0]} />
//                 <FeatureCard {...fragrancePodData.features[2]} />
//             </div>
//             <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="flex items-center justify-center">
//                 <img src={fragrancePodData.imageSrc} alt={fragrancePodData.altText} className="max-h-[600px] lg:max-h-[700px] object-contain" />
//             </motion.div>
//             <div className='flex flex-col gap-10'>
//                 <FeatureCard {...fragrancePodData.features[1]} />
//                 <FeatureCard {...fragrancePodData.features[3]} />
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;