/**
 * ═══════════════════════════════════════════════════════════════════
 * BLOG CATEGORY PAGE
 * ───────────────────────────────────────────────────────────────────
 * Dynamic route for blog categories: /blog/category/[category]
 * Helps SEO by creating dedicated pages for each topic.
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { 
  getAllCategories, 
  getBlogPostsByCategory,
  getAllBlogPosts
} from '@/data/blog';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Create URL-safe slug from category name
function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
}

// Convert slug back to category name
function slugToCategory(slug: string): string | undefined {
  const allCategories = getAllCategories();
  return allCategories.find(cat => categoryToSlug(cat) === slug);
}

/**
 * Generate static params for all category pages
 */
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

/**
 * Generate dynamic metadata for each category page
 */
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = slugToCategory(params.category);
  
  if (!categoryName) {
    return { title: 'Category Not Found | The EDST Editorial' };
  }

  const canonicalUrl = `${siteConfig.url}/blog/category/${params.category}`;

  return {
    title: `${categoryName} Articles | The EDST Editorial`,
    description: `Read the latest ${categoryName.toLowerCase()} articles, insights, and strategies from The EDST Editorial. Expert marketing intelligence for creators and brands.`,
    keywords: [categoryName.toLowerCase(), 'marketing', 'social media', 'EDST', 'growth strategy'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${categoryName} | The EDST Editorial`,
      description: `Expert ${categoryName.toLowerCase()} articles and insights for creators and brands.`,
      url: canonicalUrl,
      siteName: 'The EDST Editorial',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | The EDST Editorial`,
      description: `Expert ${categoryName.toLowerCase()} articles and insights.`,
    },
    robots: { index: true, follow: true },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = slugToCategory(params.category);

  if (!categoryName) {
    notFound();
  }

  const posts = getBlogPostsByCategory(categoryName);
  const allCategories = getAllCategories();

  return (
    <main className="min-h-screen bg-[#090909]">
      <Navbar />
      
      {/* Breadcrumb */}
      <nav className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-edst-silver/60">
            <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li><Link href="/blog" className="hover:text-amber-400 transition-colors">The Editorial</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-amber-400">{categoryName}</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-edst-slate/20 pb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-4">
              Category
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-edst-white tracking-tight mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-edst-silver/70 max-w-2xl">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} on {categoryName.toLowerCase()}
            </p>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 text-sm rounded-full border border-edst-slate/20 text-edst-silver hover:text-amber-400 hover:border-amber-400/30 transition-all"
            >
              All Articles
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${categoryToSlug(cat)}`}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  cat === categoryName
                    ? 'border-amber-400/50 text-amber-400 bg-amber-400/5'
                    : 'border-edst-slate/20 text-edst-silver hover:text-amber-400 hover:border-amber-400/30'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10 hover:border-amber-400/20 transition-all"
                >
                  <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/70 mb-3 block">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-light text-edst-white leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-edst-silver/60 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-edst-silver/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-edst-silver mb-4">No articles found in this category.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                Browse all articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Back to Editorial */}
      <section className="px-4 py-8 border-t border-edst-slate/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-edst-silver hover:text-amber-400 transition-colors"
          >
            ← Back to The Editorial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}



