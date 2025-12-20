'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, X, CheckCircle, Activity,
  Send, User, Mail, Building, DollarSign, Phone, Music
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '$5K - $10K' });
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
                { key: 'name', icon: User, placeholder: 'Artist / Band name', type: 'text' },
                { key: 'email', icon: Mail, placeholder: 'Email', type: 'email' },
                { key: 'phone', icon: Phone, placeholder: 'Phone', type: 'tel' },
                { key: 'company', icon: Music, placeholder: 'Label (if any)', type: 'text' },
              ].map(({ key, icon: Icon, placeholder, type }) => (
                <div key={key} className="relative">
                  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                  <input
                    type={type}
                    required={key !== 'company'}
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
                  <option value="$5K - $10K">$5K - $10K</option>
                  <option value="$10K - $15K">$10K - $15K</option>
                  <option value="$15K - $20K">$15K - $20K</option>
                  <option value="$20K - $25K">$20K - $25K</option>
                  <option value="$25K+">$25K+</option>
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

export default function MusicianCampaignsPage() {
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
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="font-heading text-lg font-bold tracking-tight">EDST</span>
        </Link>
      </nav>
      
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
              Artist Campaigns
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            <span className="whitespace-nowrap">Blow Up <span className="text-edst-gold">Your Music</span></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-4 leading-relaxed"
          >
            Full-scale music promotion engineered for streams, listeners, social growth, and viral distribution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xs text-white/30 mb-10"
          >
            $5K - $25K campaigns · 30-90 day deployment · Multi-platform activation
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
              A coordinated push across streaming, social, and discovery platforms — engineered to break through.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Sound Seeding', items: ['Playlist pitching', 'Curator outreach', 'Algorithmic triggers', 'Discovery optimization', 'Genre targeting'] },
              { title: 'Viral Distribution', items: ['TikTok sound push', 'Reels + Shorts clips', 'Meme deployment', 'Creator seeding', 'Trend hijacking'] },
              { title: 'Amplification', items: ['Paid ads (Meta/TikTok)', 'PR placements', 'Blog coverage', 'Social growth', 'Retargeting'] },
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
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Why $5K - $25K</h2>
            <p className="text-sm text-white/40">
              This is where real momentum begins. Anything less spreads too thin.
            </p>
          </motion.div>

          <div className="space-y-px rounded-lg overflow-hidden">
            {[
              { label: 'Volume', desc: 'Enough content, placements, and ad spend to actually move the needle on streams and followers.' },
              { label: 'Multi-Channel', desc: 'Coordinated push across Spotify, Apple Music, TikTok, Instagram, YouTube, and PR — not just one platform.' },
              { label: 'Quality', desc: 'Real playlist curators, legitimate PR outlets, and authentic creator partnerships — not bots or fake engagement.' },
              { label: 'Speed', desc: '30 days of aggressive, focused execution. We hit hard and fast while your release is fresh.' },
              { label: 'Results', desc: 'This budget range consistently produces 5M+ views, 100K+ new listeners, and meaningful social growth.' },
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
              <span className="text-xs text-white/40 uppercase tracking-wide">$25K Campaign Example · 90 Days</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">18M+ Total Views</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { value: '2K → 15K', label: 'Monthly Listeners' },
              { value: '10K+', label: 'New IG Followers' },
              { value: '18M+', label: 'Total Views' },
              { value: '5', label: 'PR Features' },
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
                Sound went trending on TikTok. 18M+ views from influencer marketing, seed posting, and paid ads across IG and TikTok. Featured in 5 PR articles. Rebuilt artist website from scratch.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-edst-gold uppercase tracking-wide mb-2">Outcome</div>
              <p className="text-sm text-white/50 leading-relaxed">
                Spotify monthly listeners grew from 2K to 15K. Instagram grew by 10K followers with increased engagement. Client re-engaged immediately and continues working with us.
              </p>
            </div>
          </motion.div>

          <p className="text-[10px] text-white/25">
            One example of a successful $25K campaign over 90 days. Results vary by song quality, timing, and market conditions.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">How It Works</h2>
            <p className="text-sm text-white/40">
              Four phases, 30 days, one goal: break through.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { phase: '01', title: 'Strategy', desc: 'Analyze your sound, audience, and goals. Map the release strategy and platform priorities.' },
              { phase: '02', title: 'Production', desc: 'Create clips, visuals, and ad creatives optimized for each platform. Prepare playlist pitches and PR angles.' },
              { phase: '03', title: 'Deployment', desc: 'Launch coordinated push across streaming, social, and PR. Seed sound to creators and curators.' },
              { phase: '04', title: 'Optimization', desc: 'Monitor performance daily. Scale winners, cut losers, maximize every dollar spent.' },
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
              Ready to blow up?
            </h2>
            <p className="text-sm text-white/40 mb-8">
              We take on a limited number of artist campaigns each month. If your music is ready, let us help you break through.
            </p>
            
            <button
              onClick={() => setLeadOpen(true)}
              className="px-8 py-3.5 bg-edst-gold text-black font-medium rounded hover:bg-edst-gold-light transition flex items-center gap-2 mx-auto"
            >
              Start Your Campaign <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-white/20 mt-6">
              $5K minimum · Custom campaigns only
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

