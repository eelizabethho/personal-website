"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function FeaturedProject() {
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

  return (
    <section
      ref={ref}
      className="relative bg-white py-12 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Simple Badge */}
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-black/50 uppercase tracking-wider">Featured</span>
        </motion.div>

        {/* Compact Card Design */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image - Smaller */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/Subject.png"
                alt="Clari AI"
                className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg"
              />
            </motion.div>

            {/* Content - Compact */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-black/90 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Clari AI
              </motion.h3>
              <motion.p
                className="text-sm md:text-base text-black/60 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AI interview coach with transcription and structured feedback.
              </motion.p>
              <motion.div
                className="flex gap-2 justify-center md:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a
                  href="#projects"
                  className="text-xs md:text-sm text-black/70 hover:text-black underline"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project →
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

