"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon, CalendarIcon, MapPinIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "AngularJS", src: "/skills/angularjs.png" },
      { name: "CSS", src: "/skills/css.png" },
      { name: "HTML", src: "/skills/html.png" },
      { name: "JavaScript", src: "/skills/javascript.png" },
      { name: "ReactJS", src: "/skills/reactjs.png" },
      { name: "Redux", src: "/skills/redux.png" },
      { name: "TailwindCSS", src: "/skills/tailwindcss.png" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ExpressJS", src: "/skills/expressjs.png" },
      { name: "Java", src: "/skills/java.png" },
      { name: "JWT", src: "/skills/jwt.png" },
      { name: "Node.js", src: "/skills/nodejs.png" },
      { name: "Spring", src: "/skills/spring.png" },
      { name: "Spring Boot", src: "/skills/springboot.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", src: "/skills/mongodb.png" },
      { name: "MySQL", src: "/skills/mysql.png" },
      { name: "PostgreSQL", src: "/skills/postgresql.png" },
      { name: "Microsoft SQL Server", src: "/skills/microsoftsql.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", src: "/skills/aws.png" },
      { name: "Docker", src: "/skills/docker.png" },
      { name: "Kubernetes", src: "/skills/kubernetes.png" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Figma", src: "/skills/figma.png" },
      { name: "Git", src: "/skills/git.png" },
      { name: "GitHub", src: "/skills/github.png" },
      { name: "IntelliJ", src: "/skills/intellij.png" },
      { name: "Postman", src: "/skills/postman.png" },
      { name: "Swagger", src: "/skills/swagger.png" },
      { name: "VS Code", src: "/skills/vscode.png" },
    ],
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="w-full overflow-hidden space-y-8 mt-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-2">
                {category.category}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-surface/50 via-surface/30 to-surface/10 rounded-2xl p-6 backdrop-blur-sm border border-surface/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-subtle opacity-20"></div>
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex space-x-8 min-w-full"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 12 + index * 2, 
                    ease: "linear",
                    repeatDelay: 0 
                  }}
                >
                  {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center space-y-2 min-w-fit"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl backdrop-blur-sm border border-primary/30 shadow-lg">
                        <img
                          src={skill.src}
                          alt={skill.name}
                          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-content/80">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
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
        
        {/* Additional Education */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3.8</span>
                </div>
                <p className="text-sm text-content/70">GPA</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">15+</span>
                </div>
                <p className="text-sm text-content/70">Courses</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-tertiary/20 to-tertiary/40 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-tertiary">5+</span>
                </div>
                <p className="text-sm text-content/70">Projects</p>
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
          },
          {
            title: "Google Professional Cloud Developer",
            issuer: "Google Cloud",
            date: "2023",
            description: "Professional-level cloud development and deployment skills",
            color: "from-blue-500 to-green-500",
            icon: "🏗️"
          },
          {
            title: "Oracle Certified Associate",
            issuer: "Oracle Corporation",
            date: "2022",
            description: "Java programming fundamentals and object-oriented concepts",
            color: "from-red-500 to-orange-500",
            icon: "☕"
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
      <div className="relative flex flex-col items-center py-12 px-4 sm:py-20 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4">
            Qualifications
          </h2>
          <p className="text-lg text-content/70 max-w-2xl mx-auto">
            My educational background, technical skills, and professional certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row justify-center space-x-2 md:space-x-6 mb-8"
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
