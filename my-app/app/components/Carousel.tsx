"use client";

import React, { useRef, useEffect, useState } from 'react';

interface EventItem {
  image: string;
  title: string;
  subtitle: string;
  instagramLink?: string | null;
}

interface CarouselProps {
  items: EventItem[];
  emptyMessage?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, emptyMessage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [cardWidth, setCardWidth] = useState(280);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    const updateCardWidth = () => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        if (firstChild) {
          const width = firstChild.offsetWidth;
          setCardWidth(width + 24);
        }
      }
    };
    
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, [items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = cardWidth * 3;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Clean text
  const cleanText = (text: string) => {
    if (!text) return '';
    let cleaned = text.replace(/\s+/g, ' ').trim();
    return cleaned;
  };

  const truncateText = (text: string, maxLength: number = 80) => {
    const cleaned = cleanText(text);
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.slice(0, maxLength) + '...';
  };

  // Empty state
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-800/30 rounded-xl border border-gray-700 border-dashed">
        <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-400 text-lg">
          {emptyMessage || "No upcoming events just yet, check back again soon!"}
        </p>
        <p className="text-gray-500 text-s mt-2">Stay tuned for future events!</p>
      </div>
    );
  }

  if (!isClient) {
    return (
      <div className="relative group">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {items.map((event, index) => (
            <div key={index} className="min-w-[280px] max-w-[280px] flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <div className="w-full h-40 bg-gray-700"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll left"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      {/* Right Arrow */}
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
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}} />

        {items.map((event, index) => {
          const isHovered = hoveredIndex === index;
          
          // If there's an Instagram link, wrap the card in an <a> tag
          const cardContent = (
            <>
              {/* Image Container */}
              <div className="relative w-full h-40 bg-gray-700 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 
                  className="text-white font-bold text-base truncate tracking-tight transition-colors duration-300"
                  style={{
                    color: isHovered ? '#00b2ff' : 'white',
                  }}
                >
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2 flex-1">
                  {truncateText(event.subtitle, 80)}
                </p>
                
                {/* Instagram Link */}
                {event.instagramLink && (
                  <span className="inline-flex items-center mt-3 text-[#00b2ff] text-sm font-medium w-fit">
                    View Event Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                )}
              </div>
            </>
          );

          // if there's an instagram link, wrap the entire card in an <a> tag
          if (event.instagramLink) {
            return (
              <a
                key={index}
                href={event.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="min-w-[280px] max-w-[280px] snap-start flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 shadow-lg cursor-pointer no-underline"
                style={{
                  borderColor: isHovered ? '#00b2ff' : 'rgb(55, 65, 81)',
                }}
              >
                {cardContent}
              </a>
            );
          }

          // if no instagram link, render as a non-clickable div
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="min-w-[280px] max-w-[280px] snap-start flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 shadow-lg"
              style={{
                borderColor: isHovered ? '#00b2ff' : 'rgb(55, 65, 81)',
              }}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;