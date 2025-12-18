'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * COMPARE INDEX PAGE - All Comparisons
 * ───────────────────────────────────────────────────────────────────
 * Lists all EDST vs Alternative comparison pages for SEO
 * ═══════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { comparisons } from '@/data/comparisons';
import { 
  ArrowRight, 
  Scale,
  Building2,
  User,
  Users,
  Smartphone,
  Megaphone,
  Building,
  Bot,
  Calendar
} from 'lucide-react';

// Icon mapping for each comparison
const iconMap: Record<string, React.ElementType> = {
  'pr-agencies': Building2,
  'freelancers': User,
  'in-house-team': Users,
  'diy-growth': Smartphone,
  'influencer-platforms': Megaphone,
  'digital-agencies': Building,
  'buying-followers': Bot,
  'management-tools': Calendar,
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-edst-gold/[0.02] blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
              <Scale className="w-4 h-4" />
              Compare Your Options
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6"
          >
            EDST vs
            <span className="block text-gradient-gold">The Alternatives</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-edst-silver max-w-2xl mx-auto"
          >
            Exploring your options for social media growth? We break down exactly how EDST 
            compares to other approaches — no fluff, just facts.
          </motion.p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((comparison, i) => {
              const Icon = iconMap[comparison.slug] || Scale;
              
              return (
                <motion.div
                  key={comparison.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/compare/${comparison.slug}`}
                    className="block p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 transition-all group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-edst-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-edst-gold" />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-edst-white mb-2 group-hover:text-edst-gold transition-colors">
                          {comparison.title}
                        </h2>
                        <p className="text-sm text-edst-silver mb-4 line-clamp-2">
                          {comparison.tldr}
                        </p>
                        
                        <div className="flex items-center gap-2 text-edst-gold text-sm font-medium">
                          Read Full Comparison
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-edst-charcoal/10 border-y border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white mb-4">
              Ready to See the EDST Difference?
            </h2>
            <p className="text-edst-silver mb-8">
              30,000+ creators and entrepreneurs have already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/marketing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
              >
                See Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



