import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import DiscoverTheMachine from '../components/DiscoverTheMachine';
import Process from '../components/Process';
import WhyTranga from '../components/WhyTranga';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import { Title, Meta, Link } from "react-head";

const Home = () => {
  return (
    <div className='' >

            {/* ✅ SEO Meta Tags */}
      <Title>TAP. CHOOSE. ENJOY. | Smart Perfume Vending Machines | Convenience Pods</Title>

      <Meta
        name="description"
        content="Turn unused space into profit with our sleek, automated vending machines. Deliver premium perfumes and lifestyle products effortlessly — just TAP, CHOOSE, ENJOY."
      />
      <Meta
        name="keywords"
        content="Perfume vending machine, automated vending pods, smart vending machines, fragrance dispensers, convenience pods, automated retail solutions, luxury vending machines"
      />
      <Meta name="robots" content="index, follow" />
      <Meta name="author" content="Your Company Name" />

      {/* ✅ Open Graph (for Facebook, LinkedIn, etc.) */}
      <Meta property="og:title" content="TAP. CHOOSE. ENJOY. | Smart Perfume Vending Machines" />
      <Meta
        property="og:description"
        content="Revolutionize retail with our automated perfume vending machines. Zero hassle, sleek design, and premium experience."
      />
      <Meta property="og:type" content="website" />
      {/* <Meta property="og:url" content="https://www.yourwebsite.com/" /> */}
      {/* <Meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" /> */}

      {/* ✅ Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="TAP. CHOOSE. ENJOY. | Smart Perfume Vending Machines" />
      <Meta
        name="twitter:description"
        content="Turn unused space into profit with our sleek vending pods for perfumes and luxury goods."
      />
      {/* <Meta name="twitter:image" content="https://www.yourwebsite.com/og-image.jpg" /> */}

      {/* ✅ Canonical Link */}
      {/* <Link rel="canonical" href="https://www.yourwebsite.com/" /> */}

      <Navigation />
      <Hero />

      {/* --- First Gradient Section --- */}
      <div className=" bg-gradient-to-br from-purple-50 via-cyan-50 to-purple-50">
        {/* Added div wrappers with IDs for scrolling */}
        <div id="how-it-works" className='px-1' ><HowItWorks /></div>
        <div id="discover-the-machine" className='px-1'><DiscoverTheMachine /></div>
        <div id="process" ><Process /></div>
        <div id="why-tranga" ><WhyTranga /></div>
      </div>

      {/* --- Second Gradient Section --- */}
      <div className='bg-gradient-to-br from-sky-100 via-purple-100 to-pink-100'>
        {/* Added div wrappers with IDs for scrolling */}
        <div id="about-us" className='px-1'><AboutUs /></div>
      </div>
        <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;