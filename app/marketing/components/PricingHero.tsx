'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

// Live activity indicators
const liveIndicators = [
  'New member just joined',
  'Viral campaign started',
  'Community post shared',
  'Growth pack ordered',
];

export const PricingHero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveIndicator(prev => (prev + 1) % liveIndicators.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [mounted]);

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center justify-center pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-edst-black" />
      
      {/* Single ambient glow */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Live indicator pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-edst-charcoal/60 border border-edst-slate/30">
              <motion.span 
                className="w-2 h-2 rounded-full bg-edst-online"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-edst-online uppercase tracking-wider">Live</span>
              <span className="w-px h-3 bg-edst-slate/40" />
              {mounted && (
                <motion.span 
                  key={activeIndicator}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs text-edst-silver"
                >
                  {liveIndicators[activeIndicator]}
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-edst-white mb-5 leading-[1.1]"
          >
            Global Marketing
            <br />
            <motion.span 
              className="text-gradient-gold"
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              For Everyone.
            </motion.span>
          </motion.h1>

          {/* Subheadline - Cleaner, one line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-edst-silver mx-auto mb-8 whitespace-nowrap"
          >
            50+ services • Exclusive community • Dedicated support
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.button
              onClick={scrollToPlans}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-edst-gold text-edst-black font-bold text-sm uppercase tracking-widest rounded hover:bg-edst-gold-light transition-all"
            >
              <span>View Plans</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
            
            <span className="text-sm text-edst-silver/70">
              Cancel anytime <span className="mx-1.5 text-edst-gold/60">•</span> No contracts
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative corners - matches homepage */}
      <motion.div 
        className="absolute top-24 left-6 w-20 h-20 border-l border-t border-edst-slate/15 hidden md:block"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-16 right-6 w-20 h-20 border-r border-b border-edst-slate/15 hidden md:block"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};
