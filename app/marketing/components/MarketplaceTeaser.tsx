'use client';

import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Rocket, 
  TrendingUp, 
  Megaphone, 
  Video, 
  Newspaper,
  Music,
  Users,
  Globe,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  { icon: Rocket, label: 'Viral Marketing' },
  { icon: TrendingUp, label: 'Growth Strategy' },
  { icon: Video, label: 'Content Production' },
  { icon: Newspaper, label: 'Press & PR' },
  { icon: Music, label: 'Music Marketing' },
  { icon: Megaphone, label: 'Paid Advertising' },
  { icon: Users, label: 'Community Access' },
  { icon: Globe, label: 'Digital Presence' },
];

export const MarketplaceTeaser = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-edst-black" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 rounded-lg bg-edst-gold/20"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <ShoppingBag className="w-6 h-6 text-edst-gold" />
              </motion.div>
              <span className="text-sm font-mono uppercase tracking-widest text-edst-gold">
                Included With Every Plan
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-edst-white mb-4">
              Access Our <span className="text-gradient-gold">Full Ecosystem.</span>
            </h2>

            <p className="text-lg text-edst-silver mb-6">
              Every membership unlocks marketplace.edst.com — 50+ marketing services, content solutions, 
              and growth tools across every major platform. Plus a real community of people doing the same thing.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Exclusive community of creators & entrepreneurs',
                'New services and opportunities added daily',
                'All platforms — social, music, web, PR',
                'Real support from a team that gets it',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Sparkles className="w-4 h-4 text-edst-gold" />
                  <span className="text-edst-light">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="/marketplace"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-edst-charcoal border border-edst-gold/30 text-edst-gold rounded-lg font-medium hover:bg-edst-gold hover:text-edst-black transition-all"
            >
              Explore Marketplace
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right - Service Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-all group"
              >
                <service.icon className="w-8 h-8 text-edst-silver group-hover:text-edst-gold transition-colors mb-3" />
                <span className="text-edst-white font-medium">{service.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
