"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2, rootMargin: '0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/eelizabethho",
      color: "hover:bg-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/eelizabethho/",
      color: "hover:bg-blue-600"
    },
    {
      name: "Resume",
      icon: FileText,
      url: "/ELIZABETH HO.pdf",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <main
      ref={ref}
      className="relative bg-gray-100"
    >
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-8">
        
        {/* Title */}
        <motion.h1
          className="text-5xl font-semibold text-black/80 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
          
          {/* Left: Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg border-2 border-white/50">
              <img
                src="/personal.png"
                alt="Elizabeth"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="flex-1 w-full lg:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl bg-white shadow-md border border-gray-200 p-6 lg:p-8">
              <h2 className="text-3xl font-semibold text-black/80 mb-4 text-center lg:text-left">
                Let's Connect!
              </h2>
              <p className="text-black/70 text-base mb-6 text-center lg:text-left leading-relaxed">
                Feel free to reach out through any of these platforms. I'd love to hear from you!
              </p>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200 border border-gray-300 text-black/80 font-semibold transition-all duration-300 ${link.color} hover:text-white hover:scale-105 hover:shadow-md`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                      <span>{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

