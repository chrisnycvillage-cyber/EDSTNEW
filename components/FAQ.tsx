'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, X, Send } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly will I see results?',
    answer: 'Most clients see initial growth within the first 7-14 days. Full campaign results typically materialize within 30-60 days depending on your package and goals.',
  },
  {
    question: 'What platforms do you work with?',
    answer: 'Everywhere. We blow up brands across every major platform — social media, streaming, press, paid ads, you name it. If it needs to be seen, we get it out there. We create viral moments, build audiences, and make things happen 24/7.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all our subscriptions are month-to-month with no long-term contracts. You can cancel or change your plan at any time.',
  },
  {
    question: 'Who do you work with?',
    answer: 'We\'re trusted by some of the biggest celebrities, public figures, and companies in the world for viral marketing campaigns. From independent creators to Fortune 500 brands — if you want massive reach, huge views, and to stay viral, we\'re the team behind the scenes making it happen.',
  },
  {
    question: 'Do you guarantee results?',
    answer: 'We guarantee the work. Every service, every deliverable, every campaign we promise — we deliver. While no one can honestly guarantee specific viral numbers, our track record with 30K+ clients speaks for itself.',
  },
  {
    question: 'How is EDST different from other agencies?',
    answer: 'We\'re not just an agency — we\'re an ecosystem. You get access to marketing, content, PR, ads, community, and strategy all under one roof. Most agencies specialize in one thing; we handle everything.',
  },
];

const FAQItem = ({ 
  faq, 
  isOpen, 
  onToggle, 
  index 
}: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-edst-slate/20 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-edst-white group-hover:text-edst-gold transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-edst-gold" />
          ) : (
            <Plus className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-edst-silver leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowContactModal(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', question: '' });
    }, 3000);
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-dark" />
      <div className="absolute inset-0 gradient-radial opacity-20" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-edst-white mb-4">
            Questions? <span className="text-gradient-gold">Answered.</span>
          </h2>
          <p className="text-lg text-edst-silver max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-edst-charcoal/30 rounded-2xl border border-edst-slate/20 p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="/marketing"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-edst-gold text-edst-black rounded-full hover:bg-edst-gold-light transition-all"
          >
            See Plans
          </a>
          <button 
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-edst-silver border border-edst-slate/30 rounded-full hover:text-edst-gold hover:border-edst-gold/40 transition-all"
          >
            Have Questions?
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-edst-charcoal rounded-2xl border border-edst-slate/30 overflow-hidden"
            >
              {submitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Send className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-edst-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-edst-silver">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-edst-white">Ask Us Anything</h3>
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
                      <label className="text-xs text-edst-silver block mb-2">Your Question</label>
                      <textarea
                        required
                        value={formData.question}
                        onChange={(e) => setFormData({...formData, question: e.target.value})}
                        placeholder="What would you like to know?"
                        rows={4}
                        className="w-full px-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-xl text-edst-white placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-edst-gold text-edst-black font-bold rounded-xl hover:bg-edst-gold-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
                  </form>

                  <p className="text-xs text-edst-silver/60 text-center mt-4">
                    Or email us directly at <a href="mailto:support@edst.com" className="text-edst-gold hover:underline">support@edst.com</a>
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
