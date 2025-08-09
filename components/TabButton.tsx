import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className="relative px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold focus:outline-none group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative z-10">
        <span 
          className={`transition-all duration-300 ${
            active 
              ? "text-white bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent" 
              : "text-content/70 group-hover:text-content/90"
          }`}
        >
          {children}
        </span>
      </div>
      
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 backdrop-blur-sm border border-primary/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: active ? 1 : 0, 
          scale: active ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: active ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Active underline */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="h-1 bg-gradient-to-r from-primary via-secondary to-tertiary mt-1 absolute bottom-0 left-0 rounded-full"
      />
      
      {/* Glowing effect for active state */}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;
