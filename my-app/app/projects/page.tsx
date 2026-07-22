import Image from "next/image";
import Link from 'next/link';

import NavBar from '../modules/navbar';
import Footer from '../components/Footer';

// game card:
interface GameCardProps {
    id: string;
    name: string;
    icon: string;
    team: string[];
    tag: string;
}
function GameCard({id, name, icon, team, tag }: GameCardProps) {
  return (
    <Link 
      href={`https://www.roblox.com/games/${id}`} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 w-48 cursor-pointer group"
    >
        <div className="flex flex-col gap-2 w-48 cursor-pointer group">
            {/* Game icon with highlight effect */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-700 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#00b2ff] group-hover:ring-offset-2 group-hover:ring-offset-[#1a1a1a]">
                <img 
                src={icon} 
                alt={name} 
                className="object-cover w-full h-full"
                />
                {/* Highlight overlay */}
                <div className="absolute inset-0 bg-[#00b2ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            
            {/* Game title - highlight on hover */}
            <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight text-lg transition-colors duration-300 group-hover:text-[#00b2ff]">
                {name}
            </h3>
            
            {/* Tag label */}
            <div className="mt-1">
                <span className="text-xs text-[#00b2ff] font-medium bg-[#00b2ff]/10 px-2 py-0.5 rounded-full border border-[#00b2ff]/20 transition-colors duration-300 group-hover:bg-[#00b2ff]/20 group-hover:border-[#00b2ff]/40">
                    {tag}
                </span>
            </div>
            
            {/* Team members */}
            <div className="mt-1">
                <p className="text-xs text-gray-400 font-medium">Team:</p>
                <p className="text-xs text-gray-300 line-clamp-3">
                    {team.join(', ')}
                </p>
            </div>
        </div>
    </Link>
  );
}

// game list:
interface ProjectRowProps {
    gameList: { id: string, name: string; icon: string; team: string[]; tag: string }[];
}
function ProjectRow({ gameList } : ProjectRowProps) {
  return (
    <div>
        <section className="mb-12">
            {gameList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {gameList.map((game) => (
                    <GameCard 
                        key={game.id}
                        id={game.id} 
                        name={game.name} 
                        icon={game.icon}
                        team={game.team}
                        tag={game.tag}
                    />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
                    <p className="text-gray-400 text-lg">No games submitted yet.</p>
                    <p className="text-gray-500 text-sm mt-2">Check back soon!</p>
                </div>
            )}
        </section>
    </div>
  );
}

export default function Home() {
        const allGames = [
            // Spring '26 RBXDev Team + RBX 101 Final Projects
            { 
                id: '116487592197166', 
                name: 'King of The Slaps', 
                icon: '/projectMedias/kingOfTheSlapsIcon.png',
                team: ['Mitchell', 'Shawn', 'David', 'Robyn'],
                tag: 'Spring\'26 - RBXDev Team'
            },
            { 
                id: '95619237082546', 
                name: 'Capture the Cheese', 
                icon: '/projectMedias/captureTheCheeseIcon.webp',
                team: ['Ryan Lee', 'Kim Antoinette Barcelos', 'Bree Tassinari'],
                tag: 'Spring\'26 - RBX 101'
            },
            // Spring '26 Game Jam
            { 
                id: '140353085170254', 
                name: 'Boat Game', 
                icon: '/projectMedias/boatGameIcon.webp',
                team: ['Sally Zorigoo', 'Robyn Todd', 'Bree Tassinari', 'Emily Hoy'],
                tag: 'Spring\'26 - Game Jam'
            },
            { 
                id: '117371493816676', 
                name: 'Escape From Divorce Obby', 
                icon: '/projectMedias/escapeFromDivorceObbyIcon.webp',
                team: ['Jay Siqueiroz', 'Marisssa Morales'],
                tag: 'Spring\'26 - Game Jam'
            },
            { 
                id: '118796118647532', 
                name: 'Project Spark', 
                icon: '/projectMedias/projectSparkIcon.webp',
                team: ['Trystan Moreno', 'Kim Antoinette Barcelos'],
                tag: 'Spring\'26 - Game Jam'
            },
            // Winter '26 Game Jam
            { 
                id: '84744159610302', 
                name: 'One Block Away', 
                icon: '/projectMedias/oneBlockAwayIcon.png',
                team: ['Kim', 'Josh', 'Trystan', 'Evelyn'],
                tag: 'Winter\'26 - Game Jam'
            },
            { 
                id: '118913373294636', 
                name: 'Marble Knockout', 
                icon: '/projectMedias/marbleKnockoutIcon.webp',
                team: ['Nicholas Constantino', 'Ethan Morales', 'Rafael Coyazo', 'Robyn Todd'],
                tag: 'Winter\'26 - Game Jam'
            },
            { 
                id: '121431175394866', 
                name: 'Flash Fog [MVP]', 
                icon: '/projectMedias/flashFogIcon.webp',
                team: ['Dennis Fan', 'Habib Ismail', 'Jaymel Santos'],
                tag: 'Winter\'26 - Game Jam'
            }
        ];
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">See our projects!</h1>
                    <p className="text-[#A3A3A3] text-lg">
                        Explore games created by our members
                    </p>
                </header>

                {/* Games Section */}
                <ProjectRow gameList={allGames} />
            </main>

            <Footer />
        </div>
    );
}