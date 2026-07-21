"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-16 py-12 max-w-[1400px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/generalMedias/Club Logo No Bg.png"
                  alt="Roblox + RBXDev Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">
                Roblox + <span className="text-[#00b2ff]">RBXDev</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Building community through Roblox
            </p>
          </div>

          {/* Center Section - Follow Us */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-300 text-sm font-medium mb-3">
              Follow us to stay connected!
            </p>
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/robloxatucsd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/invite/SwGUGv3Rgj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors duration-300"
                aria-label="Discord"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 127.14 96.36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S53.88,46,53.88,53,48.74,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.12,46,96.12,53,91,65.69,84.69,65.69Z"/>
                </svg>
              </a>

              {/* Email Icon */}
              <a
                href="mailto:rbxdev.atucsd@gmail.com"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Email Address Text */}
            <div className="mt-3">
              <a
                href="mailto:rbxdev.atucsd@gmail.com"
                className="text-gray-400 text-xs hover:text-[#00b2ff] transition-colors duration-300"
              >
                rbxdev.atucsd@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <Link href="/team" className="text-gray-400 text-sm hover:text-[#00b2ff] transition-colors">
              Team
            </Link>
            <Link href="/events" className="text-gray-400 text-sm hover:text-[#00b2ff] transition-colors">
              Events
            </Link>
            <Link href="/projects" className="text-gray-400 text-sm hover:text-[#00b2ff] transition-colors">
              Projects
            </Link>
            <Link href="/tutorials" className="text-gray-400 text-sm hover:text-[#00b2ff] transition-colors">
              Tutorials
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Roblox + <span className="text-[#00b2ff]">RBXDev</span> @ UC San Diego &bull; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;