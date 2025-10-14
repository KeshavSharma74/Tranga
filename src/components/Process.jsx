import React, { useState, useEffect, useRef } from 'react';
import './Process.css';
import { IoSettingsOutline } from "react-icons/io5";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-20%" });

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 4000); // This duration should match the progress bar's animation duration

        return () => clearInterval(interval);
    }, [isInView]);

    // --- UPDATED CONTENT BASED ON CLIENT BRIEF ---
    const steps = [
        {
            icon: <IoSettingsOutline size={32} />,
            title: "Zero-Cost, Seamless Installation",
            description: "Our partnership begins with a no-obligation site survey. We then handle the complete professional installation at zero cost and with minimal disruption to your operations. You do nothing but choose the spot.",
            color: "#8B5CF6",
            gradient: "from-violet-500 to-purple-600"
        },
        {
            icon: <BsWrenchAdjustableCircle size={32} />,
            title: "Fully-Managed Operations",
            description: "Forget about maintenance. We take care of everything: automated product restocking, routine servicing, and 24/7 dedicated support, ensuring your Tranga Pod is always online and earning for you.",
            color: "#3B82F6",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaRegHandshake size={32} />,
            title: "Lucrative Revenue Sharing",
            description: "This is a true partnership where we only succeed if you do. With no upfront investment, you start earning from day one. We offer a highly competitive commission rate, starting at 30%.",
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
                        Transform your unused space into a new revenue stream with our hassle-free commitment. If it doesn't work for you, we simply remove the machine. It's that easy.
                    </p>
                    <motion.button 
                        className="process-cta-button"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Become a Partner
                    </motion.button>
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