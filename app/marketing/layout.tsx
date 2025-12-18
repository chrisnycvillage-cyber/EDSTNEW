import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.pricing.title,
    description: pageSEO.pricing.description,
    keywords: pageSEO.pricing.keywords,
    canonical: `${siteConfig.url}/marketing`,
  }),
};

// Product/Service Schema for pricing page
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EDST Marketing Services',
  description: 'Social media growth and viral marketing services for creators, artists, and entrepreneurs. Plans starting at $99/month.',
  brand: {
    '@type': 'Brand',
    name: 'EDST',
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '99',
    highPrice: '100000',
    priceCurrency: 'USD',
    offerCount: '15+',
    availability: 'https://schema.org/InStock',
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'What is included in EDST subscriptions?',
    answer: 'All subscriptions include organic growth services, access to the EDST Business Portal (pipeline, calendar, tasks), community access, and marketing support. Higher tiers add more platforms, posting frequency, and advanced features.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime. We offer downsell options if you want to reduce your plan instead of canceling completely. No long-term contracts required for subscription plans.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and bank transfers. For large campaigns, we also offer custom payment arrangements.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most clients see initial traction within the first 2-4 weeks. Significant growth typically occurs within 60-90 days as the organic momentum builds.',
  },
]);

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
