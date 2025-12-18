/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC ROBOTS.TXT
 * ───────────────────────────────────────────────────────────────────
 * Controls search engine crawling behavior
 * ═══════════════════════════════════════════════════════════════════
 */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://edst.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Dashboard & authenticated areas
          '/dashboard/',
          '/partner/',
          '/checkout/',
          '/api/',
          // Admin/internal
          '/_next/',
          '/private/',
          // Any staging or test routes
          '/test/',
          '/preview/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/partner/',
          '/checkout/',
          '/api/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}




