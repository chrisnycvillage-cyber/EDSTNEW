'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * CASE STUDIES PAGE - Real Client Outcomes
 * ───────────────────────────────────────────────────────────────────
 * Anonymized case studies with realistic, defensible metrics
 * ═══════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { 
  ArrowRight, 
  TrendingUp, 
  Music,
  Dumbbell,
  Briefcase,
  ShoppingBag,
  Palette,
  Star,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: Star },
  { id: 'music', label: 'Music & Artists', icon: Music },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell },
  { id: 'business', label: 'Business', icon: Briefcase },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'creative', label: 'Creators', icon: Palette },
];

// Realistic, defensible case studies with believable metrics
const caseStudies = [
  // === MUSIC CASE STUDIES ===
  {
    id: 1,
    category: 'music',
    clientType: 'Independent Artist (Major Rollout)',
    title: 'Scaled audience + streaming with a full rollout',
    spend: '$30,000',
    duration: '6 months',
    serviceCategory: 'Music / Viral Marketing',
    metrics: [
      { label: 'Monthly Listeners', before: '2,000', after: '25,000' },
      { label: 'IG Followers', before: '25,000', after: '125,000+' },
      { label: 'UGC Views (Their Sound)', before: '—', after: '50M+ views' },
    ],
    credibilityLine: 'Measured across EDST distribution + campaign tracking.',
    services: ['Paid Campaigns', 'Sound Seeding', 'Viral Distribution', 'PR'],
  },
  {
    id: 2,
    category: 'music',
    clientType: 'Developing Artist',
    title: 'Built credibility + consistent momentum over time',
    spend: '$199/mo',
    duration: '18 months',
    serviceCategory: 'Music / Organic Edge',
    metrics: [
      { label: 'IG Followers', before: '1,500', after: '75,000' },
      { label: 'Shows Booked', before: '0/mo', after: '3–4/mo' },
      { label: 'Streams/Month', before: '5,000', after: '50,000' },
    ],
    credibilityLine: 'Growth compounded through consistency + ongoing promotion.',
    services: ['Organic Growth', 'Content Strategy', 'Playlist Pitching', 'Brand Building'],
  },

  // === FITNESS CASE STUDIES ===
  {
    id: 3,
    category: 'fitness',
    clientType: 'Online Fitness Coach',
    title: 'Scaled to full-time online coaching business',
    spend: '$299/mo',
    duration: '24 months',
    serviceCategory: 'Fitness / FitBiz Program',
    metrics: [
      { label: 'IG Followers', before: '4,200', after: '380,000' },
      { label: 'Online Clients', before: '7', after: '250+' },
      { label: 'DM Inquiries/Week', before: '1–2', after: '20–30+' },
    ],
    credibilityLine: 'Client transitioned to full-time online coaching.',
    services: ['Brand Building', 'Content Strategy', 'DM Engagement', 'Lead Gen'],
  },
  {
    id: 4,
    category: 'fitness',
    clientType: 'Gym Owner (Local Business)',
    title: 'Grew local following and membership pipeline',
    spend: '$199/mo',
    duration: '10 months',
    serviceCategory: 'Fitness / FitBiz + Campaign',
    metrics: [
      { label: 'Local IG Followers', before: '—', after: '12,000' },
      { label: 'Monthly Leads', before: '—', after: '25–40' },
      { label: 'New Members (Attributed)', before: '—', after: '85' },
    ],
    credibilityLine: 'Leads tracked via DM and link-in-bio attribution.',
    services: ['Local Marketing', 'Content Creation', 'Community Building', 'Reputation'],
  },

  // === BUSINESS CASE STUDIES ===
  {
    id: 5,
    category: 'business',
    clientType: 'Real Estate Agent',
    title: 'Built personal brand that generates inbound leads',
    spend: '$499/mo',
    duration: '14 months',
    serviceCategory: 'Business / Business Bundle',
    highlight: '10+ deals influenced',
    metrics: [
      { label: 'IG Followers', before: '18,000', after: '118,000' },
      { label: 'Deals from Social (Monthly)', before: '0', after: '1' },
      { label: 'Deals/Year from Social', before: '—', after: '1–2' },
    ],
    credibilityLine: '9 closings in 14 months attributed via direct social inquiries.',
    services: ['Personal Branding', 'Video Content', 'Local Visibility', 'Lead Gen'],
  },
  {
    id: 6,
    category: 'business',
    clientType: 'Publicly Traded Company',
    title: 'Viral Ambush Campaign for brand awareness',
    spend: '$100,000',
    duration: '30 days',
    serviceCategory: 'Brand / Viral Ambush Campaign',
    metrics: [
      { label: 'Total Reach', before: '—', after: '110M+' },
      { label: 'Asset Placements', before: '—', after: '200+' },
      { label: 'Outcome', before: '—', after: 'Substantial visibility lift' },
    ],
    credibilityLine: 'Placements across posts, media, Reddit, and more.',
    services: ['Viral Distribution', 'Media Seeding', 'Brand Awareness', 'Asset Deployment'],
  },

  // === E-COMMERCE CASE STUDIES ===
  {
    id: 7,
    category: 'ecommerce',
    clientType: 'Energy Drink Brand',
    title: 'UGC campaign drove visibility and engagement',
    spend: '$10,000',
    duration: 'Campaign',
    serviceCategory: 'E-Commerce / UGC Campaign',
    metrics: [
      { label: 'Total Views', before: '—', after: '10M+' },
      { label: 'New Followers', before: '—', after: '+14,000' },
      { label: 'Content Pieces Deployed', before: '—', after: '165+' },
    ],
    credibilityLine: 'Attribution focused on visibility and engagement metrics.',
    services: ['UGC Campaigns', 'Content Creation', 'Viral Seeding', 'Influencer Deployment'],
  },
  {
    id: 8,
    category: 'ecommerce',
    clientType: 'Apparel Brand',
    title: 'Built engaged audience through organic growth',
    spend: '$499/mo',
    duration: 'Ongoing',
    serviceCategory: 'E-Commerce / Organic Growth',
    metrics: [
      { label: 'IG Followers', before: '3,500', after: '48,000' },
      { label: 'Engagement Rate', before: '0.8%', after: '3.4%' },
      { label: 'Monthly Site Visits (Social)', before: '300', after: '4,000' },
    ],
    credibilityLine: 'Engagement and traffic measured via internal tracking.',
    services: ['Brand Building', 'Content Strategy', 'Community Management', 'Organic Growth'],
  },

  // === CREATOR CASE STUDIES ===
  {
    id: 9,
    category: 'creative',
    clientType: 'Creator (Large-Scale Growth)',
    title: 'Organic growth supported by content + amplification',
    spend: 'Custom',
    duration: '18 months',
    serviceCategory: 'Creator / Content + Viral Strategy',
    metrics: [
      { label: 'IG Followers', before: '5,000', after: '750,000' },
      { label: 'Avg Views/Post', before: '2,000', after: '150,000+' },
      { label: 'Brand Inquiries/Month', before: '0', after: '15+' },
    ],
    credibilityLine: 'Growth achieved through content strategy + amplification.',
    services: ['Viral Strategy', 'Content Direction', 'Brand Positioning', 'Partnership Prep'],
  },
  {
    id: 10,
    category: 'creative',
    clientType: 'Creator (Subscription Growth)',
    title: 'Built consistent engagement through organic strategy',
    spend: '$159/mo',
    duration: '14 months',
    serviceCategory: 'Creator / Organic Growth',
    metrics: [
      { label: 'IG Followers', before: '8,000', after: '95,000' },
      { label: 'Avg Comments/Post', before: '5', after: '120+' },
      { label: 'Profile Actions/Month', before: '300', after: '6,000+' },
    ],
    credibilityLine: 'Clean and consistent growth through engagement optimization.',
    services: ['Organic Growth', 'Engagement Strategy', 'Content Optimization', 'Community'],
  },
];

