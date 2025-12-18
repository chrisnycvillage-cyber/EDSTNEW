import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';
import { 
  ArrowLeft, 
  Clock, 
  ArrowRight,
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react';

interface BlogPostPageProps {
  params: { slug: string };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      siteName: 'The EDST Editorial',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://edst.com/blog/${post.slug}`,
    },
  };
}

// Convert markdown-style content to HTML-like JSX
function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let currentList: string[] = [];
  let listKey = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-3 mb-8 ml-4">
          {currentList.map((item, i) => (
            <li key={i} className="text-edst-silver/80 leading-relaxed pl-4 border-l-2 border-edst-gold/20">
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) {
      flushList();
      return;
    }

    // Headers
    if (trimmedLine.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-light text-edst-white mt-12 mb-6">
          {trimmedLine.replace('## ', '')}
        </h2>
      );
      return;
    }

    if (trimmedLine.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-xl font-light text-edst-white mt-10 mb-4">
          {trimmedLine.replace('### ', '')}
        </h3>
      );
      return;
    }

    // Bold text handling (standalone bold paragraphs)
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      flushList();
      const text = trimmedLine.slice(2, -2);
      elements.push(
        <p key={index} className="text-edst-white font-medium mb-6 text-lg">
          {text}
        </p>
      );
      return;
    }

    // List items
    if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\. /)) {
      const content = trimmedLine.replace(/^-\s+/, '').replace(/^\d+\.\s+/, '');
      currentList.push(content);
      return;
    }

    // Horizontal rule
    if (trimmedLine === '---') {
      flushList();
      elements.push(
        <hr key={index} className="border-edst-slate/10 my-12" />
      );
      return;
    }

    // Italic/emphasis in text
    if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && !trimmedLine.startsWith('**')) {
      flushList();
      const text = trimmedLine.slice(1, -1);
      elements.push(
        <p key={index} className="text-edst-silver/60 italic mb-6">
          {text}
        </p>
      );
      return;
    }

    // Regular paragraphs
    flushList();
    let processedLine = trimmedLine;
    // Handle **bold** text inline
    processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-edst-white font-medium">$1</strong>');
    
    elements.push(
      <p 
        key={index} 
        className="text-edst-silver/80 leading-[1.8] mb-6 text-[17px]"
        dangerouslySetInnerHTML={{ __html: processedLine }}
      />
    );
  });

  flushList();
  return elements;
}

// Share button component (client-side)
function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://edst.com/blog/${slug}`;
  
  return (
    <div className="flex items-center gap-3">
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-edst-charcoal/30 text-edst-silver/60 hover:text-edst-gold hover:bg-edst-charcoal/50 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-edst-charcoal/30 text-edst-silver/60 hover:text-edst-gold hover:bg-edst-charcoal/50 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://edst.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'EDST',
      url: 'https://edst.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://edst.com/favicon.svg'
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://edst.com/blog/${post.slug}`
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://edst.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'The Editorial',
        item: 'https://edst.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://edst.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="min-h-screen bg-edst-black">
        <Navbar />
        
        {/* Header */}
        <header className="pt-28 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-edst-silver/40 mb-8">
              <Link href="/" className="hover:text-edst-silver transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-edst-silver transition-colors">The Editorial</Link>
              <span>/</span>
              <span className="text-edst-silver/60 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-edst-gold">
                {post.category}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-edst-silver/40">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-edst-white mb-8 leading-[1.15]">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-edst-silver/70 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author & Share */}
            <div className="flex items-center justify-between py-6 border-y border-edst-slate/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-edst-gold/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-edst-gold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-edst-white">{post.author}</div>
                  <div className="text-xs text-edst-silver/40">{post.readTime} min read</div>
                </div>
              </div>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Tags */}
        <section className="px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-edst-silver/50 border border-edst-slate/10 hover:border-edst-gold/20 hover:text-edst-gold/70 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Continue Exploring CTA */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 border border-edst-slate/10 bg-edst-charcoal/5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-edst-gold mb-3">
                Continue Exploring
              </p>
              <h3 className="text-xl font-light text-edst-white mb-3">
                Put These Insights Into Action
              </h3>
              <p className="text-edst-silver/60 text-sm mb-6">
                From viral campaigns to full-scale brand development — explore how EDST helps creators and brands grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/marketing"
                  className="inline-flex items-center gap-2 text-sm text-edst-gold hover:text-edst-gold-light transition-colors"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm text-edst-silver/60 hover:text-edst-silver transition-colors"
                >
                  Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="px-4 py-16 border-t border-edst-slate/10 bg-edst-charcoal/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-edst-silver/50 mb-10 pb-4 border-b border-edst-slate/10">
                Related Reading
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-edst-gold/70 mb-3 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-light text-edst-white mb-3 group-hover:text-edst-gold transition-colors leading-snug">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-edst-silver/50 line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-[10px] text-edst-silver/40">
                      {relatedPost.readTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Editorial */}
        <section className="px-4 py-12 border-t border-edst-slate/10">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-edst-silver/60 hover:text-edst-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to The Editorial
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
