"use client";

import Image from "next/image";
import NavBar from '../modules/navbar';
import FlipCard from '../components/FlipCard';
import { useState, useEffect } from 'react';
interface TeamMember {
  name: string;
  position: string;
  irlImage?: string;
  robloxImage?: string;
  objectPosition?: string;
  zoom?: number;
}

function TeamMemberCard({
  name,
  position,
  irlImage,
  robloxImage,
  objectPosition = "center",
  zoom = 1,
  isFlipped = false
}: TeamMember & { isFlipped?: boolean }) {
  return (
    <FlipCard
      name={name}
      position={position}
      irlImage={irlImage}
      robloxImage={robloxImage}
      objectPosition={objectPosition}
      zoom={zoom}
      isFlipped={isFlipped}
    />
  );
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  sectionOffset: number;
  randomlyFlippedCards: Set<number>;
}

function TeamSection({ title, members, sectionOffset, randomlyFlippedCards }: TeamSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-white text-2xl font-bold mb-6 text-left">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => {
          const globalIndex = sectionOffset + index;
          const isFlipped = randomlyFlippedCards.has(globalIndex);
          return (
            <TeamMemberCard key={index} {...member} isFlipped={isFlipped} />
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  const execs: TeamMember[] = [
    {
      name: 'Mitchell Moundraty',
      position: 'President',
      irlImage: 'Mitchell-Moundraty.jpg',
      robloxImage: 'rbxpfp-Mitchell Moundraty.webp',
      zoom: 1.5, // zoom in
      objectPosition: 'bottom'
    },
    { 
      name: 'Bree Tassinari', 
      position: 'VP Finance', 
      irlImage: 'Bree-Tassinari.jpg',
      robloxImage: 'rbxpfp-Bree Tassinari.png'
    },
    { 
      name: 'Sally Zorigoo', 
      position: 'Co-VP Marketing', 
      irlImage: 'S-Z.webp',
      robloxImage: 'rbxpfp-S Z.webp'
    },
    { 
      name: 'Yaena Chun', 
      position: 'Co-VP Marketing', 
      irlImage: 'Yaena-Chun.jpeg',
      robloxImage: 'rbxpfp-Yaena Chun.jpeg'
    },
    { 
      name: 'Shawn Cheng', 
      position: 'VP Events', 
      irlImage: 'Shawn-Cheng.jpg',
      robloxImage: 'rbxpfp-Shawn Cheng.png'
    },
  ];

  const events: TeamMember[] = [
    { 
      name: 'Manuel Cerda', 
      position: 'Events Officer', 
      irlImage: 'Manuel-Cerda.png',
      robloxImage: 'rbxpfp-Manuel Cerda.webp'
    },
    { 
      name: 'Jimmy Che', 
      position: 'Events Officer', 
      irlImage: 'Jimmy-Che.JPG',
      robloxImage: 'rbxpfp-Jimmy Che.jpg'
    },
    {
      name: 'David Gao',
      position: 'Events Officer',
      irlImage: 'David-Gao.png',
      robloxImage: 'rbxpfp-David Gao.png',
      objectPosition: 'top', // move img up to show face
      zoom: 1.5
    },
  ];

  const marketing: TeamMember[] = [
    { 
      name: 'Wanyi Wu', 
      position: 'Social Media', 
      irlImage: 'Wanyi-Wu.jpg',
      robloxImage: 'rbxpfp-Wanyi Wu.png'
    },
    { 
      name: 'Jay Siqueiroz', 
      position: 'Social Media', 
      irlImage: 'Jay-Siqueiroz.jpg',
      robloxImage: 'rbxpfp-Jay Siqueiroz.png'
    },
    { 
      name: 'Joie Fong', 
      position: 'Outreach & Collabs', 
      irlImage: 'Joie-Fong.jpeg',
      robloxImage: 'rbxpfp-Joie Fong.png'
    },
    { 
      name: 'Samantha St Clair', 
      position: 'Outreach & Collabs', 
      irlImage: 'Samantha-St-Clair.JPG',
      robloxImage: 'rbxpfp-Samantha St Clair.webp'
    },
    { 
      name: 'Robyn Todd', 
      position: 'Art Lead', 
      irlImage: 'Robyn-Todd.jpg',
      robloxImage: 'rbxpfp-Robyn Todd.png'
    },
    { 
      name: 'Julie Nguyen', 
      position: 'Project Manager', 
      irlImage: 'Julie-Nguyen.jpeg',
      robloxImage: 'rbxpfp-Julie Nguyen.webp'
    },
  ];

  const finance: TeamMember[] = [
    {
      name: 'Nicole Fong',
      position: 'Finance Officer',
      irlImage: 'Nicole-Fong.png',
      robloxImage: 'rbxpfp-Nicole Fong.jpeg',
      zoom: 1.4, // zoom in
      objectPosition: 'top'
    },
    { 
      name: 'Yeheng Mai', 
      position: 'Finance Officer', 
      irlImage: 'Yeheng-Mai.png',
      robloxImage: 'rbxpfp-Yeheng Mai.png'
    },
    { 
      name: 'Alice Park', 
      position: 'Finance Officer', 
      irlImage: 'Alice-Park.jpg',
      robloxImage: 'rbxpfp-Alice Park.webp'
    },
    { 
      name: 'Kaylin Bayek', 
      position: 'Finance Officer', 
      irlImage: 'Kaylin-Bayek.jpg',
      robloxImage: 'rbxpfp-Kaylin Bayek.png'
    },
  ];

  // Random flipping logic
  const [randomlyFlippedCards, setRandomlyFlippedCards] = useState<Set<number>>(new Set());

  // Create a flat array of all team members with their section indices
  const allMembers = [
    ...execs.map((member, index) => ({ ...member, globalIndex: index })),
    ...events.map((member, index) => ({ ...member, globalIndex: index + execs.length })),
    ...marketing.map((member, index) => ({ ...member, globalIndex: index + execs.length + events.length })),
    ...finance.map((member, index) => ({ ...member, globalIndex: index + execs.length + events.length + marketing.length })),
  ];

  const triggerRandomFlips = () => {
    const totalCards = allMembers.length;
    const numToFlip = Math.min(Math.floor(Math.random() * 3) + 3, totalCards); // 3-5 cards

    const indicesToFlip = new Set<number>();
    while (indicesToFlip.size < numToFlip) {
      indicesToFlip.add(Math.floor(Math.random() * totalCards));
    }

    setRandomlyFlippedCards(indicesToFlip);

    // Flip back after 1-2 seconds
    const flipDuration = Math.random() * 1000 + 1000; // 1-2 seconds
    setTimeout(() => {
      setRandomlyFlippedCards(new Set());
    }, flipDuration);
  };

  useEffect(() => {
    // Start random flipping after component mounts
    const startRandomFlips = () => {
      // Initial delay of 2-5 seconds
      const initialDelay = Math.random() * 3000 + 2000;
      setTimeout(() => {
        triggerRandomFlips();

        // Continue with random intervals of 5-10 seconds
        const interval = setInterval(() => {
          triggerRandomFlips();
        }, Math.random() * 5000 + 5000); // 5-10 seconds

        return () => clearInterval(interval);
      }, initialDelay);
    };

    startRandomFlips();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Officers</h1>
          <p className="text-[#A3A3A3] text-lg">
            Get to know the dedicated team members who make our organization thrive.
          </p>
        </header>

        <div>
          <TeamSection title="Execs" members={execs} sectionOffset={0} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Events" members={events} sectionOffset={execs.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Marketing" members={marketing} sectionOffset={execs.length + events.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Finance" members={finance} sectionOffset={execs.length + events.length + marketing.length} randomlyFlippedCards={randomlyFlippedCards} />
        </div>
      </main>
    </div>
  );
}