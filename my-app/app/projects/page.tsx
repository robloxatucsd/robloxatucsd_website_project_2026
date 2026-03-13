import Image from "next/image";
import Link from 'next/link';

import NavBar from '../modules/navbar';

// game card:
interface GameCardProps {
    id: string;
    name: string;
    icon: string;
}
function GameCard({id, name, icon }: GameCardProps) {
  return (
    <Link 
      href={`https://www.roblox.com/games/${id}`} 
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer" // Security best practice for external links
      className="flex flex-col gap-2 w-40 cursor-pointer group"
    >
        <div className="flex flex-col gap-2 w-40 cursor-pointer group">
            {/* Game Icon Container */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
                <img 
                src={icon} 
                alt={name} 
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
            </div>
            
            {/* Game Title */}
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight text-white text-lg">
                {name}
            </h3>
        </div>
    </Link>
  );
}

// game list:
interface ProjectRowProps {
    gameList: { id: string, name: string; icon: string }[];
}
function ProjectRow({ gameList } : ProjectRowProps) {
  return (
    <div>
        <section className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {gameList.map((game) => (
                <GameCard 
                    key={game.id}
                    id={game.id} 
                    name={game.name} 
                    icon={game.icon} 
                />
                ))}
            </div>
        </section>
    </div>
  );
}

export default function Home() {
    const gameListTemp = [
        { id: '15317947079', name: 'Game 1 (Better Discover Placeholder)', icon: '/projectInfo/templateRobloxGameIcon.png'},
        { id: '189707', name: 'Game 2 (Natural Disaster Placeholder)', icon: '/projectInfo/templateRobloxGameIcon.png'},
    ];
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header Section */}
                <header className="mb-12">
                <h1 className="text-5xl font-bold text-white mb-4">See our projects!</h1>
                <p className="text-[#A3A3A3] text-lg">
                    Wow such cool games
                </p>
                </header>

                <div>
                    <ProjectRow gameList={gameListTemp}/>
                </div>
            </main>
        </div>
    );
}
