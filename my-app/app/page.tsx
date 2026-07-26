"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Code2, MessageCircle, Users, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

import NavBar from './modules/navbar';
import Footer from './components/Footer';
import Counter from './components/Counter';
import GroupPhotoWithVideo from './components/GroupPhotoWithVideo';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_20%]"
          style={{ backgroundImage: `url(/generalMedias/background.png)` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(6,8,14,0.52)" }} />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00b2ff]/30 text-[#00b2ff] text-xs font-semibold tracking-widest mb-8"
            style={{ background: "rgba(0, 178, 255, 0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b2ff] animate-pulse" />
            ROBLOX + RBXDEV @ UC SAN DIEGO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "-0.01em",
              background: "linear-gradient(135deg, #ffffff 30%, #00b2ff 80%, #66d0ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BUILD.<br />PLAY.<br />CONNECT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            A campus club for Roblox players and developers at UCSD! We host game nights,
            tournaments, workshops, game jams, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://discord.com/invite/SwGUGv3Rgj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00b2ff] text-white font-semibold text-sm hover:bg-[#0099dd] hover:scale-105 transition-all duration-200"
            >
              <MessageCircle size={16} />
              JOIN DISCORD
            </a>
            <Link
              href="/events"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold text-sm hover:border-[#00b2ff]/40 hover:text-white hover:scale-105 transition-all duration-200"
            >
              EXPLORE EVENTS
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-gray-800 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          <div className="flex flex-col items-center py-2">
            <Counter end={400} suffix="+" duration={2500} />
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 mt-0.5">
              ROBLOXIAN MEMBERS
            </span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Counter end={25} suffix="+" duration={2500} />
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 mt-0.5">
              EVENTS HOSTED
            </span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Counter end={10} suffix="+" duration={2500} />
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 mt-0.5">
              GAMES CREATED
            </span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Counter end={30000} suffix="+" duration={2500} />
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 mt-0.5">
              ROBUX GIVEN
            </span>
          </div>
        </div>
      </section>

      {/* About Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Users size={20} />,
              label: "SOCIAL",
              color: "#f97316",
              title: "Game Nights & Tournaments",
              desc: "From Natural Disaster Survival to Squid Game competitions, we show up, we play hard, and we leave with memories! Regular hangouts, spontaneous sessions, and club-wide events keep the community engaged.",
            },
            {
              icon: <Code2 size={20} />,
              label: "TECHNICAL",
              color: "#00b2ff",
              title: "Dev Workshops & Game Jams",
              desc: "Beginner Roblox Studio tutorials, advanced scripting workshops, structured game jams, and our RBX 101 dev class. Whether you've never opened Studio or you're shipping your fifth game, there's a seat for you!",
            },
          ].map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8 hover:border-[#00b2ff]/25 transition-colors duration-300"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
                style={{ color: p.color, background: `${p.color}14`, border: `1px solid ${p.color}25` }}
              >
                {p.icon} {p.label}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Student Games Showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <div className="flex items-center justify-between mb-6">
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-widest text-[#00b2ff] mb-1">SHOWCASE</p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-white">Student Games</h2>
                <Link 
                  href="/projects"
                  className="text-[#00b2ff] hover:text-[#0099dd] transition-colors font-medium group flex items-center gap-1 text-sm"
                >
                  View All
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8 text-sm">
            Check out some of the amazing games created by our members
          </motion.p>
          
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Game 1 */}
            <motion.div variants={fadeUp}>
              <Link 
                href="https://www.roblox.com/games/116487592197166/King-of-The-Slaps"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 h-full hover:border-[#00b2ff]/30">
                  <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
                    <Image
                      src="/homeMedias/kingOfTheSlapsThumbnail.png"
                      alt="King of The Slaps"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00b2ff] transition-colors duration-300">King of The Slaps</h3>
                    <p className="text-gray-400 text-sm">Can you slap your opponents out before they slap you?</p>
                    <span className="inline-block mt-4 text-[#00b2ff] group-hover:text-[#0099dd] transition-colors duration-300 font-medium text-sm">
                      Play Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Game 2 */}
            <motion.div variants={fadeUp}>
              <Link 
                href="https://www.roblox.com/games/95619237082546/Capture-the-Cheese"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 h-full hover:border-[#00b2ff]/30">
                  <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
                    <Image
                      src="/homeMedias/captureTheCheeseThumbnail.png"
                      alt="Capture the Cheese"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00b2ff] transition-colors duration-300">Capture the Cheese</h3>
                    <p className="text-gray-400 text-sm">A fast-paced capture the flag style game with a cheesy twist!</p>
                    <span className="inline-block mt-4 text-[#00b2ff] group-hover:text-[#0099dd] transition-colors duration-300 font-medium text-sm">
                      Play Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Photo Gallery with Video Hover */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-xs tracking-widest text-[#00b2ff] mb-1">HIGHLIGHTS</p>
            <h2 className="text-3xl font-bold text-white">Club Moments</h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Top Left: Big Group Photo */}
            <motion.div variants={fadeUp} className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-gray-800 group">
              <Image
                src="/homeMedias/robloxRBXDevGroup.JPG"
                alt="Roblox + RBXDev Club Group Photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "50% 70%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-white text-sm font-bold tracking-wide drop-shadow-lg">
                  2025-2026 End of Year Banquet
                </p>
              </div>
            </motion.div>

            {/* Top Right: GroupPhotoWithVideo 1 */}
            <motion.div variants={fadeUp}>
              <GroupPhotoWithVideo
                src="/homeMedias/groupPhoto1.png"
                videoSrc="/homeMedias/video1.mp4"
                alt="Natural Disaster Survival game night"
                caption="Officers in Natural Disaster Survival"
                hoverCaption="Spontaneous Game Night"
                objectPosition="50% 60%"
                scale={1.4}
                height="h-64 md:h-72"
                borderColor="border-gray-800"
              />
            </motion.div>

            {/* Bottom Left: GroupPhotoWithVideo 2 */}
            <motion.div variants={fadeUp}>
              <GroupPhotoWithVideo
                src="/homeMedias/groupPhoto2.png"
                videoSrc="/homeMedias/video2.mp4"
                alt="Dress to Impress UCSD tournament"
                caption="Dress to Impress Tournament! Theme: UCSD Colleges"
                hoverCaption="Spontaneous Game Night"
                objectPosition="50% 40%"
                scale={1.1}
                height="h-64 md:h-72"
                borderColor="border-gray-800"
              />
            </motion.div>

            {/* Bottom Right: GroupPhotoWithVideo 3 */}
            <motion.div variants={fadeUp}>
              <GroupPhotoWithVideo
                src="/homeMedias/groupPhoto3.png"
                videoSrc="/homeMedias/video3.mp4"
                alt="Squid Game GBM competition"
                caption="Winter'26 Squid Game Competition"
                hoverCaption="Spontaneous Game Night"
                objectPosition="50% 90%"
                scale={2.8}
                height="h-64 md:h-72"
                borderColor="border-gray-800"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#00b2ff] hover:bg-[#0099dd] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}