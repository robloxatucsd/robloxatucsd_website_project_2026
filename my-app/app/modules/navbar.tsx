import Image from "next/image";
import Link from 'next/link';

function NavBar() {
    return (
        <nav className="bg-[#1a1a1a] border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 max-w-7xl flex items-center justify-between">
                {/* Logo Image */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image 
                        src="/generalMedias/Club Logo No Bg.png"
                        alt="Club Logo" 
                        width={64}
                        height={64}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    <span className="text-white font-bold text-xl transition-colors duration-300 group-hover:text-[#A3A3A3]">
                        Roblox + <span className="text-[#00b2ff] transition-colors duration-300 group-hover:text-[#0099dd]">RBXDev</span>
                    </span>
                </Link>
                
                {/* Navigation Links */}
                <div className="flex gap-1">
                    <Link 
                        href="/team" 
                        className="relative px-4 py-2 text-white font-medium text-base transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Team
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                    <Link 
                        href="/events" 
                        className="relative px-4 py-2 text-white font-medium text-base transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Events
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                    <Link 
                        href="/projects" 
                        className="relative px-4 py-2 text-white font-medium text-base transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Projects
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                    <Link 
                        href="/tutorials" 
                        className="relative px-4 py-2 text-white font-medium text-base transition-colors duration-300 hover:text-[#00b2ff] group"
                    >
                        Tutorials
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00b2ff] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;