'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const funFacts = [
    "I love to sketch, anything and everything.",
    "Got myself into fitness, I am more into building stamina rather than fitness.",
    "Honey never spoils. So I believe a skill learnt never gets wasted.",
    "An octopus has three hearts. I just have one 😄",
    "I am persistent with the tasks I take up.",
    "Sometimes I try to test my memory by remembering the lyrics of a song.",
    "I love nature. The lake, the breeze, the trees and the chirping of those birds.",
    "I always love meeting new people and so attending weddings. A lot of food and a lot of people.",
    "Orange is my favourite colour. But I started loving blue too. Still orange is my favourite😁.",
    "I listen to all kinds of music, drop me your favourite song. Will definitely listen to it.",
    "I speak English, Hindi, and Telugu. Can understand Punjabi and Kannada too. Trying to learn Spanish.",
    "I want to travel the world. I have a list of places to visit. I will share it with you if you ask me.",
    "I am a foodie. I love to try different cuisines. I am a vegetarian though.",
    "I am a movie buff. I watch movies of all genres. I love to watch movies in theatres.",
    "I love to listen to people's stories."
];

const ShuffleButton = () => {
    const [shuffledFacts, setShuffledFacts] = useState<string[]>([]);
    const [currentFact, setCurrentFact] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        shuffleFacts();
    }, []);

    const shuffleFacts = () => {
        const shuffled = [...funFacts].sort(() => Math.random() - 0.5);
        setShuffledFacts(shuffled);
        setIndex(0);
        setCurrentFact(shuffled[0]);
    };

    const handleShuffle = () => {
        const nextIndex = (index + 1) % shuffledFacts.length;
        setIndex(nextIndex);
        setCurrentFact(shuffledFacts[nextIndex]);
        if (nextIndex === 0) {
            shuffleFacts();
        }
    };

    return (
        <section className="py-8 sm:py-12 lg:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-10 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-content mb-3 sm:mb-4">Fun Facts!</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
                </motion.div>

                {/* Fun Fact Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-[#ADB7BE] mb-6"
                >
                    <p className="text-base sm:text-lg lg:text-xl text-content/80 mb-6 sm:mb-8 px-2">{currentFact}</p>
                </motion.div>

                {/* Shuffle Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-6"
                >
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShuffle}
                        className="font-bold relative overflow-hidden px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-surface border border-white/10 
                                  hover:border-primary/30 transition-all group text-white"
                    >
                        Shuffle
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ShuffleButton;
