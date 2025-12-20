'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  Play, 
  Users, 
  TrendingUp, 
  Heart, 
  Share2, 
  Bookmark, 
  DollarSign, 
  Flame,
  Megaphone,
  BarChart3,
  Newspaper,
  Music,
  Mic,
  Video
} from 'lucide-react';
import { tickerMessages } from '@/lib/config';

const iconMap: Record<string, typeof Play> = {
  play: Play,
  users: Users,
  trending: TrendingUp,
  heart: Heart,
  share: Share2,
  bookmark: Bookmark,
  dollar: DollarSign,
  fire: Flame,
  megaphone: Megaphone,
  chart: BarChart3,
  newspaper: Newspaper,
  music: Music,
  mic: Mic,
  video: Video,
};

export const ResultsFeed = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 1);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  // Double the items for seamless loop
  const items = [...tickerMessages, ...tickerMessages];

  return (
    <div className="relative overflow-hidden bg-edst-charcoal/30 border-y border-edst-slate/15">
      {/* Ticker Row */}
      <div className="relative py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-edst-charcoal/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-edst-charcoal/90 to-transparent z-10" />
        
        <div 
          ref={containerRef}
          className="flex items-center gap-5"
          style={{ 
            transform: `translateX(-${offset % (tickerMessages.length * 240)}px)`,
            transition: 'none'
          }}
        >
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            const isHighlight = item.type === 'viral' || item.type === 'pr' || item.type === 'music';
            
            return (
              <motion.div
                key={i}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full whitespace-nowrap flex-shrink-0 border transition-all ${
                  isHighlight 
                    ? 'bg-edst-gold/10 border-edst-gold/25 hover:border-edst-gold/40' 
                    : 'bg-edst-slate/20 border-edst-slate/15 hover:border-edst-slate/30'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Icon className={`w-4 h-4 ${isHighlight ? 'text-edst-gold' : 'text-edst-silver'}`} />
                <span className="text-sm text-edst-light font-medium">{item.text}</span>
                {isHighlight && (
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-edst-online"
                    animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Grounding line */}
      <div className="text-center pb-3">
        <p className="text-[10px] text-edst-silver/40">
          Real campaign activity across EDST clients
        </p>
      </div>
    </div>
  );
};
