import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data with Tranga branding
  const faqsData = [
    { question: "What are the running costs for my venue?", answer: "The only cost is the electricity to power the machine. Tranga covers installation, maintenance, and all product refills." },
    { question: "Can we customize the fragrances?", answer: "Absolutely. We provide a premium selection of scents, and our team will help you choose the perfect aroma that aligns with your venue's brand and atmosphere." },
    { question: "How is the machine secured against theft?", answer: "Each machine is professionally installed to be tamper-resistant and includes an integrated alarm system for complete peace of mind." },
    { question: "What kind of fragrances do you offer?", answer: "Our collection features a curated range of luxurious, high-end fragrances designed to appeal to a wide audience and enhance any environment." },
    { question: "How much perfume is dispensed per spray?", answer: "The machine releases a fine, perfectly measured mist, creating a subtle and pleasant scent experience that isn't overwhelming." },
    { question: "Where is the best place to install the machine?", answer: "For optimal visibility and use, we suggest high-traffic zones like lobbies, entrances, or near restrooms. We'll help you find the perfect spot during installation." },
    { question: "Can we change the price per spray?", answer: "The price is carefully set to offer great value to your customers while ensuring profitability for our partnership. It is typically kept consistent." },
    { question: "Do we need special insurance for the machine?", answer: "No, your venue does not need any additional insurance. Tranga's comprehensive service includes full coverage for the machine." },
    { question: "Who is responsible for repairs and maintenance?", answer: "We are. Tranga takes full responsibility for all servicing and repairs. If any issue arises, our team will resolve it promptly at no cost to you." },
    { question: "I have more questions, who can I ask?", answer: "We're here to help! Please navigate to our Contact page and send us a message. We look forward to answering any other questions you may have." },
  ];

  return (
    <div>
      {/* --- Section 1: Our Story --- */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Driven by Passion, Focused on Innovation
            </h1>
            <p className="text-lg text-gray-600">
              Tranga was founded by Dummy1 and Dummy2, seasoned entrepreneurs with a proven history of building successful ventures. Our core principles are transparency, fairness, and creating genuine value for our partners.
            </p>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Our Story Started with Uberboard
              </h2>
              <p className="mt-2 text-gray-600">
                We first made our mark with Uberboard, a market-leading hoverboard brand. Our success was built on a foundation of stringent safety testing and strategic partnerships, including a landmark Black Friday collaboration with Tesco.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Our Commitment Continues with Tranga
              </h2>
              <p className="mt-2 text-gray-600">
                With Tranga, we're applying that same dedication to help venues elevate their customer experience and open new revenue channels. Our model is a true zero-cost, zero-hassle partnership where we manage everything.
              </p>
            </div>
          </motion.div>
          {/* Right Column: Image */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop" 
              alt="Founders of Tranga" 
              className="rounded-xl shadow-2xl w-full max-w-xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: FAQ (Corrected Layout) --- */}
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
                <div className="flex flex-col gap-y-4">
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
                        <div className="text-2xl text-gray-500 transition-transform duration-500 ease-in-out" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
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
                <div className="flex flex-col gap-y-4">
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
                          <div className="text-2xl text-gray-500 transition-transform duration-500 ease-in-out" style={{ transform: openIndex === originalIndex ? 'rotate(45deg)' : 'rotate(0deg)' }}>
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
        </div>
      </section>
    </div>
  );
};

export default AboutUs;