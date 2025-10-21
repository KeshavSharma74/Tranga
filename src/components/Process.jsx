import React, { useState, useEffect, useRef } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Process = () => {
  // raw progress (0-100) computed from smoothed scroll position
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const timelineRef = useRef(null);
  const point1Ref = useRef(null);
  const point2Ref = useRef(null);
  const point3Ref = useRef(null);

  // smoothing refs for scroll/animation loop
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // linear interpolation
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const updateProgressFromScrollPos = (scrollPosition) => {
      if (!point1Ref.current || !point2Ref.current || !point3Ref.current || !timelineRef.current) {
        setProgress1(0);
        setProgress2(0);
        return;
      }

      const p1Top = point1Ref.current.offsetTop;
      const p2Top = point2Ref.current.offsetTop;
      const p3Top = point3Ref.current.offsetTop;

      // distances in pixels
      const totalDistance1 = p2Top - p1Top || 1;
      const traveled1 = scrollPosition - p1Top;
      const progressPercentage1 = (traveled1 / totalDistance1) * 100;
      setProgress1(Math.max(0, Math.min(100, progressPercentage1)));

      const totalDistance2 = p3Top - p2Top || 1;
      const traveled2 = scrollPosition - p2Top;
      const progressPercentage2 = (traveled2 / totalDistance2) * 100;
      setProgress2(Math.max(0, Math.min(100, progressPercentage2)));
    };

    const onScroll = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      // keep the same anchor logic you used previously
      const target = window.innerHeight * 0.7 - timelineTop;
      targetScrollRef.current = target;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      // 0.08 smoothing factor -> slower, smoother. Lower => slower.
      currentScrollRef.current = lerp(currentScrollRef.current, targetScrollRef.current, 0.08);
      updateProgressFromScrollPos(currentScrollRef.current);

      if (Math.abs(currentScrollRef.current - targetScrollRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // final snap and stop
        currentScrollRef.current = targetScrollRef.current;
        updateProgressFromScrollPos(currentScrollRef.current);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // initial trigger so lines render correctly on mount
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const steps = [
    {
      icon: <IoSettingsOutline size={28} />,
      title: "Zero-Burden Deployment",
      description: "We Handle Everything. From permits to installation, we take care of every detail — with zero effort or cost on your end.",
      ref: point1Ref,
      color: 'bg-[#FF9178]', // Burnt Orange
      progressColor: '#FF9178'
    },
    {
      icon: <BsWrenchAdjustableCircle size={28} />,
      title: "Fully-Managed Operations",
      description: "Fully Managed. Always On. We restock, maintain, and monitor 24/7 so your pod never stops earning.",
      ref: point2Ref,
      color: 'bg-[#A6D4FA]', // Light Blue
      progressColor: '#A6D4FA'
    },
    {
      icon: <FaRegHandshake size={28} />,
      title: "Lucrative Revenue Share",
      description: "Shared Success. Shared Profit. No upfront cost, no risk — just a performance-based partnership where we win together.",
      ref: point3Ref,
      color: 'bg-[#FFFD3A]', // Electric Yellow
      progressColor: '#FFFD3A'
    },
  ];

  // helper to compute pixel height for a progress segment
  const getSegmentHeight = (startRef, endRef, progress) => {
    if (!startRef?.current || !endRef?.current) return 0;
    const height = endRef.current.offsetTop - startRef.current.offsetTop;
    return height * (progress / 100);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 sm:py-28 bg-gradient-to-r from-[#E9F5FF] via-[#FFE8E1] to-[#FFFFD9] px-3 md:px-10 lg:px-20">
      {/* Left Content */}
      <motion.div 
        className="flex flex-col items-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#14132C' }}>
          A Partnership That <span style={{ color: '#FF9178' }}>Pays.</span>
        </h2>
        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#14132C', opacity: 0.8 }}>
          We install, manage, and optimize — you earn. If it doesn't perform, we remove it. Simple, seamless, and success-driven.
        </p>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={800}  // slower link scroll
          offset={-80}
        >
          <motion.button 
            className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            style={{ 
              backgroundColor: '#FF9178',
              color: '#14132C'
            }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#FFFD3A',
              boxShadow: '0 10px 20px rgba(255, 253, 58, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Earning Today
          </motion.button>
        </ScrollLink>
      </motion.div>

      {/* Right Timeline */}
      <div className="relative" ref={timelineRef}>
        {/* Background Lines (static) */}
        <div 
          className="absolute bg-gray-200 w-0.5 z-10"
          style={{ 
            top: point1Ref.current?.offsetTop ?? 0, 
            height: point2Ref.current && point1Ref.current ? (point2Ref.current.offsetTop - point1Ref.current.offsetTop) : 0,
            left: '1.75rem'
          }} 
        />
        <div 
          className="absolute bg-gray-200 w-0.5 z-10"
          style={{ 
            top: point2Ref.current?.offsetTop ?? 0, 
            height: point3Ref.current && point2Ref.current ? (point3Ref.current.offsetTop - point2Ref.current.offsetTop) : 0,
            left: '1.75rem'
          }} 
        />

        {/* Animated Progress Lines using framer-motion */}
        <motion.div
          className="absolute w-0.5 z-20"
          initial={{ height: 0 }}
          animate={{
            height: getSegmentHeight(point1Ref, point2Ref, progress1)
          }}
          transition={{ duration: 1.5, ease: "easeOut" }} // increase duration to slow more
          style={{
            top: point1Ref.current?.offsetTop ?? 0,
            left: '1.75rem',
            backgroundColor: '#FF9178'
          }}
        />

        <motion.div
          className="absolute w-0.5 z-20"
          initial={{ height: 0 }}
          animate={{
            height: getSegmentHeight(point2Ref, point3Ref, progress2)
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            top: point2Ref.current?.offsetTop ?? 0,
            left: '1.75rem',
            backgroundColor: '#A6D4FA'
          }}
        />

        {/* Steps */}
        {steps.map((step, index) => (
          <div 
            key={index} 
            ref={step.ref}
            className={`flex items-start gap-6 relative ${index < steps.length - 1 ? 'pb-16' : ''}`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 z-30 relative">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color} shadow-lg`}>
                <div style={{ color: '#14132C' }}>
                  {step.icon}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="pt-1">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#14132C' }}>
                {step.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#14132C', opacity: 0.8 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;