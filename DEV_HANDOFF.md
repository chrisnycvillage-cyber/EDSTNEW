# EDST Website - Developer Handoff Guide

**Project**: EDST - Social Media Growth & Viral Marketing Agency  
**Version**: 1.0.0  
**Last Updated**: December 2024

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type check
npm run type-check

# Lint
npm run lint

# Clean build cache
npm run clean
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics (GA4)
NEXT_PUBLIC_GA_ID=G-8XJFTW1FWQ

# Base URL for production
NEXT_PUBLIC_SITE_URL=https://edst.com

# (Future) Payment Processors
# NEXT_PUBLIC_STRIPE_KEY=pk_live_...
# NMI_API_KEY=...

# (Future) Authentication
# NEXTAUTH_SECRET=...
# NEXTAUTH_URL=...
```

### Required Variables for Production:
| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs and sitemap |

---

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (global SEO, analytics)
│   ├── page.tsx                 # Homepage
│   ├── opengraph-image.tsx      # Dynamic OG image generator
│   ├── twitter-image.tsx        # Dynamic Twitter card image
│   ├── marketing/               # Pricing page
│   ├── viral/                   # Viral marketing landing
│   ├── musician-campaigns/      # Artist campaigns landing
│   ├── business-campaigns/      # Business campaigns landing
│   ├── fitness/                 # Fit Biz program landing
│   ├── jointheteam/            # Partner recruitment landing
│   ├── about/                   # About page (founder, company story)
│   ├── contact/                 # Contact page with form
│   ├── case-studies/            # Case studies with real results
│   ├── blog/                    # Blog with 8+ SEO articles
│   │   └── [slug]/             # Individual blog posts
│   ├── us/                      # P-SEO pages (51 states + 300+ cities)
│   │   ├── page.tsx            # All states index
│   │   └── [stateSlug]/        # State pages
│   │       └── [citySlug]/     # City pages
│   ├── dashboard/               # Marketplace dashboard
│   │   ├── biz/                # Business Portal (CRM, tasks, etc.)
│   │   └── music/              # Music Career Portal
│   ├── partner/                 # Partner dashboard
│   ├── checkout/                # Checkout flow
│   └── terms/                   # Legal pages
│
├── components/                   # Reusable components
│   ├── SEO/                     # JSON-LD schema components
│   ├── pseo/                    # P-SEO specific components
│   ├── AsSeenIn.tsx            # Press logos carousel
│   ├── TrustBadges.tsx         # Trust indicators
│   └── VideoTestimonials.tsx   # Video testimonial slider
│
├── lib/                          # Utilities
│   ├── seo.ts                   # SEO utilities & schemas
│   ├── config.ts                # Site configuration
│   └── biz-store.ts             # Business Portal state
│
├── data/                         # Static data
│   ├── states.ts                # 51 US states for P-SEO
│   ├── cities.ts                # 300+ US cities for P-SEO
│   └── blog.ts                  # Blog posts database
│
└── public/                       # Static assets
    ├── images/story/            # Story section images
    ├── favicon.svg              # Favicon
    └── manifest.json            # PWA manifest
```

---

## P-SEO System (Programmatic SEO)

### How It Works
The P-SEO system generates 350+ pages with a State → City hierarchy:
- `/us` - All 50 states + DC index page
- `/us/{stateSlug}` - State landing pages (51 total)
- `/us/{stateSlug}/{citySlug}` - City pages (300+ total)

**Key Files:**
- `data/states.ts` - 51 state entries with unique content
- `data/cities.ts` - 300+ city entries linked to states
- `app/us/page.tsx` - All states index
- `app/us/[stateSlug]/page.tsx` - State page template
- `app/us/[stateSlug]/[citySlug]/page.tsx` - City page template
- `components/pseo/HomeByCityTemplate.tsx` - City page component
- `components/pseo/CityHero.tsx` - City-specific hero
- `components/pseo/CityIntroSection.tsx` - City intro content
- `components/pseo/CityInternalLinks.tsx` - Cross-linking

**Adding More States/Cities:**
1. Edit `data/states.ts` or `data/cities.ts`
2. Add new entries following the existing structure
3. Rebuild - pages auto-generate

**Unique Content Per Page:**
Each state and city has unique fields:
- `marketingHook` - Hero headline customization
- `localFact` - Local trivia/fact
- `keyIndustries` - Array of relevant industries
- `creatorScene` - Description of local creator community
- `businessVibe` - Description of local business environment

**SEO Features:**
- Dynamic `<title>` and `<meta description>` per page
- LocalBusiness JSON-LD schema per city
- Breadcrumb schema with State → City hierarchy
- Canonical URLs pointing to each specific page
- Internal linking to related cities within state
- Dynamic stats based on population/city count

---

## Portals (Marketplace Features)

