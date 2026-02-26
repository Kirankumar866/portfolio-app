'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

/* ──────────────────────────── 3D Floating Shape ──────────────────────────── */
const FloatingShape = ({
    size, color, delay, duration, x, y, rotateSpeed, shape
}: {
    size: number; color: string; delay: number; duration: number;
    x: string; y: string; rotateSpeed: number; shape: 'cube' | 'octahedron' | 'ring' | 'pyramid';
}) => {
    const shapeStyles: Record<string, React.CSSProperties> = {
        cube: {
            width: size, height: size,
            background: `linear-gradient(135deg, ${color}40, ${color}10)`,
            border: `1px solid ${color}30`,
            borderRadius: size * 0.15,
        },
        octahedron: {
            width: size, height: size,
            background: `linear-gradient(135deg, ${color}30, ${color}05)`,
            border: `1px solid ${color}20`,
            borderRadius: '50%',
        },
        ring: {
            width: size, height: size,
            background: 'transparent',
            border: `2px solid ${color}30`,
            borderRadius: '50%',
        },
        pyramid: {
            width: 0, height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}20`,
        },
    };

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: x, top: y, perspective: '800px' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    rotateZ: [0, 180],
                    y: [0, -30, 0],
                }}
                transition={{
                    rotateX: { duration: rotateSpeed, repeat: Infinity, ease: "linear" },
                    rotateY: { duration: rotateSpeed * 1.3, repeat: Infinity, ease: "linear" },
                    rotateZ: { duration: rotateSpeed * 2, repeat: Infinity, ease: "linear" },
                    y: { duration, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                    ...shapeStyles[shape],
                    transformStyle: 'preserve-3d',
                    backdropFilter: shape !== 'pyramid' ? 'blur(4px)' : undefined,
                }}
            />
        </motion.div>
    );
};

/* ──────────────────────────── 3D Tilt Card ──────────────────────────── */
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

    const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        rotateX.set((e.clientY - centerY) / 8);
        rotateY.set((centerX - e.clientX) / 8);
    }, [rotateX, rotateY]);

    const handleLeave = useCallback(() => {
        rotateX.set(0);
        rotateY.set(0);
    }, [rotateX, rotateY]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: 'preserve-3d',
                perspective: '1200px',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ──────────────────────────── Meteor Trail ──────────────────────────── */
const MeteorTrail = ({ delay }: { delay: number }) => (
    <motion.div
        className="absolute h-[1px] pointer-events-none"
        style={{
            width: `${60 + Math.random() * 100}px`,
            background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.6), transparent)',
            top: `${Math.random() * 50}%`,
            right: `-${Math.random() * 200}px`,
            rotate: '215deg',
        }}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: -600, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5 + Math.random(), delay, repeat: Infinity, repeatDelay: 3 + Math.random() * 5 }}
    />
);

/* ──────────────────────────── Status Badge ──────────────────────────── */
const StatusBadge = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
        className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
    >
        <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-sm text-content/60 font-medium">Open to opportunities</span>
    </motion.div>
);

/* ──────────────────────────── Animated Word ──────────────────────────── */
const AnimatedWord = ({ word, index }: { word: string; index: number }) => (
    <motion.span
        initial={{ opacity: 0, y: 30, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
            delay: 1.2 + index * 0.06,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="inline-block mr-[0.3em]"
        style={{ transformStyle: 'preserve-3d' }}
    >
        {word}
    </motion.span>
);

/* ──────────────────────────── 3D Tech Sphere ──────────────────────────── */
const TechSphere = () => {
    const techs = [
        { name: "Java", emoji: "☕", angle: 0 },
        { name: "React", emoji: "⚛️", angle: 51 },
        { name: "AWS", emoji: "☁️", angle: 102 },
        { name: "Docker", emoji: "🐳", angle: 153 },
        { name: "Spring", emoji: "🍃", angle: 204 },
        { name: "Node", emoji: "💚", angle: 255 },
        { name: "K8s", emoji: "⎈", angle: 306 },
    ];

    return (
        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]"
            style={{ perspective: '1000px' }}>
            <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {techs.map((tech, i) => {
                    const angle = (tech.angle * Math.PI) / 180;
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;
                    const yOffset = (i % 3 - 1) * 40;

                    return (
                        <motion.div
                            key={tech.name}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `translate(-50%, -50%) translate3d(${x}px, ${yOffset}px, ${z}px)`,
                                transformStyle: 'preserve-3d',
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2 + i * 0.15, type: "spring", stiffness: 200 }}
                        >
                            <motion.div
                                animate={{ rotateY: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                whileHover={{ scale: 1.3, z: 50 }}
                                className="glass-strong rounded-xl px-4 py-3 flex flex-col items-center gap-1 cursor-pointer hover:shadow-glow-sm transition-shadow duration-300"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <span className="text-2xl">{tech.emoji}</span>
                                <span className="text-[10px] font-mono text-content/50">{tech.name}</span>
                            </motion.div>
                        </motion.div>
                    );
                })}

                {/* Core sphere */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.4), rgba(139,92,246,0.2), rgba(236,72,153,0.1))',
                        boxShadow: '0 0 60px rgba(14,165,233,0.3), inset 0 0 30px rgba(139,92,246,0.2)',
                    }}
                />
            </motion.div>

            {/* Orbital rings */}
            {[0, 60, 120].map((rot, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0"
                    style={{
                        border: '1px solid',
                        borderColor: i === 0 ? 'rgba(14,165,233,0.1)' : i === 1 ? 'rgba(139,92,246,0.1)' : 'rgba(236,72,153,0.08)',
                        borderRadius: '50%',
                        transform: `rotateX(${60 + i * 10}deg) rotateZ(${rot}deg)`,
                        transformStyle: 'preserve-3d',
                    }}
                    animate={{ rotateZ: [rot, rot + 360] }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </div>
    );
};

/* ══════════════════════════════ HERO COMPONENT ══════════════════════════════ */
export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const titles = ["Full Stack Developer", "Cloud Architect", "Java Developer"];

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const bgX = useTransform(mouseX, [0, 1], [-20, 20]);
    const bgY = useTransform(mouseX, [0, 1], [-15, 15]);
    const springBgX = useSpring(bgX, { stiffness: 40, damping: 20 });
    const springBgY = useSpring(bgY, { stiffness: 40, damping: 20 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }, [mouseX, mouseY]);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const descriptionWords = "Full-stack Software Engineer with 3+ years of experience building scalable microservices, cloud-native solutions, and responsive frontends. Skilled in Java, Spring Boot, ReactJS, and cloud platforms.".split(" ");

    return (
        <section
            id="about"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen relative overflow-hidden flex items-center"
            style={{ perspective: '1200px' }}
        >
            {/* ──── Animated Background Layer ──── */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ x: springBgX, y: springBgY }}
            >
                {/* Large ambient orbs */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full"
                    style={{
                        top: '10%', left: '-5%',
                        background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
                    }}
                    animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        bottom: '-10%', right: '-10%',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                    }}
                    animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full"
                    style={{
                        top: '40%', left: '40%',
                        background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                />
            </motion.div>

            {/* ──── 3D Floating Shapes ──── */}
            <FloatingShape shape="cube" size={30} color="#0ea5e9" delay={0.5} duration={6} x="8%" y="15%" rotateSpeed={12} />
            <FloatingShape shape="octahedron" size={22} color="#8b5cf6" delay={1} duration={8} x="85%" y="20%" rotateSpeed={10} />
            <FloatingShape shape="ring" size={40} color="#ec4899" delay={1.5} duration={7} x="15%" y="75%" rotateSpeed={15} />
            <FloatingShape shape="cube" size={18} color="#06b6d4" delay={2} duration={9} x="75%" y="70%" rotateSpeed={8} />
            <FloatingShape shape="pyramid" size={24} color="#8b5cf6" delay={0.8} duration={7} x="90%" y="55%" rotateSpeed={18} />
            <FloatingShape shape="ring" size={28} color="#0ea5e9" delay={1.2} duration={6} x="5%" y="45%" rotateSpeed={14} />
            <FloatingShape shape="octahedron" size={16} color="#ec4899" delay={2.5} duration={10} x="50%" y="10%" rotateSpeed={20} />
            <FloatingShape shape="cube" size={14} color="#06b6d4" delay={3} duration={8} x="35%" y="85%" rotateSpeed={16} />

            {/* ──── Meteor Trails ──── */}
            {mounted && [...Array(4)].map((_, i) => (
                <MeteorTrail key={i} delay={i * 2.5 + 1} />
            ))}

            {/* ──── Main Content ──── */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-0 pb-12 sm:pb-16 lg:pb-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                        {/* ──── Left: Text Content ──── */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2 text-center lg:text-left relative z-20"
                        >
                            <StatusBadge />

                            {/* 3D Title Container */}
                            <div
                                className="h-[80px] sm:h-[100px] md:h-[120px] mb-6 flex items-center justify-center lg:justify-start overflow-hidden"
                                style={{ perspective: '600px' }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={titles[titleIndex]}
                                        initial={{ opacity: 0, rotateX: -80, y: 60, scale: 0.8 }}
                                        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotateX: 80, y: -60, scale: 0.8 }}
                                        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent text-glow"
                                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
                                    >
                                        {mounted ? titles[titleIndex] : titles[0]}
                                    </motion.h1>
                                </AnimatePresence>
                            </div>

                            {/* Word-by-word 3D reveal */}
                            <p className="text-base sm:text-lg text-content/50 mb-8 leading-relaxed px-2 lg:px-0"
                                style={{ perspective: '800px' }}>
                                {descriptionWords.map((word, i) => (
                                    <AnimatedWord key={`${word}-${i}`} word={word} index={i} />
                                ))}
                            </p>

                            {/* CTA Buttons with 3D depth */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.8, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                style={{ perspective: '600px' }}
                            >
                                <TiltCard>
                                    <motion.a
                                        whileHover={{ scale: 1.05, z: 30 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold text-center block shadow-glow-md"
                                        href="#contact"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <span className="relative z-10" style={{ transform: 'translateZ(20px)', display: 'block' }}>
                                            Let&apos;s Work Together
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ x: "-100%", skewX: -15 }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                        />
                                    </motion.a>
                                </TiltCard>

                                <TiltCard>
                                    <motion.a
                                        whileHover={{ scale: 1.05, z: 20 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-xl glass text-content/80 font-semibold text-center block hover:text-primary hover:shadow-glow-sm transition-all duration-300"
                                        href="#projects"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <span style={{ transform: 'translateZ(15px)', display: 'block' }}>
                                            View Projects
                                        </span>
                                    </motion.a>
                                </TiltCard>
                            </motion.div>

                            {/* 3D Tech Pills */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.2 }}
                                className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start"
                                style={{ perspective: '400px' }}
                            >
                                {["Java", "Spring Boot", "React", "AWS", "Docker", "TypeScript"].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        transition={{ delay: 3.2 + i * 0.1, type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.15, y: -4, rotateY: 15, z: 20 }}
                                        className="px-3 py-1.5 text-xs font-mono glass rounded-lg text-content/50 hover:text-primary hover:shadow-glow-sm transition-all duration-300 cursor-default"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ──── Right: 3D Tech Sphere ──── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="lg:w-1/2 hidden lg:flex items-center justify-center"
                            style={{ perspective: '1200px' }}
                        >
                            <TechSphere />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ──── Scroll Indicator ──── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-content/25 font-mono tracking-[0.3em] uppercase">scroll</span>
                    <div className="w-5 h-8 rounded-full border border-content/15 flex justify-center pt-1.5">
                        <motion.div
                            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 rounded-full bg-primary/50"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
