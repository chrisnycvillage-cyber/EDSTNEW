import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDST Capital | Small Business Funding in 24 Hours',
  description: 'Get fast, flexible business funding from $5K to $5M+. Same-day approval, no collateral required, all credit types welcome. Apply in 2 minutes and get funded in 24 hours.',
  keywords: [
    'small business loans',
    'business funding',
    'merchant cash advance',
    'MCA',
    'business capital',
    'fast business loans',
    'working capital',
    'equipment financing',
    'business line of credit',
    'EDST Capital',
  ],
  openGraph: {
    title: 'EDST Capital | Small Business Funding in 24 Hours',
    description: 'Get fast, flexible business funding from $5K to $5M+. Same-day approval, no collateral required. Apply now.',
    url: 'https://edst.com/capital',
    siteName: 'EDST',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDST Capital | Small Business Funding in 24 Hours',
    description: 'Get fast, flexible business funding from $5K to $5M+. Same-day approval, no collateral required.',
  },
};

export default function CapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

