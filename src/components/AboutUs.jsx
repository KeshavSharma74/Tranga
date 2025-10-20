// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';

// const AboutUs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqsData = [
//     {
//       question: "How does the profit sharing work and what is our expected return?",
//       answer: "Most venues see $68K–$73K in added revenue per pod over three years — with zero upfront cost."
//     },
//     {
//       question: "What is the true operational cost to my venue?",
//       answer: "Nothing. We handle setup, restocks, and maintenance. You simply provide the space and enjoy the profits."
//     },
//     {
//       question: "Who is liable for the pods, maintenance, and compliance?",
//       answer: "We are. Each Tranga Pod is fully insured, certified, and maintained by our team. Your venue carries no liability or hidden costs."
//     },
//     {
//       question: "How are Tranga Pods different from standard vending machines?",
//       answer: "Tranga Pods are designed like micro-retail boutiques — curated, intelligent, and trend-driven. They don't just sell items; they enhance your brand and capture guest data for smarter marketing."
//     },
//     {
//       question: "How do the Pods act as a safety net for venue operations?",
//       answer: "We eliminate the 'guest exit' problem. By offering what people need instantly, you keep crowds inside — meaning higher bar tabs, longer stays, and more spending."
//     },
//     {
//       question: "Can the fragrances or products be changed?",
//       answer: "Yes. Our catalogue is dynamic and constantly updated with trending essentials and scents that match your venue's vibe."
//     },
//     {
//       question: "Do we have to take both the Convenience and Fragrance Pods?",
//       answer: "No. You can choose one or combine both for maximum impact — it's fully flexible based on your space and audience."
//     },
//     {
//       question: "Where should we put the Pods?",
//       answer: "We'll identify high-traffic spots — entrances, lounges, or restrooms — during a site survey."
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-[#E9F5FF] via-[#FFE8E1] to-[#FFFFD9]  overflow-hidden" style={{ color: '#14132C' }}>
//       <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

//         {/* --- Header --- */}
//         <motion.div
//           className="text-center mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: '#14132C' }}>
//             Our Mission: <span style={{ color: '#FF9178' }}>Convenience, Reimagined.</span>
//           </h1>
//         </motion.div>

//         {/* Our Story / Mission Section */}
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <p className="mt-4 text-lg leading-relaxed" style={{ color: '#14132C' }}>
//               Tranga Pods were born from a simple truth: access matters. Inspired by the seamless convenience of daily life in Sierra Leone and the innovation of European luxury retail, we created a system that keeps guests engaged, enhances their experience, and drives revenue — automatically.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed" style={{ color: '#14132C' }}>
//               Our pods transform unused corners into stylish, self-sustaining micro-retail hubs offering trending essentials and premium fragrances. Each unit blends design, data, and curation to create a modern retail experience that feels effortless for both guests and venues.
//             </p>
            
//             {/* Why Venues Choose Tranga Section */}
//             <div className="mt-12 bg-gray-50 rounded-2xl p-8">
//               <h3 className="text-3xl font-bold mb-8" style={{ color: '#14132C' }}>
//                 Why Venues Choose Tranga
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
//                 <div className="flex items-start">
//                   <span style={{ color: '#FF9178' }} className="font-bold mr-2">•</span>
//                   <span style={{ color: '#14132C' }}>Dual Revenue Streams: Convenience and fragrance in one space</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span style={{ color: '#FF9178' }} className="font-bold mr-2">•</span>
//                   <span style={{ color: '#14132C' }}>Data-Driven Insights: Real-time sales and guest preferences</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span style={{ color: '#FF9178' }} className="font-bold mr-2">•</span>
//                   <span style={{ color: '#14132C' }}>Curated Experiences: Always fresh, relevant, and on-trend</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span style={{ color: '#FF9178' }} className="font-bold mr-2">•</span>
//                   <span style={{ color: '#14132C' }}>Zero-Risk Partnership: Fully managed setup, restocks, and maintenance</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span style={{ color: '#FF9178' }} className="font-bold mr-2">•</span>
//                   <span style={{ color: '#14132C' }}>Safety & Reliability: Certified, insured, and hardwired for seamless operation</span>
//                 </div>
//               </div>
//               <div className="mt-8 text-center">
//                 <p className="text-2xl font-bold" style={{ color: '#FF9178' }}>
//                   Simple. Smart. Profitable. That's Tranga.
//                 </p>
//               </div>
//             </div>

//             {/* Strategic Genesis Section */}
//             <div className="mt-12 border-t border-gray-200 pt-12">
//               <h3 className="text-3xl font-bold mb-6" style={{ color: '#14132C' }}>
//                 Strategic Genesis: <span style={{ color: '#FF9178' }}>The Luxury Retail Ecosystem</span>
//               </h3>
//               <p className="mt-3 text-lg leading-relaxed" style={{ color: '#14132C' }}>
//                 Rooted in the success of Europe's top retail innovators, we bring that same elevated strategy to modern venues — blending design, convenience, and data for next-level guest experiences.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* --- FAQ Section --- */}
//         <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               className="text-center"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl xl:text-5xl font-bold mb-4" style={{ color: '#14132C' }}>
//                 Your Questions, Answered.
//               </h2>
//             </motion.div>

//             {(() => {
//               const midPoint = Math.ceil(faqsData.length / 2);
//               const leftColumnFaqs = faqsData.slice(0, midPoint);
//               const rightColumnFaqs = faqsData.slice(midPoint);

//               return (
//                 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8">

//                   {/* --- LEFT COLUMN --- */}
//                   <div className="flex flex-col">
//                     {leftColumnFaqs.map((faq, index) => (
//                       <motion.div
//                         key={index}
//                         className="border-b border-gray-200 py-6"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                       >
//                         <div
//                           className="flex items-center justify-between w-full cursor-pointer"
//                           onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                         >
//                           <h3 className="text-lg font-medium" style={{ color: '#14132C' }}>{faq.question}</h3>
//                           <div 
//                             className="text-2xl transition-transform duration-500 ease-in-out p-1" 
//                             style={{ 
//                               color: '#FF9178',
//                               transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' 
//                             }}
//                           >
//                             +
//                           </div>
//                         </div>
//                         <AnimatePresence>
//                           {openIndex === index && (
//                             <motion.div
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeInOut" } }}
//                               exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
//                               className="overflow-hidden"
//                             >
//                               <p className="pr-8 pt-4" style={{ color: '#14132C' }}>
//                                 {faq.answer}
//                               </p>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* --- RIGHT COLUMN --- */}
//                   <div className="flex flex-col">
//                     {rightColumnFaqs.map((faq, index) => {
//                       const originalIndex = index + midPoint;
//                       return (
//                         <motion.div
//                           key={originalIndex}
//                           className="border-b border-gray-200 py-6"
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.5, delay: index * 0.1 }}
//                           viewport={{ once: true }}
//                         >
//                           <div
//                             className="flex items-center justify-between w-full cursor-pointer"
//                             onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
//                           >
//                             <h3 className="text-lg font-medium" style={{ color: '#14132C' }}>{faq.question}</h3>
//                             <div 
//                               className="text-2xl transition-transform duration-500 ease-in-out p-1" 
//                               style={{ 
//                                 color: '#FF9178',
//                                 transform: openIndex === originalIndex ? 'rotate(45deg)' : 'rotate(0deg)' 
//                               }}
//                             >
//                               +
//                             </div>
//                           </div>
//                           <AnimatePresence>
//                             {openIndex === originalIndex && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeInOut" } }}
//                                 exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
//                                 className="overflow-hidden"
//                               >
//                                 <p className="pr-8 pt-4" style={{ color: '#14132C' }}>
//                                   {faq.answer}
//                                 </p>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })()}
            
