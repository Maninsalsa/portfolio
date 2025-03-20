// src/components/hero/hero.tsx
import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  fallbackImageSrc
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  fallbackImageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  videoSrc,
  fallbackImageSrc
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <VideoBackground videoSrc={videoSrc} fallbackImageSrc={fallbackImageSrc} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl font-light">{subtitle}</p>
        <div className="mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium mr-4 hover:bg-opacity-90 transition-all">
            View Projects
          </button>
          <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;