"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="aboutme" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-panel rounded-2xl p-8 sm:p-12"
                >
                    <div className="space-y-6 text-content-muted leading-relaxed text-base sm:text-lg">
                        <p>
                            I am a Java Full Stack Developer with 3+ years of professional experience building scalable, secure, and high-performance enterprise applications across finance, insurance, and aerospace domains. I specialize in designing end-to-end solutions using Java, Spring Boot, Microservices, and modern front-end frameworks such as React and Angular, with a strong focus on clean architecture, system performance, and maintainability.
                        </p>
                        <p>
                            Throughout my career, I have delivered impactful solutions by optimizing backend services, databases, and cloud infrastructure, consistently improving system efficiency, response times, and deployment reliability. I have hands-on experience with event-driven architectures, RESTful and reactive APIs, CI/CD pipelines, and containerized deployments on AWS and Azure, ensuring production-ready applications that scale with business growth.
                        </p>
                        <p>
                            I thrive in Agile environments where collaboration, ownership, and continuous improvement drive success. With a solid academic foundation in Computer Science and industry-recognized cloud certifications, I am passionate about solving complex engineering problems, building user-centric interfaces, and delivering reliable software that creates measurable business value.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
