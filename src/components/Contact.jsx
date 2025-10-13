import React from 'react';
import { IoCheckmarkCircle, IoCalendarOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-blue-200 to-pink-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Start Your Zero-Cost Revenue Partnership with <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Tranga</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Begin your journey to increased earnings by filling out the form to install your Tranga machine. Alternatively, schedule a direct call with our team.
          </p>

          <ul className="mt-8 flex flex-col gap-4 text-gray-700">
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Zero Upfront Costs</strong> - A pure profit-share model</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Fully Managed</strong> - We take care of all installation & maintenance</span>
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkCircle className="text-green-500 text-2xl" />
              <span><strong>Enhanced Customer Experience</strong> - Attract and delight your visitors</span>
            </li>
          </ul>

          <div className="mt-10">
            <a href="#" className="flex items-center gap-3 text-blue-600 font-semibold text-lg hover:underline">
              <IoCalendarOutline className="text-2xl" />
              <span>Schedule a Discovery Call with Tranga</span>
            </a>
          </div>
        </motion.div>

        {/* --- Right Column: Contact Form --- */}
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                type="text"
                id="FirstName"
                placeholder="Jane"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                id="LastName"
                placeholder="Doe"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="jane.doe@example.com"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="Phone"
                placeholder="e.g., 01234 567890"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="VenueName" className="block text-sm font-medium text-gray-700 mb-1">
                Venue name
              </label>
              <input
                type="text"
                id="VenueName"
                placeholder="e.g., The Grand Hotel"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="VenueLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Venue location
              </label>
              <input
                type="text"
                id="VenueLocation"
                placeholder="e.g., 123 High Street, London"
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="Message"
                rows="6"
                placeholder="I'm interested in learning more about..."
                className="w-full rounded-md border-gray-200 bg-cyan-50/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-transform focus:outline-none focus:ring focus:ring-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;