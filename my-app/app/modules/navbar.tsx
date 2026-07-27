"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                    <Image 
                        src="/generalMedias/Club Logo No Bg.png"
                        alt="Club Logo" 
                        width={48}
                        height={48}
                        className="object-contain w-12 h-12 sm:w-16 sm:h-16"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-lg sm:text-2xl transition-colors duration-300 group-hover:text-[#A3A3A3]">
                            Roblox + <span className="text-[#00b2ff] transition-colors duration-300 group-hover:text-[#0099dd]">RBXDev</span>
                        </span>
                        <span className="text-[#00b2ff] text-xs sm:text-base font-light tracking-wide transition-colors duration-300 group-hover:text-[#0099dd]">
                            at UC San Diego
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-1">
                    <Link 
                        href="/team" 
                        className="relative px-4 py-2 text-white font-medium text-base lg:text-lg transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Team
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link 
                        href="/events" 
                        className="relative px-4 py-2 text-white font-medium text-base lg:text-lg transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Events
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link 
                        href="/projects" 
                        className="relative px-4 py-2 text-white font-medium text-base lg:text-lg transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link 
                        href="/tutorials" 
                        className="relative px-4 py-2 text-white font-medium text-base lg:text-lg transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Tutorials
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white hover:text-[#00b2ff] transition-colors duration-200 p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#1a1a1a] border-t border-gray-800`}>
                <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                    <Link 
                        href="/team" 
                        onClick={closeMenu}
                        className="px-4 py-3 text-white font-medium text-base hover:text-[#00b2ff] hover:bg-[#00b2ff]/10 rounded-lg transition-colors duration-200"
                    >
                        Team
                    </Link>
                    <Link 
                        href="/events" 
                        onClick={closeMenu}
                        className="px-4 py-3 text-white font-medium text-base hover:text-[#00b2ff] hover:bg-[#00b2ff]/10 rounded-lg transition-colors duration-200"
                    >
                        Events
                    </Link>
                    <Link 
                        href="/projects" 
                        onClick={closeMenu}
                        className="px-4 py-3 text-white font-medium text-base hover:text-[#00b2ff] hover:bg-[#00b2ff]/10 rounded-lg transition-colors duration-200"
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/tutorials" 
                        onClick={closeMenu}
                        className="px-4 py-3 text-white font-medium text-base hover:text-[#00b2ff] hover:bg-[#00b2ff]/10 rounded-lg transition-colors duration-200"
                    >
                        Tutorials
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;