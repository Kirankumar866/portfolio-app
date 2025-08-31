"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import TabButton from "./TabButton"; // Import TabButton

const projects = [
    {
        title: "RentRite",
        description: "RentRite is a modern property management application that helps landlords track properties, tenants, rent payments, and maintenance requests. Built with cutting-edge technologies, it offers a sleek, responsive interface that works seamlessly on all devices.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
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

export default function Main() {
    const [selectedTag, setSelectedTag] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const handleTagChange = (tag: string) => {
        setSelectedTag(tag);
    };

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(selectedTag)
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

    return (
        <section id="projects" className="py-8 sm:py-12 lg:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-10 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-content mb-4">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
                </motion.div>

                {/* Tag Selection */}
                <div className="flex justify-center space-x-4 mb-10">
                    {["All", "Web", "Mobile"].map((tag) => (
                        <TabButton
                            key={tag}
                            active={selectedTag === tag}
                            selectTab={() => handleTagChange(tag)}
                        >
                            {tag}
                        </TabButton>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.6 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
                        >
                            {/* Image Section */}
                            <motion.div
                                className="h-[250px] relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            {/* Content Section */}
                            <motion.div className="p-6 bg-surface" transition={{ duration: 0.3 }}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                               className="p-1 hover:bg-white/10 rounded transition-colors duration-300">
                                                <FaGithub className="h-5 w-5 text-content/50 group-hover:text-primary transition-colors duration-300" />
                                            </a>
                                        )}
                                        <a href={project.href} target="_blank" rel="noopener noreferrer"
                                           className="p-1 hover:bg-white/10 rounded transition-colors duration-300">
                                            <ArrowUpRightIcon className="h-5 w-5 text-content/50 group-hover:text-primary transition-colors duration-300" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-content/80 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
                                        >
                                            <tech.icon style={{ color: tech.color }} className="w-4 h-4" />
                                            <span>{tech.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                {filteredProjects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-20 relative z-[5]"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/10 transition-all group"
                        >
                            <span className="text-content transition-colors">
                                {showAll ? "View Less" : "View All Projects"}
                            </span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
