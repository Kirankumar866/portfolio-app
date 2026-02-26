'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    useEffect(() => {
        const shuffled = [...funFacts].sort(() => Math.random() - 0.5);
        setShuffledFacts(shuffled);
        setIndex(0);
        setCurrentFact(shuffled[0]);
    }, []);

    const handleShuffle = () => {
        const nextIndex = (index + 1) % shuffledFacts.length;
        setIndex(nextIndex);
        setCurrentFact(shuffledFacts[nextIndex]);
    };

    return (
        <section className="py-24 sm:py-32 relative bg-background border-t border-white/5 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-4xl px-4 sm:px-6"
            >
                <div className="flex flex-col items-end w-full mb-12 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono tracking-widest uppercase text-content-muted block mb-2">
                        Get to know me
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-white">
                        FUN FACTS.
                    </h2>
                </div>

                <div className="relative min-h-[200px] flex flex-col justify-center items-center py-12 px-6 border border-white/10 bg-white/5">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentFact}
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans text-center text-white/90 leading-tight font-light tracking-tight italic"
                        >
                            &ldquo;{currentFact}&rdquo;
                        </motion.p>
                    </AnimatePresence>

                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30" />
                </div>

                <div className="flex justify-between items-center mt-8 cursor-pointer group" onClick={handleShuffle}>
                    <div className="flex gap-2 items-center">
                        <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-white transition-all duration-300 ease-[0.16,1,0.3,1]" />
                        <span className="font-mono text-xs uppercase tracking-widest text-content-muted group-hover:text-white transition-colors">Next Fact</span>
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white/30">
                        {index + 1} / {shuffledFacts.length}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ShuffleButton;
