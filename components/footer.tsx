'use client';
import { motion } from 'framer-motion';

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

export default function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10 flex flex-col items-center">
            <div className="w-full max-w-7xl px-6 md:px-12 py-16 sm:py-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16 gap-8">
                    <div>
                        <h2 className="text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-heading font-black uppercase tracking-tighter leading-none text-white select-none relative -left-2" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
                            KP.
                        </h2>
                    </div>

                    <div className="flex flex-col items-end gap-4 pb-4">
                        <motion.a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-heading uppercase text-white hover:text-content-muted transition-colors tracking-widest"
                            whileHover={{ x: -10 }}
                        >
                            Github ↗
                        </motion.a>
                        <motion.a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-heading uppercase text-white hover:text-content-muted transition-colors tracking-widest"
                            whileHover={{ x: -10 }}
                        >
                            LinkedIn ↗
                        </motion.a>
                        <motion.a
                            href="mailto:kirankumar201018@gmail.com"
                            className="text-2xl font-heading uppercase text-white hover:text-content-muted transition-colors tracking-widest"
                            whileHover={{ x: -10 }}
                        >
                            Email ↗
                        </motion.a>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-content-muted">
                        © {new Date().getFullYear()} Kiran Parasa.
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-content-muted">
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
