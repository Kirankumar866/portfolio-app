'use client';
import { useState, useEffect } from "react";
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";


const ParticleCanvasDynamic = dynamic(() => import("@/hooks/particle").then(mod => ({ default: mod.ParticleCanvas })), {
  ssr: false,
  loading: () => null
});

export default function Hero() {
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const titles = ["Full Stack Developer","Java Developer", "Frontend Developer"];



    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [titles.length]);

    return(
        <section 
        id = "about"
        className='min-h-screen relative overflow-hidden bg-black'>
            {mounted && <ParticleCanvasDynamic/>}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.1, duration:1, ease: "easeOut"}}
                    className="relative group lg:w-1/2"
                    >
                        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r
            from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4 sm:mb-6 text-center lg:text-left"
        >
            <motion.span
                key={titles[index]} // Ensures smooth animation on change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
            >
                {mounted ? titles[index] : titles[0]}
            </motion.span>
        </motion.h1>
                        <motion.p
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:1.1, duration:0.8, ease: "easeOut"}}
                        className="text-base sm:text-lg lg:text-xl text-content/80 mb-6 sm:mb-8 text-center lg:text-left leading-relaxed px-2 lg:px-0"
                        >
                Full-stack Software Engineer with 3+ years of experience building scalable microservices, cloud-native solutions, and responsive frontends in the healthcare domain. Skilled in Java Spring Boot, ReactJS, cloud platforms, and CI/CD automation, with a strong foundation in databases and system optimization. Enthusiastic about building side projects with AI, including products developed using Cursor AI to accelerate development, testing, and innovation.
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                                transition: { duration: 0.1 },
                            }}
                            onHoverEnd={(e) => {
                                if (e.target) {
                                (e.target as HTMLElement).style.transform = "scale(1)";
                                }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-surface border border-white/10 
                                        hover:border-primary/30 transition-all group mx-auto lg:mx-0 inline-block"
                            href="#contact"
                            >
                            <span className="text-content/90 group-hover:text-primary transition-colors font-bold font-mono text-sm sm:text-base">
                                Send Message
                            </span>
                            
                            {/* Fix gradient overflow issue */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                    </motion.div>
                    {/* Creative Software Engineer Animation */}
                    <motion.div
                    initial={{opacity:0, x:50}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.1, duration:1, ease: "easeOut"}}
                    className="relative lg:w-1/2 hidden lg:block"
                    style = {{y}}
                    >
                        <div className="relative w-full aspect-square group">
                            {/* Floating Background Gradient */}
                            <motion.div
                                initial={{scale:0.95}}
                                animate={{scale:1}}
                                transition={{repeat:Infinity, duration:4, ease: "easeInOut", repeatType:"reverse"}}
                                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 blur-2xl"
                            />

                            {/* Main Container */}
                            <motion.div
                                animate={{y: [0, -15, 0]}}
                                transition={{duration:6, ease: "easeInOut", repeat: Infinity}}
                                className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 backdrop-blur-sm p-6"
                            >
                                {/* IDE Header */}
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs text-content/60 font-mono">main.tsx</span>
                                </div>

                                {/* Code Editor */}
                                <div className="space-y-2 mb-6">
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={{width: "100%"}}
                                        transition={{delay: 1, duration: 2}}
                                        className="font-mono text-xs overflow-hidden"
                                    >
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-green-400">{`{`}</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={{width: "90%"}}
                                        transition={{delay: 1.5, duration: 2}}
                                        className="font-mono text-xs pl-4 overflow-hidden"
                                    >
                                        <span className="text-red-400">name:</span> <span className="text-green-300">"Kiran Kumar"</span>,
                                    </motion.div>
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={{width: "85%"}}
                                        transition={{delay: 2, duration: 2}}
                                        className="font-mono text-xs pl-4 overflow-hidden"
                                    >
                                        <span className="text-red-400">role:</span> <span className="text-green-300">"Full Stack Engineer"</span>,
                                    </motion.div>
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={{width: "95%"}}
                                        transition={{delay: 2.5, duration: 2}}
                                        className="font-mono text-xs pl-4 overflow-hidden"
                                    >
                                        <span className="text-red-400">skills:</span> <span className="text-yellow-400">[</span><span className="text-green-300">"Java", "React", "Spring Boot"</span><span className="text-yellow-400">]</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={{width: "100%"}}
                                        transition={{delay: 3, duration: 2}}
                                        className="font-mono text-xs overflow-hidden"
                                    >
                                        <span className="text-green-400">{`}`}</span>
                                    </motion.div>
                                </div>

                                {/* Tech Stack Icons */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex justify-between items-center">
                                        {[
                                            { name: "JS", color: "text-yellow-400", delay: 4 },
                                            { name: "⚛️", color: "text-blue-400", delay: 4.2 },
                                            { name: "☕", color: "text-orange-500", delay: 4.4 },
                                            { name: "🐳", color: "text-blue-500", delay: 4.6 },
                                            { name: "☁️", color: "text-gray-300", delay: 4.8 }
                                        ].map((tech, index) => (
                                            <motion.div
                                                key={tech.name}
                                                initial={{scale: 0, rotate: 180}}
                                                animate={{scale: 1, rotate: 0}}
                                                transition={{delay: tech.delay, duration: 0.5, type: "spring"}}
                                                whileHover={{scale: 1.2, y: -5}}
                                                className={`w-8 h-8 rounded-lg bg-surface/60 border border-white/20 flex items-center justify-center ${tech.color} font-bold text-sm cursor-pointer`}
                                            >
                                                {tech.name}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Code Particles */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-primary/60 rounded-full"
                                        animate={{
                                            x: [0, Math.random() * 200 - 100],
                                            y: [0, Math.random() * 200 - 100],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 3 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2
                                        }}
                                        style={{
                                            left: `${20 + Math.random() * 60}%`,
                                            top: `${20 + Math.random() * 60}%`
                                        }}
                                    />
                                ))}

                                {/* Terminal Cursor */}
                                <motion.div
                                    animate={{opacity: [1, 0, 1]}}
                                    transition={{duration: 1, repeat: Infinity}}
                                    className="absolute bottom-16 right-8 w-0.5 h-4 bg-primary"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
