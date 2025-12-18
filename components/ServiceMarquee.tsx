'use client';

import { motion } from 'framer-motion';
import { serviceMarquee } from '@/lib/config';

export const ServiceMarquee = () => {
  // Triple the items for seamless infinite scroll
  const items = [...serviceMarquee, ...serviceMarquee, ...serviceMarquee];

  return (
    <div className="relative py-6 overflow-hidden bg-edst-charcoal/20 border-y border-edst-slate/10">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-edst-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-edst-dark to-transparent z-10" />
      
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {items.map((service, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-lg md:text-xl font-heading text-edst-silver/60 hover:text-edst-gold transition-colors cursor-default">
              {service}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-edst-gold/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

