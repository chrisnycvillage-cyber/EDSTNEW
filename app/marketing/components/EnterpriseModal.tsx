'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2, Sparkles } from 'lucide-react';

interface EnterpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: string;
}

export const EnterpriseModal = ({ isOpen, onClose, tier }: EnterpriseModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    instagram: '',
    budget: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New Enterprise Inquiry

Tier: ${tier}
Name: ${formData.name}
Phone: ${formData.phone}
Instagram: ${formData.instagram}
Budget: ${formData.budget}
Goals: ${formData.goals}
    `.trim();

    const mailtoLink = `mailto:team@edst.com?subject=Enterprise Inquiry - ${tier}&body=${encodeURIComponent(emailBody)}`;
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    window.open(mailtoLink, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', instagram: '', budget: '', goals: '' });
      onClose();
    }, 2000);
  };

  const budgetOptions = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container - Scrollable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl"
          >
            <div className="relative bg-[#16161a] border border-white/10 rounded-2xl shadow-2xl">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-edst-gold via-yellow-400 to-edst-gold rounded-t-2xl" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white/70 hover:text-white" />
              </button>

              {/* Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                    >
                      <CheckCircle className="w-20 h-20 text-edst-gold mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      We'll Be In Touch!
                    </h3>
                    <p className="text-white/60">
                      Our team will reach out within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="text-center mb-6 pt-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-edst-gold/10 border border-edst-gold/30 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-edst-gold" />
                        <span className="text-xs font-medium text-edst-gold">{tier}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-1">
                        Let's Build Something Big
                      </h3>
                      <p className="text-sm text-white/50">
                        Quick form — we'll text you.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Row 1: Name & Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Name *</label>
                          <input
                            type="text"
                            placeholder="John"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:border-edst-gold/50 focus:bg-white/10 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Phone *</label>
                          <input
                            type="tel"
                            placeholder="(555) 123-4567"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:border-edst-gold/50 focus:bg-white/10 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Instagram & Budget */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Instagram</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">@</span>
                            <input
                              type="text"
                              placeholder="handle"
                              value={formData.instagram}
                              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                              className="w-full pl-7 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:border-edst-gold/50 focus:bg-white/10 focus:outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Budget *</label>
                          <select
                            required
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-edst-gold/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1em' }}
                          >
                            <option value="" disabled className="bg-[#16161a]">Select</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#16161a]">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">Goals (Optional)</label>
                        <textarea
                          placeholder="What do you want to achieve?"
                          rows={2}
                          value={formData.goals}
                          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:border-edst-gold/50 focus:bg-white/10 focus:outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-edst-gold text-edst-black font-bold uppercase tracking-wider rounded-lg hover:bg-edst-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Get In Touch
                          </>
                        )}
                      </motion.button>
                    </form>

                    {/* Trust note */}
                    <p className="text-center text-[11px] text-white/30 mt-3">
                      We respond within 24 hours • No spam
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
