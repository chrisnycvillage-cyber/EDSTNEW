import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.partner.title,
    description: pageSEO.partner.description,
    keywords: pageSEO.partner.keywords,
    canonical: `${siteConfig.url}/jointheteam`,
  }),
};

// Job Posting Schema
const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'EDST Partner - Marketing & Sales',
  description: 'Build income and influence as an EDST Partner. Access daily training, the Partner Dashboard, mentorship, and real earning potential from $10K to $1M+. Remote, flexible schedule.',
  datePosted: '2024-01-01',
  validThrough: '2025-12-31',
  employmentType: 'CONTRACTOR',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'EDST',
    sameAs: siteConfig.url,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  },
  jobLocationType: 'TELECOMMUTE',
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 10000,
      maxValue: 1000000,
      unitText: 'YEAR',
    },
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'How much can EDST Partners earn?',
    answer: 'Partners earn from $10K to $1M+ annually based on performance. Compensation is commission-based with no caps. Top performers build teams and scale their income significantly.',
  },
  {
    question: 'What training do partners receive?',
    answer: 'Partners get daily Zoom training, access to the Partner Dashboard, sales scripts, client playbooks, marketing support, and direct mentorship from experienced team members.',
  },
  {
    question: 'Is this remote work?',
    answer: 'Yes, EDST Partners work remotely with flexible schedules. You set your own hours while participating in daily training calls and team activities.',
  },
]);

export default function JoinTheTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={jobPostingSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
