"use client";

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
        <BlurText
          text="Hi, Im Elizabeth. Welcome!"
          delay={120} animateBy="words" direction="top" onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
        />

        <p className="text-white/90 text-lg max-w-xl">
          Discover my projects, learn about my journey, and get in touch :)
        </p>
        {/* Profile Card */}
        <div className="absolute bottom-17 right-25">
          <ProfileCard 
            image="/personal.png"
          />
        </div>
      </div>
    </main>
  );
}