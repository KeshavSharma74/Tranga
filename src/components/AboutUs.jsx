import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi'; // A better icon for accordions

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null); // No FAQ is open by default

  // --- UPDATED FAQ DATA BASED ON CLIENT BRIEF ---
  const faqsData = [
    { 
      question: "What are the running costs for my venue?", 
      answer: "Zero. The only operational cost is the minimal electricity to power the pod. Tranga Pods covers 100% of the expenses for installation, maintenance, and all product refills." 
    },
    { 
      question: "How does the profit sharing work?", 
      answer: "Our model is a straightforward revenue share. We offer a highly competitive commission rate starting at 30%. There are no hidden fees—you simply start earning from day one. Contact us to discuss the specific commission split for your venue." 
    },
    { 
      question: "Can we customize the product selection?", 
      answer: "Absolutely. For our Fragrance Pods, we'll help you select scents that align with your brand. For Convenience Pods, we stock a curated range of essentials and can discuss specific product needs to make your venue a destination." 
    },
    { 
      question: "How are the machines secured?", 
      answer: "Our pods are built for high foot traffic areas. Each unit is professionally installed to be tamper-resistant and includes an integrated alarm system, ensuring complete security for your venue." 
    },
    { 
      question: "Who is responsible for repairs and maintenance?", 
      answer: "We do. Our partnership is completely hassle-free. Tranga Pods takes full responsibility for all servicing and repairs. If any issue arises, our dedicated support team will resolve it promptly at no cost to you." 
    },
    { 
        question: "I have more questions, who can I ask?", 
        answer: "We're ready to help! Please navigate to our Contact page to send us a message or request a callback. We look forward to discussing how a Tranga Pod can benefit your business." 
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const faqItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    // Background gradient remains consistent with other components
    <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-rose-300 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Text color for header changed to gray-800 for readability */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight">
            Our Mission: <span className="gradient-text">Empowering Venues</span> with Innovative Revenue
          </h1>
        </motion.div>

        {/* Our Story / Mission Section - Now single column without image */}
        <div className="max-w-4xl mx-auto text-center"> {/* Centering text for single column */}
          
          {/* --- Text Content --- */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
              Our Commitment to Partnership
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tranga Pods was founded by seasoned entrepreneurs with a simple mission: to create genuine value for our partners. We saw an opportunity to transform underutilized space into a powerful, hassle-free revenue stream. Our core principles are transparency, fairness, and an unwavering commitment to our partners' success.
            </p>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                A History of Success
              </h3>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                Our journey began in market-leading consumer tech, where we mastered product safety, logistics, and strategic partnerships. With Tranga Pods, we apply that same dedication to help venues like yours elevate the customer experience and unlock new revenue channels with our premium Fragrance and Convenience Pods.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- FAQ Section --- */}
        <div id="faq" className="mt-20 sm:mt-28">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                Your Questions, Answered
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about our risk-free partnership model.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {faqsData.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/70 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-6 shadow-md" // Added card styling
                  variants={faqItemVariant}
                >
                  <button 
                    className="flex items-center justify-between w-full text-left gap-4 group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-purple-600' : 'text-gray-800 group-hover:text-purple-600'}`}>
                      {faq.question}
                    </h3>
                    <FiChevronDown className={`flex-shrink-0 text-2xl transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180 text-purple-600' : 'rotate-0 text-gray-400 group-hover:text-purple-600'}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.section
                        key={index} 
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 pr-8 pt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;