"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Card({ image, title, subtitle }: CardProps) {
  const handleClick = () => {
    console.log("Navigation logic pending (subpage vs popup).");
    alert("Navigation logic pending (subpage vs popup).");
  };

  return (
    <div
      className="flex-shrink-0 w-64 h-52 bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={handleClick}
    >
      <div className="relative h-32">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
}