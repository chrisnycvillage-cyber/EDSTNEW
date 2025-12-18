/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST P-SEO CITY DATABASE — HIGH-VALUE MARKETS BY STATE
 * ───────────────────────────────────────────────────────────────────
 * Major US cities organized by state for hierarchical P-SEO.
 * URL structure: /us/[state]/[city]
 * ═══════════════════════════════════════════════════════════════════
 */

export interface City {
  city: string;
  state: string;
  stateAbbr: string;
  stateSlug: string; // Links to parent state page
  slug: string;
  population: number;
  // UNIQUE content per city for SEO differentiation
  marketingHook: string;
  localFact: string;
  keyIndustries: string[];
  creatorScene: string;
  businessVibe: string;
}

export const cities: City[] = [
  // ═══════════════════════════════════════════════════════════════
  // CALIFORNIA (14 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "los-angeles",
    population: 3979576,
    marketingHook: "Where content creators become household names",
    localFact: "90% of major influencer agencies are headquartered in LA",
    keyIndustries: ["Entertainment", "Tech", "Fashion", "Health & Wellness", "Music"],
    creatorScene: "The undisputed capital of content creation. YouTube, TikTok, and Instagram stars are born here daily.",
    businessVibe: "Creative, ambitious, and always camera-ready. Networking happens at every coffee shop and gym."
  },
  {
    city: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "san-francisco",
    population: 873965,
    marketingHook: "The birthplace of tech marketing innovation",
    localFact: "SF startups receive 40% of all US venture capital",
    keyIndustries: ["Tech", "Venture Capital", "Biotech", "AI", "SaaS"],
    creatorScene: "Tech founders, VC thought leaders, and AI influencers shape the conversation here.",
    businessVibe: "Innovative, disruptive, and future-focused. Move fast and break things is still the motto."
  },
  {
    city: "San Diego",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "san-diego",
    population: 1423851,
    marketingHook: "Lifestyle marketing with perfect weather year-round",
    localFact: "San Diego has more craft breweries per capita than any major US city",
    keyIndustries: ["Defense", "Biotech", "Tourism", "Craft Beer", "Tech"],
    creatorScene: "Beach lifestyle, fitness, and military family content dominates. Surf culture influences everything.",
    businessVibe: "Laid-back but ambitious. Business happens between surf sessions and sunset drinks."
  },
  {
    city: "San Jose",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "san-jose",
    population: 1021795,
    marketingHook: "Silicon Valley's backyard for tech creators",
    localFact: "San Jose residents have the highest median income of any major US city",
    keyIndustries: ["Tech", "Hardware", "Semiconductors", "AI", "Clean Energy"],
    creatorScene: "Tech product reviewers, startup founders, and engineering influencers dominate.",
    businessVibe: "Engineering-minded and execution-focused. Build products, not hype."
  },
  {
    city: "Sacramento",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "sacramento",
    population: 513624,
    marketingHook: "California's capital with farm-to-fork culture",
    localFact: "Sacramento is America's Farm-to-Fork Capital with 1.5M acres of farmland nearby",
    keyIndustries: ["Government", "Healthcare", "Agriculture", "Tech", "Clean Energy"],
    creatorScene: "Food and farm content, government insiders, and affordable California living creators.",
    businessVibe: "Policy-driven, food-obsessed, and California without the LA/SF prices."
  },
  {
    city: "Oakland",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "oakland",
    population: 433031,
    marketingHook: "The real Bay Area with authentic culture",
    localFact: "Oakland is one of the most diverse cities in America",
    keyIndustries: ["Tech", "Shipping", "Healthcare", "Food", "Cannabis"],
    creatorScene: "Diverse voices, food justice, and authentic Bay Area culture creators.",
    businessVibe: "Authentic, activist, and community-driven. Oakland keeps it real."
  },
  {
    city: "Long Beach",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "long-beach",
    population: 466742,
    marketingHook: "LA's artsy neighbor with port city energy",
    localFact: "Long Beach has the busiest container port in America",
    keyIndustries: ["Shipping", "Aerospace", "Healthcare", "Tourism", "Oil"],
    creatorScene: "Waterfront lifestyle, art scene, and maritime industry content.",
    businessVibe: "Artsy, diverse, and industrious. Long Beach does its own thing."
  },
  {
    city: "Anaheim",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "anaheim",
    population: 350365,
    marketingHook: "Disneyland's hometown — family entertainment capital",
    localFact: "Disneyland drives $8B+ in annual economic impact to the region",
    keyIndustries: ["Entertainment", "Tourism", "Hospitality", "Tech", "Healthcare"],
    creatorScene: "Disney content creators, family entertainment, and convention coverage.",
    businessVibe: "Magical, family-focused, and convention-powered. Where dreams work."
  },
  {
    city: "Irvine",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "irvine",
    population: 307670,
    marketingHook: "Master-planned tech hub in Orange County",
    localFact: "Irvine is consistently ranked the safest large city in America",
    keyIndustries: ["Tech", "Healthcare", "Finance", "Gaming", "Biotech"],
    creatorScene: "Tech product reviews, Asian American influencers, and OC lifestyle.",
    businessVibe: "Planned, safe, and corporate. Irvine is designed for business success."
  },
  {
    city: "Bakersfield",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "bakersfield",
    population: 403455,
    marketingHook: "California's country music and agriculture capital",
    localFact: "Bakersfield produces more oil than any other California county",
    keyIndustries: ["Agriculture", "Energy", "Logistics", "Healthcare", "Manufacturing"],
    creatorScene: "Country music, agriculture, and Central Valley lifestyle content.",
    businessVibe: "Working class, country proud, and California's breadbasket."
  },
  {
    city: "Riverside",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "riverside",
    population: 314998,
    marketingHook: "Inland Empire's affordable California dream",
    localFact: "UCR is a top research university driving innovation in the IE",
    keyIndustries: ["Logistics", "Education", "Healthcare", "Manufacturing", "Agriculture"],
    creatorScene: "Affordable California content, IE lifestyle, and Citrus heritage.",
    businessVibe: "Growing, affordable, and California without the coast prices."
  },
  {
    city: "Fremont",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "fremont",
    population: 241110,
    marketingHook: "Tesla country and Bay Area affordability",
    localFact: "Tesla's main manufacturing plant produces 600K+ vehicles annually in Fremont",
    keyIndustries: ["Tech", "Manufacturing", "Clean Energy", "Biotech", "Healthcare"],
    creatorScene: "EV enthusiasts, tech manufacturing, and Bay Area diversity content.",
    businessVibe: "Manufacturing meets innovation. Where Tesla dreams become reality."
  },
  {
    city: "Huntington Beach",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "huntington-beach",
    population: 198711,
    marketingHook: "Surf City USA — beach lifestyle content capital",
    localFact: "Huntington Beach hosts the US Open of Surfing annually",
    keyIndustries: ["Tourism", "Surf", "Tech", "Oil", "Healthcare"],
    creatorScene: "Surf culture, beach lifestyle, and outdoor fitness creators dominate.",
    businessVibe: "Laid-back but business-minded. Surf's up and so is the hustle."
  },
  {
    city: "Santa Clarita",
    state: "California",
    stateAbbr: "CA",
    stateSlug: "california",
    slug: "santa-clarita",
    population: 228673,
    marketingHook: "LA suburb with family-focused content",
    localFact: "Santa Clarita is home to Six Flags Magic Mountain and major film studios",
    keyIndustries: ["Entertainment", "Aerospace", "Healthcare", "Tourism", "Tech"],
    creatorScene: "Family content, theme park creators, and LA suburb lifestyle.",
    businessVibe: "Family-friendly, entertainment-connected, and growing fast."
  },

  // ═══════════════════════════════════════════════════════════════
  // TEXAS (10 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "houston",
    population: 2320268,
    marketingHook: "Energy capital meets diverse creator economy",
    localFact: "Houston is the most ethnically diverse city in America",
    keyIndustries: ["Energy", "Healthcare", "Aerospace", "International Trade", "Tech"],
    creatorScene: "Diverse content spanning hip-hop, Latin culture, and entrepreneurship. Screwed-up culture lives on.",
    businessVibe: "Big, bold, and business-first. Everything is bigger here, including the opportunities."
  },
  {
    city: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "dallas",
    population: 1343573,
    marketingHook: "Where corporate meets content creator culture",
    localFact: "Dallas-Fort Worth has more corporate HQs than any metro except NYC",
    keyIndustries: ["Finance", "Tech", "Retail", "Healthcare", "Real Estate"],
    creatorScene: "Lifestyle influencers, real estate content, and corporate thought leaders thrive here.",
    businessVibe: "Polished, professional, and prosperity-focused. Dallas does business in boots and blazers."
  },
  {
    city: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "austin",
    population: 978908,
    marketingHook: "Where tech meets creativity and content explodes",
    localFact: "Austin is the #1 city for podcast creators per capita",
    keyIndustries: ["Tech", "Music", "Film", "Startups", "Gaming"],
    creatorScene: "Tech influencers, podcast hosts, and indie musicians converge. SXSW alumni everywhere.",
    businessVibe: "Weird, entrepreneurial, and anti-corporate. Startups and creators thrive in the same ecosystem."
  },
  {
    city: "San Antonio",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "san-antonio",
    population: 1547253,
    marketingHook: "Military market meets Texas hospitality",
    localFact: "San Antonio has 4 major military bases — largest military presence of any US city",
    keyIndustries: ["Military", "Healthcare", "Tourism", "Cybersecurity", "Bioscience"],
    creatorScene: "Military family content, Tex-Mex food creators, and tourism influencers dominate.",
    businessVibe: "Respectful, family-oriented, and deeply Texan. Business is built on relationships here."
  },
  {
    city: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "fort-worth",
    population: 909585,
    marketingHook: "Where the West begins — authentic Texas marketing",
    localFact: "Fort Worth's Stockyards is the only twice-daily cattle drive in the world",
    keyIndustries: ["Aerospace", "Defense", "Healthcare", "Logistics", "Aviation"],
    creatorScene: "Western lifestyle, aviation enthusiasts, and authentic Texas content creators.",
    businessVibe: "Traditional values, modern opportunity. Fort Worth keeps it real while Dallas shows off."
  },
  {
    city: "El Paso",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "el-paso",
    population: 678815,
    marketingHook: "Bilingual border city with cross-cultural reach",
    localFact: "El Paso is one of the safest large cities in America",
    keyIndustries: ["Military", "Manufacturing", "Healthcare", "Trade", "Call Centers"],
    creatorScene: "Bilingual creators, border culture content, and military family influencers.",
    businessVibe: "Bilingual, bicultural, and border-smart. Access to two markets at once."
  },
  {
    city: "Arlington",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "arlington",
    population: 398854,
    marketingHook: "Sports and entertainment capital of DFW",
    localFact: "Arlington is home to AT&T Stadium and Globe Life Field",
    keyIndustries: ["Entertainment", "Sports", "Aerospace", "Healthcare", "Automotive"],
    creatorScene: "Sports content creators, entertainment events, and DFW lifestyle.",
    businessVibe: "Entertainment-driven, sports-obsessed, and centrally located in DFW."
  },
  {
    city: "Plano",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "plano",
    population: 287677,
    marketingHook: "Corporate headquarters capital of Texas",
    localFact: "Plano has more corporate relocations from California than any Texas city",
    keyIndustries: ["Tech", "Finance", "Healthcare", "Retail", "Telecom"],
    creatorScene: "Corporate thought leaders, tech content, and affluent suburban lifestyle.",
    businessVibe: "Corporate, affluent, and business-savvy. Plano is where companies plant their flags."
  },
  {
    city: "Corpus Christi",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "corpus-christi",
    population: 326586,
    marketingHook: "Coastal Texas with beach and energy vibes",
    localFact: "Corpus Christi is the largest US port for crude oil exports",
    keyIndustries: ["Energy", "Military", "Tourism", "Healthcare", "Shipping"],
    creatorScene: "Beach lifestyle, fishing content, and Gulf Coast living.",
    businessVibe: "Coastal, energy-driven, and laid-back Texan."
  },
  {
    city: "Laredo",
    state: "Texas",
    stateAbbr: "TX",
    stateSlug: "texas",
    slug: "laredo",
    population: 261639,
    marketingHook: "America's busiest land port — international trade hub",
    localFact: "Laredo is the largest inland port in the United States",
    keyIndustries: ["International Trade", "Logistics", "Healthcare", "Retail", "Government"],
    creatorScene: "International trade content, bilingual creators, and border city lifestyle.",
    businessVibe: "Trade-focused, bilingual, and internationally connected."
  },

  // ═══════════════════════════════════════════════════════════════
  // FLORIDA (8 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "miami",
    population: 467963,
    marketingHook: "The gateway to Latin America and luxury lifestyle marketing",
    localFact: "Miami's influencer economy grew 340% since 2020",
    keyIndustries: ["Real Estate", "Luxury", "Crypto", "Hospitality", "Fashion"],
    creatorScene: "Luxury lifestyle, fitness, and Latin crossover content dominates. Bilingual creators have massive reach.",
    businessVibe: "International, flashy, and entrepreneurial. The city runs on deals, boats, and bold moves."
  },
  {
    city: "Tampa",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "tampa",
    population: 399700,
    marketingHook: "Florida's business coast creator hub",
    localFact: "Tampa Bay is the fastest-growing tech hub in Florida",
    keyIndustries: ["Finance", "Tech", "Healthcare", "Defense", "Tourism"],
    creatorScene: "Lifestyle influencers, fitness creators, and business coaches are everywhere here.",
    businessVibe: "Growing, optimistic, and tax-friendly. The anti-Miami for serious entrepreneurs."
  },
  {
    city: "Orlando",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "orlando",
    population: 307573,
    marketingHook: "Theme park capital meets creator economy",
    localFact: "Orlando is the most-visited city in America with 75M+ annual visitors",
    keyIndustries: ["Tourism", "Hospitality", "Tech", "Simulation", "Entertainment"],
    creatorScene: "Theme park content, family travel influencers, and entertainment creators thrive here.",
    businessVibe: "Magical and optimistic. If you can create happiness, you can build a brand."
  },
  {
    city: "Jacksonville",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "jacksonville",
    population: 911507,
    marketingHook: "Florida's largest city with untapped potential",
    localFact: "Jacksonville is the largest city by land area in the continental US",
    keyIndustries: ["Logistics", "Finance", "Healthcare", "Military", "Insurance"],
    creatorScene: "Military family content, beach lifestyle, and emerging creator scene with room to grow.",
    businessVibe: "Underrated and ready. Lower competition means bigger opportunities."
  },
  {
    city: "St. Petersburg",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "st-petersburg",
    population: 265351,
    marketingHook: "Florida's arts coast with creative community",
    localFact: "St. Pete has the largest collection of Salvador Dalí works outside Spain",
    keyIndustries: ["Tourism", "Healthcare", "Finance", "Creative", "Tech"],
    creatorScene: "Arts and culture content, waterfront lifestyle, and creative community.",
    businessVibe: "Artsy, sunny, and growing fast. St. Pete is Tampa's cooler sibling."
  },
  {
    city: "Fort Lauderdale",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "fort-lauderdale",
    population: 182760,
    marketingHook: "Yacht capital with luxury lifestyle content",
    localFact: "Fort Lauderdale has more boats per capita than anywhere else in the US",
    keyIndustries: ["Tourism", "Marine", "Healthcare", "Tech", "Hospitality"],
    creatorScene: "Yacht lifestyle, beach content, and luxury living influencers.",
    businessVibe: "Upscale, nautical, and tourism-driven. Fort Lauderdale does luxury on the water."
  },
  {
    city: "Cape Coral",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "cape-coral",
    population: 194016,
    marketingHook: "Waterfront living with canal lifestyle",
    localFact: "Cape Coral has more canals than any other city in the world",
    keyIndustries: ["Real Estate", "Healthcare", "Tourism", "Retail", "Construction"],
    creatorScene: "Waterfront lifestyle, retirement community content, and Florida living.",
    businessVibe: "Growing, waterfront-focused, and attracting new residents daily."
  },
  {
    city: "Tallahassee",
    state: "Florida",
    stateAbbr: "FL",
    stateSlug: "florida",
    slug: "tallahassee",
    population: 196169,
    marketingHook: "Florida's capital with college town energy",
    localFact: "Tallahassee is home to both FSU and FAMU — massive college market",
    keyIndustries: ["Government", "Education", "Healthcare", "Tech", "Research"],
    creatorScene: "College football superfans, government insiders, and student content creators.",
    businessVibe: "Political, academic, and Seminole proud. Capital city influence with college energy."
  },

  // ═══════════════════════════════════════════════════════════════
  // NEW YORK (4 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "New York",
    state: "New York",
    stateAbbr: "NY",
    stateSlug: "new-york",
    slug: "new-york-city",
    population: 8336817,
    marketingHook: "Dominate the world's most competitive market",
    localFact: "Home to 60,000+ influencers and the largest media industry in the world",
    keyIndustries: ["Finance", "Media", "Fashion", "Tech", "Entertainment"],
    creatorScene: "The epicenter of fashion influencers, finance creators, and media personalities. NYC creators set global trends.",
    businessVibe: "Fast-paced, high-stakes, and results-driven. If you can make it here, you can make it anywhere."
  },
  {
    city: "Buffalo",
    state: "New York",
    stateAbbr: "NY",
    stateSlug: "new-york",
    slug: "buffalo",
    population: 278349,
    marketingHook: "Resurgent Rust Belt city with authentic character",
    localFact: "Buffalo has one of the fastest-growing tech scenes in the Northeast",
    keyIndustries: ["Healthcare", "Education", "Manufacturing", "Tech", "Finance"],
    creatorScene: "Bills Mafia superfans, food creators (hello, wings!), and Rust Belt revival stories.",
    businessVibe: "Resilient, loyal, and making a comeback. Buffalo believes in itself."
  },
  {
    city: "Rochester",
    state: "New York",
    stateAbbr: "NY",
    stateSlug: "new-york",
    slug: "rochester",
    population: 211328,
    marketingHook: "Innovation heritage meets modern tech",
    localFact: "Rochester was once the tech capital of America — Kodak and Xerox started here",
    keyIndustries: ["Healthcare", "Education", "Tech", "Manufacturing", "Optics"],
    creatorScene: "Tech innovation content, education, and Upstate NY lifestyle creators.",
    businessVibe: "Innovation in its DNA. Rochester is reinventing itself for the digital age."
  },
  {
    city: "Albany",
    state: "New York",
    stateAbbr: "NY",
    stateSlug: "new-york",
    slug: "albany",
    population: 99224,
    marketingHook: "New York's capital with government influence",
    localFact: "Albany is one of the oldest cities in America and the state capital",
    keyIndustries: ["Government", "Healthcare", "Education", "Tech", "Finance"],
    creatorScene: "Political content, state government influence, and Capital Region lifestyle.",
    businessVibe: "Political, historic, and centrally connected to NYS power."
  },

  // ═══════════════════════════════════════════════════════════════
  // ILLINOIS (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    stateSlug: "illinois",
    slug: "chicago",
    population: 2693976,
    marketingHook: "The Midwest's marketing and media powerhouse",
    localFact: "Chicago has the 3rd largest advertising industry in the US",
    keyIndustries: ["Finance", "Advertising", "Food & Beverage", "Manufacturing", "Tech"],
    creatorScene: "Food creators, comedy talent, and urban lifestyle influencers dominate. Second City alumni go viral.",
    businessVibe: "No-nonsense, hardworking, and loyal. Chicagoans support their own fiercely."
  },
  {
    city: "Aurora",
    state: "Illinois",
    stateAbbr: "IL",
    stateSlug: "illinois",
    slug: "aurora",
    population: 180542,
    marketingHook: "Chicago suburb with diverse community",
    localFact: "Aurora is the second-largest city in Illinois and extremely diverse",
    keyIndustries: ["Manufacturing", "Healthcare", "Retail", "Logistics", "Finance"],
    creatorScene: "Diverse suburban content, Chicago-adjacent lifestyle, and family-focused creators.",
    businessVibe: "Diverse, growing, and Chicago-connected. Aurora offers opportunity without city prices."
  },

  // ═══════════════════════════════════════════════════════════════
  // PENNSYLVANIA (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    stateSlug: "pennsylvania",
    slug: "philadelphia",
    population: 1584064,
    marketingHook: "Authentic, gritty marketing that resonates",
    localFact: "Philly has the fastest-growing food influencer scene on the East Coast",
    keyIndustries: ["Healthcare", "Education", "Pharmaceuticals", "Finance", "Food"],
    creatorScene: "Food creators, sports content, and authentic urban lifestyle influencers thrive here.",
    businessVibe: "Real, direct, and no-frills. Philly doesn't do fake — and neither does its marketing."
  },
  {
    city: "Pittsburgh",
    state: "Pennsylvania",
    stateAbbr: "PA",
    stateSlug: "pennsylvania",
    slug: "pittsburgh",
    population: 302971,
    marketingHook: "Steel City reinvented as a tech and robotics hub",
    localFact: "Pittsburgh has more bridges than any city in the world (446)",
    keyIndustries: ["Tech", "Robotics", "Healthcare", "Education", "Energy"],
    creatorScene: "Robotics innovators, tech educators, and Yinzer pride content creators.",
    businessVibe: "Blue-collar roots with white-collar innovation. Pittsburgh works hard and smart."
  },
  {
    city: "Allentown",
    state: "Pennsylvania",
    stateAbbr: "PA",
    stateSlug: "pennsylvania",
    slug: "allentown",
    population: 126092,
    marketingHook: "Lehigh Valley's growing business hub",
    localFact: "Allentown is the fastest-growing city in Pennsylvania",
    keyIndustries: ["Healthcare", "Manufacturing", "Distribution", "Tech", "Retail"],
    creatorScene: "Lehigh Valley lifestyle, manufacturing innovation, and regional pride content.",
    businessVibe: "Growing, affordable, and strategically located between NYC and Philly."
  },

  // ═══════════════════════════════════════════════════════════════
  // ARIZONA (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    stateSlug: "arizona",
    slug: "phoenix",
    population: 1680992,
    marketingHook: "The Southwest's fastest-growing creator market",
    localFact: "Phoenix is America's fastest-growing major city for 5 years running",
    keyIndustries: ["Real Estate", "Tech", "Healthcare", "Finance", "Logistics"],
    creatorScene: "Real estate influencers, desert lifestyle content, and relocation guides are huge here.",
    businessVibe: "Growth-minded and opportunity-focused. Everyone moved here for a reason."
  },
  {
    city: "Tucson",
    state: "Arizona",
    stateAbbr: "AZ",
    stateSlug: "arizona",
    slug: "tucson",
    population: 548073,
    marketingHook: "Desert beauty meets university town creativity",
    localFact: "Tucson is a UNESCO City of Gastronomy — the first in the US",
    keyIndustries: ["Aerospace", "Defense", "Education", "Healthcare", "Mining"],
    creatorScene: "Food creators, university content, and desert lifestyle influencers.",
    businessVibe: "Laid-back, artistic, and culturally conscious. Tucson moves at its own pace."
  },
  {
    city: "Scottsdale",
    state: "Arizona",
    stateAbbr: "AZ",
    stateSlug: "arizona",
    slug: "scottsdale",
    population: 258069,
    marketingHook: "Luxury desert lifestyle and wellness destination",
    localFact: "Scottsdale has more spas per capita than any US city",
    keyIndustries: ["Tourism", "Healthcare", "Real Estate", "Tech", "Hospitality"],
    creatorScene: "Luxury lifestyle, wellness/spa content, and desert aesthetics creators.",
    businessVibe: "Upscale, health-conscious, and retirement-wealthy. Scottsdale does luxury."
  },

  // ═══════════════════════════════════════════════════════════════
  // OHIO (4 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Columbus",
    state: "Ohio",
    stateAbbr: "OH",
    stateSlug: "ohio",
    slug: "columbus",
    population: 905748,
    marketingHook: "Test market capital — if it works here, it works anywhere",
    localFact: "Columbus is America's #1 test market for new products and campaigns",
    keyIndustries: ["Retail", "Insurance", "Education", "Healthcare", "Fashion"],
    creatorScene: "Fashion influencers (Limited Brands HQ), student creators, and lifestyle content dominate.",
    businessVibe: "Practical, diverse, and representative. The most 'average' American city — and that's powerful."
  },
  {
    city: "Cleveland",
    state: "Ohio",
    stateAbbr: "OH",
    stateSlug: "ohio",
    slug: "cleveland",
    population: 381009,
    marketingHook: "The comeback city with championship mentality",
    localFact: "Cleveland is home to the Rock and Roll Hall of Fame",
    keyIndustries: ["Healthcare", "Manufacturing", "Finance", "Tech", "Sports"],
    creatorScene: "Sports superfans, healthcare innovators, and Rust Belt revival storytellers.",
    businessVibe: "Tough, loyal, and forever underestimated. Cleveland proves doubters wrong."
  },
  {
    city: "Cincinnati",
    state: "Ohio",
    stateAbbr: "OH",
    stateSlug: "ohio",
    slug: "cincinnati",
    population: 309317,
    marketingHook: "Consumer goods capital where brands are born",
    localFact: "P&G, Kroger, and Macy's are all headquartered in Cincinnati",
    keyIndustries: ["Consumer Goods", "Retail", "Healthcare", "Finance", "Manufacturing"],
    creatorScene: "Brand marketing insiders, CPG thought leaders, and Midwest lifestyle creators.",
    businessVibe: "Brand-savvy, consumer-focused, and surprisingly influential. Big brands start here."
  },
  {
    city: "Toledo",
    state: "Ohio",
    stateAbbr: "OH",
    stateSlug: "ohio",
    slug: "toledo",
    population: 270871,
    marketingHook: "Glass city with manufacturing heritage",
    localFact: "Toledo was once known as the Glass Capital of the World",
    keyIndustries: ["Manufacturing", "Healthcare", "Automotive", "Solar", "Logistics"],
    creatorScene: "Manufacturing innovation, Great Lakes lifestyle, and Rust Belt authenticity.",
    businessVibe: "Industrial roots, renewable future. Toledo is reinventing its identity."
  },

  // ═══════════════════════════════════════════════════════════════
  // GEORGIA (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    stateSlug: "georgia",
    slug: "atlanta",
    population: 498715,
    marketingHook: "The entertainment capital of the South",
    localFact: "Atlanta produces more hip-hop content than any other city globally",
    keyIndustries: ["Music", "Film", "Tech", "Healthcare", "Logistics"],
    creatorScene: "Hip-hop artists, R&B creators, and Black excellence content thrives here. Major label presence.",
    businessVibe: "Creative, connected, and culturally influential. The Hollywood of the South with better vibes."
  },
  {
    city: "Savannah",
    state: "Georgia",
    stateAbbr: "GA",
    stateSlug: "georgia",
    slug: "savannah",
    population: 147780,
    marketingHook: "Historic charm meets modern creativity",
    localFact: "Savannah has one of the largest historic districts in the US and SCAD presence",
    keyIndustries: ["Tourism", "Port/Logistics", "Manufacturing", "Creative", "Healthcare"],
    creatorScene: "Historic lifestyle content, SCAD creative community, and Southern charm storytelling.",
    businessVibe: "Charming, artistic, and tourism-driven. Savannah captivates visitors and creators alike."
  },

  // ═══════════════════════════════════════════════════════════════
  // NORTH CAROLINA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    slug: "charlotte",
    population: 874579,
    marketingHook: "Banking hub with Southern creator charm",
    localFact: "Charlotte is the 2nd largest banking center in the US after NYC",
    keyIndustries: ["Finance", "Banking", "Tech", "Energy", "Healthcare"],
    creatorScene: "Finance influencers, corporate thought leaders, and Southern lifestyle creators lead here.",
    businessVibe: "Professional, ambitious, and Southern polite. Big city opportunity with Southern hospitality."
  },
  {
    city: "Raleigh",
    state: "North Carolina",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    slug: "raleigh",
    population: 467665,
    marketingHook: "Research Triangle innovation meets creator growth",
    localFact: "Raleigh-Durham has the highest concentration of PhDs in America",
    keyIndustries: ["Tech", "Biotech", "Education", "Research", "Healthcare"],
    creatorScene: "Tech educators, research communicators, and triangle lifestyle creators are growing fast.",
    businessVibe: "Smart, educated, and innovation-focused. Startups launch from research labs here."
  },
  {
    city: "Durham",
    state: "North Carolina",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    slug: "durham",
    population: 283506,
    marketingHook: "Research Triangle innovation with Bull City grit",
    localFact: "Duke University drives $1B+ annually into Durham's economy",
    keyIndustries: ["Tech", "Biotech", "Education", "Healthcare", "Research"],
    creatorScene: "Tech innovators, biotech thought leaders, and triangle lifestyle creators.",
    businessVibe: "Smart, innovative, and on the rise. Duke energy meets startup hustle."
  },
  {
    city: "Greensboro",
    state: "North Carolina",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    slug: "greensboro",
    population: 299035,
    marketingHook: "The Triad's growing business and sports hub",
    localFact: "Greensboro is the tournament capital of the ACC",
    keyIndustries: ["Manufacturing", "Finance", "Transportation", "Healthcare", "Education"],
    creatorScene: "College sports content, furniture industry, and Carolina lifestyle creators.",
    businessVibe: "Business-friendly, basketball-obsessed, and Carolina proud."
  },
  {
    city: "Winston-Salem",
    state: "North Carolina",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    slug: "winston-salem",
    population: 249545,
    marketingHook: "Arts, innovation, and Wake Forest excellence",
    localFact: "Winston-Salem has more artists per capita than most US cities",
    keyIndustries: ["Healthcare", "Finance", "Education", "Arts", "Manufacturing"],
    creatorScene: "Arts community, healthcare innovation, and Carolina lifestyle content.",
    businessVibe: "Artsy, innovative, and historically significant. Camel City is creating again."
  },

  // ═══════════════════════════════════════════════════════════════
  // MICHIGAN (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Detroit",
    state: "Michigan",
    stateAbbr: "MI",
    stateSlug: "michigan",
    slug: "detroit",
    population: 639111,
    marketingHook: "The comeback city for authentic brand stories",
    localFact: "Detroit's tech industry has grown 400% since 2010",
    keyIndustries: ["Automotive", "Tech", "Music", "Manufacturing", "Healthcare"],
    creatorScene: "Hip-hop legends, automotive enthusiasts, and comeback story creators inspire here.",
    businessVibe: "Resilient, authentic, and rebuilding. Detroit hustle is unmatched."
  },
  {
    city: "Grand Rapids",
    state: "Michigan",
    stateAbbr: "MI",
    stateSlug: "michigan",
    slug: "grand-rapids",
    population: 198917,
    marketingHook: "Beer City USA with maker movement energy",
    localFact: "Grand Rapids was voted Beer City USA 7 times",
    keyIndustries: ["Furniture", "Healthcare", "Craft Beer", "Manufacturing", "Food Processing"],
    creatorScene: "Craft beer creators, maker movement content, and Midwest innovation stories.",
    businessVibe: "Craft-obsessed, community-focused, and Dutch work ethic. Quality over quantity."
  },
  {
    city: "Ann Arbor",
    state: "Michigan",
    stateAbbr: "MI",
    stateSlug: "michigan",
    slug: "ann-arbor",
    population: 123851,
    marketingHook: "University of Michigan brain power",
    localFact: "Ann Arbor is consistently ranked as one of the most educated cities in America",
    keyIndustries: ["Education", "Tech", "Healthcare", "Research", "Automotive"],
    creatorScene: "Academic thought leaders, Big Ten sports, and innovation content.",
    businessVibe: "Intellectual, innovative, and Go Blue proud. Ann Arbor breeds success."
  },

  // ═══════════════════════════════════════════════════════════════
  // TENNESSEE (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    stateSlug: "tennessee",
    slug: "nashville",
    population: 670820,
    marketingHook: "Where music artists build empires",
    localFact: "Nashville's music industry generates $10B+ annually",
    keyIndustries: ["Music", "Healthcare", "Tourism", "Tech", "Publishing"],
    creatorScene: "Country, pop, and Americana artists dominate. Songwriters and session musicians everywhere.",
    businessVibe: "Creative yet business-savvy. Artists here understand the hustle and the craft."
  },
  {
    city: "Memphis",
    state: "Tennessee",
    stateAbbr: "TN",
    stateSlug: "tennessee",
    slug: "memphis",
    population: 650100,
    marketingHook: "Birthplace of rock and roll, home of authentic stories",
    localFact: "FedEx ships 99% of all US overnight packages through Memphis",
    keyIndustries: ["Logistics", "Music", "Healthcare", "Manufacturing", "Food"],
    creatorScene: "Music history content, BBQ food creators, and authentic Southern storytellers.",
    businessVibe: "Soulful, gritty, and real. Memphis doesn't pretend — and that's its superpower."
  },
  {
    city: "Knoxville",
    state: "Tennessee",
    stateAbbr: "TN",
    stateSlug: "tennessee",
    slug: "knoxville",
    population: 190740,
    marketingHook: "Gateway to the Smokies with Vol nation energy",
    localFact: "Great Smoky Mountains is the most visited national park in America",
    keyIndustries: ["Energy", "Education", "Healthcare", "Tourism", "Manufacturing"],
    creatorScene: "Outdoor adventure, SEC sports, and Appalachian lifestyle creators.",
    businessVibe: "Rocky Top pride and mountain hospitality. Knoxville punches up."
  },

  // ═══════════════════════════════════════════════════════════════
  // WASHINGTON (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    stateSlug: "washington",
    slug: "seattle",
    population: 737015,
    marketingHook: "Where tech giants and indie creators coexist",
    localFact: "Seattle has more software developers per capita than any US city",
    keyIndustries: ["Tech", "E-commerce", "Gaming", "Coffee", "Aerospace"],
    creatorScene: "Gaming streamers, tech reviewers, and Pacific Northwest lifestyle creators dominate.",
    businessVibe: "Innovative but laid-back. Flannel and billion-dollar valuations go together here."
  },
  {
    city: "Spokane",
    state: "Washington",
    stateAbbr: "WA",
    stateSlug: "washington",
    slug: "spokane",
    population: 228989,
    marketingHook: "Pacific Northwest outdoor lifestyle at affordable prices",
    localFact: "Spokane is the largest city between Seattle and Minneapolis",
    keyIndustries: ["Healthcare", "Education", "Agriculture", "Manufacturing", "Tech"],
    creatorScene: "Outdoor adventure creators and affordable PNW lifestyle content.",
    businessVibe: "Western Washington opportunity without Western Washington prices."
  },
  {
    city: "Tacoma",
    state: "Washington",
    stateAbbr: "WA",
    stateSlug: "washington",
    slug: "tacoma",
    population: 219346,
    marketingHook: "Seattle talent without Seattle prices",
    localFact: "Tacoma's Museum of Glass is world-renowned for glass art",
    keyIndustries: ["Military", "Shipping", "Healthcare", "Manufacturing", "Tech"],
    creatorScene: "Pacific Northwest lifestyle, military content, and arts scene creators.",
    businessVibe: "Gritty, creative, and finally having its moment. Tacoma is underrated."
  },

  // ═══════════════════════════════════════════════════════════════
  // MASSACHUSETTS (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    stateSlug: "massachusetts",
    slug: "boston",
    population: 692600,
    marketingHook: "Where education meets innovation marketing",
    localFact: "Boston has more colleges per capita than any US city",
    keyIndustries: ["Education", "Biotech", "Healthcare", "Finance", "Tech"],
    creatorScene: "EdTech influencers, biotech thought leaders, and sports fanatics create passionate content.",
    businessVibe: "Intellectual, driven, and deeply loyal. Smart people building smart companies."
  },
  {
    city: "Worcester",
    state: "Massachusetts",
    stateAbbr: "MA",
    stateSlug: "massachusetts",
    slug: "worcester",
    population: 206518,
    marketingHook: "Heart of Massachusetts with growing innovation",
    localFact: "Worcester has 9 colleges and universities in its metro area",
    keyIndustries: ["Healthcare", "Education", "Biotech", "Manufacturing", "Tech"],
    creatorScene: "Academic content, healthcare innovation, and Central MA lifestyle.",
    businessVibe: "Academic, healthcare-driven, and central to New England."
  },
  {
    city: "Cambridge",
    state: "Massachusetts",
    stateAbbr: "MA",
    stateSlug: "massachusetts",
    slug: "cambridge",
    population: 118927,
    marketingHook: "Harvard, MIT, and biotech powerhouse",
    localFact: "Cambridge has more Nobel laureates per capita than anywhere on Earth",
    keyIndustries: ["Biotech", "Education", "Tech", "Pharma", "Research"],
    creatorScene: "World's leading academics, biotech innovators, and student entrepreneurs.",
    businessVibe: "The intellectual capital of America. Ideas that change the world start here."
  },

  // ═══════════════════════════════════════════════════════════════
  // COLORADO (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    stateSlug: "colorado",
    slug: "denver",
    population: 727211,
    marketingHook: "The outdoor lifestyle and wellness content capital",
    localFact: "Denver is the #1 city for fitness and outdoor influencers",
    keyIndustries: ["Cannabis", "Outdoor Recreation", "Tech", "Healthcare", "Aerospace"],
    creatorScene: "Fitness influencers, outdoor adventurers, and cannabis content creators lead the scene.",
    businessVibe: "Active, health-conscious, and entrepreneurial. Business meetings happen on hiking trails."
  },
  {
    city: "Colorado Springs",
    state: "Colorado",
    stateAbbr: "CO",
    stateSlug: "colorado",
    slug: "colorado-springs",
    population: 478961,
    marketingHook: "Olympic city with military and outdoor culture",
    localFact: "Colorado Springs is home to the US Olympic Training Center",
    keyIndustries: ["Military", "Tech", "Healthcare", "Tourism", "Aerospace"],
    creatorScene: "Olympic athletes, military family content, and outdoor adventure creators.",
    businessVibe: "Athletic, military-connected, and mountain-adjacent. Peak performance energy."
  },
  {
    city: "Aurora",
    state: "Colorado",
    stateAbbr: "CO",
    stateSlug: "colorado",
    slug: "aurora-co",
    population: 386261,
    marketingHook: "Denver metro diversity hub",
    localFact: "Aurora is one of the most diverse cities in the Mountain West",
    keyIndustries: ["Healthcare", "Aerospace", "Tech", "Military", "Logistics"],
    creatorScene: "Diverse community content, Denver metro lifestyle, and healthcare focus.",
    businessVibe: "Diverse, growing, and Denver-connected. Aurora offers metro opportunity."
  },

  // ═══════════════════════════════════════════════════════════════
  // NEVADA (3 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    stateSlug: "nevada",
    slug: "las-vegas",
    population: 651319,
    marketingHook: "Entertainment marketing that never sleeps",
    localFact: "Vegas hosts 40M+ visitors annually — endless content opportunities",
    keyIndustries: ["Entertainment", "Hospitality", "Conventions", "Sports", "Real Estate"],
    creatorScene: "Nightlife, entertainment, and lifestyle creators thrive. Residencies create influencer moments.",
    businessVibe: "24/7 hustle with a showbiz flair. Every day is an event worth capturing."
  },
  {
    city: "Henderson",
    state: "Nevada",
    stateAbbr: "NV",
    stateSlug: "nevada",
    slug: "henderson",
    population: 320189,
    marketingHook: "Vegas adjacent with family-friendly growth",
    localFact: "Henderson is consistently ranked as one of the safest cities in America",
    keyIndustries: ["Healthcare", "Tech", "Real Estate", "Retail", "Entertainment"],
    creatorScene: "Family lifestyle, Vegas-adjacent content, and suburban Nevada living.",
    businessVibe: "Safe, growing, and Vegas-connected. Henderson is where families settle."
  },
  {
    city: "Reno",
    state: "Nevada",
    stateAbbr: "NV",
    stateSlug: "nevada",
    slug: "reno",
    population: 264165,
    marketingHook: "Tahoe access with no state income tax",
    localFact: "Tesla, Google, and Apple have all built major facilities near Reno",
    keyIndustries: ["Tech", "Gaming", "Logistics", "Tourism", "Manufacturing"],
    creatorScene: "Outdoor adventure, casino culture, and tax refugee lifestyle content.",
    businessVibe: "Growing, tax-friendly, and adventure-adjacent. Reno is Nevada's secret."
  },

  // ═══════════════════════════════════════════════════════════════
  // OREGON (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    stateSlug: "oregon",
    slug: "portland",
    population: 654741,
    marketingHook: "Authentic, indie marketing that stands out",
    localFact: "Portland has more independent businesses per capita than any US city",
    keyIndustries: ["Outdoor Gear", "Craft Beer", "Tech", "Creative Services", "Sustainability"],
    creatorScene: "Indie creators, sustainable living influencers, and craft enthusiasts lead the conversation.",
    businessVibe: "Fiercely independent and authenticity-obsessed. Keep Portland weird applies to business too."
  },
  {
    city: "Eugene",
    state: "Oregon",
    stateAbbr: "OR",
    stateSlug: "oregon",
    slug: "eugene",
    population: 176654,
    marketingHook: "Track Town USA with outdoor culture",
    localFact: "Eugene is home to Nike's founding and the University of Oregon",
    keyIndustries: ["Education", "Tech", "Athletics", "Healthcare", "Manufacturing"],
    creatorScene: "Running and athletics content, university creators, and Pacific Northwest lifestyle.",
    businessVibe: "Athletic, academic, and outdoorsy. Eugene breeds champions and entrepreneurs."
  },

  // ═══════════════════════════════════════════════════════════════
  // INDIANA (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    stateSlug: "indiana",
    slug: "indianapolis",
    population: 867125,
    marketingHook: "Sports marketing capital of the Midwest",
    localFact: "Indianapolis hosts more major sporting events than any US city",
    keyIndustries: ["Sports", "Motorsports", "Pharmaceuticals", "Healthcare", "Logistics"],
    creatorScene: "Sports content, racing enthusiasts, and heartland lifestyle creators thrive here.",
    businessVibe: "Friendly, sports-obsessed, and surprisingly sophisticated. The crossroads of America."
  },
  {
    city: "Fort Wayne",
    state: "Indiana",
    stateAbbr: "IN",
    stateSlug: "indiana",
    slug: "fort-wayne",
    population: 270402,
    marketingHook: "Northeast Indiana's growing hub",
    localFact: "Fort Wayne has one of the lowest costs of living of any metro area",
    keyIndustries: ["Manufacturing", "Healthcare", "Defense", "Insurance", "Retail"],
    creatorScene: "Affordable Midwest living, manufacturing pride, and family-focused content.",
    businessVibe: "Affordable, hardworking, and community-oriented. Fort Wayne is steady growth."
  },

  // ═══════════════════════════════════════════════════════════════
  // MISSOURI (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Kansas City",
    state: "Missouri",
    stateAbbr: "MO",
    stateSlug: "missouri",
    slug: "kansas-city",
    population: 508090,
    marketingHook: "BBQ, jazz, and heartland creative energy",
    localFact: "Kansas City has more BBQ restaurants per capita than any city and more fountains than Rome",
    keyIndustries: ["Agriculture", "Logistics", "Tech", "Healthcare", "Finance"],
    creatorScene: "BBQ content creators, jazz culture, and Midwest lifestyle influencers.",
    businessVibe: "Friendly, creative, and cost-effective. Big city culture, small city costs."
  },
  {
    city: "St. Louis",
    state: "Missouri",
    stateAbbr: "MO",
    stateSlug: "missouri",
    slug: "st-louis",
    population: 301578,
    marketingHook: "Gateway to the West with startup spirit",
    localFact: "St. Louis has more free attractions than any US city",
    keyIndustries: ["Healthcare", "Biotech", "Finance", "Agriculture", "Manufacturing"],
    creatorScene: "Startup founders, local pride content, and Midwest innovation storytellers.",
    businessVibe: "Scrappy, innovative, and proving the coasts wrong. Gateway energy is real."
  },

  // ═══════════════════════════════════════════════════════════════
  // MINNESOTA (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Minneapolis",
    state: "Minnesota",
    stateAbbr: "MN",
    stateSlug: "minnesota",
    slug: "minneapolis",
    population: 429954,
    marketingHook: "Creative Midwest hub punching above its weight",
    localFact: "Minneapolis has more theater seats per capita than any city except NYC",
    keyIndustries: ["Retail", "Healthcare", "Finance", "Food", "Creative"],
    creatorScene: "Creative content, corporate thought leadership, and Midwest authenticity define the scene.",
    businessVibe: "Nice, genuine, and quietly ambitious. Don't mistake Midwest nice for weak."
  },
  {
    city: "Saint Paul",
    state: "Minnesota",
    stateAbbr: "MN",
    stateSlug: "minnesota",
    slug: "saint-paul",
    population: 311527,
    marketingHook: "Minnesota's capital with historic charm",
    localFact: "Saint Paul has the most Victorian architecture per capita in the US",
    keyIndustries: ["Government", "Healthcare", "Education", "Finance", "Manufacturing"],
    creatorScene: "Government and policy content, historic lifestyle, and Twin Cities culture.",
    businessVibe: "Historic, government-connected, and Minneapolis's distinguished twin."
  },

  // ═══════════════════════════════════════════════════════════════
  // WISCONSIN (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Milwaukee",
    state: "Wisconsin",
    stateAbbr: "WI",
    stateSlug: "wisconsin",
    slug: "milwaukee",
    population: 577222,
    marketingHook: "Craft brewing capital with Midwest maker spirit",
    localFact: "Milwaukee produces more beer than any other US city",
    keyIndustries: ["Beer", "Manufacturing", "Healthcare", "Financial Services", "Water Tech"],
    creatorScene: "Craft beer content, maker culture, and Midwest authenticity dominate.",
    businessVibe: "Hardworking, unpretentious, and craft-obsessed. Quality over flash."
  },
  {
    city: "Madison",
    state: "Wisconsin",
    stateAbbr: "WI",
    stateSlug: "wisconsin",
    slug: "madison",
    population: 269840,
    marketingHook: "Progressive college town with biotech strength",
    localFact: "UW-Madison drives $15B+ in economic impact annually",
    keyIndustries: ["Biotech", "Education", "Healthcare", "Tech", "Government"],
    creatorScene: "Biotech innovators, progressive voices, and Badger superfan content.",
    businessVibe: "Smart, progressive, and Midwestern genuine. On, Wisconsin energy is real."
  },

  // ═══════════════════════════════════════════════════════════════
  // LOUISIANA (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "New Orleans",
    state: "Louisiana",
    stateAbbr: "LA",
    stateSlug: "louisiana",
    slug: "new-orleans",
    population: 391006,
    marketingHook: "Where culture, food, and music create unforgettable content",
    localFact: "New Orleans hosts 18M+ tourists annually — endless content moments",
    keyIndustries: ["Tourism", "Music", "Food", "Energy", "Film"],
    creatorScene: "Food creators, jazz and brass band content, and culture/travel influencers dominate.",
    businessVibe: "Celebratory, resilient, and unlike anywhere else. NOLA does it different."
  },
  {
    city: "Baton Rouge",
    state: "Louisiana",
    stateAbbr: "LA",
    stateSlug: "louisiana",
    slug: "baton-rouge",
    population: 227470,
    marketingHook: "Louisiana's capital with SEC energy",
    localFact: "LSU's Death Valley is the loudest stadium in college football",
    keyIndustries: ["Energy", "Petrochemical", "Education", "Healthcare", "Government"],
    creatorScene: "SEC sports content, Southern food creators, and LSU superfans dominate.",
    businessVibe: "Passionate, loud, and fiercely loyal. Geaux Tigers is a way of life."
  },

  // ═══════════════════════════════════════════════════════════════
  // VIRGINIA (4 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Virginia Beach",
    state: "Virginia",
    stateAbbr: "VA",
    stateSlug: "virginia",
    slug: "virginia-beach",
    population: 459470,
    marketingHook: "Military families and beach lifestyle content",
    localFact: "Virginia Beach is home to the largest naval base in the world",
    keyIndustries: ["Military", "Tourism", "Healthcare", "Defense", "Agriculture"],
    creatorScene: "Military spouse influencers, beach content, and family lifestyle creators.",
    businessVibe: "Military precision meets beach relaxation. Disciplined yet laid-back."
  },
  {
    city: "Richmond",
    state: "Virginia",
    stateAbbr: "VA",
    stateSlug: "virginia",
    slug: "richmond",
    population: 226610,
    marketingHook: "Historic capital with modern creative energy",
    localFact: "Richmond has more craft breweries per capita than any East Coast city",
    keyIndustries: ["Finance", "Healthcare", "Law", "Manufacturing", "Craft Beer"],
    creatorScene: "Craft beer content, history creators, and East Coast lifestyle influencers.",
    businessVibe: "Historic, cultured, and quietly booming. Richmond is having a moment."
  },
  {
    city: "Norfolk",
    state: "Virginia",
    stateAbbr: "VA",
    stateSlug: "virginia",
    slug: "norfolk",
    population: 244703,
    marketingHook: "Naval hub with maritime heritage",
    localFact: "Norfolk is home to the world's largest naval station",
    keyIndustries: ["Military", "Shipping", "Healthcare", "Tourism", "Education"],
    creatorScene: "Military lifestyle, naval heritage, and Hampton Roads living content.",
    businessVibe: "Naval proud, maritime-connected, and defense-driven."
  },
  {
    city: "Chesapeake",
    state: "Virginia",
    stateAbbr: "VA",
    stateSlug: "virginia",
    slug: "chesapeake",
    population: 249422,
    marketingHook: "Hampton Roads growth corridor for families",
    localFact: "Chesapeake is one of the fastest-growing cities in Virginia",
    keyIndustries: ["Military", "Healthcare", "Retail", "Logistics", "Agriculture"],
    creatorScene: "Military family lifestyle, Hampton Roads living, and family content.",
    businessVibe: "Family-oriented, military-connected, and steady growth."
  },

  // ═══════════════════════════════════════════════════════════════
  // KENTUCKY (2 cities)
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Louisville",
    state: "Kentucky",
    stateAbbr: "KY",
    stateSlug: "kentucky",
    slug: "louisville",
    population: 617638,
    marketingHook: "Bourbon, horses, and authentic Southern marketing",
    localFact: "Louisville produces 95% of the world's bourbon",
    keyIndustries: ["Bourbon", "Healthcare", "Logistics", "Manufacturing", "Horse Racing"],
    creatorScene: "Bourbon influencers, Derby culture content, and Southern lifestyle creators.",
    businessVibe: "Traditional yet evolving. Old money meets new ideas in bourbon country."
  },
  {
    city: "Lexington",
    state: "Kentucky",
    stateAbbr: "KY",
    stateSlug: "kentucky",
    slug: "lexington",
    population: 323152,
    marketingHook: "Horse capital meets basketball kingdom",
    localFact: "Lexington's horse industry is worth $4B+ annually",
    keyIndustries: ["Equine", "Healthcare", "Education", "Manufacturing", "Tech"],
    creatorScene: "Equestrian content, UK basketball superfans, and bourbon trail creators.",
    businessVibe: "Horse money, basketball passion, and Southern charm. Big Blue Nation runs deep."
  },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL STATES - MAJOR CITIES
  // ═══════════════════════════════════════════════════════════════
  {
    city: "Salt Lake City",
    state: "Utah",
    stateAbbr: "UT",
    stateSlug: "utah",
    slug: "salt-lake-city",
    population: 200567,
    marketingHook: "Outdoor lifestyle meets tech startup energy",
    localFact: "Salt Lake City has the youngest average workforce in America",
    keyIndustries: ["Tech", "Outdoor Recreation", "Healthcare", "Finance", "MLM/Direct Sales"],
    creatorScene: "Outdoor adventure creators, mommy bloggers, and startup founders thrive here.",
    businessVibe: "Family-oriented, ambitious, and outdoorsy. Work hard, ski harder."
  },
  {
    city: "Oklahoma City",
    state: "Oklahoma",
    stateAbbr: "OK",
    stateSlug: "oklahoma",
    slug: "oklahoma-city",
    population: 681054,
    marketingHook: "Energy industry meets heartland authenticity",
    localFact: "OKC has one of the lowest costs of living of any major US city",
    keyIndustries: ["Energy", "Aerospace", "Healthcare", "Agriculture", "Biotech"],
    creatorScene: "Energy sector thought leaders, sports fans, and Oklahoma lifestyle creators.",
    businessVibe: "Affordable, friendly, and opportunity-rich. Build a business without burning capital."
  },
  {
    city: "Tulsa",
    state: "Oklahoma",
    stateAbbr: "OK",
    stateSlug: "oklahoma",
    slug: "tulsa",
    population: 413066,
    marketingHook: "Remote worker paradise paying people to move there",
    localFact: "Tulsa Remote pays $10K+ for remote workers to relocate",
    keyIndustries: ["Energy", "Aerospace", "Finance", "Healthcare", "Tech"],
    creatorScene: "Remote work content, energy sector, and Oklahoma authenticity creators.",
    businessVibe: "Affordable, welcoming, and actively recruiting talent. Tulsa wants you."
  },
  {
    city: "Albuquerque",
    state: "New Mexico",
    stateAbbr: "NM",
    stateSlug: "new-mexico",
    slug: "albuquerque",
    population: 564559,
    marketingHook: "Southwest culture and film production hub",
    localFact: "Albuquerque has 310 days of sunshine annually — perfect for content creation",
    keyIndustries: ["Film", "Tech", "Aerospace", "Healthcare", "Military"],
    creatorScene: "Film industry content, Southwest lifestyle, and Breaking Bad tourism creators.",
    businessVibe: "Creative, affordable, and culturally rich. Hollywood comes here for a reason."
  },
  {
    city: "Honolulu",
    state: "Hawaii",
    stateAbbr: "HI",
    stateSlug: "hawaii",
    slug: "honolulu",
    population: 350964,
    marketingHook: "Paradise lifestyle content that makes everyone jealous",
    localFact: "Hawaii receives 10M+ visitors annually seeking the island lifestyle",
    keyIndustries: ["Tourism", "Military", "Real Estate", "Healthcare", "Hospitality"],
    creatorScene: "Travel influencers, surf culture, and paradise lifestyle content dominates globally.",
    businessVibe: "Aloha spirit meets business savvy. Island time doesn't mean slow money."
  },
  {
    city: "Boise",
    state: "Idaho",
    stateAbbr: "ID",
    stateSlug: "idaho",
    slug: "boise",
    population: 235684,
    marketingHook: "America's fastest-growing small metro for a reason",
    localFact: "Boise was rated the #1 city for entrepreneurs by Inc. Magazine",
    keyIndustries: ["Tech", "Agriculture", "Outdoor Recreation", "Healthcare", "Manufacturing"],
    creatorScene: "Outdoor lifestyle, relocation content, and tech entrepreneurs fleeing the coasts.",
    businessVibe: "Growing, affordable, and opportunity-rich. Boise is the new Austin."
  },
  {
    city: "Birmingham",
    state: "Alabama",
    stateAbbr: "AL",
    stateSlug: "alabama",
    slug: "birmingham",
    population: 200733,
    marketingHook: "The South's most underrated food and culture city",
    localFact: "Birmingham has more James Beard Award winners than cities 5x its size",
    keyIndustries: ["Healthcare", "Banking", "Manufacturing", "Food", "Automotive"],
    creatorScene: "Food content creators, Southern culture, and civil rights history storytellers.",
    businessVibe: "Underdog energy with champion results. Birmingham is ready to be discovered."
  },
  {
    city: "Little Rock",
    state: "Arkansas",
    stateAbbr: "AR",
    stateSlug: "arkansas",
    slug: "little-rock",
    population: 202591,
    marketingHook: "Arkansas's capital with Walmart connection",
    localFact: "Walmart's vendor community means massive B2B activity flows through Arkansas",
    keyIndustries: ["Retail", "Healthcare", "Government", "Finance", "Logistics"],
    creatorScene: "Walmart supplier content, Southern lifestyle, and government insights.",
    businessVibe: "Connected to Walmart ecosystem, friendly, and surprisingly influential."
  },
  {
    city: "Des Moines",
    state: "Iowa",
    stateAbbr: "IA",
    stateSlug: "iowa",
    slug: "des-moines",
    population: 214133,
    marketingHook: "Insurance capital with Iowa nice authenticity",
    localFact: "Des Moines has more insurance company HQs than any US city",
    keyIndustries: ["Insurance", "Finance", "Agriculture", "Healthcare", "Tech"],
    creatorScene: "Insurance thought leaders, Iowa State Fair content, and Midwest lifestyle.",
    businessVibe: "Practical, genuine, and risk-aware. Des Moines calculates success."
  },
  {
    city: "Omaha",
    state: "Nebraska",
    stateAbbr: "NE",
    stateSlug: "nebraska",
    slug: "omaha",
    population: 486051,
    marketingHook: "Warren Buffett's hometown — value investing meets value living",
    localFact: "Omaha is home to 5 Fortune 500 companies including Berkshire Hathaway",
    keyIndustries: ["Finance", "Insurance", "Agriculture", "Tech", "Transportation"],
    creatorScene: "Finance thought leaders, Midwest values content, and startup founders.",
    businessVibe: "Value-focused, long-term thinking, and surprisingly wealthy. Omaha money moves quietly."
  },
  {
    city: "Wichita",
    state: "Kansas",
    stateAbbr: "KS",
    stateSlug: "kansas",
    slug: "wichita",
    population: 397532,
    marketingHook: "Air capital of the world with aerospace expertise",
    localFact: "More than half of all aircraft in the world have Wichita-made components",
    keyIndustries: ["Aerospace", "Manufacturing", "Healthcare", "Agriculture", "Energy"],
    creatorScene: "Aviation enthusiasts, manufacturing innovation, and Kansas pride content.",
    businessVibe: "Engineering-minded and precision-focused. Wichita builds things that fly."
  },
  {
    city: "Baltimore",
    state: "Maryland",
    stateAbbr: "MD",
    stateSlug: "maryland",
    slug: "baltimore",
    population: 585708,
    marketingHook: "Gritty charm and authentic East Coast storytelling",
    localFact: "Baltimore has more public monuments than any US city",
    keyIndustries: ["Healthcare", "Biotech", "Education", "Cybersecurity", "Finance"],
    creatorScene: "Healthcare innovators, urban culture creators, and authentic storytellers.",
    businessVibe: "Real, resilient, and reinventing itself. Baltimore hustle is underrated."
  },
  {
    city: "Newark",
    state: "New Jersey",
    stateAbbr: "NJ",
    stateSlug: "new-jersey",
    slug: "newark",
    population: 311549,
    marketingHook: "NYC gateway with Jersey authenticity",
    localFact: "Newark has one of the busiest airports and seaports on the East Coast",
    keyIndustries: ["Logistics", "Insurance", "Healthcare", "Finance", "Tech"],
    creatorScene: "NYC-adjacent content, transportation hub stories, and Jersey pride.",
    businessVibe: "Strategic location, NYC access, and Jersey work ethic."
  },
  {
    city: "Providence",
    state: "Rhode Island",
    stateAbbr: "RI",
    stateSlug: "rhode-island",
    slug: "providence",
    population: 190934,
    marketingHook: "RISD creativity meets New England charm",
    localFact: "Providence is home to RISD, one of the world's best design schools",
    keyIndustries: ["Education", "Healthcare", "Design", "Manufacturing", "Tourism"],
    creatorScene: "Design and creative content, New England lifestyle, and RISD innovation.",
    businessVibe: "Creative, compact, and design-forward. Providence punches above its weight."
  },
  {
    city: "Hartford",
    state: "Connecticut",
    stateAbbr: "CT",
    stateSlug: "connecticut",
    slug: "hartford",
    population: 121054,
    marketingHook: "Insurance capital of America",
    localFact: "Hartford is known as the Insurance Capital of the World",
    keyIndustries: ["Insurance", "Finance", "Healthcare", "Manufacturing", "Education"],
    creatorScene: "Insurance thought leaders, financial content, and Connecticut lifestyle.",
    businessVibe: "Insurance-driven, established, and quietly wealthy."
  }
];

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

