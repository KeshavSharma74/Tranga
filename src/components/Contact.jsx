import React from 'react';
import { IoCheckmarkCircle, IoCalendarOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-rose-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Column: Information --- */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            {/* UPDATED HEADER */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Partner with <span className="gradient-text">Tranga Pods</span> and Unlock New Revenue Streams
          </h1>

            {/* UPDATED DESCRIPTION */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Ready to transform your unused space into a profitable, hassle-free asset? Fill out the form to begin your partnership inquiry. Our team will get in touch to discuss our competitive commission structure and how a Tranga Pod can benefit your business.
          </p>

            {/* UPDATED BENEFITS */}
          <ul className="mt-8 flex flex-col gap-4 text-gray-700">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Zero Upfront Costs</strong> & a highly competitive 30%+ commission rate.</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Fully Managed Service</strong> including installation, restocking, and 24/7 support.</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Drive Foot Traffic</strong> with exclusive products your customers will love.</span>
            </li>
          </ul>

          <div className="mt-10">
            <a href="#" className="flex items-center gap-3 text-purple-600 font-semibold text-lg hover:underline">
              <IoCalendarOutline className="text-2xl" />
              <span>Schedule a Discovery Call</span>
            </a>
          </div>
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
              <input type="text" id="FirstName" placeholder="Jane" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"/>
            </div>

            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" id="LastName" placeholder="Doe" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"/>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="Email" placeholder="jane.doe@example.com" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"/>
            </div>

            {/* --- NEW: VENUE TYPE FIELD --- */}
            <div className="sm:col-span-2">
              <label htmlFor="VenueType" className="block text-sm font-medium text-gray-700 mb-1">Venue Type</label>
              <select id="VenueType" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500">
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
              <input type="text" id="VenueName" placeholder="e.g., The Grand Hotel" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"/>
            </div>
            
            <div>
              <label htmlFor="VenueLocation" className="block text-sm font-medium text-gray-700 mb-1">Venue Location</label>
              <input type="text" id="VenueLocation" placeholder="e.g., London" className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"/>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea id="Message" rows="4" placeholder="Tell us more about your venue or ask any questions..." className="w-full rounded-md border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-purple-500 focus:ring-purple-500"></textarea>
            </div>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                // UPDATED BUTTON STYLE & TEXT
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-transform focus:outline-none focus:ring focus:ring-purple-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Unlock New Revenue
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;