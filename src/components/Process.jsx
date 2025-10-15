import React, { useState, useEffect, useRef } from 'react';
import './Process.css';
import { IoSettingsOutline } from "react-icons/io5";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-20%" });

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 4000); 

        return () => clearInterval(interval);
    }, [isInView]);

    const steps = [
        {
            icon: <IoSettingsOutline size={32} />,
            title: "Zero-Burden Deployment",
            description: "We begin with an expert site survey to identify the ideal high-traffic placement. We manage the complete deployment, including all permits and a certified electrician—at zero cost or effort to your staff.",
            color: "#8B5CF6",
            gradient: "from-violet-500 to-purple-600"
        },
        {
            icon: <BsWrenchAdjustableCircle size={32} />,
            title: "Fully-Managed Operations",
            description: "Forget the hassle. We provide proactive, end-to-end management: automated product restocking, routine asset servicing, and 24/7 technical oversight. Your Tranga Pod is always online, active, and earning for you.",
            color: "#3B82F6",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaRegHandshake size={32} />,
            title: "Lucrative Revenue Share",
            description: "This is a true partnership founded on shared success. With zero upfront investment required, your venue begins generating passive income immediately. We offer a highly competitive, performance-based revenue share.",
            color: "#10B981",
            gradient: "from-emerald-500 to-teal-500"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <section className=" max-w-[1350px] mx-auto process-section" ref={sectionRef}>
            <div className="process-container">
                {/* Header Section */}
                <motion.div 
                    className="process-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                    viewport={{ once: true }}
                >
                    <h2 className="process-main-title">
                        A True Partnership: <span className="gradient-text">Zero Risk, All Reward</span>
                    </h2>
                    <p className="process-main-subtitle">
                        We deliver the unique experience directly to your location. Our commitment policy is simple: Should the asset not deliver on its promise, we remove it—no questions asked.
                    </p>
                    
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        <motion.div
                            className=" bg-purple-600 px-6 py-2 max-w-[14rem] rounded-full text-[1.1rem] text-white font-semibold hover:cursor-pointer mx-auto "
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Become a Partner
                        </motion.div>
                    </ScrollLink>
                </motion.div>

                {/* Steps Grid */}
                <motion.div 
                    className="process-steps-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`process-step-card ${activeStep === index ? 'active' : ''}`}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            onClick={() => setActiveStep(index)}
                        >
                            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                            
                            <motion.div 
                                className={`step-icon bg-gradient-to-br ${step.gradient}`}
                                animate={{
                                    scale: activeStep === index ? [1, 1.1, 1] : 1,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: activeStep === index ? Infinity : 0,
                                    ease: "easeInOut"
                                }}
                            >
                                {step.icon}
                            </motion.div>

                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>

                            <div className="step-progress-bar">
                                <motion.div 
                                    key={activeStep} 
                                    className={`step-progress-fill bg-gradient-to-r ${step.gradient}`}
                                    initial={{ width: "0%" }}
                                    animate={{ 
                                        width: activeStep === index ? "100%" : "0%" 
                                    }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Progress Dots */}
                <div className="progress-dots">
                    {steps.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`progress-dot ${activeStep === index ? 'active' : ''}`}
                            onClick={() => setActiveStep(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="sr-only">Step {index + 1}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;