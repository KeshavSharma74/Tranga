import React, { useState } from "react";
import { List, X } from "phosphor-react";
import { Link } from 'react-scroll';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { text: "How it works", to: "how-it-works" },
    { text: "Discover the machine", to: "discover-the-machine" },
    { text: "Process", to: "process" },
    { text: "Why Tranga", to: "why-tranga" },
    { text: "About us", to: "about-us" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] h-20 bg-white/20 backdrop-blur-lg border-b border-white/30">
      <div className="max-w-[1750px] h-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
              <img
                src="logo.png"
                className="h-11 brightness-200 hover:cursor-pointer"
                alt="Tranga Pods Logo"
              />
        </Link>


        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80} // Offset for the 80px fixed header
                  duration={500}
                  className="cursor-pointer px-2 py-1 transition-all duration-300 text-[#14132C] hover:text-violet-500"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-[#14132C] focus:outline-none z-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <nav
        // ✨ CHANGE THIS LINE: Replaced background/blur with a solid gradient
        className={`lg:hidden pt-10 bg-gradient-to-r from-sky-100 to-pink-100 absolute top-0 right-0 w-[70%] sm:w-[40%] h-[100vh] shadow-xl transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-10 font-medium text-[#14132C]">
          {navLinks.map((link) => (
            <li key={link.text} className="border-b-gray-200 border-b text-gray-600 w-full text-center">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block px-4 py-2 hover:text-violet-500 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;