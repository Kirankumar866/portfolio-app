"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Angular", level: "Intermediate" },
      { name: "Redux", level: "Advanced" },
      { name: "Tailwind", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Spring", level: "Advanced" },
      { name: "JWT", level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "SQL Server", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Beginner" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "IntelliJ", level: "Advanced" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {skillCategories.map((category, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          key={category.category}
          className="border border-white/10 p-6 flex flex-col group hover:border-white transition-colors duration-500"
        >
          <h3 className="text-xl font-heading font-bold uppercase tracking-widest mb-6 text-white group-hover:text-accent1 transition-colors">
            {category.category}
          </h3>
          <div className="flex flex-col gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="font-sans text-sm text-content-muted group-hover:text-white transition-colors">{skill.name}</span>
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{skill.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const EducationSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border border-white/10 p-8 flex flex-col items-start hover:border-white/30 transition-colors w-full max-w-3xl border-l-[4px] border-l-white"
  >
    <div className="text-sm font-mono text-content-muted tracking-widest uppercase mb-4">2022 - 2024</div>
    <h3 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight text-white mb-2">
      Masters in Information Science
    </h3>
    <p className="text-xl font-sans text-content-muted mb-6">Northwest Missouri State University</p>

    <div className="grid grid-cols-3 gap-8 w-full border-t border-white/10 pt-6">
      <div className="flex flex-col">
        <span className="text-3xl font-heading font-bold text-white mb-1">3.8</span>
        <span className="text-xs font-mono text-content-muted uppercase tracking-widest">GPA</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-heading font-bold text-white mb-1">15+</span>
        <span className="text-xs font-mono text-content-muted uppercase tracking-widest">Courses</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-heading font-bold text-white mb-1">5+</span>
        <span className="text-xs font-mono text-content-muted uppercase tracking-widest">Projects</span>
      </div>
    </div>
  </motion.div>
);

const CertificationsSection = () => {
  const certs = [
    {
      title: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2024",
    }
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-white/10 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <div>
            <h4 className="text-xl font-heading font-bold uppercase tracking-tight mb-2 group-hover:text-black transition-colors">
              {cert.title}
            </h4>
            <p className="text-sm font-sans text-content-muted group-hover:text-black/60">{cert.issuer}</p>
          </div>
          <div className="mt-4 sm:mt-0 font-mono text-xs tracking-widest border border-white/20 px-3 py-1 group-hover:border-black/20">
            {cert.date}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills": return <SkillsSection />;
      case "education": return <EducationSection />;
      case "certifications": return <CertificationsSection />;
      default: return null;
    }
  };

  return (
    <section id="Qualifications" className="relative py-24 sm:py-32 w-full px-4 sm:px-6 lg:px-12 bg-background flex flex-col items-center">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center w-full mb-16"
      >
        <span className="text-xs font-mono tracking-widest uppercase text-content-muted block mb-4">
          Capabilities & Experience
        </span>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-white">
          QUALIFICATIONS.
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 border-b border-white/10 w-full max-w-4xl pb-4">
        {["skills", "education", "certifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm tracking-widest uppercase font-mono transition-colors relative ${activeTab === tab ? "text-white" : "text-white/30 hover:text-white/70"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-4 left-0 w-full h-[2px] bg-white"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex justify-center"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
