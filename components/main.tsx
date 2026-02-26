"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "RentRite",
        tag: "Web",
        tech: "React, Next.js, Tailwind",
        href: "https://github.com/Kirankumar866/RentWise",
    },
    {
        title: "Snake Game",
        tag: "Web",
        tech: "React, Next.js, Tailwind",
        href: "https://snake-game-ebon-iota.vercel.app/",
    },
    {
        title: "CookCraft",
        tag: "Web",
        tech: "React, Next.js, Tailwind",
        href: "https://cookcraft-culinary-app.netlify.app",
    },
    {
        title: "Portfolio",
        tag: "Web",
        tech: "React, Next.js, Framer Motion",
        href: "https://github.com/Kirankumar866/",
    },
    {
        title: "Video Stream",
        tag: "Mobile",
        tech: "React Native, Tailwind",
        href: "https://nxtwatchkiranp.ccbp.tech/",
    },
    {
        title: "E-commerce",
        tag: "Web",
        tech: "React, Next.js, Tailwind",
        href: "https://nxttrenzstore.ccbp.tech/",
    },
    {
        title: "Expense Tracker",
        tag: "Web",
        tech: "React, Tailwind",
        href: "https://accountcal.ccbp.tech/",
    },
    {
        title: "Food Munch",
        tag: "Web",
        tech: "React, Tailwind",
        href: "https://kirafoodmunch.ccbp.tech/",
    }
];

export default function Main() {
    return (
        <section id="projects" className="py-24 sm:py-32 w-full px-6 md:px-12 border-t border-white/5 bg-background">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center mb-16 sm:mb-24"
            >
                <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-8">
                    <div>
                        <span className="text-xs font-mono tracking-widest uppercase text-content-muted block mb-4">
                            Selected Works
                        </span>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-white">
                            PROJECTS.
                        </h2>
                    </div>
                </div>
            </motion.div>

            <div className="w-full max-w-7xl mx-auto flex flex-col">
                {projects.map((project, i) => (
                    <motion.a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/5 hover:border-white/50 transition-colors relative overflow-hidden"
                    >
                        {/* Hover reveal background block */}
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />

                        <div className="relative z-10 flex flex-col">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-300">
                                {project.title}
                            </h3>
                            <span className="font-mono text-xs uppercase tracking-widest text-content-muted mt-2 group-hover:text-black/60 transition-colors duration-300">
                                {project.tech}
                            </span>
                        </div>

                        <div className="relative z-10 mt-4 md:mt-0 opacity-0 md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]">
                            <span className="font-sans text-sm tracking-widest text-black uppercase flex items-center gap-2">
                                View Project ↗
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="w-full flex justify-center mt-16 pt-8">
                <p className="text-content-muted font-mono text-xs uppercase tracking-widest text-center max-w-md">
                    Note: A selection of projects emphasizing clean code, scalability, and robust user experiences.
                </p>
            </div>
        </section>
    );
}
