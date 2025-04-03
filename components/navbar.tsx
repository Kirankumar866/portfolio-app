'use client';
import { motion } from 'framer-motion';
import Menuitems from './menu-items';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { GithubIcon, LinkedInIcon } from './social-icons';
import Image from "next/image";

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};


const navItems = [
    { name: "About", href: "#about" },
    { name: "Qualifications", href: "#Qualifications" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" }

];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out"
        >
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]"></div>
                            <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                                <Image src="/logo.png"  width={36} height={40} alt="Logo" className="h-10 w-9 object-contain" />
                            </div>
                        </div>
                        <span className="text-lg font-semibold text-content/90 group-hover:text-primary transition-colors">
                            Kiran Kumar Parasa
                        </span>
                    </motion.div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-white/15 shadow-lg shadow-white/10">
                            {navItems.map((items, i) => (
                                <Menuitems key={items.name} index={i} href={items.href}>
                                    {items.name}
                                </Menuitems>
                            ))}
                        </div>

                        {/* <div className="flex items-center gap-6 bg-background/60 rounded-full px-4 py-2 border border-white/15 shadow-lg shadow-white/2">
                            {navItems.map((items, i) => (
                                <Menuitems key={items.name} index={i} href={items.href}>
                                    {items.name}
                                </Menuitems>
                            ))}
                        </div> */}
                        <div className="h-6 w-px bg-white/20 mx-2"></div>
                                <div className="flex gap-4">
                                    <a
                                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a
                                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                                    </a>
                                </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary transition-colors"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-content/80" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-content/80" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden flex flex-col gap-4 mt-4 pb-4 space-y-4 bg-gradient-to-b from-white/10 to-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white/10 p-4"
                        //className="md:hidden flex flex-col gap-4 mt-4 pb-4 space-y-4"
                    >
                        {navItems.map((items) => (
                            <a
                                key={items.name}
                                href={items.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-content/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {items.name}
                            </a>
                        ))}
                                <div className="flex gap-4">
                                    <a
                                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a
                                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                                    </a>
                                </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
