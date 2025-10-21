import React from 'react';
import { IoAnalyticsOutline, IoGitNetworkOutline } from "react-icons/io5";
import { FaRegSmileBeam, FaRegThumbsUp } from "react-icons/fa";
import { motion } from 'framer-motion';
import SafetySection from './SafetySection';

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

            {/* --- Section 3: Uncompromising on Safety --- */}
            <SafetySection/>
        </>
    );
};

export default WhyTranga;