'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  Zap, 
  Users, 
  Newspaper,
  TrendingUp,
  Music,
} from 'lucide-react';
import { orderNotifications } from '@/lib/config';

// Position spots - corners only, avoiding center content
type PositionSpot = {
  id: string;
  style: React.CSSProperties;
  initial: { x: number; y: number };
};

const positionSpots: PositionSpot[] = [
  // Top corners only
  { id: 'top-left', style: { top: '100px', left: '20px' }, initial: { x: -30, y: -20 } },
  { id: 'top-right', style: { top: '100px', right: '20px' }, initial: { x: 30, y: -20 } },
  // Bottom corners only - avoiding center where dashboard/content lives
  { id: 'bottom-left', style: { bottom: '100px', left: '20px' }, initial: { x: -30, y: 20 } },
  { id: 'bottom-right', style: { bottom: '100px', right: '20px' }, initial: { x: 30, y: 20 } },
];

interface OrderNotification {
  id: number;
  text: string;
  type: string;
  position: PositionSpot;
}

const typeIconMap: Record<string, typeof Zap> = {
  viral: TrendingUp,
  music: Music,
  pr: Newspaper,
  followers: Users,
  default: Zap,
};

const typeColorMap: Record<string, string> = {
  viral: 'text-edst-gold',
  music: 'text-pink-400',
  pr: 'text-cyan-400',
  followers: 'text-green-400',
  default: 'text-edst-gold',
};

export const LiveOrderFeed = () => {
  const [notifications, setNotifications] = useState<OrderNotification[]>([]);
  const usedPositionsRef = useRef<string[]>([]);

  useEffect(() => {
    const addNotification = () => {
      const notif = orderNotifications[Math.floor(Math.random() * orderNotifications.length)];
      
      // Pick a position that isn't currently in use
      const availablePositions = positionSpots.filter(p => !usedPositionsRef.current.includes(p.id));
      if (availablePositions.length === 0) return;
      
      const position = availablePositions[Math.floor(Math.random() * availablePositions.length)];
      
      const newNotification: OrderNotification = {
        id: Date.now(),
        text: notif.text,
        type: notif.type,
        position,
      };
      
      usedPositionsRef.current = [...usedPositionsRef.current, position.id];
      setNotifications(prev => [...prev, newNotification]);
      
      // Remove after animation (4.5 seconds)
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        usedPositionsRef.current = usedPositionsRef.current.filter(id => id !== position.id);
      }, 4500);
    };

    // First notification after 3 seconds
    const initialTimeout = setTimeout(addNotification, 3000);
    
    // Then every 10 seconds (fixed interval, no randomness causing issues)
    const interval = setInterval(addNotification, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []); // Empty dependency array - only runs once

  return (
    <AnimatePresence>
      {notifications.map((notification) => {
        const Icon = typeIconMap[notification.type] || typeIconMap.default;
        const iconColor = typeColorMap[notification.type] || typeColorMap.default;
        const pos = notification.position;
        
        return (
          <motion.div
            key={notification.id}
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              x: pos.initial.x,
              y: pos.initial.y,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              y: -15,
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.23, 1, 0.32, 1], // Custom easing for smooth feel
            }}
            className="fixed z-40 pointer-events-none"
            style={pos.style}
          >
            <motion.div 
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-edst-charcoal/90 border border-edst-slate/30 backdrop-blur-xl shadow-2xl"
              animate={{ 
                boxShadow: [
                  '0 4px 20px rgba(0,0,0,0.3)',
                  '0 4px 30px rgba(250,204,83,0.15)',
                  '0 4px 20px rgba(0,0,0,0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Icon with pulse */}
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className={`p-1.5 rounded-full bg-edst-slate/30`}
              >
                <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
              </motion.div>
              
              {/* Text */}
              <span className="text-sm text-edst-white font-medium whitespace-nowrap">{notification.text}</span>
              
              {/* Live indicator */}
              <div className="flex items-center gap-1">
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full bg-edst-online"
                  animate={{ 
                    scale: [1, 1.4, 1], 
                    opacity: [1, 0.6, 1] 
                  }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