### Business Portal (`/dashboard/biz/`)
A CRM/dashboard for clients to manage their business:
- **Overview**: Pipeline value, deals closed, monthly revenue
- **Pipeline**: Lead management with drag-and-drop stages
- **Calendar**: Appointments, follow-ups, events
- **Tasks**: Daily task management (Notion-style)
- **Resources**: Training content and templates

**Access Logic:**
- Available to all active EDST subscribers
- Highlighted/pinned for Fit Biz buyers

### Music Career Portal (`/dashboard/music/`)
A dashboard for musicians/artists:
- **Overview**: Career metrics summary
- **Stats Tracker**: Manual stream/follower tracking
- **Releases**: Track songs, albums, projects
- **Events**: Gigs, shows, appearances
- **Content Planner**: Content calendar
- **Industry Contacts**: Lightweight CRM
- **Goals**: Monthly targets with progress

**Access Logic:**
- Available to all active EDST subscribers
- Data is stored in `localStorage`

---

## SEO Implementation

### Global SEO (`lib/seo.ts`)
- `siteConfig` - Site-wide configuration
- `generateMetadata()` - Consistent metadata generation
- `pageSEO` - Pre-defined configs for main pages
- Schema generators: Organization, Service, FAQ, LocalBusiness, Breadcrumb

### Sitemap & Robots
- `app/sitemap.ts` - Dynamic sitemap including all 121 city pages
- `app/robots.ts` - Blocks `/dashboard/`, `/partner/`, `/checkout/`, `/api/`

### Schema Types Used
| Page Type | Schemas |
|-----------|---------|
| Homepage | Organization, WebSite |
| Pricing | Product, FAQPage |
| Service pages | Service, FAQPage |
| Partner/Join | JobPosting, FAQPage |
| City pages | LocalBusiness, BreadcrumbList |

---

## API Integration Points

These areas require backend integration:

### Authentication
- `app/login/page.tsx` - User login
- `app/partner/login/page.tsx` - Partner login
- `app/dashboard/layout.tsx` - Session management

### Payments
- `app/checkout/page.tsx` - Checkout flow
- `app/dashboard/subscriptions/page.tsx` - Subscription management
- `app/partner/billing/page.tsx` - Partner billing

### Data Storage
Currently using `localStorage` for:
- Business Portal leads (`biz-portal-leads`)
- Music Portal data (stats, releases, contacts, etc.)
- Partner tasks and calendar
- User type (`edst-user-type`)
- Access flags (`fitbiz-access`)

**Note:** All `localStorage` usage should be migrated to a database in production.

---

## Known TODOs

### Backend Integration Required
1. **Authentication system** - Replace demo login with real auth
2. **Payment processing** - NMI (primary) and Stripe integration
3. **Database** - Migrate localStorage to proper database
4. **Email notifications** - Transactional emails for orders, renewals
5. **Partner payout system** - Real payout calculations

### Optional Enhancements
1. ~~**OG Image**~~ - ✅ Dynamic OG images via `/app/opengraph-image.tsx`
2. **Image optimization** - Story section images are 2-3MB; could compress further
3. **API rate limiting** - When backend APIs are added
4. **Error tracking** - Add Sentry or similar
5. **Blog CMS** - Connect to headless CMS (Sanity, Contentful) for easier post management

---

## Performance Optimizations Applied

1. **Dynamic imports** - Heavy components lazy-loaded
2. **Image optimization** - Next.js Image component with lazy loading
3. **Bundle splitting** - Vendor and common chunks separated
4. **Console removal** - Removed in production builds
5. **SSR strategy** - Client-only components marked with `ssr: false`
6. **Unused code removed** - Deprecated `fitbiz` folder deleted

---

## Deployment Checklist

- [ ] Set all environment variables
- [x] OG images auto-generated dynamically
- [ ] Verify Google Analytics is tracking
- [ ] Test all checkout flows
- [ ] Verify sitemap at `/sitemap.xml` (includes 350+ P-SEO pages + 8 blog posts)
- [ ] Verify robots at `/robots.txt`
- [ ] Test on mobile devices
- [ ] Test P-SEO pages: `/us`, `/us/california`, `/us/california/los-angeles`
- [ ] Test blog pages: `/blog`, `/blog/how-to-go-viral-on-tiktok-2025`
- [ ] Test new pages: `/about`, `/contact`, `/case-studies`
- [ ] Connect authentication system
- [ ] Connect payment processors
- [ ] Set up database for user data
- [ ] Configure CDN for static assets
- [ ] Add Google Search Console verification code (placeholder in layout.tsx)

---

## Build Commands

```bash
# Development
npm run dev

# Production build (generates 400+ static pages)
npm run build

# Analyze bundle size (if needed)
ANALYZE=true npm run build

# Type checking only
npm run type-check
```

---

## Contact

For questions about this codebase, refer to the original development context or reach out to the project owner.

---

*Built with Next.js 14, React 18, Tailwind CSS, and Framer Motion*


