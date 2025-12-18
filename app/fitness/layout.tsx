import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.fitness.title,
    description: pageSEO.fitness.description,
    keywords: pageSEO.fitness.keywords,
    canonical: `${siteConfig.url}/fitness`,
  }),
};

// Service Schema for Fitness
const serviceSchema = generateServiceSchema({
  name: 'Fitness Business & Marketing Program',
  description: 'Build a profitable fitness coaching business with EDST. Community coaching at $129/month or VIP program at $1,950. Marketing, sales training, content systems, and business strategy.',
  serviceType: 'Fitness Business Coaching',
  url: `${siteConfig.url}/fitness`,
  priceRange: '$$',
});

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'How much can I earn as a fitness coach?',
    answer: 'Our members typically build to $3K-$5K/month within the first few months, with many scaling to $10K+/month. Results depend on your effort, client acquisition, and pricing strategy.',
  },
  {
    question: 'What is included in Fit Biz Community?',
    answer: 'Fit Biz Community ($129/month) includes WhatsApp community access, weekly live calls, offer templates, sales scripts, content strategies, and the EDST Business Portal for tracking leads and revenue.',
  },
  {
    question: 'What is the difference between Community and VIP?',
    answer: 'VIP ($1,950 one-time) includes everything in Community plus 1-on-1 coaching, done-for-you content templates, advanced sales training, and priority support. VIP is a 6-month intensive program.',
  },
]);

export default function FitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
