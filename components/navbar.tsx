'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                <motion.a
                    href="#about"
                    className="flex items-center gap-2 text-white font-heading font-bold text-xl"
                    whileHover={{ opacity: 0.7 }}
                >
                    <span className="text-primary">Portfolio</span>
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                            className="text-sm font-sans tracking-wide text-content-muted hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-white font-sans text-xs tracking-widest border border-primary/30 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                        {mobileOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/5 px-6 py-4"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-sm font-sans text-content-muted hover:text-primary transition-colors border-b border-white/5 last:border-0"
                        >
                            {item.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