export function getCityBySlug(citySlug: string): City | undefined {
  return cities.find(city => city.slug === citySlug);
}

export function getCityByStateAndSlug(stateSlug: string, citySlug: string): City | undefined {
  return cities.find(city => city.stateSlug === stateSlug && city.slug === citySlug);
}

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter(city => city.stateSlug === stateSlug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

export function getRandomCities(excludeSlug: string, count: number = 3): City[] {
  const filtered = cities.filter(c => c.slug !== excludeSlug);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getRandomCitiesInState(stateSlug: string, excludeSlug: string, count: number = 3): City[] {
  const filtered = cities.filter(c => c.stateSlug === stateSlug && c.slug !== excludeSlug);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ═══════════════════════════════════════════════════════════════════
// CITY CONTENT GENERATION
// ═══════════════════════════════════════════════════════════════════

export interface CityContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheadline: string;
  introContent: string;
  localContent: string;
  industries: string[];
  keywords: string[];
}

const heroPatterns = [
  (city: string) => `${city}'s Premier Social Media Growth Partner`,
  (city: string) => `Grow Your Brand in ${city} — Fast`,
  (city: string) => `${city} Creators Trust EDST for Growth`,
  (city: string) => `Dominate Social Media in ${city}`,
  (city: string) => `${city}'s Go-To Marketing Agency`,
  (city: string) => `Scale Your Presence in ${city}`,
  (city: string) => `The ${city} Growth Engine`,
  (city: string) => `${city} Marketing That Moves`,
];

const subheadlinePatterns = [
  (city: string, hook: string) => `${hook}. Real growth for ${city} creators, brands, and entrepreneurs.`,
  (city: string, hook: string) => `${hook}. The marketing ecosystem ${city} businesses trust.`,
  (city: string, hook: string) => `${hook}. Helping ${city} brands blow up since day one.`,
  (city: string, hook: string) => `${hook}. ${city}'s secret weapon for viral growth.`,
  (city: string, hook: string) => `${hook}. Where ${city} creators come to scale.`,
];

const introPatterns = [
  (city: string, state: string, fact: string, scene: string) => 
    `${city}, ${state} isn't just another market — it's a movement. ${fact}. ${scene} EDST has helped hundreds of ${city}-based creators and businesses break through the noise with campaigns that actually convert.`,
  
  (city: string, state: string, fact: string, scene: string) => 
    `There's something special about ${city}. ${fact}. ${scene} That's exactly why EDST has become the go-to growth partner for ${city} entrepreneurs, influencers, and brands looking to make real impact.`,
  
  (city: string, state: string, fact: string, scene: string) => 
    `When it comes to social media growth in ${city}, ${state}, nobody understands the local landscape like EDST. ${fact}. ${scene} Our team has worked with everyone from ${city} startups to established brands.`,
];

const localContentPatterns = [
  (city: string, vibe: string, industries: string[]) => 
    `${vibe} At EDST, we've mastered marketing to ${city}'s unique audience. Whether you're in ${industries.slice(0, 3).join(', ')}, or any other industry, our campaigns resonate with the people who matter most.`,
  
  (city: string, vibe: string, industries: string[]) => 
    `${vibe} Our ${city} clients span ${industries.slice(0, 3).join(', ')} and beyond. We know what works here because we've tested it, optimized it, and scaled it.`,
];

export function generateCityContent(city: City): CityContent {
  const hash = city.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const heroPattern = heroPatterns[hash % heroPatterns.length];
  const subheadlinePattern = subheadlinePatterns[hash % subheadlinePatterns.length];
  const introPattern = introPatterns[hash % introPatterns.length];
  const localPattern = localContentPatterns[hash % localContentPatterns.length];

  const h1 = heroPattern(city.city);
  const heroSubheadline = subheadlinePattern(city.city, city.marketingHook);
  const introContent = introPattern(city.city, city.state, city.localFact, city.creatorScene);
  const localContent = localPattern(city.city, city.businessVibe, city.keyIndustries);

  const metaTitleOptions = [
    `${city.city} Marketing Agency | EDST Growth`,
    `EDST ${city.city} | Social Media Growth`,
    `Social Media Marketing ${city.city} | EDST`,
    `${city.city} ${city.stateAbbr} Growth Agency | EDST`,
  ];
  const metaTitle = metaTitleOptions[hash % metaTitleOptions.length];

  const metaDescOptions = [
    `EDST is ${city.city}'s premier social media growth agency. ${city.marketingHook}. Real results for creators & brands.`,
    `Looking for marketing in ${city.city}? EDST delivers viral campaigns & real growth for ${city.city}, ${city.stateAbbr} businesses.`,
    `${city.city}'s trusted growth partner. EDST helps creators & brands blow up with proven strategies.`,
  ];
  const metaDescription = metaDescOptions[hash % metaDescOptions.length];

  const keywords = [
    `${city.city} marketing agency`,
    `social media marketing ${city.city}`,
    `${city.city} ${city.stateAbbr} growth agency`,
    `influencer marketing ${city.city}`,
    `${city.city} social media agency`,
    `digital marketing ${city.city}`,
    `${city.keyIndustries[0].toLowerCase()} marketing ${city.city}`,
    `viral marketing ${city.city}`,
  ];

  return {
    metaTitle,
    metaDescription,
    h1,
    heroSubheadline,
    introContent,
    localContent,
    industries: city.keyIndustries,
    keywords,
  };
}
