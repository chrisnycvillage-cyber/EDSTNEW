'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Crown, Zap, ArrowRight, Target, X, Music, Briefcase, Rocket, TrendingUp, CheckCircle, BarChart3, Phone, Mail, User, MessageSquare } from 'lucide-react';

// Contact Form Popup
const ContactFormPopup = ({ isOpen, onClose, context }: { isOpen: boolean; onClose: () => void; context: string }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', about: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-edst-charcoal rounded-2xl border border-edst-gold/30 overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 border-b border-edst-slate/20 bg-gradient-to-r from-edst-gold/10 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-edst-white">Let's Connect</h3>
              <p className="text-xs text-edst-silver">{context}</p>
            </div>
            <button onClick={onClose} className="p-2 text-edst-silver hover:text-edst-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-green-400" />
            </motion.div>
            <h4 className="text-xl font-bold text-edst-white mb-2">We'll Be In Touch!</h4>
            <p className="text-sm text-edst-silver mb-6">
              Our team will reach out within 24 hours to discuss your campaign.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-edst-gold text-edst-black font-bold rounded-lg"
            >
              Got It
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs text-edst-silver mb-1.5">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/50" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/40 focus:border-edst-gold/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-edst-silver mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/50" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/40 focus:border-edst-gold/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-edst-silver mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/50" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full pl-10 pr-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/40 focus:border-edst-gold/50 focus:outline-none"
                />
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-xs text-edst-silver mb-1.5">Tell Us About You</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-edst-silver/50" />
                <textarea
                  required
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  placeholder="What do you do? What are your goals?"
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/40 focus:border-edst-gold/50 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-edst-gold text-edst-black font-bold rounded-lg hover:bg-edst-gold-light transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-edst-black/30 border-t-edst-black rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] text-edst-silver/60 text-center">
              We'll text or call you within 24 hours to discuss your campaign.
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

