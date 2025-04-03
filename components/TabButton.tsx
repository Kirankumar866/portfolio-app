import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" }, // Fully extends under the button
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className="relative px-4 py-2 text-lg font-semibold focus:outline-none "
    >
      <span className={`hover:text-white transition-colors duration-300 ${active ? "text-white" : "text-[#ADB7BE]"}`}>
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="h-1 bg-purple-500 mt-1 absolute bottom-0 left-0"
      />
    </button>
  );
};

export default TabButton;
