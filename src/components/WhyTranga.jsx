import React, { useState } from 'react';
// Importing icons from react-icons
import { IoShieldCheckmarkOutline, IoRocketOutline } from "react-icons/io5";
import { FaHandshake, FaStar } from "react-icons/fa";
// Importing motion components from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

// Rewritten data for the accordion items
const features = [
    {
        icon: <IoShieldCheckmarkOutline size={20} />,
        title: "Crystal-Clear Analytics",
        description: "Gain access to a comprehensive real-time dashboard. Effortlessly monitor your machine’s performance, track revenue, and view detailed usage data. With Tranga, our partnership is always transparent."
    },
    {
        icon: <FaHandshake size={20} />,
        title: "A True 50/50 Partnership",
        description: "We succeed when you succeed. Our business model is founded on a straightforward 50/50 profit share, ensuring a partnership that is mutually beneficial and built on trust."
    },
    {
        icon: <FaStar size={20} />,
        title: "Dedicated Support System",
        description: "Your success is our top priority. Our team provides round-the-clock support and proactive maintenance to ensure your new revenue stream is always performing at its best."
    },
    {
        icon: <IoRocketOutline size={20} />,
        title: "Exceeding Expectations",
        description: "Our philosophy is simple: we deliver more than we promise. We set achievable benchmarks and consistently aim to surpass them, maximizing the value Tranga brings to your venue."
    }
];

const WhyTranga = () => {
    // State to manage which accordion item is open.
    const [openIndex, setOpenIndex] = useState(1);

    // Animation variants for the container of the accordion items
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // Animation variants for each accordion item
    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            {/* --- Section 1: The Tranga Partnership --- */}
            <section className="bg-gray-900 text-white flex items-center py-20 px-6 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full"> 
                    <motion.h2 
                        className="text-4xl w-full max-w-3xl mx-auto md:text-5xl font-bold text-center mb-16 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        The Tranga Partnership: A Smarter Way to Boost Your Venue's Revenue
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Accordion */}
                        <motion.div 
                            className="flex flex-col gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        > 
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={itemVariants}
                                    className="border border-gray-700 rounded-lg p-6 cursor-pointer bg-gray-800 hover:border-blue-600 transition-colors duration-300"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`transition-all duration-300 flex items-center justify-center h-12 w-12 rounded-full text-xl ${openIndex === index ? 'bg-blue-600' : 'bg-gray-700 text-gray-400'}`}> 
                                            {feature.icon}
                                        </div>
                                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-300'}`}> 
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, paddingTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', paddingTop: '24px' }}
                                                exit={{ opacity: 0, height: 0, paddingTop: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-300 pl-16 text-lg leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img 
                                src="why.png" 
                                alt="Analytics Dashboard" 
                                className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-[600px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Uncompromising on Safety --- */}
            <section id="safety" className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white py-24 sm:py-32 px-4">
                <motion.div 
                    className="relative z-10 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Uncompromising on Safety</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
                        We understand that introducing new technology requires absolute confidence. That is why every Tranga machine is rigorously tested and fully certified to meet and exceed all UK safety standards, ensuring it is a secure addition to any environment.
                    </p>
                </motion.div>
            </section>
        </>
    );
};

export default WhyTranga;