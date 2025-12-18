/**
 * ═══════════════════════════════════════════════════════════════════
 * STATE LANDING PAGE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Dynamic route for state pages: /us/{stateSlug}
 * Lists all cities in the state and provides state-level SEO content.
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { states, getStateBySlug, generateStateContent } from '@/data/states';
import { getCitiesByState } from '@/data/cities';
import { Navbar, Footer } from '@/components';
import { MapPin, ArrowRight, Building2, Users, TrendingUp, Zap } from 'lucide-react';
import { siteConfig, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

interface StatePageProps {
  params: {
    stateSlug: string;
  };
}

/**
 * Generate static params for all state pages
 */
export async function generateStaticParams() {
  return states.map((state) => ({
    stateSlug: state.slug,
  }));
}

/**
 * Generate dynamic metadata for each state page
 */
export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const state = getStateBySlug(params.stateSlug);
  
  if (!state) {
    return { title: 'State Not Found | EDST' };
  }

  const content = generateStateContent(state);
  const canonicalUrl = `${siteConfig.url}/us/${state.slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default function StatePage({ params }: StatePageProps) {
  const state = getStateBySlug(params.stateSlug);

  if (!state) {
    notFound();
  }

  const content = generateStateContent(state);
  const stateCities = getCitiesByState(state.slug);

  // Structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'States', url: `${siteConfig.url}/us` },
    { name: state.name, url: `${siteConfig.url}/us/${state.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-edst-black">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* State Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold">
              <MapPin className="w-4 h-4" />
              {state.name} • {state.nickname}
            </span>
          </div>
          
          {/* H1 - Unique per state */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white text-center mb-6">
            {content.h1}
          </h1>
          
          {/* Subheadline - Unique per state */}
          <p className="text-lg md:text-xl text-edst-silver text-center max-w-3xl mx-auto mb-8">
            {content.heroSubheadline}
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/marketing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
            >
              Start Growing in {state.abbr}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* State Intro Section */}
      <section className="py-16 px-4 bg-edst-charcoal/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-edst-silver leading-relaxed text-center mb-12">
            {content.introContent}
          </p>

          {/* State Stats - Dynamic based on state size */}
          {(() => {
            const popInMillions = state.population / 1000000;
            const campaignBase = Math.floor((popInMillions * 80) + (stateCities.length * 50));
            const campaigns = campaignBase > 1000 ? `${Math.floor(campaignBase / 1000)}K+` : `${campaignBase}+`;
            // Growth multiplier based on state size (2-5x range)
            const growthMultiplier = 2 + Math.floor((popInMillions + stateCities.length) % 3);
            const avgGrowth = `${growthMultiplier}-${growthMultiplier + 2}x`;
            const popDisplay = popInMillions >= 1 ? `${popInMillions.toFixed(1)}M` : `${Math.floor(state.population / 1000)}K`;
            
            const stats = [
              { icon: Users, value: popDisplay, label: 'Population' },
              { icon: Building2, value: `${stateCities.length}`, label: 'Major Cities' },
              { icon: TrendingUp, value: avgGrowth, label: 'Follower Growth' },
              { icon: Zap, value: campaigns, label: 'Campaigns' },
            ];
            
            return (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 text-center">
                    <stat.icon className="w-5 h-5 text-edst-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-edst-white">{stat.value}</div>
                    <div className="text-xs text-edst-silver">{stat.label}</div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Industries */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-edst-white mb-4">
              Key Industries in {state.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {state.keyIndustries.map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 text-sm text-edst-silver"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities in State */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-edst-white text-center mb-4">
            {state.name} Cities We Serve
          </h2>
          <p className="text-edst-silver text-center mb-10 max-w-2xl mx-auto">
            EDST provides social media growth services to creators and businesses across {state.name}. 
            Click on a city to see local marketing opportunities.
          </p>

          {stateCities.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stateCities
                .sort((a, b) => b.population - a.population)
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/us/${state.slug}/${city.slug}`}
                    className="group p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 hover:bg-edst-charcoal/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-edst-white group-hover:text-edst-gold transition-colors">
                        {city.city}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-edst-silver opacity-0 group-hover:opacity-100 group-hover:text-edst-gold transition-all" />
                    </div>
                    <p className="text-xs text-edst-silver line-clamp-2">
                      {city.marketingHook}
                    </p>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-edst-silver mb-4">
                We serve all of {state.name}! Contact us to discuss marketing in your city.
              </p>
              <Link
                href="/marketing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-edst-gold text-edst-gold hover:bg-edst-gold hover:text-edst-black transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-edst-charcoal/30 border-y border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-edst-white mb-4">
            Ready to Grow in {state.name}?
          </h2>
          <p className="text-edst-silver mb-8">
            Join hundreds of {state.name} creators and brands already scaling with EDST.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/marketing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
            >
              Start Your Growth Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
            >
              View All States
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

