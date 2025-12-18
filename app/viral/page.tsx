'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, X, CheckCircle, Activity,
  Send, User, Mail, Building, DollarSign, Phone
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

// Lead Capture Modal
const LeadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '$100K - $250K' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-[#0f0f11] rounded-lg border border-white/[0.06] overflow-hidden"
      >
        {!submitted ? (
          <>
            <div className="px-5 py-4 border-b border-white/[0.04]">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">Start a Conversation</h3>
                <button onClick={onClose} className="text-white/40 hover:text-white/60">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-3">
              {[
                { key: 'name', icon: User, placeholder: 'Your name', type: 'text' },
                { key: 'email', icon: Mail, placeholder: 'Email', type: 'email' },
                { key: 'phone', icon: Phone, placeholder: 'Phone', type: 'tel' },
                { key: 'company', icon: Building, placeholder: 'Company', type: 'text' },
              ].map(({ key, icon: Icon, placeholder, type }) => (
                <div key={key} className="relative">
                  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded text-sm text-white placeholder-white/30 focus:outline-none focus:border-edst-gold/30"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded text-sm text-white focus:outline-none focus:border-edst-gold/30 appearance-none cursor-pointer"
                >
                  <option value="$100K - $250K">$100K - $250K</option>
                  <option value="$250K - $500K">$250K - $500K</option>
                  <option value="$500K+">$500K+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 bg-edst-gold text-black font-medium text-sm rounded hover:bg-edst-gold-light transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? 'Sending...' : <><Send className="w-3.5 h-3.5" /> Submit</>}
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-edst-gold/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-edst-gold" />
            </div>
            <p className="text-sm text-white mb-1">We'll be in touch within 24 hours.</p>
            <button onClick={onClose} className="text-xs text-white/40 hover:text-white/60">Close</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function ViralAmbushPage() {
  const [leadOpen, setLeadOpen] = useState(false);
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
              High-Ticket Campaigns
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            Viral <span className="text-edst-gold">Ambush</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-4 leading-relaxed"
          >
            Coordinated multi-platform activation engineered to dominate attention and drive narrative at scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xs text-white/30 mb-10"
          >
            Starting at $100,000 · 30-day deployment · Full ecosystem activation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button
              onClick={() => setLeadOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium text-sm rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Conversation <ArrowRight className="w-4 h-4" />
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

      {/* The System */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">The System</h2>
            <p className="text-sm text-white/40 max-w-lg">
              A synchronized activation across every major platform — engineered to create momentum that compounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Distribution', items: ['Instagram network', 'TikTok seeding', 'YouTube Shorts', 'X amplification', 'Reddit deployment'] },
              { title: 'Coordination', items: ['Timed surges', 'Trend hijacking', 'Multi-platform sync', 'Narrative control', 'Real-time pivots'] },
              { title: 'Output', items: ['250+ assets', 'Custom content', 'PR placements', 'Creator seeding', 'Community activation'] },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <h3 className="text-xs font-medium text-edst-gold uppercase tracking-wide mb-4">{col.title}</h3>
                <div className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-white/50">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why $100K */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Why $100K</h2>
            <p className="text-sm text-white/40">
              This isn't a line item. It's the threshold where coordinated scale becomes possible.
            </p>
          </motion.div>

          <div className="space-y-px rounded-lg overflow-hidden">
            {[
              { label: 'Coordination', desc: 'Multiple teams, platforms, creators, and content engines operating in sync requires infrastructure.' },
              { label: 'Volume', desc: 'Real momentum requires enough touchpoints to break through noise. Below this, you are spraying — not activating.' },
              { label: 'Speed', desc: 'Everything happens in 30 days. Compressed timelines demand dedicated resources and aggressive execution.' },
              { label: 'Custom', desc: 'No templates. Every campaign is engineered from scratch around your brand, narrative, and objectives.' },
              { label: 'Results', desc: 'This is the floor where we consistently produce 50M+ reach and measurable narrative impact.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 p-5 bg-white/[0.015] hover:bg-white/[0.025] transition"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-xs font-medium text-edst-gold">{item.label}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-edst-gold" />
              <span className="text-xs text-white/40 uppercase tracking-wide">$100K Campaign Example</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">84M+ Total Reach</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { value: '39.6M', label: 'Clip Distribution' },
              { value: '18M', label: 'Paid Amplification' },
              { value: '15M', label: 'Reddit Reach' },
              { value: '11.4M', label: 'Organic Seeding' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center"
              >
                <div className="text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wide mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Campaign Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-3 mb-5"
          >
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Execution</div>
              <p className="text-sm text-white/50 leading-relaxed">
                250+ assets distributed across IG, TikTok, YouTube, X, and Reddit. Coordinated 30-day deployment with real-time optimization.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Outcome</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Sustained narrative presence. Measurable brand lift. Client re-engaged immediately and became a long-term partner.
              </p>
            </div>
          </motion.div>

          <p className="text-[10px] text-white/25">
            One example of a successful $100K activation. Results vary by content, market, and timing.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">How It Works</h2>
            <p className="text-sm text-white/40">
              Four phases, 30 days, one objective: dominance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { phase: '01', title: 'Strategy', desc: 'Deep-dive on your brand, market position, and objectives. We engineer the narrative and map the activation sequence.' },
              { phase: '02', title: 'Production', desc: 'Custom content creation — clips, memes, articles, threads. Everything tailored for platform-native performance.' },
              { phase: '03', title: 'Deployment', desc: 'Coordinated release across all channels. Timed surges, trend-jacking, influencer seeding — all synchronized.' },
              { phase: '04', title: 'Optimization', desc: 'Real-time monitoring. Double down on winners, pivot fast, maximize momentum.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-medium text-edst-gold/60">{item.phase}</span>
                  <div>
                    <h3 className="text-sm font-medium text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to deploy?
            </h2>
            <p className="text-sm text-white/40 mb-8">
              We work with a limited number of high-conviction clients each quarter. If you're ready to move, let's talk.
            </p>
            
            <button
              onClick={() => setLeadOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Conversation <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-white/20 mt-6">
              $100K minimum · Custom campaigns only
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter variant="dark" />

      {/* Modal */}
      <AnimatePresence>
        {leadOpen && <LeadModal isOpen={leadOpen} onClose={() => setLeadOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
