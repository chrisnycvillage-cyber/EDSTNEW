/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST INDUSTRY DATABASE — 50+ INDUSTRIES
 * ───────────────────────────────────────────────────────────────────
 * Comprehensive industry coverage for targeted marketing.
 * URL structure: /industries → /industries/[industrySlug]
 * 
 * CORE VALUE PROPOSITION (applies to ALL industries):
 * - Credibility: Look legitimate and trustworthy
 * - Exposure: Get in front of more people
 * - Brand: Build a winning personal/business brand
 * - Monetization: Turn attention into revenue
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

// Universal results that apply across all industries - focused on the CORE value
const universalResults = {
  brandGrowth: { metric: 'Brand Growth', value: 'Accelerated' },
  audienceReach: { metric: 'Audience Reach', value: 'Expanded' },
  credibility: { metric: 'Credibility', value: 'Established' },
  engagement: { metric: 'Engagement', value: 'Increased' },
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
    tagline: 'Build your artist brand',
    description: 'We help musicians build credibility, expand their reach, and create a brand that fans connect with and support.',
    metaTitle: 'Music Marketing Agency | Artist Brand Building | EDST',
    metaDescription: 'EDST helps musicians and artists build powerful brands, expand their reach, and connect with fans. Start growing your music career today.',
    keywords: ['music marketing', 'artist promotion', 'music brand building', 'artist growth', 'music industry marketing'],
    heroHeadline: 'Build a Music Brand That Gets Noticed',
    heroSubheadline: 'Whether you\'re just starting or already established — we help you build credibility, reach more listeners, and create a brand people remember.',
    challenges: [
      'Getting noticed in a crowded music landscape',
      'Building genuine credibility and trust with fans',
      'Creating a cohesive brand across all platforms',
      'Turning listeners into loyal supporters'
    ],
    solutions: [
      'Strategic brand positioning that makes you stand out',
      'Content strategies that build real engagement',
      'Multi-platform presence that looks professional',
      'Community building that creates superfans'
    ],
    results: [
      { metric: 'Brand Presence', value: 'Elevated' },
      { metric: 'Audience Reach', value: 'Expanded' },
      { metric: 'Fan Engagement', value: 'Increased' },
      { metric: 'Industry Credibility', value: 'Established' }
    ],
    testimonialQuote: "EDST helped me build a brand that actually represents who I am. My whole presence feels more professional now.",
    testimonialAuthor: "Independent Artist",
    testimonialRole: "Musician",
    relatedIndustries: ['podcasts', 'entertainment', 'influencers'],
    popularServices: ['Brand Building', 'Content Strategy', 'Social Media', 'Press & PR']
  },
  {
    name: 'Podcasts',
    slug: 'podcasts',
    category: 'entertainment',
    icon: 'Mic',
    tagline: 'Grow your podcast brand',
    description: 'Help your podcast break through with strategic branding that builds credibility and expands your listener base.',
    metaTitle: 'Podcast Marketing Agency | Podcast Brand Building | EDST',
    metaDescription: 'EDST helps podcasters build credibility, grow their audience, and create professional brands that attract listeners.',
    keywords: ['podcast marketing', 'podcast promotion', 'podcast branding', 'podcast growth'],
    heroHeadline: 'Build a Podcast Brand That Gets Heard',
    heroSubheadline: 'Stand out in a sea of podcasts with professional branding, expanded reach, and a presence that attracts loyal listeners.',
    challenges: [
      'Standing out among millions of podcasts',
      'Building credibility as a new voice',
      'Creating professional presence across platforms',
      'Growing beyond friends and family listeners'
    ],
    solutions: [
      'Professional brand positioning and identity',
      'Cross-platform visibility strategies',
      'Content optimization for discovery',
      'Audience building and engagement systems'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Listener Reach', value: 'Expanded' },
      { metric: 'Professional Presence', value: 'Elevated' },
      { metric: 'Audience Growth', value: 'Accelerated' }
    ],
    relatedIndustries: ['music', 'influencers', 'coaches'],
    popularServices: ['Brand Building', 'Social Strategy', 'Content Marketing', 'Audience Growth']
  },
  {
    name: 'Gaming & Esports',
    slug: 'gaming',
    category: 'entertainment',
    icon: 'Gamepad2',
    tagline: 'Level up your gaming brand',
    description: 'From streamers to esports pros, we help gaming creators build professional brands that stand out.',
    metaTitle: 'Gaming Marketing Agency | Streamer Branding | EDST',
    metaDescription: 'EDST helps gamers, streamers, and esports brands build professional presence and expand their reach.',
    keywords: ['gaming marketing', 'streamer branding', 'esports marketing', 'gaming influencer'],
    heroHeadline: 'Build a Gaming Brand That Stands Out',
    heroSubheadline: 'Create a professional presence that attracts viewers, builds community, and opens doors to opportunities.',
    challenges: [
      'Standing out on oversaturated platforms',
      'Building a recognizable personal brand',
      'Creating content that performs across platforms',
      'Looking professional to attract opportunities'
    ],
    solutions: [
      'Personal brand strategy and positioning',
      'Multi-platform content strategies',
      'Community building that creates loyalty',
      'Professional presence that attracts partners'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Increased' },
      { metric: 'Community Growth', value: 'Accelerated' },
      { metric: 'Professional Presence', value: 'Established' },
      { metric: 'Platform Reach', value: 'Expanded' }
    ],
    relatedIndustries: ['influencers', 'tech', 'entertainment'],
    popularServices: ['Personal Branding', 'Content Strategy', 'Community Building', 'Social Media']
  },
  {
    name: 'Sports & Athletes',
    slug: 'sports',
    category: 'entertainment',
    icon: 'Trophy',
    tagline: 'Build your athlete brand',
    description: 'Help athletes build powerful personal brands that create opportunities and connect with fans.',
    metaTitle: 'Sports Marketing Agency | Athlete Branding | EDST',
    metaDescription: 'EDST helps athletes build professional personal brands that attract opportunities and engage fans.',
    keywords: ['sports marketing', 'athlete branding', 'athlete marketing', 'sports personal brand'],
    heroHeadline: 'Build an Athlete Brand That Opens Doors',
    heroSubheadline: 'Your talent gets you on the field. Your brand creates opportunities off it. We help athletes build personal brands that matter.',
    challenges: [
      'Building a brand while focusing on performance',
      'Creating professional presence off the field',
      'Standing out in a crowded athlete market',
      'Connecting authentically with fans'
    ],
    solutions: [
      'Personal brand strategy and positioning',
      'Content systems that fit athlete schedules',
      'Professional presence across all platforms',
      'Fan engagement and community building'
    ],
    results: [
      { metric: 'Brand Visibility', value: 'Elevated' },
      { metric: 'Professional Image', value: 'Enhanced' },
      { metric: 'Fan Connection', value: 'Strengthened' },
      { metric: 'Opportunity Access', value: 'Expanded' }
    ],
    relatedIndustries: ['fitness', 'influencers', 'entertainment'],
    popularServices: ['Personal Branding', 'Content Creation', 'Social Media', 'PR & Visibility']
  },
  {
    name: 'Film & Video Production',
    slug: 'film-video',
    category: 'entertainment',
    icon: 'Film',
    tagline: 'Build your production brand',
    description: 'Help filmmakers and video creators build professional brands that attract clients and audiences.',
    metaTitle: 'Film Marketing Agency | Video Production Branding | EDST',
    metaDescription: 'EDST helps filmmakers and video production companies build professional brands and expand their reach.',
    keywords: ['film marketing', 'video production branding', 'filmmaker marketing'],
    heroHeadline: 'Build a Production Brand That Gets Noticed',
    heroSubheadline: 'Great content deserves great branding. We help filmmakers and creators build presence that attracts the right opportunities.',
    challenges: [
      'Getting your work seen in a crowded market',
      'Building credibility as a creator',
      'Creating professional presence that attracts clients',
      'Standing out with your unique creative vision'
    ],
    solutions: [
      'Brand identity that reflects your creative vision',
      'Portfolio presentation and marketing',
      'Visibility strategies for your work',
      'Professional presence that attracts opportunities'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Work Visibility', value: 'Increased' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Opportunity Access', value: 'Expanded' }
    ],
    relatedIndustries: ['photography', 'music', 'entertainment'],
    popularServices: ['Brand Building', 'Portfolio Marketing', 'Social Strategy', 'PR & Visibility']
  },
  {
    name: 'Entertainment & Events',
    slug: 'entertainment',
    category: 'entertainment',
    icon: 'Sparkles',
    tagline: 'Build your event brand',
    description: 'Help entertainment venues and event producers build brands that create buzz and attract audiences.',
    metaTitle: 'Entertainment Marketing Agency | Event Branding | EDST',
    metaDescription: 'EDST helps entertainment venues and event producers build powerful brands that attract audiences.',
    keywords: ['entertainment marketing', 'event branding', 'venue marketing'],
    heroHeadline: 'Build an Entertainment Brand People Talk About',
    heroSubheadline: 'Create a brand that generates buzz, builds anticipation, and keeps audiences coming back.',
    challenges: [
      'Standing out in a crowded entertainment market',
      'Building consistent brand presence',
      'Creating buzz that translates to attendance',
      'Competing with endless entertainment options'
    ],
    solutions: [
      'Brand positioning that creates desire',
      'Buzz-building marketing strategies',
      'Community engagement that drives loyalty',
      'Professional presence across all channels'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Elevated' },
      { metric: 'Audience Reach', value: 'Expanded' },
      { metric: 'Community Engagement', value: 'Increased' },
      { metric: 'Market Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['music', 'sports', 'hospitality'],
    popularServices: ['Brand Building', 'Social Media', 'Event Marketing', 'Community Building']
  },
  {
    name: 'Influencers & Creators',
    slug: 'influencers',
    category: 'entertainment',
    icon: 'Users',
    tagline: 'Scale your creator brand',
    description: 'Help influencers and content creators build professional brands that attract opportunities.',
    metaTitle: 'Influencer Marketing Agency | Creator Branding | EDST',
    metaDescription: 'EDST helps influencers and creators build professional brands and expand their reach.',
    keywords: ['influencer marketing', 'creator branding', 'influencer growth'],
    heroHeadline: 'Build a Creator Brand That Attracts Opportunities',
    heroSubheadline: 'From micro-influencer to media brand. We help creators build professional presence that opens doors.',
    challenges: [
      'Building a brand that stands out',
      'Looking professional enough for partnerships',
      'Growing beyond a plateau',
      'Creating sustainable presence across platforms'
    ],
    solutions: [
      'Personal brand strategy and positioning',
      'Cross-platform presence optimization',
      'Professional image that attracts partners',
      'Content strategies for sustainable growth'
    ],
    results: [
      { metric: 'Brand Professionalism', value: 'Elevated' },
      { metric: 'Audience Reach', value: 'Expanded' },
      { metric: 'Partnership Readiness', value: 'Enhanced' },
      { metric: 'Platform Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['music', 'gaming', 'fashion'],
    popularServices: ['Personal Branding', 'Content Strategy', 'Social Media', 'Partnership Positioning']
  },

  // ═══════════════════════════════════════════════════════════════
  // HEALTHCARE & WELLNESS
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Healthcare',
    slug: 'healthcare',
    category: 'healthcare',
    icon: 'Heart',
    tagline: 'Build your practice brand',
    description: 'Help healthcare providers build trust and credibility through professional branding that attracts patients.',
    metaTitle: 'Healthcare Marketing Agency | Medical Practice Branding | EDST',
    metaDescription: 'EDST helps healthcare providers build trusted professional brands that attract patients.',
    keywords: ['healthcare marketing', 'medical practice branding', 'healthcare brand building'],
    heroHeadline: 'Build a Healthcare Brand Patients Trust',
    heroSubheadline: 'Grow your practice with professional branding that builds credibility and attracts the patients you want.',
    challenges: [
      'Building trust in a skeptical digital landscape',
      'Standing out among competing practices',
      'Looking professional and credible online',
      'Attracting ideal patients consistently'
    ],
    solutions: [
      'Trust-building brand strategies',
      'Professional presence across platforms',
      'Reputation building and management',
      'Patient-focused content and engagement'
    ],
    results: [
      { metric: 'Brand Trust', value: 'Established' },
      { metric: 'Professional Presence', value: 'Elevated' },
      { metric: 'Patient Reach', value: 'Expanded' },
      { metric: 'Practice Credibility', value: 'Strengthened' }
    ],
    relatedIndustries: ['dental', 'medspa', 'mental-health'],
    popularServices: ['Brand Building', 'Reputation Management', 'Social Media', 'Content Marketing']
  },
  {
    name: 'Dental Practices',
    slug: 'dental',
    category: 'healthcare',
    icon: 'Smile',
    tagline: 'Build your dental brand',
    description: 'Help dental practices build professional brands that attract new patients and build community trust.',
    metaTitle: 'Dental Marketing Agency | Dentist Branding | EDST',
    metaDescription: 'EDST helps dental practices build professional brands that attract patients and build trust.',
    keywords: ['dental marketing', 'dentist branding', 'dental practice marketing'],
    heroHeadline: 'Build a Dental Brand Patients Choose',
    heroSubheadline: 'Stand out in your local market with professional branding that builds trust and attracts ideal patients.',
    challenges: [
      'Standing out in a competitive local market',
      'Building trust before the first appointment',
      'Looking professional and modern online',
      'Attracting higher-value cases'
    ],
    solutions: [
      'Professional brand positioning',
      'Trust-building content strategies',
      'Reputation management and building',
      'Modern, professional presence'
    ],
    results: [
      { metric: 'Brand Perception', value: 'Elevated' },
      { metric: 'Local Visibility', value: 'Increased' },
      { metric: 'Patient Trust', value: 'Strengthened' },
      { metric: 'Practice Reputation', value: 'Enhanced' }
    ],
    relatedIndustries: ['healthcare', 'medspa', 'chiropractic'],
    popularServices: ['Brand Building', 'Reputation Management', 'Social Media', 'Local Marketing']
  },
  {
    name: 'Med Spa & Aesthetics',
    slug: 'medspa',
    category: 'healthcare',
    icon: 'Sparkles',
    tagline: 'Elevate your aesthetic brand',
    description: 'Help med spas build premium brands that attract clients who value quality.',
    metaTitle: 'Med Spa Marketing Agency | Aesthetic Branding | EDST',
    metaDescription: 'EDST helps med spas and aesthetic practices build premium brands that attract quality clients.',
    keywords: ['med spa marketing', 'aesthetic branding', 'medspa marketing'],
    heroHeadline: 'Build a Premium Aesthetic Brand',
    heroSubheadline: 'Attract clients who value quality over price. We help aesthetic practices build brands that command respect.',
    challenges: [
      'Differentiating from discount providers',
      'Building a premium brand perception',
      'Attracting quality-focused clients',
      'Looking as premium as your services'
    ],
    solutions: [
      'Premium brand positioning strategies',
      'Elevated visual presence',
      'Trust and credibility building',
      'Quality-focused marketing approach'
    ],
    results: [
      { metric: 'Brand Positioning', value: 'Elevated' },
      { metric: 'Client Quality', value: 'Enhanced' },
      { metric: 'Market Perception', value: 'Premium' },
      { metric: 'Practice Credibility', value: 'Strengthened' }
    ],
    relatedIndustries: ['plastic-surgery', 'dental', 'wellness'],
    popularServices: ['Premium Branding', 'Social Media', 'Content Strategy', 'Reputation Building']
  },
  {
    name: 'Mental Health',
    slug: 'mental-health',
    category: 'healthcare',
    icon: 'Brain',
    tagline: 'Build your practice brand',
    description: 'Help therapists and mental health providers build professional brands that connect with those who need help.',
    metaTitle: 'Mental Health Marketing Agency | Therapist Branding | EDST',
    metaDescription: 'EDST helps therapists and mental health providers build trusted professional brands.',
    keywords: ['mental health marketing', 'therapist branding', 'counselor marketing'],
    heroHeadline: 'Build a Mental Health Brand That Connects',
    heroSubheadline: 'Help people find you when they need you most. Professional branding that builds trust and reduces barriers.',
    challenges: [
      'Building trust before the first session',
      'Standing out among growing provider options',
      'Creating professional yet approachable presence',
      'Reaching people who need help'
    ],
    solutions: [
      'Trust-building brand presence',
      'Approachable professional positioning',
      'Visibility strategies that reach those in need',
      'Content that reduces stigma and builds connection'
    ],
    results: [
      { metric: 'Professional Presence', value: 'Established' },
      { metric: 'Approachability', value: 'Enhanced' },
      { metric: 'Visibility', value: 'Increased' },
      { metric: 'Client Trust', value: 'Strengthened' }
    ],
    relatedIndustries: ['healthcare', 'coaches', 'wellness'],
    popularServices: ['Brand Building', 'Content Marketing', 'Social Media', 'Visibility Strategy']
  },
  {
    name: 'Fitness & Gyms',
    slug: 'fitness',
    category: 'healthcare',
    icon: 'Dumbbell',
    tagline: 'Build your fitness brand',
    description: 'Help gyms, studios, and trainers build powerful brands that attract committed members.',
    metaTitle: 'Fitness Marketing Agency | Gym Branding | EDST',
    metaDescription: 'EDST helps fitness businesses build powerful brands that attract and retain members.',
    keywords: ['fitness marketing', 'gym branding', 'personal trainer marketing'],
    heroHeadline: 'Build a Fitness Brand People Choose',
    heroSubheadline: 'Stand out from generic gyms with a brand that inspires action and builds community.',
    challenges: [
      'Standing out in a crowded fitness market',
      'Building a brand beyond just equipment',
      'Creating community and loyalty',
      'Looking professional and inspiring'
    ],
    solutions: [
      'Brand positioning that inspires action',
      'Community building strategies',
      'Professional presence that attracts members',
      'Content that motivates and engages'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Increased' },
      { metric: 'Community Strength', value: 'Built' },
      { metric: 'Member Engagement', value: 'Enhanced' },
      { metric: 'Market Position', value: 'Elevated' }
    ],
    relatedIndustries: ['wellness', 'sports', 'coaches'],
    popularServices: ['Brand Building', 'Social Media', 'Community Building', 'Content Strategy']
  },
  {
    name: 'Wellness & Holistic',
    slug: 'wellness',
    category: 'healthcare',
    icon: 'Leaf',
    tagline: 'Build your wellness brand',
    description: 'Help wellness practitioners build authentic brands that attract aligned clients.',
    metaTitle: 'Wellness Marketing Agency | Holistic Branding | EDST',
    metaDescription: 'EDST helps wellness and holistic health businesses build authentic brands that attract ideal clients.',
    keywords: ['wellness marketing', 'holistic branding', 'spa marketing'],
    heroHeadline: 'Build a Wellness Brand That Feels Authentic',
    heroSubheadline: 'Grow your practice without compromising your values. Authentic branding that attracts aligned clients.',
    challenges: [
      'Marketing without feeling salesy',
      'Standing out in the wellness boom',
      'Building credibility in a skeptical market',
      'Attracting clients aligned with your approach'
    ],
    solutions: [
      'Values-aligned brand positioning',
      'Authentic content strategies',
      'Credibility and trust building',
      'Community-driven presence'
    ],
    results: [
      { metric: 'Brand Authenticity', value: 'Preserved' },
      { metric: 'Client Alignment', value: 'Improved' },
      { metric: 'Credibility', value: 'Established' },
      { metric: 'Community Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['fitness', 'medspa', 'mental-health'],
    popularServices: ['Authentic Branding', 'Content Marketing', 'Community Building', 'Social Media']
  },
  {
    name: 'Chiropractic',
    slug: 'chiropractic',
    category: 'healthcare',
    icon: 'Activity',
    tagline: 'Build your practice brand',
    description: 'Help chiropractic practices build professional brands that attract ideal patients.',
    metaTitle: 'Chiropractic Marketing Agency | Chiropractor Branding | EDST',
    metaDescription: 'EDST helps chiropractic practices build professional brands that attract patients.',
    keywords: ['chiropractic marketing', 'chiropractor branding', 'chiropractic practice marketing'],
    heroHeadline: 'Build a Chiropractic Brand Patients Trust',
    heroSubheadline: 'Position your practice as the go-to wellness expert with professional branding that builds trust.',
    challenges: [
      'Building credibility and trust',
      'Educating patients on your value',
      'Standing out from competitors',
      'Creating a modern, professional image'
    ],
    solutions: [
      'Professional brand positioning',
      'Educational content strategies',
      'Trust and credibility building',
      'Modern presence across platforms'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Patient Trust', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Practice Visibility', value: 'Increased' }
    ],
    relatedIndustries: ['healthcare', 'wellness', 'fitness'],
    popularServices: ['Brand Building', 'Reputation Management', 'Social Media', 'Content Marketing']
  },
  {
    name: 'Plastic Surgery',
    slug: 'plastic-surgery',
    category: 'healthcare',
    icon: 'Scissors',
    tagline: 'Elevate your surgical brand',
    description: 'Help plastic surgeons build premium brands that attract quality patients.',
    metaTitle: 'Plastic Surgery Marketing Agency | Surgeon Branding | EDST',
    metaDescription: 'EDST helps plastic surgeons build premium professional brands that attract quality patients.',
    keywords: ['plastic surgery marketing', 'cosmetic surgery branding', 'surgeon marketing'],
    heroHeadline: 'Build a Premium Surgical Brand',
    heroSubheadline: 'Attract patients who value expertise and results. Premium branding for premium practices.',
    challenges: [
      'Differentiating from discount providers',
      'Building trust for significant decisions',
      'Showcasing expertise professionally',
      'Attracting quality-focused patients'
    ],
    solutions: [
      'Premium brand positioning',
      'Trust and credibility building',
      'Professional results presentation',
      'Elevated digital presence'
    ],
    results: [
      { metric: 'Brand Perception', value: 'Premium' },
      { metric: 'Patient Quality', value: 'Enhanced' },
      { metric: 'Trust Factor', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' }
    ],
    relatedIndustries: ['medspa', 'healthcare', 'dental'],
    popularServices: ['Premium Branding', 'Reputation Building', 'Content Strategy', 'Social Media']
  },

  // ═══════════════════════════════════════════════════════════════
  // BUSINESS & PROFESSIONAL SERVICES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Small Business',
    slug: 'small-business',
    category: 'business',
    icon: 'Store',
    tagline: 'Build your business brand',
    description: 'Help small businesses build professional brands that compete with anyone.',
    metaTitle: 'Small Business Marketing Agency | Business Branding | EDST',
    metaDescription: 'EDST helps small businesses build professional brands that stand out and attract customers.',
    keywords: ['small business marketing', 'business branding', 'local business marketing'],
    heroHeadline: 'Build a Business Brand That Punches Up',
    heroSubheadline: 'You don\'t need a big budget to look big. Professional branding that helps you compete with anyone.',
    challenges: [
      'Looking as professional as larger competitors',
      'Building credibility quickly',
      'Standing out in local markets',
      'Creating consistent brand presence'
    ],
    solutions: [
      'Professional brand identity',
      'Credibility building strategies',
      'Local market positioning',
      'Consistent presence across channels'
    ],
    results: [
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Market Credibility', value: 'Established' },
      { metric: 'Brand Consistency', value: 'Achieved' },
      { metric: 'Local Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['retail', 'restaurants', 'home-services'],
    popularServices: ['Brand Building', 'Social Media', 'Local Marketing', 'Reputation Management']
  },
  {
    name: 'Finance & Banking',
    slug: 'finance',
    category: 'business',
    icon: 'Landmark',
    tagline: 'Build financial trust',
    description: 'Help financial professionals build credibility and trust through professional branding.',
    metaTitle: 'Financial Services Marketing Agency | Finance Branding | EDST',
    metaDescription: 'EDST helps financial professionals build trusted brands that attract quality clients.',
    keywords: ['financial services marketing', 'finance branding', 'financial advisor marketing'],
    heroHeadline: 'Build a Financial Brand Clients Trust',
    heroSubheadline: 'In finance, trust is everything. Build credibility and professional presence that attracts quality clients.',
    challenges: [
      'Building trust in a skeptical market',
      'Differentiating in a commoditized industry',
      'Looking credible and established',
      'Reaching quality clients'
    ],
    solutions: [
      'Trust and credibility building',
      'Thought leadership positioning',
      'Professional presence across platforms',
      'Content that demonstrates expertise'
    ],
    results: [
      { metric: 'Brand Trust', value: 'Established' },
      { metric: 'Professional Credibility', value: 'Elevated' },
      { metric: 'Market Authority', value: 'Built' },
      { metric: 'Client Quality', value: 'Enhanced' }
    ],
    relatedIndustries: ['insurance', 'real-estate', 'legal'],
    popularServices: ['Thought Leadership', 'Content Marketing', 'Brand Building', 'LinkedIn Strategy']
  },
  {
    name: 'Legal Services',
    slug: 'legal',
    category: 'business',
    icon: 'Scale',
    tagline: 'Build your legal brand',
    description: 'Help law firms build authority and credibility that attracts quality clients.',
    metaTitle: 'Law Firm Marketing Agency | Legal Branding | EDST',
    metaDescription: 'EDST helps law firms build authoritative brands that attract quality clients.',
    keywords: ['law firm marketing', 'attorney branding', 'legal marketing'],
    heroHeadline: 'Build a Legal Brand Clients Seek Out',
    heroSubheadline: 'Stand out as the authority in your practice area. Professional branding that attracts quality clients.',
    challenges: [
      'Standing out in a crowded legal market',
      'Building authority in practice areas',
      'Looking established and credible',
      'Attracting quality clients'
    ],
    solutions: [
      'Authority building strategies',
      'Professional brand presence',
      'Thought leadership positioning',
      'Credibility-focused content'
    ],
    results: [
      { metric: 'Practice Authority', value: 'Established' },
      { metric: 'Brand Credibility', value: 'Elevated' },
      { metric: 'Professional Image', value: 'Enhanced' },
      { metric: 'Client Quality', value: 'Improved' }
    ],
    relatedIndustries: ['finance', 'real-estate', 'healthcare'],
    popularServices: ['Authority Building', 'Content Marketing', 'Brand Building', 'Reputation Management']
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    category: 'business',
    icon: 'Shield',
    tagline: 'Build your agent brand',
    description: 'Help insurance professionals build trusted personal brands that attract quality clients.',
    metaTitle: 'Insurance Marketing Agency | Agent Branding | EDST',
    metaDescription: 'EDST helps insurance agents build trusted personal brands that attract quality clients.',
    keywords: ['insurance marketing', 'insurance agent branding', 'insurance agency marketing'],
    heroHeadline: 'Build an Insurance Brand Clients Trust',
    heroSubheadline: 'Stand out from online quotes with a personal brand that builds trust and attracts quality clients.',
    challenges: [
      'Competing with direct carriers and online quotes',
      'Building trust in a skeptical market',
      'Looking professional and established',
      'Standing out as an individual agent'
    ],
    solutions: [
      'Personal brand building',
      'Trust and credibility strategies',
      'Professional presence development',
      'Value-based positioning'
    ],
    results: [
      { metric: 'Personal Brand', value: 'Established' },
      { metric: 'Client Trust', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Market Differentiation', value: 'Achieved' }
    ],
    relatedIndustries: ['finance', 'real-estate', 'small-business'],
    popularServices: ['Personal Branding', 'Social Media', 'Content Marketing', 'Reputation Building']
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    category: 'business',
    icon: 'Home',
    tagline: 'Build your realtor brand',
    description: 'Help real estate professionals build personal brands that attract clients and referrals.',
    metaTitle: 'Real Estate Marketing Agency | Realtor Branding | EDST',
    metaDescription: 'EDST helps real estate agents build powerful personal brands that attract clients.',
    keywords: ['real estate marketing', 'realtor branding', 'real estate agent marketing'],
    heroHeadline: 'Build a Real Estate Brand That Wins',
    heroSubheadline: 'Stand out among thousands of agents with a personal brand that attracts clients and referrals.',
    challenges: [
      'Standing out among thousands of local agents',
      'Building a recognizable personal brand',
      'Creating professional presence',
      'Attracting quality listings and buyers'
    ],
    solutions: [
      'Personal brand positioning',
      'Professional presence across platforms',
      'Content that showcases expertise',
      'Community and network building'
    ],
    results: [
      { metric: 'Personal Brand', value: 'Established' },
      { metric: 'Market Recognition', value: 'Increased' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Referral Potential', value: 'Enhanced' }
    ],
    relatedIndustries: ['mortgage', 'home-services', 'finance'],
    popularServices: ['Personal Branding', 'Social Media', 'Content Marketing', 'Video Marketing']
  },
  {
    name: 'Coaches & Consultants',
    slug: 'coaches',
    category: 'professional',
    icon: 'Target',
    tagline: 'Build your coaching brand',
    description: 'Help coaches and consultants build authoritative personal brands that attract premium clients.',
    metaTitle: 'Coach Marketing Agency | Consultant Branding | EDST',
    metaDescription: 'EDST helps coaches and consultants build professional brands that attract premium clients.',
    keywords: ['coach marketing', 'consultant branding', 'coaching business marketing'],
    heroHeadline: 'Build a Coaching Brand That Commands Respect',
    heroSubheadline: 'Stop chasing clients. Build a brand that attracts them. Professional positioning for premium coaches.',
    challenges: [
      'Standing out in a crowded coaching market',
      'Building authority and credibility quickly',
      'Looking professional enough for premium pricing',
      'Creating consistent brand presence'
    ],
    solutions: [
      'Authority positioning strategies',
      'Professional brand development',
      'Thought leadership content',
      'Premium brand presence'
    ],
    results: [
      { metric: 'Brand Authority', value: 'Established' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Market Positioning', value: 'Premium' },
      { metric: 'Credibility', value: 'Strengthened' }
    ],
    relatedIndustries: ['influencers', 'speakers', 'fitness'],
    popularServices: ['Personal Branding', 'Authority Building', 'Content Strategy', 'Social Media']
  },
  {
    name: 'Speakers & Authors',
    slug: 'speakers',
    category: 'professional',
    icon: 'BookOpen',
    tagline: 'Build your platform',
    description: 'Help speakers and authors build platforms and personal brands that open doors.',
    metaTitle: 'Speaker Marketing Agency | Author Branding | EDST',
    metaDescription: 'EDST helps speakers and authors build platforms and personal brands that attract opportunities.',
    keywords: ['speaker marketing', 'author branding', 'book marketing'],
    heroHeadline: 'Build a Platform That Opens Doors',
    heroSubheadline: 'Your message deserves a bigger stage. Build the platform and brand that makes it happen.',
    challenges: [
      'Building a recognized platform',
      'Getting booked for speaking opportunities',
      'Standing out as a thought leader',
      'Creating professional author/speaker presence'
    ],
    solutions: [
      'Platform building strategies',
      'Thought leadership positioning',
      'Professional brand development',
      'Visibility and positioning'
    ],
    results: [
      { metric: 'Platform Presence', value: 'Built' },
      { metric: 'Thought Leadership', value: 'Established' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Visibility', value: 'Increased' }
    ],
    relatedIndustries: ['coaches', 'podcasts', 'influencers'],
    popularServices: ['Platform Building', 'Personal Branding', 'Content Strategy', 'PR & Visibility']
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
    description: 'Help fashion brands build desirable brands that stand out and attract customers.',
    metaTitle: 'Fashion Marketing Agency | Apparel Branding | EDST',
    metaDescription: 'EDST helps fashion brands build desirable brands that attract customers and drive sales.',
    keywords: ['fashion marketing', 'apparel branding', 'clothing brand marketing'],
    heroHeadline: 'Build a Fashion Brand People Want to Wear',
    heroSubheadline: 'Stand out in a crowded market with brand positioning that creates desire and drives sales.',
    challenges: [
      'Standing out in a saturated fashion market',
      'Building brand desire, not just awareness',
      'Creating a brand identity that resonates',
      'Looking premium without premium budgets'
    ],
    solutions: [
      'Brand identity and positioning',
      'Desire-building content strategies',
      'Professional brand presence',
      'Community and audience building'
    ],
    results: [
      { metric: 'Brand Desirability', value: 'Elevated' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'Audience Connection', value: 'Enhanced' },
      { metric: 'Brand Recognition', value: 'Increased' }
    ],
    relatedIndustries: ['beauty', 'luxury', 'ecommerce'],
    popularServices: ['Brand Building', 'Social Media', 'Content Strategy', 'Influencer Marketing']
  },
  {
    name: 'Beauty & Cosmetics',
    slug: 'beauty',
    category: 'lifestyle',
    icon: 'Palette',
    tagline: 'Build your beauty brand',
    description: 'Help beauty brands build engaged audiences and loyal customer communities.',
    metaTitle: 'Beauty Marketing Agency | Cosmetics Branding | EDST',
    metaDescription: 'EDST helps beauty brands build engaging brands that attract customers and build loyalty.',
    keywords: ['beauty marketing', 'cosmetics branding', 'makeup marketing'],
    heroHeadline: 'Build a Beauty Brand That Captivates',
    heroSubheadline: 'Stand out with a brand that inspires and builds a community of loyal customers.',
    challenges: [
      'Competing with established beauty giants',
      'Building trust for products people wear',
      'Creating authentic brand presence',
      'Standing out in a visual category'
    ],
    solutions: [
      'Authentic brand positioning',
      'Trust-building strategies',
      'Community building approaches',
      'Visual brand excellence'
    ],
    results: [
      { metric: 'Brand Authenticity', value: 'Established' },
      { metric: 'Customer Trust', value: 'Built' },
      { metric: 'Community Engagement', value: 'Increased' },
      { metric: 'Market Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['fashion', 'medspa', 'wellness'],
    popularServices: ['Brand Building', 'Social Media', 'Content Strategy', 'Community Building']
  },
  {
    name: 'Travel & Tourism',
    slug: 'travel',
    category: 'lifestyle',
    icon: 'Plane',
    tagline: 'Build your travel brand',
    description: 'Help travel brands inspire and build presence that drives interest and bookings.',
    metaTitle: 'Travel Marketing Agency | Tourism Branding | EDST',
    metaDescription: 'EDST helps travel brands build inspiring presence that attracts travelers.',
    keywords: ['travel marketing', 'tourism branding', 'destination marketing'],
    heroHeadline: 'Build a Travel Brand That Inspires',
    heroSubheadline: 'Create a brand that makes people want to book. Inspiring presence that drives action.',
    challenges: [
      'Standing out in a visual-heavy market',
      'Building brand recognition',
      'Creating inspiring content consistently',
      'Competing with major travel platforms'
    ],
    solutions: [
      'Visual brand excellence',
      'Inspiring content strategies',
      'Brand positioning that stands out',
      'Audience building and engagement'
    ],
    results: [
      { metric: 'Brand Inspiration', value: 'Elevated' },
      { metric: 'Visual Presence', value: 'Enhanced' },
      { metric: 'Audience Reach', value: 'Expanded' },
      { metric: 'Brand Recognition', value: 'Increased' }
    ],
    relatedIndustries: ['hospitality', 'luxury', 'entertainment'],
    popularServices: ['Brand Building', 'Visual Content', 'Social Media', 'Influencer Marketing']
  },
  {
    name: 'Luxury Brands',
    slug: 'luxury',
    category: 'lifestyle',
    icon: 'Diamond',
    tagline: 'Elevate your luxury brand',
    description: 'Help luxury brands maintain exclusivity while building digital presence.',
    metaTitle: 'Luxury Marketing Agency | Premium Branding | EDST',
    metaDescription: 'EDST helps luxury brands build premium digital presence without compromising exclusivity.',
    keywords: ['luxury marketing', 'luxury branding', 'premium brand marketing'],
    heroHeadline: 'Build a Luxury Brand Without Compromise',
    heroSubheadline: 'Maintain exclusivity while building digital presence. Premium branding for premium brands.',
    challenges: [
      'Building digital presence without losing exclusivity',
      'Maintaining premium perception',
      'Reaching affluent audiences authentically',
      'Storytelling that justifies premium positioning'
    ],
    solutions: [
      'Premium positioning strategies',
      'Exclusive-feeling digital presence',
      'Craftsmanship and heritage storytelling',
      'Affluent audience engagement'
    ],
    results: [
      { metric: 'Premium Positioning', value: 'Maintained' },
      { metric: 'Digital Presence', value: 'Elevated' },
      { metric: 'Brand Exclusivity', value: 'Preserved' },
      { metric: 'Market Perception', value: 'Strengthened' }
    ],
    relatedIndustries: ['fashion', 'travel', 'medspa'],
    popularServices: ['Premium Branding', 'Content Strategy', 'Social Media', 'Exclusive Marketing']
  },
  {
    name: 'Pets & Animals',
    slug: 'pets',
    category: 'lifestyle',
    icon: 'Cat',
    tagline: 'Build your pet brand',
    description: 'Help pet brands build loyal communities of pet parents.',
    metaTitle: 'Pet Marketing Agency | Pet Brand Building | EDST',
    metaDescription: 'EDST helps pet brands build loyal communities and trusted brand presence.',
    keywords: ['pet marketing', 'pet branding', 'veterinary marketing'],
    heroHeadline: 'Build a Pet Brand Parents Trust',
    heroSubheadline: 'Reach people who treat pets like family with a brand that builds trust and loyalty.',
    challenges: [
      'Building trust with protective pet parents',
      'Standing out in a booming pet market',
      'Creating engaging content in a cute-saturated space',
      'Building brand beyond just products'
    ],
    solutions: [
      'Trust-building brand strategies',
      'Community building for pet parents',
      'Engaging content approaches',
      'Educational and value-driven marketing'
    ],
    results: [
      { metric: 'Brand Trust', value: 'Established' },
      { metric: 'Community Loyalty', value: 'Built' },
      { metric: 'Engagement', value: 'Increased' },
      { metric: 'Market Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['ecommerce', 'retail', 'healthcare'],
    popularServices: ['Brand Building', 'Community Building', 'Social Media', 'Content Strategy']
  },

  // ═══════════════════════════════════════════════════════════════
  // FOOD & HOSPITALITY
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Restaurants',
    slug: 'restaurants',
    category: 'food',
    icon: 'UtensilsCrossed',
    tagline: 'Build your restaurant brand',
    description: 'Help restaurants build brands that attract diners and build loyalty.',
    metaTitle: 'Restaurant Marketing Agency | Food Branding | EDST',
    metaDescription: 'EDST helps restaurants build brands that attract diners and create buzz.',
    keywords: ['restaurant marketing', 'food branding', 'restaurant social media'],
    heroHeadline: 'Build a Restaurant Brand People Crave',
    heroSubheadline: 'Stand out with a brand that creates buzz and keeps tables full.',
    challenges: [
      'Standing out in a crowded restaurant market',
      'Building a brand beyond just food',
      'Creating consistent presence',
      'Building loyalty in a competitive market'
    ],
    solutions: [
      'Restaurant brand positioning',
      'Visual content strategies',
      'Social presence building',
      'Community and loyalty building'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Increased' },
      { metric: 'Social Presence', value: 'Strengthened' },
      { metric: 'Community Loyalty', value: 'Built' },
      { metric: 'Market Position', value: 'Elevated' }
    ],
    relatedIndustries: ['bars', 'hospitality', 'food-beverage'],
    popularServices: ['Brand Building', 'Social Media', 'Content Strategy', 'Local Marketing']
  },
  {
    name: 'Bars & Nightlife',
    slug: 'bars',
    category: 'food',
    icon: 'Wine',
    tagline: 'Build your nightlife brand',
    description: 'Help bars and nightlife venues build brands that create buzz and attract crowds.',
    metaTitle: 'Bar Marketing Agency | Nightlife Branding | EDST',
    metaDescription: 'EDST helps bars and nightlife venues build brands that create buzz.',
    keywords: ['bar marketing', 'nightlife branding', 'club marketing'],
    heroHeadline: 'Build a Nightlife Brand That Creates Scenes',
    heroSubheadline: 'Become THE place to be with a brand that generates buzz and draws crowds.',
    challenges: [
      'Creating consistent buzz',
      'Building brand beyond just events',
      'Staying relevant in fast-moving nightlife',
      'Attracting the right crowd'
    ],
    solutions: [
      'Brand identity and positioning',
      'Buzz-building strategies',
      'Community building',
      'Event and social marketing'
    ],
    results: [
      { metric: 'Brand Buzz', value: 'Created' },
      { metric: 'Market Position', value: 'Elevated' },
      { metric: 'Community Engagement', value: 'Increased' },
      { metric: 'Brand Recognition', value: 'Built' }
    ],
    relatedIndustries: ['restaurants', 'entertainment', 'hospitality'],
    popularServices: ['Brand Building', 'Social Media', 'Event Marketing', 'Community Building']
  },
  {
    name: 'Food & Beverage Brands',
    slug: 'food-beverage',
    category: 'food',
    icon: 'Coffee',
    tagline: 'Build your CPG brand',
    description: 'Help food and beverage brands build awareness and loyal customers.',
    metaTitle: 'Food & Beverage Marketing Agency | CPG Branding | EDST',
    metaDescription: 'EDST helps food and beverage brands build awareness and customer loyalty.',
    keywords: ['food brand marketing', 'beverage branding', 'CPG marketing'],
    heroHeadline: 'Build a Food & Beverage Brand People Love',
    heroSubheadline: 'Stand out on the shelf and in the feed with a brand that drives trial and loyalty.',
    challenges: [
      'Standing out in crowded categories',
      'Building brand beyond product',
      'Creating content that engages',
      'Building loyalty in a promotional market'
    ],
    solutions: [
      'Brand identity and positioning',
      'Content that engages and educates',
      'Community building strategies',
      'Visibility and awareness building'
    ],
    results: [
      { metric: 'Brand Awareness', value: 'Increased' },
      { metric: 'Customer Engagement', value: 'Enhanced' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'Brand Loyalty', value: 'Built' }
    ],
    relatedIndustries: ['restaurants', 'retail', 'ecommerce'],
    popularServices: ['Brand Building', 'Content Strategy', 'Social Media', 'Influencer Marketing']
  },
  {
    name: 'Hotels & Hospitality',
    slug: 'hospitality',
    category: 'food',
    icon: 'Hotel',
    tagline: 'Build your hospitality brand',
    description: 'Help hotels and hospitality brands build memorable brand experiences.',
    metaTitle: 'Hotel Marketing Agency | Hospitality Branding | EDST',
    metaDescription: 'EDST helps hotels and hospitality brands build memorable brand experiences.',
    keywords: ['hotel marketing', 'hospitality branding', 'hotel social media'],
    heroHeadline: 'Build a Hospitality Brand Worth Talking About',
    heroSubheadline: 'Create a brand that inspires bookings and generates word-of-mouth.',
    challenges: [
      'Standing out in a crowded market',
      'Building brand beyond just amenities',
      'Creating content that captures experience',
      'Competing with major chains and OTAs'
    ],
    solutions: [
      'Brand experience positioning',
      'Visual content strategies',
      'Community and loyalty building',
      'Direct relationship marketing'
    ],
    results: [
      { metric: 'Brand Experience', value: 'Elevated' },
      { metric: 'Guest Connection', value: 'Strengthened' },
      { metric: 'Market Presence', value: 'Enhanced' },
      { metric: 'Brand Recognition', value: 'Increased' }
    ],
    relatedIndustries: ['travel', 'restaurants', 'luxury'],
    popularServices: ['Brand Building', 'Visual Content', 'Social Media', 'Experience Marketing']
  },

  // ═══════════════════════════════════════════════════════════════
  // TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Tech & SaaS',
    slug: 'tech',
    category: 'tech',
    icon: 'Laptop',
    tagline: 'Build your tech brand',
    description: 'Help tech companies build brands that stand out and attract customers.',
    metaTitle: 'Tech Marketing Agency | SaaS Branding | EDST',
    metaDescription: 'EDST helps tech and SaaS companies build brands that stand out and attract customers.',
    keywords: ['tech marketing', 'SaaS branding', 'technology marketing'],
    heroHeadline: 'Build a Tech Brand That Stands Out',
    heroSubheadline: 'Rise above the noise with a brand that resonates and drives customer interest.',
    challenges: [
      'Standing out in crowded tech categories',
      'Building brand beyond just features',
      'Creating content that engages',
      'Looking established and trustworthy'
    ],
    solutions: [
      'Brand positioning strategies',
      'Thought leadership content',
      'Professional presence building',
      'Credibility and trust development'
    ],
    results: [
      { metric: 'Brand Positioning', value: 'Strengthened' },
      { metric: 'Market Credibility', value: 'Established' },
      { metric: 'Audience Engagement', value: 'Increased' },
      { metric: 'Professional Image', value: 'Elevated' }
    ],
    relatedIndustries: ['startups', 'crypto', 'ecommerce'],
    popularServices: ['Brand Building', 'Content Strategy', 'Thought Leadership', 'Social Media']
  },
  {
    name: 'Startups',
    slug: 'startups',
    category: 'tech',
    icon: 'Rocket',
    tagline: 'Build your startup brand',
    description: 'Help startups build credibility and brand presence from day one.',
    metaTitle: 'Startup Marketing Agency | Startup Branding | EDST',
    metaDescription: 'EDST helps startups build credibility and brand presence efficiently.',
    keywords: ['startup marketing', 'startup branding', 'early-stage marketing'],
    heroHeadline: 'Build a Startup Brand That Punches Up',
    heroSubheadline: 'Look established from day one. Build credibility and presence that attracts customers and investors.',
    challenges: [
      'Building credibility as a new player',
      'Looking professional with limited resources',
      'Creating brand presence quickly',
      'Standing out to get noticed'
    ],
    solutions: [
      'Credibility building strategies',
      'Professional brand development',
      'Efficient presence building',
      'Visibility and buzz creation'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Professional Image', value: 'Built' },
      { metric: 'Market Visibility', value: 'Increased' },
      { metric: 'Investor Perception', value: 'Enhanced' }
    ],
    relatedIndustries: ['tech', 'ecommerce', 'finance'],
    popularServices: ['Brand Building', 'Credibility Strategy', 'Social Media', 'PR & Visibility']
  },
  {
    name: 'Crypto & Web3',
    slug: 'crypto',
    category: 'tech',
    icon: 'Coins',
    tagline: 'Build your Web3 brand',
    description: 'Help crypto and Web3 projects build trusted communities and credible presence.',
    metaTitle: 'Crypto Marketing Agency | Web3 Branding | EDST',
    metaDescription: 'EDST helps crypto and Web3 projects build trusted communities and brand presence.',
    keywords: ['crypto marketing', 'web3 branding', 'NFT marketing'],
    heroHeadline: 'Build a Web3 Brand That Builds Trust',
    heroSubheadline: 'Stand out in a skeptical space with a brand that builds credibility and community.',
    challenges: [
      'Building trust in a skeptical environment',
      'Creating credible brand presence',
      'Standing out among thousands of projects',
      'Building real community, not just followers'
    ],
    solutions: [
      'Trust and credibility building',
      'Community building strategies',
      'Professional brand presence',
      'Engagement that builds believers'
    ],
    results: [
      { metric: 'Community Trust', value: 'Established' },
      { metric: 'Brand Credibility', value: 'Built' },
      { metric: 'Community Engagement', value: 'Increased' },
      { metric: 'Market Presence', value: 'Strengthened' }
    ],
    relatedIndustries: ['tech', 'gaming', 'finance'],
    popularServices: ['Community Building', 'Brand Building', 'Content Strategy', 'Social Media']
  },
  {
    name: 'Apps & Mobile',
    slug: 'apps',
    category: 'tech',
    icon: 'Smartphone',
    tagline: 'Build your app brand',
    description: 'Help mobile apps build brand presence that attracts and retains users.',
    metaTitle: 'App Marketing Agency | Mobile Branding | EDST',
    metaDescription: 'EDST helps mobile apps build brand presence that attracts and retains users.',
    keywords: ['app marketing', 'mobile branding', 'app store marketing'],
    heroHeadline: 'Build an App Brand Users Remember',
    heroSubheadline: 'Stand out in a sea of apps with a brand that attracts users and keeps them engaged.',
    challenges: [
      'Standing out among millions of apps',
      'Building brand beyond just features',
      'Creating presence that attracts users',
      'Building loyalty and retention'
    ],
    solutions: [
      'App brand positioning',
      'User engagement strategies',
      'Professional presence building',
      'Community and loyalty development'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Increased' },
      { metric: 'User Engagement', value: 'Enhanced' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'User Loyalty', value: 'Built' }
    ],
    relatedIndustries: ['tech', 'gaming', 'ecommerce'],
    popularServices: ['Brand Building', 'User Engagement', 'Social Media', 'Content Strategy']
  },

  // ═══════════════════════════════════════════════════════════════
  // RETAIL & E-COMMERCE
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    category: 'retail',
    icon: 'ShoppingCart',
    tagline: 'Build your online brand',
    description: 'Help e-commerce brands build presence that drives traffic and creates loyal customers.',
    metaTitle: 'E-commerce Marketing Agency | Online Store Branding | EDST',
    metaDescription: 'EDST helps e-commerce brands build presence that attracts customers and builds loyalty.',
    keywords: ['ecommerce marketing', 'online store branding', 'DTC marketing'],
    heroHeadline: 'Build an E-commerce Brand That Sells',
    heroSubheadline: 'Stand out from the sea of online stores with a brand that attracts and converts.',
    challenges: [
      'Standing out among endless online options',
      'Building brand trust online',
      'Creating presence that converts',
      'Building loyalty in a one-click market'
    ],
    solutions: [
      'Brand identity and positioning',
      'Trust-building strategies',
      'Content that engages and converts',
      'Community and loyalty building'
    ],
    results: [
      { metric: 'Brand Recognition', value: 'Increased' },
      { metric: 'Customer Trust', value: 'Built' },
      { metric: 'Engagement', value: 'Enhanced' },
      { metric: 'Loyalty', value: 'Strengthened' }
    ],
    relatedIndustries: ['fashion', 'beauty', 'food-beverage'],
    popularServices: ['Brand Building', 'Social Media', 'Content Strategy', 'Community Building']
  },
  {
    name: 'Local Retail',
    slug: 'retail',
    category: 'retail',
    icon: 'Store',
    tagline: 'Build your local brand',
    description: 'Help local retailers build brands that attract customers and build community loyalty.',
    metaTitle: 'Retail Marketing Agency | Local Store Branding | EDST',
    metaDescription: 'EDST helps local retail stores build brands that attract customers.',
    keywords: ['retail marketing', 'local store branding', 'brick and mortar marketing'],
    heroHeadline: 'Build a Retail Brand People Choose',
    heroSubheadline: 'Stand out locally with a brand that builds community and attracts loyal customers.',
    challenges: [
      'Competing with online retailers',
      'Building a brand people remember',
      'Creating local community loyalty',
      'Standing out in local markets'
    ],
    solutions: [
      'Local brand positioning',
      'Community building strategies',
      'Professional presence building',
      'Local visibility and engagement'
    ],
    results: [
      { metric: 'Local Recognition', value: 'Increased' },
      { metric: 'Community Loyalty', value: 'Built' },
      { metric: 'Brand Presence', value: 'Strengthened' },
      { metric: 'Customer Connection', value: 'Enhanced' }
    ],
    relatedIndustries: ['small-business', 'restaurants', 'home-services'],
    popularServices: ['Brand Building', 'Local Marketing', 'Community Building', 'Social Media']
  },
  {
    name: 'Home Services',
    slug: 'home-services',
    category: 'retail',
    icon: 'Wrench',
    tagline: 'Build your service brand',
    description: 'Help home service providers build trusted brands that attract quality customers.',
    metaTitle: 'Home Services Marketing Agency | Contractor Branding | EDST',
    metaDescription: 'EDST helps home service businesses build trusted brands that attract customers.',
    keywords: ['home services marketing', 'contractor branding', 'plumber marketing'],
    heroHeadline: 'Build a Service Brand People Trust',
    heroSubheadline: 'Stand out with a professional brand that builds trust before you ever walk through the door.',
    challenges: [
      'Building trust before entering homes',
      'Looking professional and established',
      'Standing out from competitors',
      'Building reputation in local markets'
    ],
    solutions: [
      'Trust and credibility building',
      'Professional brand development',
      'Reputation building strategies',
      'Local presence and visibility'
    ],
    results: [
      { metric: 'Brand Trust', value: 'Established' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Local Reputation', value: 'Strengthened' },
      { metric: 'Market Presence', value: 'Increased' }
    ],
    relatedIndustries: ['real-estate', 'small-business', 'retail'],
    popularServices: ['Brand Building', 'Reputation Management', 'Local Marketing', 'Social Media']
  },

  // ═══════════════════════════════════════════════════════════════
  // CREATIVE INDUSTRIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Photography',
    slug: 'photography',
    category: 'creative',
    icon: 'Camera',
    tagline: 'Build your creative brand',
    description: 'Help photographers build professional brands that attract ideal clients.',
    metaTitle: 'Photography Marketing Agency | Photographer Branding | EDST',
    metaDescription: 'EDST helps photographers build professional brands that attract clients.',
    keywords: ['photography marketing', 'photographer branding', 'creative marketing'],
    heroHeadline: 'Build a Photography Brand That Books',
    heroSubheadline: 'Your work speaks for itself — when people see it. Build a brand that gets your work in front of ideal clients.',
    challenges: [
      'Standing out in a saturated market',
      'Attracting quality clients',
      'Building consistent presence',
      'Looking as professional as your work'
    ],
    solutions: [
      'Professional brand positioning',
      'Portfolio and presence optimization',
      'Ideal client attraction strategies',
      'Consistent brand experience'
    ],
    results: [
      { metric: 'Brand Professionalism', value: 'Elevated' },
      { metric: 'Client Quality', value: 'Enhanced' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'Brand Recognition', value: 'Increased' }
    ],
    relatedIndustries: ['film-video', 'wedding', 'influencers'],
    popularServices: ['Brand Building', 'Portfolio Marketing', 'Social Media', 'Content Strategy']
  },
  {
    name: 'Weddings & Events',
    slug: 'wedding',
    category: 'creative',
    icon: 'Heart',
    tagline: 'Build your event brand',
    description: 'Help wedding and event professionals build brands that attract dream clients.',
    metaTitle: 'Wedding Marketing Agency | Event Branding | EDST',
    metaDescription: 'EDST helps wedding and event professionals build brands that attract clients.',
    keywords: ['wedding marketing', 'wedding vendor branding', 'event planner marketing'],
    heroHeadline: 'Build a Wedding Brand That Books Dream Clients',
    heroSubheadline: 'Attract couples who value what you do with a brand that showcases your best work.',
    challenges: [
      'Standing out in the wedding market',
      'Attracting quality clients',
      'Building presence consistently',
      'Commanding premium positioning'
    ],
    solutions: [
      'Brand positioning strategies',
      'Visual excellence and portfolio presentation',
      'Ideal client attraction',
      'Premium brand development'
    ],
    results: [
      { metric: 'Brand Positioning', value: 'Elevated' },
      { metric: 'Client Quality', value: 'Enhanced' },
      { metric: 'Professional Image', value: 'Strengthened' },
      { metric: 'Market Presence', value: 'Increased' }
    ],
    relatedIndustries: ['photography', 'entertainment', 'hospitality'],
    popularServices: ['Brand Building', 'Visual Marketing', 'Social Media', 'Portfolio Strategy']
  },
  {
    name: 'Art & Design',
    slug: 'art-design',
    category: 'creative',
    icon: 'Palette',
    tagline: 'Build your creative brand',
    description: 'Help artists and designers build brands that attract collectors and clients.',
    metaTitle: 'Art Marketing Agency | Artist Branding | EDST',
    metaDescription: 'EDST helps artists and designers build brands that attract buyers and opportunities.',
    keywords: ['art marketing', 'artist branding', 'creative business marketing'],
    heroHeadline: 'Build a Creative Brand That Sells',
    heroSubheadline: 'Turn your art into income with a brand that attracts collectors and clients.',
    challenges: [
      'Selling creative work authentically',
      'Building audience that buys',
      'Creating sustainable creative income',
      'Looking professional as a business'
    ],
    solutions: [
      'Authentic brand positioning',
      'Audience building strategies',
      'Professional presence development',
      'Collector and client attraction'
    ],
    results: [
      { metric: 'Brand Authenticity', value: 'Preserved' },
      { metric: 'Audience Building', value: 'Accelerated' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Collector Interest', value: 'Increased' }
    ],
    relatedIndustries: ['photography', 'influencers', 'fashion'],
    popularServices: ['Brand Building', 'Audience Building', 'Social Media', 'Portfolio Marketing']
  },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL INDUSTRIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Cannabis',
    slug: 'cannabis',
    category: 'lifestyle',
    icon: 'Leaf',
    tagline: 'Build your cannabis brand',
    description: 'Help cannabis brands build credible presence within compliance requirements.',
    metaTitle: 'Cannabis Marketing Agency | Cannabis Branding | EDST',
    metaDescription: 'EDST helps cannabis brands build credible presence while staying compliant.',
    keywords: ['cannabis marketing', 'cannabis branding', 'dispensary marketing'],
    heroHeadline: 'Build a Cannabis Brand That Stands Out',
    heroSubheadline: 'Build credibility and community in a restricted landscape. Professional branding that works within the rules.',
    challenges: [
      'Marketing with platform restrictions',
      'Building brand in a stigmatized industry',
      'Creating credible professional presence',
      'Standing out in a commoditizing market'
    ],
    solutions: [
      'Compliant brand strategies',
      'Credibility and trust building',
      'Community development approaches',
      'Professional presence building'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Community Building', value: 'Achieved' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' }
    ],
    relatedIndustries: ['wellness', 'retail', 'ecommerce'],
    popularServices: ['Brand Building', 'Community Building', 'Content Strategy', 'Social Media']
  },
  {
    name: 'Nonprofit',
    slug: 'nonprofit',
    category: 'business',
    icon: 'Heart',
    tagline: 'Build your mission brand',
    description: 'Help nonprofits build presence that amplifies their mission and impact.',
    metaTitle: 'Nonprofit Marketing Agency | Cause Branding | EDST',
    metaDescription: 'EDST helps nonprofits build brand presence that amplifies their mission.',
    keywords: ['nonprofit marketing', 'cause branding', 'charity marketing'],
    heroHeadline: 'Build a Nonprofit Brand That Moves People',
    heroSubheadline: 'Your cause deserves to be heard. Build presence that inspires action and support.',
    challenges: [
      'Limited marketing resources',
      'Standing out among many causes',
      'Building credibility and trust',
      'Inspiring action and support'
    ],
    solutions: [
      'Mission-driven brand building',
      'Impact storytelling strategies',
      'Credibility and trust development',
      'Community engagement approaches'
    ],
    results: [
      { metric: 'Mission Visibility', value: 'Increased' },
      { metric: 'Community Engagement', value: 'Enhanced' },
      { metric: 'Brand Credibility', value: 'Strengthened' },
      { metric: 'Supporter Connection', value: 'Deepened' }
    ],
    relatedIndustries: ['healthcare', 'education'],
    popularServices: ['Brand Building', 'Storytelling', 'Community Building', 'Content Strategy']
  },
  {
    name: 'Education',
    slug: 'education',
    category: 'business',
    icon: 'GraduationCap',
    tagline: 'Build your education brand',
    description: 'Help educational businesses build trusted brands that attract students.',
    metaTitle: 'Education Marketing Agency | Course Branding | EDST',
    metaDescription: 'EDST helps educational businesses build trusted brands that attract students.',
    keywords: ['education marketing', 'course branding', 'online course marketing'],
    heroHeadline: 'Build an Education Brand Students Trust',
    heroSubheadline: 'Stand out with a brand that builds credibility and attracts committed learners.',
    challenges: [
      'Standing out in a crowded education market',
      'Building credibility and trust',
      'Demonstrating value before enrollment',
      'Creating professional presence'
    ],
    solutions: [
      'Credibility and authority building',
      'Professional brand development',
      'Trust-building strategies',
      'Student success storytelling'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Student Trust', value: 'Built' },
      { metric: 'Market Presence', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' }
    ],
    relatedIndustries: ['coaches', 'tech', 'nonprofit'],
    popularServices: ['Brand Building', 'Authority Building', 'Content Strategy', 'Social Media']
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    category: 'retail',
    icon: 'Car',
    tagline: 'Build your dealer brand',
    description: 'Help automotive businesses build trusted brands that attract quality buyers.',
    metaTitle: 'Automotive Marketing Agency | Dealer Branding | EDST',
    metaDescription: 'EDST helps automotive businesses build trusted brands that attract buyers.',
    keywords: ['automotive marketing', 'car dealer branding', 'dealership marketing'],
    heroHeadline: 'Build an Automotive Brand Buyers Trust',
    heroSubheadline: 'Stand out from the competition with a brand that builds trust and attracts quality buyers.',
    challenges: [
      'Standing out in a competitive market',
      'Building trust before the test drive',
      'Looking professional and trustworthy',
      'Differentiating beyond price'
    ],
    solutions: [
      'Trust and credibility building',
      'Professional brand development',
      'Reputation building strategies',
      'Value-based positioning'
    ],
    results: [
      { metric: 'Brand Trust', value: 'Established' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Market Reputation', value: 'Strengthened' },
      { metric: 'Customer Confidence', value: 'Increased' }
    ],
    relatedIndustries: ['home-services', 'finance', 'insurance'],
    popularServices: ['Brand Building', 'Reputation Management', 'Social Media', 'Content Strategy']
  },
  {
    name: 'Construction',
    slug: 'construction',
    category: 'business',
    icon: 'HardHat',
    tagline: 'Build your company brand',
    description: 'Help construction companies build professional brands that attract quality projects.',
    metaTitle: 'Construction Marketing Agency | Contractor Branding | EDST',
    metaDescription: 'EDST helps construction companies build professional brands that attract projects.',
    keywords: ['construction marketing', 'contractor branding', 'builder marketing'],
    heroHeadline: 'Build a Construction Brand That Commands Respect',
    heroSubheadline: 'Stand out with a professional brand that builds trust and attracts quality projects.',
    challenges: [
      'Building trust for significant investments',
      'Looking professional and established',
      'Standing out from competitors',
      'Showcasing work effectively'
    ],
    solutions: [
      'Professional brand development',
      'Trust and credibility building',
      'Portfolio and case presentation',
      'Reputation building strategies'
    ],
    results: [
      { metric: 'Brand Credibility', value: 'Established' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Client Trust', value: 'Strengthened' },
      { metric: 'Market Reputation', value: 'Enhanced' }
    ],
    relatedIndustries: ['real-estate', 'home-services'],
    popularServices: ['Brand Building', 'Portfolio Marketing', 'Reputation Building', 'Social Media']
  },
  {
    name: 'Mortgage & Lending',
    slug: 'mortgage',
    category: 'business',
    icon: 'Building',
    tagline: 'Build your lending brand',
    description: 'Help mortgage professionals build trusted personal brands that attract clients.',
    metaTitle: 'Mortgage Marketing Agency | Loan Officer Branding | EDST',
    metaDescription: 'EDST helps mortgage professionals build trusted personal brands.',
    keywords: ['mortgage marketing', 'loan officer branding', 'lender marketing'],
    heroHeadline: 'Build a Mortgage Brand Clients Trust',
    heroSubheadline: 'Stand out with a personal brand that builds trust and attracts quality borrowers.',
    challenges: [
      'Building trust in a rate-driven market',
      'Standing out as an individual professional',
      'Looking professional and credible',
      'Building referral relationships'
    ],
    solutions: [
      'Personal brand building',
      'Trust and credibility strategies',
      'Professional presence development',
      'Relationship marketing approaches'
    ],
    results: [
      { metric: 'Personal Brand', value: 'Established' },
      { metric: 'Client Trust', value: 'Strengthened' },
      { metric: 'Professional Image', value: 'Elevated' },
      { metric: 'Referral Potential', value: 'Enhanced' }
    ],
    relatedIndustries: ['real-estate', 'finance', 'insurance'],
    popularServices: ['Personal Branding', 'Content Marketing', 'Social Media', 'Relationship Marketing']
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
