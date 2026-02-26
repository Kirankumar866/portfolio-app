'use client';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useState } from 'react';

const navItems = [
    { name: "About", href: "#about" },
    { name: "Qualifications", href: "#Qualifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed w-full z-50 transition-colors duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
                <motion.a
                    href="#about"
                    className="text-white font-heading font-bold text-xl uppercase tracking-wider"
                    whileHover={{ opacity: 0.7 }}
                >
                    KP.
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                            className="text-sm font-sans uppercase tracking-widest text-content-muted hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile menu could go here, but keeping it ultra minimal for now */}
                <div className="md:hidden">
                    <button className="text-white font-sans uppercase text-xs tracking-widest border border-white/20 px-3 py-1.5 rounded-full">Menu</button>
                </div>
            </div>
        </motion.nav>
    );
}
