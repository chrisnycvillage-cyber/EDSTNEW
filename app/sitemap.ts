/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC SITEMAP GENERATOR
 * ───────────────────────────────────────────────────────────────────
 * Generates sitemap.xml with all public pages including P-SEO states & cities
 * URL Structure: /us → /us/[state] → /us/[state]/[city]
 * ═══════════════════════════════════════════════════════════════════
 */

import { MetadataRoute } from 'next';
import { states } from '@/data/states';
import { cities } from '@/data/cities';
import { blogPosts, getAllCategories } from '@/data/blog';
import { industries } from '@/data/industries';
import { comparisons } from '@/data/comparisons';

const BASE_URL = 'https://edst.com';

// Helper to create category slug
function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // ─────────────────────────────────────────────────────────────────
  // CORE MARKETING PAGES
  // ─────────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/marketing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/viral`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/musician-campaigns`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/business-campaigns`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/fitness`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/jointheteam`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // ─────────────────────────────────────────────────────────────────
  // P-SEO INDEX PAGE (All States)
  // ─────────────────────────────────────────────────────────────────
  const indexPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/us`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // ─────────────────────────────────────────────────────────────────
  // P-SEO STATE PAGES (50 states + DC)
  // ─────────────────────────────────────────────────────────────────
  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${BASE_URL}/us/${state.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ─────────────────────────────────────────────────────────────────
  // P-SEO CITY PAGES (100+ cities)
  // URL: /us/[stateSlug]/[citySlug]
  // ─────────────────────────────────────────────────────────────────
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/us/${city.stateSlug}/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ─────────────────────────────────────────────────────────────────
  // BLOG POSTS
  // ─────────────────────────────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ─────────────────────────────────────────────────────────────────
  // INDUSTRY PAGES (50+ industries)
  // URL: /industries → /industries/[industrySlug]
  // ─────────────────────────────────────────────────────────────────
  const industryIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/industries`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ─────────────────────────────────────────────────────────────────
  // BLOG CATEGORY PAGES
  // URL: /blog/category/[categorySlug]
  // ─────────────────────────────────────────────────────────────────
  const blogCategories = getAllCategories();
  const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map((category) => ({
    url: `${BASE_URL}/blog/category/${categoryToSlug(category)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // ─────────────────────────────────────────────────────────────────
  // COMPARISON PAGES (EDST vs Alternatives)
  // URL: /compare → /compare/[slug]
  // ─────────────────────────────────────────────────────────────────
  const compareIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/compare`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const comparePages: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
    url: `${BASE_URL}/compare/${comparison.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Total pages: ~15 core + locations (1 index + 51 states + 300+ cities) + blog (index + posts + categories) + industries (1 index + 50+) + comparisons
  return [
    ...corePages, 
    ...indexPage, 
    ...statePages, 
    ...cityPages, 
    ...blogPostPages,
    ...blogCategoryPages,
    ...industryIndexPage,
    ...industryPages,
    ...compareIndexPage,
    ...comparePages,
  ];
}
