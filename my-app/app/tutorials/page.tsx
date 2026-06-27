"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import NavBar from '../modules/navbar';

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
        title: 'Intro to Scripting [Part 2]',
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
    },
    {
        id: '6',
        title: 'Review of Basic Scripting Topics',
        description: 'Master basic scripting topics in Roblox\'s Luau coding language',
        thumbnail: '/tutorialMedias/6_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vT8Ef9NdYNQ0k2j4OTe3xS6lb8hwI7Bl-TqjgXUk0Jlgc6ttH1fA_m5MsR4GvINtiYj5qMIGiVK2fqy/pubembed?start=false&loop=false&delayms=3000',
        content: 'Review advanced scripting topics including functions, events, hierarchy (explained more in-depth), and Roblox classes.'
    },
    {
        id: '7',
        title: 'Advanced Scripting [Part 1]',
        description: 'Learn advanced scripting topics like CFrames, servers + clients, etc.',
        thumbnail: '/tutorialMedias/7_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTeVRUZcGuiMn5sTVGrfEH4yz06kJAp6hn--gyxkHs_SQq2mr5VfhlWKcFd9idD6amFWIrmjtL5Ypog/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers advanced scripting topics including CFrames, servers + clients, and player + PlayerService.'
    },
    {
        id: '8',
        title: 'Advanced Scripting [Part 2]',
        description: 'Continue learning advanced scripting topics regarding enum, camera, TweenService, etc.',
        thumbnail: '/tutorialMedias/8_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRpedLmNVNWwPt__dqmmj6PQ4gze4_4hRy6ZWRsgRzr1vNBvuyc6hbaPwSmzz6K0g_-HhLND1kTtuvA/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers advanced scripting topics like enum, camera, TweenService, UserInputService, and ContextActionService.'
    },
    {
        id: '9',
        title: 'Advanced Scripting [Part 3]',
        description: 'Continue learning advanced scripting topics regarding raycasts, region3, and GeometryService',
        thumbnail: '/tutorialMedias/9_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRopjnxJI-my0fTBPsvKlDGTEkHZa-Ox-y4_-5r-DXUBn9bUkECuKOaV-TkT4b--n14mw1rSfh1hSmd/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers advanced scripting topics like raycasts, region3, and GeometryService.'
    },
    {
        id: '10',
        title: 'Advanced Scripting [Part 4]',
        description: 'Continue learning advanced scripting topics regarding module scripts and DataStoreService',
        thumbnail: '/tutorialMedias/10_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRkdpG1en8WCxdePVJBzbl907huXsXWXZzf0gYhlf0BKwh51dCFJoY1hb2j-y3qgfvxdabrKfOS9NZh/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers advanced scripting topics like module scripts and DataStoreService.'
    },
    {
        id: '11',
        title: 'Advanced Scripting [Part 5]',
        description: 'Continue learning advanced scripting topics regarding RunService, Coroutines, and task',
        thumbnail: '/tutorialMedias/11_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vRUeOOWZp6QTcEujVe3sntRsgKHCflqdeNVNz3aScjd7JMjh9DcGzVbcbJFPlx6GrhkVTsVeHBK0yfN/pubembed?start=false&loop=false&delayms=3000',
        content: 'This tutorial covers advanced scripting topics like RunService, Coroutines, and task.'
    }
];

// Carousel component props
interface TutorialCarouselProps {
    tutorials: Tutorial[];
    title: string;
    sectionRef?: React.RefObject<HTMLElement | null>; // Updated type to accept null
}

