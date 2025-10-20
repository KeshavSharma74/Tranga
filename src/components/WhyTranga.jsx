// import React from 'react';
// import { IoAnalyticsOutline, IoGitNetworkOutline } from "react-icons/io5";
// import { FaRegSmileBeam, FaRegThumbsUp } from "react-icons/fa";
// import { motion } from 'framer-motion';
// import SafetySection from './SafetySection';

// // Using the new HEX color scheme
// const features = [
//     {
//         icon: <IoGitNetworkOutline size={32} className="text-white" />,
//         bgColor: '#FF9178', // Burnt Orange
//         title: "Two Pods. Double the Profit.",
//         description: "Unlock two high-performing revenue streams — convenience and fragrance — from one partnership. This built-in balance boosts foot traffic and keeps your income strong through every season."
//     },
//     {
//         icon: <IoAnalyticsOutline size={32} className="text-white" />,
//         bgColor: '#A6D4FA', // Light Blue
//         title: "Turn Space into Smart Profit.",
//         description: "Transform unused corners into data-powered marketing assets. Real-time insights help you plan better events, target your ideal guests, and keep them coming back."
//     },
//     {
//         icon: <FaRegSmileBeam size={32} className="text-white" />,
//         bgColor: '#FFFD3A', // Electric Yellow
//         title: "Always Fresh. Always On-Trend.",
//         description: "Our curated mix of international bestsellers and exclusive drops keeps your amenity relevant, stylish, and impossible to ignore."
//     },
//     {
//         icon: <FaRegThumbsUp size={32} className="text-white" />,
//         bgColor: '#DB2A2A', // Scarlet Red
//         title: "Zero Risk. All Reward.",
//         description: "Enjoy a fully managed system with zero upfront cost, zero hassle, and zero liability. We handle everything — you keep the profits and the brand uplift."
//     }
// ];

// const safetyFeatures = [
//     "Exceeds US Safety Standards",
//     "Certified Hardwired Power", 
//     "Full Liability Insurance",
//     "100% Risk Assumption by Tranga Pods"
// ];

// const WhyTranga = () => {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15 }
//         }
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: { 
//             opacity: 1, 
//             y: 0, 
//             transition: { duration: 0.6, ease: "easeOut" } 
//         }
//     };

//     return (
//         <>
//             {/* --- Section 1: The Tranga Difference with Blue Background --- */}
//             <section className="flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#A6D4FA' }}>
//                 <div className="max-w-[1350px] mx-auto text-center"> 
                    
//                     {/* --- Header --- */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                     >
//                         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ color: '#14132C' }}>
//                             Why Venues Choose <span style={{ color: '#FF9178' }}>Tranga.</span>
//                         </h2>
//                         <p className="mt-6 text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#14132C' }}>
//                             We redefine what convenience looks like: two high-yield pods, data-powered insights, and a zero-risk system that enhances your venue and your bottom line.
//                         </p>
//                     </motion.div>
                    
//                     {/* --- Features Grid --- */}
//                     <motion.div 
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-20"
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.2 }}
//                     > 
//                         {features.map((feature, index) => (
//                             <motion.div 
//                                 key={index} 
//                                 variants={itemVariants}
//                                 className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-left transform hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col hover:shadow-xl"
//                                 style={{ color: '#14132C' }}
//                             >
//                                 <div 
//                                     className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 mb-6 flex-shrink-0"
//                                     style={{ backgroundColor: feature.bgColor }}
//                                 >
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-2" style={{ color: '#14132C' }}> 
//                                     {feature.title}
//                                 </h3>
//                                 <p className="leading-relaxed" style={{ color: '#14132C' }}>
//                                     {feature.description}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>

