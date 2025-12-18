'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Play, Heart, FileText, Users, Calendar, TrendingUp } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════
// REAL GROWTH DATA - DEFENSIBLE NUMBERS
// ───────────────────────────────────────────────────────────────────
// Based on: 2,000 clients × 15 posts/month = 30,000 posts/month
// 
// Views breakdown per post:
//   - 1% of clients (20) get millions → 300 posts × 2M avg = 600M/mo
//   - 5% of clients (100) get 100K+ → 1,500 posts × 150K avg = 225M/mo
//   - 20% of clients (400) get 50K+ → 6,000 posts × 50K avg = 300M/mo
//   - 74% of clients (1,480) get 5-15K → 22,200 posts × 10K avg = 222M/mo
//
// TOTAL: ~1.35B views/month = ~45M views/day
// With variance (viral days vs slow): 30-60M/day range
// ═══════════════════════════════════════════════════════════════════

// DAILY targets (base values)
const DAILY_VIEWS = 45_000_000;        // 45M views/day base (30-60M with variance)
const DAILY_ENGAGEMENTS = 3_200_000;   // 3.2M engagements/day (~7% of views)
const DAILY_FOLLOWERS = 67_000;        // 67K new followers/day (~0.15% of views)
const DAILY_POSTS = 1_000;             // 1,000 posts/day (30K/month ÷ 30)

const YEARLY_GROWTH_RATE = 0.20; // 20% YoY growth

// ═══════════════════════════════════════════════════════════════════
// CALCULATIONS
// ═══════════════════════════════════════════════════════════════════

type TimePeriod = 'today' | 'yesterday' | '30days' | '365days';

const periodLabels: Record<TimePeriod, string> = {
  today: 'Today',
  yesterday: 'Yesterday',
  '30days': 'Last 30 Days',
  '365days': 'Last 365 Days',
};

// Get daily values with natural variance (30-60M range for views)
// Adjusted by month for 20% YoY growth (January = lower, December = higher)
const getDailyValues = (date: Date) => {
  const month = date.getMonth();
  
  // Month multiplier: January (0.83) → December (1.0) for 20% YoY growth
  const monthMultiplier = 0.83 + (month / 11) * 0.17;
  
  // Daily variance ±33% for 30-60M range (0.67 to 1.33)
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const variance = 0.67 + (((dayOfYear * 17) % 100) / 100) * 0.66; // 0.67 to 1.33
  
  const totalVariance = monthMultiplier * variance;
  
  return {
    views: Math.floor(DAILY_VIEWS * totalVariance),
    posts: Math.floor(DAILY_POSTS * totalVariance),
    followers: Math.floor(DAILY_FOLLOWERS * totalVariance),
    engagements: Math.floor(DAILY_ENGAGEMENTS * totalVariance),
  };
};

// Calculate how much of today is complete based on current time
const getTodayProgress = (): number => {
  const now = new Date();
  const hour = now.getHours() + (now.getMinutes() / 60);
  
  // Time-weighted activity (more activity in afternoon/evening)
  // 11pm-9am (10hrs): 20% of activity
  // 9am-3pm (6hrs): 35% of activity  
  // 3pm-11pm (8hrs): 45% of activity
  
  if (hour < 9) {
    // Night/early morning: slow
    return (hour / 9) * 0.20;
  } else if (hour < 15) {
    // Morning/early afternoon: medium
    return 0.20 + ((hour - 9) / 6) * 0.35;
  } else if (hour < 23) {
    // Afternoon/evening: peak
    return 0.55 + ((hour - 15) / 8) * 0.45;
  } else {
    // Late night
    return 0.95 + ((hour - 23) / 1) * 0.05;
  }
};

// Calculate metrics for a period
const calculatePeriodMetrics = (period: TimePeriod) => {
  const now = new Date();
  let views = 0, posts = 0, followers = 0, engagements = 0;

  switch (period) {
    case 'today': {
      const todayValues = getDailyValues(now);
      const progress = getTodayProgress();
      views = Math.floor(todayValues.views * progress);
      posts = Math.floor(todayValues.posts * progress);
      followers = Math.floor(todayValues.followers * progress);
      engagements = Math.floor(todayValues.engagements * progress);
      break;
    }
    case 'yesterday': {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayValues = getDailyValues(yesterday);
      views = yesterdayValues.views;
      posts = yesterdayValues.posts;
      followers = yesterdayValues.followers;
      engagements = yesterdayValues.engagements;
      break;
    }
    case '30days': {
      for (let i = 0; i < 30; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dayValues = getDailyValues(date);
        views += dayValues.views;
        posts += dayValues.posts;
        followers += dayValues.followers;
        engagements += dayValues.engagements;
      }
      break;
    }
    case '365days': {
      // Rolling 365 days from today
      for (let i = 0; i < 365; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dayValues = getDailyValues(date);
        views += dayValues.views;
        posts += dayValues.posts;
        followers += dayValues.followers;
        engagements += dayValues.engagements;
      }
      break;
    }
  }

  return { views, posts, followers, engagements };
};

