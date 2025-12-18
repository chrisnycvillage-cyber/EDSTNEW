import type { Metadata } from 'next';
import { generateMetadata as genMeta, pageSEO, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.terms.title,
    description: pageSEO.terms.description,
    keywords: pageSEO.terms.keywords,
    canonical: `${siteConfig.url}/terms`,
    noIndex: false, // Terms pages should be indexed but are low priority
  }),
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
