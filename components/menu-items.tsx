import React from 'react';
import { motion } from 'framer-motion';

const Menuitems = ({ children, index, href }:
    {
        children: React.ReactNode;
        index: number;
        href: string;
    }) => {
    return (
        <motion.a
            href={href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.05 * index,
                duration: 0.3,
                ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-3 py-2 rounded-lg group"
        >
            <span className="relative z-10 text-sm font-medium text-content/70 group-hover:text-primary transition-colors duration-300">
                {children}
            </span>
            <motion.div
                className="absolute inset-0 rounded-lg bg-primary/10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
            />
        </motion.a>
    )
}

export default Menuitems