// src/utils/scroll-observer.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
  scrollProgress: 0,
});

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
    
    // Calculate how far down the page we've scrolled as a percentage
    const height = document.body.scrollHeight - window.innerHeight;
    if (height > 0) {
      setScrollProgress(scrollY / height);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize values
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

export default ScrollObserver;