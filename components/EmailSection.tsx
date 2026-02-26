'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message Sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch {
      setStatus('Network Error.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 w-full px-6 md:px-12 bg-background border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32"
      >
        <div className="flex flex-col">
          <span className="text-xs font-mono tracking-widest uppercase text-content-muted block mb-4">
            Let's Collaborate
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter text-white mb-8">
            CONTACT.
          </h2>
          <p className="text-xl sm:text-2xl font-sans text-content-muted leading-relaxed font-light mb-12">
            I am always open to new opportunities and interesting projects. Reach out and let's build something extraordinary.
          </p>

          <div className="flex flex-col gap-6 mt-auto">
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-widest text-content-muted mb-1">Email</span>
              <a href="mailto:kirankumar201018@gmail.com" className="text-2xl font-heading uppercase text-white hover:text-white/50 transition-colors">kirankumar201018@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-widest text-content-muted mb-1">Location</span>
              <span className="text-xl font-heading uppercase text-white select-all">Missouri, USA</span>
            </div>
          </div>
        </div>

        <div className="w-full border border-white/10 p-8 sm:p-12 relative overflow-hidden group hover:border-white transition-colors duration-[1s]">
          {/* The white hover fill from left */}
          <div className="absolute top-0 left-0 w-full h-full bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1s] ease-[0.16,1,0.3,1] pointer-events-none" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 relative z-10 w-full h-full">
            <div className="flex flex-col relative w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="NAME"
                className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white text-xl sm:text-2xl font-heading uppercase placeholder-white/20 focus:outline-none focus:border-white focus:placeholder-white/5 transition-all group-hover:text-black group-hover:border-black/20 group-hover:placeholder-black/30 group-hover:focus:border-black peer"
              />
            </div>

            <div className="flex flex-col relative w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="EMAIL"
                className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white text-xl sm:text-2xl font-heading uppercase placeholder-white/20 focus:outline-none focus:border-white focus:placeholder-white/5 transition-all group-hover:text-black group-hover:border-black/20 group-hover:placeholder-black/30 group-hover:focus:border-black peer"
              />
            </div>

            <div className="flex flex-col justify-end relative h-full w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="MESSAGE"
                className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white text-xl sm:text-2xl font-heading uppercase placeholder-white/20 focus:outline-none focus:border-white focus:placeholder-white/5 transition-all resize-none group-hover:text-black group-hover:border-black/20 group-hover:placeholder-black/30 group-hover:focus:border-black peer"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-between items-center text-xl font-heading font-bold uppercase tracking-widest text-white group-hover:text-black mt-8 hover:opacity-50 transition-opacity"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <span>↗</span>
            </button>
            {status && <span className="absolute -bottom-8 left-0 text-xs font-mono tracking-widest uppercase text-white group-hover:text-black">{status}</span>}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
