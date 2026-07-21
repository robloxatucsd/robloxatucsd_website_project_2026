"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from 'react';

interface GroupPhotoWithVideoProps {
  src: string;
  videoSrc: string;
  alt: string;
  caption: string;
  hoverCaption?: string;
  objectPosition?: string;
  scale?: number;
  borderColor?: string;
  height?: string;
}

export default function GroupPhotoWithVideo({ 
  src, 
  videoSrc, 
  alt, 
  caption, 
  hoverCaption,
  objectPosition = "50% 50%",
  scale = 1.0,
  borderColor = "border-orange-400/30",
  height = "h-56 md:h-72"
}: GroupPhotoWithVideoProps) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering]);

  return (
    <div 
      className={`relative w-full rounded-xl overflow-hidden border-2 ${borderColor}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <div 
        className={`relative w-full ${height}`}
        style={{ 
          display: isHovering ? 'none' : 'block'
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ 
            objectPosition: objectPosition,
            transform: `scale(${scale})`,
            transformOrigin: "center center"
          }}
        />
      </div>
      
      {/* Video */}
      <div 
        className={`relative w-full ${height}`}
        style={{ 
          display: isHovering ? 'block' : 'none'
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          style={{
            objectPosition: objectPosition,
            transform: `scale(${scale})`,
            transformOrigin: "center center"
          }}
        />
      </div>
      
      {/* Caption Overlay - Changes on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none transition-all duration-300">
        <p className="text-white text-sm font-bold tracking-wide drop-shadow-lg text-left [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)] transition-opacity duration-300">
          {isHovering && hoverCaption ? hoverCaption : caption}
        </p>
      </div>
    </div>
  );
}