"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
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
    <main ref={ref} className="w-screen overflow-x-hidden bg-white">
      {/* Title */}
      <motion.div 
        className="py-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-normal text-black/80">Projects</h1>
      </motion.div>

      {/* 4 TILES (2x2 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-8 lg:px-2">

      {/* Clari AI Project Card */}
      <ProjectCard
        inView={inView}
        index={0}
        title="Clari AI"
        description="AI interview coach with transcription and structured feedback to help you improve with clarity."
        image="/Subject.png"
        imageAlt="Clari AI preview"
        button1Text="Learn More"
        button2Text="GitHub"
      />


        {/* Tile 2 - Project Card */}
        <ProjectCard
          inView={inView}
          index={1}
          title="Project Name"
          description="Project description goes here. Add details about what this project does and its key features."
          image={null}
          imageAlt="Project preview"
          button1Text="Learn More"
          button2Text="GitHub"
        />

        {/* Tile 3 - Personal Website */}
        <ProjectCard
          inView={inView}
          index={2}
          title="Personal Website"
          description="Next.js + Tailwind portfolio with glass UI + animations."
          image="/Subject.png"
          imageAlt="Personal Website preview"
          button1Text="View"
          button2Text="GitHub"
        />

        {/* Tile 4 - Project Card */}
        <ProjectCard
          inView={inView}
          index={3}
          title="Project Name"
          description="Project description goes here. Add details about what this project does and its key features."
          image="/boulder.png"
          imageAlt="Project preview"
          button1Text="Learn More"
          button2Text="GitHub"
        />
      </div>
    </main>
  );
}

function ProjectCard({ inView, index, title, description, image, imageAlt, button1Text, button2Text }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className="w-full bg-gray-100 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isEven ? -50 : 50, y: 30 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.3 + index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      {/* LEFT: Text Content */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      >
        <h2 className="text-5xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-md">
          {description}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <motion.button 
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button1Text}
          </motion.button>
          <motion.button 
            className="px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button2Text}
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT: Image */}
      {image && (
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="max-w-[120%] md:max-w-[120%] object-contain drop-shadow-xl"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
