'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const funFacts = [
    "Honey never spoils. So I believe a skill learnt never gets wasted.",
    "An octopus has three hearts. I just have one 😄",
    "I am persistent with the tasks I take up.",
    "Sometimes I try to test my memory by remembering the lyrics of a song.",
    "I love nature. The lake, the breeze, the trees and the chirping of those birds.",
    "I always love meeting new people and so attending weddings. A lot of food and a lot of people.",
    "Orange is my favourite colour. But I started loving blue too. Still orange is my favourite😁.",
    "I listen to all kinds of music, drop me your favourite song. Will definitely listen to it.",
    "I speak English, Hindi, and Telugu. Trying to learn Spanish.",
    "I am a foodie. I love to try different cuisines. I am a vegetarian though.",
    "I am a movie buff. I watch movies of all genres. I love to watch movies in theatres.",
    "I love to listen to people's stories."
];

const ShuffleButton = () => {
    const [shuffledFacts, setShuffledFacts] = useState<string[]>([]);
    const [currentFact, setCurrentFact] = useState("");
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

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
        setDirection(1);
        const nextIndex = (index + 1) % shuffledFacts.length;
        setIndex(nextIndex);
        setCurrentFact(shuffledFacts[nextIndex]);
        if (nextIndex === 0) {
            shuffleFacts();
        }
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-secondary/70 tracking-wider uppercase mb-3 block"
                    >
                        Get to know me
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-content via-secondary to-tertiary bg-clip-text text-transparent mb-4">
                        Fun Facts ✨
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full mx-auto"
                    />
                </motion.div>

                {/* Fact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="glass rounded-2xl p-8 sm:p-10 min-h-[180px] flex items-center justify-center relative overflow-hidden">
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-tertiary/20 rounded-br-2xl" />

                        {/* Sparkle decorations */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-4 right-4"
                        >
                            <SparklesIcon className="w-5 h-5 text-secondary/30" />
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentFact}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-lg sm:text-xl lg:text-2xl text-content/80 text-center leading-relaxed font-light italic"
                            >
                                &ldquo;{currentFact}&rdquo;
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-1.5 mt-6">
                        {shuffledFacts.slice(0, Math.min(shuffledFacts.length, 12)).map((_, i) => (
                            <motion.div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-gradient-to-r from-primary to-secondary' : 'w-1.5 bg-content/20'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Shuffle Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center mt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                        whileTap={{ scale: 0.95, rotate: -5 }}
                        onClick={handleShuffle}
                        className="relative overflow-hidden px-8 py-3.5 rounded-xl glass font-semibold text-content/80 hover:text-secondary transition-all duration-300 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                            >
                                🎲
                            </motion.span>
                            Shuffle
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-tertiary/10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ShuffleButton;
