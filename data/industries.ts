/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST INDUSTRY DATABASE — 50+ INDUSTRIES
 * ───────────────────────────────────────────────────────────────────
 * Comprehensive industry coverage for targeted marketing.
 * URL structure: /industries → /industries/[industrySlug]
 * ═══════════════════════════════════════════════════════════════════
 */

export interface Industry {
  name: string;
  slug: string;
  category: IndustryCategory;
  icon: string; // Lucide icon name
  tagline: string;
  description: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Content
  heroHeadline: string;
  heroSubheadline: string;
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  // Related
  relatedIndustries: string[];
  popularServices: string[];
}

export type IndustryCategory = 
  | 'entertainment'
  | 'healthcare'
  | 'business'
  | 'lifestyle'
  | 'professional'
  | 'food'
  | 'tech'
  | 'retail'
  | 'creative';

export const industryCategories: Record<IndustryCategory, { name: string; description: string }> = {
  entertainment: { name: 'Entertainment & Media', description: 'Music, gaming, sports, and content creation' },
  healthcare: { name: 'Healthcare & Wellness', description: 'Medical, dental, mental health, and fitness' },
  business: { name: 'Business Services', description: 'Finance, legal, consulting, and professional services' },
  lifestyle: { name: 'Lifestyle & Consumer', description: 'Fashion, beauty, travel, and luxury brands' },
  professional: { name: 'Professional Services', description: 'Coaches, consultants, and service providers' },
  food: { name: 'Food & Hospitality', description: 'Restaurants, bars, catering, and hospitality' },
  tech: { name: 'Technology', description: 'SaaS, apps, crypto, and tech startups' },
  retail: { name: 'Retail & E-commerce', description: 'Online stores, local retail, and D2C brands' },
  creative: { name: 'Creative Industries', description: 'Photography, design, art, and creative services' },
};

