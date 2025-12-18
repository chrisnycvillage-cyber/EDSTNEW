'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * THE EDST EDITORIAL - Premium Marketing Intelligence
 * ───────────────────────────────────────────────────────────────────
 * Forbes-level editorial design with unified aesthetic
 * ═══════════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { getAllBlogPosts } from '@/data/blog';
import { ArrowRight, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

const SubmitStoryModal = dynamic(() => import('@/components/SubmitStoryModal').then(mod => mod.SubmitStoryModal), { ssr: false });

export default function BlogPage() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  
  const allPosts = getAllBlogPosts();
  
  // Rotate hero every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Layout sections
  const heroPost = allPosts[highlightIndex];
  const featuredPosts = allPosts.slice(0, 3);
  const midSectionPosts = allPosts.slice(3, 6);
  const remainingPosts = allPosts.slice(6);

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Masthead */}
      <header className="pt-24 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between border-b border-edst-slate/20 pb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extralight text-edst-white tracking-tight">
                The Editorial
              </h1>
              <p className="text-xs tracking-[0.2em] uppercase text-edst-silver/50 mt-1">
                Marketing Intelligence by EDST
              </p>
            </div>
            <p className="hidden md:block text-[10px] tracking-wider uppercase text-edst-silver/40">
              {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section - Large Feature */}
      {heroPost && (
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link href={`/blog/${heroPost.slug}`} className="group block">
              <div className="relative py-16 md:py-24 border-b border-edst-slate/10">
                {/* Rotating indicator */}
                <div className="absolute top-0 left-0 flex gap-2 py-4">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.preventDefault(); setHighlightIndex(i); }}
                      className={`h-0.5 transition-all duration-500 ${
                        i === highlightIndex ? 'w-8 bg-edst-gold' : 'w-4 bg-edst-slate/30 hover:bg-edst-slate/50'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-edst-gold">
                      {heroPost.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-edst-silver/40">
                      {new Date(heroPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-edst-white leading-[1.05] mb-8 group-hover:text-edst-gold transition-colors duration-500">
                    {heroPost.title}
                  </h2>
                  
                  <p className="text-xl text-edst-silver/70 leading-relaxed max-w-2xl mb-8">
                    {heroPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-edst-gold group-hover:gap-4 transition-all">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Three Column Feature */}
      <section className="px-4 py-12 border-y border-edst-slate/10 bg-edst-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 divide-x divide-edst-slate/10">
            {featuredPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group block p-6 md:p-8 ${idx === highlightIndex ? 'opacity-40' : ''}`}
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-edst-gold/70 mb-4 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-light text-edst-white leading-snug mb-4 group-hover:text-edst-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-edst-silver/60 line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[10px] text-edst-silver/40">
                  {post.readTime} min read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle Services CTA - Integrated naturally */}
      <section className="px-4 py-6 border-b border-edst-slate/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-sm text-edst-silver/50">
              Looking to grow your brand?
            </p>
            <Link 
              href="/marketing" 
              className="text-sm text-edst-gold hover:text-edst-gold-light transition-colors flex items-center gap-2"
            >
              Explore EDST Services
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid Section - Mixed Layout */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-edst-silver/50 mb-10 pb-4 border-b border-edst-slate/10">
            Latest Intelligence
          </h2>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Large Feature */}
            {midSectionPosts[0] && (
              <Link
                href={`/blog/${midSectionPosts[0].slug}`}
                className="lg:col-span-7 group"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-edst-gold/70 mb-3 block">
                  {midSectionPosts[0].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-extralight text-edst-white leading-tight mb-4 group-hover:text-edst-gold transition-colors">
                  {midSectionPosts[0].title}
                </h3>
                <p className="text-edst-silver/60 leading-relaxed mb-4 max-w-xl">
                  {midSectionPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-edst-silver/40">
                  <span>{midSectionPosts[0].readTime} min read</span>
                  <span>•</span>
                  <span>{new Date(midSectionPosts[0].publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </Link>
            )}
            
            {/* Stacked smaller */}
            <div className="lg:col-span-5 space-y-8">
              {midSectionPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block pb-8 border-b border-edst-slate/10 last:border-0 last:pb-0"
                >
                  <span className="text-[9px] uppercase tracking-[0.3em] text-edst-gold/70 mb-2 block">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-light text-edst-white leading-snug mb-2 group-hover:text-edst-gold transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-[10px] text-edst-silver/40">
                    {post.readTime} min
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="px-4 py-20 border-y border-edst-slate/10">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-extralight text-edst-silver/70 leading-relaxed italic">
            "The best marketing reads like intelligence, not advertising."
          </blockquote>
          <cite className="text-[10px] uppercase tracking-[0.3em] text-edst-silver/40 mt-6 block not-italic">
            — The EDST Editorial
          </cite>
        </div>
      </section>

      {/* Remaining Articles - Clean List */}
      {remainingPosts.length > 0 && (
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-edst-silver/50 mb-10 pb-4 border-b border-edst-slate/10">
              More Stories
            </h2>
            
            <div className="space-y-0">
              {remainingPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-6 py-6 border-b border-edst-slate/10"
                >
                  {/* Number */}
                  <span className="text-3xl font-extralight text-edst-slate/20 group-hover:text-edst-gold/20 transition-colors w-12 flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-edst-gold/70">
                        {post.category}
                      </span>
                      <span className="text-[9px] text-edst-silver/30">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-edst-white group-hover:text-edst-gold transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-edst-silver/50 line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Read time */}
                  <div className="hidden sm:flex items-center gap-1 text-[10px] text-edst-silver/40 flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Publish CTA */}
      <section className="px-4 py-16 bg-gradient-to-b from-edst-charcoal/10 to-transparent border-t border-edst-slate/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[9px] uppercase tracking-[0.3em] text-edst-gold mb-4">For Industry Leaders</p>
            <h3 className="text-3xl font-extralight text-edst-white mb-4">
              Publish With The Editorial
            </h3>
            <p className="text-edst-silver/60 leading-relaxed mb-8">
              Share your expertise with our audience of creators and entrepreneurs. 
              Premium placement, editorial support, and distribution across our network.
            </p>
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-3 text-edst-gold hover:text-edst-gold-light transition-colors"
            >
              Submit Your Story
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="px-4 py-12 border-t border-edst-slate/10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-edst-silver/50 mb-4">
            Subscribe to The Editorial
          </p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-transparent border border-edst-slate/20 border-r-0 text-edst-white text-sm placeholder:text-edst-silver/30 focus:border-edst-gold/50 focus:outline-none"
            />
            <button className="px-6 py-3 bg-edst-gold text-edst-black text-sm font-medium hover:bg-edst-gold-light transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Submit Story Modal */}
      <SubmitStoryModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </main>
  );
}
