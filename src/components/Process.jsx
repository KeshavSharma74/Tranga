import React, { useState, useEffect, useRef } from 'react';
import './Process.css';
import { IoSettingsOutline } from "react-icons/io5";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Process = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);

    const timelineRef = useRef(null);
    const point1Ref = useRef(null);
    const point2Ref = useRef(null);
    const point3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!point1Ref.current || !point2Ref.current || !point3Ref.current) {
                return;
            }

            const p1Top = point1Ref.current.offsetTop;
            const p2Top = point2Ref.current.offsetTop;
            const p3Top = point3Ref.current.offsetTop;
            
            const timelineTop = timelineRef.current.getBoundingClientRect().top;
            
            const scrollPosition = window.innerHeight * 0.7 - timelineTop;

            const totalDistance1 = p2Top - p1Top;
            const traveled1 = scrollPosition - p1Top;
            const progressPercentage1 = (traveled1 / totalDistance1) * 100;
            setProgress1(Math.max(0, Math.min(100, progressPercentage1)));

            const totalDistance2 = p3Top - p2Top;
            const traveled2 = scrollPosition - p2Top;
            const progressPercentage2 = (traveled2 / totalDistance2) * 100;
            setProgress2(Math.max(0, Math.min(100, progressPercentage2)));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const steps = [
        {
            icon: <IoSettingsOutline size={28} />,
            title: "Zero-Burden Deployment",
            description: "We begin with an expert site survey to identify the ideal high-traffic placement. We manage the complete deployment, including all permits and a certified electrician—at zero cost or effort to your staff.",
            ref: point1Ref,
            gradient: "from-[#FF9E01] to-[#F05258]"
        },
        {
            icon: <BsWrenchAdjustableCircle size={28} />,
            title: "Fully-Managed Operations",
            description: "Forget the hassle. We provide proactive, end-to-end management: automated product restocking, routine asset servicing, and 24/7 technical oversight. Your Tranga Pod is always online, active, and earning for you.",
            ref: point2Ref,
            gradient: "from-[#F05258] to-[#FF9E01]"
        },
        {
            icon: <FaRegHandshake size={28} />,
            title: "Lucrative Revenue Share",
            description: "This is a true partnership founded on shared success. With zero upfront investment required, your venue begins generating passive income immediately. We offer a highly competitive, performance-based revenue share.",
            ref: point3Ref,
            gradient: "from-[#FF9E01] to-[#F05258]"
        },
    ];

    return (
        <section className="process-section">
            <motion.div 
                className="process-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="process-title">
                    A True Partnership: <span>Zero Risk, All Reward</span>
                </h2>
                <p className="process-subtitle">
                    We deliver the unique experience directly to your location. Our commitment policy is simple: Should the asset not deliver on its promise, we remove it—no questions asked.
                </p>
                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                >
                    <button className="process-button">Become a Partner</button>
                </ScrollLink>
            </motion.div>

            <div className="process-timeline" ref={timelineRef}>
                <div className="timeline-line-bg" style={{ top: point1Ref.current?.offsetTop, height: point2Ref.current && point1Ref.current ? point2Ref.current.offsetTop - point1Ref.current.offsetTop : 0 }} />
                <div className="timeline-line-bg" style={{ top: point2Ref.current?.offsetTop, height: point3Ref.current && point2Ref.current ? point3Ref.current.offsetTop - point2Ref.current.offsetTop : 0 }} />
                
                <div className="timeline-line-progress" style={{ top: point1Ref.current?.offsetTop, height: point2Ref.current && point1Ref.current ? (point2Ref.current.offsetTop - point1Ref.current.offsetTop) * (progress1 / 100) : 0 }} />
                <div className="timeline-line-progress" style={{ top: point2Ref.current?.offsetTop, height: point3Ref.current && point2Ref.current ? (point3Ref.current.offsetTop - point2Ref.current.offsetTop) * (progress2 / 100) : 0 }} />

                {steps.map((step, index) => (
                    <div className="timeline-item" key={index} ref={step.ref}>
                        <div className="timeline-icon-container">
                            <div className={`timeline-icon bg-gradient-to-br ${step.gradient}`}>
                                {step.icon}
                            </div>
                        </div>
                        <div className="timeline-text-content">
                            <h3 className="timeline-item-title">{step.title}</h3>
                            <p className="timeline-item-description">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;