export const industries: Industry[] = [
  // ═══════════════════════════════════════════════════════════════
  // ENTERTAINMENT & MEDIA
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Music & Artists',
    slug: 'music',
    category: 'entertainment',
    icon: 'Music',
    tagline: 'Blow up your music career',
    description: 'From independent artists to label-signed musicians, we help artists build fanbases, increase streams, and create viral moments.',
    metaTitle: 'Music Marketing Agency | Artist Promotion | EDST',
    metaDescription: 'EDST helps musicians and artists grow their fanbase, increase streams, and go viral. Trusted by 10,000+ artists. Start growing today.',
    keywords: ['music marketing', 'artist promotion', 'music promotion agency', 'spotify promotion', 'artist growth', 'music industry marketing'],
    heroHeadline: 'Marketing for Musicians Who Want to Blow Up',
    heroSubheadline: 'From bedroom producers to touring artists — we help musicians build real fanbases that stream, buy, and show up.',
    challenges: [
      'Getting noticed in a sea of 100K daily uploads',
      'Building genuine fan engagement, not fake numbers',
      'Converting listeners into superfans who buy merch and tickets',
      'Standing out without a major label budget'
    ],
    solutions: [
      'Targeted content distribution to your ideal listener demographic',
      'Viral campaign strategies designed for music discovery',
      'Playlist pitching and algorithmic optimization',
      'Fan engagement systems that build real community'
    ],
    results: [
      { metric: 'Avg Stream Increase', value: '340%' },
      { metric: 'Artists Served', value: '10K+' },
      { metric: 'Viral Campaigns', value: '500+' },
      { metric: 'Monthly Listeners Added', value: '50M+' }
    ],
    testimonialQuote: "EDST took me from 500 monthly listeners to 50K in 3 months. The growth was organic and the fans actually engage.",
    testimonialAuthor: "Marcus J.",
    testimonialRole: "Independent Hip-Hop Artist",
    relatedIndustries: ['podcasts', 'entertainment', 'influencers'],
    popularServices: ['Organic Growth', 'Viral Campaigns', 'Content Distribution', 'Press & PR']
  },
  {
    name: 'Podcasts',
    slug: 'podcasts',
    category: 'entertainment',
    icon: 'Mic',
    tagline: 'Grow your podcast audience',
    description: 'Help your podcast break through the noise with strategic marketing that drives downloads, ratings, and loyal listeners.',
    metaTitle: 'Podcast Marketing Agency | Grow Your Audience | EDST',
    metaDescription: 'EDST helps podcasters grow their audience, increase downloads, and land sponsorships. Proven strategies for podcast growth.',
    keywords: ['podcast marketing', 'podcast promotion', 'grow podcast audience', 'podcast advertising', 'podcast growth agency'],
    heroHeadline: 'Podcast Marketing That Gets You Heard',
    heroSubheadline: 'More than 5 million podcasts exist. We help yours stand out and build an audience that actually listens.',
    challenges: [
      'Standing out among 5+ million podcasts',
      'Growing beyond friends and family listeners',
      'Getting discovered on Apple, Spotify, and YouTube',
      'Building enough audience to attract sponsors'
    ],
    solutions: [
      'Cross-platform promotion strategies',
      'Audiogram and clip optimization for social',
      'Guest booking and cross-promotion networks',
      'Review generation and chart climbing tactics'
    ],
    results: [
      { metric: 'Avg Download Increase', value: '280%' },
      { metric: 'Podcasts Helped', value: '1,200+' },
      { metric: 'Top 100 Placements', value: '85+' },
      { metric: 'Sponsor Deals Landed', value: '200+' }
    ],
    relatedIndustries: ['music', 'influencers', 'coaches'],
    popularServices: ['Audience Growth', 'Social Clips', 'Review Campaigns', 'Sponsorship Prep']
  },
  {
    name: 'Gaming & Esports',
    slug: 'gaming',
    category: 'entertainment',
    icon: 'Gamepad2',
    tagline: 'Level up your gaming brand',
    description: 'From streamers to esports orgs, we help gaming creators and brands build engaged communities and go viral.',
    metaTitle: 'Gaming Marketing Agency | Streamer Growth | EDST',
    metaDescription: 'EDST helps gamers, streamers, and esports brands grow their audience. Proven strategies for Twitch, YouTube Gaming, and more.',
    keywords: ['gaming marketing', 'streamer growth', 'esports marketing', 'twitch promotion', 'gaming influencer agency'],
    heroHeadline: 'Gaming Marketing for Creators & Brands',
    heroSubheadline: 'Whether you\'re grinding for partner or building an esports empire, we help gaming brands level up.',
    challenges: [
      'Breaking through on oversaturated platforms',
      'Building concurrent viewership that attracts sponsors',
      'Creating content that performs across Twitch, YouTube, and TikTok',
      'Monetizing beyond donations and subs'
    ],
    solutions: [
      'Multi-platform growth strategies optimized for gaming',
      'Clip strategy for maximum viral potential',
      'Community building that creates superfans',
      'Brand partnership positioning and outreach'
    ],
    results: [
      { metric: 'Avg Viewer Increase', value: '420%' },
      { metric: 'Streamers Helped', value: '3,500+' },
      { metric: 'Brand Deals Secured', value: '150+' },
      { metric: 'Partner Achievements', value: '200+' }
    ],
    relatedIndustries: ['influencers', 'tech', 'entertainment'],
    popularServices: ['Twitch Growth', 'YouTube Gaming', 'Clip Marketing', 'Brand Deals']
  },
  {
    name: 'Sports & Athletes',
    slug: 'sports',
    category: 'entertainment',
    icon: 'Trophy',
    tagline: 'Build your athlete brand',
    description: 'Help athletes, teams, and sports brands build powerful personal brands that attract sponsors and engage fans.',
    metaTitle: 'Sports Marketing Agency | Athlete Branding | EDST',
    metaDescription: 'EDST helps athletes and sports brands build powerful personal brands. NIL deals, sponsorships, and fan engagement.',
    keywords: ['sports marketing', 'athlete branding', 'NIL marketing', 'sports social media', 'athlete promotion'],
    heroHeadline: 'Athlete Marketing for the NIL Era',
    heroSubheadline: 'Your talent gets you on the field. Your brand gets you paid off it. We build athlete brands that win.',
    challenges: [
      'Building a brand while focusing on performance',
      'Maximizing NIL and sponsorship opportunities',
      'Creating content that resonates with fans',
      'Standing out in a crowded athlete market'
    ],
    solutions: [
      'Personal brand strategy and positioning',
      'Content creation systems that fit athlete schedules',
      'NIL deal positioning and sponsor outreach',
      'Fan engagement and community building'
    ],
    results: [
      { metric: 'Avg NIL Value Increase', value: '3x' },
      { metric: 'Athletes Served', value: '800+' },
      { metric: 'Sponsorships Secured', value: '250+' },
      { metric: 'Total NIL Generated', value: '$15M+' }
    ],
    relatedIndustries: ['fitness', 'influencers', 'entertainment'],
    popularServices: ['Personal Branding', 'NIL Strategy', 'Content Creation', 'Sponsor Outreach']
  },
  {
    name: 'Film & Video Production',
    slug: 'film-video',
    category: 'entertainment',
    icon: 'Film',
    tagline: 'Market your productions',
    description: 'Help filmmakers, production companies, and video creators build audiences and market their content effectively.',
    metaTitle: 'Film Marketing Agency | Video Production Marketing | EDST',
    metaDescription: 'EDST helps filmmakers and video production companies market their content. Festival campaigns, distribution, and audience building.',
    keywords: ['film marketing', 'video production marketing', 'movie promotion', 'filmmaker marketing', 'video marketing agency'],
    heroHeadline: 'Marketing for Filmmakers & Video Creators',
    heroSubheadline: 'Great content deserves great marketing. We help filmmakers and video creators find their audience.',
    challenges: [
      'Getting eyeballs on your content in a crowded market',
      'Building buzz for festival submissions and releases',
      'Creating marketing that matches your creative vision',
      'Converting viewers into followers and subscribers'
    ],
    solutions: [
      'Launch campaign strategies for releases',
      'Festival submission and promotion support',
      'Trailer and clip optimization for social',
      'Audience building across platforms'
    ],
    results: [
      { metric: 'Avg View Increase', value: '3-5x' },
      { metric: 'Projects Marketed', value: '600+' },
      { metric: 'Festival Selections', value: '120+' },
      { metric: 'Distribution Deals', value: '45+' }
    ],
    relatedIndustries: ['photography', 'music', 'entertainment'],
    popularServices: ['Launch Campaigns', 'Festival Marketing', 'Social Strategy', 'Press & PR']
  },
  {
    name: 'Entertainment & Events',
    slug: 'entertainment',
    category: 'entertainment',
    icon: 'Sparkles',
    tagline: 'Fill venues and create buzz',
    description: 'Help entertainment venues, event producers, and promoters sell tickets and create unforgettable buzz.',
    metaTitle: 'Entertainment Marketing Agency | Event Promotion | EDST',
    metaDescription: 'EDST helps entertainment venues and event producers fill seats and create buzz. Concerts, festivals, shows, and more.',
    keywords: ['entertainment marketing', 'event promotion', 'concert marketing', 'venue marketing', 'festival promotion'],
    heroHeadline: 'Marketing That Fills Venues',
    heroSubheadline: 'From intimate shows to major festivals, we help entertainment brands sell out and create moments people talk about.',
    challenges: [
      'Cutting through noise to sell tickets',
      'Building hype that translates to attendance',
      'Creating FOMO that drives urgency',
      'Competing with endless entertainment options'
    ],
    solutions: [
      'Ticket sales campaigns with urgency mechanics',
      'Influencer and creator partnerships for buzz',
      'User-generated content strategies',
      'Post-event content for future marketing'
    ],
    results: [
      { metric: 'Avg Ticket Sales Increase', value: '250%' },
      { metric: 'Events Marketed', value: '400+' },
      { metric: 'Sold Out Events', value: '150+' },
      { metric: 'Total Tickets Sold', value: '2M+' }
    ],
    relatedIndustries: ['music', 'sports', 'hospitality'],
    popularServices: ['Ticket Campaigns', 'Influencer Marketing', 'Social Buzz', 'Email Marketing']
  },
  {
    name: 'Influencers & Creators',
    slug: 'influencers',
    category: 'entertainment',
    icon: 'Users',
    tagline: 'Scale your creator business',
    description: 'Help influencers and content creators grow their audience, land brand deals, and build sustainable businesses.',
    metaTitle: 'Influencer Marketing Agency | Creator Growth | EDST',
    metaDescription: 'EDST helps influencers and creators grow their audience and land brand deals. Proven growth strategies for all platforms.',
    keywords: ['influencer marketing', 'creator growth', 'influencer agency', 'content creator marketing', 'social media growth'],
    heroHeadline: 'Creator Marketing That Actually Works',
    heroSubheadline: 'From micro-influencer to media empire. We help creators build audiences and businesses that last.',
    challenges: [
      'Growing beyond a plateau',
      'Landing brand deals that pay what you\'re worth',
      'Diversifying income beyond one platform',
      'Creating sustainably without burnout'
    ],
    solutions: [
      'Cross-platform growth strategies',
      'Brand deal positioning and rate negotiation',
      'Content systems for sustainable creation',
      'Audience diversification and owned media'
    ],
    results: [
      { metric: 'Avg Follower Growth', value: '3-5x' },
      { metric: 'Creators Served', value: '15K+' },
      { metric: 'Brand Deals Landed', value: '5K+' },
      { metric: 'Combined Following Grown', value: '500M+' }
    ],
    relatedIndustries: ['music', 'gaming', 'fashion'],
    popularServices: ['Audience Growth', 'Brand Partnerships', 'Content Strategy', 'Monetization']
  },

  // ═══════════════════════════════════════════════════════════════
  // HEALTHCARE & WELLNESS
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Healthcare',
    slug: 'healthcare',
    category: 'healthcare',
    icon: 'Heart',
    tagline: 'Grow your practice ethically',
    description: 'Help healthcare providers build trust, attract patients, and grow practices through ethical, compliant marketing.',
    metaTitle: 'Healthcare Marketing Agency | Medical Practice Growth | EDST',
    metaDescription: 'EDST helps healthcare providers grow their practices with ethical, HIPAA-compliant marketing. Trusted by 500+ medical practices.',
    keywords: ['healthcare marketing', 'medical practice marketing', 'doctor marketing', 'healthcare social media', 'patient acquisition'],
    heroHeadline: 'Healthcare Marketing That Builds Trust',
    heroSubheadline: 'Grow your practice with marketing that\'s as ethical as your care. We help healthcare providers attract patients authentically.',
    challenges: [
      'Building trust in a skeptical digital landscape',
      'Staying compliant with HIPAA and advertising regulations',
      'Competing with corporate healthcare systems',
      'Converting online interest into booked appointments'
    ],
    solutions: [
      'Trust-building content strategies',
      'Compliant advertising and social media',
      'Review generation and reputation management',
      'Patient education content that converts'
    ],
    results: [
      { metric: 'Avg Patient Increase', value: '180%' },
      { metric: 'Practices Served', value: '500+' },
      { metric: 'Reviews Generated', value: '25K+' },
      { metric: 'Appointments Booked', value: '100K+' }
    ],
    relatedIndustries: ['dental', 'medspa', 'mental-health'],
    popularServices: ['Reputation Management', 'Social Media', 'Content Marketing', 'Local SEO']
  },
  {
    name: 'Dental Practices',
    slug: 'dental',
    category: 'healthcare',
    icon: 'Smile',
    tagline: 'Fill your dental chairs',
    description: 'Help dental practices attract new patients and build thriving practices through strategic marketing.',
    metaTitle: 'Dental Marketing Agency | Dentist Marketing | EDST',
    metaDescription: 'EDST helps dental practices grow with proven marketing strategies. New patient acquisition, reviews, and brand building.',
    keywords: ['dental marketing', 'dentist marketing', 'dental practice growth', 'dental social media', 'dental patient acquisition'],
    heroHeadline: 'Dental Marketing That Fills Chairs',
    heroSubheadline: 'From new patient acquisition to case acceptance, we help dental practices grow profitably.',
    challenges: [
      'Standing out in a competitive local market',
      'Attracting high-value cosmetic and implant cases',
      'Building a reputation that drives referrals',
      'Converting consultations into accepted treatment plans'
    ],
    solutions: [
      'New patient acquisition campaigns',
      'Before/after content strategies',
      'Review generation systems',
      'High-value case marketing'
    ],
    results: [
      { metric: 'Avg New Patients/Mo', value: '+45' },
      { metric: 'Practices Served', value: '200+' },
      { metric: '5-Star Reviews Generated', value: '15K+' },
      { metric: 'Case Acceptance Increase', value: '35%' }
    ],
    relatedIndustries: ['healthcare', 'medspa', 'chiropractic'],
    popularServices: ['New Patient Campaigns', 'Google Reviews', 'Social Media', 'Cosmetic Case Marketing']
  },
  {
    name: 'Med Spa & Aesthetics',
    slug: 'medspa',
    category: 'healthcare',
    icon: 'Sparkles',
    tagline: 'Elevate your aesthetic brand',
    description: 'Help med spas and aesthetic practices attract clients and build premium brands in the competitive aesthetics market.',
    metaTitle: 'Med Spa Marketing Agency | Aesthetic Marketing | EDST',
    metaDescription: 'EDST helps med spas and aesthetic practices grow. Premium brand positioning, client acquisition, and social media marketing.',
    keywords: ['med spa marketing', 'aesthetic marketing', 'medspa social media', 'botox marketing', 'cosmetic marketing'],
    heroHeadline: 'Med Spa Marketing for Premium Brands',
    heroSubheadline: 'Attract clients who value quality over price. We help aesthetic practices build premium brands.',
    challenges: [
      'Competing with discount providers and Groupon deals',
      'Attracting high-value, repeat clients',
      'Showcasing results while staying compliant',
      'Building a premium brand perception'
    ],
    solutions: [
      'Premium brand positioning strategies',
      'Before/after content that converts',
      'Influencer and UGC partnerships',
      'Membership and loyalty program marketing'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '220%' },
      { metric: 'Med Spas Served', value: '150+' },
      { metric: 'Avg Client Value Increase', value: '85%' },
      { metric: 'Membership Signups', value: '10K+' }
    ],
    relatedIndustries: ['plastic-surgery', 'dental', 'wellness'],
    popularServices: ['Brand Positioning', 'Social Media', 'Influencer Marketing', 'Membership Marketing']
  },
  {
    name: 'Mental Health',
    slug: 'mental-health',
    category: 'healthcare',
    icon: 'Brain',
    tagline: 'Reach those who need help',
    description: 'Help therapists, counselors, and mental health practices connect with clients who need their services.',
    metaTitle: 'Mental Health Marketing Agency | Therapist Marketing | EDST',
    metaDescription: 'EDST helps therapists and mental health practices grow. Ethical marketing that connects you with clients who need help.',
    keywords: ['mental health marketing', 'therapist marketing', 'counselor marketing', 'psychology practice marketing', 'therapy marketing'],
    heroHeadline: 'Marketing for Mental Health Providers',
    heroSubheadline: 'Connect with clients who need your help. We make finding a therapist easier for everyone.',
    challenges: [
      'Reaching people who need help but aren\'t searching',
      'Destigmatizing mental health in marketing',
      'Building trust before the first session',
      'Standing out in a growing therapy market'
    ],
    solutions: [
      'Awareness content that reduces stigma',
      'Trust-building educational content',
      'Niche positioning for specialties',
      'Referral and word-of-mouth amplification'
    ],
    results: [
      { metric: 'Avg Inquiry Increase', value: '200%' },
      { metric: 'Practices Served', value: '300+' },
      { metric: 'Client Connections Made', value: '50K+' },
      { metric: 'Waitlist Growth', value: '150%' }
    ],
    relatedIndustries: ['healthcare', 'coaches', 'wellness'],
    popularServices: ['Content Marketing', 'Social Media', 'Directory Optimization', 'Referral Systems']
  },
  {
    name: 'Fitness & Gyms',
    slug: 'fitness',
    category: 'healthcare',
    icon: 'Dumbbell',
    tagline: 'Fill your gym floor',
    description: 'Help gyms, fitness studios, and personal trainers attract members and build thriving fitness businesses.',
    metaTitle: 'Fitness Marketing Agency | Gym Marketing | EDST',
    metaDescription: 'EDST helps gyms and fitness businesses grow membership. Proven marketing strategies for fitness studios and trainers.',
    keywords: ['fitness marketing', 'gym marketing', 'personal trainer marketing', 'fitness studio marketing', 'gym membership marketing'],
    heroHeadline: 'Fitness Marketing That Drives Membership',
    heroSubheadline: 'From boutique studios to big box gyms, we help fitness businesses fill their floors with committed members.',
    challenges: [
      'Competing with low-cost gym chains',
      'Reducing member churn and improving retention',
      'Attracting members who actually show up',
      'Standing out in a crowded fitness market'
    ],
    solutions: [
      'New member acquisition campaigns',
      'Retention and engagement marketing',
      'Community building strategies',
      'Transformation content that inspires action'
    ],
    results: [
      { metric: 'Avg Membership Increase', value: '180%' },
      { metric: 'Gyms Served', value: '400+' },
      { metric: 'Members Acquired', value: '200K+' },
      { metric: 'Retention Improvement', value: '40%' }
    ],
    relatedIndustries: ['wellness', 'sports', 'coaches'],
    popularServices: ['Member Acquisition', 'Social Media', 'Transformation Marketing', 'Retention Campaigns']
  },
  {
    name: 'Wellness & Holistic',
    slug: 'wellness',
    category: 'healthcare',
    icon: 'Leaf',
    tagline: 'Grow your wellness practice',
    description: 'Help wellness practitioners, spas, and holistic health providers attract clients and build conscious brands.',
    metaTitle: 'Wellness Marketing Agency | Holistic Health Marketing | EDST',
    metaDescription: 'EDST helps wellness and holistic health businesses grow. Authentic marketing for spas, practitioners, and wellness brands.',
    keywords: ['wellness marketing', 'holistic health marketing', 'spa marketing', 'wellness brand marketing', 'alternative health marketing'],
    heroHeadline: 'Wellness Marketing That Feels Authentic',
    heroSubheadline: 'Grow your wellness practice without compromising your values. Marketing as conscious as your approach to health.',
    challenges: [
      'Marketing without feeling "salesy"',
      'Standing out in the wellness boom',
      'Attracting clients aligned with your approach',
      'Building authority in a skeptical market'
    ],
    solutions: [
      'Values-aligned brand positioning',
      'Educational content that builds authority',
      'Community-driven marketing strategies',
      'Authentic social media presence'
    ],
    results: [
      { metric: 'Avg Client Increase', value: '200%' },
      { metric: 'Wellness Brands Served', value: '350+' },
      { metric: 'Community Members Built', value: '75K+' },
      { metric: 'Revenue Growth', value: '180%' }
    ],
    relatedIndustries: ['fitness', 'medspa', 'yoga'],
    popularServices: ['Brand Building', 'Content Marketing', 'Community Building', 'Email Marketing']
  },
  {
    name: 'Chiropractic',
    slug: 'chiropractic',
    category: 'healthcare',
    icon: 'Activity',
    tagline: 'Adjust your marketing',
    description: 'Help chiropractic practices attract new patients and build practices focused on wellness, not just pain relief.',
    metaTitle: 'Chiropractic Marketing Agency | Chiropractor Marketing | EDST',
    metaDescription: 'EDST helps chiropractic practices grow with proven marketing. New patient acquisition and wellness positioning.',
    keywords: ['chiropractic marketing', 'chiropractor marketing', 'chiropractic practice growth', 'chiropractic social media'],
    heroHeadline: 'Chiropractic Marketing That Attracts Ideal Patients',
    heroSubheadline: 'Build a practice of wellness patients, not just pain cases. Marketing that positions you as the expert.',
    challenges: [
      'Moving beyond "back pain" marketing',
      'Educating patients on wellness care value',
      'Competing with medical providers',
      'Building long-term patient relationships'
    ],
    solutions: [
      'Wellness positioning strategies',
      'Patient education content',
      'Community health event marketing',
      'Membership and wellness plan promotion'
    ],
    results: [
      { metric: 'Avg New Patients/Mo', value: '+35' },
      { metric: 'Practices Served', value: '175+' },
      { metric: 'Wellness Plan Signups', value: '8K+' },
      { metric: 'Patient Retention Increase', value: '45%' }
    ],
    relatedIndustries: ['healthcare', 'wellness', 'fitness'],
    popularServices: ['Patient Acquisition', 'Wellness Marketing', 'Social Media', 'Event Marketing']
  },
  {
    name: 'Plastic Surgery',
    slug: 'plastic-surgery',
    category: 'healthcare',
    icon: 'Scissors',
    tagline: 'Elevate your surgical brand',
    description: 'Help plastic surgeons and cosmetic practices attract high-value patients with premium brand positioning.',
    metaTitle: 'Plastic Surgery Marketing Agency | Cosmetic Surgery Marketing | EDST',
    metaDescription: 'EDST helps plastic surgeons grow with premium marketing. Patient acquisition, brand building, and before/after marketing.',
    keywords: ['plastic surgery marketing', 'cosmetic surgery marketing', 'plastic surgeon marketing', 'aesthetic surgery marketing'],
    heroHeadline: 'Plastic Surgery Marketing for Premium Practices',
    heroSubheadline: 'Attract patients who value expertise and results over price. Premium marketing for premium practices.',
    challenges: [
      'Differentiating from discount providers',
      'Showcasing results while maintaining discretion',
      'Attracting patients for high-value procedures',
      'Building trust for significant decisions'
    ],
    solutions: [
      'Premium brand positioning',
      'Tasteful before/after campaigns',
      'Patient journey content',
      'Consultation optimization strategies'
    ],
    results: [
      { metric: 'Avg Consultation Increase', value: '150%' },
      { metric: 'Surgeons Served', value: '100+' },
      { metric: 'Avg Case Value Increase', value: '60%' },
      { metric: 'Consultation Conversion', value: '+35%' }
    ],
    relatedIndustries: ['medspa', 'healthcare', 'dental'],
    popularServices: ['Brand Positioning', 'Before/After Marketing', 'Consultation Optimization', 'Social Media']
  },

  // ═══════════════════════════════════════════════════════════════
  // BUSINESS & PROFESSIONAL SERVICES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Small Business',
    slug: 'small-business',
    category: 'business',
    icon: 'Store',
    tagline: 'Compete with the big guys',
    description: 'Help small businesses punch above their weight with marketing strategies that level the playing field.',
    metaTitle: 'Small Business Marketing Agency | Local Business Growth | EDST',
    metaDescription: 'EDST helps small businesses grow with enterprise-level marketing strategies at small business prices.',
    keywords: ['small business marketing', 'local business marketing', 'small business growth', 'entrepreneur marketing'],
    heroHeadline: 'Small Business Marketing That Punches Up',
    heroSubheadline: 'You don\'t need a big budget to make a big impact. We help small businesses compete with anyone.',
    challenges: [
      'Competing with businesses 10x your size',
      'Getting ROI from limited marketing budgets',
      'Standing out in local markets',
      'Building brand awareness from scratch'
    ],
    solutions: [
      'High-impact, budget-conscious campaigns',
      'Local market domination strategies',
      'Word-of-mouth amplification',
      'Scrappy, creative marketing tactics'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '200%' },
      { metric: 'Small Businesses Served', value: '5K+' },
      { metric: 'ROI Delivered', value: '8x avg' },
      { metric: 'Local Market Wins', value: '2K+' }
    ],
    relatedIndustries: ['retail', 'restaurants', 'home-services'],
    popularServices: ['Social Media', 'Local Marketing', 'Brand Building', 'Reputation Management']
  },
  {
    name: 'Finance & Banking',
    slug: 'finance',
    category: 'business',
    icon: 'Landmark',
    tagline: 'Build financial trust',
    description: 'Help financial advisors, banks, and fintech companies build trust and acquire clients in a regulated industry.',
    metaTitle: 'Financial Services Marketing Agency | Finance Marketing | EDST',
    metaDescription: 'EDST helps financial services companies grow. Compliant marketing for advisors, banks, and fintech.',
    keywords: ['financial services marketing', 'financial advisor marketing', 'bank marketing', 'fintech marketing', 'wealth management marketing'],
    heroHeadline: 'Financial Marketing That Builds Trust',
    heroSubheadline: 'In finance, trust is everything. We help financial brands build credibility that converts to clients.',
    challenges: [
      'Building trust in a skeptical market',
      'Staying compliant with financial regulations',
      'Differentiating in a commoditized industry',
      'Reaching high-net-worth clients'
    ],
    solutions: [
      'Thought leadership and authority building',
      'Compliant content marketing strategies',
      'Client education campaigns',
      'Referral and network marketing'
    ],
    results: [
      { metric: 'Avg AUM Growth', value: '45%' },
      { metric: 'Financial Firms Served', value: '250+' },
      { metric: 'Client Acquisitions', value: '15K+' },
      { metric: 'Avg Client Value', value: '+65%' }
    ],
    relatedIndustries: ['insurance', 'real-estate', 'legal'],
    popularServices: ['Thought Leadership', 'Content Marketing', 'LinkedIn Strategy', 'Event Marketing']
  },
  {
    name: 'Legal Services',
    slug: 'legal',
    category: 'business',
    icon: 'Scale',
    tagline: 'Grow your legal practice',
    description: 'Help law firms and attorneys attract clients and build authority in their practice areas.',
    metaTitle: 'Law Firm Marketing Agency | Legal Marketing | EDST',
    metaDescription: 'EDST helps law firms and attorneys grow. Client acquisition, thought leadership, and practice area marketing.',
    keywords: ['law firm marketing', 'attorney marketing', 'legal marketing', 'lawyer marketing', 'legal services marketing'],
    heroHeadline: 'Legal Marketing for Modern Law Firms',
    heroSubheadline: 'Attract clients who need your expertise. We help law firms build authority and generate quality leads.',
    challenges: [
      'Standing out in a crowded legal market',
      'Generating high-quality client inquiries',
      'Building authority in specific practice areas',
      'Marketing ethically within bar guidelines'
    ],
    solutions: [
      'Practice area authority building',
      'Client education content',
      'Case study and results marketing',
      'Referral network development'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '180%' },
      { metric: 'Law Firms Served', value: '200+' },
      { metric: 'Client Acquisitions', value: '10K+' },
      { metric: 'Avg Case Value Increase', value: '40%' }
    ],
    relatedIndustries: ['finance', 'real-estate', 'healthcare'],
    popularServices: ['Content Marketing', 'Local SEO', 'Authority Building', 'Referral Marketing']
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    category: 'business',
    icon: 'Shield',
    tagline: 'Grow your book of business',
    description: 'Help insurance agents and agencies attract clients and build thriving practices.',
    metaTitle: 'Insurance Marketing Agency | Agent Marketing | EDST',
    metaDescription: 'EDST helps insurance agents and agencies grow. Lead generation, brand building, and client acquisition strategies.',
    keywords: ['insurance marketing', 'insurance agent marketing', 'insurance agency marketing', 'insurance lead generation'],
    heroHeadline: 'Insurance Marketing That Builds Books',
    heroSubheadline: 'Grow your book of business with marketing that generates quality leads and builds lasting client relationships.',
    challenges: [
      'Competing with direct carriers and online quotes',
      'Generating quality leads, not tire kickers',
      'Building trust in a skeptical market',
      'Retaining clients in a price-sensitive market'
    ],
    solutions: [
      'Value-based positioning strategies',
      'Lead generation campaigns',
      'Client retention marketing',
      'Referral amplification systems'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '200%' },
      { metric: 'Agents Served', value: '400+' },
      { metric: 'Policies Written', value: '50K+' },
      { metric: 'Client Retention Increase', value: '30%' }
    ],
    relatedIndustries: ['finance', 'real-estate', 'small-business'],
    popularServices: ['Lead Generation', 'Social Media', 'Retention Marketing', 'Referral Programs']
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    category: 'business',
    icon: 'Home',
    tagline: 'Close more deals',
    description: 'Help real estate agents, teams, and brokerages generate leads and close more transactions.',
    metaTitle: 'Real Estate Marketing Agency | Realtor Marketing | EDST',
    metaDescription: 'EDST helps real estate agents and brokerages grow. Lead generation, listing marketing, and personal branding.',
    keywords: ['real estate marketing', 'realtor marketing', 'real estate agent marketing', 'listing marketing', 'real estate lead generation'],
    heroHeadline: 'Real Estate Marketing That Closes Deals',
    heroSubheadline: 'From lead generation to closing, we help real estate pros dominate their markets.',
    challenges: [
      'Standing out among thousands of local agents',
      'Generating seller leads in competitive markets',
      'Building a personal brand that attracts referrals',
      'Marketing listings effectively'
    ],
    solutions: [
      'Personal brand positioning',
      'Seller lead generation campaigns',
      'Listing marketing strategies',
      'Sphere of influence marketing'
    ],
    results: [
      { metric: 'Avg Transaction Increase', value: '150%' },
      { metric: 'Agents Served', value: '1,500+' },
      { metric: 'Listings Sold', value: '10K+' },
      { metric: 'GCI Growth', value: '200%+' }
    ],
    relatedIndustries: ['mortgage', 'home-services', 'finance'],
    popularServices: ['Personal Branding', 'Lead Generation', 'Listing Marketing', 'Video Marketing']
  },
  {
    name: 'Coaches & Consultants',
    slug: 'coaches',
    category: 'professional',
    icon: 'Target',
    tagline: 'Fill your coaching practice',
    description: 'Help coaches and consultants attract high-ticket clients and build scalable businesses.',
    metaTitle: 'Coach Marketing Agency | Consultant Marketing | EDST',
    metaDescription: 'EDST helps coaches and consultants attract clients. Personal branding, lead generation, and high-ticket sales marketing.',
    keywords: ['coach marketing', 'consultant marketing', 'coaching business marketing', 'high-ticket marketing', 'consulting marketing'],
    heroHeadline: 'Marketing for Coaches Who Want Premium Clients',
    heroSubheadline: 'Stop chasing clients. Start attracting them. We help coaches build practices full of premium clients.',
    challenges: [
      'Standing out in a crowded coaching market',
      'Attracting clients who can afford premium pricing',
      'Building authority quickly',
      'Converting followers into paying clients'
    ],
    solutions: [
      'Authority positioning and thought leadership',
      'High-ticket sales funnel optimization',
      'Content strategies that demonstrate expertise',
      'Community building and nurture systems'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '280%' },
      { metric: 'Coaches Served', value: '2K+' },
      { metric: 'Clients Acquired', value: '25K+' },
      { metric: 'Avg Program Price Increase', value: '100%' }
    ],
    relatedIndustries: ['influencers', 'speakers', 'authors'],
    popularServices: ['Personal Branding', 'High-Ticket Funnels', 'Content Strategy', 'Launch Marketing']
  },
  {
    name: 'Speakers & Authors',
    slug: 'speakers',
    category: 'professional',
    icon: 'BookOpen',
    tagline: 'Build your platform',
    description: 'Help speakers and authors build platforms that book stages and sell books.',
    metaTitle: 'Speaker Marketing Agency | Author Marketing | EDST',
    metaDescription: 'EDST helps speakers and authors build platforms. Speaking engagements, book launches, and authority marketing.',
    keywords: ['speaker marketing', 'author marketing', 'book marketing', 'keynote speaker marketing', 'thought leader marketing'],
    heroHeadline: 'Platform Building for Speakers & Authors',
    heroSubheadline: 'Your message deserves a bigger stage. We help speakers and authors build platforms that matter.',
    challenges: [
      'Getting booked for speaking engagements',
      'Building audience before a book launch',
      'Creating multiple revenue streams from expertise',
      'Standing out as a thought leader'
    ],
    solutions: [
      'Platform building strategies',
      'Book launch and promotion campaigns',
      'Speaking engagement positioning',
      'Thought leadership content'
    ],
    results: [
      { metric: 'Speaking Gigs Booked', value: '500+' },
      { metric: 'Authors Served', value: '300+' },
      { metric: 'Books on Bestseller Lists', value: '45+' },
      { metric: 'Avg Audience Growth', value: '400%' }
    ],
    relatedIndustries: ['coaches', 'podcasts', 'influencers'],
    popularServices: ['Platform Building', 'Book Marketing', 'Speaking Positioning', 'Podcast Guesting']
  },

  // ═══════════════════════════════════════════════════════════════
  // LIFESTYLE & CONSUMER
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Fashion & Apparel',
    slug: 'fashion',
    category: 'lifestyle',
    icon: 'Shirt',
    tagline: 'Build your fashion brand',
    description: 'Help fashion brands, designers, and apparel companies build desirable brands and drive sales.',
    metaTitle: 'Fashion Marketing Agency | Apparel Marketing | EDST',
    metaDescription: 'EDST helps fashion brands grow. Brand building, influencer marketing, and e-commerce growth strategies.',
    keywords: ['fashion marketing', 'apparel marketing', 'clothing brand marketing', 'fashion influencer marketing', 'fashion social media'],
    heroHeadline: 'Fashion Marketing That Creates Desire',
    heroSubheadline: 'Build a fashion brand people want to wear. We help apparel brands create desire and drive sales.',
    challenges: [
      'Standing out in a saturated fashion market',
      'Building brand desire, not just awareness',
      'Converting social followers into customers',
      'Competing with fast fashion on value, not price'
    ],
    solutions: [
      'Brand storytelling and positioning',
      'Influencer and creator partnerships',
      'User-generated content strategies',
      'Launch and drop campaign marketing'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '250%' },
      { metric: 'Fashion Brands Served', value: '400+' },
      { metric: 'Influencer Partnerships', value: '2K+' },
      { metric: 'Social Commerce Sales', value: '$25M+' }
    ],
    relatedIndustries: ['beauty', 'luxury', 'ecommerce'],
    popularServices: ['Influencer Marketing', 'Brand Building', 'Launch Campaigns', 'Social Commerce']
  },
  {
    name: 'Beauty & Cosmetics',
    slug: 'beauty',
    category: 'lifestyle',
    icon: 'Palette',
    tagline: 'Grow your beauty brand',
    description: 'Help beauty brands, makeup artists, and cosmetics companies build engaged audiences and drive sales.',
    metaTitle: 'Beauty Marketing Agency | Cosmetics Marketing | EDST',
    metaDescription: 'EDST helps beauty brands grow. Influencer marketing, UGC campaigns, and social commerce for cosmetics.',
    keywords: ['beauty marketing', 'cosmetics marketing', 'makeup marketing', 'beauty brand marketing', 'beauty influencer marketing'],
    heroHeadline: 'Beauty Marketing That Captivates',
    heroSubheadline: 'Build a beauty brand that inspires. We help cosmetics companies create communities of loyal fans.',
    challenges: [
      'Competing with established beauty conglomerates',
      'Creating authentic content in a filtered world',
      'Building trust for products people put on their skin',
      'Converting social buzz into sales'
    ],
    solutions: [
      'Authentic influencer partnerships',
      'Tutorial and educational content',
      'User-generated content campaigns',
      'Community building strategies'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '300%' },
      { metric: 'Beauty Brands Served', value: '300+' },
      { metric: 'UGC Content Created', value: '50K+' },
      { metric: 'Influencer Reach', value: '500M+' }
    ],
    relatedIndustries: ['fashion', 'medspa', 'wellness'],
    popularServices: ['Influencer Marketing', 'UGC Campaigns', 'Tutorial Content', 'TikTok Strategy']
  },
  {
    name: 'Travel & Tourism',
    slug: 'travel',
    category: 'lifestyle',
    icon: 'Plane',
    tagline: 'Inspire wanderlust',
    description: 'Help travel brands, destinations, and hospitality companies inspire travel and drive bookings.',
    metaTitle: 'Travel Marketing Agency | Tourism Marketing | EDST',
    metaDescription: 'EDST helps travel brands inspire wanderlust and drive bookings. Destination marketing, hospitality, and tourism.',
    keywords: ['travel marketing', 'tourism marketing', 'destination marketing', 'hospitality marketing', 'travel social media'],
    heroHeadline: 'Travel Marketing That Inspires Action',
    heroSubheadline: 'Turn dream destinations into booked trips. We help travel brands inspire and convert.',
    challenges: [
      'Standing out in a visually-saturated market',
      'Converting inspiration into bookings',
      'Building trust for significant travel investments',
      'Competing with OTAs and aggregators'
    ],
    solutions: [
      'Visual storytelling strategies',
      'Influencer trip partnerships',
      'User-generated content campaigns',
      'Booking-optimized content funnels'
    ],
    results: [
      { metric: 'Avg Booking Increase', value: '200%' },
      { metric: 'Travel Brands Served', value: '250+' },
      { metric: 'Content Reach', value: '1B+' },
      { metric: 'Avg Engagement Lift', value: '280%' }
    ],
    relatedIndustries: ['hospitality', 'luxury', 'entertainment'],
    popularServices: ['Influencer Trips', 'Visual Content', 'Destination Marketing', 'Social Strategy']
  },
  {
    name: 'Luxury Brands',
    slug: 'luxury',
    category: 'lifestyle',
    icon: 'Diamond',
    tagline: 'Elevate your luxury brand',
    description: 'Help luxury brands maintain exclusivity while building digital presence and desire.',
    metaTitle: 'Luxury Marketing Agency | Premium Brand Marketing | EDST',
    metaDescription: 'EDST helps luxury brands grow without compromising exclusivity. Premium positioning and digital strategy.',
    keywords: ['luxury marketing', 'luxury brand marketing', 'premium brand marketing', 'high-end marketing', 'luxury social media'],
    heroHeadline: 'Luxury Marketing Without Compromise',
    heroSubheadline: 'Maintain exclusivity while building desire. We help luxury brands navigate digital without dilution.',
    challenges: [
      'Building digital presence without losing exclusivity',
      'Reaching affluent audiences authentically',
      'Creating desire without discounting',
      'Storytelling that justifies premium pricing'
    ],
    solutions: [
      'Premium positioning strategies',
      'Exclusive content and access marketing',
      'Affluent audience targeting',
      'Craftsmanship and heritage storytelling'
    ],
    results: [
      { metric: 'Avg Brand Value Increase', value: '150%' },
      { metric: 'Luxury Brands Served', value: '100+' },
      { metric: 'Avg Client Value Increase', value: '80%' },
      { metric: 'Affluent Reach', value: '50M+' }
    ],
    relatedIndustries: ['fashion', 'jewelry', 'travel'],
    popularServices: ['Brand Positioning', 'Exclusive Content', 'Affluent Targeting', 'Heritage Marketing']
  },
  {
    name: 'Pets & Animals',
    slug: 'pets',
    category: 'lifestyle',
    icon: 'Cat',
    tagline: 'Grow your pet brand',
    description: 'Help pet brands, veterinarians, and animal businesses reach pet parents and build loyal communities.',
    metaTitle: 'Pet Marketing Agency | Animal Business Marketing | EDST',
    metaDescription: 'EDST helps pet brands and animal businesses grow. Reaching pet parents with authentic, engaging marketing.',
    keywords: ['pet marketing', 'pet brand marketing', 'veterinary marketing', 'pet product marketing', 'animal business marketing'],
    heroHeadline: 'Pet Marketing That Pet Parents Love',
    heroSubheadline: 'Reach the people who treat pets like family. We help pet brands build communities of loyal customers.',
    challenges: [
      'Standing out in a booming pet market',
      'Building trust with protective pet parents',
      'Creating engaging content in a cute-overload space',
      'Converting pet lovers into customers'
    ],
    solutions: [
      'Pet influencer partnerships',
      'User-generated content campaigns',
      'Educational pet content',
      'Community building for pet parents'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '220%' },
      { metric: 'Pet Brands Served', value: '200+' },
      { metric: 'Pet Parent Reach', value: '100M+' },
      { metric: 'UGC Submissions', value: '30K+' }
    ],
    relatedIndustries: ['ecommerce', 'retail', 'healthcare'],
    popularServices: ['Pet Influencers', 'UGC Campaigns', 'Community Building', 'Product Launches']
  },

  // ═══════════════════════════════════════════════════════════════
  // FOOD & HOSPITALITY
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Restaurants',
    slug: 'restaurants',
    category: 'food',
    icon: 'UtensilsCrossed',
    tagline: 'Fill your tables',
    description: 'Help restaurants attract diners, build loyalty, and create buzz that keeps tables full.',
    metaTitle: 'Restaurant Marketing Agency | Food Marketing | EDST',
    metaDescription: 'EDST helps restaurants grow. Social media marketing, reputation management, and local marketing strategies.',
    keywords: ['restaurant marketing', 'food marketing', 'restaurant social media', 'restaurant reputation', 'diner acquisition'],
    heroHeadline: 'Restaurant Marketing That Fills Tables',
    heroSubheadline: 'Create buzz that brings diners through the door. We help restaurants build brands people crave.',
    challenges: [
      'Standing out in a crowded restaurant market',
      'Converting social followers into actual diners',
      'Managing online reputation and reviews',
      'Building loyalty in a fickle market'
    ],
    solutions: [
      'Food photography and content strategies',
      'Influencer and foodie partnerships',
      'Review generation and management',
      'Loyalty and retention marketing'
    ],
    results: [
      { metric: 'Avg Cover Increase', value: '150%' },
      { metric: 'Restaurants Served', value: '500+' },
      { metric: 'Reviews Generated', value: '50K+' },
      { metric: 'Social Reach', value: '200M+' }
    ],
    relatedIndustries: ['bars', 'hospitality', 'food-beverage'],
    popularServices: ['Social Media', 'Review Management', 'Food Photography', 'Local Marketing']
  },
  {
    name: 'Bars & Nightlife',
    slug: 'bars',
    category: 'food',
    icon: 'Wine',
    tagline: 'Create the buzz',
    description: 'Help bars, clubs, and nightlife venues create buzz and become the places to be.',
    metaTitle: 'Bar Marketing Agency | Nightlife Marketing | EDST',
    metaDescription: 'EDST helps bars and nightlife venues create buzz. Event marketing, social media, and brand building.',
    keywords: ['bar marketing', 'nightlife marketing', 'club marketing', 'nightclub marketing', 'bar social media'],
    heroHeadline: 'Nightlife Marketing That Creates Scenes',
    heroSubheadline: 'Become THE place to be. We help bars and nightlife venues create buzz that drives crowds.',
    challenges: [
      'Creating FOMO that drives attendance',
      'Staying relevant in fast-changing nightlife',
      'Building a brand, not just promoting events',
      'Attracting the right crowd consistently'
    ],
    solutions: [
      'Event marketing and promotion',
      'Influencer and VIP strategies',
      'User-generated content campaigns',
      'Brand identity and positioning'
    ],
    results: [
      { metric: 'Avg Attendance Increase', value: '200%' },
      { metric: 'Venues Served', value: '300+' },
      { metric: 'Events Promoted', value: '2K+' },
      { metric: 'Social Buzz Reach', value: '150M+' }
    ],
    relatedIndustries: ['restaurants', 'entertainment', 'hospitality'],
    popularServices: ['Event Marketing', 'Social Media', 'Influencer Partnerships', 'Brand Building']
  },
  {
    name: 'Food & Beverage Brands',
    slug: 'food-beverage',
    category: 'food',
    icon: 'Coffee',
    tagline: 'Build your CPG brand',
    description: 'Help food and beverage brands build awareness, drive trial, and create loyal customers.',
    metaTitle: 'Food & Beverage Marketing Agency | CPG Marketing | EDST',
    metaDescription: 'EDST helps food and beverage brands grow. Product launches, influencer marketing, and brand building.',
    keywords: ['food brand marketing', 'beverage marketing', 'CPG marketing', 'food product marketing', 'drink brand marketing'],
    heroHeadline: 'Food & Beverage Marketing That Drives Trial',
    heroSubheadline: 'Turn first tastes into loyal customers. We help F&B brands build awareness and drive purchases.',
    challenges: [
      'Breaking through in crowded grocery aisles',
      'Driving trial without massive ad budgets',
      'Building brand loyalty in a promotional category',
      'Creating content that makes people hungry'
    ],
    solutions: [
      'Influencer sampling and reviews',
      'Recipe and usage content',
      'User-generated content campaigns',
      'Launch and distribution marketing'
    ],
    results: [
      { metric: 'Avg Velocity Increase', value: '180%' },
      { metric: 'F&B Brands Served', value: '250+' },
      { metric: 'Sampling Reach', value: '50M+' },
      { metric: 'Distribution Points Added', value: '100K+' }
    ],
    relatedIndustries: ['restaurants', 'retail', 'ecommerce'],
    popularServices: ['Influencer Sampling', 'Recipe Content', 'Launch Campaigns', 'UGC Strategy']
  },
  {
    name: 'Hotels & Hospitality',
    slug: 'hospitality',
    category: 'food',
    icon: 'Hotel',
    tagline: 'Book more rooms',
    description: 'Help hotels and hospitality brands drive direct bookings and build memorable experiences.',
    metaTitle: 'Hotel Marketing Agency | Hospitality Marketing | EDST',
    metaDescription: 'EDST helps hotels and hospitality brands drive bookings. Social media, influencer stays, and brand marketing.',
    keywords: ['hotel marketing', 'hospitality marketing', 'hotel social media', 'hotel influencer marketing', 'resort marketing'],
    heroHeadline: 'Hospitality Marketing That Books Rooms',
    heroSubheadline: 'Drive direct bookings and build loyalty. We help hotels create experiences worth sharing.',
    challenges: [
      'Competing with OTAs for direct bookings',
      'Standing out in a crowded hospitality market',
      'Creating content that captures the experience',
      'Building loyalty in a price-sensitive market'
    ],
    solutions: [
      'Influencer stay partnerships',
      'Experience-focused content strategies',
      'Direct booking campaigns',
      'Loyalty and retention marketing'
    ],
    results: [
      { metric: 'Avg Direct Booking Increase', value: '150%' },
      { metric: 'Properties Served', value: '200+' },
      { metric: 'Influencer Stays Arranged', value: '500+' },
      { metric: 'Content Reach', value: '300M+' }
    ],
    relatedIndustries: ['travel', 'restaurants', 'luxury'],
    popularServices: ['Influencer Stays', 'Visual Content', 'Direct Booking Campaigns', 'Loyalty Marketing']
  },

  // ═══════════════════════════════════════════════════════════════
  // TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Tech & SaaS',
    slug: 'tech',
    category: 'tech',
    icon: 'Laptop',
    tagline: 'Scale your tech brand',
    description: 'Help tech companies and SaaS brands build awareness, generate leads, and acquire customers.',
    metaTitle: 'Tech Marketing Agency | SaaS Marketing | EDST',
    metaDescription: 'EDST helps tech and SaaS companies grow. Product marketing, content strategy, and customer acquisition.',
    keywords: ['tech marketing', 'SaaS marketing', 'technology marketing', 'software marketing', 'B2B tech marketing'],
    heroHeadline: 'Tech Marketing That Drives Growth',
    heroSubheadline: 'Scale your tech company with marketing that matches your product. We help SaaS and tech brands acquire customers.',
    challenges: [
      'Explaining complex products simply',
      'Standing out in crowded tech categories',
      'Converting free users to paid customers',
      'Building brand in a feature-focused market'
    ],
    solutions: [
      'Product marketing and positioning',
      'Content marketing that drives MQLs',
      'Conversion optimization strategies',
      'Thought leadership and PR'
    ],
    results: [
      { metric: 'Avg MQL Increase', value: '250%' },
      { metric: 'Tech Companies Served', value: '350+' },
      { metric: 'ARR Growth Driven', value: '$100M+' },
      { metric: 'Free to Paid Conversion', value: '+40%' }
    ],
    relatedIndustries: ['startups', 'crypto', 'ecommerce'],
    popularServices: ['Product Marketing', 'Content Strategy', 'Lead Generation', 'Thought Leadership']
  },
  {
    name: 'Startups',
    slug: 'startups',
    category: 'tech',
    icon: 'Rocket',
    tagline: 'Launch and scale fast',
    description: 'Help startups build brand awareness, acquire early customers, and grow without burning cash.',
    metaTitle: 'Startup Marketing Agency | Growth Marketing | EDST',
    metaDescription: 'EDST helps startups grow efficiently. Brand building, customer acquisition, and growth marketing strategies.',
    keywords: ['startup marketing', 'growth marketing', 'startup growth', 'early-stage marketing', 'startup customer acquisition'],
    heroHeadline: 'Startup Marketing That Doesn\'t Burn Cash',
    heroSubheadline: 'Grow fast without wasting money. We help startups acquire customers efficiently and build lasting brands.',
    challenges: [
      'Building awareness with limited budgets',
      'Finding product-market fit signals',
      'Acquiring customers efficiently',
      'Building credibility as a new player'
    ],
    solutions: [
      'Lean marketing strategies',
      'Growth experiment frameworks',
      'Early adopter acquisition tactics',
      'Credibility building campaigns'
    ],
    results: [
      { metric: 'Avg CAC Reduction', value: '45%' },
      { metric: 'Startups Served', value: '500+' },
      { metric: 'Funding Raised Post', value: '$200M+' },
      { metric: 'Success Rate', value: '3x industry avg' }
    ],
    relatedIndustries: ['tech', 'ecommerce', 'finance'],
    popularServices: ['Growth Marketing', 'Brand Building', 'User Acquisition', 'PR & Buzz']
  },
  {
    name: 'Crypto & Web3',
    slug: 'crypto',
    category: 'tech',
    icon: 'Coins',
    tagline: 'Build your Web3 community',
    description: 'Help crypto projects, NFT collections, and Web3 companies build communities and drive adoption.',
    metaTitle: 'Crypto Marketing Agency | Web3 Marketing | EDST',
    metaDescription: 'EDST helps crypto and Web3 projects grow. Community building, launch marketing, and NFT promotion.',
    keywords: ['crypto marketing', 'web3 marketing', 'NFT marketing', 'blockchain marketing', 'defi marketing'],
    heroHeadline: 'Web3 Marketing for the Next Era',
    heroSubheadline: 'Build communities that believe. We help crypto and Web3 projects find their tribe and drive adoption.',
    challenges: [
      'Building trust in a skeptical environment',
      'Creating communities, not just followers',
      'Marketing in a constantly changing landscape',
      'Standing out among thousands of projects'
    ],
    solutions: [
      'Community building strategies',
      'Launch and mint campaigns',
      'Influencer and KOL partnerships',
      'Discord and Twitter growth tactics'
    ],
    results: [
      { metric: 'Communities Built', value: '200+' },
      { metric: 'Avg Community Size', value: '50K+' },
      { metric: 'Successful Launches', value: '150+' },
      { metric: 'TVL Influenced', value: '$500M+' }
    ],
    relatedIndustries: ['tech', 'gaming', 'finance'],
    popularServices: ['Community Building', 'Launch Marketing', 'KOL Partnerships', 'Discord Growth']
  },
  {
    name: 'Apps & Mobile',
    slug: 'apps',
    category: 'tech',
    icon: 'Smartphone',
    tagline: 'Drive app downloads',
    description: 'Help mobile apps drive downloads, improve retention, and build engaged user bases.',
    metaTitle: 'App Marketing Agency | Mobile Marketing | EDST',
    metaDescription: 'EDST helps mobile apps grow. User acquisition, ASO, and retention marketing for iOS and Android.',
    keywords: ['app marketing', 'mobile marketing', 'app store optimization', 'app user acquisition', 'mobile app marketing'],
    heroHeadline: 'App Marketing That Drives Downloads',
    heroSubheadline: 'Get your app on screens and keep it there. We help mobile apps acquire and retain users.',
    challenges: [
      'Standing out among millions of apps',
      'Acquiring users cost-effectively',
      'Reducing churn and improving retention',
      'Driving reviews and ratings'
    ],
    solutions: [
      'User acquisition campaigns',
      'App store optimization',
      'Retention and engagement marketing',
      'Review generation strategies'
    ],
    results: [
      { metric: 'Avg Download Increase', value: '300%' },
      { metric: 'Apps Served', value: '250+' },
      { metric: 'Downloads Driven', value: '10M+' },
      { metric: 'Avg Retention Improvement', value: '45%' }
    ],
    relatedIndustries: ['tech', 'gaming', 'ecommerce'],
    popularServices: ['User Acquisition', 'ASO', 'Retention Marketing', 'Review Campaigns']
  },

  // ═══════════════════════════════════════════════════════════════
  // RETAIL & E-COMMERCE
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    category: 'retail',
    icon: 'ShoppingCart',
    tagline: 'Scale your online store',
    description: 'Help e-commerce brands drive traffic, increase conversions, and build loyal customer bases.',
    metaTitle: 'E-commerce Marketing Agency | Online Store Marketing | EDST',
    metaDescription: 'EDST helps e-commerce brands grow. Traffic, conversions, and customer acquisition for online stores.',
    keywords: ['ecommerce marketing', 'online store marketing', 'shopify marketing', 'DTC marketing', 'ecommerce growth'],
    heroHeadline: 'E-commerce Marketing That Converts',
    heroSubheadline: 'Drive traffic that buys. We help online stores turn browsers into buyers and buyers into repeat customers.',
    challenges: [
      'Driving qualified traffic cost-effectively',
      'Converting browsers into buyers',
      'Building loyalty in a one-click market',
      'Competing with Amazon and big box retailers'
    ],
    solutions: [
      'Social commerce strategies',
      'Influencer and UGC campaigns',
      'Email and SMS marketing',
      'Retention and loyalty programs'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '280%' },
      { metric: 'Stores Served', value: '800+' },
      { metric: 'Conversions Driven', value: '2M+' },
      { metric: 'Avg AOV Increase', value: '35%' }
    ],
    relatedIndustries: ['fashion', 'beauty', 'food-beverage'],
    popularServices: ['Social Commerce', 'Influencer Marketing', 'Email/SMS', 'Retention Programs']
  },
  {
    name: 'Local Retail',
    slug: 'retail',
    category: 'retail',
    icon: 'Store',
    tagline: 'Drive foot traffic',
    description: 'Help local retailers attract customers and compete in an omnichannel world.',
    metaTitle: 'Retail Marketing Agency | Local Store Marketing | EDST',
    metaDescription: 'EDST helps local retail stores grow. Foot traffic, local marketing, and omnichannel strategies.',
    keywords: ['retail marketing', 'local store marketing', 'brick and mortar marketing', 'retail foot traffic', 'shop local marketing'],
    heroHeadline: 'Retail Marketing for the Modern Store',
    heroSubheadline: 'Drive customers through your doors. We help local retailers thrive in an Amazon world.',
    challenges: [
      'Competing with online-only retailers',
      'Driving foot traffic consistently',
      'Building local community and loyalty',
      'Creating compelling in-store experiences'
    ],
    solutions: [
      'Local marketing strategies',
      'Google My Business optimization',
      'Community building campaigns',
      'Event and experiential marketing'
    ],
    results: [
      { metric: 'Avg Foot Traffic Increase', value: '150%' },
      { metric: 'Retailers Served', value: '400+' },
      { metric: 'Local Reviews Generated', value: '20K+' },
      { metric: 'Event Attendance Driven', value: '100K+' }
    ],
    relatedIndustries: ['small-business', 'restaurants', 'home-services'],
    popularServices: ['Local Marketing', 'Google My Business', 'Event Marketing', 'Community Building']
  },
  {
    name: 'Home Services',
    slug: 'home-services',
    category: 'retail',
    icon: 'Wrench',
    tagline: 'Fill your schedule',
    description: 'Help home service providers like plumbers, electricians, and contractors generate leads and build reputations.',
    metaTitle: 'Home Services Marketing Agency | Contractor Marketing | EDST',
    metaDescription: 'EDST helps home service businesses grow. Lead generation, reputation management, and local marketing.',
    keywords: ['home services marketing', 'contractor marketing', 'plumber marketing', 'electrician marketing', 'HVAC marketing'],
    heroHeadline: 'Home Services Marketing That Fills Calendars',
    heroSubheadline: 'Keep your trucks rolling. We help home service businesses generate quality leads and build sterling reputations.',
    challenges: [
      'Generating quality leads consistently',
      'Building trust before entering homes',
      'Managing online reputation',
      'Competing with franchise operations'
    ],
    solutions: [
      'Lead generation campaigns',
      'Review generation and management',
      'Local SEO and Google My Business',
      'Trust-building content strategies'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '200%' },
      { metric: 'Home Service Businesses', value: '600+' },
      { metric: 'Jobs Booked', value: '100K+' },
      { metric: 'Avg Review Rating', value: '4.8★' }
    ],
    relatedIndustries: ['real-estate', 'small-business', 'retail'],
    popularServices: ['Lead Generation', 'Review Management', 'Local SEO', 'Google My Business']
  },

  // ═══════════════════════════════════════════════════════════════
  // CREATIVE INDUSTRIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Photography',
    slug: 'photography',
    category: 'creative',
    icon: 'Camera',
    tagline: 'Book more shoots',
    description: 'Help photographers and videographers attract clients and build thriving creative businesses.',
    metaTitle: 'Photography Marketing Agency | Photographer Marketing | EDST',
    metaDescription: 'EDST helps photographers book more clients. Portfolio marketing, social media, and lead generation.',
    keywords: ['photography marketing', 'photographer marketing', 'wedding photographer marketing', 'portrait photography marketing'],
    heroHeadline: 'Photography Marketing That Books Shoots',
    heroSubheadline: 'Your work speaks for itself — when people see it. We help photographers get their work in front of ideal clients.',
    challenges: [
      'Standing out in a saturated photography market',
      'Attracting clients who value quality over price',
      'Building a consistent inquiry pipeline',
      'Showcasing work without looking salesy'
    ],
    solutions: [
      'Portfolio optimization strategies',
      'Social media content systems',
      'Referral amplification programs',
      'Ideal client attraction campaigns'
    ],
    results: [
      { metric: 'Avg Booking Increase', value: '180%' },
      { metric: 'Photographers Served', value: '500+' },
      { metric: 'Shoots Booked', value: '25K+' },
      { metric: 'Avg Package Price Increase', value: '50%' }
    ],
    relatedIndustries: ['film-video', 'wedding', 'influencers'],
    popularServices: ['Portfolio Marketing', 'Social Media', 'Referral Programs', 'Local Marketing']
  },
  {
    name: 'Weddings & Events',
    slug: 'wedding',
    category: 'creative',
    icon: 'Heart',
    tagline: 'Book your calendar',
    description: 'Help wedding and event professionals attract clients and build booked-out businesses.',
    metaTitle: 'Wedding Marketing Agency | Event Vendor Marketing | EDST',
    metaDescription: 'EDST helps wedding and event professionals grow. Lead generation, social media, and vendor marketing.',
    keywords: ['wedding marketing', 'wedding vendor marketing', 'event planner marketing', 'wedding photographer marketing'],
    heroHeadline: 'Wedding & Event Marketing That Books',
    heroSubheadline: 'Build a booked-out business doing what you love. We help wedding and event pros attract dream clients.',
    challenges: [
      'Reaching engaged couples in a crowded market',
      'Booking consistently year-round',
      'Building a portfolio of showcase events',
      'Commanding premium pricing'
    ],
    solutions: [
      'Pinterest and visual marketing strategies',
      'Vendor network and referral marketing',
      'Styled shoot strategies',
      'Premium positioning and pricing'
    ],
    results: [
      { metric: 'Avg Booking Increase', value: '200%' },
      { metric: 'Wedding Pros Served', value: '400+' },
      { metric: 'Events Booked', value: '15K+' },
      { metric: 'Avg Package Price Increase', value: '65%' }
    ],
    relatedIndustries: ['photography', 'entertainment', 'hospitality'],
    popularServices: ['Pinterest Marketing', 'Vendor Networks', 'Styled Shoots', 'Premium Positioning']
  },
  {
    name: 'Art & Design',
    slug: 'art-design',
    category: 'creative',
    icon: 'Palette',
    tagline: 'Sell your creative work',
    description: 'Help artists and designers build audiences and turn creative work into sustainable businesses.',
    metaTitle: 'Art Marketing Agency | Artist Marketing | EDST',
    metaDescription: 'EDST helps artists and designers sell their work. Audience building, sales marketing, and creative business growth.',
    keywords: ['art marketing', 'artist marketing', 'graphic design marketing', 'creative business marketing', 'sell art online'],
    heroHeadline: 'Marketing for Artists Who Want to Thrive',
    heroSubheadline: 'Turn your art into income. We help artists build audiences and businesses around their creative work.',
    challenges: [
      'Selling creative work without "selling out"',
      'Building an audience that actually buys',
      'Pricing work appropriately',
      'Creating sustainable creative income'
    ],
    solutions: [
      'Authentic audience building',
      'Artist brand positioning',
      'Launch and collection marketing',
      'Collector relationship building'
    ],
    results: [
      { metric: 'Avg Sales Increase', value: '250%' },
      { metric: 'Artists Served', value: '300+' },
      { metric: 'Art Sales Generated', value: '$10M+' },
      { metric: 'Avg Audience Growth', value: '400%' }
    ],
    relatedIndustries: ['photography', 'influencers', 'fashion'],
    popularServices: ['Audience Building', 'Launch Marketing', 'Brand Positioning', 'Collector Marketing']
  },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL INDUSTRIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Cannabis',
    slug: 'cannabis',
    category: 'lifestyle',
    icon: 'Leaf',
    tagline: 'Grow your cannabis brand',
    description: 'Help cannabis brands navigate marketing restrictions and build compliant, effective campaigns.',
    metaTitle: 'Cannabis Marketing Agency | Marijuana Marketing | EDST',
    metaDescription: 'EDST helps cannabis brands grow within compliance. Brand building, social media, and customer acquisition.',
    keywords: ['cannabis marketing', 'marijuana marketing', 'dispensary marketing', 'CBD marketing', 'cannabis brand marketing'],
    heroHeadline: 'Cannabis Marketing That Works Within the Rules',
    heroSubheadline: 'Build a cannabis brand that breaks through — legally. We help cannabis companies grow compliantly.',
    challenges: [
      'Marketing with platform restrictions',
      'Building brand in a stigmatized industry',
      'Staying compliant across jurisdictions',
      'Standing out in a rapidly commoditizing market'
    ],
    solutions: [
      'Compliant marketing strategies',
      'Brand building without paid ads',
      'Community and loyalty marketing',
      'Educational content strategies'
    ],
    results: [
      { metric: 'Avg Revenue Increase', value: '200%' },
      { metric: 'Cannabis Brands Served', value: '150+' },
      { metric: 'Dispensary Visits Driven', value: '500K+' },
      { metric: 'Brand Awareness Lift', value: '300%' }
    ],
    relatedIndustries: ['wellness', 'retail', 'ecommerce'],
    popularServices: ['Brand Building', 'Community Marketing', 'Content Strategy', 'Loyalty Programs']
  },
  {
    name: 'Nonprofit',
    slug: 'nonprofit',
    category: 'business',
    icon: 'Heart',
    tagline: 'Amplify your mission',
    description: 'Help nonprofits and causes build awareness, drive donations, and amplify their impact.',
    metaTitle: 'Nonprofit Marketing Agency | Cause Marketing | EDST',
    metaDescription: 'EDST helps nonprofits amplify their impact. Awareness campaigns, fundraising marketing, and donor engagement.',
    keywords: ['nonprofit marketing', 'cause marketing', 'charity marketing', 'fundraising marketing', 'nonprofit social media'],
    heroHeadline: 'Nonprofit Marketing That Moves People',
    heroSubheadline: 'Your cause deserves to be heard. We help nonprofits build awareness and inspire action.',
    challenges: [
      'Limited marketing budgets',
      'Standing out among thousands of causes',
      'Converting awareness into donations',
      'Building long-term donor relationships'
    ],
    solutions: [
      'Impact storytelling strategies',
      'Fundraising campaign marketing',
      'Donor engagement programs',
      'Awareness and advocacy campaigns'
    ],
    results: [
      { metric: 'Avg Donation Increase', value: '180%' },
      { metric: 'Nonprofits Served', value: '200+' },
      { metric: 'Donations Influenced', value: '$25M+' },
      { metric: 'Awareness Reach', value: '100M+' }
    ],
    relatedIndustries: ['healthcare', 'education', 'environment'],
    popularServices: ['Storytelling', 'Fundraising Campaigns', 'Donor Engagement', 'Awareness Marketing']
  },
  {
    name: 'Education',
    slug: 'education',
    category: 'business',
    icon: 'GraduationCap',
    tagline: 'Grow your educational brand',
    description: 'Help schools, courses, and educational businesses attract students and build impactful brands.',
    metaTitle: 'Education Marketing Agency | Course Marketing | EDST',
    metaDescription: 'EDST helps educational businesses grow. Student acquisition, course marketing, and brand building.',
    keywords: ['education marketing', 'course marketing', 'online course marketing', 'school marketing', 'educational marketing'],
    heroHeadline: 'Education Marketing That Enrolls Students',
    heroSubheadline: 'Fill your courses and classrooms. We help educational brands attract students who are ready to learn.',
    challenges: [
      'Standing out in a crowded education market',
      'Demonstrating value before enrollment',
      'Converting interest into committed students',
      'Building credibility and trust'
    ],
    solutions: [
      'Student acquisition campaigns',
      'Authority and credibility building',
      'Course launch marketing',
      'Student success storytelling'
    ],
    results: [
      { metric: 'Avg Enrollment Increase', value: '220%' },
      { metric: 'Education Brands Served', value: '300+' },
      { metric: 'Students Enrolled', value: '100K+' },
      { metric: 'Enrollment Increase', value: '220%' }
    ],
    relatedIndustries: ['coaches', 'tech', 'nonprofit'],
    popularServices: ['Student Acquisition', 'Course Launches', 'Authority Building', 'Success Stories']
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    category: 'retail',
    icon: 'Car',
    tagline: 'Drive more sales',
    description: 'Help automotive businesses, dealerships, and car brands drive traffic and close more deals.',
    metaTitle: 'Automotive Marketing Agency | Car Dealer Marketing | EDST',
    metaDescription: 'EDST helps automotive businesses grow. Dealership marketing, car sales, and automotive brand building.',
    keywords: ['automotive marketing', 'car dealer marketing', 'dealership marketing', 'car sales marketing', 'automotive social media'],
    heroHeadline: 'Automotive Marketing That Moves Metal',
    heroSubheadline: 'Drive buyers to your lot. We help automotive businesses generate leads and close more deals.',
    challenges: [
      'Standing out in a competitive dealer market',
      'Building trust before the test drive',
      'Generating quality leads consistently',
      'Differentiating beyond price'
    ],
    solutions: [
      'Lead generation campaigns',
      'Inventory marketing strategies',
      'Review and reputation management',
      'Service department marketing'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '180%' },
      { metric: 'Dealers Served', value: '150+' },
      { metric: 'Vehicles Sold', value: '25K+' },
      { metric: 'Service Revenue Increase', value: '120%' }
    ],
    relatedIndustries: ['home-services', 'finance', 'insurance'],
    popularServices: ['Lead Generation', 'Inventory Marketing', 'Review Management', 'Service Marketing']
  },
  {
    name: 'Construction',
    slug: 'construction',
    category: 'business',
    icon: 'HardHat',
    tagline: 'Build your reputation',
    description: 'Help construction companies, contractors, and builders generate leads and build dominant reputations.',
    metaTitle: 'Construction Marketing Agency | Contractor Marketing | EDST',
    metaDescription: 'EDST helps construction companies grow. Lead generation, reputation building, and contractor marketing.',
    keywords: ['construction marketing', 'contractor marketing', 'builder marketing', 'construction lead generation', 'home builder marketing'],
    heroHeadline: 'Construction Marketing That Builds Pipelines',
    heroSubheadline: 'Keep your crews busy. We help construction companies generate quality leads and build dominant reputations.',
    challenges: [
      'Generating quality project leads',
      'Building trust for significant investments',
      'Showcasing work effectively',
      'Standing out among contractors'
    ],
    solutions: [
      'Project lead generation',
      'Portfolio and case study marketing',
      'Review and reputation building',
      'Referral network development'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '200%' },
      { metric: 'Contractors Served', value: '300+' },
      { metric: 'Project Value Generated', value: '$100M+' },
      { metric: 'Avg Project Size Increase', value: '50%' }
    ],
    relatedIndustries: ['real-estate', 'home-services', 'architecture'],
    popularServices: ['Lead Generation', 'Portfolio Marketing', 'Reputation Building', 'Referral Programs']
  },
  {
    name: 'Mortgage & Lending',
    slug: 'mortgage',
    category: 'business',
    icon: 'Building',
    tagline: 'Close more loans',
    description: 'Help mortgage professionals and lenders generate leads and build referral networks.',
    metaTitle: 'Mortgage Marketing Agency | Loan Officer Marketing | EDST',
    metaDescription: 'EDST helps mortgage professionals grow. Lead generation, realtor partnerships, and personal branding.',
    keywords: ['mortgage marketing', 'loan officer marketing', 'lender marketing', 'mortgage lead generation', 'loan officer branding'],
    heroHeadline: 'Mortgage Marketing That Closes Loans',
    heroSubheadline: 'Build a pipeline of qualified borrowers. We help mortgage pros generate leads and strengthen referral networks.',
    challenges: [
      'Generating purchase leads in competitive markets',
      'Building realtor referral relationships',
      'Differentiating in a rate-driven market',
      'Staying compliant while marketing effectively'
    ],
    solutions: [
      'Lead generation campaigns',
      'Realtor partnership marketing',
      'Personal brand building',
      'Compliant content strategies'
    ],
    results: [
      { metric: 'Avg Lead Increase', value: '180%' },
      { metric: 'Loan Officers Served', value: '400+' },
      { metric: 'Loans Closed', value: '15K+' },
      { metric: 'Referral Network Growth', value: '200%' }
    ],
    relatedIndustries: ['real-estate', 'finance', 'insurance'],
    popularServices: ['Lead Generation', 'Realtor Partnerships', 'Personal Branding', 'Content Marketing']
  },
];

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getIndustriesByCategory(category: IndustryCategory): Industry[] {
  return industries.filter(i => i.category === category);
}

export function getRelatedIndustries(slug: string): Industry[] {
  const industry = getIndustryBySlug(slug);
  if (!industry) return [];
  
  return industry.relatedIndustries
    .map(relSlug => getIndustryBySlug(relSlug))
    .filter((i): i is Industry => i !== undefined);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map(i => i.slug);
}

export function getIndustryCategories(): { category: IndustryCategory; info: { name: string; description: string }; industries: Industry[] }[] {
  const categories = Object.entries(industryCategories) as [IndustryCategory, { name: string; description: string }][];
  
  return categories.map(([category, info]) => ({
    category,
    info,
    industries: getIndustriesByCategory(category)
  }));
}

