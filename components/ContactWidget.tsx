'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    const mailtoLink = `mailto:team@edst.com?subject=Quick Question from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}%0APhone: ${formData.phone}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-edst-charcoal border border-edst-slate/30 shadow-lg hover:border-edst-gold/40 transition-colors group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification dot */}
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 w-3 h-3 bg-edst-gold rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-80 bg-edst-charcoal rounded-2xl border border-edst-slate/30 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-edst-slate/20 border-b border-edst-slate/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-edst-gold/20">
                  <Sparkles className="w-4 h-4 text-edst-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-edst-white text-sm">Quick Question?</h3>
                  <p className="text-xs text-edst-silver">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-full bg-edst-online/20 flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-edst-online" />
                  </motion.div>
                  <p className="text-edst-white font-medium">Message sent!</p>
                  <p className="text-xs text-edst-silver">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-edst-slate/30 border border-edst-slate/20 text-edst-white text-sm placeholder:text-edst-silver/50 focus:outline-none focus:border-edst-gold/40"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-edst-slate/30 border border-edst-slate/20 text-edst-white text-sm placeholder:text-edst-silver/50 focus:outline-none focus:border-edst-gold/40"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-edst-slate/30 border border-edst-slate/20 text-edst-white text-sm placeholder:text-edst-silver/50 focus:outline-none focus:border-edst-gold/40"
                  />
                  <textarea
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-edst-slate/30 border border-edst-slate/20 text-edst-white text-sm placeholder:text-edst-silver/50 focus:outline-none focus:border-edst-gold/40 resize-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-edst-gold text-edst-black font-semibold text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

