'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, Zap, Crown, Users, Newspaper, Megaphone, ArrowRight, Music, MessageSquare, X, Send, Dumbbell } from 'lucide-react';
import { useGoldBurst, GoldBurstCanvas } from '@/components/Confetti';
import { useSponsor } from '@/app/providers/SponsorProvider';

type PlanCategory = 'organic' | 'bundles' | 'community' | 'pr' | 'ads' | 'fitness';

const categories = [
  { id: 'organic', label: 'Organic', icon: Zap },
  { id: 'bundles', label: 'Bundles', icon: Crown },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'pr', label: 'PR', icon: Newspaper },
  { id: 'ads', label: 'Ads', icon: Megaphone },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell },
];

const plans: Record<PlanCategory, Array<{
  name: string;
  planId: number;
  price: number;
  period?: string;
  popular?: boolean;
  features: string[];
  highlight?: string;
  category?: 'music' | 'business';
  isCustom?: boolean;
  originalPrice?: number;
}>> = {
  organic: [
    {
      name: 'Pro',
      planId:226,
      price: 159,
      features: [
        '500+ New Followers',
        '150+ Likes/Post',
        '1.5K+ Views/Post',
        '15-25+ Saves & Shares/Post',
        'Online Biz Portal Access',
        'Exclusive Community',
      ],
    },
    {
      name: 'Edge',
      planId:280,
      price: 199,
      popular: true,
      highlight: 'Most Popular',
      features: [
        '1,000+ New Followers',
        '500+ Likes/Post',
        '5K+ Views/Post',
        '50-100+ Saves & Shares/Post',
        'Online Biz Portal Access',
        'Exclusive Community',
      ],
    },
    {
      name: 'Prime',
      planId:281,
      price: 299,
      highlight: 'Best Value',
      features: [
        '5,000+ New Followers',
        '1,000+ Likes/Post',
        '10K+ Views/Post',
        '100-300+ Saves & Shares/Post',
        'Online Biz Portal Access',
        'Exclusive Community',
      ],
    },
    {
      name: 'Gold',
      planId:282,
      price: 499,
      highlight: 'Power Pick',
      features: [
        '10,000+ New Followers',
        '3,000+ Likes/Post',
        '30K+ Views/Post',
        '300-500+ Saves & Shares/Post',
        'Online Biz Portal Access',
        'Exclusive Community',
      ],
    },
    {
      name: 'Platinum',
      planId:283,
      price: 999,
      highlight: 'Ultimate',
      features: [
        '25,000+ New Followers',
        '5,000+ Likes/Post',
        '50K+ Views/Post',
        '500-1K+ Saves & Shares/Post',
        'Online Biz Portal Access',
        'Priority Support',
      ],
    },
  ],
  bundles: [
    // Music Bundles (left side)
    {
      name: 'All Access',
      planId:53,
      price: 297,
      category: 'music',
      popular: true,
      highlight: 'Music Starter',
      features: [
        'Organic Pro Package',
        'Video Marketing',
        'Playlist Pitching',
        'Music Career Portal',
        'Exclusive Community',
      ],
    },
    {
      name: 'Industry',
      planId:56,
      price: 997,
      category: 'music',
      highlight: 'Full Power',
      features: [
        'Organic Gold Package',
        'Video Marketing Elite',
        'Premium Playlisting',
        'Music Career Portal',
        'Priority Support',
      ],
    },
    // Business Bundles (right side)
    {
      name: 'Growth Bundle',
      planId:300,
      price: 497,
      category: 'business',
      features: [
        'Organic Prime Package',
        '1 Business PR Release',
        '10K+ Followers',
        'Online Biz Portal',
        'Exclusive Community',
      ],
    },
    {
      name: 'Serious Bundle',
      planId:301,
      price: 1497,
      category: 'business',
      popular: true,
      highlight: 'Best Value',
      features: [
        'Organic Gold Package',
        'Premium Monthly PR',
        '25K+ Followers/mo',
        'Online Biz Portal',
        'Priority Support',
      ],
    },
  ],
  community: [
    {
      name: 'Monthly',
      planId:30,
      price: 97,
      features: [
        'Engagement Groups',
        'Algorithm Boosting',
        'Organic Growth',
        'Daily Coaching',
      ],
    },
    {
      name: 'Annually',
      planId:221,
      price: 797,
      period: '/year',
      popular: true,
      highlight: 'Best Value',
      features: [
        '12 Months Access',
        'Save $367',
        'Priority Support',
        'Exclusive Content',
      ],
    },
    {
      name: '2 Year',
      planId:222,
      price: 1497,
      period: '/2yr',
      highlight: 'Best Deal',
      features: [
        '24 Months Access',
        'Save $831',
        'Exclusive Community',
        'Exclusive Marketplace',
      ],
    },
  ],
  pr: [
    {
      name: 'Starter',
      planId:306,
      price: 197,
      features: [
        'Community Access',
        '2 Articles/mo',
        '30+ Publications',
        'Music/Entertainment/Business',
      ],
    },
    {
      name: 'Premium',
      planId:307,
      price: 797,
      popular: true,
      highlight: 'Most Popular',
      features: [
        'Community Access',
        '2 Articles/mo',
        '1 Standard + 1 Premium',
        'Yahoo Finance, MSN, etc.',
      ],
    },
    {
      name: 'Custom',
      planId:2,
      price: 1000,
      highlight: 'Enterprise',
      isCustom: true,
      features: [
        'Hundreds of Publications',
        'Custom Package',
        'Premium Placements',
        'Dedicated Support',
      ],
    },
  ],
  ads: [
    {
      name: 'Music Ads',
      planId:302,
      price: 399,
      popular: true,
      highlight: 'For Artists',
      features: [
        '$399/mo Management Fee',
        'Grow Monthly Listeners',
        'Meta Ads Optimized',
        'Min. $600/mo Ad Spend',
        '$1K+ Total Budget',
      ],
    },
    {
      name: 'Business Ads',
      planId:303,
      price: 999,
      highlight: 'Limited Time',
      originalPrice: 1499,
      features: [
        'Full Ad Management',
        'Lead Generation',
        'Sales & Conversions',
        'All Major Platforms',
        'Dedicated Strategist',
      ],
    },
  ],
  fitness: [
    {
      name: 'Fit Biz Community',
      planId:304,
      price: 129,
      period: '/mo',
      features: [
        'EDST Fit Biz Coaching',
        'Exclusive Fit Biz Community',
        '9,000+ Member Engagement Group',
        '20+ Short-Form Templates/Month',
        'Weekly Group Coaching Calls',
        '24/7 Text Support',
        'Dedicated Coach',
      ],
    },
    {
      name: 'Fit Biz VIP',
      planId:305,
      price: 1950,
      period: ' one-time',
      popular: true,
      highlight: 'Best Value',
      features: [
        'Everything in Community, plus:',
        '2x 1:1 Calls Per Month',
        'Bi-Weekly Personal Coaching',
        'Priority Support',
        '6-Month Program',
        'Accelerated Growth Path',
      ],
    },
  ],
};

