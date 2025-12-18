'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, X, CheckCircle, Send, User, Mail, AtSign,
  Users, Zap, TrendingUp, DollarSign, Calendar, Laptop,
  Star, Target, Flame
} from 'lucide-react';
import Link from 'next/link';
import { LandingFooter } from '@/components/LandingFooter';

// Subtle animated node for background
const Node = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-edst-gold/40"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ 
      opacity: [0, 0.4, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 4,
    }}
  />
);

// Multi-step Application Modal
const ApplicationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    situation: '',
    excites: [] as string[],
    commitment: '',
    hear: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 4;

  const toggleExcites = (value: string) => {
    setForm(prev => ({
      ...prev,
      excites: prev.excites.includes(value)
        ? prev.excites.filter(e => e !== value)
        : [...prev.excites, value]
    }));
  };

  const canProceed = () => {
    if (step === 1) return form.name && form.email && form.instagram;
    if (step === 2) return form.situation;
    if (step === 3) return form.excites.length > 0;
    if (step === 4) return form.commitment;
    return true;
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setStep(5); // Success state
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0c0c0e] rounded-xl border border-white/[0.08] overflow-hidden"
      >
        {step <= totalSteps ? (
          <>
            {/* Header */}
            <div className="px-6 pt-5 pb-4 border-b border-white/[0.04]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Partner Application</h3>
                  <p className="text-xs text-white/40 mt-0.5">Step {step} of {totalSteps}</p>
                </div>
                <button onClick={onClose} className="text-white/30 hover:text-white/60 transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-edst-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="mb-5">
                      <h4 className="text-white font-medium mb-1">Let's start with the basics</h4>
                      <p className="text-xs text-white/40">Tell us a bit about yourself.</p>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">Your name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-edst-gold/40 transition"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-edst-gold/40 transition"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-edst-gold/40 transition"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">Instagram *</label>
                      <input
                        type="text"
                        value={form.instagram}
                        onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-edst-gold/40 transition"
                        placeholder="@yourhandle"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Current Situation */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-5">
                      <h4 className="text-white font-medium mb-1">Where are you at right now?</h4>
                      <p className="text-xs text-white/40">No wrong answers — we want to understand your starting point.</p>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { id: 'student', label: 'Student / In school', emoji: '📚' },
                        { id: 'employed', label: 'Working a job (9-5, part-time, etc.)', emoji: '💼' },
                        { id: 'freelance', label: 'Freelancing / Self-employed', emoji: '💻' },
                        { id: 'creator', label: 'Content creator / Influencer', emoji: '🎥' },
                        { id: 'entrepreneur', label: 'Running my own business', emoji: '🚀' },
                        { id: 'between', label: 'In-between / Looking for something', emoji: '🔍' },
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setForm({ ...form, situation: option.id })}
                          className={`w-full p-4 rounded-lg text-left text-sm transition flex items-center gap-3 ${
                            form.situation === option.id
                              ? 'bg-edst-gold/10 border border-edst-gold/40 text-white'
                              : 'bg-white/[0.02] border border-white/[0.06] text-white/70 hover:bg-white/[0.04] hover:border-white/[0.1]'
                          }`}
                        >
                          <span className="text-lg">{option.emoji}</span>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: What Excites You */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-5">
                      <h4 className="text-white font-medium mb-1">What excites you most?</h4>
                      <p className="text-xs text-white/40">Select all that apply — be honest!</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'income', label: 'Making real money', icon: '💰' },
                        { id: 'brand', label: 'Building my brand', icon: '⭐' },
                        { id: 'community', label: 'Being part of a team', icon: '👥' },
                        { id: 'freedom', label: 'Freedom & flexibility', icon: '🌴' },
                        { id: 'growth', label: 'Learning & leveling up', icon: '📈' },
                        { id: 'marketing', label: 'Digital marketing world', icon: '🎯' },
                        { id: 'clout', label: 'Growing my clout', icon: '🔥' },
                        { id: 'network', label: 'Meeting winners', icon: '🤝' },
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => toggleExcites(option.id)}
                          className={`p-3 rounded-lg text-center text-xs transition ${
                            form.excites.includes(option.id)
                              ? 'bg-edst-gold/10 border border-edst-gold/40 text-white'
                              : 'bg-white/[0.02] border border-white/[0.06] text-white/60 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span className="text-xl block mb-1">{option.icon}</span>
                          {option.label}
                        </button>
                      ))}
                    </div>
                    
                    {form.excites.length > 0 && (
                      <p className="text-xs text-edst-gold mt-4 text-center">
                        {form.excites.length} selected — great choices! 🎯
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Commitment & How They Heard */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-5">
                      <h4 className="text-white font-medium mb-1">Almost there! 🔥</h4>
                      <p className="text-xs text-white/40">Just a couple more questions.</p>
                    </div>
                    
                    <div className="mb-5">
                      <label className="block text-xs text-white/50 mb-2">How much time can you commit?</label>
                      <div className="space-y-2">
                        {[
                          { id: 'parttime', label: 'Part-time (5-15 hrs/week)', desc: 'Building on the side' },
                          { id: 'serious', label: 'Serious part-time (15-30 hrs/week)', desc: 'Ready to hustle' },
                          { id: 'fulltime', label: 'Full-time (30+ hrs/week)', desc: 'All in' },
                        ].map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setForm({ ...form, commitment: option.id })}
                            className={`w-full p-4 rounded-lg text-left transition ${
                              form.commitment === option.id
                                ? 'bg-edst-gold/10 border border-edst-gold/40'
                                : 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]'
                            }`}
                          >
                            <span className="text-sm text-white block">{option.label}</span>
                            <span className="text-xs text-white/40">{option.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-white/50 mb-2">How did you hear about us? (optional)</label>
                      <select
                        value={form.hear}
                        onChange={(e) => setForm({ ...form, hear: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white focus:outline-none focus:border-edst-gold/40 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0c0c0e]">Select one...</option>
                        <option value="instagram" className="bg-[#0c0c0e]">Instagram</option>
                        <option value="tiktok" className="bg-[#0c0c0e]">TikTok</option>
                        <option value="friend" className="bg-[#0c0c0e]">A friend / referral</option>
                        <option value="client" className="bg-[#0c0c0e]">I'm already a client</option>
                        <option value="google" className="bg-[#0c0c0e]">Google search</option>
                        <option value="other" className="bg-[#0c0c0e]">Other</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-3 text-sm text-white/50 hover:text-white transition"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed() || submitting}
                  className="flex-1 py-3 bg-edst-gold text-black font-medium text-sm rounded-lg hover:bg-edst-gold-light transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    'Submitting...'
                  ) : step === totalSteps ? (
                    <>Submit Application <Send className="w-4 h-4" /></>
                  ) : (
                    <>Continue <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-edst-gold/20 flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-edst-gold" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Application Received! 🎉</h3>
            <p className="text-sm text-white/50 mb-2">
              You're one step closer to leveling up.
            </p>
            <p className="text-xs text-white/30 mb-6">
              We review applications daily. If there's a fit, you'll hear from us within 24-48 hours.
            </p>
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-6">
              <p className="text-xs text-white/50">
                <span className="text-edst-gold">Pro tip:</span> Follow @everydaysuccessteam on Instagram to see what our partners are building.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm text-white/50 hover:text-white transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function JoinPage() {
  const [appOpen, setAppOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const nodes = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#0a0a0c] to-[#08080a]" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.03) 0%, transparent 50%)' }} />
          {mounted && nodes.map((n, i) => <Node key={i} {...n} />)}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.02]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[10px] text-edst-gold/70 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-edst-gold animate-pulse" />
              Partner Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            Become an{' '}
            <span className="text-edst-gold whitespace-nowrap">EDST Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-4 leading-relaxed"
          >
            A proven path to building income, influence, and a high-growth digital brand — inside a community of serious operators.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xs text-white/30 mb-10"
          >
            Flexible commitment · Real income · Personal brand growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button
              onClick={() => setAppOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium text-sm rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Your Application <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/20">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* What Being a Partner Means */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">What You're Actually Getting</h2>
            <p className="text-sm text-white/40 max-w-lg">
              This isn't a job. It's a system for building income, influence, and a real digital presence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Laptop, title: 'The Tools', items: ['Partner Dashboard', 'Client management', 'Team tracking', 'Commission visibility', 'Training resources'] },
              { icon: Users, title: 'The Community', items: ['Daily Zoom calls', '7 & 8-figure mentors', 'Peer support', 'Team building', 'Accountability'] },
              { icon: TrendingUp, title: 'The Opportunity', items: ['Uncapped earnings', 'Build your team', 'Grow your brand', 'Flexible schedule', 'Real experience'] },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 sm:p-5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <col.icon className="w-4 h-4 text-edst-gold" />
                  <h3 className="text-xs font-medium text-edst-gold uppercase tracking-wide">{col.title}</h3>
                </div>
                <div className="space-y-2">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-white/50">
                      <div className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Success Paths */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-edst-gold" />
              <span className="text-xs text-white/40 uppercase tracking-wide">Real Partner Outcomes</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">What Partners Have Built</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6">
            {[
              { value: '$10K–$25K', label: 'First months' },
              { value: '$50K–$100K', label: 'Within year' },
              { value: '$250K+', label: 'Top performers' },
              { value: '$1M+', label: 'Partner teams' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center"
              >
                <div className="text-base sm:text-lg md:text-xl font-semibold text-edst-gold whitespace-nowrap">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wide mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-3"
          >
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Background Diversity</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Partners came from retail, college, 9-5s, freelancing — all transitioned into digital earners with real online presence.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Brand Growth</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Many partners have built 10K–100K+ follower accounts while earning — growing clout and income simultaneously.
              </p>
            </div>
          </motion.div>

          <p className="text-[10px] text-white/25 mt-5">
            Individual results vary based on effort, skill development, and market conditions.
          </p>
        </div>
      </section>

      {/* Who Thrives Here */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Who Thrives Here</h2>
            <p className="text-sm text-white/40">
              This isn't for everyone. It's for people who want more.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: Flame, title: 'Hungry', desc: 'You want to build something real. Income, influence, independence — you\'re ready to work for it.' },
              { icon: Target, title: 'Coachable', desc: 'You listen, adapt, and improve. Ego doesn\'t block you from getting better every day.' },
              { icon: Users, title: 'Community-Driven', desc: 'You thrive around motivated people. Team wins matter to you as much as personal ones.' },
              { icon: Star, title: 'Brand-Minded', desc: 'You want a presence. Building your personal brand while earning sounds like the perfect setup.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 sm:p-5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-edst-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-edst-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">The Partner Experience</h2>
            <p className="text-sm text-white/40">
              Everything you need to build income and influence, in one ecosystem.
            </p>
          </motion.div>

          <div className="space-y-px rounded-lg overflow-hidden">
            {[
              { icon: Calendar, label: 'Daily Training', desc: 'Live Zoom calls with CM and top leaders. Real strategies, real accountability, real growth.' },
              { icon: Laptop, label: 'Partner Dashboard', desc: 'Manage clients, track commissions, build your team — everything in one powerful platform.' },
              { icon: Users, label: 'Mentorship', desc: 'Direct access to 7 and 8-figure entrepreneurs who\'ve built what you\'re building.' },
              { icon: DollarSign, label: 'Income Paths', desc: 'Multiple revenue streams: direct sales, team commissions, bonuses, and long-term residuals.' },
              { icon: Zap, label: 'Marketing Support', desc: 'Proven playbooks, content systems, and brand-building frameworks to grow your presence.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 bg-white/[0.015] hover:bg-white/[0.025] transition"
              >
                <item.icon className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-white">{item.label}</span>
                  <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">The Culture</h2>
            <p className="text-sm text-white/40 max-w-lg mx-auto">
              Not corporate. Not a job. A movement of ambitious people building something real together.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Community', 'Hustle', 'Growth', 'Ambition', 'Clout', 'Winning', 'Momentum'].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-white/60"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to level up your income and your brand?
            </h2>
            <p className="text-sm text-white/40 mb-8">
              Submit your interest. If there's a fit, we'll reach out with next steps.
            </p>
            
            <button
              onClick={() => setAppOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Your Application <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-white/20 mt-6">
              The best partners start as clients first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter variant="dark" />

      {/* Modal */}
      <AnimatePresence>
        {appOpen && <ApplicationModal isOpen={appOpen} onClose={() => setAppOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}

