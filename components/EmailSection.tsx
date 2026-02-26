'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { PaperAirplaneIcon, UserIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setSuccessMessage('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your name');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    if (!trimmedEmail || !validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    if (!trimmedMessage || trimmedMessage.length < 10) {
      setErrorMessage('Message must be at least 10 characters');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setSuccessMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        if (data.mailtoLink) {
          setTimeout(() => {
            if (window.confirm('Would you like to also send this message directly via your email client?')) {
              window.location.href = data.mailtoLink;
            }
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => { setSubmitStatus('idle'); setErrorMessage(''); setSuccessMessage(''); }, 5000);
    }
  };

  const inputFields = [
    { name: 'name', label: 'Your Name', icon: UserIcon, type: 'text', placeholder: 'Enter your full name', color: 'primary' },
    { name: 'email', label: 'Your Email', icon: EnvelopeIcon, type: 'email', placeholder: 'Enter your email address', color: 'secondary' },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary/70 tracking-wider uppercase mb-3 block"
          >
            Contact
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-content via-primary to-secondary bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-content/50 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {inputFields.map((field, i) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <label className="flex items-center space-x-2 text-content/60 font-medium text-sm">
                      <field.icon className={`w-4 h-4 text-${field.color}`} />
                      <span>{field.label}</span>
                    </label>
                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === field.name ? 'shadow-glow-sm' : ''}`}>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 focus:bg-white/8 focus:outline-none transition-all duration-300 text-content placeholder-content/30 text-sm"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label className="flex items-center space-x-2 text-content/60 font-medium text-sm">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-tertiary" />
                    <span>Your Message</span>
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'shadow-glow-sm' : ''}`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      maxLength={1000}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-tertiary/50 focus:bg-white/8 focus:outline-none transition-all duration-300 text-content placeholder-content/30 resize-none text-sm"
                      placeholder="Tell me about your project, questions, or just say hello..."
                    />
                    <div className="absolute bottom-3 right-4 text-xs text-content/30 font-mono">
                      {formData.message.length}/1000
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
                >
                  <div className="flex items-center justify-center space-x-2 relative z-10">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                  >
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    {successMessage || "Message sent successfully!"}
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                  >
                    <XCircleIcon className="w-5 h-5 flex-shrink-0" />
                    {errorMessage || "Failed to send message."}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-6 order-1 lg:order-2"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h3>

              {[
                { href: "mailto:kirankumar201018@gmail.com", icon: EnvelopeIcon, title: "Email Me", subtitle: "kirankumar201018@gmail.com", color: "primary" },
                { icon: ChatBubbleLeftRightIcon, title: "Response Time", subtitle: "Usually within 24 hours", color: "secondary" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="glass rounded-xl p-4 group cursor-pointer hover:border-primary/20 transition-all duration-300"
                  {...(item.href ? { as: 'a', href: item.href } : {})}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <div>
                      <p className="text-content/80 font-medium text-sm">{item.title}</p>
                      <p className="text-content/40 text-xs break-all">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-content/80">Connect With Me</h3>
              <div className="flex gap-3">
                {[
                  { href: socialLinks.github, icon: GithubIcon, label: "GitHub" },
                  { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 glass rounded-xl hover:shadow-glow-sm transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6 text-content/50 group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-tertiary/10 to-transparent rounded-br-full" />
              <p className="text-content/60 text-center italic text-sm leading-relaxed relative z-10">
                &ldquo;I love turning ideas into reality through code. Let&apos;s build something amazing together! 🚀&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
