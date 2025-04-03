"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

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
      <div className="w-full overflow-hidden space-y-6 mt-4">
      {skillCategories.map((category, index) => (
        <div key={index} className="text-center">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6">
            {category.category}
          </h3>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-8 min-w-full"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {category.skills.map((skill, skillIndex) => (
                <img
                  key={skillIndex}
                  src={skill.src}
                  alt={skill.name}
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-center space-y-2 group transition duration-300">
      <p className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
        Masters in Information Science
      </p>
      <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
        Northwest Missouri State University, Maryville MO
      </p>
    </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-center">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
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
    <section id="Qualifications" className="text-white text-center">
      <div className="flex flex-col items-center py-8 px-4 sm:py-16 xl:px-16">
        {/* Centered Tab Buttons */}
        <div className="flex flex-row justify-center space-x-4">
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
        </div>

        {/* Content Below */}
        <div className="mt-8">
          {isPending ? (
            <p className="text-gray-400 animate-pulse">Loading...</p>
          ) : (
            TAB_DATA.find((t) => t.id === tab)?.content || null
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
