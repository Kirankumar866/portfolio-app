'use client';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Menuitems from './menu-items';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';
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
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: hidden ? -100 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'glass-strong shadow-lg shadow-primary/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#about"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative h-10 w-10 sm:h-11 sm:w-11">
                            {/* Animated ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9)',
                                    padding: '2px',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-full h-full rounded-full bg-background" />
                            </motion.div>
                            <div className="absolute inset-[3px] rounded-full overflow-hidden">
                                <Image src="/logo.png" width={36} height={40} alt="Logo" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                        <div className="hidden xs:block">
                            <span className="text-sm sm:text-base font-semibold text-content/90 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-tertiary group-hover:bg-clip-text transition-all duration-300">
                                Kiran Kumar Parasa
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <div className="flex items-center gap-1 lg:gap-2 glass rounded-full px-2 lg:px-3 py-1.5">
                            {navItems.map((items, i) => (
                                <Menuitems key={items.name} index={i} href={items.href}>
                                    {items.name}
                                </Menuitems>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-white/10 mx-1" />

                        <div className="flex gap-2">
                            {[
                                { href: socialLinks.github, icon: GithubIcon, label: "GitHub" },
                                { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-xl glass hover:shadow-glow-sm transition-all duration-300 group"
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="h-4 w-4 lg:h-5 lg:w-5 text-content/60 group-hover:text-primary transition-colors duration-300" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-xl glass"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-content/80" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-content/80" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="glass rounded-2xl mt-3 p-4 space-y-1">
                                {navItems.map((items, i) => (
                                    <motion.a
                                        key={items.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                        href={items.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-3 text-content/70 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium"
                                    >
                                        {items.name}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex gap-3 pt-3 border-t border-white/10 justify-center"
                                >
                                    {[
                                        { href: socialLinks.github, icon: GithubIcon },
                                        { href: socialLinks.linkedin, icon: LinkedInIcon },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            whileHover={{ scale: 1.1 }}
                                            className="p-3 rounded-xl glass group"
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="h-5 w-5 text-content/60 group-hover:text-primary transition-colors" />
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
