import Image from "next/image";
import Link from 'next/link';

import NavBar from './modules/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <NavBar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Logo and text container */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl shadow-2xl p-8 md:p-12 mb-10 border border-gray-800">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image 
                src="/generalMedias/Club Logo No Bg.png" 
                alt="Club Logo" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          <div className="md:ml-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
              Roblox + <span className="text-[#00b2ff]">RBXDev</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              @ UC San Diego
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-1.5 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                Social Club
              </span>
              <span className="px-4 py-1.5 bg-[#00b2ff]/10 text-[#00b2ff] rounded-full text-sm font-medium border border-[#00b2ff]/20">
                Technical Club
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}