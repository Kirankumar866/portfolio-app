'use client';
import { ArrowDownTrayIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function ResumeSection() {
    return (
        <section id="resume" className="py-16 sm:py-20 lg:py-24 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center glass"
                    >
                        <DocumentTextIcon className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-content via-primary to-secondary bg-clip-text text-transparent mb-4">
                        Download My Resume
                    </h2>
                    <p className="text-content/50 mb-8 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Get a comprehensive overview of my experience, skills, and achievements in a professionally crafted resume.
                    </p>

                    <motion.a
                        href="/kirankumar_sde.pdf"
                        download="KiranKumar_SDE.pdf"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold py-4 px-8 rounded-xl overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <ArrowDownTrayIcon className="h-5 w-5" />
                            Download Resume
                            <SparklesIcon className="h-4 w-4 opacity-70" />
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.a>

                    {/* File info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-xs text-content/30 font-mono"
                    >
                        PDF • Updated 2025
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
