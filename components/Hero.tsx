'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "./Sociallinks";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 pb-10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none opacity-50 blur-3xl" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-sm lg:max-w-md"
                    >
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-surface shadow-[0_0_50px_rgba(250,204,21,0.15)] group">
                            {/* Inner glow effect on hover */}
                            <div className="absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 pointer-events-none" />
                            <Image
                                src="/skills/portfolio.png"
                                alt="Profile Image"
                                fill
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex flex-col items-start text-left"
                    >
                        <h3 className="text-primary font-medium text-lg mb-2">Hello, I'm</h3>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-4 text-white">
                            Kiran <span className="text-primary">Parasa</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl text-secondary font-medium mb-6">
                            Java Full Stack Developer
                        </h2>

                        <p className="text-content-muted text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                            Designs end-to-end web applications using Java for backend services and modern frontend technologies for responsive user interfaces.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-accent1 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                            >
                                Get in touch
                            </a>
                            <a
                                href="/kirankumar_sde.pdf"
                                download
                                className="px-6 py-3 border border-secondary text-secondary font-medium rounded-lg hover:border-white hover:text-white transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Download CV
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <SocialLinks />
                            <a
                                href="#contact"
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group flex items-center justify-center border border-white/10"
                            >
                                <Mail className="w-5 h-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
