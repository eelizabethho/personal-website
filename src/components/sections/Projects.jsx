"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    id: 'polychat',
    title: 'PolyChat',
    description: 'Real-time multilingual messaging app with async translation pipeline, caching, and on-demand translation.',
    fullDescription: 'PolyChat is a real-time messaging app that supports automatic and on-demand translation. Users send messages in any language, and recipients can see the original message with an optional translated version in their chosen language. Features include an async translation pipeline with queue-based workers, Redis caching for deduplication, WebSocket real-time delivery, and comprehensive monitoring. Built with a microservices architecture using Java Spring Boot, Python workers, and PostgreSQL.',
    deploymentLink: null,
    githubLink: null,
    techStack: ['Java', 'Spring Boot', 'Python', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
    image: '/POLY.png',
    imageAlt: 'PolyChat preview',
    status: 'in-progress'
  },
  {
    id: 'clari-ai',
    title: 'Clari AI',
    description: 'AI interview coach with transcription and structured feedback to help you improve with clarity.',
    fullDescription: 'Clari AI is an AI-powered interview coaching platform that provides real-time transcription and structured feedback to help users improve their interview performance. The app uses advanced AI to analyze speech patterns, provide actionable insights, and help users communicate with greater clarity and confidence.',
    deploymentLink: 'https://clari-ai.vercel.app/',
    githubLink: 'https://github.com/eelizabethho/clari-ai',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Vercel'],
    image: '/Subject.png',
    imageAlt: 'Clari AI preview',
    status: 'completed'
  },
  {
    id: 'summanotes',
    title: 'SummaNotes',
    description: 'Chrome extension that provides AI-powered summaries and text-to-speech for highlighted web content.',
    fullDescription: 'SummaNotes is a Chrome extension that allows users to highlight any text on a webpage and instantly receive an AI-powered summary. The extension also includes a built-in text-to-speech feature, enabling users to listen to content instead of reading it. Built for VTHacks 13 hackathon.',
    deploymentLink: 'https://devpost.com/software/summanotes',
    githubLink: 'https://github.com/eelizabethho/summanote-extension',
    techStack: ['JavaScript', 'React', 'HTML', 'CSS', 'OpenAI API', 'Amazon Polly', 'Chrome Extension API'],
    image: '/SummaN.png',
    imageAlt: 'SummaNotes preview',
    imageType: 'banner',
    status: 'completed'
  },
  {
    id: 'weather-i-go',
    title: 'Weather I Go',
    description: 'Mobile app that uses NASA climate data and AI to describe weather in natural language and predict conditions up to 2100.',
    fullDescription: 'Weather-I-Go is a mobile app developed for the NASA Space Apps Challenge that uses NASA climate data and AI to describe weather in natural language and predict conditions up to the year 2100 based on users\' "perfect weather" preferences. Built with a full-stack geospatial data pipeline integrating NASA POWER and Meteomatics APIs.',
    deploymentLink: 'https://devpost.com/software/weather-i-go',
    githubLink: 'https://github.com/gub05/weather-i-go',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Firebase', 'NASA POWER API', 'Meteomatics API', 'Google Gemini'],
    image: '/image.png',
    imageAlt: 'Weather I Go preview',
    status: 'completed'
  }
];

export default function Projects() {
  const [inView, setInView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleLearnMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main ref={ref} className="w-screen overflow-x-hidden bg-white relative">
      {/* Title */}
      <motion.div 
        className="py-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-normal text-black/80">Projects</h1>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative px-8 md:px-16 pb-8">
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ProjectCard
                  inView={inView}
                  index={currentIndex}
                  project={projectsData[currentIndex]}
                  onLearnMore={handleLearnMore}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg z-10"
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg z-10"
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-black w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectCard({ inView, index, project, onLearnMore }) {
  const handleGitHubClick = (e) => {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
    e.stopPropagation();
  };

  const handleLearnMoreClick = (e) => {
    onLearnMore(project);
    e.stopPropagation();
  };
  
  return (
    <motion.div
      className="w-full bg-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300 min-h-[400px] md:min-h-[350px]"
      whileHover={{ y: -5 }}
    >
      {/* LEFT: Text Content */}
      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3 flex-wrap justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {project.title}
          </h2>
          {project.status === 'in-progress' && (
            <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
              In Progress
            </span>
          )}
        </div>
        <p className="text-base text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
          {project.description}
        </p>
        <div className="flex gap-3 justify-center md:justify-start">
          <motion.button 
            className="px-5 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </motion.button>
          {project.githubLink && (
            <motion.button 
              className="px-5 py-2 text-sm rounded-full border border-black hover:bg-black hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGitHubClick}
            >
              GitHub
            </motion.button>
          )}
        </div>
      </div>

      {/* RIGHT: Image */}
      {project.image && (
        <div 
          className="flex-1 flex justify-center items-center max-w-[280px] md:max-w-[350px] flex-shrink-0"
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className={`w-full h-auto object-contain drop-shadow-xl max-h-[400px] md:max-h-[450px] ${project.imageType === 'banner' ? 'rounded-2xl' : ''}`}
          />
        </div>
      )}
    </motion.div>
  );
}

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="pr-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-black">
              {project.title}
            </h2>
            {project.status === 'in-progress' && (
              <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                In Progress
              </span>
            )}
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.deploymentLink && (
              <motion.a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Deployment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
