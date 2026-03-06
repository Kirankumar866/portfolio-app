"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Java Full Stack Developer",
        company: "Spirit AeroSystems",
        period: "May 2025 - Present",
        location: "Wichita, Kansas",
        description: "Driving scalable, high-performance enterprise applications with modern Java, cloud, and front-end technologies.",
        achievements: [
            "Improved system efficiency by 28% by building scalable microservices using Java and Spring Boot.",
            "Enhanced UI performance across 5+ modules using React.js, TypeScript, and Redux.",
            "Reduced database response times by 22% through query optimization with Hibernate, JPA, and SQL databases.",
            "Increased deployment efficiency by 35% by implementing CI/CD pipelines and AWS-based Docker deployments.",
        ],
    },
    {
        title: "Java Full Stack Developer",
        company: "Black & Veatch",
        period: "October 2024 - April 2025",
        location: "Overland Park, Kansas",
        description: "Specializing in microservices architecture, event-driven systems, and cloud-native deployments.",
        achievements: [
            "Improved system integration efficiency by 30% by architecting microservices with Spring Boot, Spring Cloud, and API Gateway.",
            "Boosted UI performance and user engagement by 28% using Angular, TypeScript, and NgRx.",
            "Reduced message latency by 35% by optimizing event-driven workflows with Apache Kafka and RabbitMQ.",
            "Increased release efficiency by implementing CI/CD automation using Azure DevOps, Docker, Kubernetes, and Helm.",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background">
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
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-panel hover-glow rounded-2xl p-8 flex flex-col"
                        >
                            <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.title}</h3>
                            <span className="text-primary font-semibold text-sm mb-3">{exp.company}</span>

                            <div className="flex items-center gap-4 text-xs text-content-muted mb-4">
                                <span className="flex items-center gap-1">📅 {exp.period}</span>
                                <span className="flex items-center gap-1">📍 {exp.location}</span>
                            </div>

                            <p className="text-content-muted text-sm leading-relaxed mb-6">{exp.description}</p>

                            <div>
                                <h4 className="text-white font-semibold text-sm mb-3">Key Achievements</h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-content-muted leading-relaxed">
                                            <span className="text-primary mt-0.5 shrink-0">●</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