function TutorialCarousel({ tutorials, title, sectionRef }: TutorialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning && tutorials.length > 0) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % tutorials.length);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning && tutorials.length > 0) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + tutorials.length) % tutorials.length);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    // get visible tutorials (3 at a time)
    const getVisibleTutorials = () => {
        if (tutorials.length === 0) return [];
        const visible: Tutorial[] = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + tutorials.length) % tutorials.length;
            visible.push(tutorials[index]);
        }
        return visible;
    };

    const visibleTutorials = getVisibleTutorials();

    if (tutorials.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
                <p className="text-gray-400">No tutorials available in this category yet.</p>
            </div>
        );
    }

    return (
        <section ref={sectionRef} className="relative scroll-mt-24">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                {title}
            </h2>

            {/* Carousel container */}
            <div className="flex items-center justify-center gap-6">
                {/* Left arrow */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 z-10 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110 border border-gray-700"
                    aria-label="Previous tutorial"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Tutorial cards */}
                <div className="flex gap-6 mx-12 overflow-hidden">
                    {visibleTutorials.map((tutorial, index) => {
                        const isCenter = index === 1;
                        
                        return (
                            <Link
                                key={tutorial.id}
                                href={`/tutorials/${tutorial.id}`}
                                className={`
                                    group relative w-80 flex-shrink-0 transition-all duration-300 ease-in-out
                                    ${isCenter ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}
                                    hover:scale-95
                                `}
                            >
                                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#00b2ff] transition-colors duration-300 shadow-xl">
                                    {/* Thumbnail */}
                                    <div className="relative w-full h-48 bg-gray-700">
                                        <Image
                                            src={tutorial.thumbnail}
                                            alt={tutorial.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className="px-3 py-1 bg-[#00b2ff]/20 text-[#00b2ff] text-xs font-semibold rounded-full border border-[#00b2ff]/20">
                                                {tutorial.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                            {tutorial.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-2">
                                            {tutorial.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-[#00b2ff] text-sm font-medium">
                                            View Tutorial
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Right arrow */}
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 z-10 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 hover:scale-110 border border-gray-700"
                    aria-label="Next tutorial"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
                {tutorials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`
                            w-2 h-2 rounded-full transition-all duration-300
                            ${index === currentIndex ? 'bg-[#00b2ff] w-8' : 'bg-gray-600 hover:bg-gray-500'}
                        `}
                        aria-label={`Go to tutorial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default function Home() {
    // Filter tutorials by category
    const beginnerTutorials = tutorials.filter(t => t.category === 'Beginner');
    const advancedTutorials = tutorials.filter(t => t.category === 'Advanced');

    // Create refs for scrolling
    const beginnerRef = useRef<HTMLElement | null>(null);
    const advancedRef = useRef<HTMLElement | null>(null);

    // Scroll function
    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-5xl font-bold text-white mb-4">Tutorials</h1>
                    <p className="text-[#A3A3A3] text-lg max-w-2xl">
                        Explore our collection of tutorials designed to help you master Roblox development
                    </p>
                </header>

                {/* Quick links/categories */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <button
                        onClick={() => scrollToSection(beginnerRef)}
                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00b2ff]/50 transition-all duration-300 hover:scale-105 text-left cursor-pointer group"
                    >
                        <h3 className="text-[#00b2ff] font-semibold mb-2 group-hover:text-[#00b2ff]/80">Beginner</h3>
                        <p className="text-gray-400 text-sm">Start your Roblox journey with our foundational tutorials</p>
                        <div className="mt-3 flex items-center text-[#00b2ff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Scroll to section
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </button>
                    <button
                        onClick={() => scrollToSection(advancedRef)}
                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00b2ff]/50 transition-all duration-300 hover:scale-105 text-left cursor-pointer group"
                    >
                        <h3 className="text-[#00b2ff] font-semibold mb-2 group-hover:text-[#00b2ff]/80">Advanced</h3>
                        <p className="text-gray-400 text-sm">Master complex techniques and professional workflows</p>
                        <div className="mt-3 flex items-center text-[#00b2ff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Scroll to section
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </button>
                </section>

                {/* Beginner tutorials carousel */}
                <TutorialCarousel 
                    tutorials={beginnerTutorials} 
                    title="Beginner Tutorials"
                    sectionRef={beginnerRef}
                />

                {/* Advanced tutorials carousel */}
                <div className="mt-16">
                    <TutorialCarousel 
                        tutorials={advancedTutorials} 
                        title="Advanced Tutorials"
                        sectionRef={advancedRef}
                    />
                </div>
            </main>
        </div>
    );
}