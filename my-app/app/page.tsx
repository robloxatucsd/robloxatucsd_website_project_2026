"use client";

import Image from "next/image";
import Link from 'next/link';

import NavBar from './modules/navbar';
import Footer from './components/Footer';
import Counter from './components/Counter';
import GroupPhotoWithVideo from './components/GroupPhotoWithVideo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <NavBar />

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-24 border border-gray-800">
          {/* Background Image with Overlay */}
          <div className="relative w-full" style={{ height: "550px" }}>
            <Image
              src="/homeMedias/robloxRBXDevGroup.JPG"
              alt="Roblox + RBXDev Club Group Photo"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 70%" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          </div>
          
          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight leading-tight">
                  Roblox + <span className="text-[#00b2ff]">RBXDev</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  @ UC San Diego
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 backdrop-blur-sm">
                    Social Club
                  </span>
                  <span className="px-4 py-1.5 bg-[#00b2ff]/20 text-[#00b2ff] rounded-full text-sm font-medium border border-[#00b2ff]/30 backdrop-blur-sm">
                    Technical Club
                  </span>
                </div>
              </div>
              <Link 
                href="/events" 
                className="flex-shrink-0 px-8 py-4 bg-[#00b2ff] hover:bg-[#0099dd] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00b2ff]/30 text-lg"
              >
                Join Our Next Event →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats/Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-10 border border-gray-800 text-center hover:border-[#00b2ff]/30 transition-all duration-300">
            <Counter end={400} suffix="+" duration={2500} />
            <div className="text-gray-400 text-base">Robloxian Members</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-10 border border-gray-800 text-center hover:border-[#00b2ff]/30 transition-all duration-300">
            <Counter end={25} suffix="+" duration={2500} />
            <div className="text-gray-400 text-base">Events Hosted</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-10 border border-gray-800 text-center hover:border-[#00b2ff]/30 transition-all duration-300">
            <Counter end={10} suffix="+" duration={2500} />
            <div className="text-gray-400 text-base">Games Created</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-10 border border-gray-800 text-center hover:border-[#00b2ff]/30 transition-all duration-300">
            <Counter end={30000} suffix="+" duration={2500} />
            <div className="text-gray-400 text-base">Robux Given Out</div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-8 md:p-10 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">About Our Club</h2>
            <p className="text-gray-300 leading-relaxed">
              We are both a <span className="text-orange-400 font-medium">Social</span> and <span className="text-[#00b2ff] font-medium">Technical</span> Club on Campus looking to foster a community with UCSD Students who are interested in Roblox and Roblox Development.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-8 md:p-10 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Social Events</h3>
                  <p className="text-gray-400 text-sm">Game Nights, Tournaments, Spontaneous Hangouts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#00b2ff] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Technical Events</h3>
                  <p className="text-gray-400 text-sm">Workshops, Game Jams, Roblox Dev Class</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Showcase Section - Updated with highlight hover effect */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-white">Student Games</h2>
            <Link 
              href="/projects"
              className="text-[#00b2ff] hover:text-[#0099dd] transition-colors font-medium group flex items-center gap-1"
            >
              <span className="text-sm">View All</span>
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
          <p className="text-gray-400 mb-8">Check out some of the amazing games created by our members</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Game 1 */}
            <Link 
              href="https://www.roblox.com/games/116487592197166/King-of-The-Slaps"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 h-full">
                <div className="relative w-full h-64 bg-gray-700 overflow-hidden transition-all duration-300 group-hover:ring-2 group-hover:ring-[#00b2ff] group-hover:ring-offset-2 group-hover:ring-offset-[#1a1a1a]">
                  <Image
                    src="/homeMedias/kingOfTheSlapsThumbnail.png"
                    alt="King of The Slaps"
                    fill
                    className="object-cover"
                  />
                  {/* Highlight overlay */}
                  <div className="absolute inset-0 bg-[#00b2ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#00b2ff]">King of The Slaps</h3>
                  <p className="text-gray-400 text-sm">Can you slap your opponents out before they slap you?</p>
                  <span className="inline-block mt-4 text-[#00b2ff] group-hover:text-[#0099dd] transition-colors duration-300 font-medium">
                    Play Now →
                  </span>
                </div>
              </div>
            </Link>

            {/* Game 2 */}
            <Link 
              href="https://www.roblox.com/games/95619237082546/Capture-the-Cheese"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 h-full">
                <div className="relative w-full h-64 bg-gray-700 overflow-hidden transition-all duration-300 group-hover:ring-2 group-hover:ring-[#00b2ff] group-hover:ring-offset-2 group-hover:ring-offset-[#1a1a1a]">
                  <Image
                    src="/homeMedias/captureTheCheeseThumbnail.png"
                    alt="Capture the Cheese"
                    fill
                    className="object-cover"
                  />
                  {/* Highlight overlay */}
                  <div className="absolute inset-0 bg-[#00b2ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#00b2ff]">Capture the Cheese</h3>
                  <p className="text-gray-400 text-sm">A fast-paced capture the flag style game with a cheesy twist!</p>
                  <span className="inline-block mt-4 text-[#00b2ff] group-hover:text-[#0099dd] transition-colors duration-300 font-medium">
                    Play Now →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Callout Section with Group Images - 1 on top, 2 below */}
        <div className="rounded-2xl p-8 md:p-12 border border-[#00b2ff]/10 text-center">
          {/* Group Images */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Top Image */}
            <GroupPhotoWithVideo
              src="/homeMedias/groupPhoto1.png"
              videoSrc="/homeMedias/video1.mp4"
              alt="Group photo 1"
              caption="2025-2026 Roblox + RBXDev Officers in Natural Disaster Survival"
              hoverCaption="Spontaneous Game Night"
              objectPosition="50% 60%"
              scale={1.0}
              height="h-56 md:h-72"
            />
            
            {/* Bottom Two Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GroupPhotoWithVideo
                src="/homeMedias/groupPhoto2.png"
                videoSrc="/homeMedias/video2.mp4"
                alt="Group photo 2"
                caption="Dress to Impress Tournament! Theme: UCSD Colleges"
                hoverCaption="Spontaneous Game Night"
                objectPosition="50% 40%"
                scale={1.1}
                height="h-48 md:h-56"
              />
              <GroupPhotoWithVideo
                src="/homeMedias/groupPhoto3.png"
                videoSrc="/homeMedias/video3.mp4"
                alt="Group photo 3"
                caption="Winter'26 GBM Squid Game Competition"
                hoverCaption="Spontaneous Game Night"
                objectPosition="50% 90%"
                scale={2.8}
                height="h-48 md:h-56"
              />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Come join us!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Join our community of fellow robloxians and developers at UCSD. 
            Whether you're here to build connections or build games, you are always welcome.
          </p>
          
          <Link 
            href="/events" 
            className="inline-block px-8 py-4 bg-[#00b2ff] hover:bg-[#0099dd] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00b2ff]/30 text-lg"
          >
            Join Our Next Event →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}