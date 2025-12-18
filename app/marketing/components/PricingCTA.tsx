'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, MessageSquare, X, Send, CheckCircle } from 'lucide-react';

export const PricingCTA = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open mailto as fallback
    const mailtoLink = `mailto:team@edst.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setShowContactModal(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  return (
    <>
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-edst-black" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-edst-white mb-6">
              Ready to <span className="text-gradient-gold">Level Up?</span>
            </h2>

            <p className="text-lg text-edst-silver mb-10 max-w-xl mx-auto">
              Pick a plan, get instant access to our marketplace and community, 
              and start seeing results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.button
                onClick={scrollToPlans}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-edst-gold text-edst-black font-semibold text-sm uppercase tracking-widest rounded-lg transition-all hover:bg-edst-gold-light hover:shadow-glow-gold"
              >
                <Zap className="w-5 h-5" />
                Choose Your Plan
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => setShowContactModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-4 border border-edst-slate text-edst-white font-semibold text-sm uppercase tracking-widest rounded-lg transition-all hover:border-edst-gold/50 hover:text-edst-gold"
              >
                <MessageSquare className="w-4 h-4" />
                Talk to Us
              </motion.button>
            </div>

            {/* Trust */}
            <p className="text-sm text-edst-silver">
              Join 30K+ growing with EDST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isSubmitting && setShowContactModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-edst-charcoal rounded-2xl border border-edst-slate/30 overflow-hidden"
            >
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-edst-online/20 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-edst-online" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-edst-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-edst-silver">We'll get back to you ASAP.</p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-edst-white">Talk to Us</h3>
                      <p className="text-sm text-edst-silver">We'll get back to you ASAP</p>
                    </div>
                    <button
                      onClick={() => setShowContactModal(false)}
                      className="p-2 text-edst-silver hover:text-edst-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-edst-silver block mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-xl text-edst-white placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-edst-silver block mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-xl text-edst-white placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-edst-silver block mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-xl text-edst-white placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-edst-silver block mb-2">Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help?"
                        rows={4}
                        className="w-full px-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-xl text-edst-white placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-edst-gold text-edst-black font-bold rounded-xl disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-edst-black/30 border-t-edst-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-edst-silver/60 pt-2">
                      Or email us directly at <a href="mailto:team@edst.com" className="text-edst-gold hover:underline">team@edst.com</a>
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

