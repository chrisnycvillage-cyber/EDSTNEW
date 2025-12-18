/**
 * ═══════════════════════════════════════════════════════════════════
 * INDUSTRIES INDEX PAGE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Lists all 50+ industries EDST serves for SEO discovery.
 * URL: /industries
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { getIndustryCategories, industryCategories } from '@/data/industries';
import { 
  ArrowRight, 
  Music, 
  Heart, 
  Briefcase, 
  Sparkles, 
  Target, 
  Coffee, 
  Laptop, 
  ShoppingCart,
  Palette,
  TrendingUp
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Industries We Serve | Marketing by Industry | EDST',
  description: 'EDST provides specialized marketing services across 50+ industries. Find your industry and discover how we can help you grow.',
  keywords: 'marketing by industry, industry marketing, specialized marketing, vertical marketing, EDST industries',
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
  openGraph: {
    title: 'Industries We Serve | Marketing by Industry | EDST',
    description: 'EDST provides specialized marketing services across 50+ industries. Find your industry and discover how we can help you grow.',
    url: `${siteConfig.url}/industries`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | EDST',
    description: 'Specialized marketing services across 50+ industries.',
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  entertainment: <Music className="w-5 h-5" />,
  healthcare: <Heart className="w-5 h-5" />,
  business: <Briefcase className="w-5 h-5" />,
  lifestyle: <Sparkles className="w-5 h-5" />,
  professional: <Target className="w-5 h-5" />,
  food: <Coffee className="w-5 h-5" />,
  tech: <Laptop className="w-5 h-5" />,
  retail: <ShoppingCart className="w-5 h-5" />,
  creative: <Palette className="w-5 h-5" />,
};

export default function IndustriesPage() {
  const categorizedIndustries = getIndustryCategories();

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
            <TrendingUp className="w-4 h-4" />
            50+ Industries
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6">
            Marketing Tailored to
            <span className="block text-gradient-gold">Your Industry</span>
          </h1>
          
          <p className="text-lg text-edst-silver max-w-2xl mx-auto mb-8">
            Every industry has unique challenges. We've mastered marketing across 50+ verticals, 
            delivering specialized strategies that actually work for your market.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/marketing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#industries"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-white hover:border-edst-gold hover:text-edst-gold transition-all"
            >
              Browse Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-edst-charcoal/20 border-y border-edst-slate/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-edst-gold mb-1">50+</div>
              <div className="text-sm text-edst-silver">Industries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-edst-white mb-1">30K+</div>
              <div className="text-sm text-edst-silver">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-edst-white mb-1">7+</div>
              <div className="text-sm text-edst-silver">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries by Category */}
      <section id="industries" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {categorizedIndustries.map(({ category, info, industries }) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-edst-gold/10 text-edst-gold">
                  {categoryIcons[category]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-edst-white">
                    {info.name}
                  </h2>
                  <p className="text-sm text-edst-silver">
                    {info.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 hover:bg-edst-charcoal/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg text-edst-white group-hover:text-edst-gold transition-colors">
                        {industry.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-edst-silver opacity-0 group-hover:opacity-100 group-hover:text-edst-gold transition-all" />
                    </div>
                    <p className="text-sm text-edst-silver mb-3">
                      {industry.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {industry.popularServices.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-0.5 rounded-full bg-edst-charcoal/50 text-xs text-edst-silver/70"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-edst-charcoal/30 border-y border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-edst-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-edst-silver mb-8">
            We've worked with hundreds of niches. If you don't see yours listed, 
            we probably still have experience. Let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

