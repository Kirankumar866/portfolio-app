"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Software Engineer",
        company: "HTC Global Services",
        period: "Apr 2025 - Mar 2026",
        location: "",
        description: "",
        achievements: [
            "Designed and developed RESTful APIs with Spring Boot, Spring Security, and PostgreSQL for a leading healthcare client, enabling secure access to clinical and billing data for 50K+ patients and cutting average API response times by 30% while adhering to healthcare data privacy and security standards.",
            "Built micro-frontend modules in React for patient portals and clinician dashboards used by 500+ clinicians, improving page load speed by 20% and increasing successful self-service appointment scheduling and billing actions by 25%.",
            "Optimized complex SQL queries and database indexes for high-volume clinical and financial datasets, reducing query execution time by 30% and improving uptime of patient-facing visit history and statement features to 99.9%.",
            "Contributed to containerizing and deploying healthcare microservices on Docker and Kubernetes as part of the platform team, helping increase deployment frequency and reduce rollout failures for patient- and provider-facing applications.",
            "Monitored production health systems using Azure and ML-based anomaly detection to proactively identify spikes in errors or latency, reducing time-to-detect incidents impacting clinicians’ access to patient records from 30 minutes to under 5 minutes.",
            "Collaborated with cross-functional Agile teams, incorporating user-centered design feedback from 30+ clinicians and administrative staff to prioritize features that reduced manual data entry by 40% and shortened key care-delivery workflows by 15%.",
            "Partnered with QA and compliance teams to triage and resolve high-priority defects, reducing production bug backlog by 35% and preventing potential data inconsistencies across integrated healthcare systems."
        ],
    },
    {
        title: "Software Engineer",
        company: "Global Payments",
        period: "Jul 2024 - Mar 2025",
        location: "",
        description: "",
        achievements: [
            "Developed and deployed RESTful APIs in Spring Boot to process daily financial transactions, reducing average response latency by 25%.",
            "Built transaction history and account statement UI with React + Redux, improving page rendering time by 30% and enhancing usability for 100K+ customers.",
            "Designed a data management layer with Spring Data JPA and MySQL, cutting query execution times by 40% for large account datasets.",
            "Implemented Apache Kafka pipelines to enable asynchronous event-driven workflows, increasing system throughput and scalability across microservices.",
            "Integrated Prometheus and AWS CloudWatch dashboards to proactively monitor APIs, reducing unplanned downtime by 15%.",
            "Collaborated with third-party vendors via JSON/XML APIs developed in C#, ensuring seamless integration with external payment gateways."
        ],
    },
    {
        title: "Software Engineer",
        company: "Northwest Missouri State University",
        period: "Jan 2024 - May 2024",
        location: "",
        description: "",
        achievements: [
            "Led a team of 5 using Agile Scrum to build a full-stack POS system with role-based access for billing and inventory, delivering the product on schedule.",
            "Managed requirements, sprints, and full SDLC to ensure on-time project delivery.",
            "Developed ReactJS frontend with reusable billing tables, payments, and bill history.",
            "Implemented Node.js/Express RESTful APIs for billing, inventory, and user management.",
            "Used MongoDB Atlas for scalable cloud data storage and retrieval."
        ],
    },
    {
        title: "Software Engineer",
        company: "Aarmec Technologies",
        period: "Jun 2021 - Jan 2023",
        location: "",
        description: "",
        achievements: [
            "Built D3.js dashboards for item/category-wise monthly and yearly sales analytics.",
            "Built account summary and fund transfer modules using JavaScript, React, and RESTful APIs, reducing transaction errors by 15% and improving UI performance.",
            "Utilized Spring Boot and Spring Cloud for microservices architecture, enhancing scalability and resilience of backend systems.",
            "Implemented transaction history and financial reporting, improving data retrieval speed by 15% and reducing API latency by 20%.",
            "Used Git for version control, ensuring effective collaboration within the team.",
            "Participated in optimizing CI/CD pipelines using AWS and GitHub Actions, decreasing deployment time."
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
                                {exp.location && <span className="flex items-center gap-1">📍 {exp.location}</span>}
                            </div>

                            {exp.description && <p className="text-content-muted text-sm leading-relaxed mb-6">{exp.description}</p>}

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
