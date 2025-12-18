/**
 * ═══════════════════════════════════════════════════════════════════
 * INDIVIDUAL INDUSTRY PAGE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Dynamic route for industry pages: /industries/[industrySlug]
 * Each page has UNIQUE content tailored to that industry.
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { 
  industries, 
  getIndustryBySlug, 
  getRelatedIndustries,
  industryCategories
} from '@/data/industries';
import { 
  ArrowRight, 
  Check, 
  TrendingUp,
  Target,
  Zap,
  Users,
  Star,
  ChevronRight,
  Quote
} from 'lucide-react';
import { siteConfig, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

interface IndustryPageProps {
  params: {
    industrySlug: string;
  };
}

/**
 * Generate static params for all industry pages
 */
export async function generateStaticParams() {
  return industries.map((industry) => ({
    industrySlug: industry.slug,
  }));
}

/**
 * Generate dynamic metadata for each industry page
 */
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industrySlug);
  
  if (!industry) {
    return { title: 'Industry Not Found | EDST' };
  }

  const canonicalUrl = `${siteConfig.url}/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords.join(', '),
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.industrySlug);

  if (!industry) {
    notFound();
  }

  const relatedIndustries = getRelatedIndustries(industry.slug);
  const categoryInfo = industryCategories[industry.category];

  // Structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Industries', url: `${siteConfig.url}/industries` },
    { name: industry.name, url: `${siteConfig.url}/industries/${industry.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: `${industry.name} Marketing Services`,
    description: industry.description,
    serviceType: 'Digital Marketing',
    url: `${siteConfig.url}/industries/${industry.slug}`,
    priceRange: '$$',
  });

  return (
    <main className="min-h-screen bg-edst-black">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <Navbar />
      
      {/* Breadcrumb */}
      <nav className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-edst-silver/60">
            <li><Link href="/" className="hover:text-edst-gold transition-colors">Home</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li><Link href="/industries" className="hover:text-edst-gold transition-colors">Industries</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-edst-gold">{industry.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-xs text-edst-gold mb-6">
                {categoryInfo.name}
              </div>
              
              {/* H1 */}
              <h1 className="text-4xl md:text-5xl font-bold text-edst-white mb-6 leading-tight">
                {industry.heroHeadline}
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg text-edst-silver mb-8">
                {industry.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/marketing"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-white hover:border-edst-gold hover:text-edst-gold transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Results Stats */}
            <div className="grid grid-cols-2 gap-4">
              {industry.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10"
                >
                  <div className="text-3xl md:text-4xl font-bold text-edst-gold mb-1">
                    {result.value}
                  </div>
                  <div className="text-sm text-edst-silver">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 bg-edst-charcoal/20 border-y border-edst-slate/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-red-400" />
                <h2 className="text-2xl font-bold text-edst-white">
                  {industry.name} Marketing Challenges
                </h2>
              </div>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                    <span className="text-edst-silver">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-edst-gold" />
                <h2 className="text-2xl font-bold text-edst-white">
                  How EDST Solves Them
                </h2>
              </div>
              <ul className="space-y-4">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-edst-gold flex-shrink-0 mt-0.5" />
                    <span className="text-edst-silver">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {industry.testimonialQuote && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-edst-charcoal/30 to-transparent border border-edst-slate/10">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-edst-gold/20" />
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-edst-white leading-relaxed mb-6 pl-8">
                  "{industry.testimonialQuote}"
                </p>
                <footer className="pl-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-edst-gold/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-edst-gold" />
                    </div>
                    <div>
                      <cite className="text-edst-white font-semibold not-italic">
                        {industry.testimonialAuthor}
                      </cite>
                      <p className="text-sm text-edst-silver">
                        {industry.testimonialRole}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Popular Services */}
      <section className="py-16 px-4 bg-edst-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-edst-white text-center mb-4">
            Popular Services for {industry.name}
          </h2>
          <p className="text-edst-silver text-center mb-10 max-w-2xl mx-auto">
            These are the services {industry.name.toLowerCase()} clients use most. 
            We tailor each campaign to your specific goals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industry.popularServices.map((service) => (
              <Link
                key={service}
                href="/marketing"
                className="group p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 text-center transition-all"
              >
                <span className="text-edst-white group-hover:text-edst-gold transition-colors">
                  {service}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-edst-white mb-6">
              Related Industries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedIndustries.map((related) => (
                <Link
                  key={related.slug}
                  href={`/industries/${related.slug}`}
                  className="group p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 hover:border-edst-gold/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-edst-white group-hover:text-edst-gold transition-colors">
                      {related.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-edst-silver opacity-0 group-hover:opacity-100 group-hover:text-edst-gold transition-all" />
                  </div>
                  <p className="text-sm text-edst-silver">
                    {related.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-edst-charcoal/30 to-transparent border-t border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-edst-white mb-4">
            Ready to Grow Your {industry.name} Brand?
          </h2>
          <p className="text-edst-silver mb-8">
            Join thousands of {industry.name.toLowerCase()} professionals already growing with EDST. 
            Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/marketing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-edst-gold text-edst-black font-semibold hover:bg-edst-gold-light transition-colors"
            >
              Start Growing Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-edst-slate text-edst-silver hover:border-edst-gold hover:text-edst-gold transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Browse All Industries */}
      <section className="py-12 px-4 border-t border-edst-slate/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-edst-silver hover:text-edst-gold transition-colors"
          >
            <Users className="w-4 h-4" />
            Browse All 50+ Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

