'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * SUBMIT STORY MODAL - The EDST Editorial
 * ───────────────────────────────────────────────────────────────────
 * Premium submission form for guest contributors
 * ═══════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, ArrowRight } from 'lucide-react';

interface SubmitStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitStoryModal = ({ isOpen, onClose }: SubmitStoryModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    pitch: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', topic: '', pitch: '' });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success State */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3">
                    Submission Received
                  </h3>
                  <p className="text-neutral-400">
                    Our editorial team will review your pitch and reach out within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="p-8 pb-6 border-b border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-amber-400 mb-2">
                      The EDST Editorial Network
                    </p>
                    <h2 className="text-2xl font-light text-white">
                      Get Featured
                    </h2>
                    <p className="text-sm text-neutral-500 mt-2">
                      Share your story with our network of entrepreneurs, creators, and music industry professionals.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 block">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-amber-400/50 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-amber-400/50 focus:outline-none transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 block">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-amber-400/50 focus:outline-none transition-colors"
                        placeholder="Your company or personal brand"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 block">
                        Topic Category *
                      </label>
                      <select
                        name="topic"
                        required
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-neutral-900">Select a topic</option>
                        <optgroup label="Music & Entertainment" className="bg-neutral-900">
                          <option value="music-artist-feature" className="bg-neutral-900">Artist Feature / Interview</option>
                          <option value="music-industry" className="bg-neutral-900">Music Industry Insights</option>
                          <option value="hip-hop-culture" className="bg-neutral-900">Hip-Hop & Urban Culture</option>
                          <option value="music-marketing" className="bg-neutral-900">Music Marketing & Promotion</option>
                          <option value="entertainment-business" className="bg-neutral-900">Entertainment Business</option>
                        </optgroup>
                        <optgroup label="Business & Entrepreneurship" className="bg-neutral-900">
                          <option value="entrepreneur-feature" className="bg-neutral-900">Entrepreneur Feature / Story</option>
                          <option value="startup-insights" className="bg-neutral-900">Startup & Business Insights</option>
                          <option value="business-growth" className="bg-neutral-900">Business Growth Strategy</option>
                          <option value="brand-story" className="bg-neutral-900">Brand Story / Case Study</option>
                        </optgroup>
                        <optgroup label="Marketing & Social Media" className="bg-neutral-900">
                          <option value="social-media" className="bg-neutral-900">Social Media Strategy</option>
                          <option value="creator-economy" className="bg-neutral-900">Creator Economy</option>
                          <option value="personal-branding" className="bg-neutral-900">Personal Branding</option>
                          <option value="digital-marketing" className="bg-neutral-900">Digital Marketing</option>
                          <option value="influencer-marketing" className="bg-neutral-900">Influencer Marketing</option>
                        </optgroup>
                        <optgroup label="Industry Verticals" className="bg-neutral-900">
                          <option value="fitness-wellness" className="bg-neutral-900">Fitness & Wellness</option>
                          <option value="fashion-lifestyle" className="bg-neutral-900">Fashion & Lifestyle</option>
                          <option value="tech-innovation" className="bg-neutral-900">Tech & Innovation</option>
                          <option value="real-estate" className="bg-neutral-900">Real Estate</option>
                          <option value="other-industry" className="bg-neutral-900">Other Industry</option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 block">
                        Your Pitch *
                      </label>
                      <textarea
                        name="pitch"
                        required
                        value={formData.pitch}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:border-amber-400/50 focus:outline-none transition-colors resize-none"
                        placeholder="Briefly describe your article idea and what unique perspective you bring..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-400 text-black font-medium hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit for Review
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-neutral-600 text-center">
                      We review all submissions within 48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SubmitStoryModal;

