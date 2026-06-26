"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../modules/navbar';

// tutorial data structure
interface Tutorial {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    googleSlidesUrl: string;
    content: string;
}

// tutorial data
const tutorials: Tutorial[] = [
    {
        id: '1',
        title: 'Getting Started with Roblox Studio',
        description: 'Learn the basics of Roblox Studio interface and tools',
        thumbnail: '/tutorialMedias/1_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSSTnsoXKBHiV_LWwNJJQL6Rn6Euhl3c3HGqRmJDfVNHfFS2njnm8cktbVxoXe1AGY1u8X2hSbeYqCL/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers the fundamentals of Roblox Studio, including navigation, basic building tools, part properties, etc.'
    },
    {
        id: '2',
        title: 'Intro to Modeling and Plugins',
        description: 'Learn the basics of modeling, editing terrain, and Roblox Plugins',
        thumbnail: '/tutorialMedias/2_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRxNZntMaXNb5YNLtAehGRH8EfzLZrhAnzoETSrg1c97hqCrNp2QVUgTYo62nvxOJTnjsjSTu4wAQAo/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers the basics of modeling, using the terrain editor tool, and going over useful Roblox plugins.'
    },
    {
        id: '3',
        title: 'Intro to Scripting [Part 1]',
        description: 'Learn the basics of scripting in Roblox\'s Luau coding language',
        thumbnail: '/tutorialMedias/3_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQW_HxLCCo4uS2XkwDD39MHQiVHj_HodNbWEAw1G-bH4QUKwKBtA3T9KtmXA5yQztYI_ymFKnOOJoJ-/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers the basics of scripting in Roblox\'s Luau coding language such as print statements, comments, variables & data types, lists & tables/dictionaries, operations, conditions, loops, and functions.'
    },
    {
        id: '4',
        title: 'Intro to Scripting [ Part 2 ]',
        description: 'Continue learning the basics of scripting in Roblox\'s Luau coding language',
        thumbnail: '/tutorialMedias/4_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQbssDGpJ3v5Bi9rXfB2OnsqLwlxLCbn35f4wxK8lNzWw3YBNMOCtJafpIarK_8oivDPB7o7pPIWYbA/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers the basics of scripting in Roblox\'s Luau coding language such as loops, functions, variable scope, and recursion. This tutorial also covers game mechanics content that are Roblox-specific scripting like Roblox classes, hierarchy, events, and leaderboards.'
    },
    {
        id: '5',
        title: 'Intro to Graphical User Interface (GUI)',
        description: 'Learn the basics of graphical user interface (GUI) in Roblox Studio',
        thumbnail: '/tutorialMedias/5_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQkWir75-7j0bJCzxHs9aZ09-KzGr7B6dDshexjKIUmMnhbUtKB138rHKExkd6OIM1UfIafhWE8qYAQ/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers the basics of graphical user interface (GUI) in Roblox Studio like frameworks, properties, and incorporating images.'
    }
];

export default function TutorialDetail() {
    const params = useParams();
    
    // handle the case where params.id might be an array or string
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    
    // find tutorial
    const tutorial = tutorials.find(t => String(t.id) === String(id));

    // debug log
    console.log('Looking for tutorial with id:', id);
    console.log('Available tutorial IDs:', tutorials.map(t => t.id));
    console.log('Found tutorial:', tutorial);

    if (!tutorial) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
                <NavBar />
                <main className="container mx-auto px-6 py-12 max-w-7xl">
                    <div className="text-center py-20">
                        <h1 className="text-2xl text-white mb-4">Tutorial not found</h1>
                        <p className="text-gray-400 mb-4">Looking for tutorial with ID: {id}</p>
                        <Link href="/tutorials" className="text-[#00b2ff] hover:underline">
                            ← Back to Tutorials
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Back button */}
                <Link 
                    href="/tutorials" 
                    className="inline-flex items-center text-[#00b2ff] hover:text-[#0099dd] mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Tutorials
                </Link>

                {/* Tutorial content */}
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="relative w-24 h-24 bg-gray-700 rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                                src={tutorial.thumbnail}
                                alt={tutorial.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#00b2ff]/20 text-[#00b2ff] text-xs font-semibold rounded-full border border-[#00b2ff]/20 mb-2">
                                {tutorial.category}
                            </span>
                            <h1 className="text-3xl font-bold text-white">{tutorial.title}</h1>
                            <p className="text-gray-400 mt-1">{tutorial.description}</p>
                        </div>
                    </div>

                    {/* Embedded google slides */}
                    <div className="mt-8 mb-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                        <div className="aspect-video w-full">
                            <iframe
                                src={tutorial.googleSlidesUrl}
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                            />
                        </div>
                        <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                            <p className="text-sm text-gray-400">
                                Can't view the presentation? <a 
                                    href={tutorial.googleSlidesUrl.replace('/embed', '/edit')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00b2ff] hover:underline"
                                >
                                    Open in Google Slides
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                        <h2 className="text-xl font-semibold text-white mb-3">About This Tutorial</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {tutorial.content}
                        </p>
                    </div>
                </div>

                {/* Navigation to next/prev */}
                <div className="mt-8 flex justify-between">
                    <Link 
                        href={`/tutorials/${parseInt(tutorial.id) > 1 ? parseInt(tutorial.id) - 1 : tutorials.length}`}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ← Previous Tutorial
                    </Link>
                    <Link 
                        href={`/tutorials/${parseInt(tutorial.id) < tutorials.length ? parseInt(tutorial.id) + 1 : 1}`}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Next Tutorial →
                    </Link>
                </div>
            </main>
        </div>
    );
}