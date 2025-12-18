'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { cta } from '@/lib/config';
import { MagneticButton } from './MagneticButton';

export const CTA = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-black" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] orb-gold opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-edst-white mb-6">
            {cta.headline} <span className="text-gradient-gold">{cta.headlineAccent}</span>
          </h2>

          <p className="text-lg text-edst-silver mb-10 max-w-xl mx-auto">
            {cta.subheadline}
          </p>

          {/* CTA Button */}
          <MagneticButton strength={0.25}>
            <a
              href="/marketing"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-edst-gold text-edst-black font-semibold text-base uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-edst-gold-light hover:shadow-glow-gold"
            >
              <Zap className="w-5 h-5" />
              {cta.buttonText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          {/* Trust note */}
          <p className="mt-6 text-sm text-edst-silver">
            {cta.trustNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
