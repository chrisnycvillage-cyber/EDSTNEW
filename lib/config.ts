/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST SITE CONFIGURATION
 * ───────────────────────────────────────────────────────────────────
 * Edit this file to update copy, metrics, and content across the site.
 * ═══════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────
// BRAND COLORS
// ─────────────────────────────────────────────────────────────────
export const colors = {
  gold: '#FACC53',
  goldLight: '#FFE082',
  goldDark: '#D4A846',
  black: '#020309',
  blackAlt: '#050608',
  charcoal: '#0a0a10',
  slate: '#1a1a24',
  white: '#FAFAFA',
  silver: '#9ca3af',
  online: '#22c55e',
};

// ─────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────
export const hero = {
  badge: 'Always Online',
  headlineLine1: 'The Marketing Ecosystem',
  headlineLine2: 'That Never Sleeps.',
  subheadline: 'Everything you need to blow up — under one roof.',
  supportingLine: 'Real people. Real results.',
  primaryCta: 'Start Growing',
  secondaryCta: 'Explore',
};

// ─────────────────────────────────────────────────────────────────
// DAILY METRICS (Resets at midnight, grows throughout day)
// Based on: 2,000 clients, 1,000+ posts/day, avg 50K-500K per post
// Target: 2-8M per hour, ripping fast
// ─────────────────────────────────────────────────────────────────
export const dailyMetricsConfig = {
  label: 'LIVE GROWTH STATS',
  updateInterval: 400, // Update every 400ms for fast movement
  metrics: [
    {
      id: 'impressions',
      label: 'impressions today',
      // 2K clients × 1 post/day × 10K impressions = 200M/day = ~8.3M/hr
      // Range: 4.9M - 14.7M per hour (fluctuating)
      hourlyGrowthEarly: 9800000,   // Base ~9.8M/hr
      hourlyGrowthLate: 9800000,    // Consistent rate
      variance: 0.50,               // ±50% = 4.9M to 14.7M range
      incrementRange: [1500, 6000], // Fast visible movement
    },
    {
      id: 'views',
      label: 'views today',
      // ~65% of impressions = 3.2M - 9.5M/hr
      hourlyGrowthEarly: 6400000,
      hourlyGrowthLate: 6400000,
      variance: 0.50,
      incrementRange: [1000, 4000],
    },
    {
      id: 'followers',
      label: 'new followers',
      // 2K clients × ~50 new followers/day = 100K/day = ~4.2K/hr
      hourlyGrowthEarly: 4200,
      hourlyGrowthLate: 4200,
      variance: 0.40,
      incrementRange: [2, 10],
    },
    {
      id: 'engagement',
      label: 'engagements',
      // ~10% of views = 640K-950K/hr
      hourlyGrowthEarly: 640000,
      hourlyGrowthLate: 640000,
      variance: 0.50,
      incrementRange: [80, 350],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// YEARLY PERFORMANCE STATS (Bottom Panel)
// Based on: 2B views/month, 18B+ yearly
// ─────────────────────────────────────────────────────────────────
export const yearlyStats = {
  label: 'YEARLY PERFORMANCE',
  stats: [
    { 
      id: 'views', 
      value: '18.4B+', 
      label: 'Views Delivered',
      subtext: '~2B/month avg',
    },
    { 
      id: 'impressions', 
      value: '47.2B+', 
      label: 'Total Impressions',
      subtext: '~3.9B/month avg',
    },
    { 
      id: 'engagement', 
      value: '8.7%', 
      label: 'Avg. Engagement',
      subtext: 'Likes, saves, shares',
    },
    { 
      id: 'followers', 
      value: '24.8M+', 
      label: 'Followers Delivered',
      subtext: '~2M/month avg',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// ACTIVITY TICKER
// ─────────────────────────────────────────────────────────────────
export const tickerMessages = [
  // Viral moments
  { type: 'viral', text: 'Campaign went viral', icon: 'fire' },
  { type: 'viral', text: 'Content trending now', icon: 'fire' },
  { type: 'viral', text: 'Campaign is crushing', icon: 'trending' },
  { type: 'viral', text: 'Just hit trending page', icon: 'trending' },
  { type: 'viral', text: 'New account blowing up', icon: 'fire' },
  // Campaign updates
  { type: 'campaign', text: 'New viral campaign launched', icon: 'play' },
  { type: 'campaign', text: 'Campaign hitting targets', icon: 'trending' },
  { type: 'campaign', text: 'Client results delivered', icon: 'play' },
  { type: 'campaign', text: 'Another win for the team', icon: 'trending' },
  // PR & Press
  { type: 'pr', text: 'Press feature published', icon: 'newspaper' },
  { type: 'pr', text: 'Major coverage secured', icon: 'newspaper' },
  { type: 'pr', text: 'Article live now', icon: 'newspaper' },
  // Music
  { type: 'music', text: 'Song trending on charts', icon: 'music' },
  { type: 'music', text: 'New release charting', icon: 'music' },
  // Community
  { type: 'community', text: 'New member joined', icon: 'users' },
  { type: 'community', text: 'Community growing daily', icon: 'users' },
];

// ─────────────────────────────────────────────────────────────────
// LIVE ORDER NOTIFICATIONS
// ─────────────────────────────────────────────────────────────────
// Broad outcomes - not specific metrics
export const orderNotifications = [
  // Campaign wins
  { text: 'Campaign went viral', type: 'viral' },
  { text: 'Client crushing it rn', type: 'viral' },
  { text: 'Content is blowing up', type: 'viral' },
  { text: 'Another viral hit', type: 'viral' },
  { text: 'Campaign exceeding targets', type: 'viral' },
  { text: 'Account blowing up', type: 'viral' },
  // Results delivered
  { text: 'Results delivered', type: 'success' },
  { text: 'Campaign complete', type: 'success' },
  { text: 'Client goal hit', type: 'success' },
  { text: 'Another win delivered', type: 'success' },
  { text: 'Targets exceeded', type: 'success' },
  // Trending moments
  { text: 'Content trending now', type: 'viral' },
  { text: 'Just hit trending page', type: 'viral' },
  { text: 'This one is popping off', type: 'viral' },
  { text: 'Going crazy right now', type: 'viral' },
  // PR & Press
  { text: 'Press feature live', type: 'pr' },
  { text: 'Article published', type: 'pr' },
  { text: 'Media coverage secured', type: 'pr' },
  // Music
  { text: 'Song charting now', type: 'music' },
  { text: 'Track trending', type: 'music' },
  // Community
  { text: 'New member onboarded', type: 'community' },
  { text: 'Community call today', type: 'community' },
];

// ─────────────────────────────────────────────────────────────────
// ECOSYSTEM SECTION
// ─────────────────────────────────────────────────────────────────
export const ecosystem = {
  badge: 'What\'s Inside',
  headline: 'Everything You Need. One Place.',
  subheadline: 'All under one roof — built to blow you up.',
  statusText: 'All systems active',
  engines: [
    // TOP ROW - Core Business
    {
      id: 'marketing',
      title: 'Marketing & Growth',
      description: 'Viral campaigns, social media growth, content distribution, and more.',
      metrics: [
        { label: 'Clients served', value: 30, suffix: 'K+' },
        { label: 'Countries', value: 37, suffix: '+' },
      ],
    },
    {
      id: 'advertising',
      title: 'Paid Advertising',
      description: 'Fully managed ad campaigns across all major platforms that actually convert.',
      metrics: [
        { label: 'Ad spend managed', value: 10, suffix: 'M+' },
        { label: 'Campaigns run', value: 250, suffix: '+' },
      ],
    },
    {
      id: 'pr',
      title: 'Public Relations',
      description: 'Press features, news articles, reputation management, and knowledge panels.',
      metrics: [
        { label: 'Placements', value: 2800, suffix: '+' },
        { label: 'Total reach', value: 450, suffix: 'M' },
      ],
    },
    // BOTTOM ROW - Supporting
    {
      id: 'content',
      title: 'Content Production',
      description: 'Short form, long form, VSLs, music videos, commercials, podcasts — we create it all.',
      metrics: [
        { label: 'Pieces delivered', value: 107, suffix: 'K+' },
        { label: 'Creators served', value: 3200, suffix: '+' },
      ],
    },
    {
      id: 'music',
      title: 'Music Marketing',
      description: 'Streaming platform campaigns, playlist placements, and more — get your music heard.',
      metrics: [
        { label: 'Artists helped', value: 17, suffix: 'K+' },
        { label: 'Songs trending', value: 500, suffix: '+' },
      ],
    },
    {
      id: 'community',
      title: 'Exclusive Community',
      description: 'A private network of creators sharing content, engaging, and pushing each other forward. Included with every plan.',
      metrics: [
        { label: 'Members', value: 10, suffix: 'K+' },
        { label: 'Daily engagement', value: 1200, suffix: '+' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// SERVICE CATEGORIES
// ─────────────────────────────────────────────────────────────────
export const serviceCategories = {
  // TOP ROW - Core Business
  marketing: {
    title: 'Marketing & Growth',
    items: ['Viral Campaigns', 'Social Media Growth', 'DM Campaigns', 'Influencer Marketing', 'Content Distribution', 'Trending Sounds', 'Platform Growth', 'Seed Posting', 'Viral Strategies'],
  },
  advertising: {
    title: 'Paid Advertising',
    items: ['Ad Buying', 'Social Ads', 'Search Ads', 'Video Ads', 'Display Ads', 'Creative Marketing', 'Campaign Management'],
  },
  pr: {
    title: 'Public Relations',
    items: ['1,000+ Articles', 'Major Publications', 'News Syndication', 'Reputation Management', 'Knowledge Panels'],
  },
  // BOTTOM ROW - Supporting
  content: {
    title: 'Content Production',
    items: ['Short Form Editing', 'Long Form Editing', 'VSL Production', 'Music Videos', 'Podcast Production', 'Ad Creative', 'UGC Content', 'Commercials'],
  },
  music: {
    title: 'Music Marketing',
    items: ['Trending Campaigns', 'Streaming Growth', 'Playlist Placement', 'Charting Campaigns', 'Music Distribution'],
  },
  community: {
    title: 'Community & Strategy',
    items: ['Exclusive Community', 'Consulting Calls', 'Brand Strategy', 'Funnel Build Outs', 'Business Development'],
  },
};

// ─────────────────────────────────────────────────────────────────
// SERVICES SECTION
// ─────────────────────────────────────────────────────────────────
export const services = {
  badge: 'What We Do',
  headline: 'Everything You Need to Scale.',
  subheadline: 'Marketing. Ads. PR. Content. Music. Community. All under one roof.',
};

// ─────────────────────────────────────────────────────────────────
// TESTIMONIALS & STATS
// ─────────────────────────────────────────────────────────────────
export const stats = {
  badges: [
    { value: '30,000+', label: 'Clients Served' },
    { value: '24/7', label: 'Always Running' },
    { value: '37+', label: 'Countries' },
  ],
};

export const testimonials = {
  headline: 'Real Results.',
  headlineAccent: 'Real People.',
  subheadline: 'Powering businesses, artists, and entrepreneurs worldwide.',
  items: [
    {
      quote: "Everyday Success Team changed the way I saw my business. Not only did my following and my sales grow, but I was enveloped into such a supportive community that want to see each other succeed.",
      author: 'Alexandra Castle',
      role: 'Founder, Castle Art',
      result: 'Verified',
    },
    {
      quote: "The service has been absolutely fantastic – It has helped automate my business in ways I did not know was possible. I appreciate the team at EDST...great guys.",
      author: 'Dr. Dan',
      role: 'Chiropractor & Wellness Expert',
      result: 'Verified',
    },
    {
      quote: "Without this company it would have taken me years to get to the point I am in my business. So grateful for them!",
      author: 'Rebecca B.',
      role: 'Entrepreneur & Writer',
      result: 'Verified',
    },
    {
      quote: "EDST has changed my way of life! They bring me value that I didn't know was out there and it's not just the services they provide, it's the genuine care they have for everyone they work with.",
      author: 'Isaiah Haynes',
      role: 'Musician',
      result: 'Verified',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// DASHBOARD SECTION
// ─────────────────────────────────────────────────────────────────
export const dashboard = {
  badge: 'Real-Time Analytics',
  headline: 'Real People,',
  headlineAccent: 'Real Results.',
  subheadline: 'Track performance across all campaigns with complete visibility.',
};

// ─────────────────────────────────────────────────────────────────
// CTA SECTION
// ─────────────────────────────────────────────────────────────────
export const cta = {
  headline: 'Your Growth Shouldn\'t Sleep.',
  headlineAccent: 'Neither Do We.',
  subheadline: 'Apply to work with EDST — we only take on aligned clients who are ready to scale.',
  buttonText: 'Start Your Growth Journey',
  trustNote: 'Join 30K+ growing with EDST',
  metrics: [
    { value: '24/7', label: 'Always Running' },
    { value: '37+', label: 'Countries' },
    { value: '30K+', label: 'Clients Served' },
  ],
};

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────
export const navigation = {
  links: [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Analytics', href: '#dashboard' },
  ],
  ctaText: 'Get Started',
  statusText: 'EDST Systems: ONLINE',
};

// ─────────────────────────────────────────────────────────────────
// SERVICE MARQUEE
// ─────────────────────────────────────────────────────────────────
export const serviceMarquee = [
  'Viral Clipping',
  'Ad Buying',
  'Press Features',
  'Funnel Build Outs',
  'Influencer Marketing',
  'Viral Growth',
  'Short Form Editing',
  'Brand Deals',
  'Podcast Promo',
  'Music Marketing',
  'Content Creation',
  'Social Management',
  'Lead Generation',
  'Paid Ads',
];
