'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * COMPARISON PAGE CLIENT COMPONENT
 * ───────────────────────────────────────────────────────────────────
 * Interactive comparison page with animations
 * ═══════════════════════════════════════════════════════════════════
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { Comparison } from '@/data/comparisons';
import { 
  ArrowRight, 
  ArrowLeft,
  Check, 
  X, 
  Minus,
  Scale,
  ChevronDown,
  Zap,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';

interface ComparisonPageClientProps {
  comparison: Comparison;
}

export default function ComparisonPageClient({ comparison }: ComparisonPageClientProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-edst-gold/[0.02] blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/compare" 
              className="inline-flex items-center gap-2 text-sm text-edst-silver hover:text-edst-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Comparisons
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
              <Scale className="w-4 h-4" />
              Comparison Guide
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6 text-center"
          >
            {comparison.heroHeadline}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-edst-silver text-center max-w-2xl mx-auto"
          >
            {comparison.heroSubheadline}
          </motion.p>
        </div>
      </section>

      {/* TL;DR Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-edst-gold/5 border border-edst-gold/20"
          >
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-edst-gold flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-sm font-semibold text-edst-gold uppercase tracking-wider mb-2">
                  TL;DR
                </h2>
                <p className="text-edst-silver leading-relaxed">
                  {comparison.tldr}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-edst-white mb-8 text-center"
          >
            Side-by-Side Comparison
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-edst-slate/20"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-edst-charcoal/50">
              <div className="p-4 text-sm font-medium text-edst-silver border-b border-edst-slate/10">
                Feature
              </div>
              <div className="p-4 text-sm font-medium text-edst-gold border-b border-edst-slate/10 text-center bg-edst-gold/5">
                EDST
              </div>
              <div className="p-4 text-sm font-medium text-edst-silver border-b border-edst-slate/10 text-center">
                {comparison.alternativeName}
              </div>
            </div>

            {/* Table Rows */}
            {comparison.features.map((feature, i) => (
              <div 
                key={feature.feature}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-edst-charcoal/20' : 'bg-edst-charcoal/10'}`}
              >
                <div className="p-4 text-sm text-edst-white border-b border-edst-slate/5">
                  {feature.feature}
                </div>
                <div className={`p-4 text-sm text-center border-b border-edst-slate/5 ${
                  feature.winner === 'edst' ? 'text-edst-gold bg-edst-gold/5' : 'text-edst-silver'
                }`}>
                  <div className="flex items-center justify-center gap-2">
                    {feature.winner === 'edst' && <Check className="w-4 h-4 text-green-500" />}
                    {feature.edst}
                  </div>
                </div>
                <div className={`p-4 text-sm text-center border-b border-edst-slate/5 ${
                  feature.winner === 'alternative' ? 'text-edst-gold' : 'text-edst-silver'
                }`}>
                  <div className="flex items-center justify-center gap-2">
                    {feature.winner === 'alternative' && <Check className="w-4 h-4 text-green-500" />}
                    {feature.alternative}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 px-4 bg-edst-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-edst-white mb-8 text-center"
          >
            The Deep Dive
          </motion.h2>

          <div className="space-y-8">
            {comparison.detailedSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10"
              >
                <h3 className="text-xl font-semibold text-edst-white mb-4">
                  {section.title}
                </h3>
                <p className="text-edst-silver leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* When to Choose Alternative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-edst-slate/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-edst-silver" />
                </div>
                <h3 className="text-lg font-semibold text-edst-white">
                  {comparison.whenChooseAlternative.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.whenChooseAlternative.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-edst-silver">
                    <Minus className="w-4 h-4 text-edst-slate flex-shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* When to Choose EDST */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-edst-gold/5 border border-edst-gold/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-edst-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-edst-gold" />
                </div>
                <h3 className="text-lg font-semibold text-edst-white">
                  {comparison.whenChooseEdst.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.whenChooseEdst.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-edst-silver">
                    <Check className="w-4 h-4 text-edst-gold flex-shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-edst-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-edst-white mb-8 text-center"
          >
            Common Questions
          </motion.h2>

          <div className="space-y-4">
            {comparison.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-edst-charcoal/40 transition-colors"
                >
                  <span className="font-medium text-edst-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-edst-gold flex-shrink-0 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-edst-silver text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-edst-gold/10 to-edst-gold/5 border border-edst-gold/20 text-center"
          >
            <h2 className="text-2xl font-bold text-edst-white mb-4">
              The Verdict
            </h2>
            <p className="text-edst-silver leading-relaxed max-w-3xl mx-auto">
              {comparison.finalVerdict}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-edst-charcoal/10 border-y border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white mb-4">
              Ready to Experience the EDST Difference?
            </h2>
            <p className="text-edst-silver mb-8">
              Join 30,000+ creators and entrepreneurs already growing with us.
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
                href="/compare"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                More Comparisons
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



