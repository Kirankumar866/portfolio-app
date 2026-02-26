"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const projects = [
    {
        title: "RentRite",
        description: "RentRite is a modern property management application that helps landlords track properties, tenants, rent payments, and maintenance requests. Built with cutting-edge technologies, it offers a sleek, responsive interface that works seamlessly on all devices.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "https://cdn.builder.io/api/v1/image/assets%2F6c85aef6d4144507985b5fb9594301e8%2Fba98c153ea4f44e38e61c5ca222db46b?format=webp&width=800",
        href: "https://github.com/Kirankumar866/RentWise",
        github: "https://github.com/Kirankumar866/RentWise"
    },
    {
        title: "Snake Game",
        description: "A classic Snake game built with modern web technologies. Navigate the snake to eat food and grow longer while avoiding collisions. Features responsive controls and smooth gameplay.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "https://cdn.builder.io/api/v1/image/assets%2F6c85aef6d4144507985b5fb9594301e8%2Ff19515112fcb481199bca40e348db930?format=webp&width=800",
        href: "https://snake-game-ebon-iota.vercel.app/",
        github: "https://github.com/Kirankumar866/snakeGame"
    },
    {
        title: "CookCraft Culinary App",
        description: "A comprehensive culinary application for exploring amazing home cooking projects and their stories",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "https://cdn.builder.io/api/v1/image/assets%2F6c85aef6d4144507985b5fb9594301e8%2Faa9d1e99816942189bdac875e3ab412a?format=webp&width=800",
        href: "https://cookcraft-culinary-app.netlify.app",
        github: "https://github.com/Kirankumar866/CulinaryInspire/"
    },
    {
        title: "Portfolio",
        description: "I have done this project to represent myself to the world",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/portfolio.png",
        href: "https://github.com/Kirankumar866/"
    },
    {
        title: "Video Stream App",
        description: "A mobile application developed using React Native.",
        tag: ["All", "Mobile"],
        tech: [
            { name: "React Native", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/videostream.png",
        href: "https://nxtwatchkiranp.ccbp.tech/"
    },
    {
        title: "E-commerce Website",
        description: "An online shopping website with modern UI.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/ecommerce.png",
        href: "https://nxttrenzstore.ccbp.tech/"
    },
    {
        title: "Expense Tracker",
        description: "Expense Tracker is a web application that helps you to track your expenses.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/expensetracker.png",
        href: "https://accountcal.ccbp.tech/"
    },
    {
        title: "Food Munch",
        description: "Food Munch is a web application that helps you to order food online.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/foodmunch.png",
        href: "https://kirafoodmunch.ccbp.tech/"
    },
    {
        title: "TODO App",
        description: "TODO App is a web application that helps you to manage your tasks.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/todo.png",
        href: "https://deletetodo123.ccbp.tech/"
    }
];

const tags = ["All", "Web", "Mobile"];

export default function Main() {
    const [selectedTag, setSelectedTag] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const handleTagChange = (tag: string) => {
        setSelectedTag(tag);
        setShowAll(false);
    };

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(selectedTag)
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-primary/70 tracking-wider uppercase mb-3 block"
                    >
                        Portfolio
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-content via-primary to-secondary bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto"
                    />
                </motion.div>

                {/* Tag Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-3 mb-12"
                >
                    {tags.map((tag) => (
                        <motion.button
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleTagChange(tag)}
                            className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${selectedTag === tag
                                    ? "text-white"
                                    : "text-content/60 glass hover:text-content/90"
                                }`}
                        >
                            {selectedTag === tag && (
                                <motion.div
                                    layoutId="activeTag"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tag}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="group relative"
                            >
                                <div className="relative h-full rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary/20 transition-all duration-500">
                                    {/* Image Section */}
                                    <div className="relative h-[220px] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            priority
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                        {/* Quick action buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                                        >
                                            <a
                                                href={project.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-2.5 glass-strong rounded-xl text-sm font-medium text-content/90 hover:text-primary transition-colors"
                                            >
                                                <ArrowUpRightIcon className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center p-2.5 glass-strong rounded-xl text-content/70 hover:text-primary transition-colors"
                                                >
                                                    <FaGithub className="h-5 w-5" />
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 sm:p-6">
                                        <h3 className="text-xl font-bold text-content group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-content/50 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, j) => (
                                                <motion.span
                                                    key={j}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-3 py-1 rounded-lg bg-white/5 text-content/60 text-xs border border-white/5 hover:border-primary/20 transition-all flex items-center gap-1.5 font-mono"
                                                >
                                                    <tech.icon style={{ color: tech.color }} className="w-3.5 h-3.5" />
                                                    {tech.name}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover glow */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                {filteredProjects.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-xl glass font-medium text-content/80 hover:text-primary transition-all duration-300 group"
                        >
                            <span className="flex items-center gap-2">
                                {showAll ? "Show Less" : "View All Projects"}
                                <motion.span
                                    animate={{ y: showAll ? [-2, 2, -2] : [2, -2, 2] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    {showAll ? "↑" : "↓"}
                                </motion.span>
                            </span>
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
