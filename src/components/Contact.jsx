import React from 'react';
import { IoCheckmarkCircle,IoCallSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-purple-200 to-rose-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Column: Information --- */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Unlock New Revenue Streams with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9E01] to-[#F05258]">Tranga Pods</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Install your Tranga Pod and start earning more by submitting the form.
          </p>

          <ul className="mt-8 flex flex-col gap-4 text-gray-700">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#FF9E01] text-2xl" />
              <span><strong>No costs</strong> - just profits.</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#FF9E01] text-2xl" />
              <span><strong>No maintenance headaches</strong> - we handle it all.</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-[#FF9E01] text-2xl" />
              <span><strong>No missed crowds</strong> - attract more visitors.</span>
            </li>
            <a
                href="https://calendly.com/partnerships-trangapods/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:cursor-pointer"
              >
                      <li className="flex hover:underline hover:cursor-pointer items-center gap-2 mt-10">
                      <IoCallSharp className="text-[#FF9E01] text-2xl" />
                      <span className='hover:underline hover:cursor-pointer font-bold' >Book a call with Tranga</span>
            </li>

              </a>

          </ul>
        </motion.div>

        {/* --- Right Column: Contact Form --- */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" id="FirstName" placeholder="Jane" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"/>
            </div>

            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" id="LastName" placeholder="Doe" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"/>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="Email" placeholder="jane.doe@example.com" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"/>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="VenueType" className="block text-sm font-medium text-gray-700 mb-1">Venue Type</label>
              <select id="VenueType" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]">
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
              <label htmlFor="VenueName" className="block text-sm font-medium text-gray-700 mb-1">Venue Name</label>
              <input type="text" id="VenueName" placeholder="e.g., The Grand Hotel" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"/>
            </div>
            
            <div>
              <label htmlFor="VenueLocation" className="block text-sm font-medium text-gray-700 mb-1">Venue Location</label>
              <input type="text" id="VenueLocation" placeholder="e.g., New York, NY" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"/>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea id="Message" rows="4" placeholder="Tell us more about your venue or ask any questions..." className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-[#FF9E01] focus:ring-[#FF9E01]"></textarea>
            </div>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#FF9E01] to-[#F05258] px-6 py-3 text-center text-sm font-bold text-white transition-transform focus:outline-none focus:ring focus:ring-[#FF9E01]/50"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 158, 1, 0.3)" }}
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