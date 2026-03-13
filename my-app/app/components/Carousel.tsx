"use client";

import React, { useRef } from 'react';

interface EventItem {
  image: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  items: EventItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust based on how far you want to jump
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCardClick = (title: string) => {
    // Placeholder for your navigation logic
    console.log(`Navigating to: ${title}`);
    alert(`Event Details: ${title}\n(Navigation logic pending)`);
  };

  return (
    <div className="relative group">
      {/* Left Arrow - Plain SVG */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll left"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      {/* Right Arrow - Plain SVG */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll right"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ 
          msOverflowStyle: 'none',  /* IE and Edge */
          scrollbarWidth: 'none'    /* Firefox */
        }}
      >
        {/* Hide scrollbar for Chrome, Safari and Opera */}
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}} />

        {items.map((event, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(event.title)}
            className="min-w-[300px] md:min-w-[350px] cursor-pointer snap-start flex flex-col transition-transform duration-200 active:scale-95"
          >
            {/* Image Container */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#1a1a1a]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="mt-3">
              <h3 className="text-white font-bold text-xl truncate tracking-tight">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">
                {event.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;