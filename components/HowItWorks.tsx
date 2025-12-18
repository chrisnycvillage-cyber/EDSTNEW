'use client';

import { motion } from 'framer-motion';
import { Zap, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Zap,
    title: 'Choose Your Plan',
    description: 'Pick the campaign that matches your goals.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'We Handle Setup',
    description: 'Our team builds and launches everything.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'You Grow',
    description: 'Focus on your craft. We handle the rest.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/5 to-edst-black" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-edst-white mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-lg text-edst-silver">
            Three simple steps to growth.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Road - Desktop - positioned at icon level */}
          <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-[3px] z-0">
            {/* Base road */}
            <div className="absolute inset-0 bg-edst-slate/10 rounded-full" />
            {/* Animated glow traveling */}
            <motion.div
              className="absolute top-0 h-full w-24 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(250,204,83,0.5), rgba(250,204,83,0.8), rgba(250,204,83,0.5), transparent)',
              }}
              animate={{ left: ['-15%', '115%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Static gold line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-edst-gold/20 via-edst-gold/40 to-edst-gold/20 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon Node */}
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-edst-charcoal/50 border-2 border-edst-gold/40 flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(250,204,83,0.8)' }}
                  animate={{ 
                    boxShadow: [
                      '0 0 15px rgba(250,204,83,0.1)',
                      '0 0 25px rgba(250,204,83,0.25)',
                      '0 0 15px rgba(250,204,83,0.1)'
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                >
                  <step.icon className="w-8 h-8 text-edst-gold" />
                </motion.div>

                {/* Content */}
                <div>
                  {/* Number */}
                  <span className="text-[10px] font-mono text-edst-gold/40 tracking-widest">STEP {step.number}</span>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-edst-white mt-1 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-edst-silver/70 max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot - visible on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 mb-2">
                    <motion.div 
                      className="w-1.5 h-6 rounded-full bg-gradient-to-b from-edst-gold/40 to-edst-gold/10"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA + Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="/marketing"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-edst-gold border border-edst-gold/40 rounded-full hover:bg-edst-gold/10 hover:border-edst-gold/60 transition-all"
          >
            Get Started
            <span className="text-edst-gold/60">→</span>
          </a>
          <p className="text-xs tracking-widest text-edst-silver/50 mt-6 uppercase">
            Trusted by <span className="text-edst-gold/70">Creators</span> · <span className="text-edst-gold/70">Artists</span> · <span className="text-edst-gold/70">Entrepreneurs</span> · <span className="text-edst-gold/70">Fortune 500 Brands</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

