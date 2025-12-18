'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { MetricTicker } from './MetricTicker';
import { DataPulse } from './DataPulse';
import { hero } from '@/lib/config';
import { MagneticButton } from './MagneticButton';

// Note: Floating notifications are now handled by LiveOrderFeed component (full page coverage)

// Star field component - only renders on client
const StarField = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    const newStars = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-edst-black" />
      <DataPulse />
      
      {/* Animated orbs - cosmic feel */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Star field */}
      <StarField />
      
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-transparent to-edst-black/95" />

      {/* Main content */}
      <div className="section-container relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Simple online badge - centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 text-xs font-mono text-edst-silver uppercase tracking-wider"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-edst-online"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {hero.badge}
            </motion.span>
          </motion.div>

          {/* Main headline - clean and bold */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading font-bold text-edst-white leading-[1.08] mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {hero.headlineLine1}
              </span>
              <motion.span 
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-gold"
                animate={{ opacity: [1, 0.85, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {hero.headlineLine2}
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-edst-silver max-w-lg mx-auto leading-relaxed">
              {hero.subheadline}
            </p>
          </motion.div>

          {/* CTA Button - Centered, Sleek Outline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-14"
          >
            <MagneticButton strength={0.2}>
              <motion.a
                href="/marketing"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 border border-edst-gold/60 text-edst-gold bg-transparent hover:border-edst-gold hover:text-edst-gold-light"
                style={{
                  boxShadow: '0 0 20px rgba(250, 204, 83, 0.15), inset 0 0 20px rgba(250, 204, 83, 0.05)',
                }}
                whileHover={{
                  boxShadow: '0 0 30px rgba(250, 204, 83, 0.3), inset 0 0 25px rgba(250, 204, 83, 0.1)',
                }}
              >
                {hero.primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Live metrics panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="panel p-6 pulse-glow"
          >
            <MetricTicker />
          </motion.div>
        </div>
      </div>

      {/* Decorative corners */}
      <motion.div 
        className="absolute top-24 left-6 w-24 h-24 border-l border-t border-edst-slate/15"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-16 right-6 w-24 h-24 border-r border-b border-edst-slate/15"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};
