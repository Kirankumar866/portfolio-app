"use client";
import React from "react";
import { motion } from "framer-motion";

const certifications = [
    {
        title: "AWS Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#",
    },
    {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        link: "#",
    },
    {
        title: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "2024",
        link: "#",
    },
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background">
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
                        <span className="text-primary">Certifications</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel hover-glow rounded-2xl p-6 flex flex-col"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                    <span className="text-primary text-xl">📜</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-heading font-bold text-white">{cert.title}</h3>
                                    <span className="text-primary text-sm font-medium">{cert.issuer}</span>
                                </div>
                            </div>

                            <div className="text-xs text-content-muted uppercase tracking-wider mb-1">ISSUED</div>
                            <div className="text-sm text-white mb-5">{cert.date}</div>

                            <a
                                href={cert.link}
                                className="mt-auto w-full text-center py-2.5 rounded-xl border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-background transition-all duration-300"
                            >
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
