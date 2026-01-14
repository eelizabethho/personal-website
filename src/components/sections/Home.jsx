"use client";

import { motion } from 'motion/react';
import { Linkedin, FileText } from 'lucide-react';
import BlurText from "@/components/BlurText";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
    const handleAnimationComplete = () => { console.log("Animation completed!");};

  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4">
          <BlurText
            text="Welcome! I'm Elizabeth"
            delay={120} animateBy="words" direction="top" onAnimationComplete={handleAnimationComplete}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          />
        </div>

        <motion.p 
          className="text-white/90 text-lg max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Here you'll find my projects, my journey, and ways to connect :)
        </motion.p>

        {/* Links */}
        <motion.div 
          className="flex gap-3 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/eelizabethho/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200 border border-gray-300 text-black/80 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="/ELIZABETH HO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200 border border-gray-300 text-black/80 font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            <span>Resume</span>
          </motion.a>
        </motion.div>
        
        {/* Profile Card */}
        <motion.div 
          className="absolute bottom-17 right-25"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <ProfileCard 
            image="/personal.png"
          />
        </motion.div>
      </div>
    </main>
  );
}