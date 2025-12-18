/**
 * ═══════════════════════════════════════════════════════════════════
 * ALL STATES INDEX PAGE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Lists all 50 US states EDST serves for SEO discovery.
 * URL structure: /us → /us/[state] → /us/[state]/[city]
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { states, getStatesGroupedByRegion } from '@/data/states';
import { getCitiesByState } from '@/data/cities';
import { Navbar, Footer } from '@/components';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { pageSEO, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Social Media Marketing | All 50 States | EDST',
  description: 'EDST provides social media growth services across all 50 US states. Find your state and local city to start growing your brand today.',
  keywords: 'social media marketing by state, marketing agency USA, EDST locations, social media growth all states',
  alternates: {
    canonical: `${siteConfig.url}/us`,
  },
  openGraph: {
    title: 'Social Media Marketing | All 50 States | EDST',
    description: 'EDST provides social media growth services across all 50 US states. Find your state and local city to start growing your brand today.',
    url: `${siteConfig.url}/us`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing | All 50 States | EDST',
    description: 'EDST provides social media growth services across all 50 US states.',
  },
};

const regionLabels: Record<string, string> = {
  northeast: 'Northeast',
  southeast: 'Southeast',
  midwest: 'Midwest',
  southwest: 'Southwest',
  west: 'West Coast & Pacific',
};

const regionOrder = ['west', 'southwest', 'midwest', 'southeast', 'northeast'];

export default function AllStatesPage() {
  const groupedStates = getStatesGroupedByRegion();

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
            <MapPin className="w-4 h-4" />
            Nationwide Coverage
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6">
            Social Media Growth Agency
            <span className="block text-gradient-gold">Nationwide</span>
          </h1>
          
          <p className="text-lg text-edst-silver max-w-2xl mx-auto mb-8">
            EDST helps creators, brands, and entrepreneurs across the entire United States 
            blow up with viral marketing, content distribution, and real growth strategies.
          </p>

          <Link
            href="/marketing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
          >
            Start Growing Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* States by Region */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {regionOrder.map((region) => {
            const regionStates = groupedStates[region] || [];
            if (regionStates.length === 0) return null;

            return (
              <div key={region} className="mb-16">
                <h2 className="text-2xl font-bold text-edst-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-edst-gold" />
                  {regionLabels[region]}
                  <span className="text-sm font-normal text-edst-silver">
                    ({regionStates.length} states)
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionStates
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((state) => {
                      const citiesInState = getCitiesByState(state.slug);
                      return (
                        <Link
                          key={state.slug}
                          href={`/us/${state.slug}`}
                          className="group p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 hover:bg-edst-charcoal/50 transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg text-edst-white group-hover:text-edst-gold transition-colors mb-1">
                                {state.name}
                              </h3>
                              <p className="text-xs text-edst-silver mb-2">
                                {state.nickname}
                              </p>
                              {citiesInState.length > 0 && (
                                <div className="flex items-center gap-1 text-xs text-edst-silver/60">
                                  <Building2 className="w-3 h-3" />
                                  {citiesInState.length} {citiesInState.length === 1 ? 'city' : 'cities'}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs font-mono text-edst-gold/60 mb-2">
                                {state.abbr}
                              </span>
                              <ArrowRight className="w-4 h-4 text-edst-silver opacity-0 group-hover:opacity-100 group-hover:text-edst-gold transition-all" />
                            </div>
                          </div>
                          <p className="text-xs text-edst-silver/70 mt-3 line-clamp-2">
                            {state.marketingHook}
                          </p>
                        </Link>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-edst-white mb-4">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-edst-silver mb-8">
            Whether you're in California or New York, Texas or Florida — EDST has you covered. 
            Our services are 100% digital and work anywhere in the US.
          </p>
          <Link
            href="/marketing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