// "More Wins" bullets
const moreWins = [
  'Artists landing label/distribution conversations',
  'Creators securing brand deals after credibility lift',
  'Clients opening for larger artists / getting booked more',
  'Podcast placements and press features that unlock opportunities',
  'Fitness coaches moving from in-person grind to online clients',
  'Local businesses getting inbound leads from improved presence',
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const filteredStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
              <TrendingUp className="w-4 h-4" />
              Client Outcomes
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6"
          >
            Case Studies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-edst-silver max-w-2xl mx-auto mb-4"
          >
            Real client outcomes. Names are anonymized for privacy.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-edst-silver/60 max-w-xl mx-auto"
          >
            Results vary based on content quality, consistency, budget, and market. 
            Based on real client campaigns and internal reporting.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-y border-edst-slate/10 bg-edst-charcoal/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-edst-gold text-edst-black'
                    : 'bg-edst-charcoal/50 text-edst-silver hover:bg-edst-charcoal border border-edst-slate/20'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10 overflow-hidden hover:border-edst-gold/20 transition-colors"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-edst-slate/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        {/* Spend + Duration */}
                        <span className="text-xs text-edst-gold uppercase tracking-wider">
                          {study.spend} • {study.duration}
                        </span>
                        
                        {/* Service Category */}
                        <p className="text-[10px] text-edst-silver/50 mt-1 mb-2 uppercase tracking-wider">
                          {study.serviceCategory}
                        </p>
                        
                        {/* Client Type with Anonymized badge */}
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-edst-white">{study.clientType}</h3>
                          <span className="px-2 py-0.5 rounded-full bg-edst-slate/20 text-[10px] text-edst-silver/70 uppercase tracking-wider">
                            Anonymized
                          </span>
                        </div>
                        
                        {/* Headline */}
                        <p className="text-sm text-edst-silver">{study.title}</p>
                        
                        {/* Highlight Badge (if exists) */}
                        {study.highlight && (
                          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-edst-gold/20 text-xs text-edst-gold font-medium">
                            {study.highlight}
                          </span>
                        )}
                      </div>
                      
                      {/* Category Icon */}
                      <div className="w-10 h-10 rounded-xl bg-edst-gold/10 flex items-center justify-center flex-shrink-0 ml-3">
                        {study.category === 'music' && <Music className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'fitness' && <Dumbbell className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'business' && <Briefcase className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'ecommerce' && <ShoppingBag className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'creative' && <Palette className="w-5 h-5 text-edst-gold" />}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics - 3 rows, no percentages */}
                  <div className="p-6 bg-edst-charcoal/20">
                    <div className="space-y-3">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-edst-silver/70">{metric.label}</span>
                          <span className="text-sm text-edst-white font-medium">
                            {metric.before !== '—' && <span className="text-edst-silver/50">{metric.before} → </span>}
                            <span className="text-edst-gold">{metric.after}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Credibility Line */}
                    <p className="text-[11px] text-edst-silver/40 mt-4 italic">
                      {study.credibilityLine}
                    </p>
                  </div>

                  {/* Expandable Services */}
                  <button
                    onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                    className="w-full p-4 flex items-center justify-between text-sm text-edst-silver hover:text-edst-gold transition-colors border-t border-edst-slate/10"
                  >
                    <span>{expandedCase === study.id ? 'Hide Services' : 'View Services Used'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedCase === study.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedCase === study.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 border-t border-edst-slate/10">
                          <div className="flex flex-wrap gap-2">
                            {study.services.map((service) => (
                              <span key={service} className="px-3 py-1.5 rounded-full bg-edst-charcoal/50 text-xs text-edst-silver border border-edst-slate/20">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Footnote */}
          <p className="text-center text-xs text-edst-silver/40 mt-8 max-w-2xl mx-auto">
            These are representative outcomes from EDST clients. Results vary and are influenced by content quality, consistency, niche, offer, and budget.
          </p>
        </div>
      </section>

      {/* More Wins Section */}
      <section className="py-16 px-4 bg-edst-charcoal/10 border-y border-edst-slate/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-xs text-edst-gold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Beyond the Numbers
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white mb-3">
              More Wins We See Every Week
            </h2>
            <p className="text-sm text-edst-silver/70 max-w-xl mx-auto">
              Not every outcome fits a metrics card. Here's what success often looks like for our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {moreWins.map((win, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10"
              >
                <CheckCircle2 className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-edst-silver">{win}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-edst-silver/60 max-w-2xl mx-auto">
            We've served tens of thousands of clients globally since 2019. We can't publish every story, 
            but these outcomes are common when the offer + content + consistency are aligned.
          </p>
        </div>
      </section>

      {/* Request Examples CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-edst-charcoal/40 to-edst-charcoal/20 border border-edst-slate/20 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-edst-gold" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-edst-white mb-3">
              Want examples for your niche?
            </h3>
            <p className="text-sm text-edst-silver mb-6 max-w-md mx-auto">
              We'll share relevant examples privately on a call where appropriate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
            >
              Talk to the Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-edst-charcoal/20 to-edst-black border-t border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="text-edst-silver mb-8">
              Every case study started with someone taking the first step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/marketing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
              >
                Talk to Us First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
