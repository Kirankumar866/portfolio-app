'use client';
import React from 'react';
 // Make sure the path is correct
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './social-icons';

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};


const EmailSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center text-center my-12 py-24 gap-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 blur-3xl"></div>
      </div>

      {/* Text Section */}
      <div className="z-10 max-w-lg">
        <h5 className="text-2xl font-bold text-white mb-4">Let us Connect</h5>
        <p className="text-[#ADB7BE] mb-6">
          I am currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <div className="socials flex justify-center gap-4">
                  <div className="flex gap-4">
                      <a
                          className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                      </a>
                      <a
                          className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                      </a>
                  </div>
        </div>
      </div>

      {/* mail me */}
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95 }}
        href="mailto:kirankumar201018@gmail.com?cc=parasakirankumar1825@gmail.com,s561500@nwmissouri.edu&subject=Message from Portfolio!&body=Hi Kiran,"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 
                    hover:border-primary/30 transition-all group text-white"
      >
        Say Hello 👋🏻
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      </motion.a>
    </section>
  );
};

export default EmailSection;
