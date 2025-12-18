/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC COMPARISON PAGE - EDST vs [Alternative]
 * ───────────────────────────────────────────────────────────────────
 * SEO-optimized comparison pages for decision-stage buyers
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons, getComparisonBySlug, getAllComparisonSlugs } from '@/data/comparisons';
import ComparisonPageClient from './ComparisonPageClient';

// Generate static paths for all comparisons
export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

// Generate dynamic metadata for each comparison
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const comparison = getComparisonBySlug(params.slug);
  
  if (!comparison) {
    return {
      title: 'Comparison Not Found | EDST',
    };
  }

  const baseUrl = 'https://edst.com';

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    keywords: [
      comparison.alternativeName,
      'EDST',
      'social media growth',
      'marketing comparison',
      'growth agency',
      comparison.title,
    ],
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url: `${baseUrl}/compare/${comparison.slug}`,
      siteName: 'EDST',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: comparison.metaTitle,
      description: comparison.metaDescription,
    },
    alternates: {
      canonical: `${baseUrl}/compare/${comparison.slug}`,
    },
  };
}

// Generate FAQ Schema for the page
function generateFAQSchema(comparison: NonNullable<ReturnType<typeof getComparisonBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comparison.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Article Schema
function generateArticleSchema(comparison: NonNullable<ReturnType<typeof getComparisonBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'EDST',
      url: 'https://edst.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EDST',
      logo: {
        '@type': 'ImageObject',
        url: 'https://edst.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://edst.com/compare/${comparison.slug}`,
    },
  };
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comparison = getComparisonBySlug(params.slug);

  if (!comparison) {
    notFound();
  }

  const faqSchema = generateFAQSchema(comparison);
  const articleSchema = generateArticleSchema(comparison);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <ComparisonPageClient comparison={comparison} />
    </>
  );
}



