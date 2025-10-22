import React, { useRef, useState } from 'react'; // <-- ADD useRef and useState
import emailjs from '@emailjs/browser'; // <-- ADD THIS
import { IoCheckmarkCircle, IoCallSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const form = useRef(); // <-- ADD THIS
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- ADD THIS
  const [isSuccess, setIsSuccess] = useState(false); // <-- ADD THIS
  const navigate = useNavigate();

  // <-- ADD THIS ENTIRE FUNCTION
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setIsSubmitting(true);
    setIsSuccess(false);

    // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID); 
    // console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // NEW
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // NEW
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // NEW
        )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          e.target.reset(); // Resets the form after successful submission
          navigate('/contact'); // Redirect to ContactSuccess page
        },
        (error) => {
          // console.log('FAILED...', error);
          setIsSubmitting(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#A6D4FA' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Column (No changes here) --- */}
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
              {[
                "Zero setup or maintenance costs",
                "A fully managed, data-driven retail amenity",
                "Passive income from day one",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <IoCheckmarkCircle style={{ color: '#FF9178' }} className="text-2xl" />
                  <span><strong>{text}</strong></span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-12 p-6 rounded-2xl border-2 border-dashed text-center"
            style={{
              borderColor: '#FF9178',
              backgroundColor: 'rgba(255, 145, 120, 0.1)',
              color: '#14132C'
            }}
          >
            <p className="text-lg font-semibold mb-2">Let's get started.</p>
            <p className="mb-6">Book a call to see how much your venue could earn.</p>

            <motion.a
              href="https://calendly.com/partnerships-trangapods/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 font-bold text-lg transition-colors"
              style={{
                backgroundColor: '#FF9178',
                color: '#14132C'
              }}
              whileHover={{
                backgroundColor: '#FFFD3A',
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(255, 145, 120, 0.4)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <IoCallSharp style={{ color: '#ffff' }} className="text-2xl" />
              Book a Call with Tranga Pods
            </motion.a>
          </div>
        </motion.div>

        {/* --- Right Column (Form) --- */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* // <-- ADD ref and onSubmit --> */}
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: 'FirstName', label: 'First Name', placeholder: 'Jane' },
              { id: 'LastName', label: 'Last Name', placeholder: 'Doe' },
              { id: 'Email', label: 'Email', placeholder: 'jane.doe@example.com', span: 2 },
              { id: 'VenueName', label: 'Venue Name', placeholder: 'e.g., The Grand Hotel' },
              { id: 'VenueLocation', label: 'Venue Location', placeholder: 'e.g., New York, NY' },
            ].map((field, i) => (
              <div key={i} className={field.span ? 'sm:col-span-2' : ''}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  name={field.id} // <-- ADD THIS name ATTRIBUTE (must match template)
                  placeholder={field.placeholder}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9178] focus:border-[#FF9178]"
                  style={{ color: '#14132C' }}
                  required // <-- ADD THIS for validation
                />
              </div>
            ))}

            {/* Venue Type */}
            <div className="sm:col-span-2">
              <label htmlFor="VenueType" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>
                Venue Type
              </label>
              <select
                id="VenueType"
                name="VenueType" // <-- ADD THIS name ATTRIBUTE
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9178] focus:border-[#FF9178]"
                style={{ color: '#14132C' }}
                required // <-- ADD THIS for validation
              >
                <option value="">Please select...</option> {/* <-- Add empty value */}
                <option>Nightclub / Bar / Lounge</option>
                <option>Gym / Spa / Salon</option>
                <option>Luxury Mall / Retail</option>
                <option>Hotel / Resort</option>
                <option>Airport</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="Message" className="block text-sm font-medium mb-1" style={{ color: '#14132C' }}>
                Message (Optional)
              </label>
              <textarea
                id="Message"
                name="Message" // <-- ADD THIS name ATTRIBUTE
                rows="4"
                placeholder="Tell us more about your venue or ask any questions..."
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9178] focus:border-[#FF9178]"
                style={{ color: '#14132C' }}
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                disabled={isSubmitting} // <-- ADD THIS
                className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50" // <-- Add disabled style
                style={{ backgroundColor: '#FF9178', color: '#14132C' }}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.05, // <-- Disable hover when submitting
                  backgroundColor: isSubmitting ? '#FF9178' : '#FFFD3A',
                  boxShadow: isSubmitting ? "none" : "0 10px 20px rgba(255, 145, 120, 0.4)",
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }} // <-- Disable tap
              >
                {/* // <-- ADD THIS LOGIC --> */}
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </motion.button>

              {/* // <-- ADD THIS SUCCESS MESSAGE --> */}
              {/* {isSuccess && (
                <p className="text-center mt-4 text-green-600 font-semibold">
                  Thank you! Your inquiry has been sent.
                </p>
              )} */}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;