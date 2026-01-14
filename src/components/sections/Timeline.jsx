"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

// Icon components
const CloudIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.1.9 2 2 2h1v-7"/>
    <path d="M18 12v5c0 1.1-.9 2-2 2h-1v-7"/>
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.1.9 2 2 2h1v-7"/>
    <path d="M18 12v5c0 1.1-.9 2-2 2h-1v-7"/>
    <path d="M12 11v8"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default function Timeline() {
  const timelineItems = [
    {
      year: "Present",
      title: "AWS Certifications",
      company: "In Progress",
      description: "Currently working towards AWS AI and AWS Cloud certifications to expand cloud computing and AI expertise. These certifications will complement hands-on experience with AWS services from internship.",
      icon: <CloudIcon />,
      highlight: true
    },
    {
      year: "Sep 2025 - Present",
      title: "Undergraduate Researcher",
      company: "Virginia Tech",
      description: "Working with Professor Hamouda to create AI-focused learning materials for students ages 10–18. Designs interactive lessons and builds AI-powered tools that make complex concepts accessible. All content aligns with Virginia Department of Education CS Standards to help students learn AI from the ground up.",
      icon: <SchoolIcon />,
      highlight: true
    },
    {
      year: "Jan 2026 - Present",
      title: "Undergraduate Teaching Assistant",
      company: "CS 1114 - Virginia Tech",
      description: "Supporting students learning object-oriented programming in Java. Holds regular office hours and lab sessions to help with assignments. Focuses on breaking down abstract CS concepts into clear, beginner-friendly explanations that help students succeed.",
      icon: <GraduationCapIcon />,
      highlight: true
    },
    {
      year: "May 2025 - Aug 2025",
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services",
      description: "Delivered significant impact during internship. Automated a 24-hour manual process down to just 2 minutes using parallel processing, saving approximately one developer-month per region launch. Fixed a critical 5-year-old database bug with a permanent solution. Presented work to 30+ engineers and the org-wide AWS Cryptography teams.",
      tech: "AWS Lambda, S3, DynamoDB, Step Functions, CloudWatch",
      icon: <CloudIcon />,
      highlight: true
    },
    {
      year: "Aug 2024 - May 2028",
      title: "BS in Computer Science",
      company: "Virginia Tech",
      description: "Pursuing degree while maintaining a 3.85/4.0 GPA. Balances coursework with research, teaching, and internships. Through teaching and research, actively contributes to the CS community and helps other students succeed.",
      icon: <SchoolIcon />,
      highlight: true
    },
    {
      year: "Sep 2024 - Jul 2025",
      title: "Web Developer",
      company: "SASE (Society of Asian Scientists & Engineers)",
      description: "Developed and maintained the official SASE website. Improved the site's responsiveness across devices and enhanced code maintainability. This work helps the organization better serve its members and community.",
      tech: "React, HTML, CSS, JavaScript",
      icon: <GlobeIcon />
    },
    {
      year: "Jun 2020 - Aug 2024",
      title: "Computer Science Tutor",
      company: "Unity Learning",
      description: "Tutored students in math and computer science for over 4 years. Specializes in breaking down complex topics into simple, beginner-friendly explanations. Goal is helping students build strong foundations in programming that will serve them throughout their careers.",
      icon: <UsersIcon />
    }
  ];

  return (
    <main 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-12 md:py-16"
      style={{ backgroundImage: "url('/timeline.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-black mb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h1>
        <motion.p 
          className="text-gray-600 mb-8 md:mb-12 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey
        </motion.p>

        {/* Timeline Container */}
        <div className="w-full max-w-6xl px-4 md:px-8">
          <div className="relative">
            {/* Vertical Timeline Bar - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/30"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-10">
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

  // Alternate sides: even indices on left, odd on right
  const side = index % 2 === 0 ? "left" : "right";
  const slideDirection = side === "left" ? -100 : 100;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-black/80 border-4 border-white z-10 shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      />

      {/* Content Card */}
      <motion.div
        className={`w-[45%] ${
          side === "left" ? "pr-10" : "pl-10"
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
        <div className={`w-full rounded-2xl backdrop-blur-xl shadow-xl border p-4 md:p-6 transition-all hover:shadow-2xl ${
          item.highlight 
            ? 'bg-white/95 border-black/20 shadow-2xl' 
            : 'bg-white/8 border-white/30'
        }`}>
          {/* Icon and Year Row */}
          <div className="flex items-center gap-3 mb-3">
            {item.icon && (
              <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                item.highlight ? 'bg-black/10 text-black/80' : 'bg-white/20 text-black/60'
              }`}>
                {item.icon}
              </div>
            )}
            <div className={`text-xs font-medium tracking-wide ${
              item.highlight ? 'text-black/60' : 'text-black/50'
            }`}>
              {item.year}
            </div>
          </div>
          
          {/* Title */}
          <h3 className={`text-lg md:text-xl font-bold mb-1 leading-snug ${
            item.highlight ? 'text-black/90' : 'text-black/80'
          }`}>
            {item.title}
          </h3>
          
          {/* Company */}
          <p className={`text-xs md:text-sm font-medium mb-3 ${
            item.highlight ? 'text-black/70' : 'text-black/60'
          }`}>
            {item.company}
          </p>
          
          {/* Description */}
          <p className={`text-xs md:text-sm leading-relaxed mb-2 ${
            item.highlight ? 'text-black/75' : 'text-black/65'
          }`}>
            {item.description}
          </p>

          {/* Technologies */}
          {item.tech && (
            <div className="mt-3 pt-3 border-t border-gray-200/50">
              <p className={`text-xs font-medium mb-1 ${
                item.highlight ? 'text-black/60' : 'text-black/50'
              }`}>
                Technologies:
              </p>
              <p className={`text-xs ${
                item.highlight ? 'text-black/70' : 'text-black/60'
              }`}>
                {item.tech}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

