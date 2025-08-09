'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { PaperAirplaneIcon, UserIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-content/70 max-w-2xl mx-auto">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-surface/80 via-surface/60 to-surface/40 rounded-3xl p-8 backdrop-blur-sm border border-surface/30 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-content/80 font-medium">
                    <UserIcon className="w-5 h-5 text-primary" />
                    <span>Your Name</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface/50 border border-surface/50 rounded-xl focus:border-primary/50 focus:outline-none transition-all duration-300 text-content placeholder-content/50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-content/80 font-medium">
                    <EnvelopeIcon className="w-5 h-5 text-secondary" />
                    <span>Your Email</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface/50 border border-surface/50 rounded-xl focus:border-secondary/50 focus:outline-none transition-all duration-300 text-content placeholder-content/50"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-content/80 font-medium">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-tertiary" />
                    <span>Your Message</span>
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface/50 border border-surface/50 rounded-xl focus:border-tertiary/50 focus:outline-none transition-all duration-300 text-content placeholder-content/50 resize-none"
                    placeholder="Tell me about your project, questions, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:kirankumar201018@gmail.com"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-surface/60 to-surface/40 rounded-xl border border-surface/30 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-content/80 font-medium">Email Me</p>
                    <p className="text-content/60 text-sm">kirankumar201018@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-surface/60 to-surface/40 rounded-xl border border-surface/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-lg flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-content/80 font-medium">Response Time</p>
                    <p className="text-content/60 text-sm">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-content/90">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-surface/80 to-surface/60 rounded-xl border border-surface/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  <GithubIcon className="h-7 w-7 text-content/80 group-hover:text-primary transition-colors" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-surface/80 to-surface/60 rounded-xl border border-surface/30 hover:border-secondary/30 transition-all duration-300 group"
                >
                  <LinkedInIcon className="h-7 w-7 text-content/80 group-hover:text-secondary transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-tertiary/10 via-primary/5 to-secondary/10 rounded-2xl border border-tertiary/20"
            >
              <p className="text-content/80 text-center italic">
                "I love turning ideas into reality through code. Let's build something amazing together! 🚀"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
