"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Timeline() {
  const timelineItems = [
    {
      year: "2024",
      title: "Started at Virginia Tech",
      description: "Began studying Computer Science with a focus on front-end development and UI/UX design.",
      side: "left"
    },
    {
      year: "2023",
      title: "First Web Project",
      description: "Built my first responsive website using React and Tailwind CSS.",
      side: "right"
    },
    {
      year: "2022",
      title: "Discovered Coding",
      description: "Started learning programming fundamentals and fell in love with creating digital experiences.",
      side: "left"
    },
    {
      year: "2021",
      title: "High School",
      description: "Took my first computer science course and began exploring the world of technology.",
      side: "right"
    }
  ];

  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20">
        
        {/* Title */}
        <h1 className="text-6xl font-semibold text-black/80 mb-16 text-center">
          Timeline
        </h1>

        {/* Timeline Container */}
        <div className="w-full max-w-6xl px-8">
          <div className="relative">
            {/* Vertical Timeline Bar - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/30"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TimelineItem({ item, index }) {
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

  const slideDirection = item.side === "left" ? -100 : 100;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${
        item.side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black/80 border-4 border-white z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      />

      {/* Content Card */}
      <motion.div
        className={`w-[45%] ${
          item.side === "left" ? "pr-8" : "pl-8"
        }`}
        initial={{ opacity: 0, x: slideDirection, y: 20 }}
        animate={
          inView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: slideDirection, y: 20 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="w-full rounded-3xl bg-white/8 backdrop-blur-xl shadow-xl border border-white/30 p-8">
          <div className="text-2xl font-semibold text-black/60 mb-2">
            {item.year}
          </div>
          <h3 className="text-3xl font-semibold text-black/80 mb-3">
            {item.title}
          </h3>
          <p className="text-black/70 text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

