"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'React Native',
    'Tailwind CSS',
    'AWS',
    'AWS Lambda',
    'AWS Cognito',
    'AWS S3',
    'AWS EventBridge',
    'AWS Athena',
    'API Gateway',
    'DynamoDB',
    'Firebase',
    'OpenAI',
    'Git',
    'Figma',
    'Vite',
    'Chrome',
    'Expo'
  ];

  return (
    <div 
      ref={ref}
      className="py-16 px-4 md:px-8 flex flex-col items-center relative z-10 bg-black"
    >
      <motion.h2 
        className="text-5xl font-semibold text-white mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.03,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white text-sm font-medium">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;