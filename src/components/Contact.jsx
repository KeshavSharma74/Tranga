import React from 'react';
import { IoCheckmarkCircle, IoCallSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#A6D4FA' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Column: Information --- */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#14132C' }}>
            Unlock Effortless Revenue with <span style={{ color: '#FF9178' }}>Tranga Pods</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed" style={{ color: '#14132C' }}>
            Turn your unused space into a sleek, profitable asset — no cost, no hassle, no downtime.
          </p>

          <div className="mt-8 space-y-4" style={{ color: '#14132C' }}>
            <h3 className="text-xl font-semibold mb-4">Here's what you get:</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <IoCheckmarkCircle style={{ color: '#FF9178' }} className="text-2xl" />
                <span><strong>Zero setup or maintenance costs</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <IoCheckmarkCircle style={{ color: '#FF9178' }} className="text-2xl" />
                <span><strong>A fully managed, data-driven retail amenity</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <IoCheckmarkCircle style={{ color: '#FF9178' }} className="text-2xl" />
                <span><strong>Passive income from day one</strong></span>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-6 rounded-2xl border-2 border-dashed" style={{ borderColor: '#FF9178', backgroundColor: 'rgba(255, 145, 120, 0.1)' }}>
            <p className="text-lg font-semibold mb-4 text-center" style={{ color: '#14132C' }}>
              Let's get started.
            </p>
            <p className="text-center mb-6" style={{ color: '#14132C' }}>
              Book a call to see how much your venue could earn.
            </p>
          <a
    href="https://calendly.com/partnerships-trangapods/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-center gap-3
      font-bold text-lg
      px-2 py-3 rounded-xl
      bg-[#FF9178] text-[#14132C]
      hover:bg-[#FFD166] hover:text-[#14132C]
      border-2 border-[#FF9178]
      transition-all duration-300 shadow-md hover:shadow-lg
    "
  >
    <IoCallSharp className="text-2xl text-[#14132C]" />
    <span>Book a call with Tranga</span>
  </a>
          </div>
        </motion.div>

        {/* --- Right Column: Contact Form --- */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>First Name</label>
              <input 
                type="text" 
                id="FirstName" 
                placeholder="Jane" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              />
            </div>

            <div>
              <label htmlFor="LastName" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Last Name</label>
              <input 
                type="text" 
                id="LastName" 
                placeholder="Doe" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Email" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Email</label>
              <input 
                type="email" 
                id="Email" 
                placeholder="jane.doe@example.com" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="VenueType" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Venue Type</label>
              <select 
                id="VenueType" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              >
                <option>Please select...</option>
                <option>Nightclub / Bar / Lounge</option>
                <option>Gym / Spa / Salon</option>
                <option>Luxury Mall / Retail</option>
                <option>Hotel / Resort</option>
                <option>Airport</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="VenueName" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Venue Name</label>
              <input 
                type="text" 
                id="VenueName" 
                placeholder="e.g., The Grand Hotel" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="VenueLocation" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Venue Location</label>
              <input 
                type="text" 
                id="VenueLocation" 
                placeholder="e.g., New York, NY" 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Message" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>Message (Optional)</label>
              <textarea 
                id="Message" 
                rows="4" 
                placeholder="Tell us more about your venue or ask any questions..." 
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1"
                style={{ 
                  color: '#14132C',
                  borderColor: '#A6D4FA',
                  focusBorderColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold text-white transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: '#FF9178',
                  focusRingColor: '#FF9178'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(255, 145, 120, 0.4)",
                  backgroundColor: '#FFFD3A',
                  color: '#14132C'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Inquiry
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;