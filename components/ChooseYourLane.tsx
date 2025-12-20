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
    solution: "We fix visibility. We build credibility. We get your music in front of people who actually care — and help you look like the artist you are becoming.",
    cta: 'Explore Music Services',
    href: '/industries/music',
    accentColor: 'from-pink-500/20 to-pink-500/5',
  },
  {
    id: 'creators',
    icon: Users,
    title: 'Creators & Influencers',
    problem: "You are posting. You are consistent. But growth is slow and brand deals are not landing.",
    solution: "We amplify your reach, build social proof that brands notice, and position you as someone worth paying attention to.",
    cta: 'Explore Creator Services',
    href: '/industries/influencers',
    accentColor: 'from-purple-500/20 to-purple-500/5',
  },
  {
    id: 'businesses',
    icon: Briefcase,
    title: 'Businesses & Brands',
    problem: "You have a product or service. You need more leads, more visibility, more authority in your space.",
    solution: "We build your brand presence, drive inbound attention, and establish the credibility that makes sales easier.",
    cta: 'Explore Business Services',
    href: '/industries/business-services',
    accentColor: 'from-blue-500/20 to-blue-500/5',
  },
];

export const ChooseYourLane = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-dark" />
      <div className="absolute inset-0 gradient-radial opacity-30" />

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

        {/* Lane Cards */}
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
                className="group relative p-6 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/25 transition-all overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${lane.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-edst-slate/30 group-hover:bg-edst-gold/10 transition-colors">
                      <Icon className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-edst-white group-hover:text-edst-gold transition-colors">
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
                  <div className="mb-5">
                    <span className="text-[10px] uppercase tracking-wider text-edst-gold/60 mb-1 block">What We Change</span>
                    <p className="text-sm text-edst-silver leading-relaxed">
                      {lane.solution}
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    href={lane.href}
                    className="inline-flex items-center gap-2 text-sm text-edst-gold hover:text-edst-gold-light transition-colors"
                  >
                    {lane.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-edst-silver/50 mt-10 max-w-xl mx-auto"
        >
          Do not fit neatly into one lane? Most of our clients do not. We will figure it out together.
        </motion.p>
      </div>
    </section>
  );
};

export default ChooseYourLane;

