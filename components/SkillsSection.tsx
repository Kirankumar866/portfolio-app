"use client";
import React from "react";
import { motion } from "framer-motion";

const allSkills = [
    { name: "Java", level: "Expert", icon: "☕" },
    { name: "JavaScript", level: "Expert", icon: "📜" },
    { name: "TypeScript", level: "Expert", icon: "🔷" },
    { name: "React.js", level: "Advanced", icon: "⚛️" },
    { name: "Angular", level: "Advanced", icon: "🅰️" },
    { name: "Spring Boot", level: "Expert", icon: "🍃" },
    { name: "Microservices", level: "Advanced", icon: "🔗" },
    { name: "REST APIs", level: "Expert", icon: "🌐" },
    { name: "SQL (PostgreSQL/MySQL)", level: "Advanced", icon: "🗃️" },
    { name: "MongoDB", level: "Advanced", icon: "🍀" },
    { name: "AWS", level: "Intermediate", icon: "☁️" },
    { name: "Docker", level: "Intermediate", icon: "🐳" },
    { name: "Kubernetes", level: "Intermediate", icon: "⎈" },
    { name: "Apache Kafka", level: "Intermediate", icon: "📨" },
    { name: "OAuth 2.0 / JWT", level: "Advanced", icon: "🔐" },
];

function getLevelColor(level: string) {
    switch (level) {
        case "Expert": return "bg-primary text-background";
        case "Advanced": return "bg-white/10 text-content-muted border border-white/10";
        case "Intermediate": return "bg-white/5 text-content-muted border border-white/5";
        default: return "bg-white/5 text-content-muted";
    }
}

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background">
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
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {allSkills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="glass-panel hover-glow rounded-2xl p-5 flex flex-col items-center text-center group cursor-default"
                        >
                            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                            <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
