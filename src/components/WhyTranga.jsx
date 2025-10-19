import React from 'react';
import { IoAnalyticsOutline, IoGitNetworkOutline } from "react-icons/io5";
import { FaRegSmileBeam, FaRegThumbsUp } from "react-icons/fa";
import { motion } from 'framer-motion';

// Using the new HEX color scheme
const features = [
    {
        icon: <IoGitNetworkOutline size={32} className="text-white" />,
        bgColor: '#FF9178', // Burnt Orange
        title: "Two Pods. Double the Profit.",
        description: "Unlock two high-performing revenue streams — convenience and fragrance — from one partnership. This built-in balance boosts foot traffic and keeps your income strong through every season."
    },
    {
        icon: <IoAnalyticsOutline size={32} className="text-white" />,
        bgColor: '#A6D4FA', // Light Blue
        title: "Turn Space into Smart Profit.",
        description: "Transform unused corners into data-powered marketing assets. Real-time insights help you plan better events, target your ideal guests, and keep them coming back."
    },
    {
        icon: <FaRegSmileBeam size={32} className="text-white" />,
        bgColor: '#FFFD3A', // Electric Yellow
        title: "Always Fresh. Always On-Trend.",
        description: "Our curated mix of international bestsellers and exclusive drops keeps your amenity relevant, stylish, and impossible to ignore."
    },
    {
        icon: <FaRegThumbsUp size={32} className="text-white" />,
        bgColor: '#DB2A2A', // Scarlet Red
        title: "Zero Risk. All Reward.",
        description: "Enjoy a fully managed system with zero upfront cost, zero hassle, and zero liability. We handle everything — you keep the profits and the brand uplift."
    }
];

const safetyFeatures = [
    "Exceeds US Safety Standards",
    "Certified Hardwired Power", 
    "Full Liability Insurance",
    "100% Risk Assumption by Tranga Pods"
];

const WhyTranga = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <>
            {/* --- Section 1: The Tranga Difference with Blue Background --- */}
            <section className="flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#A6D4FA' }}>
                <div className="max-w-[1350px] mx-auto text-center"> 
                    
                    {/* --- Header --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ color: '#14132C' }}>
                            Why Venues Choose <span style={{ color: '#FF9178' }}>Tranga.</span>
                        </h2>
                        <p className="mt-6 text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#14132C' }}>
                            We redefine what convenience looks like: two high-yield pods, data-powered insights, and a zero-risk system that enhances your venue and your bottom line.
                        </p>
                    </motion.div>
                    
                    {/* --- Features Grid --- */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    > 
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-left transform hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col hover:shadow-xl"
                                style={{ color: '#14132C' }}
                            >
                                <div 
                                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 mb-6 flex-shrink-0"
                                    style={{ backgroundColor: feature.bgColor }}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: '#14132C' }}> 
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: '#14132C' }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 2: Partnership Section --- */}
            <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#14132C' }}>
                            A Partnership That <span style={{ color: '#FF9178' }}>Pays.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Zero-Burden Deployment</h3>
                                <p style={{ color: '#14132C' }}>From permits to installation, we take care of every detail — with zero effort or cost on your end.</p>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Fully-Managed Operations</h3>
                                <p style={{ color: '#14132C' }}>We restock, maintain, and monitor 24/7 so your pod never stops earning.</p>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Lucrative Revenue Share</h3>
                                <p style={{ color: '#14132C' }}>No upfront cost, no risk — just a performance-based partnership where we win together.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Section 3: Uncompromising on Safety --- */}
            <section id="safety" className="py-24 sm:py-32 px-4" style={{ backgroundColor: '#14132C', color: 'white' }}>
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Certified. <span style={{ color: '#FF9178' }}>Insured. Trusted.</span>
                    </h2>
                    <p className="mt-5 text-lg leading-8 opacity-90 max-w-3xl mx-auto">
                        Every Tranga Pod meets top U.S. safety standards and runs on fully certified, hardwired systems — ensuring seamless, worry-free integration.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {safetyFeatures.map((text, index) => (
                            <motion.div 
                                key={text}
                                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 text-base font-medium backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span style={{ color: '#FFFD3A' }} className="font-bold text-lg">✓</span>
                                <span className="text-white">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default WhyTranga;