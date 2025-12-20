'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * CAPABILITIES SECTION - Merged from Ecosystem + Services
 * ───────────────────────────────────────────────────────────────────
 * Reality-based blocks showing what EDST actually does.
 * ═══════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import { 
  Eye,
  BadgeCheck,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

const capabilityBlocks = [
  {
    id: 'visibility',
    icon: Eye,
    title: 'Visibility & Distribution',
    description: 'Get seen by more people — consistently.',
    examples: ['Organic distribution across platforms', 'Content seeding & amplification', 'Reach expansion to new audiences'],
  },
  {
    id: 'credibility',
    icon: BadgeCheck,
    title: 'Credibility & Social Proof',
    description: 'Build the perception that matters.',
    examples: ['Engagement that signals trust', 'Press features & media coverage', 'Social proof that stacks over time'],
  },
  {
    id: 'acceleration',
    icon: Rocket,
    title: 'Acceleration & Deployment',
    description: 'Move fast when it counts.',
    examples: ['Paid ad campaigns that convert', 'Bulk content pushes & releases', 'Viral campaign deployment'],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Long-Term Growth & Leverage',
    description: 'Build momentum that compounds.',
    examples: ['Strategy & content direction', 'Networking & real-world leverage', 'Brand image that opens doors'],
  },
];

export const Capabilities = () => {
  return (
    <section id="ecosystem" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-black" />
      <div className="absolute inset-0 gradient-radial-top" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] orb-gold opacity-15 blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-edst-white mb-5">
            Everything You Need. <span className="text-gradient-gold">One Place.</span>
          </h2>
          <p className="text-lg text-edst-silver max-w-2xl mx-auto">
            All under one roof — built to blow you up.
          </p>
        </motion.div>

        {/* Capability Blocks - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {capabilityBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="ecosystem-tile group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-edst-slate/30 group-hover:bg-edst-gold/10 transition-colors">
                    <Icon className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
                  </div>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-edst-online"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-edst-white mb-2 group-hover:text-edst-gold transition-colors">
                  {block.title}
                </h3>
                <p className="text-sm text-edst-silver leading-relaxed mb-4">
                  {block.description}
                </p>

                {/* Concrete Examples */}
                <div className="pt-4 border-t border-edst-slate/15 space-y-2">
                  {block.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-edst-gold/60 flex-shrink-0" />
                      <span className="text-xs text-edst-silver/80">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Services link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link href="/marketing">
            <motion.div 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 cursor-pointer hover:border-edst-gold/40 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-edst-gold"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-edst-silver">50+ services available</span>
              <span className="text-sm text-edst-gold font-medium">Explore →</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;

