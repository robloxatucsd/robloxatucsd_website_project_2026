"use client";

import { useState } from "react";
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
        title: 'placeholder',
        description: 'placeholder',
        thumbnail: '/tutorialMedias/1_thumbnail.png',
        category: 'Beginner',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSSTnsoXKBHiV_LWwNJJQL6Rn6Euhl3c3HGqRmJDfVNHfFS2njnm8cktbVxoXe1AGY1u8X2hSbeYqCL/pubembed?start=false&loop=false&delayms=3000',
        content: 'placeholder'
    },
    {
        id: '3',
        title: 'placeholder',
        description: 'placeholder',
        thumbnail: '/tutorialMedias/1_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSSTnsoXKBHiV_LWwNJJQL6Rn6Euhl3c3HGqRmJDfVNHfFS2njnm8cktbVxoXe1AGY1u8X2hSbeYqCL/pubembed?start=false&loop=false&delayms=3000',
        content: 'placeholder'
    },
    {
        id: '4',
        title: 'placeholder',
        description: 'placeholder',
        thumbnail: '/tutorialMedias/1_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSSTnsoXKBHiV_LWwNJJQL6Rn6Euhl3c3HGqRmJDfVNHfFS2njnm8cktbVxoXe1AGY1u8X2hSbeYqCL/pubembed?start=false&loop=false&delayms=3000',
        content: 'placeholder'
    },
    {
        id: '5',
        title: 'placeholder',
        description: 'placeholder',
        thumbnail: '/tutorialMedias/1_thumbnail.png',
        category: 'Advanced',
        googleSlidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSSTnsoXKBHiV_LWwNJJQL6Rn6Euhl3c3HGqRmJDfVNHfFS2njnm8cktbVxoXe1AGY1u8X2hSbeYqCL/pubembed?start=false&loop=false&delayms=3000',
        content: 'placeholder'
    }
];

function TutorialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % tutorials.length);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + tutorials.length) % tutorials.length);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    // get visible tutorials (3 at a time)
    const getVisibleTutorials = () => {
        const visible: Tutorial[] = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + tutorials.length) % tutorials.length;
            visible.push(tutorials[index]);
        }
        return visible;
    };

    const visibleTutorials = getVisibleTutorials();

    return (
        <div className="relative">
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
        </div>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <NavBar />
      
            <main className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Tutorials</h1>
                    <p className="text-[#A3A3A3] text-lg max-w-2xl">
                        Explore our collection of tutorials designed to help you master Roblox development
                    </p>
                </header>

                {/* Carousel section */}
                <section className="mb-16">
                    <TutorialCarousel />
                </section>

                {/* Quick links/categories */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00b2ff]/50 transition-colors">
                        <h3 className="text-[#00b2ff] font-semibold mb-2">Beginner</h3>
                        <p className="text-gray-400 text-sm">Start your Roblox journey with our foundational tutorials</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00b2ff]/50 transition-colors">
                        <h3 className="text-[#00b2ff] font-semibold mb-2">Advanced</h3>
                        <p className="text-gray-400 text-sm">Master complex techniques and professional workflows</p>
                    </div>
                </section>
            </main>
        </div>
    );
}