/**
 * ═══════════════════════════════════════════════════════════════════
 * CITY-SPECIFIC LANDING PAGE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Dynamic route for city pages: /us/{stateSlug}/{citySlug}
 * Each page has UNIQUE content to avoid duplicate content penalties.
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, getCityByStateAndSlug, getRandomCitiesInState, getRandomCities, generateCityContent } from '@/data/cities';
import { getStateBySlug } from '@/data/states';
import { HomeByCityTemplate } from '@/components/pseo';
import { siteConfig } from '@/lib/seo';

interface CityPageProps {
  params: {
    stateSlug: string;
    citySlug: string;
  };
}

/**
 * Generate static params for all city pages
 */
export async function generateStaticParams() {
  return cities.map((city) => ({
    stateSlug: city.stateSlug,
    citySlug: city.slug,
  }));
}

/**
 * Generate dynamic metadata for each city page
 */
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityByStateAndSlug(params.stateSlug, params.citySlug);
  const state = getStateBySlug(params.stateSlug);
  
  if (!city || !state) {
    return { title: 'City Not Found | EDST' };
  }

  const content = generateCityContent(city);
  const canonicalUrl = `${siteConfig.url}/us/${state.slug}/${city.slug}`;

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
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `EDST - Social Media Growth Agency in ${city.city}, ${state.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
      images: [`${siteConfig.url}/og-image.jpg`],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: { index: true, follow: true },
  };
}

/**
 * City Page Component
 */
export default function CityPage({ params }: CityPageProps) {
  const city = getCityByStateAndSlug(params.stateSlug, params.citySlug);
  const state = getStateBySlug(params.stateSlug);

  if (!city || !state) {
    notFound();
  }

  const content = generateCityContent(city);

  // Get related cities - prefer same state, then random
  const sameCitiesInState = getRandomCitiesInState(state.slug, city.slug, 3);
  const otherCities = getRandomCities(city.slug, 3);
  const relatedCities = [...sameCitiesInState, ...otherCities].slice(0, 6);

  return (
    <HomeByCityTemplate
      city={city.city}
      state={city.state}
      stateAbbr={city.stateAbbr}
      slug={city.slug}
      stateSlug={state.slug}
      // UNIQUE content per city
      h1={content.h1}
      heroSubheadline={content.heroSubheadline}
      cityIntro={content.introContent}
      localContent={content.localContent}
      industries={content.industries}
      // For dynamic stats
      population={city.population}
      // SEO
      primaryKeyword={content.keywords[0] || `${city.city} marketing agency`}
      secondaryKeywords={content.keywords.slice(1)}
      // Navigation
      ctaUrl="/marketing"
      relatedCities={relatedCities}
    />
  );
}

