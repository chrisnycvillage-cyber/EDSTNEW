'use client';

import { motion } from 'framer-motion';
import { Eye, Play, Heart, Users, TrendingUp } from 'lucide-react';
import { yearlyStats } from '@/lib/config';

const iconMap: Record<string, typeof Eye> = {
  views: Play,
  impressions: Eye,
  engagement: Heart,
  followers: Users,
};

export const BusinessMetrics = () => {
  return (
    <section className="relative py-8 overflow-hidden border-t border-edst-slate/15">
      <div className="absolute inset-0 bg-gradient-to-r from-edst-charcoal/40 via-edst-black to-edst-charcoal/40" />
      
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(250,204,83,0.05) 0%, transparent 70%)' }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <TrendingUp className="w-5 h-5 text-edst-gold" />
            </motion.div>
            <div>
              <span className="text-sm font-mono uppercase tracking-widest text-edst-gold block">
                {yearlyStats.label}
              </span>
              <span className="text-xs text-edst-silver">Updated monthly</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 md:gap-10">
            {yearlyStats.stats.map((stat, index) => {
              const Icon = iconMap[stat.id] || Eye;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-center group cursor-default"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-edst-silver group-hover:text-edst-gold transition-colors" />
                    <motion.span
                      className="text-xl md:text-2xl font-bold text-edst-white group-hover:text-edst-gold transition-colors"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.span>
                  </div>
                  <span className="text-xs text-edst-silver block">{stat.label}</span>
                  <span className="text-[10px] text-edst-silver/60">{stat.subtext}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
