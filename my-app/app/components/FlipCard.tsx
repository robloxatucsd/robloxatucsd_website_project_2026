"use client";

import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  name: string;
  position: string;
  irlImage?: string;
  robloxImage?: string;
  objectPosition?: string;
  zoom?: number;
  isFlipped?: boolean; // External control for random flipping
}

export default function FlipCard({
  name,
  position,
  irlImage,
  robloxImage,
  objectPosition = "center",
  zoom = 1,
  isFlipped = false
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Card is flipped if hovered OR externally controlled
  const shouldFlip = isHovered || isFlipped;

  const irlSrc = irlImage ? `/team/irlprofiles/${irlImage}` : null;
  const robloxSrc = robloxImage ? `/team/robloxprofiles/${robloxImage}` : null;

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 group/card">
      <div
        className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-amber-50/20 ring-2 ring-amber-50/30 cursor-pointer perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            shouldFlip ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front side - IRL Image */}
          <div className="absolute inset-0 backface-hidden">
            {irlSrc ? (
              <Image
                src={irlSrc}
                alt={name}
                fill
                style={{
                  objectPosition: objectPosition,
                  transform: `scale(${zoom})`
                }}
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <div className="absolute inset-0 bg-amber-50/50 flex items-center justify-center">
                <span className="text-gray-600 text-xs">No Image</span>
              </div>
            )}
          </div>

          {/* Back side - Roblox Image */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            {robloxSrc ? (
              <Image
                src={robloxSrc}
                alt={`${name} - Roblox Profile`}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <div className="absolute inset-0 bg-blue-500/50 flex items-center justify-center">
                <span className="text-white text-xs">Roblox</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-[#A3A3A3] text-sm">{position}</p>
      </div>
    </div>
  );
}