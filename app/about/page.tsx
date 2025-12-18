'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * ABOUT PAGE - Our Story & Team
 * ───────────────────────────────────────────────────────────────────
 * The EDST origin story, founder bio, and company values
 * ═══════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Footer } from '@/components';
import { 
  ArrowRight, 
  Rocket, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Instagram
} from 'lucide-react';

const milestones = [
  { year: '2019', event: 'EDST Founded', description: 'Started with a mission to help creators and entrepreneurs grow without the gatekeepers' },
  { year: '2020', event: '1,000 Clients', description: 'Crossed our first major milestone — proof that real results speak for themselves' },
  { year: '2021', event: 'Major Expansion', description: 'Launched an extensive list of new services and passed 7,500 clients served' },
  { year: '2022', event: '1M on Instagram', description: 'Hit 1M followers, launched viral marketing services, and surpassed 15,000 clients' },
  { year: '2023', event: 'Industry Leaders', description: 'Became the go-to for making entrepreneurs and public figures go viral' },
  { year: '2024', event: 'AI-Powered Growth', description: 'Leveled up our offers with AI-backed marketing, analytics, and smarter campaign strategies' },
  { year: '2025', event: '30K+ Clients', description: 'Passed 30K clients served and expanded viral services with new resources and capabilities' },
];

const values = [
  { 
    icon: Rocket, 
    title: 'Results Over Hype', 
    description: 'We don\'t sell dreams — we deliver measurable growth. Every campaign is built for real ROI.' 
  },
  { 
    icon: Heart, 
    title: 'Client Success First', 
    description: 'Your win is our win. We\'re invested in your success because that\'s how we\'ve built our reputation.' 
  },
  { 
    icon: Zap, 
    title: 'Speed & Execution', 
    description: 'In the creator economy, timing is everything. We move fast without sacrificing quality.' 
  },
  { 
    icon: Shield, 
    title: 'Transparency & Trust', 
    description: 'We keep it real with our clients. Clear expectations, honest communication, and strategies that work for your goals.' 
  },
];

const stats = [
  { value: '30K+', label: 'Clients Served' },
  { value: '20B+', label: 'Impressions Generated' },
  { value: '7+', label: 'Years Running' },
  { value: '37+', label: 'Countries' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-edst-gold/[0.03] blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
                <Globe className="w-4 h-4" />
                Our Story
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6">
                Building the Future of
                <span className="block text-gradient-gold">Creator Growth</span>
              </h1>
              
              <p className="text-lg text-edst-silver leading-relaxed mb-8">
                EDST isn't just a marketing agency — it's a movement. We started with one mission: 
                help creators, artists, and entrepreneurs blow up without the gatekeepers, 
                without the politics, and without the BS.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/marketing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-edst-charcoal/50 to-edst-charcoal/20 border border-edst-slate/20 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-edst-gold/10 border border-edst-gold/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-edst-gold">EDST</span>
                    </div>
                    <p className="text-edst-silver text-sm">The Marketing Ecosystem<br />That Never Sleeps</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-edst-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-edst-charcoal/20 border-y border-edst-slate/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-edst-gold mb-1">{stat.value}</div>
                <div className="text-sm text-edst-silver">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-edst-silver max-w-2xl mx-auto">
              The vision behind EDST
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-edst-white mb-4">Christopher McGinnis</h3>
              <p className="text-edst-gold text-sm uppercase tracking-wider mb-4">Founder & CEO</p>
              
              <div className="space-y-4 text-edst-silver leading-relaxed">
                <p>
                  Christopher founded EDST with a simple belief: everyone deserves access to 
                  the same growth strategies that major labels, agencies, and Fortune 500 
                  companies use — without the six-figure price tag.
                </p>
                <p>
                  Starting from his dorm room, Chris built EDST into a powerhouse serving 
                  30,000+ clients across 37 countries. From independent artists who've gone 
                  on to sign major label deals, to entrepreneurs who've scaled to 7-figures, 
                  EDST has been the catalyst behind countless success stories.
                </p>
                <p>
                  Beyond EDST, Chris runs MCG Holdings — a venture studio building and 
                  scaling companies across media, digital, and real estate. His philosophy 
                  is simple: <span className="text-edst-white font-medium">results over hype, execution over excuses</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://instagram.com/chrismcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/50 border border-edst-slate/30 text-sm text-edst-silver hover:border-edst-gold/50 hover:text-edst-gold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  @chrismcg
                </a>
                <a
                  href="https://instagram.com/everydaysuccessteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/50 border border-edst-slate/30 text-sm text-edst-silver hover:border-edst-gold/50 hover:text-edst-gold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  @everydaysuccessteam
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-edst-charcoal/60 to-edst-charcoal/30 border border-edst-slate/20 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-edst-gold/20 border border-edst-gold/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-edst-gold">CM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-edst-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Our Values
            </h2>
            <p className="text-edst-silver max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-edst-gold" />
                </div>
                <h3 className="text-lg font-semibold text-edst-white mb-2">{value.title}</h3>
                <p className="text-sm text-edst-silver leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Our Journey
            </h2>
            <p className="text-edst-silver">
              From startup to industry leader
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-edst-slate/20 md:-translate-x-px" />
            
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-12 md:pl-0 pb-10 last:pb-0 ${
                  i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                <div className={`absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-edst-gold/20 border-2 border-edst-gold flex items-center justify-center ${
                  i % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-edst-gold" />
                </div>
                <div className={`${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-edst-gold font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-edst-white mt-1">{milestone.event}</h3>
                  <p className="text-sm text-edst-silver mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-edst-silver mb-8">
              Join 30,000+ creators and entrepreneurs who chose EDST to blow up their brand.
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
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

