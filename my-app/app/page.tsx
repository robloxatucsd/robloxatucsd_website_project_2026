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

        {/* Group photo container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10 border border-gray-800">
          <div className="relative w-full" style={{ height: "570px" }}>
            <Image
              src="/homeMedias/robloxRBXDevGroup.JPG"
              alt="Roblox + RBXDev Club Group Photo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Photo caption */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white/80 text-sm font-light tracking-wide drop-shadow-lg">
              Our Roblox + RBXDev community at UCSD!
            </p>
          </div>
        </div>

        {/* Club description text container */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-800">
          <div className="flex items-start gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-white">About Our Club</h2>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We are both a <span className="text-purple-400 font-medium">Social</span> and <span className="text-[#00b2ff] font-medium">Technical</span> Club on Campus looking to foster a community with UCSD Students who are interested in Roblox and Roblox Development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-500/5 p-4 rounded-xl border border-purple-500/10">
              <h3 className="text-purple-400 font-semibold mb-2">Social Events</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Game Nights</li>
                <li>Tournaments</li>
                <li>Spontaneous Hangouts</li>
              </ul>
            </div>
            <div className="bg-[#00b2ff]/5 p-4 rounded-xl border border-[#00b2ff]/10">
              <h3 className="text-[#00b2ff] font-semibold mb-2">Technical Events</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Workshops</li>
                <li>Game Jams</li>
                <li>Roblox Dev Class</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action button */}
        <button className="mt-10 text-center block mx-auto">
          <Link 
            href="/events" 
            className="inline-block px-8 py-3 bg-[#00b2ff] hover:bg-[#0099dd] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b2ff]/25"
          >
            Join Our Next Event →
          </Link>
        </button>
      </main>
    </div>
  );
}