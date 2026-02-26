'use client';
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Qualifications from "@/components/Qualifications";
import ResumeSection from "@/components/ResumeSection";
import Shuffle from "@/components/shuffle";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <Qualifications />
      </motion.div>

      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <Main />
      </motion.div>

      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <ResumeSection />
      </motion.div>

      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <Shuffle />
      </motion.div>

      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <EmailSection />
      </motion.div>

      <Footer />
    </div>
  );
}
