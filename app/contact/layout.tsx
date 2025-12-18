import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with EDST',
  description: 'Ready to grow your brand? Contact EDST for social media growth, viral marketing, and creator campaigns. Response time under 2 hours.',
  alternates: {
    canonical: 'https://edst.com/contact',
  },
  openGraph: {
    title: 'Contact EDST | Social Media Growth Agency',
    description: 'Ready to grow your brand? Contact EDST for social media growth, viral marketing, and creator campaigns.',
    url: 'https://edst.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



