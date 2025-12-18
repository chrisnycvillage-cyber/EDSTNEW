'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * CASE STUDIES PAGE - Real Results, Real Growth
 * ───────────────────────────────────────────────────────────────────
 * Unbranded case studies showcasing EDST campaign results
 * ═══════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Eye,
  Music,
  Dumbbell,
  Briefcase,
  ShoppingBag,
  Palette,
  Building2,
  CheckCircle,
  Star,
  ChevronDown
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: Star },
  { id: 'music', label: 'Music & Artists', icon: Music },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell },
  { id: 'business', label: 'Business', icon: Briefcase },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'creative', label: 'Creators', icon: Palette },
];

const caseStudies = [
  {
    id: 1,
    category: 'music',
    title: 'Independent Hip-Hop Artist',
    subtitle: 'From 2K to 500K Followers in 8 Months',
    budget: '$199/mo',
    duration: '8 months',
    metrics: {
      followers: { before: '2,100', after: '512,000', growth: '+24,281%' },
      engagement: { before: '1.2%', after: '8.4%', growth: '+600%' },
      streams: { before: '5K/mo', after: '2.1M/mo', growth: '+42,000%' },
    },
    story: 'This independent artist came to us with raw talent but zero online presence. Through strategic content optimization, playlist pitching coordination, and viral marketing campaigns, we helped them build a massive organic following. Within 8 months, they signed a distribution deal with a major label.',
    services: ['Organic Growth', 'Content Strategy', 'Playlist Pitching', 'Viral Campaigns'],
    outcome: 'Signed major distribution deal',
    testimonial: 'EDST literally changed my life. I went from making music in my bedroom to having a real career.',
  },
  {
    id: 2,
    category: 'fitness',
    title: 'Online Fitness Coach',
    subtitle: 'Scaled to 7-Figures in 12 Months',
    budget: '$499/mo',
    duration: '12 months',
    metrics: {
      followers: { before: '8,200', after: '285,000', growth: '+3,376%' },
      revenue: { before: '$3K/mo', after: '$127K/mo', growth: '+4,133%' },
      clients: { before: '12', after: '450+', growth: '+3,650%' },
    },
    story: 'A personal trainer looking to transition to online coaching. We built their personal brand through consistent content, engagement strategies, and targeted campaigns. Their DMs became a client acquisition machine.',
    services: ['Brand Building', 'Content Creation', 'DM Strategy', 'Lead Generation'],
    outcome: 'Built 7-figure online coaching business',
    testimonial: 'I never thought I could make more money online than I did training clients in person. EDST proved me wrong.',
  },
  {
    id: 3,
    category: 'ecommerce',
    title: 'Streetwear Brand',
    subtitle: 'From Startup to $2M Annual Revenue',
    budget: '$999/mo',
    duration: '18 months',
    metrics: {
      followers: { before: '450', after: '175,000', growth: '+38,789%' },
      revenue: { before: '$0', after: '$2.1M/yr', growth: 'New Business' },
      engagement: { before: 'N/A', after: '12.3%', growth: 'Industry Leading' },
    },
    story: 'A brand-new streetwear company with no audience, no following, and big dreams. We built their entire social presence from scratch, coordinated influencer partnerships, and created viral product launch campaigns.',
    services: ['Brand Launch', 'Influencer Marketing', 'UGC Campaigns', 'Viral Product Launches'],
    outcome: 'Scaled to $2M+ annual revenue',
    testimonial: 'EDST didn\'t just grow our following — they helped us build a real brand that people love.',
  },
  {
    id: 4,
    category: 'business',
    title: 'B2B SaaS Company',
    subtitle: 'Tripled Qualified Leads in 6 Months',
    budget: '$299/mo',
    duration: '6 months',
    metrics: {
      followers: { before: '1,200', after: '28,000', growth: '+2,233%' },
      leads: { before: '15/mo', after: '142/mo', growth: '+847%' },
      demos: { before: '3/mo', after: '45/mo', growth: '+1,400%' },
    },
    story: 'A SaaS startup struggling to gain traction on social. We positioned the founder as a thought leader, created educational content that drove engagement, and built a LinkedIn presence that became their #1 lead source.',
    services: ['Thought Leadership', 'LinkedIn Growth', 'Content Marketing', 'Lead Gen'],
    outcome: 'Social became #1 lead source',
    testimonial: 'We tried everything before EDST. They\'re the only ones who actually understood B2B social.',
  },
  {
    id: 5,
    category: 'creative',
    title: 'Lifestyle Content Creator',
    subtitle: 'From Hobby to Full-Time Career',
    budget: '$159/mo',
    duration: '10 months',
    metrics: {
      followers: { before: '850', after: '95,000', growth: '+11,076%' },
      income: { before: '$0', after: '$8K/mo', growth: 'New Income' },
      brand_deals: { before: '0', after: '15+', growth: 'Active Partnerships' },
    },
    story: 'A creator posting content as a hobby, hoping to maybe one day go full-time. Through strategic growth and brand positioning, they quit their 9-5 within 10 months and now create content full-time.',
    services: ['Organic Growth', 'Content Strategy', 'Brand Positioning', 'Partnership Coaching'],
    outcome: 'Quit 9-5, now full-time creator',
    testimonial: 'I honestly didn\'t think this was possible for someone like me. EDST made it happen.',
  },
  {
    id: 6,
    category: 'music',
    title: 'Electronic Music Producer',
    subtitle: 'Built International Fanbase',
    budget: '$299/mo',
    duration: '14 months',
    metrics: {
      followers: { before: '3,500', after: '220,000', growth: '+6,186%' },
      streams: { before: '12K/mo', after: '4.2M/mo', growth: '+34,900%' },
      shows: { before: '1-2/mo', after: '8-10/mo', growth: '+400%' },
    },
    story: 'An EDM producer with great music but limited reach. We helped them tap into international markets, grow their Spotify presence, and build a touring career that spans multiple continents.',
    services: ['International Growth', 'Spotify Marketing', 'Tour Promotion', 'Fanbase Building'],
    outcome: 'Now tours internationally',
    testimonial: 'Playing shows in Europe was a dream. EDST helped me build an audience there before I even visited.',
  },
  {
    id: 7,
    category: 'fitness',
    title: 'Supplement Brand',
    subtitle: 'Launched to $500K in First Year',
    budget: '$1,500/mo',
    duration: '12 months',
    metrics: {
      followers: { before: '0', after: '85,000', growth: 'From Zero' },
      revenue: { before: '$0', after: '$540K/yr', growth: 'First Year Revenue' },
      customers: { before: '0', after: '4,200+', growth: 'Customer Base Built' },
    },
    story: 'A new supplement brand entering a crowded market. We helped them differentiate through authentic content, micro-influencer partnerships, and community building that created loyal customers.',
    services: ['Brand Launch', 'Micro-Influencer Campaign', 'UGC Strategy', 'Community Building'],
    outcome: 'Profitable in first year',
    testimonial: 'Everyone said supplements are too competitive. EDST showed us how to stand out.',
  },
  {
    id: 8,
    category: 'business',
    title: 'Real Estate Agent',
    subtitle: 'Became Top Producer in Market',
    budget: '$199/mo',
    duration: '9 months',
    metrics: {
      followers: { before: '200', after: '42,000', growth: '+20,900%' },
      leads: { before: '2-3/mo', after: '35+/mo', growth: '+1,067%' },
      closings: { before: '8/yr', after: '36/yr', growth: '+350%' },
    },
    story: 'A new real estate agent struggling to compete with established players. We built their personal brand around local expertise and authentic content, making them the go-to agent in their market.',
    services: ['Personal Branding', 'Local SEO', 'Video Content', 'Lead Generation'],
    outcome: 'Top 1% producer in market',
    testimonial: 'I went from cold calling to having leads come to me. EDST changed my entire business model.',
  },
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
              Real Results
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6"
          >
            Case Studies
            <span className="block text-gradient-gold">That Speak for Themselves</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-edst-silver max-w-2xl mx-auto mb-8"
          >
            Real transformations from real clients. Names anonymized to protect privacy, 
            but the results are 100% authentic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-sm text-edst-silver"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-edst-gold" />
              <span>Verified Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-edst-gold" />
              <span>Real Campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-edst-gold" />
              <span>Actual ROI</span>
            </div>
          </motion.div>
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
                      <div>
                        <span className="text-xs text-edst-gold uppercase tracking-wider">{study.budget} • {study.duration}</span>
                        <h3 className="text-xl font-bold text-edst-white mt-1">{study.title}</h3>
                        <p className="text-sm text-edst-silver">{study.subtitle}</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-edst-gold/10 flex items-center justify-center">
                        {study.category === 'music' && <Music className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'fitness' && <Dumbbell className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'business' && <Briefcase className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'ecommerce' && <ShoppingBag className="w-5 h-5 text-edst-gold" />}
                        {study.category === 'creative' && <Palette className="w-5 h-5 text-edst-gold" />}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="p-6 bg-edst-charcoal/20">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.metrics).slice(0, 3).map(([key, data]) => (
                        <div key={key} className="text-center">
                          <div className="text-xs text-edst-silver/60 uppercase mb-1">
                            {key.replace('_', ' ')}
                          </div>
                          <div className="text-sm text-edst-silver mb-0.5">
                            {data.before} → <span className="text-edst-white font-semibold">{data.after}</span>
                          </div>
                          <div className="text-xs text-edst-gold font-semibold">{data.growth}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <button
                    onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                    className="w-full p-4 flex items-center justify-between text-sm text-edst-silver hover:text-edst-gold transition-colors border-t border-edst-slate/10"
                  >
                    <span>{expandedCase === study.id ? 'Hide Details' : 'View Full Story'}</span>
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
                        <div className="p-6 border-t border-edst-slate/10 space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-edst-white mb-2">The Story</h4>
                            <p className="text-sm text-edst-silver leading-relaxed">{study.story}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-edst-white mb-2">Services Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.services.map((service) => (
                                <span key={service} className="px-2 py-1 rounded-full bg-edst-charcoal/50 text-xs text-edst-silver">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-edst-gold/5 border border-edst-gold/20">
                            <div className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm text-edst-white font-medium mb-1">"{study.testimonial}"</div>
                                <div className="text-xs text-edst-gold">{study.outcome}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-edst-charcoal/20 to-edst-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-edst-silver mb-8">
              Every case study started with someone taking the first step. Your turn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/marketing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
              >
                Start Your Journey
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



