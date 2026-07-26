"use client";

import Image from "next/image";
import Link from 'next/link';
import NavBar from '../modules/navbar';
import Footer from '../components/Footer';
import FlipCard from '../components/FlipCard';
import { useState, useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

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
      zoom: 1.5,
      objectPosition: 'bottom'
    },
    { 
      name: 'Shawn Cheng', 
      position: 'Dev VP', 
      irlImage: 'Shawn-Cheng.jpg',
      robloxImage: 'rbxpfp-Shawn Cheng.png'
    },
    { 
      name: 'Jimmy Che', 
      position: 'Events VP', 
      irlImage: 'Jimmy-Che.JPG',
      robloxImage: 'rbxpfp-Jimmy Che.jpg'
    },
    { 
      name: 'Sally Zorigoo', 
      position: 'Marketing Co-VP', 
      irlImage: 'S-Z.webp',
      robloxImage: 'rbxpfp-S Z.webp'
    },
    { 
      name: 'Yaena Chun', 
      position: 'Marketing Co-VP', 
      irlImage: 'Yaena-Chun.jpeg',
      robloxImage: 'rbxpfp-Yaena Chun.jpeg'
    },
    { 
      name: 'Bree Tassinari', 
      position: 'Finance VP', 
      irlImage: 'Bree-Tassinari.jpg',
      robloxImage: 'rbxpfp-Bree Tassinari.png'
    },
    { 
      name: 'Robyn Todd', 
      position: 'Art VP', 
      irlImage: 'Robyn-Todd.jpg',
      robloxImage: 'rbxpfp-Robyn Todd.png'
    },
    { 
      name: 'Emily Hoy', 
      position: 'Outreach VP', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'David Gao',
      position: 'Secretary',
      irlImage: 'David-Gao.png',
      robloxImage: 'rbxpfp-David Gao.png',
      objectPosition: 'top',
      zoom: 1.5
    },
  ];

  const dev: TeamMember[] = [
    { 
      name: 'Ryan Lee', 
      position: 'Game Jam Lead', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Kim Antoinette Barcelos', 
      position: 'UGC Lead', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Caio Deshong',
      position: 'Writing Lead',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Nicole Fong',
      position: 'Website Manager',
      irlImage: 'Nicole-Fong.png',
      robloxImage: 'rbxpfp-Nicole Fong.jpeg',
      zoom: 1.4,
      objectPosition: 'top'
    },
  ];

  const events: TeamMember[] = [
    {
      name: 'Natalie Tran',
      position: 'Historian',
      irlImage: 'Natalie-Tran.jpeg',
      robloxImage: 'rbxpfp-Natalie Tran.jpeg',
      zoom: 1.5
    },
    {
      name: 'Sam Villarruel',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Leyla Yunusova',
      position: 'Events Staff',
      irlImage: 'Leyla-Yunusova.jpg',
      robloxImage: 'rbxpfp-Leyla Yunusova.webp'
    },
    {
      name: 'Jimena Lopez',
      position: 'Events Staff',
      irlImage: 'Jimena-Lopez.jpeg',
      robloxImage: 'rbxpfp-Jimena Lopez.jpeg'
    },
    {
      name: 'Nghi Nguyen',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
  ];

  const marketing: TeamMember[] = [
    { 
      name: 'Manuel Cerda', 
      position: 'Social Media', 
      irlImage: 'Manuel-Cerda.png',
      robloxImage: 'rbxpfp-Manuel Cerda.webp'
    },
    { 
      name: 'Wanyi Wu', 
      position: 'Social Media', 
      irlImage: 'Wanyi-Wu.jpg',
      robloxImage: 'rbxpfp-Wanyi Wu.png'
    },
  ];

  const art: TeamMember[] = [
    { 
      name: 'Ric Penales', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Catherine Xu', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Kelsey Pi', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Hugo Flanagan', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
  ];

  const finance: TeamMember[] = [
    { 
      name: 'Jesus Michel', 
      position: 'Finance Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Jai Benedito', 
      position: 'Finance Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Kathy Charry', 
      position: 'Fundraising Manager', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
  ];

  const outreach: TeamMember[] = [
    { 
      name: 'Samantha St. Clair', 
      position: 'Outreach & Collabs', 
      irlImage: 'Samantha-St-Clair.JPG',
      robloxImage: 'rbxpfp-Samantha St Clair.webp'
    },
  ];

  // Random flipping logic
  const [randomlyFlippedCards, setRandomlyFlippedCards] = useState<Set<number>>(new Set());

  // Create a flat array of all team members with their section indices
  const allMembers = [
    ...execs.map((member, index) => ({ ...member, globalIndex: index })),
    ...dev.map((member, index) => ({ ...member, globalIndex: index + execs.length })),
    ...events.map((member, index) => ({ ...member, globalIndex: index + execs.length + dev.length })),
    ...marketing.map((member, index) => ({ ...member, globalIndex: index + execs.length + dev.length + events.length })),
    ...art.map((member, index) => ({ ...member, globalIndex: index + execs.length + dev.length + events.length + marketing.length})),
    ...finance.map((member, index) => ({ ...member, globalIndex: index + execs.length + dev.length + events.length + marketing.length + art.length})),
    ...outreach.map((member, index) => ({ ...member, globalIndex: index + execs.length + dev.length + events.length + marketing.length + art.length + finance.length})),
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
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(/generalMedias/background.png)` }}
    >
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
          <TeamSection title="Dev" members={dev} sectionOffset={execs.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Events" members={events} sectionOffset={execs.length + dev.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Marketing" members={marketing} sectionOffset={execs.length + dev.length + events.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Art" members={art} sectionOffset={execs.length + dev.length + events.length + marketing.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Finance" members={finance} sectionOffset={execs.length + dev.length + events.length + marketing.length + art.length} randomlyFlippedCards={randomlyFlippedCards} />
          <TeamSection title="Outreach" members={outreach} sectionOffset={execs.length + dev.length + events.length + marketing.length + art.length + finance.length} randomlyFlippedCards={randomlyFlippedCards} />
        </div>

        {/* Archive of Other Years */}
        <section className="mt-16 pt-8 border-t border-gray-800">
          <h2 className="text-white text-2xl font-bold mb-4 text-left">Other Years</h2>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/team/2025-2026-officers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b2ff]/10 hover:bg-[#00b2ff]/20 text-[#00b2ff] hover:text-[#0099dd] font-medium rounded-lg border border-[#00b2ff]/20 hover:border-[#00b2ff]/40 transition-all duration-300 group"
            >
              <span>2025-2026 Officers</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <ScrollToTop threshold={300} />

      <Footer />
    </div>
  );
}