'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './social-icons';

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

export default function Footer() {
    return (
        <footer className="w-full bg-surface/50 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo / Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-2xl font-heading font-bold text-primary">Portfolio</span>
                        <span className="text-sm text-content-muted">Kiran Parasa</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass-panel hover-glow group"
                            whileHover={{ y: -3 }}
                        >
                            <GithubIcon className="h-5 w-5 text-content-muted group-hover:text-primary transition-colors" />
                        </motion.a>
                        <motion.a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass-panel hover-glow group"
                            whileHover={{ y: -3 }}
                        >
                            <LinkedInIcon className="h-5 w-5 text-content-muted group-hover:text-primary transition-colors" />
                        </motion.a>
                        <motion.a
                            href="mailto:kirankumar201018@gmail.com"
                            className="p-3 rounded-xl glass-panel hover-glow group"
                            whileHover={{ y: -3 }}
                        >
                            <span className="text-content-muted group-hover:text-primary transition-colors">✉️</span>
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-xs text-content-muted">
                        © {new Date().getFullYear()} Kiran Parasa. All Rights Reserved.
                    </span>
                    <span className="text-xs text-content-muted">
                        Built with Next.js & Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}
