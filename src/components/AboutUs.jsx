import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll'; // Import the scroll link

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "How does the profit sharing work and what is our expected return?",
      answer: "We confidently offer a competitive revenue share of up to 35% based on venue volume, with zero investment and zero operational burden."
    },
    {
      question: "What is the true operational cost to my venue?",
      answer: "The only cost to your venue is the negligible electricity consumption. All other operational, installation, and inventory costs are covered by Tranga Pods."
    },
    {
      question: "Who is liable for the pods, maintenance, and compliance?",
      answer: "Zero Liability. Tranga Pods is liable for the pods, its parts, insurance, and all servicing; it is simply \"plug and play\" for your venue."
    },
    {
      question: "How are Tranga Pods fundamentally different from standard vending and mass-market retail?",
      answer: "We are a data-driven retail ecosystem, not a vending machine. We deliver Global Exclusivity, curating novelty and international items guests cannot find elsewhere, transforming the unit into a destination."
    },
    {
      question: "How do the Pods act as an internal safety net for our venue operations?",
      answer: "Our Pods are your dynamic risk mitigation asset. We guarantee instant, situation-specific inventory rotation (e.g. cooling relief for A/C failures) to protect your guest experience and retain sales."
    },
    {
      question: "Can the fragrance be changed, and how are the products selected?",
      answer: "Dynamic Curation. Product selection, including our fragrance line, is entirely handled by Tranga Pods and based on real-time sales data from your specific demographic, ensuring perpetual novelty and maximized revenue."
    },
    {
      question: "Do we have to take both the Convenience and Fragrance Pods?",
      answer: "No. We offer customizable asset transformation. You can choose to deploy one pods or both based on your venue's specific needs."
    },
    {
      question: "Where should we put the Pods?",
      answer: "Specialized Placement. We conduct an expert survey to place Convenience Pods in high-traffic zones and Fragrance Pods strategically in high-amenity areas like restrooms, optimizing for privacy and sales."
    },
    {
      question: "Where is the best location for Tranga Pods?",
      answer: "The unit is hardwired and built with premium security and advanced componentry; it is fully certified to exceed all US safety standards."
    }
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
    <div className="bg-gradient-to-br from-violet-200 via-sky-100 to-green-100 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight">
            Our Mission: <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9E01] to-[#F05258]">Redefining Convenience, One Pod at a Time</span>
          </h1>
        </motion.div>

        {/* Our Story / Mission Section */}
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tranga Pods was born from a simple idea — access matters. Inspired by the effortless convenience found in everyday life back home in Sierra Leone, we recognized the impact of having what you need, exactly when and where you need it. That spirit of accessibility inspired us to reimagine how convenience could look and feel in today’s spaces. We created Tranga Pods to deliver essential products directly to people through sleek, automated experiences.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our mission is to help businesses unlock effortless new revenue streams while enhancing the customer experience. By combining design, data, and adaptability, we transform underutilized spaces into stylish, profitable touch-points that elevate both brands and experiences. At Tranga Pods, we believe convenience should be stylish, seamless, and mutually beneficial.
            </p>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                Strategic Genesis: The Luxury Retail Ecosystem
              </h3>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                Our vision is rooted in proprietary insights gained from the European luxury retail sector. We apply the proven model of market leaders who integrate complimentary, high-end amenities to successfully delay guest departure and capture revenue. Tranga Pods are the latest evolution of this strategy: self-sustaining assets designed to expand the experience and ensure guests engage with your full venue offering.
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
                Absolute Clarity: Your Questions Answered.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about our transparent, zero-liability partnership model.
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
                  className="bg-white/70 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-6 shadow-md"
                  variants={faqItemVariant}
                >
                  <button 
                    className="flex items-center justify-between w-full text-left gap-4 group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-[#F05258]' : 'text-gray-800 group-hover:text-[#F05258]'}`}>
                      {faq.question}
                    </h3>
                    <FiChevronDown className={`flex-shrink-0 text-2xl transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180 text-[#F05258]' : 'rotate-0 text-gray-400 group-hover:text-[#F05258]'}`} />
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
                <p className="mt-6 text-center text-gray-600">
                  Still have a question? Please contact us{" "}
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-[#F05258] font-semibold hover:underline hover:cursor-pointer"
                  >
                    here
                  </ScrollLink>
                  {" "}and we'll get back to you with a response as soon as we can.
                </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;