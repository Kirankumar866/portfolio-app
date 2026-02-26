'use client';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0.5,
            transition: { type: "tween", ease: "backOut", duration: 0.1 }
        },
        hover: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            scale: 1.5,
            opacity: 1,
            backgroundColor: "white",
            mixBlendMode: "difference" as const,
            transition: { type: "tween", ease: "backOut", duration: 0.1 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
    };

    return (
        <section id="about" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Dynamic Cursor Spotlight that only works well on desktop */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-50 hidden md:block"
                variants={variants}
                animate={isHovered ? "hover" : "default"}
            />

            <div className="bg-grid absolute inset-0 opacity-40" />

            {/* Background ambient light */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)',
                    left: mousePosition.x - 400,
                    top: mousePosition.y - 400,
                    transition: 'left 0.2s ease-out, top 0.2s ease-out'
                }}
            />

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center w-full px-4"
                style={{ opacity }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                    }}
                    className="text-center"
                >
                    <motion.div
                        variants={textVariants}
                        className="overflow-hidden mb-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-heading font-bold uppercase tracking-tighter leading-none text-white selection:bg-white selection:text-black cursor-default"
                            style={{ y: y1 }}
                        >
                            Kiran <span className="text-white/20">Parasa</span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="w-full h-[1px] bg-white/20 my-4 lg:my-8"
                    />

                    <motion.div variants={textVariants} className="overflow-hidden">
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-widest uppercase text-content-muted font-light"
                            style={{ y: y2 }}
                        >
                            Full Stack Developer
                        </motion.h2>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Modern minimal scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{ top: ['-50%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
