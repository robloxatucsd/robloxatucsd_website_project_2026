"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Code2, MessageCircle, Users } from "lucide-react";

import NavBar from './modules/navbar';
import Footer from './components/Footer';
import Counter from './components/Counter';
import GroupPhotoWithVideo from './components/GroupPhotoWithVideo';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />

      {/* Hero Section - Clean, focused, high contrast */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_20%]"
          style={{ backgroundImage: `url(/generalMedias/background.png)` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00b2ff]/20 text-[#00b2ff] text-xs font-medium tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b2ff]" />
            UC San Diego's Roblox Community
          </div>

          <h1
            className="font-bold leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              background: "linear-gradient(135deg, #ffffff 40%, #00b2ff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Roblox + RBXDev
            <br />
            at UC San Diego
          </h1>

          <p className="text-base md:text-lg text-[#A3A3A3] max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
            We are both a Social and Technical club on campus looking to foster a community with UCSD students who are interested in Roblox and Roblox Development!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://discord.com/invite/SwGUGv3Rgj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#00b2ff] text-white font-medium text-sm hover:bg-[#0099dd] transition-colors duration-200"
            >
              Join Discord
            </a>
            <Link
              href="/events"
              className="px-6 py-3 rounded-full border border-[#2a2a2a] text-[#A3A3A3] font-medium text-sm hover:border-[#00b2ff]/30 hover:text-white transition-colors duration-200"
            >
              Explore Events
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#5a5a5a]">
          <span className="text-[10px] tracking-[0.2em] font-medium">Scroll</span>
          <ChevronDown size={16} strokeWidth={1.5} className="animate-bounce" />
        </div>
      </section>

      {/* Stats - Clean metrics */}
      <section className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1a1a1a]">
          <div className="flex flex-col items-center">
            <Counter end={400} suffix="+" duration={2500} />
            <span className="text-[10px] tracking-[0.15em] text-[#5a5a5a] uppercase font-medium mt-1">
              Members
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Counter end={25} suffix="+" duration={2500} />
            <span className="text-[10px] tracking-[0.15em] text-[#5a5a5a] uppercase font-medium mt-1">
              Events Hosted
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Counter end={10} suffix="+" duration={2500} />
            <span className="text-[10px] tracking-[0.15em] text-[#5a5a5a] uppercase font-medium mt-1">
              Games Created
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Counter end={30000} suffix="+" duration={2500} />
            <span className="text-[10px] tracking-[0.15em] text-[#5a5a5a] uppercase font-medium mt-1">
              Robux Given
            </span>
          </div>
        </div>
      </section>

      {/* About - Two pillars, balanced */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Users size={20} strokeWidth={1.5} />,
              label: "Social",
              color: "#f97316",
              title: "Game Nights, Tournaments, & Socials",
              desc: "From trying to survive in Natural Disaster Survival to playing Roblox at 1am on the Discord Server, we host various club events, hangouts, and spontaneous game nights! Be sure to stay up to date with our events by following our socials!",
            },
            {
              icon: <Code2 size={20} strokeWidth={1.5} />,
              label: "Technical",
              color: "#00b2ff",
              title: "Dev Workshops & Game Jams",
              desc: "Beginner Roblox Studio tutorials, advanced scripting workshops, structured game jams, and our very own RBX 101 development class! Be sure to check out our tutorials, workshops, and our members' Roblox games!",
            },
          ].map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-8 hover:border-[#00b2ff]/15 transition-colors duration-300"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.1em] mb-6"
                style={{ color: p.color, background: `${p.color}10`, border: `1px solid ${p.color}15` }}
              >
                {p.icon}
                {p.label}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-[#A3A3A3] leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Games Showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#00b2ff] font-medium uppercase">Student Games</p>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Games Built by Our Members</h2>
                <Link 
                  href="/projects"
                  className="text-[#A3A3A3] hover:text-white font-medium text-sm transition-colors duration-200"
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>
          <p className="text-[#A3A3A3] mb-8 text-sm">
            From game jams to passion projects!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                href: "https://www.roblox.com/games/116487592197166/King-of-The-Slaps",
                image: "/homeMedias/kingOfTheSlapsThumbnail.png",
                title: "King of The Slaps",
                desc: "Can you slap your opponents out before they slap you?",
              },
              {
                href: "https://www.roblox.com/games/95619237082546/Capture-the-Cheese",
                image: "/homeMedias/captureTheCheeseThumbnail.png",
                title: "Capture the Cheese",
                desc: "A fast-paced capture the flag game with a cheesy twist.",
              },
            ].map((game) => (
              <div key={game.title}>
                <Link 
                  href={game.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-[#0d0d0d] rounded-xl overflow-hidden border border-[#1a1a1a] transition-colors duration-300 hover:border-[#00b2ff]/15">
                    <div className="relative w-full h-64 bg-[#111] overflow-hidden">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#00b2ff] transition-colors duration-300">
                        {game.title}
                      </h3>
                      <p className="text-[#A3A3A3] text-sm">{game.desc}</p>
                      <span className="inline-block mt-4 text-sm font-medium text-[#00b2ff]">
                        Play Now
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Moments */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div>
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.2em] text-[#00b2ff] font-medium uppercase">Highlights</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Club Moments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-[#1a1a1a]">
              <Image
                src="/homeMedias/robloxRBXDevGroup.JPG"
                alt="Roblox + RBXDev Club Group Photo"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 70%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white text-sm font-bold tracking-wide">
                  2025-2026 End of Year Banquet
                </p>
              </div>
            </div>

            <GroupPhotoWithVideo
              src="/homeMedias/groupPhoto1.png"
              videoSrc="/homeMedias/video1.mp4"
              alt="Natural Disaster Survival game night"
              caption="Officers in Natural Disaster Survival"
              hoverCaption="Spontaneous Game Night"
              objectPosition="50% 60%"
              scale={1.4}
              height="h-64 md:h-72"
              borderColor="border-[#1a1a1a]"
            />

            <GroupPhotoWithVideo
              src="/homeMedias/groupPhoto2.png"
              videoSrc="/homeMedias/video2.mp4"
              alt="Dress to Impress UCSD tournament"
              caption="Dress to Impress Tournament"
              hoverCaption="Spontaneous Game Night"
              objectPosition="50% 40%"
              scale={1.1}
              height="h-64 md:h-72"
              borderColor="border-[#1a1a1a]"
            />

            <GroupPhotoWithVideo
              src="/homeMedias/groupPhoto3.png"
              videoSrc="/homeMedias/video3.mp4"
              alt="Squid Game GBM competition"
              caption="Winter'26 Squid Game Competition"
              hoverCaption="Spontaneous Game Night"
              objectPosition="50% 90%"
              scale={2.8}
              height="h-64 md:h-72"
              borderColor="border-[#1a1a1a]"
            />
          </div>
        </div>
      </section>

      <ScrollToTop threshold={300} />
      <Footer />
    </div>
  );
}