// Organic Plan Card Component
const OrganicPlanCard = ({ plan, index, isPremium = false ,sponsor }: { plan: typeof plans.organic[0], index: number, isPremium?: boolean , sponsor:string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className={`relative rounded-xl border transition-all ${isPremium ? 'p-6' : 'p-5'} ${
      plan.popular
        ? 'bg-edst-gold/5 border-edst-gold/40 shadow-lg shadow-edst-gold/5'
        : isPremium 
          ? 'bg-edst-charcoal/50 border-edst-gold/20 hover:border-edst-gold/40'
          : 'bg-edst-charcoal/40 border-edst-slate/20 hover:border-edst-gold/30'
    }`}
  >
    {/* Badge */}
    {plan.highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className={`px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${
          plan.popular 
            ? 'bg-edst-gold text-edst-black' 
            : 'bg-edst-charcoal border border-edst-gold/30 text-edst-gold'
        }`}>
          {plan.highlight}
        </span>
      </div>
    )}

    {/* Plan name */}
    <h3 className={`font-bold text-edst-white mt-2 ${isPremium ? 'text-xl' : 'text-lg'}`}>{plan.name}</h3>

    {/* Price */}
    <div className="mb-4 flex items-baseline gap-1">
      <span className={`font-heading font-bold text-edst-white ${isPremium ? 'text-4xl' : 'text-3xl'}`}>${plan.price}</span>
      <span className="text-edst-silver text-xs">/mo</span>
    </div>

    {/* Features */}
    <ul className={`mb-6 ${isPremium ? 'space-y-3' : 'space-y-2'}`}>
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className={`text-edst-gold mt-1 flex-shrink-0 ${isPremium ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
          <span className={`text-edst-light leading-relaxed ${isPremium ? 'text-sm' : 'text-xs'}`}>{feature}</span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    {/* <motion.a
      href={`/checkout?plan=${plan.name.toLowerCase()}&price=${plan.price}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all ${
        isPremium ? 'px-5 py-3 text-sm' : 'px-4 py-2.5 text-xs'
      } ${
        plan.popular
          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
      }`}
    >
      Get Started
      <ArrowRight className={isPremium ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
    </motion.a> */}
    <motion.a
      href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=${plan.planId}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all ${
        isPremium ? 'px-5 py-3 text-sm' : 'px-4 py-2.5 text-xs'
      } ${
        plan.popular
          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
      }`}
    >
      Get Started
      <ArrowRight className={isPremium ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
    </motion.a>
  </motion.div>
);

// Bundle Card Component
const BundleCard = ({ plan, index , sponsor }: { plan: typeof plans.bundles[0], index: number , sponsor :string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className={`relative p-5 rounded-xl border transition-all ${
      plan.popular
        ? 'bg-edst-gold/5 border-edst-gold/40 shadow-lg shadow-edst-gold/5'
        : 'bg-edst-charcoal/40 border-edst-slate/20 hover:border-edst-gold/30'
    }`}
  >
    {plan.highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className={`px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${
          plan.popular 
            ? 'bg-edst-gold text-edst-black' 
            : 'bg-edst-charcoal border border-edst-gold/30 text-edst-gold'
        }`}>
          {plan.highlight}
        </span>
      </div>
    )}
    <h3 className="text-lg font-bold text-edst-white mt-2">{plan.name}</h3>
    <div className="mb-4 flex items-baseline gap-1">
      <span className="text-3xl font-heading font-bold text-edst-white">${plan.price}</span>
      <span className="text-edst-silver text-xs">/mo</span>
    </div>
    <ul className="space-y-2 mb-6">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="w-3.5 h-3.5 text-edst-gold mt-1 flex-shrink-0" />
          <span className="text-xs text-edst-light leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
    {/* <motion.a
      href={`/checkout?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}&price=${plan.price}&category=bundle`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
        plan.popular
          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
      }`}
    >
      Get Started
      <ArrowRight className="w-3.5 h-3.5" />
    </motion.a> */}

    <motion.a
      href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=${plan.planId}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
        plan.popular
          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
      }`}
    >
      Get Started
      <ArrowRight className="w-3.5 h-3.5" />
    </motion.a>

    
  </motion.div>
);

// Fitness Plan Section Component with VIP payment toggle
const FitnessPlanSection = () => {
  const [vipPaymentType, setVipPaymentType] = useState<'onetime' | 'monthly'>('onetime');
  const sponsor = useSponsor();
  return (
    <motion.div
      key="fitness"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      {/* Fitness Header */}
      <div className="text-center mb-10">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edst-gold/10 border border-edst-gold/20 mb-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Dumbbell className="w-4 h-4 text-edst-gold" />
          <span className="text-sm text-edst-gold font-medium">EDST Fit Biz</span>
        </motion.div>
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-edst-white mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Fit Biz Plans
        </motion.h3>
        <motion.p 
          className="text-edst-silver max-w-xl mx-auto text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Coaching, community, and content systems to help fitness trainers grow online and earn $5K–$10K/month.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Community Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          whileHover={{ y: -6 }}
          className="relative p-6 rounded-2xl border-2 transition-all bg-edst-charcoal/40 border-edst-slate/30 hover:border-edst-gold/40"
        >
          <h3 className="text-2xl font-bold text-edst-white mb-2">Fit Biz Community</h3>
          <div className="mb-5 flex items-baseline gap-2">
            <span className="text-4xl font-heading font-bold text-edst-white">$129</span>
            <span className="text-edst-silver">/mo</span>
          </div>
          <ul className="space-y-3 mb-6">
            {[
              'EDST Fit Biz Coaching',
              'Exclusive Fit Biz Community',
              '9,000+ Member Engagement Group',
              '20+ Short-Form Templates/Month',
              'Weekly Group Coaching Calls',
              '24/7 Text Support',
              'Dedicated Coach',
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-edst-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-edst-light">{feature}</span>
              </li>
            ))}
          </ul>
          {/* <motion.a
            href="/checkout?plan=fit-biz-community&price=129&category=fitness"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black"
          >
            Join Fit Biz Community
            <ArrowRight className="w-4 h-4" />
          </motion.a> */}
          <motion.a
            href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=304`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black"
          >
            Join Fit Biz Community
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          
        </motion.div>

        {/* VIP Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ y: -6 }}
          className="relative p-6 rounded-2xl border-2 transition-all bg-edst-gold/5 border-edst-gold/50 shadow-xl shadow-edst-gold/10"
        >
          {/* Badge */}
          <div className="absolute -top-3 right-4">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-edst-gold text-edst-black">
              Best Value
            </span>
          </div>

          <h3 className="text-2xl font-bold text-edst-white mb-2">Fit Biz VIP</h3>
          
          {/* Price Display */}
          <div className="mb-2">
            {vipPaymentType === 'onetime' ? (
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-heading font-bold text-edst-white">$1,950</span>
                <span className="text-edst-silver">one-time</span>
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-heading font-bold text-edst-white">$379</span>
                <span className="text-edst-silver">/mo × 6</span>
              </div>
            )}
          </div>
          
          <p className="text-xs text-edst-gold mb-3">6-month program • More 1:1 support</p>
          
          {/* Payment Toggle - subtle */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setVipPaymentType('onetime')}
              className={`text-xs px-2.5 py-1 rounded transition-all ${
                vipPaymentType === 'onetime'
                  ? 'bg-edst-gold/20 text-edst-gold'
                  : 'text-edst-silver/60 hover:text-edst-silver'
              }`}
            >
              One time
            </button>
            <button
              onClick={() => setVipPaymentType('monthly')}
              className={`text-xs px-2.5 py-1 rounded transition-all ${
                vipPaymentType === 'monthly'
                  ? 'bg-edst-charcoal text-edst-silver'
                  : 'text-edst-silver/40 hover:text-edst-silver/60'
              }`}
            >
              Monthly
            </button>
          </div>

          <ul className="space-y-3 mb-6">
            {[
              'Everything in Community, plus:',
              '2x 1:1 Calls Per Month (Bi-Weekly)',
              'Personal Coaching & Accountability',
              'Priority Support',
              'Accelerated Growth Path',
              'Custom Strategy Sessions',
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-edst-gold mt-0.5 flex-shrink-0" />
                <span className={`text-sm ${i === 0 ? 'text-edst-gold font-medium' : 'text-edst-light'}`}>{feature}</span>
              </li>
            ))}
          </ul>

          {/* <motion.a
            href={vipPaymentType === 'onetime' ? '/checkout?plan=fit-biz-vip&price=1950&category=fitness' : '/checkout?plan=fit-biz-vip-monthly&price=379&category=fitness&billing=monthly'
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all bg-edst-gold text-edst-black hover:bg-edst-gold-light"
          >
            Join Fit Biz VIP
            <ArrowRight className="w-4 h-4" />
          </motion.a> */}

          <motion.a
            href={vipPaymentType === 'onetime' ? `https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=305` : `https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=304`
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all bg-edst-gold text-edst-black hover:bg-edst-gold-light"
          >
            Join Fit Biz VIP
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          
        </motion.div>
      </div>

      {/* Learn More Link */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.a 
          href="/fitness"
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 text-sm text-edst-gold hover:text-edst-gold-light transition-colors cursor-pointer"
        >
          Learn more about Fit Biz
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

// Live activity counter (25-125 range)
const useActivityCounter = () => {
  const [count, setCount] = useState(42);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Random walk between 25 and 125
      setCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + change;
        if (next < 25) return 25 + Math.floor(Math.random() * 5);
        if (next > 125) return 125 - Math.floor(Math.random() * 5);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return count;
};

// Community groups data
const communityGroups = [
  { name: 'Emoji', members: 6586, online: 44, emoji: '🔥' },
  { name: 'Platinum', members: 4892, online: 42, emoji: '💎' },
  { name: 'Gold', members: 3847, online: 38, emoji: '🏆' },
  { name: 'Artists', members: 2100, online: 24, emoji: '🎵' },
  { name: 'Fitness', members: 1850, online: 19, emoji: '💪' },
  { name: 'Business', members: 1620, online: 17, emoji: '💼' },
];

const allGroupNames = [
  'Emoji', 'Platinum', 'Gold', 'Artists', 'Fitness', 'Business',
  '50K+', 'YouTube', 'TikTok', 'Spotify', 'Verified', 'Lifestyle', '100K+'
];

// Community Spotlight Widget - Simplified & Exciting
const CommunitySpotlight = () => {
  const [fastTick, setFastTick] = useState(0); // For activity feed (1.2s)
  const [slowTick, setSlowTick] = useState(0); // For group cards (2.5s)
  const [onlineCount, setOnlineCount] = useState(147);
  
  const activityMessages = [
    '🔗 Link dropped',
    '❤️ Got love',
    '🔥 Engaged',
    '✨ New member',
    '💬 Connected',
    '⭐ Post boosted',
    '🚀 Going viral',
    '💯 Full send',
  ];

  // Fast timer for activity feed - every 1.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setFastTick(prev => prev + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Slow timer for group cards - every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setSlowTick(prev => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Online count fluctuation - every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(140, Math.min(158, prev + change));
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Derived values - different speeds for different elements
  const pulseIndex = slowTick % communityGroups.length; // Slow - every 2.5s
  const glowIntensity = Math.floor(slowTick / 2) % 3; // Even slower
  const activityIndex = fastTick % activityMessages.length; // Fast - every 1.2s
  const recentActivity = [
    activityMessages[activityIndex],
    activityMessages[(activityIndex + 3) % activityMessages.length],
    activityMessages[(activityIndex + 5) % activityMessages.length],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edst-gold/10 border border-edst-gold/20 mb-4"
          animate={{ borderColor: ['rgba(250,204,83,0.2)', 'rgba(250,204,83,0.4)', 'rgba(250,204,83,0.2)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-4 h-4 text-edst-gold" />
          </motion.div>
          <span className="text-sm text-edst-gold font-medium">Included With Every Plan</span>
        </motion.div>
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-edst-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          The Engagement Community
        </motion.h3>
        <motion.p 
          className="text-edst-silver max-w-lg mx-auto text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="text-edst-white">Drop your link.</span> Get real engagement from <span className="text-edst-gold">real people</span>. Network with creators who actually care.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-edst-charcoal/70 via-edst-charcoal/50 to-edst-charcoal/70 border border-edst-gold/20 overflow-hidden">
          {/* Animated background glows - continuous movement */}
          <motion.div 
            className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-edst-gold/[0.03] blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1.1, 1.3, 1],
              x: [0, 20, -10, 15, 0],
              opacity: [0.3, 0.5, 0.4, 0.6, 0.3] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-edst-gold/[0.02] blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.15, 0.95, 1.2],
              x: [0, -15, 10, -20, 0],
              opacity: [0.2, 0.4, 0.3, 0.5, 0.2] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          <div className="relative z-10 p-8 md:p-10">
            {/* Top Bar - Live Status */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
                  animate={{ borderColor: ['rgba(34,197,94,0.2)', 'rgba(34,197,94,0.4)', 'rgba(34,197,94,0.2)'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.span 
                    className="w-2.5 h-2.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.span 
                    key={onlineCount}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-green-400 font-semibold"
                  >
                    {onlineCount} members online
                  </motion.span>
                </motion.div>
              </div>
              
              {/* Live Activity Feed - constant movement */}
              <div className="hidden md:flex items-center gap-2">
                {recentActivity.map((activity, i) => (
                  <motion.span
                    key={i}
                    animate={{ 
                      opacity: i === 0 ? 1 : 0.4 - (i * 0.1),
                      scale: i === 0 ? [1, 1.02, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                      i === 0 
                        ? 'bg-edst-gold/20 text-edst-gold border border-edst-gold/30' 
                        : 'bg-edst-charcoal/50 text-edst-silver/50'
                    }`}
                  >
                    {activity}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left - Value Props - BIGGER */}
              <div className="md:col-span-2 space-y-6">
                <h4 className="text-xl font-bold text-edst-white">How It Works</h4>
                <div className="space-y-5">
                  <motion.div 
                    className="flex items-start gap-4"
                    animate={{ x: glowIntensity === 0 ? [0, 2, 0] : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-edst-gold/20 flex items-center justify-center text-base font-bold text-edst-gold flex-shrink-0"
                      animate={{ scale: glowIntensity === 0 ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      1
                    </motion.div>
                    <div>
                      <p className="text-base font-semibold text-edst-white mb-1">Drop your link</p>
                      <p className="text-sm text-edst-silver">Share your latest post in any group</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4"
                    animate={{ x: glowIntensity === 1 ? [0, 2, 0] : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-edst-gold/20 flex items-center justify-center text-base font-bold text-edst-gold flex-shrink-0"
                      animate={{ scale: glowIntensity === 1 ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      2
                    </motion.div>
                    <div>
                      <p className="text-base font-semibold text-edst-white mb-1">Show love</p>
                      <p className="text-sm text-edst-silver">Engage with other creators' content</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4"
                    animate={{ x: glowIntensity === 2 ? [0, 2, 0] : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-edst-gold/20 flex items-center justify-center text-base font-bold text-edst-gold flex-shrink-0"
                      animate={{ scale: glowIntensity === 2 ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      3
                    </motion.div>
                    <div>
                      <p className="text-base font-semibold text-edst-white mb-1">Get love back</p>
                      <p className="text-sm text-edst-silver">Members engage with your content too</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right - Live Groups Preview */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {communityGroups.map((group, i) => (
                    <motion.div
                      key={group.name}
                      animate={{ 
                        borderColor: pulseIndex === i ? 'rgba(250,204,83,0.5)' : 'rgba(100,100,100,0.2)',
                        backgroundColor: pulseIndex === i ? 'rgba(250,204,83,0.08)' : 'rgba(0,0,0,0.3)',
                        scale: pulseIndex === i ? 1.02 : 1
                      }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl border"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <motion.span 
                          className="text-2xl"
                          animate={pulseIndex === i ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {group.emoji}
                        </motion.span>
                        <div className="flex items-center gap-1">
                          <motion.span 
                            className="w-2 h-2 rounded-full bg-green-500"
                            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          />
                          <span className="text-xs text-green-400 font-medium">{group.online}</span>
                        </div>
                      </div>
                      <p className="font-semibold text-edst-white">{group.name}</p>
                      <p className="text-xs text-edst-silver">{group.members.toLocaleString()} members</p>
                    </motion.div>
                  ))}
                </div>

                {/* More Groups Indicator */}
                <motion.div 
                  className="mt-4 flex items-center justify-center gap-2 flex-wrap"
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {allGroupNames.slice(6).map((name) => (
                    <span key={name} className="px-2.5 py-1 rounded-full text-xs bg-edst-charcoal/40 text-edst-silver/60 border border-edst-slate/10">
                      {name}
                    </span>
                  ))}
                  <span className="text-xs text-edst-silver/40">& more</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-10 pt-8 border-t border-edst-slate/10">
              <div className="flex items-center justify-center gap-8 md:gap-16">
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-edst-white">10K+</p>
                  <p className="text-sm text-edst-silver">Active Members</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-edst-white">10+</p>
                  <p className="text-sm text-edst-silver">Niche Groups</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold text-edst-gold"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ∞
                  </motion.p>
                  <p className="text-sm text-edst-silver">Unlimited Use</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-edst-white">24/7</p>
                  <p className="text-sm text-edst-silver">Always Active</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PricingTiers = () => {
  const sponsor = useSponsor();
  console.log("sponosr",sponsor)
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('organic');
  const activityCount = useActivityCounter();
  const { bursts, triggerBurst } = useGoldBurst();
  
  // PR Inquiry Modal
  const [showPRModal, setShowPRModal] = useState(false);
  const [prFormData, setPRFormData] = useState({ name: '', email: '', phone: '', pressType: '', goals: '', budget: '' });
  const [prSubmitting, setPRSubmitting] = useState(false);
  const [prSubmitted, setPRSubmitted] = useState(false);

  const handlePlanClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  const handlePRSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPRSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPRSubmitting(false);
    setPRSubmitted(true);
    setTimeout(() => {
      setShowPRModal(false);
      setPRSubmitted(false);
      setPRFormData({ name: '', email: '', phone: '', pressType: '', goals: '', budget: '' });
    }, 3000);
  };



  return (
    <section id="plans" className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-edst-dark" />
      
      {/* Subtle background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.04) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        {/* Live activity badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edst-charcoal/50 border border-edst-slate/20">
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-edst-online"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-edst-silver">
              <motion.span 
                key={activityCount}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-edst-gold font-mono font-medium"
              >
                {activityCount}
              </motion.span>
              {' '}people viewing
            </span>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 rounded-xl bg-edst-charcoal/50 border border-edst-slate/20">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as PlanCategory)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeCategory === cat.id
                    ? 'bg-edst-gold text-edst-black shadow-lg'
                    : 'text-edst-silver hover:text-edst-white hover:bg-edst-slate/30'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          {activeCategory === 'bundles' ? (
            // Special layout for Bundles - Music vs Business
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {/* Music Column */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Music className="w-4 h-4 text-edst-gold" />
                  <span className="text-sm font-bold text-edst-gold uppercase tracking-wider">Music</span>
                </div>
                <div className="space-y-4">
                  {plans.bundles.filter(p => p.category === 'music').map((plan, index) => (
                    <BundleCard key={plan.name} plan={plan} index={index} sponsor={sponsor || 'EDST'}/>
                  ))}
                </div>
              </div>
              
              {/* Business Column */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Crown className="w-4 h-4 text-edst-gold" />
                  <span className="text-sm font-bold text-edst-gold uppercase tracking-wider">Business</span>
                </div>
                <div className="space-y-4">
                  {plans.bundles.filter(p => p.category === 'business').map((plan, index) => (
                    <BundleCard key={plan.name} plan={plan} index={index} sponsor={sponsor || 'EDST'}/>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : activeCategory === 'ads' ? (
            // Special layout for Ads - side by side with headers
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plans.ads.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -6 }}
                    className={`relative p-6 rounded-2xl border-2 transition-all ${
                      plan.popular
                        ? 'bg-edst-gold/5 border-edst-gold/50 shadow-xl shadow-edst-gold/10'
                        : 'bg-edst-charcoal/40 border-edst-slate/30 hover:border-edst-gold/40'
                    }`}
                  >
                    {/* Header label */}
                    <div className="flex items-center gap-2 mb-3">
                      {index === 0 ? <Music className="w-4 h-4 text-edst-gold" /> : <Crown className="w-4 h-4 text-edst-gold" />}
                      <span className="text-xs font-bold text-edst-gold uppercase tracking-wider">
                        {index === 0 ? 'For Artists' : 'For Business'}
                      </span>
                    </div>

                    {/* Badge */}
                    {plan.highlight && (
                      <div className="absolute -top-3 right-4">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                          plan.popular 
                            ? 'bg-edst-gold text-edst-black' 
                            : 'bg-edst-charcoal border border-edst-gold/30 text-edst-gold'
                        }`}>
                          {plan.highlight}
                        </span>
                      </div>
                    )}

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-edst-white mb-2">{plan.name}</h3>

                    {/* Price */}
                    <div className="mb-5 flex items-baseline gap-2">
                      {plan.originalPrice && (
                        <span className="text-xl text-edst-silver line-through">${plan.originalPrice}</span>
                      )}
                      <span className="text-4xl font-heading font-bold text-edst-white">${plan.price}</span>
                      <span className="text-edst-silver">/mo</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-edst-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-edst-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {/* <motion.a
                      href={`/checkout?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}&price=${plan.price}&category=ads`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                        plan.popular
                          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
                          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </motion.a> */}

                    <motion.a
                      href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=${plan.planId}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                        plan.popular
                          ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
                          : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : activeCategory === 'fitness' ? (
            // Special layout for Fitness - Fit Biz plans
            <FitnessPlanSection/>
          ) : activeCategory === 'organic' ? (
          // Organic layout - 3 starter tiers on top, 2 premium tiers, then community spotlight
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Top row - 3 starter plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              {plans.organic.slice(0, 3).map((plan, index) => (
                <OrganicPlanCard key={plan.name} plan={plan} index={index} sponsor={sponsor || 'EDST'} />
              ))}
            </div>
            
            {/* Bottom row - 2 premium plans (Gold/Platinum), larger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {plans.organic.slice(3).map((plan, index) => (
                <OrganicPlanCard key={plan.name} plan={plan} index={index + 3} isPremium  sponsor={sponsor || 'EDST'}/>
              ))}
            </div>
          </motion.div>
          ) : (
          // Default grid for other categories (PR, Community)
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 ${
              plans[activeCategory].length === 3 
                ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {plans[activeCategory].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative p-5 rounded-xl border transition-all ${
                  plan.popular
                    ? 'bg-edst-gold/5 border-edst-gold/40 shadow-lg shadow-edst-gold/5'
                    : 'bg-edst-charcoal/40 border-edst-slate/20 hover:border-edst-gold/30'
                }`}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <motion.span 
                      className={`px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${
                        plan.popular 
                          ? 'bg-edst-gold text-edst-black' 
                          : 'bg-edst-charcoal border border-edst-gold/30 text-edst-gold'
                      }`}
                    >
                      {plan.highlight}
                    </motion.span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-lg font-bold text-edst-white mt-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-4 flex items-baseline gap-1">
                  {plan.originalPrice && (
                    <span className="text-lg text-edst-silver line-through mr-1">${plan.originalPrice}</span>
                  )}
                  <span className="text-3xl font-heading font-bold text-edst-white">
                    {plan.isCustom ? `$${plan.price}+` : `$${plan.price}`}
                  </span>
                  {!plan.isCustom && <span className="text-edst-silver text-xs">{plan.period || '/mo'}</span>}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 min-h-[120px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-edst-gold mt-1 flex-shrink-0" />
                      <span className="text-xs text-edst-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.isCustom ? (
                  <motion.button
                    onClick={() => setShowPRModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all bg-edst-charcoal border border-edst-gold/40 text-edst-gold hover:bg-edst-gold hover:text-edst-black"
                  >
                    Inquire
                    <MessageSquare className="w-3.5 h-3.5" />
                  </motion.button>
                ) : (
                  // <motion.a
                  //   href={`/checkout?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}&price=${plan.price}&category=${activeCategory}`}
                  //   whileHover={{ scale: 1.02 }}
                  //   whileTap={{ scale: 0.98 }}
                  //   className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                  //     plan.popular
                  //       ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
                  //       : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
                  //   }`}
                  // >
                  //   Get Started
                  //   <ArrowRight className="w-3.5 h-3.5" />
                  // </motion.a>

                  <motion.a
                    href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=${plan.planId}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                      plan.popular
                        ? 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
                        : 'bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>

                  
                )}
              </motion.div>
            ))}
          </motion.div>
          )}
        </AnimatePresence>

        {/* Community Spotlight - Always visible below all pricing tiers */}
        <CommunitySpotlight />

        {/* Bottom note - Highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-edst-charcoal/50 border border-edst-gold/20"
            animate={{ boxShadow: ['0 0 0 rgba(250,204,83,0)', '0 0 20px rgba(250,204,83,0.1)', '0 0 0 rgba(250,204,83,0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-edst-gold"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-edst-light">
              <span className="text-edst-gold font-medium">Online Biz Portal</span> + <span className="text-edst-gold font-medium">Exclusive Community</span> + <span className="text-edst-gold font-medium">Marketplace</span> included with every subscription
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkles Effect */}
      <GoldBurstCanvas bursts={bursts} />

      {/* PR Inquiry Modal */}
      <AnimatePresence>
        {showPRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !prSubmitting && setShowPRModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-edst-charcoal rounded-2xl border border-edst-slate/30 overflow-hidden"
            >
              {prSubmitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Send className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-edst-white mb-2">Request Sent!</h3>
                  <p className="text-sm text-edst-silver">Our PR team will reach out within 24 hours.</p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-edst-white">Custom PR Inquiry</h3>
                      <p className="text-sm text-edst-silver">Tell us what you're looking for</p>
                    </div>
                    <button
                      onClick={() => setShowPRModal(false)}
                      className="p-2 text-edst-silver hover:text-edst-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handlePRSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-edst-silver block mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          value={prFormData.name}
                          onChange={(e) => setPRFormData({...prFormData, name: e.target.value})}
                          placeholder="Your name"
                          className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-edst-silver block mb-1.5">Phone</label>
                        <input
                          type="tel"
                          required
                          value={prFormData.phone}
                          onChange={(e) => setPRFormData({...prFormData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                          className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-edst-silver block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={prFormData.email}
                        onChange={(e) => setPRFormData({...prFormData, email: e.target.value})}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-edst-silver block mb-1.5">What type of press are you looking for?</label>
                      <input
                        type="text"
                        required
                        value={prFormData.pressType}
                        onChange={(e) => setPRFormData({...prFormData, pressType: e.target.value})}
                        placeholder="e.g. Business publications, music blogs, news sites..."
                        className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-edst-silver block mb-1.5">Any specific goals or requests?</label>
                      <textarea
                        value={prFormData.goals}
                        onChange={(e) => setPRFormData({...prFormData, goals: e.target.value})}
                        placeholder="Tell us about your goals... (optional)"
                        rows={2}
                        className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-edst-silver block mb-1.5">Budget</label>
                      <select
                        required
                        value={prFormData.budget}
                        onChange={(e) => setPRFormData({...prFormData, budget: e.target.value})}
                        className="w-full px-3 py-2.5 bg-edst-black/50 border border-edst-slate/30 rounded-lg text-edst-white text-sm focus:border-edst-gold/50 focus:outline-none"
                      >
                        <option value="" className="bg-edst-charcoal">Select budget range</option>
                        <option value="1000-2500" className="bg-edst-charcoal">$1,000 - $2,500</option>
                        <option value="2500-5000" className="bg-edst-charcoal">$2,500 - $5,000</option>
                        <option value="5000-10000" className="bg-edst-charcoal">$5,000 - $10,000</option>
                        <option value="10000+" className="bg-edst-charcoal">$10,000+</option>
                      </select>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={prSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-edst-gold text-edst-black font-bold rounded-lg hover:bg-edst-gold-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {prSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-edst-black/30 border-t-edst-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Request
                        </>
                      )}
                    </motion.button>
                  </form>

                  <p className="text-xs text-edst-silver/60 text-center mt-4">
                    Quick form — we'll text you.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