// Musician Campaign Popup
const MusicianPopup = ({ isOpen, onClose, onGetStarted }: { isOpen: boolean; onClose: () => void; onGetStarted: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 md:p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-edst-charcoal rounded-2xl border border-edst-slate/30 overflow-hidden mt-12 md:mt-0 mb-4 md:my-8"
      >
        {/* Close button - Fixed position on mobile for easy access */}
        <button 
          onClick={onClose} 
          className="fixed md:absolute top-4 right-4 z-[60] p-2.5 bg-edst-charcoal md:bg-transparent border border-edst-slate/30 md:border-0 rounded-full text-edst-silver hover:text-edst-white hover:bg-edst-slate/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-edst-slate/20 flex items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-edst-gold/20">
              <Music className="w-5 md:w-6 h-5 md:h-6 text-edst-gold" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-edst-white">Musician Campaigns</h3>
              <p className="text-xs md:text-sm text-edst-silver">Example campaign breakdowns</p>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 grid md:grid-cols-2 gap-4 md:gap-6 max-h-[60vh] md:max-h-none overflow-y-auto">
          {/* $10K Option */}
          <div className="p-4 md:p-6 rounded-xl bg-edst-black/50 border border-edst-slate/20">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-bold bg-edst-slate/30 text-edst-silver rounded-full">
                OPTION 1
              </span>
              <span className="text-2xl font-bold text-edst-gold">$10,000</span>
            </div>

            {/* Hero Metric */}
            <div className="text-center py-6 mb-4 rounded-xl bg-gradient-to-br from-edst-gold/10 to-transparent border border-edst-gold/20">
              <div className="text-4xl font-bold text-edst-gold mb-1">10M+</div>
              <div className="text-sm text-edst-silver">Views</div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2.5 mb-4">
              {[
                'Paid Ads Management (Meta + Platforms)',
                'Music ads to grow monthly listeners',
                'Viral distribution using your sound',
                'Sound seeding to help trend',
                'Instagram growth & engagement',
                'Select PR placements',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-edst-light">
                  <CheckCircle className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-xs text-edst-silver/70 italic">
              Based on real campaigns: 5,000+ monthly listener increase, strong distribution, and clear social growth.
            </p>
          </div>

          {/* $25K Option */}
          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-edst-gold/5 to-edst-black/50 border border-edst-gold/30">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-bold bg-edst-gold text-edst-black rounded-full">
                RECOMMENDED
              </span>
              <span className="text-2xl font-bold text-edst-gold">$25,000</span>
            </div>

            {/* Hero Metric */}
            <div className="text-center py-6 mb-4 rounded-xl bg-gradient-to-br from-edst-gold/20 to-transparent border border-edst-gold/30">
              <div className="text-4xl font-bold text-edst-gold mb-1">25M+</div>
              <div className="text-sm text-edst-silver">Views</div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2.5 mb-4">
              {[
                'Everything from $10K tier',
                'Stronger paid ads + scaling',
                'Larger viral distribution',
                'Aggressive sound seeding',
                'More PR + broader coverage',
                'Multi-platform amplification',
                'More volume, more reach',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-edst-light">
                  <CheckCircle className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-xs text-edst-silver/70 italic">
              Based on previous 25K campaigns: 20M+ views achieved, 10,000+ monthly listener increase, consistent fanbase growth.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-edst-slate/20 text-center">
          <p className="text-xs md:text-sm text-edst-silver mb-3 md:mb-4">Ready to blow up your music?</p>
          <a 
            href="/musician-campaigns"
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-edst-gold text-edst-black font-bold text-sm rounded-lg hover:bg-edst-gold-light transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Business Campaign Popup
const BusinessPopup = ({ isOpen, onClose, onGetStarted }: { isOpen: boolean; onClose: () => void; onGetStarted: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-edst-charcoal rounded-2xl border border-edst-slate/30 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 border-b border-edst-slate/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-edst-gold/20">
              <Briefcase className="w-6 h-6 text-edst-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-edst-white">Business Campaigns</h3>
              <p className="text-sm text-edst-silver">Example campaign breakdown</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-edst-silver hover:text-edst-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Budget & Hero Metric */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-bold text-edst-gold">$25,000</span>
            <span className="px-3 py-1 text-xs font-bold bg-edst-gold text-edst-black rounded-full">
              CUSTOM CAMPAIGN
            </span>
          </div>

          {/* Hero Metric */}
          <div className="text-center py-8 mb-6 rounded-xl bg-gradient-to-br from-edst-gold/15 to-transparent border border-edst-gold/25">
            <div className="text-5xl font-bold text-edst-gold mb-1">25M+</div>
            <div className="text-sm text-edst-silver">Views</div>
          </div>

          {/* Breakdown */}
          <div className="space-y-3 mb-6">
            {[
              'Viral clipping + seeding',
              'Multi-platform (IG, TikTok, YouTube, X)',
              'Paid ads management',
              'Custom narrative creation',
              'PR placements (business + industry)',
              'Strategic distribution across networks',
              'Consistent reach + high-impact exposure',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-edst-light">
                <CheckCircle className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Visual Bar */}
          <div className="p-4 rounded-xl bg-edst-black/50 border border-edst-slate/20 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-edst-silver">Campaign Reach Potential</span>
              <span className="text-xs text-edst-gold">25M+ views</span>
            </div>
            <div className="h-2 bg-edst-slate/30 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-edst-gold to-edst-gold-light rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-edst-slate/20 text-center">
          <a 
            href="/business-campaigns"
            className="inline-flex items-center gap-2 px-6 py-3 bg-edst-gold text-edst-black font-bold rounded-lg hover:bg-edst-gold-light transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Viral Ambush Popup - Focused on $100K
const ViralAmbushPopup = ({ isOpen, onClose, onGetStarted }: { isOpen: boolean; onClose: () => void; onGetStarted: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-edst-charcoal rounded-2xl border border-edst-gold/40 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 border-b border-edst-slate/20 bg-gradient-to-r from-edst-gold/15 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-edst-gold/20 border border-edst-gold/30">
                <Zap className="w-6 h-6 text-edst-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-edst-white">Viral Ambush</h3>
                <p className="text-sm text-edst-silver">Full-Scale Internet Takeover</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-edst-silver hover:text-edst-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Budget */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-4xl font-bold text-edst-gold">$100K+</span>
              <p className="text-xs text-edst-silver mt-1">Custom Campaigns</p>
            </div>
            <span className="px-4 py-1.5 text-xs font-bold bg-edst-gold text-edst-black rounded-full uppercase tracking-wider">
              Gold Standard
            </span>
          </div>

          {/* Message */}
          <p className="text-sm text-edst-silver mb-6 leading-relaxed">
            This is where Viral Ambush becomes fully unlocked. At $100K, we activate <span className="text-edst-white font-medium">everything</span>: all platforms, all networks, all assets. This is the gold standard — where we deliver the true "internet takeover" experience.
          </p>

          {/* Hero Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center py-6 rounded-xl bg-gradient-to-br from-edst-gold/15 to-transparent border border-edst-gold/25">
              <div className="text-4xl font-bold text-edst-gold mb-1">50M+</div>
              <div className="text-xs text-edst-silver">Minimum Views</div>
            </div>
            <div className="text-center py-6 rounded-xl bg-gradient-to-br from-edst-gold/20 to-transparent border border-edst-gold/30">
              <div className="text-4xl font-bold text-edst-gold mb-1">100M+</div>
              <div className="text-xs text-edst-silver">View Potential</div>
            </div>
          </div>

          {/* Full Breakdown */}
          <div className="p-5 rounded-xl bg-edst-black/50 border border-edst-slate/20 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-edst-gold" />
              <span className="text-sm font-semibold text-edst-white">Full Ecosystem Activation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'All-platform viral distribution',
                'PR blast + media narrative shaping',
                'Heavy page network seeding',
                'Reddit + IG + TikTok + YouTube + X',
                'Discord + community amplification',
                'High-level strategy & execution',
                'Dedicated growth team',
                'Massive coordinated push',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-edst-light">
                  <CheckCircle className="w-3.5 h-3.5 text-edst-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scale Visual */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-edst-gold/10 to-transparent border border-edst-gold/20">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-edst-gold" />
              <span className="text-xs text-edst-silver uppercase tracking-wider">Full Scale Activation</span>
            </div>
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 8 }}
                  animate={{ height: 12 + (i * 5) }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-edst-gold to-edst-gold-light rounded-t"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-edst-slate/20 text-center">
          <p className="text-xs text-edst-silver/70 mb-4">Ready for a full-scale internet takeover?</p>
          <button 
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-8 py-3 bg-edst-gold text-edst-black font-bold rounded-lg hover:bg-edst-gold-light transition-all"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const EnterpriseTiers = () => {
  const [musicianOpen, setMusicianOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [ambushOpen, setAmbushOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactContext, setContactContext] = useState('');

  const openContact = (context: string) => {
    setMusicianOpen(false);
    setBusinessOpen(false);
    setAmbushOpen(false);
    setContactContext(context);
    setContactOpen(true);
  };

  return (
    <>
      <section id="enterprise" className="relative py-16 md:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/10 to-edst-black" />
        
        {/* Ambient glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="section-container relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-edst-white mb-4">
              Ready to Go <span className="text-gradient-gold">Viral?</span>
            </h2>
            <p className="text-lg text-edst-silver max-w-2xl mx-auto">
              Custom campaigns for those ready to scale massively.
            </p>
          </motion.div>

          {/* New Layout: Left Stack (Musicians + Business) | Right (Viral Ambush) */}
          <div className="grid lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-12">
            
            {/* Left Column - Stacked Cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* Musicians Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative p-5 rounded-2xl border backdrop-blur-sm overflow-hidden group bg-gradient-to-br from-edst-charcoal/50 to-edst-black/50 border-edst-slate/30"
              >
                {/* Animated border trace */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute w-16 h-16"
                    style={{
                      background: 'radial-gradient(circle, rgba(250,204,83,0.6) 0%, transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                    animate={{
                      top: ['0%', '0%', '100%', '100%', '0%'],
                      left: ['0%', '100%', '100%', '0%', '0%'],
                      x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                      y: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[rgba(18,18,22,0.97)] to-[rgba(10,10,12,0.98)]" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-edst-gold/15 border border-edst-gold/20">
                      <Music className="w-5 h-5 text-edst-gold" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-edst-gold">$10K - $25K</div>
                      <div className="text-[10px] text-edst-silver uppercase tracking-wider">Custom Campaigns</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-edst-white mb-2">Musicians</h3>
                  <p className="text-xs text-edst-silver mb-3 line-clamp-2">
                    Blow up your music — streams, listeners, social growth, viral distribution.
                  </p>

                  <ul className="space-y-1 mb-4">
                    {['Paid Ads', 'Sound Seeding', 'Viral Distribution', 'PR Placements'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-edst-light">
                        <Target className="w-3 h-3 flex-shrink-0 text-edst-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => setMusicianOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider bg-edst-charcoal border border-edst-gold/30 text-edst-gold hover:bg-edst-gold hover:text-edst-black transition-all"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Businesses Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-5 rounded-2xl border backdrop-blur-sm overflow-hidden group bg-gradient-to-br from-edst-charcoal/50 to-edst-black/50 border-edst-slate/30"
              >
                {/* Animated border trace */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute w-16 h-16"
                    style={{
                      background: 'radial-gradient(circle, rgba(250,204,83,0.6) 0%, transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                    animate={{
                      top: ['0%', '0%', '100%', '100%', '0%'],
                      left: ['0%', '100%', '100%', '0%', '0%'],
                      x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                      y: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                  />
                </div>
                
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[rgba(18,18,22,0.97)] to-[rgba(10,10,12,0.98)]" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-edst-gold/15 border border-edst-gold/20">
                      <Briefcase className="w-5 h-5 text-edst-gold" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-edst-gold">$25K+</div>
                      <div className="text-[10px] text-edst-silver uppercase tracking-wider">Custom Campaigns</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-edst-white mb-2">Businesses</h3>
                  <p className="text-xs text-edst-silver mb-3 line-clamp-2">
                    Custom campaigns for brands, coaches, and entrepreneurs.
                  </p>

                  <ul className="space-y-1 mb-4">
                    {['Viral Clipping', 'Multi-Platform', 'Paid Ads', 'PR Coverage'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-edst-light">
                        <Target className="w-3 h-3 flex-shrink-0 text-edst-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => setBusinessOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider bg-edst-charcoal border border-edst-gold/30 text-edst-gold hover:bg-edst-gold hover:text-edst-black transition-all"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Viral Ambush (Larger) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="lg:col-span-3 relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm overflow-hidden group bg-gradient-to-br from-edst-gold/10 to-edst-charcoal/50 border-edst-gold/40"
            >
              {/* Animated border trace */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute w-28 h-28"
                  style={{
                    background: 'radial-gradient(circle, rgba(250,204,83,0.8) 0%, transparent 70%)',
                    filter: 'blur(12px)',
                  }}
                  animate={{
                    top: ['0%', '0%', '100%', '100%', '0%'],
                    left: ['0%', '100%', '100%', '0%', '0%'],
                    x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                    y: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[rgba(20,18,12,0.97)] to-[rgba(15,15,18,0.98)]" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-edst-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Badge */}
              <motion.div 
                className="absolute top-4 right-4 z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="px-4 py-1.5 text-xs font-bold bg-edst-gold text-edst-black rounded-full uppercase tracking-wider">
                  Most Powerful
                </span>
              </motion.div>

              <div className="relative h-full flex flex-col">
                {/* Icon & Range */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-edst-gold/20 border border-edst-gold/30">
                    <Zap className="w-7 h-7 text-edst-gold" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-edst-gold">
                      $100K+
                    </div>
                    <div className="text-xs text-edst-silver uppercase tracking-wider">Custom Campaigns</div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-edst-white mb-3">
                  Viral Ambush
                </h3>
                <p className="text-sm text-edst-silver mb-5 max-w-md">
                  Full-scale internet takeover. We make things happen — 50M+ views, sometimes 100M+. All platforms, all networks, maximum impact.
                </p>

                {/* Hero Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-edst-black/30 border border-edst-gold/20 text-center">
                    <div className="text-2xl font-bold text-edst-gold">50M+</div>
                    <div className="text-[10px] text-edst-silver uppercase">Minimum Views</div>
                  </div>
                  <div className="p-4 rounded-xl bg-edst-black/30 border border-edst-gold/20 text-center">
                    <div className="text-2xl font-bold text-edst-gold">100M+</div>
                    <div className="text-[10px] text-edst-silver uppercase">View Potential</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {[
                    'Full Creative Team',
                    'All Platforms Activated',
                    'Reddit, IG, TikTok, X, YouTube',
                    'Page Network Takeover',
                    'PR & Media Narrative',
                    'Community Amplification',
                  ].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-edst-light"
                    >
                      <Target className="w-3.5 h-3.5 flex-shrink-0 text-edst-gold" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="/viral"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider bg-edst-gold text-edst-black hover:bg-edst-gold-light transition-all"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Popups */}
      <AnimatePresence>
        {musicianOpen && (
          <MusicianPopup 
            isOpen={musicianOpen} 
            onClose={() => setMusicianOpen(false)} 
            onGetStarted={() => openContact('Musician Campaign Inquiry')}
          />
        )}
        {businessOpen && (
          <BusinessPopup 
            isOpen={businessOpen} 
            onClose={() => setBusinessOpen(false)} 
            onGetStarted={() => openContact('Business Campaign Inquiry')}
          />
        )}
        {ambushOpen && (
          <ViralAmbushPopup 
            isOpen={ambushOpen} 
            onClose={() => setAmbushOpen(false)} 
            onGetStarted={() => openContact('Viral Ambush Inquiry')}
          />
        )}
        {contactOpen && (
          <ContactFormPopup
            isOpen={contactOpen}
            onClose={() => setContactOpen(false)}
            context={contactContext}
          />
        )}
      </AnimatePresence>
    </>
  );
};
