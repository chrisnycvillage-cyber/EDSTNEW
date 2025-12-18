'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface EcosystemTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: {
    label: string;
    value: number;
    suffix?: string;
  }[];
  delay?: number;
}

export const EcosystemTile = ({
  title,
  description,
  icon: Icon,
  metrics,
  delay = 0,
}: EcosystemTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState(metrics);

  useEffect(() => {
    if (!isHovered) return;
    
    const interval = setInterval(() => {
      setLiveMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: metric.value + Math.floor(Math.random() * 3),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ecosystem-tile group"
    >
      {/* Animated line at top */}
      <motion.div
        className="absolute top-0 left-4 right-4 h-px bg-edst-gold"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isHovered ? { scaleX: 1, opacity: 0.5 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Icon + status */}
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-md bg-edst-slate/30 group-hover:bg-edst-gold/10 transition-colors">
            <Icon className="w-4 h-4 text-edst-silver group-hover:text-edst-gold transition-colors" />
          </div>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-edst-gold"
            animate={isHovered ? { scale: [1, 1.2, 1], opacity: [1, 0.6, 1] } : { opacity: 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-edst-white mb-1 group-hover:text-edst-gold transition-colors leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-edst-silver leading-snug line-clamp-2 mb-2">
          {description}
        </p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pt-2 border-t border-edst-slate/20 space-y-1">
            {liveMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[10px] text-edst-silver">{metric.label}</span>
                <span className="text-[10px] font-mono text-edst-gold">
                  {metric.value.toLocaleString()}{metric.suffix || ''}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
