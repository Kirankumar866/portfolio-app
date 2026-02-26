'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ResumeSection() {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section id="resume" className="py-24 sm:py-32 overflow-hidden bg-background border-t border-white/5 relative">
            <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <a
                        href="/kirankumar_sde.pdf"
                        download="KiranKumar_SDE.pdf"
                        className="group relative inline-flex flex-col items-center justify-center border border-white p-8 sm:p-16 hover:bg-white transition-colors duration-500 ease-[0.16,1,0.3,1] w-full max-w-2xl text-center"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
                            DOWNLOAD
                        </h2>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-500 delay-75">
                            RESUME
                        </h2>
                        <motion.div
                            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </a>
                </motion.div>
                <div className="mt-8 font-mono text-xs tracking-widest text-content-muted uppercase">
                    PDF format • Standard CV
                </div>
            </div>

            {/* Background huge typography scroll effect */}
            <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-max whitespace-nowrap opacity-[0.02] pointer-events-none select-none text-[20vw] font-heading font-bold uppercase tracking-tighter leading-none"
                style={{ x }}
            >
                CURRICULUM VITAE — RESUME — WORK HISTORY — EXPERIENCES — FULL STACK
            </motion.div>
        </section>
    );
}
