'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Users, TrendingUp, Globe, Zap, Eye, DollarSign, Flame, Star } from 'lucide-react';

const stats = [
  { value: '30K+', label: 'Clients Served', icon: Users },
  { value: '50B+', label: 'Impressions Driven', icon: TrendingUp },
  { value: '37+', label: 'Countries', icon: Globe },
  { value: '7', label: 'Years Running', icon: Zap },
];

const outcomes = [
  { icon: Eye, label: 'Attention' },
  { icon: TrendingUp, label: 'Exposure' },
  { icon: DollarSign, label: 'Monetization' },
  { icon: Star, label: 'Opportunities' },
  { icon: Flame, label: 'Clout' },
];

export const OurStory = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  return (
    <section className="relative py-20 md:py-28 bg-edst-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-edst-charcoal/10 via-transparent to-edst-charcoal/10" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-edst-gold/[0.015] blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-xs text-edst-gold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-edst-gold animate-pulse" />
            Inside EDST
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-edst-white mb-3">
            Where Creators{' '}
            <span className="text-gradient-gold">Blow Up</span>
          </h2>
          <p className="text-edst-silver max-w-xl mx-auto text-sm">
            A global network built to get you attention, exposure, and real opportunities.
          </p>
        </motion.div>

        {/* Outcome Tags - Clean Elevated Layout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Decorative divider with label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-edst-gold/30 to-edst-gold/50" />
            <span className="text-xs text-edst-gold uppercase tracking-widest font-medium">What You Get</span>
            <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-edst-gold/30 to-edst-gold/50" />
          </div>

          {/* Outcome pills in a clean row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/40 hover:bg-edst-charcoal/60 transition-all group cursor-default"
              >
                <div className="p-2 rounded-xl bg-edst-gold/10 group-hover:bg-edst-gold/20 transition-colors">
                  <outcome.icon className="w-4 h-4 text-edst-gold" />
                </div>
                <span className="text-sm md:text-base text-edst-white font-medium">{outcome.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Subtle bottom divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-40 md:w-56 bg-gradient-to-r from-transparent via-edst-slate/30 to-transparent" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-14">
          {/* Left: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="space-y-3">
              {/* Hero Image - EDST Stage with crowd */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden relative group">
                {!imageErrors['/images/story/stage.jpg'] ? (
                  <Image
                    src="/images/story/stage.jpg"
                    alt="EDST festival with massive crowd"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError('/images/story/stage.jpg')}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-edst-gold/20 via-edst-charcoal to-edst-black flex items-center justify-center">
                    <span className="text-edst-gold font-bold text-3xl">EDST</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* 3 Image Row: Billboard | Lambo (center) | Club */}
              <div className="grid grid-cols-3 gap-3">
                {/* Left - Times Square */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                  {!imageErrors['/images/story/times-square.jpg'] ? (
                    <Image
                      src="/images/story/times-square.jpg"
                      alt="Times Square billboard"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError('/images/story/times-square.jpg')}
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-edst-charcoal/50" />
                  )}
                </div>
                
                {/* Center - Lambo */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                  {!imageErrors['/images/story/lambo.jpg'] ? (
                    <Image
                      src="/images/story/lambo.jpg"
                      alt="Miami lifestyle"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError('/images/story/lambo.jpg')}
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-edst-charcoal/50" />
                  )}
                </div>
                
                {/* Right - Club */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                  {!imageErrors['/images/story/we-plug.jpg'] ? (
                    <Image
                      src="/images/story/we-plug.jpg"
                      alt="Celebrity connections"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError('/images/story/we-plug.jpg')}
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-edst-charcoal/50" />
                  )}
                </div>
              </div>
            </div>

            {/* Floating badge - bottom right, lowered to avoid sign */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 right-2 md:-bottom-3 md:right-3 px-3 py-1.5 bg-edst-gold text-edst-black rounded-lg shadow-lg"
            >
              <span className="text-xs font-bold">Since 2019</span>
            </motion.div>
          </motion.div>

          {/* Right: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5">
              <div className="space-y-4">
                <p className="text-edst-silver leading-relaxed text-sm md:text-base">
                  EDST started in 2019 helping a few artists get real attention online—no funding, no big agency backing. Just hustle, belief, and a network that actually worked.
                </p>
                <p className="text-edst-silver leading-relaxed text-sm md:text-base">
                  Since then we've helped <span className="text-edst-white font-medium">tens of thousands</span> of creators, artists, and entrepreneurs blow up online—driving <span className="text-edst-gold font-medium">billions of impressions</span>, <span className="text-edst-gold font-medium">tens of millions in sales</span>, and real career opportunities that changed lives.
                </p>
                <p className="text-edst-silver leading-relaxed text-sm md:text-base">
                  From bedroom artists to touring musicians. From side hustlers to full-time entrepreneurs. From zero followers to verified accounts. <span className="text-edst-white font-medium">Our clients don't just grow—they level up.</span>
                </p>
              </div>

              {/* Key differentiator */}
              <div className="p-4 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                <p className="text-sm text-edst-white leading-relaxed">
                  <span className="text-edst-gold font-medium">We're not a traditional agency.</span>{' '}
                  We're a living ecosystem of creators, marketers, and operators who test everything on ourselves first—then scale what works for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="p-4 rounded-xl bg-edst-charcoal/15 border border-edst-slate/10 text-center group hover:border-edst-gold/20 transition-colors"
            >
              <stat.icon className="w-4 h-4 text-edst-gold mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xl md:text-2xl font-bold text-edst-white">{stat.value}</div>
              <div className="text-[10px] text-edst-silver uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Image Strip - Community + Swag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-2"
        >
          {[
            { src: '/images/story/nightlife.jpg', alt: 'Candid nightlife scene with creators and entrepreneurs celebrating' },
            { src: '/images/story/bts-shoot.jpg', alt: 'Behind-the-scenes content shoot with photographer and creators' },
            { src: '/images/story/war-room.jpg', alt: 'Marketing strategy war room with team reviewing analytics' },
            { src: '/images/story/studio.jpg', alt: 'Music studio session with artists and producers collaborating' },
          ].map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden relative group"
            >
              {!imageErrors[img.src] ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => handleImageError(img.src)}
                  sizes="25vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-edst-charcoal/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
