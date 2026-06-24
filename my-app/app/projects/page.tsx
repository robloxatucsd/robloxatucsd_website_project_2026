import Image from "next/image";
import Link from 'next/link';

import NavBar from '../modules/navbar';

// game card:
interface GameCardProps {
    id: string;
    name: string;
    icon: string;
    team: string[];
}
function GameCard({id, name, icon, team }: GameCardProps) {
  return (
    <Link 
      href={`https://www.roblox.com/games/${id}`} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 w-48 cursor-pointer group"
    >
        <div className="flex flex-col gap-2 w-48 cursor-pointer group">
            {/* Game icon */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-700">
                <img 
                src={icon} 
                alt={name} 
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
            </div>
            
            {/* Game title */}
            <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight text-lg">
                {name}
            </h3>
            
            {/* Team members */}
            <div className="mt-1">
                <p className="text-xs text-gray-400 font-medium">Team:</p>
                <p className="text-xs text-gray-300 line-clamp-2">
                    {team.join(', ')}
                </p>
            </div>
        </div>
    </Link>
  );
}

// game list:
interface ProjectRowProps {
    gameList: { id: string, name: string; icon: string; team: string[] }[];
    title: string;
}
function ProjectRow({ gameList, title } : ProjectRowProps) {
  return (
    <div>
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                {title}
            </h2>
            {gameList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {gameList.map((game) => (
                    <GameCard 
                        key={game.id}
                        id={game.id} 
                        name={game.name} 
                        icon={game.icon}
                        team={game.team}
                    />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-lg">No games submitted yet for this game jam.</p>
                    <p className="text-gray-500 text-sm mt-2">Check back soon!</p>
                </div>
            )}
        </section>
    </div>
  );
}

export default function Home() {
    const winterGameJamGames = [
        { 
            id: '15317947079', 
            name: 'Placeholder 1', 
            icon: '/projectMedias/templateRobloxGameIcon.png',
            team: ['John Doe', 'Jane Doe']
        },
        { 
            id: '189707', 
            name: 'Placeholder 2', 
            icon: '/projectMedias/templateRobloxGameIcon.png',
            team: ['John Doe', 'Jane Doe']
        }
    ];
    
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">See our projects!</h1>
                    <p className="text-[#A3A3A3] text-lg">
                        Explore games created by our members during our game jams
                    </p>
                </header>

                {/* Winter '26 game jam section */}
                <ProjectRow 
                    gameList={winterGameJamGames} 
                    title="Winter '26 Game Jam"
                />
            </main>
        </div>
    );
}