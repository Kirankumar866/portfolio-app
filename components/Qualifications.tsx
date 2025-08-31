"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon, CalendarIcon, MapPinIcon, BookOpenIcon, StarIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const skillCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
    skills: [
      { name: "React", src: "/skills/reactjs.png", level: "Advanced" },
      { name: "JavaScript", src: "/skills/javascript.png", level: "Advanced" },
      { name: "HTML/CSS", src: "/skills/html.png", level: "Expert" },
      { name: "Angular", src: "/skills/angularjs.png", level: "Intermediate" },
      { name: "Redux", src: "/skills/redux.png", level: "Advanced" },
      { name: "Tailwind", src: "/skills/tailwindcss.png", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    icon: "⚙️",
    skills: [
      { name: "Node.js", src: "/skills/nodejs.png", level: "Advanced" },
      { name: "Java", src: "/skills/java.png", level: "Advanced" },
      { name: "Spring Boot", src: "/skills/springboot.png", level: "Advanced" },
      { name: "Express.js", src: "/skills/expressjs.png", level: "Intermediate" },
      { name: "Spring", src: "/skills/spring.png", level: "Advanced" },
      { name: "JWT", src: "/skills/jwt.png", level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500 to-violet-500",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", src: "/skills/mongodb.png", level: "Advanced" },
      { name: "MySQL", src: "/skills/mysql.png", level: "Advanced" },
      { name: "PostgreSQL", src: "/skills/postgresql.png", level: "Intermediate" },
      { name: "SQL Server", src: "/skills/microsoftsql.svg", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    icon: "☁️",
    skills: [
      { name: "AWS", src: "/skills/aws.png", level: "Intermediate" },
      { name: "Docker", src: "/skills/docker.png", level: "Intermediate" },
      { name: "Kubernetes", src: "/skills/kubernetes.png", level: "Beginner" },
    ],
  },
  {
    category: "Tools",
    color: "from-pink-500 to-rose-500",
    icon: "🛠️",
    skills: [
      { name: "Git", src: "/skills/git.png", level: "Advanced" },
      { name: "VS Code", src: "/skills/vscode.png", level: "Expert" },
      { name: "Postman", src: "/skills/postman.png", level: "Advanced" },
      { name: "Figma", src: "/skills/figma.png", level: "Intermediate" },
      { name: "IntelliJ", src: "/skills/intelliJ.png", level: "Advanced" },
    ],
  },
];

const getSkillLevelStars = (level: string) => {
  const levels = {
    "Beginner": 2,
    "Intermediate": 3,
    "Advanced": 4,
    "Expert": 5
  };
  return levels[level as keyof typeof levels] || 3;
};

const getSkillLevelColor = (level: string) => {
  const colors = {
    "Beginner": "text-yellow-400",
    "Intermediate": "text-blue-400", 
    "Advanced": "text-green-400",
    "Expert": "text-purple-400"
  };
  return colors[level as keyof typeof colors] || "text-blue-400";
};

const SkillsSection = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6 space-y-6 sm:space-y-8"
    >
      {/* Skills Overview */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-content/70 max-w-2xl mx-auto text-sm sm:text-base">
          Here are the technologies and tools I work with. I'm always learning and growing! 🚀
        </p>
      </div>

      {/* Desktop View - Show all skills */}
      <div className="hidden lg:block">
        <div className="grid gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-content group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.category}
                </h3>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group/skill cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-surface/60 to-surface/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-surface/30 group-hover/skill:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-surface/80 to-surface/60 rounded-lg flex items-center justify-center p-2">
                          <img
                            src={skill.src}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-content group-hover/skill:text-primary transition-colors text-sm sm:text-base">
                            {skill.name}
                          </h4>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-3 h-3 ${
                                  i < getSkillLevelStars(skill.level)
                                    ? getSkillLevelColor(skill.level)
                                    : 'text-content/20'
                                }`}
                                fill={i < getSkillLevelStars(skill.level) ? 'currentColor' : 'none'}
                              />
                            ))}
                            <span className={`text-xs ml-1 sm:ml-2 ${getSkillLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View - Collapsible Categories */}
      <div className="lg:hidden space-y-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="relative"
          >
            {/* Category Header - Clickable */}
            <motion.button
              onClick={() => toggleCategory(categoryIndex)}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-br from-surface/60 to-surface/40 rounded-xl border border-surface/30 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-content">
                    {category.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-content/60">
                    {category.skills.length} skills
                  </p>
                </div>
              </div>
              
              <motion.div
                animate={{ 
                  rotate: expandedCategories.includes(categoryIndex) ? 180 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="text-content/60"
              >
                <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </motion.button>

            {/* Collapsible Skills Content */}
            <AnimatePresence>
              {expandedCategories.includes(categoryIndex) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="relative group/skill cursor-pointer"
                      >
                        <div className="bg-gradient-to-br from-surface/60 to-surface/40 rounded-lg p-3 border border-surface/30 group-hover/skill:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-surface/80 to-surface/60 rounded-lg flex items-center justify-center p-2">
                              <img
                                src={skill.src}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-content group-hover/skill:text-primary transition-colors text-sm">
                                {skill.name}
                              </h4>
                              <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    className={`w-2.5 h-2.5 ${
                                      i < getSkillLevelStars(skill.level)
                                        ? getSkillLevelColor(skill.level)
                                        : 'text-content/20'
                                    }`}
                                    fill={i < getSkillLevelStars(skill.level) ? 'currentColor' : 'none'}
                                  />
                                ))}
                                <span className={`text-xs ml-1 ${getSkillLevelColor(skill.level)}`}>
                                  {skill.level}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-surface/40 via-surface/30 to-surface/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-surface/20 text-center mt-8"
      >
        <h4 className="text-base sm:text-lg font-bold text-content/90 mb-2 sm:mb-3">
          Always Learning 📚
        </h4>
        <p className="text-content/70 text-xs sm:text-sm max-w-2xl mx-auto px-2">
          Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and best practices to stay current and deliver the best solutions.
        </p>
      </motion.div>
    </motion.div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsSection />
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 mt-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 rounded-3xl p-8 backdrop-blur-sm border border-surface/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-tertiary/20 to-primary/20 rounded-full blur-2xl translate-y-12 -translate-x-12"></div>
            
            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg"
              >
                <AcademicCapIcon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4"
              >
                Masters in Information Science
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center space-x-2 text-xl text-content/90">
                  <BookOpenIcon className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Northwest Missouri State University</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-lg text-content/70">
                  <MapPinIcon className="w-5 h-5 text-secondary" />
                  <span>Maryville, Missouri</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-lg text-content/70">
                  <CalendarIcon className="w-5 h-5 text-tertiary" />
                  <span>2022 - 2024</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30"
              >
                <TrophyIcon className="w-5 h-5 text-primary" />
                <span className="text-content/90 font-medium">Graduate Degree</span>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-surface/60 via-surface/40 to-surface/20 rounded-2xl p-6 backdrop-blur-sm border border-surface/20 shadow-xl">
            <h4 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Academic Highlights
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3.8</span>
                </div>
                <p className="text-xs sm:text-sm text-content/70">GPA</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">15+</span>
                </div>
                <p className="text-xs sm:text-sm text-content/70">Courses</p>
              </div>
              <div className="text-center space-y-2 col-span-2 sm:col-span-1">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-tertiary/20 to-tertiary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-tertiary">5+</span>
                </div>
                <p className="text-xs sm:text-sm text-content/70">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 mt-6"
      >
        {[
          {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            description: "Foundational cloud computing knowledge and AWS services",
            color: "from-orange-500 to-yellow-500",
            icon: "☁️"
          }
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 rounded-2xl p-6 backdrop-blur-sm border border-surface/30 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl -translate-y-10 translate-x-10"></div>
              
              <div className="relative flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                >
                  <span>{cert.icon}</span>
                </motion.div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold text-content group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {cert.title}
                    </h4>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full p-2"
                    >
                      <CheckBadgeIcon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  
                  <p className="text-content/80 font-medium">{cert.issuer}</p>
                  <p className="text-content/60 text-sm">{cert.description}</p>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <CalendarIcon className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-content/70">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Working On Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-gradient-to-br from-surface/60 via-surface/40 to-surface/30 rounded-2xl p-6 backdrop-blur-sm border border-dashed border-primary/30 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-xl -translate-y-8 translate-x-8"></div>

            <div className="relative flex items-start space-x-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-2xl shadow-lg"
              >
                📚
              </motion.div>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold text-content/90 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Currently Working On
                  </h4>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full p-2"
                  >
                    <span className="text-lg">🎯</span>
                  </motion.div>
                </div>

                <p className="text-lg font-semibold text-content/90">AWS Solutions Architect Certification</p>
                <p className="text-content/60 text-sm">Preparing for professional-level AWS architecture and design skills</p>

                <div className="flex items-center space-x-2 mt-3">
                  <CalendarIcon className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-content/70">Target: 2025</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center pt-6"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 rounded-full border border-primary/20">
            <TrophyIcon className="w-5 h-5 text-primary" />
            <span className="text-content/80 font-medium">Continuously Learning & Growing</span>
          </div>
        </motion.div>
      </motion.div>
    ),
  },
];

const Qualifications = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="Qualifications" className="text-white relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
      <div className="relative flex flex-col items-center py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-3 sm:mb-4">
            Qualifications
          </h2>
          <p className="text-base sm:text-lg text-content/70 max-w-2xl mx-auto px-4">
            My educational background, technical skills, and professional certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row justify-center space-x-1 sm:space-x-2 md:space-x-6 mb-6 sm:mb-8 px-4"
        >
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
        </motion.div>

        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            {isPending ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow mb-4"></div>
                <p className="text-content/60 animate-pulse">Loading...</p>
              </motion.div>
            ) : (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content || null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
