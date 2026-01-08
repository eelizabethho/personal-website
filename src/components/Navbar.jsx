"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-5xl transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-4'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex items-center justify-center gap-2 md:gap-4 px-4 md:px-8 py-3 rounded-full shadow-lg border transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-gray-200 shadow-xl' 
          : 'bg-white/20 backdrop-blur-md border-white/30'
      }`}>
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-bold text-lg md:text-xl text-black/80 hover:text-black transition-colors px-2 md:px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Elizabeth
        </motion.a>

        <div className="h-6 w-px bg-gray-300 mx-2" />

        <div className="flex items-center gap-1 md:gap-3">
          {navItems.slice(1).map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`px-3 md:px-4 py-1.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-black text-white shadow-md'
                  : scrolled
                  ? 'text-black/70 hover:text-black hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