//             {/* --- Section 2: Partnership Section --- */}
//             <section className="bg-gradient-to-r from-[#E9F5FF] via-[#FFE8E1] to-[#FFFFD9]  py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                     >
//                         <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#14132C' }}>
//                             A Partnership That <span style={{ color: '#FF9178' }}>Pays.</span>
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
//                             >
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Zero-Burden Deployment</h3>
//                                 <p style={{ color: '#14132C' }}>From permits to installation, we take care of every detail — with zero effort or cost on your end.</p>
//                             </motion.div>
                            
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.2 }}
//                                 viewport={{ once: true }}
//                                 className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
//                             >
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Fully-Managed Operations</h3>
//                                 <p style={{ color: '#14132C' }}>We restock, maintain, and monitor 24/7 so your pod never stops earning.</p>
//                             </motion.div>
                            
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.3 }}
//                                 viewport={{ once: true }}
//                                 className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
//                             >
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: '#14132C' }}>Lucrative Revenue Share</h3>
//                                 <p style={{ color: '#14132C' }}>No upfront cost, no risk — just a performance-based partnership where we win together.</p>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* --- Section 3: Uncompromising on Safety --- */}
//            <SafetySection/>
//         </>
//     );
// };

// export default WhyTranga;


import React from 'react';
import { IoAnalyticsOutline, IoGitNetworkOutline } from "react-icons/io5";
import { FaRegSmileBeam, FaRegThumbsUp } from "react-icons/fa";
import { motion } from 'framer-motion';

// Using the content and icon colors from your latest version
const features = [
    {
        icon: <IoGitNetworkOutline size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-[#FF9E01] to-[#F05258]',
        title: "Strategic Revenue Diversity",
        description: "We unlock two distinct, high-yield revenue streams (convenience and fragrance) from a single partnership. This built-in diversity maximizes foot traffic and insulates your income from market fluctuations."
    },
    {
        icon: <IoAnalyticsOutline size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-[#F05258] to-[#FF9E01]',
        title: "Next-Gen Retail Intelligence",
        description: "We transform your underutilized space into a data-driven marketing asset. The intelligence gathered allows you to co-create future services and events that guarantee high guest engagement."
    },
    {
        icon: <FaRegSmileBeam size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-[#FF9E01] to-[#F05258]',
        title: "Curated Guest Experience",
        description: "Our curated, dynamic catalog of international trends and exclusive items guarantees the amenity is a perpetually fresh, sophisticated draw for your target demographic."
    },
    {
        icon: <FaRegThumbsUp size={32} className="text-white" />,
        bgColor: 'bg-gradient-to-br from-[#F05258] to-[#FF9E01]',
        title: "Unconditional, Zero-Risk Commitment",
        description: "We guarantee the simplest partnership in retail: Zero liability, zero operational burden, and zero upfront cost. We assume all risk, allowing you to focus purely on the guaranteed revenue and brand uplift."
    }
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
            {/* --- Section 1: The Tranga Difference with dark theme --- */}
            <section className="bg-gray-900 text-white flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-[1350px] mx-auto text-center"> 
                    
                    {/* --- Header --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            The Tranga Difference: Why We Are the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9E01] to-[#F05258]">Unrivaled Partner</span>
                        </h2>
                    </motion.div>
                    
                    {/* --- Features Grid with dark theme cards --- */}
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
                                className="bg-gray-800 border border-gray-700 shadow-xl rounded-2xl p-8 text-left transform hover:-translate-y-2 transition-transform duration-300 group h-full flex flex-col"
                            >
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.bgColor} shadow-lg transition-transform duration-300 group-hover:scale-110 mb-6 flex-shrink-0`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2"> 
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 2: Uncompromising on Safety with dark theme --- */}
            <section id="safety" className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-24 sm:py-32 px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Uncompromising on <span className="text-[#FF9E01]">Safety</span>
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-gray-300">
                        We demand absolute confidence in our assets. Every Tranga Pod is rigorously tested and fully certified to exceed all US safety standards. For seamless integration, each unit operates on a hardwired, fully certified power system, guaranteeing a secure and reliable addition to any environment.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {['US Certified', 'Hardwired Power', 'Fully Insured'].map((text, index) => (
                            <motion.div 
                                key={text}
                                className="bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 flex items-center gap-2 text-sm sm:text-base"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[#FF9E01] font-bold">✓</span>
                                <span className="text-gray-200">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default WhyTranga;