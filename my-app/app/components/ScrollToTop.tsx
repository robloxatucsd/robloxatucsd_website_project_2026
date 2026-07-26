"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number; // How many pixels to scroll before showing the button
  className?: string; // Additional custom classes
}

export default function ScrollToTop({ threshold = 300, className = '' }: ScrollToTopProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-[#00b2ff] hover:bg-[#0099dd] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}