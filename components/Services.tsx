'use client';

import { motion } from 'framer-motion';
import {
  Video,
  TrendingUp,
  Megaphone,
  Newspaper,
  Music,
  Users,
  Zap,
} from 'lucide-react';
import { services, serviceCategories } from '@/lib/config';

const categoryIcons: Record<string, typeof Video> = {
  marketing: TrendingUp,
  advertising: Megaphone,
  pr: Newspaper,
  content: Video,
  music: Music,
  community: Users,
};

const categoryColors: Record<string, string> = {
  marketing: 'from-edst-gold/15 to-edst-gold/5',
  advertising: 'from-orange-500/15 to-orange-500/5',
  pr: 'from-blue-500/15 to-blue-500/5',
  content: 'from-purple-500/15 to-purple-500/5',
  music: 'from-pink-500/15 to-pink-500/5',
  community: 'from-green-500/15 to-green-500/5',
};

export const Services = () => {
  const categories = Object.entries(serviceCategories);
  
  return (
    <section id="services" className="relative py-16 md:py-20 overflow-hidden">
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
            {services.headline}
          </h2>
          <p className="text-lg text-edst-silver max-w-xl mx-auto">
            {services.subheadline}
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {categories.map(([key, category], index) => {
            const Icon = categoryIcons[key] || Zap;
            const gradient = categoryColors[key] || 'from-edst-gold/20 to-edst-gold/5';
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group p-5 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/25 transition-all overflow-hidden relative"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-edst-slate/30 group-hover:bg-edst-gold/10 transition-colors">
                      <Icon className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-edst-white group-hover:text-edst-gold transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Service items */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.slice(0, 5).map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="text-xs px-2 py-1 rounded bg-edst-slate/30 text-edst-silver group-hover:bg-edst-slate/50 transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                    {category.items.length > 5 && (
                      <span className="text-xs px-2 py-1 rounded bg-edst-gold/10 text-edst-gold">
                        +{category.items.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-edst-charcoal/40 border border-edst-slate/20">
            <motion.span 
              className="w-2 h-2 rounded-full bg-edst-gold"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-edst-silver">Built for creators & businesses</span>
          </div>
          <a
            href="/marketing"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-edst-gold text-edst-black rounded-full hover:bg-edst-gold-light transition-all"
          >
            See Plans
          </a>
        </motion.div>
      </div>
    </section>
  );
};
