'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Qualifications", href: "#Qualifications" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                            Kiran Kumar Parasa
                        </h3>
                        <p className="text-content/40 text-sm leading-relaxed">
                            Building digital experiences that combine modern technology with exceptional design. Always exploring, always creating.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center"
                    >
                        <h3 className="text-lg font-bold text-content/80 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 3, color: '#0ea5e9' }}
                                        className="text-content/40 hover:text-primary transition-colors text-sm inline-block"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center md:text-right"
                    >
                        <h3 className="text-lg font-bold text-content/80 mb-4">Connect</h3>
                        <div className="flex gap-3 justify-center md:justify-end">
                            {[
                                { href: socialLinks.github, icon: GithubIcon, label: "GitHub" },
                                { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                                {
                                    href: "mailto:kirankumar201018@gmail.com?cc=parasakirankumar1825@gmail.com,s561500@nwmissouri.edu&subject=Trying to reach you from Portfolio!&body=Hi Kiran,",
                                    icon: EnvelopeIcon,
                                    label: "Email"
                                },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass rounded-xl text-content/40 hover:text-primary hover:shadow-glow-sm transition-all duration-300"
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="border-t border-white/5 mt-10 pt-8 text-center"
                >
                    <p className="text-content/30 text-sm flex items-center justify-center gap-1.5">
                        &copy; {new Date().getFullYear()} Kiran Parasa. Made with{" "}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <HeartIcon className="w-4 h-4 text-tertiary inline" />
                        </motion.span>
                        {" "}and lots of ☕
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
