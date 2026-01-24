import Image from "next/image";
import Link from 'next/link';

function NavBar() {
    return (
        <nav className="bg-[#1a1a1a] border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 max-w-7xl flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="w-32 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-white text-sm">LOGO</span>
                </div>
                
                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link href="/team" className="text-white hover:text-[#A3A3A3] transition-colors">
                        Team
                    </Link>
                    <Link href="/events" className="text-white hover:text-[#A3A3A3] transition-colors">
                        Events
                    </Link>
                    <Link href="/projects" className="text-white hover:text-[#A3A3A3] transition-colors">
                        Projects
                    </Link>
                    <Link href="/tutorials" className="text-white hover:text-[#A3A3A3] transition-colors">
                        Tutorials
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;