//             <p className="mt-8 text-center" style={{ color: '#14132C' }}>
//               Still have questions?{" "}
//               <ScrollLink
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 className="font-semibold hover:underline hover:cursor-pointer"
//                 style={{ color: '#FF9178' }}
//               >
//                 Contact us anytime
//               </ScrollLink>
//               {" "}— we'll guide you through setup, revenue projections, and everything in between.
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

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
  ];

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
              <h3 className="text-3xl font-bold text-gray-800 tracking-tight">
                Strategic Genesis: <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9E01] to-[#F05258]">The Luxury Retail Ecosystem</span> 
              </h3>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                Our vision is rooted in proprietary insights gained from the European luxury retail sector. We apply the proven model of market leaders who integrate complimentary, high-end amenities to successfully delay guest departure and capture revenue. Tranga Pods are the latest evolution of this strategy: self-sustaining assets designed to expand the experience and ensure guests engage with your full venue offering.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- FAQ Section --- */}
        <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl xl:text-5xl font-bold text-gray-900">
                Your Questions Answered.
              </h2>
              <p className="mt-2 text-3xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Complete Transparency
              </p>
            </motion.div>

            {(() => {
              // Split the data into two arrays for independent columns
              const midPoint = Math.ceil(faqsData.length / 2);
              const leftColumnFaqs = faqsData.slice(0, midPoint);
              const rightColumnFaqs = faqsData.slice(midPoint);

              return (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8">

                  {/* --- LEFT COLUMN --- */}
                  <div className="flex flex-col">
                    {leftColumnFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="border-b border-gray-200 py-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="flex items-center justify-between w-full cursor-pointer"
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                          <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                          <div className="text-2xl text-gray-500 transition-transform duration-500 ease-in-out p-1" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                            +
                          </div>
                        </div>
                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeInOut" } }}
                              exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 pr-8 pt-4">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* --- RIGHT COLUMN --- */}
                  <div className="flex flex-col">
                    {rightColumnFaqs.map((faq, index) => {
                      const originalIndex = index + midPoint;
                      return (
                        <motion.div
                          key={originalIndex}
                          className="border-b border-gray-200 py-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className="flex items-center justify-between w-full cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                          >
                            <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                            <div className="text-2xl text-gray-500 transition-transform duration-500 ease-in-out p-1" style={{ transform: openIndex === originalIndex ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                              +
                            </div>
                          </div>
                          <AnimatePresence>
                            {openIndex === originalIndex && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeInOut" } }}
                                exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-600 pr-8 pt-4">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
            
            <p className="mt-8 text-center text-gray-600">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;