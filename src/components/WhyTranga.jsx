import React from 'react';
// Importing relevant icons
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaHandshake, FaStreetView } from "react-icons/fa";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
// Importing motion components from framer-motion
import { motion } from 'framer-motion';

// --- UPDATED Data for the main feature cards (No changes needed here) ---
const features = [
    {
        icon: <IoAnalyticsOutline size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        title: "Transparent Analytics",
        description: "Access a real-time partner dashboard to monitor performance, track your earnings, and view detailed usage data with complete transparency."
    },
    {
        icon: <FaHandshake size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
        title: "Generous Profit Sharing",
        description: "Our success is tied to yours. We offer a highly competitive commission rate starting at 30%, ensuring a mutually beneficial partnership with a significant return for your venue."
    },
    {
        icon: <BsWrenchAdjustableCircle size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
        title: "Zero-Hassle Operation",
        description: "We handle everything: installation, product restocking, and 24/7 support. Your new revenue stream is completely hands-off for you and always ready for your customers."
    },
    {
        icon: <FaStreetView size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
        title: "A New Foot Traffic Driver",
        description: "Our pods are stocked with unique, high-demand items and luxurious scents. This exclusive offering makes your venue a destination, attracting new customers."
    }
];

const WhyTranga = () => {
    // Animation variants for the grid container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // Animation variants for each card in the grid
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="bg-gradient-to-r from-blue-300 via-purple-300 to-rose-300 min-h-screen flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-[1350px] mx-auto text-center"> 
                
                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-800">
                        Unlock New Revenue with a <span className="gradient-text">Zero-Risk Partnership</span>
                    </h2>
                    <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        Tranga Pods offers a completely hassle-free solution to generate new revenue, enhance customer experience, and drive foot traffic. With no upfront costs and a dedicated support system, you only profit.
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
                            className="bg-white/70 backdrop-blur-sm border border-gray-100/80 shadow-xl rounded-2xl p-8 text-left transform hover:-translate-y-2 transition-transform duration-300 group h-full flex flex-col"
                        >
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110 mb-6 flex-shrink-0`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2"> 
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- Safety Section --- */}
                <motion.div id="safety"
                    className="mt-20 md:mt-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Uncompromising on <span className="text-green-500">Safety</span>
                    </h2>
                    {/* UPDATED: Changed "UK" to "US" safety standards */}
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        We understand that introducing new technology requires absolute confidence. That is why every Tranga Pod is rigorously tested and fully certified to meet and exceed all US safety standards, ensuring it is a secure addition to any environment.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* UPDATED: Changed "UK Certified" to "UL Certified" for the US market */}
                        {['UL Certified', 'Safety Tested', 'Fully Insured'].map((text, index) => (
                            <motion.div 
                                key={text}
                                className="bg-white/70 border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 text-sm sm:text-base"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-gray-700">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyTranga;