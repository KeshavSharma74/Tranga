import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const ContactSuccess = () => {
  return (
    // Wrapper to center the component on the page
    <div className="flex min-h-screen items-center justify-center bg-[#A6D4FA] p-4">
      {/* Message bubble */}
      <div
        className="
          w-full max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          rounded-3xl bg-gradient-to-r from-green-300 to-cyan-300 
          p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 
          shadow-2xl flex justify-center items-center
        "
      >
        <p
          className="
            text-center text-slate-800 font-semibold leading-relaxed
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          "
        >
          Thank you for getting in touch with us!
          We'll get back to you as soon as we can.
        </p>
      </div>
    </div>
  );
};

export default ContactSuccess;
