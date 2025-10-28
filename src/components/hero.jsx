// src/components/Hero.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Animated Glowing Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse top-10 left-[-100px] z-0"></div>
      <div className="absolute w-[250px] h-[250px] bg-violet-600 opacity-20 rounded-full blur-2xl animate-ping bottom-10 right-[-80px] z-0"></div>

      {/* Sticky Navigation Cylinder (Desktop) */}
      <div className="hidden md:flex fixed top-5 z-50 bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full gap-6 text-sm sm:text-base font-semibold shadow-md">
        <a href="#home" className="hover:text-indigo-300 transition duration-300">Home</a>
        <a href="#projects" className="hover:text-indigo-300 transition duration-300">Projects</a>
        <a href="#resume" className="hover:text-indigo-300 transition duration-300">Resume & Certifications</a>
                <a href="#resume" className="hover:text-indigo-300 transition duration-300">My Passion</a>
        <a href="#contact" className="hover:text-indigo-300 transition duration-300">Contact</a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/60 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-20 right-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl space-y-4 text-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <a href="#home" className="block hover:text-indigo-300" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#projects" className="block hover:text-indigo-300" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#resume" className="block hover:text-indigo-300" onClick={() => setMenuOpen(false)}>Resume & Certifications</a>
            <a href="#contact" className="block hover:text-indigo-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-24">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-indigo-100">
          Hi, I'm Shree Shriya T
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 max-w-xl">
          “Eager to explore, learn, and create in the ever-evolving digital world.”
        </p>
      </div>
    </section>
  );
};

export default Hero;