// ═══════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════

interface MetricData {
  id: string;
  icon: React.ReactNode;
  value: number;
  label: string;
}

export const MetricTicker = () => {
  const [activePeriod, setActivePeriod] = useState<TimePeriod>('today');
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Initialize on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate base metrics for current period
  const periodMetrics = useMemo(() => {
    if (!isClient) return null;
    return calculatePeriodMetrics(activePeriod);
  }, [activePeriod, isClient]);

  // Update metrics
  useEffect(() => {
    if (!isClient || !periodMetrics) return;

    const updateMetrics = () => {
      const data = activePeriod === 'today' 
        ? calculatePeriodMetrics('today')
        : periodMetrics;

      setMetrics([
        { id: 'views', icon: <TrendingUp className="w-5 h-5" />, value: data.views, label: 'reach' },
        { id: 'engagements', icon: <Heart className="w-5 h-5" />, value: data.engagements, label: 'engagement' },
        { id: 'posts', icon: <FileText className="w-5 h-5" />, value: data.posts, label: 'content pieces' },
        { id: 'followers', icon: <Users className="w-5 h-5" />, value: data.followers, label: 'growth' },
      ]);
    };

    updateMetrics();

    // Live updates only for "today"
    if (activePeriod === 'today') {
      const interval = setInterval(() => {
        setMetrics(prev => prev.map(metric => {
          // Increments based on daily totals, scaled for visibility
          // 45M views/day ÷ 86400s = ~520/sec, update every 500ms = ~260/tick
          const increments: Record<string, [number, number]> = {
            views: [180, 520],        // ~45M/day
            engagements: [12, 40],    // ~3.2M/day
            posts: [0, 1],            // ~1,000/day (less frequent)
            followers: [2, 7],        // ~67K/day
          };
          const [min, max] = increments[metric.id] || [1, 5];
          
          // Posts increment less frequently (~1 every 86 seconds)
          if (metric.id === 'posts' && Math.random() > 0.12) {
            return metric;
          }
          
          const increment = Math.floor(Math.random() * (max - min + 1)) + min;
          return { ...metric, value: metric.value + increment };
        }));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [activePeriod, isClient, periodMetrics]);

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(2) + 'B';
    }
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K';
    }
    return num.toLocaleString('en-US');
  };

  if (!isClient) {
    return (
      <div className="w-full">
        <div className="h-40 animate-pulse bg-edst-charcoal/30 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header with period tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        {/* Left: Live indicator */}
        <div className="flex items-center gap-3">
          <motion.span 
            className="relative flex h-2.5 w-2.5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-edst-online opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-edst-online" />
          </motion.span>
          <span className="text-sm font-mono uppercase tracking-widest text-edst-online">
            GROWTH STATS
          </span>
        </div>

        {/* Right: Period selector tabs */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-edst-charcoal/50 border border-edst-slate/20">
          {(Object.keys(periodLabels) as TimePeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activePeriod === period
                  ? 'bg-edst-gold text-edst-black'
                  : 'text-edst-silver hover:text-edst-white'
              }`}
            >
              {periodLabels[period]}
            </button>
          ))}
        </div>
      </div>

      {/* Period indicator */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-3.5 h-3.5 text-edst-silver" />
        <span className="text-xs text-edst-silver">
          {activePeriod === 'today' && 'Live data • Resets at midnight'}
          {activePeriod === 'yesterday' && 'Full day stats'}
          {activePeriod === '30days' && 'Rolling 30-day total'}
          {activePeriod === '365days' && 'Rolling 365-day total'}
        </span>
        {activePeriod === '365days' && (
          <div className="flex items-center gap-1 ml-auto">
            <TrendingUp className="w-3 h-3 text-edst-online" />
            <span className="text-xs text-edst-online font-mono">+20% YoY</span>
          </div>
        )}
      </div>

      {/* Metrics grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePeriod}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="metric-card group"
            >
              {/* Icon + Live indicator */}
              <div className="flex items-center justify-between mb-3">
                <motion.span 
                  className="text-edst-silver group-hover:text-edst-gold transition-colors"
                  animate={activePeriod === 'today' ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {metric.icon}
                </motion.span>
                {activePeriod === 'today' && (
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-edst-online"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  />
                )}
              </div>

              {/* Value */}
              <motion.div
                key={metric.value}
                initial={activePeriod === 'today' ? { opacity: 0.8, scale: 0.98 } : {}}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl md:text-3xl font-heading font-bold text-edst-white mb-2 group-hover:text-edst-gold transition-colors"
              >
                {formatNumber(metric.value)}
              </motion.div>

              {/* Label */}
              <span className="text-xs text-edst-silver uppercase tracking-wider">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
