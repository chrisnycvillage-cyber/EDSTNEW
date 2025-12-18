'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, X, CheckCircle, Activity,
  Send, User, Mail, Building, DollarSign, Phone, Briefcase
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '$25K - $50K' });
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
                <h3 className="text-sm font-medium text-white">Start Your Campaign</h3>
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
                { key: 'company', icon: Briefcase, placeholder: 'Company / Brand', type: 'text' },
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
                  <option value="$25K - $50K">$25K - $50K</option>
                  <option value="$50K - $75K">$50K - $75K</option>
                  <option value="$75K - $100K">$75K - $100K</option>
                  <option value="$100K+">$100K+</option>
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
            <p className="text-sm text-white mb-1">We will be in touch within 24 hours.</p>
            <button onClick={onClose} className="text-xs text-white/40 hover:text-white/60">Close</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function BusinessCampaignsPage() {
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
              Business Campaigns
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            Scale Your <span className="text-edst-gold">Brand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-4 leading-relaxed"
          >
            Custom campaigns for brands, coaches, and entrepreneurs ready to dominate attention across every platform.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xs text-white/30 mb-10"
          >
            $25K+ campaigns · 30-day deployment · Multi-platform takeover
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
              Start Your Campaign <ArrowRight className="w-4 h-4" />
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
              A coordinated takeover across social, PR, and paid channels — engineered to build authority and drive results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Viral Clipping', items: ['Podcast clips', 'Interview highlights', 'Speaking moments', 'Testimonial edits', 'Value bombs'] },
              { title: 'Distribution', items: ['Instagram Reels', 'TikTok seeding', 'YouTube Shorts', 'LinkedIn push', 'X amplification'] },
              { title: 'Authority', items: ['PR placements', 'Media features', 'Thought leadership', 'Paid amplification', 'Retargeting'] },
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

      {/* Why This Investment */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Why $25K+</h2>
            <p className="text-sm text-white/40">
              This is the threshold where real brand building happens. Below this, you are just posting.
            </p>
          </motion.div>

          <div className="space-y-px rounded-lg overflow-hidden">
            {[
              { label: 'Production', desc: 'Professional clip editing, custom graphics, ad creatives, and PR-ready assets require real resources.' },
              { label: 'Distribution', desc: 'Meaningful reach across Instagram, TikTok, YouTube, LinkedIn, and X requires coordinated volume.' },
              { label: 'PR', desc: 'Real media placements — not pay-to-play directories — require relationships, pitching, and follow-through.' },
              { label: 'Ads', desc: 'Effective paid campaigns need proper creative testing, audience optimization, and ongoing management.' },
              { label: 'Results', desc: 'This budget consistently produces 10M+ views, significant follower growth, and measurable authority lift.' },
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
              <span className="text-xs text-white/40 uppercase tracking-wide">$30K Initial Campaign · $100K+ Lifetime</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">150K+ Followers · 7-Figure Sales</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { value: '150K+', label: 'New Followers' },
              { value: '800K', label: 'Likes on 1 Post' },
              { value: '30M+', label: 'Total Views' },
              { value: '7-Fig', label: 'In Sales' },
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
                $30K on Instagram ad buying alone. Hit the viral chord — one post exploded to 800K likes and tens of millions of views. Scaled aggressively when momentum hit.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Outcome</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Entrepreneur grew 150K followers and converted 7-figures in sales. Client immediately re-invested $40K, took a break, then came back for another $30K. $100K+ over 12 months — and counting.
              </p>
            </div>
          </motion.div>

          <p className="text-[10px] text-white/25">
            Real campaign example. Clients come back because it works. Results vary by content, market, and timing.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">How It Works</h2>
            <p className="text-sm text-white/40">
              Four phases, 30 days, one goal: authority at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { phase: '01', title: 'Strategy', desc: 'Audit your content, positioning, and goals. Define the narrative and map the distribution strategy.' },
              { phase: '02', title: 'Production', desc: 'Edit clips, create graphics, build ad creatives, prepare PR pitches. Everything optimized for each platform.' },
              { phase: '03', title: 'Deployment', desc: 'Launch coordinated push across social, PR, and paid. Distribute clips, seed content, activate ads.' },
              { phase: '04', title: 'Optimization', desc: 'Daily monitoring. Scale high performers, kill underperformers, maximize ROI across all channels.' },
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
              Ready to scale?
            </h2>
            <p className="text-sm text-white/40 mb-8">
              We work with a limited number of brands each quarter. If you're ready to build real authority, let's talk.
            </p>
            
            <button
              onClick={() => setLeadOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Your Campaign <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-white/20 mt-6">
              $25K minimum · Custom campaigns only
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

