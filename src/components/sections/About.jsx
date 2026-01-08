
"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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
      { threshold: 0.1, rootMargin: '0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={ref}
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20">

        {/* Glass Card */}
        <motion.div 
          className="w-[80vw] h-[250px] max-w-4xl rounded-3xl mt-10 bg-white/8 backdrop-blur-xl shadow-xl border border-white/30 p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl font-semibold text-black/80 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me!
          </motion.h1>

          <motion.p 
            className="text-black/70 text-m leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My name is Elizabeth and I'm a sophomore at Virginia Tech studying Computer Science!
            I'm really into front-end development, UI/UX design, and learning how iOS systems work. 
            I love building things that feel clean and intuitive. Outside of coding, I'm a boba and matcha enthusiast,
             and I spend my free time bouldering or trying new drinks :D
          </motion.p>
        </motion.div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { src: "/boba.png", alt: "Boba" },
            { src: "/boulder.png", alt: "Bouldering" },
            { src: "/friends.png", alt: "Friends" }
          ].map((img, index) => (
            <motion.img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
