'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * AS SEEN IN - Press Logos Component
 * ───────────────────────────────────────────────────────────────────
 * Displays media outlets that have featured EDST
 * ═══════════════════════════════════════════════════════════════════
 */

// Ordered by recognition/prestige - best ones show first in scroll
const pressLogos = [
  { name: 'Forbes', logo: 'Forbes' },
  { name: 'Entrepreneur', logo: 'Entrepreneur' },
  { name: 'Wired', logo: 'Wired' },
  { name: 'Rolling Stone', logo: 'Rolling Stone' },
  { name: 'Business Insider', logo: 'Business Insider' },
  { name: 'USA Today', logo: 'USA Today' },
  { name: 'Yahoo Finance', logo: 'Yahoo Finance' },
  { name: "Men's Health", logo: "Men's Health" },
  { name: 'Maxim', logo: 'Maxim' },
  { name: 'Tech Times', logo: 'Tech Times' },
  { name: 'Digital Trends', logo: 'Digital Trends' },
  { name: 'MSN', logo: 'MSN' },
  { name: 'LA Weekly', logo: 'LA Weekly' },
  { name: 'NY Weekly', logo: 'NY Weekly' },
  { name: 'Hollywood Unlocked', logo: 'Hollywood Unlocked' },
  { name: 'Earmilk', logo: 'Earmilk' },
  { name: 'Galore Magazine', logo: 'Galore' },
  { name: 'Bust Magazine', logo: 'Bust' },
];

interface AsSeenInProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function AsSeenIn({ variant = 'full', className = '' }: AsSeenInProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        <span className="text-xs text-edst-silver/60 uppercase tracking-wider">As Seen In</span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {pressLogos.slice(0, 5).map((press) => (
            <span
              key={press.name}
              className="text-xs font-medium text-edst-silver/40 hover:text-edst-silver/70 transition-colors"
            >
              {press.logo}
            </span>
          ))}
          <span className="text-xs text-edst-silver/40">+ more</span>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-edst-silver/40 uppercase tracking-widest mb-6">
          As Seen In
        </p>
        
        {/* Scrolling marquee effect */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
            {[...pressLogos, ...pressLogos].map((press, i) => (
              <div
                key={`${press.name}-${i}`}
                className="flex items-center justify-center px-6 py-3"
              >
                <span className="text-lg md:text-xl font-semibold text-edst-silver/30 hover:text-edst-silver/60 transition-colors cursor-default">
                  {press.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Static version for smaller screens or no-animation preference */}
        <noscript>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {pressLogos.map((press) => (
              <span
                key={press.name}
                className="text-sm font-medium text-edst-silver/40"
              >
                {press.logo}
              </span>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}

export default AsSeenIn;

