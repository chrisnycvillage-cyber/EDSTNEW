'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * CHOOSE YOUR LANE - Outcome-Based Targeting
 * ───────────────────────────────────────────────────────────────────
 * Three clear buckets: Artists, Creators, Businesses
 * ═══════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import { Music, Users, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const lanes = [
  {
    id: 'artists',
    icon: Music,
    title: 'Artists & Music',
    problem: "Your music is good. Nobody is hearing it. Streams are flat. Engagement is dead.",
    solution: "We fix visibility. We build credibility. We get your music in front of people who actually care.",
    accentColor: 'from-pink-500/20 to-pink-500/5',
  },
  {
    id: 'creators',
    icon: Users,
    title: 'Creators & Influencers',
    problem: "You are posting. You are consistent. But growth is slow and brand deals are not landing.",
    solution: "We amplify your reach, build social proof that brands notice, and position you as someone worth paying attention to.",
    accentColor: 'from-purple-500/20 to-purple-500/5',
  },
  {
    id: 'businesses',
    icon: Briefcase,
    title: 'Businesses & Brands',
    problem: "You have a product or service. You need more leads, more visibility, more authority in your space.",
    solution: "We build your brand presence, drive inbound attention, and establish the credibility that makes sales easier.",
    accentColor: 'from-blue-500/20 to-blue-500/5',
  },
];

export const ChooseYourLane = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-dark" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-edst-white mb-5">
            Choose Your <span className="text-gradient-gold">Lane</span>
          </h2>
          <p className="text-lg text-edst-silver max-w-xl mx-auto">
            Same engine. Different applications.
          </p>
        </motion.div>

        {/* Lane Cards - NOT clickable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative p-6 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20"
              >
                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-edst-slate/30">
                      <Icon className="w-5 h-5 text-edst-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-edst-white">
                      {lane.title}
                    </h3>
                  </div>
                  
                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-edst-silver/50 mb-1 block">The Problem</span>
                    <p className="text-sm text-edst-silver leading-relaxed">
                      {lane.problem}
                    </p>
                  </div>
                  
                  {/* Solution */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-edst-gold/60 mb-1 block">What We Change</span>
                    <p className="text-sm text-edst-silver leading-relaxed">
                      {lane.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single CTA under all lanes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link href="/marketing">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-edst-gold text-edst-black font-semibold text-sm uppercase tracking-wider hover:bg-edst-gold-light transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See Plans & Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-edst-silver/50 mt-6 max-w-xl mx-auto"
        >
          Not sure which lane you fit? Most clients do not fit neatly — we will figure it out together.
        </motion.p>
      </div>
    </section>
  );
};

export default ChooseYourLane;

