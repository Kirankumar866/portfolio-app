"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Ask My Docs",
        tag: "Web / AI",
        tech: "Next.js, FastAPI, Python, ChromaDB",
        href: "https://github.com/Kirankumar866/AskMyDocs",
        description: "An AI-powered document Q&A system using RAG architecture for intelligent document retrieval and answering.",
    },
    {
        title: "stayIn Hotel",
        tag: "Web",
        tech: "React, Vite, Spring Boot",
        href: "https://github.com/Kirankumar866/stayIn-Hotel",
        description: "Full-stack hotel booking application with modern UI and robust backend services.",
    },
    {
        title: "Microservice E-commerce",
        tag: "Backend",
        tech: "Spring Boot, Microservices",
        href: "https://github.com/Kirankumar866/microservice-Ecommerce",
        description: "A scalable e-commerce platform built with microservices architecture and Spring Boot.",
    },
    {
        title: "Kafka SpringBoot Demo",
        tag: "Backend",
        tech: "Spring Boot, Apache Kafka",
        href: "https://github.com/Kirankumar866/kafka-SpringBoot-Demo",
        description: "Event-driven messaging demo showcasing Apache Kafka integration with Spring Boot.",
    },
    {
        title: "LinkedIn Outreach Extension",
        tag: "Browser Extension",
        tech: "JavaScript, AI, Web Scraping",
        href: "https://github.com/Kirankumar866/linkedin-outreach-extension",
        description: "Chrome extension for automated LinkedIn outreach with AI-powered message personalization.",
    },
];

function getTagColor(tag: string) {
    switch (tag) {
        case "Web / AI": return "bg-primary/20 text-primary border border-primary/30";
        case "Web": return "bg-blue-500/10 text-blue-400 border border-blue-400/20";
        case "Backend": return "bg-green-500/10 text-green-400 border border-green-400/20";
        case "Browser Extension": return "bg-purple-500/10 text-purple-400 border border-purple-400/20";
        default: return "bg-white/10 text-white";
    }
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
                        My <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel hover-glow rounded-2xl p-6 flex flex-col group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getTagColor(project.tag)}`}>
                                    {project.tag}
                                </span>
                                <span className="text-content-muted group-hover:text-primary transition-colors text-lg">↗</span>
                            </div>
                            <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-content-muted text-sm leading-relaxed mb-4 flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.split(", ").map((t) => (
                                    <span key={t} className="text-xs text-content-muted bg-white/5 px-2 py-1 rounded-lg">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
