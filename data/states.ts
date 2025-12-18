/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST P-SEO STATE DATABASE — ALL 50 US STATES
 * ───────────────────────────────────────────────────────────────────
 * Complete US coverage with unique content per state for maximum SEO.
 * Each state has its own landing page + city pages underneath.
 * ═══════════════════════════════════════════════════════════════════
 */

export interface State {
  name: string;
  abbr: string;
  slug: string;
  region: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west';
  // UNIQUE content per state for SEO differentiation
  marketingHook: string;
  localFact: string;
  keyIndustries: string[];
  creatorScene: string;
  businessVibe: string;
  population: number;
  nickname: string;
}

export const states: State[] = [
  // ═══════════════════════════════════════════════════════════════
  // WEST COAST & PACIFIC
  // ═══════════════════════════════════════════════════════════════
  {
    name: "California",
    abbr: "CA",
    slug: "california",
    region: "west",
    marketingHook: "The entertainment and tech capital of the world",
    localFact: "California's economy is larger than most countries — it would be the 5th largest economy globally",
    keyIndustries: ["Entertainment", "Tech", "Agriculture", "Tourism", "Aerospace"],
    creatorScene: "Home to Hollywood, Silicon Valley, and the largest influencer ecosystem on the planet. YouTube, TikTok, and Instagram were practically born here.",
    businessVibe: "Innovative, trend-setting, and always pushing boundaries. California doesn't follow trends — it creates them.",
    population: 39538223,
    nickname: "The Golden State"
  },
  {
    name: "Washington",
    abbr: "WA",
    slug: "washington",
    region: "west",
    marketingHook: "Where tech giants and indie creators thrive together",
    localFact: "Washington state is home to Amazon, Microsoft, Starbucks, and Costco headquarters",
    keyIndustries: ["Tech", "E-commerce", "Aerospace", "Coffee", "Gaming"],
    creatorScene: "Seattle's tech scene drives a massive gaming and software creator community. Pacific Northwest lifestyle content is hugely popular.",
    businessVibe: "Innovative but laid-back. Flannel shirts and billion-dollar valuations go hand in hand here.",
    population: 7614893,
    nickname: "The Evergreen State"
  },
  {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon",
    region: "west",
    marketingHook: "Authentic, indie marketing that stands out from the crowd",
    localFact: "Oregon has no sales tax and more independent businesses per capita than any state",
    keyIndustries: ["Outdoor Gear", "Craft Beer", "Tech", "Sustainability", "Creative Services"],
    creatorScene: "Portland's indie scene drives sustainable living, craft, and outdoor adventure content. Authenticity is everything here.",
    businessVibe: "Fiercely independent and authenticity-obsessed. Keep Oregon weird applies to business too.",
    population: 4237256,
    nickname: "The Beaver State"
  },
  {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada",
    region: "west",
    marketingHook: "Entertainment marketing that never sleeps",
    localFact: "Las Vegas hosts 40+ million visitors annually and has more hotel rooms than any city on Earth",
    keyIndustries: ["Entertainment", "Gaming", "Hospitality", "Conventions", "Sports"],
    creatorScene: "Vegas is content creation paradise — nightlife, entertainment, and lifestyle creators thrive 24/7.",
    businessVibe: "No state income tax, 24/7 hustle, and endless entertainment. Nevada does business differently.",
    population: 3104614,
    nickname: "The Silver State"
  },
  {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona",
    region: "southwest",
    marketingHook: "The Southwest's fastest-growing market for creators and brands",
    localFact: "Arizona has been America's fastest-growing state for 5 years running",
    keyIndustries: ["Real Estate", "Tech", "Healthcare", "Tourism", "Aerospace"],
    creatorScene: "Desert lifestyle, wellness, and relocation content dominates. Scottsdale's luxury scene drives high-end influencer content.",
    businessVibe: "Growth-minded and opportunity-focused. Everyone's moving here for a reason.",
    population: 7151502,
    nickname: "The Grand Canyon State"
  },
  {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado",
    region: "west",
    marketingHook: "Outdoor lifestyle and wellness content capital",
    localFact: "Colorado has the highest average elevation of any state and the fittest population",
    keyIndustries: ["Outdoor Recreation", "Cannabis", "Tech", "Aerospace", "Healthcare"],
    creatorScene: "Fitness influencers, outdoor adventurers, and cannabis content creators lead the conversation nationally.",
    businessVibe: "Active, health-conscious, and entrepreneurial. Business meetings happen on hiking trails here.",
    population: 5773714,
    nickname: "The Centennial State"
  },
  {
    name: "Utah",
    abbr: "UT",
    slug: "utah",
    region: "west",
    marketingHook: "Outdoor adventure meets family-focused creator economy",
    localFact: "Utah has the youngest average workforce and fastest-growing tech sector in America",
    keyIndustries: ["Tech", "Outdoor Recreation", "MLM/Direct Sales", "Healthcare", "Finance"],
    creatorScene: "Mommy bloggers, outdoor adventure, and startup content thrive. The 'Silicon Slopes' tech scene is exploding.",
    businessVibe: "Family-oriented, ambitious, and outdoorsy. Work hard, ski harder is the motto.",
    population: 3271616,
    nickname: "The Beehive State"
  },
  {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii",
    region: "west",
    marketingHook: "Paradise lifestyle content that makes everyone jealous",
    localFact: "Hawaii receives 10+ million visitors annually seeking the island lifestyle",
    keyIndustries: ["Tourism", "Military", "Agriculture", "Real Estate", "Hospitality"],
    creatorScene: "Travel influencers, surf culture, and paradise lifestyle content has global reach and appeal.",
    businessVibe: "Aloha spirit meets business savvy. Island time doesn't mean slow money.",
    population: 1455271,
    nickname: "The Aloha State"
  },
  {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska",
    region: "west",
    marketingHook: "The Last Frontier's rugged adventure marketing",
    localFact: "Alaska is larger than Texas, California, and Montana combined",
    keyIndustries: ["Oil & Gas", "Fishing", "Tourism", "Military", "Mining"],
    creatorScene: "Extreme adventure, wildlife, and frontier lifestyle content captures imaginations worldwide.",
    businessVibe: "Rugged, independent, and resource-rich. Alaska does things its own way.",
    population: 733391,
    nickname: "The Last Frontier"
  },
  {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho",
    region: "west",
    marketingHook: "America's fastest-growing hidden gem",
    localFact: "Boise was rated the #1 city for entrepreneurs by Inc. Magazine",
    keyIndustries: ["Tech", "Agriculture", "Outdoor Recreation", "Manufacturing", "Healthcare"],
    creatorScene: "Outdoor lifestyle, relocation content, and tech entrepreneurs fleeing expensive coastal cities.",
    businessVibe: "Growing, affordable, and opportunity-rich. Idaho is the new frontier for smart business.",
    population: 1839106,
    nickname: "The Gem State"
  },
  {
    name: "Montana",
    abbr: "MT",
    slug: "montana",
    region: "west",
    marketingHook: "Big sky country with authentic frontier marketing",
    localFact: "Montana has more elk than people in some counties",
    keyIndustries: ["Agriculture", "Tourism", "Mining", "Timber", "Tech"],
    creatorScene: "Ranch life, outdoor adventure, and Yellowstone-inspired content drives massive engagement.",
    businessVibe: "Authentic, spacious, and increasingly attractive to remote workers seeking quality of life.",
    population: 1084225,
    nickname: "Big Sky Country"
  },
  {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming",
    region: "west",
    marketingHook: "No income tax and wide-open opportunity",
    localFact: "Wyoming has no state income tax and the lowest population of any US state",
    keyIndustries: ["Energy", "Tourism", "Agriculture", "Mining", "Crypto"],
    creatorScene: "Western lifestyle, ranch content, and increasingly crypto/finance due to friendly regulations.",
    businessVibe: "Tax-friendly, independent, and frontier-spirited. Wyoming is quietly becoming a business haven.",
    population: 576851,
    nickname: "The Cowboy State"
  },
  {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico",
    region: "southwest",
    marketingHook: "Southwest culture and film production hub",
    localFact: "New Mexico's film industry has grown 300% since Breaking Bad put it on the map",
    keyIndustries: ["Film", "Aerospace", "National Labs", "Tourism", "Art"],
    creatorScene: "Film industry content, Southwest art and culture, and unique desert aesthetic drives engagement.",
    businessVibe: "Creative, affordable, and culturally rich. Hollywood comes here for authenticity.",
    population: 2117522,
    nickname: "Land of Enchantment"
  },

  // ═══════════════════════════════════════════════════════════════
  // TEXAS & SOUTHWEST
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Texas",
    abbr: "TX",
    slug: "texas",
    region: "southwest",
    marketingHook: "Everything is bigger in Texas — including opportunity",
    localFact: "Texas has the most Fortune 500 headquarters of any state and no state income tax",
    keyIndustries: ["Energy", "Tech", "Healthcare", "Aerospace", "Agriculture"],
    creatorScene: "From Austin's tech influencers to Houston's hip-hop scene to Dallas's corporate thought leaders — Texas has it all.",
    businessVibe: "Big, bold, and business-first. Texas does everything at scale.",
    population: 29145505,
    nickname: "The Lone Star State"
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma",
    region: "southwest",
    marketingHook: "Energy capital meets heartland authenticity",
    localFact: "Oklahoma has one of the lowest costs of living of any state with major metros",
    keyIndustries: ["Energy", "Aerospace", "Agriculture", "Healthcare", "Manufacturing"],
    creatorScene: "Energy sector thought leaders, sports superfans, and authentic heartland lifestyle content.",
    businessVibe: "Affordable, friendly, and opportunity-rich. Build a business without burning capital.",
    population: 3959353,
    nickname: "The Sooner State"
  },

  // ═══════════════════════════════════════════════════════════════
  // MIDWEST
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois",
    region: "midwest",
    marketingHook: "The Midwest's marketing and media powerhouse",
    localFact: "Chicago has the 3rd largest advertising industry in the US after NYC and LA",
    keyIndustries: ["Finance", "Advertising", "Manufacturing", "Agriculture", "Tech"],
    creatorScene: "Food creators, comedy talent, and urban lifestyle influencers dominate. Second City alumni go viral.",
    businessVibe: "No-nonsense, hardworking, and loyal. Chicagoans support their own fiercely.",
    population: 12812508,
    nickname: "The Prairie State"
  },
  {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio",
    region: "midwest",
    marketingHook: "Test market capital — if it works here, it works anywhere",
    localFact: "Ohio is America's #1 test market — more products launch here than any other state",
    keyIndustries: ["Manufacturing", "Healthcare", "Finance", "Retail", "Aerospace"],
    creatorScene: "Diverse, representative content that resonates nationally. Fashion and lifestyle from Columbus, sports from Cleveland.",
    businessVibe: "Practical, hardworking, and surprisingly influential. Ohio is the heartbeat of America.",
    population: 11799448,
    nickname: "The Buckeye State"
  },
  {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan",
    region: "midwest",
    marketingHook: "The comeback state with authentic brand stories",
    localFact: "Michigan's tech industry has grown 400% since 2010 — the biggest turnaround in America",
    keyIndustries: ["Automotive", "Tech", "Healthcare", "Manufacturing", "Tourism"],
    creatorScene: "Hip-hop legends, automotive enthusiasts, and comeback story creators inspire engagement.",
    businessVibe: "Resilient, authentic, and rebuilding. Michigan hustle is unmatched.",
    population: 10077331,
    nickname: "The Great Lakes State"
  },
  {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana",
    region: "midwest",
    marketingHook: "The crossroads of America — sports marketing capital",
    localFact: "Indianapolis hosts more major sporting events than any city in America",
    keyIndustries: ["Sports", "Motorsports", "Pharmaceuticals", "Manufacturing", "Logistics"],
    creatorScene: "Sports content, racing enthusiasts, and heartland lifestyle creators thrive here.",
    businessVibe: "Friendly, sports-obsessed, and surprisingly sophisticated. The crossroads of America.",
    population: 6785528,
    nickname: "The Hoosier State"
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin",
    region: "midwest",
    marketingHook: "Craft brewing capital with Midwest maker spirit",
    localFact: "Wisconsin produces more beer and cheese than any other state",
    keyIndustries: ["Dairy", "Beer", "Manufacturing", "Healthcare", "Paper"],
    creatorScene: "Craft beer content, maker culture, and passionate Packers fandom drives engagement.",
    businessVibe: "Hardworking, unpretentious, and craft-obsessed. Quality over flash, always.",
    population: 5893718,
    nickname: "The Badger State"
  },
  {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota",
    region: "midwest",
    marketingHook: "Creative Midwest hub punching above its weight",
    localFact: "Minneapolis has more theater seats per capita than any city except NYC",
    keyIndustries: ["Retail", "Healthcare", "Finance", "Food", "Medical Devices"],
    creatorScene: "Creative content, corporate thought leadership, and genuine Midwest authenticity.",
    businessVibe: "Nice, genuine, and quietly ambitious. Don't mistake Minnesota nice for weak.",
    population: 5706494,
    nickname: "Land of 10,000 Lakes"
  },
  {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri",
    region: "midwest",
    marketingHook: "Gateway to the West with startup spirit",
    localFact: "Missouri is home to more BBQ restaurants per capita than anywhere and invented the ice cream cone",
    keyIndustries: ["Agriculture", "Healthcare", "Finance", "Logistics", "Aerospace"],
    creatorScene: "BBQ content creators, jazz culture in KC, and St. Louis startup storytellers.",
    businessVibe: "Scrappy, innovative, and proving the coasts wrong. Gateway energy is real.",
    population: 6154913,
    nickname: "The Show-Me State"
  },
  {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa",
    region: "midwest",
    marketingHook: "America's heartland with authentic connection",
    localFact: "Iowa produces more corn, pork, and eggs than any other state",
    keyIndustries: ["Agriculture", "Insurance", "Finance", "Manufacturing", "Renewable Energy"],
    creatorScene: "Agricultural innovation, State Fair content, and authentic heartland lifestyle.",
    businessVibe: "Practical, genuine, and deeply connected to the land. Iowa keeps it real.",
    population: 3190369,
    nickname: "The Hawkeye State"
  },
  {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas",
    region: "midwest",
    marketingHook: "Air capital of the world — precision and innovation",
    localFact: "More than half of all aircraft in the world have Kansas-made components",
    keyIndustries: ["Aerospace", "Agriculture", "Manufacturing", "Energy", "Healthcare"],
    creatorScene: "Aviation enthusiasts, agricultural innovation, and authentic Kansas pride content.",
    businessVibe: "Engineering-minded and precision-focused. Kansas builds things that matter.",
    population: 2937880,
    nickname: "The Sunflower State"
  },
  {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska",
    region: "midwest",
    marketingHook: "Warren Buffett's home — value investing meets value living",
    localFact: "Omaha is home to 5 Fortune 500 companies including Berkshire Hathaway",
    keyIndustries: ["Finance", "Insurance", "Agriculture", "Tech", "Transportation"],
    creatorScene: "Finance thought leaders, Husker superfans, and startup founders choosing value over hype.",
    businessVibe: "Value-focused, long-term thinking, and surprisingly wealthy. Nebraska money moves quietly.",
    population: 1961504,
    nickname: "The Cornhusker State"
  },
  {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota",
    region: "midwest",
    marketingHook: "Energy boom state with frontier opportunity",
    localFact: "North Dakota has one of the lowest unemployment rates in America",
    keyIndustries: ["Energy", "Agriculture", "Technology", "Healthcare", "Manufacturing"],
    creatorScene: "Energy sector content, outdoor adventure, and authentic frontier lifestyle.",
    businessVibe: "Hardworking, opportunity-rich, and quietly prosperous. North Dakota gets it done.",
    population: 779094,
    nickname: "The Peace Garden State"
  },
  {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota",
    region: "midwest",
    marketingHook: "No income tax and Mount Rushmore opportunity",
    localFact: "South Dakota has no state income tax and is a top state for business formation",
    keyIndustries: ["Finance", "Tourism", "Agriculture", "Healthcare", "Manufacturing"],
    creatorScene: "Mount Rushmore tourism, outdoor adventure, and business-friendly lifestyle content.",
    businessVibe: "Tax-friendly, business-forward, and monumentally ambitious.",
    population: 886667,
    nickname: "Mount Rushmore State"
  },

  // ═══════════════════════════════════════════════════════════════
  // SOUTH & SOUTHEAST
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Florida",
    abbr: "FL",
    slug: "florida",
    region: "southeast",
    marketingHook: "The Sunshine State — where brands shine bright",
    localFact: "Florida has no state income tax and welcomes 130+ million tourists annually",
    keyIndustries: ["Tourism", "Real Estate", "Healthcare", "Finance", "Aerospace"],
    creatorScene: "Miami's luxury lifestyle, Orlando's theme park content, Tampa's business scene — Florida has every niche covered.",
    businessVibe: "Tax-friendly, international, and always sunny. Florida is where entrepreneurs come to thrive.",
    population: 21538187,
    nickname: "The Sunshine State"
  },
  {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia",
    region: "southeast",
    marketingHook: "The entertainment capital of the South",
    localFact: "Atlanta produces more hip-hop content than any other city globally and is Hollywood of the South",
    keyIndustries: ["Film", "Music", "Tech", "Logistics", "Healthcare"],
    creatorScene: "Hip-hop artists, R&B creators, and Black excellence content thrives here. Major label presence.",
    businessVibe: "Creative, connected, and culturally influential. Atlanta sets trends for the world.",
    population: 10711908,
    nickname: "The Peach State"
  },
  {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina",
    region: "southeast",
    marketingHook: "Research Triangle innovation meets Southern charm",
    localFact: "North Carolina's Research Triangle has the highest concentration of PhDs in America",
    keyIndustries: ["Tech", "Biotech", "Finance", "Education", "Manufacturing"],
    creatorScene: "Tech educators, biotech thought leaders, and college basketball superfans drive engagement.",
    businessVibe: "Smart, educated, and innovation-focused. Southern hospitality meets Silicon Valley ambition.",
    population: 10439388,
    nickname: "The Tar Heel State"
  },
  {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina",
    region: "southeast",
    marketingHook: "Southern hospitality meets business growth",
    localFact: "South Carolina is the fastest-growing state on the East Coast for business relocation",
    keyIndustries: ["Manufacturing", "Tourism", "Automotive", "Aerospace", "Healthcare"],
    creatorScene: "Charleston's food and lifestyle content, Myrtle Beach tourism, and Southern living.",
    businessVibe: "Business-friendly, hospitable, and growing fast. South Carolina welcomes opportunity.",
    population: 5118425,
    nickname: "The Palmetto State"
  },
  {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia",
    region: "southeast",
    marketingHook: "Where history meets innovation in the DC corridor",
    localFact: "Northern Virginia has more data centers than anywhere else on Earth",
    keyIndustries: ["Defense", "Tech", "Government", "Finance", "Healthcare"],
    creatorScene: "Policy influencers, military family content, and DC-adjacent corporate thought leadership.",
    businessVibe: "Educated, connected, and defense-dollar rich. Virginia powers the nation's capital region.",
    population: 8631393,
    nickname: "The Old Dominion"
  },
  {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee",
    region: "southeast",
    marketingHook: "Music City meets business-friendly growth",
    localFact: "Tennessee has no state income tax and Nashville's music industry generates $10B+ annually",
    keyIndustries: ["Music", "Healthcare", "Automotive", "Tourism", "Logistics"],
    creatorScene: "Country, pop, and Americana artists dominate Nashville. Memphis brings soul and BBQ content.",
    businessVibe: "Creative yet business-savvy. Tennessee understands both the art and the hustle.",
    population: 6910840,
    nickname: "The Volunteer State"
  },
  {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky",
    region: "southeast",
    marketingHook: "Bourbon, horses, and authentic Southern marketing",
    localFact: "Kentucky produces 95% of the world's bourbon",
    keyIndustries: ["Bourbon", "Horse Racing", "Healthcare", "Manufacturing", "Automotive"],
    creatorScene: "Bourbon influencers, Derby culture, and authentic Southern lifestyle content.",
    businessVibe: "Traditional yet evolving. Old money meets new ideas in bourbon country.",
    population: 4505836,
    nickname: "The Bluegrass State"
  },
  {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama",
    region: "southeast",
    marketingHook: "Southern tradition meets emerging innovation",
    localFact: "Huntsville has more engineers per capita than Silicon Valley",
    keyIndustries: ["Aerospace", "Automotive", "Healthcare", "Manufacturing", "Military"],
    creatorScene: "College football superfans, Birmingham's food renaissance, and space industry content.",
    businessVibe: "Underdog energy with championship results. Alabama is ready to surprise you.",
    population: 5024279,
    nickname: "The Heart of Dixie"
  },
  {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi",
    region: "southeast",
    marketingHook: "Birthplace of American music and authentic storytelling",
    localFact: "Mississippi is the birthplace of blues, rock and roll, and America's most influential music",
    keyIndustries: ["Agriculture", "Manufacturing", "Healthcare", "Gaming", "Shipbuilding"],
    creatorScene: "Music history content, Southern food and culture, and authentic Delta storytelling.",
    businessVibe: "Soulful, authentic, and deeply rooted. Mississippi tells stories that matter.",
    population: 2961279,
    nickname: "The Magnolia State"
  },
  {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana",
    region: "southeast",
    marketingHook: "Where culture, food, and music create unforgettable content",
    localFact: "New Orleans hosts 18+ million tourists annually seeking unique culture",
    keyIndustries: ["Energy", "Tourism", "Shipping", "Film", "Agriculture"],
    creatorScene: "Food creators, jazz and brass band content, and cultural celebration that goes viral.",
    businessVibe: "Celebratory, resilient, and unlike anywhere else. Louisiana does it different.",
    population: 4657757,
    nickname: "The Pelican State"
  },
  {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas",
    region: "southeast",
    marketingHook: "Walmart's backyard — retail connections that matter",
    localFact: "Arkansas is home to Walmart, the world's largest company by revenue",
    keyIndustries: ["Retail", "Agriculture", "Manufacturing", "Healthcare", "Transportation"],
    creatorScene: "Walmart vendor ecosystem content, outdoor recreation, and authentic Southern lifestyle.",
    businessVibe: "Connected to the world's largest retailer, affordable, and opportunity-rich.",
    population: 3011524,
    nickname: "The Natural State"
  },
  {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia",
    region: "southeast",
    marketingHook: "Mountain state authenticity and outdoor adventure",
    localFact: "West Virginia is almost heaven for outdoor recreation with 1.5 million acres of public land",
    keyIndustries: ["Energy", "Healthcare", "Tourism", "Chemicals", "Aerospace"],
    creatorScene: "Outdoor adventure, Appalachian culture, and authentic mountain lifestyle content.",
    businessVibe: "Resilient, authentic, and finding new paths forward. West Virginia adapts.",
    population: 1793716,
    nickname: "The Mountain State"
  },

  // ═══════════════════════════════════════════════════════════════
  // NORTHEAST
  // ═══════════════════════════════════════════════════════════════
  {
    name: "New York",
    abbr: "NY",
    slug: "new-york",
    region: "northeast",
    marketingHook: "The world's most competitive market — dominate here, dominate anywhere",
    localFact: "NYC has more Fortune 500 companies than any other city and 60,000+ influencers",
    keyIndustries: ["Finance", "Media", "Fashion", "Tech", "Entertainment"],
    creatorScene: "Fashion influencers, finance creators, media personalities, and trend-setters define global culture from here.",
    businessVibe: "Fast-paced, high-stakes, and results-driven. If you can make it here, you can make it anywhere.",
    population: 20201249,
    nickname: "The Empire State"
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey",
    region: "northeast",
    marketingHook: "NYC access with Jersey hustle",
    localFact: "New Jersey has more scientists and engineers per square mile than anywhere in the world",
    keyIndustries: ["Pharmaceuticals", "Finance", "Tech", "Logistics", "Healthcare"],
    creatorScene: "NYC-adjacent influencers, pharma thought leaders, and authentic Jersey Shore lifestyle.",
    businessVibe: "Smart, strategic, and not afraid to hustle. Jersey gets things done.",
    population: 9288994,
    nickname: "The Garden State"
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania",
    region: "northeast",
    marketingHook: "Authentic, gritty marketing that resonates",
    localFact: "Pennsylvania has more colleges and universities than any state except California and New York",
    keyIndustries: ["Healthcare", "Education", "Finance", "Manufacturing", "Energy"],
    creatorScene: "Philly's food scene, Pittsburgh's tech revival, and authentic working-class storytelling.",
    businessVibe: "Real, direct, and no-frills. Pennsylvania doesn't do fake.",
    population: 13002700,
    nickname: "The Keystone State"
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts",
    region: "northeast",
    marketingHook: "Where education meets innovation",
    localFact: "Massachusetts has more colleges per capita than any state — including Harvard and MIT",
    keyIndustries: ["Education", "Biotech", "Healthcare", "Finance", "Tech"],
    creatorScene: "EdTech influencers, biotech thought leaders, and sports fanatics create passionate content.",
    businessVibe: "Intellectual, driven, and deeply loyal. Smart people building smart companies.",
    population: 7029917,
    nickname: "The Bay State"
  },
  {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut",
    region: "northeast",
    marketingHook: "Hedge fund capital meets corporate excellence",
    localFact: "Connecticut has the highest per capita income of any state",
    keyIndustries: ["Finance", "Insurance", "Healthcare", "Manufacturing", "Defense"],
    creatorScene: "Wealth management thought leaders, corporate executives, and sophisticated lifestyle content.",
    businessVibe: "Sophisticated, wealthy, and strategically located between NYC and Boston.",
    population: 3605944,
    nickname: "The Constitution State"
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island",
    region: "northeast",
    marketingHook: "Small state, big creative energy",
    localFact: "Rhode Island has more historic landmarks per square mile than any state",
    keyIndustries: ["Healthcare", "Education", "Defense", "Tourism", "Manufacturing"],
    creatorScene: "RISD-driven creative content, coastal lifestyle, and boutique New England charm.",
    businessVibe: "Creative, connected, and surprisingly influential for its size.",
    population: 1097379,
    nickname: "The Ocean State"
  },
  {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont",
    region: "northeast",
    marketingHook: "Authentic, artisanal marketing that stands out",
    localFact: "Vermont produces more maple syrup than any other state and has no billboards",
    keyIndustries: ["Tourism", "Agriculture", "Manufacturing", "Healthcare", "Tech"],
    creatorScene: "Farm-to-table content, outdoor adventure, and authentic artisanal brand stories.",
    businessVibe: "Authentic, sustainable, and quality-obsessed. Vermont does things the right way.",
    population: 643077,
    nickname: "The Green Mountain State"
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire",
    region: "northeast",
    marketingHook: "Live free or die — tax-free business growth",
    localFact: "New Hampshire has no state income tax or sales tax",
    keyIndustries: ["Tech", "Manufacturing", "Healthcare", "Tourism", "Finance"],
    creatorScene: "Outdoor adventure, tax-free lifestyle content, and New England authenticity.",
    businessVibe: "Independent, tax-friendly, and fiercely self-reliant. Live free or die applies to business.",
    population: 1377529,
    nickname: "The Granite State"
  },
  {
    name: "Maine",
    abbr: "ME",
    slug: "maine",
    region: "northeast",
    marketingHook: "Vacationland authenticity that cuts through the noise",
    localFact: "Maine has more coastline than California and produces 90% of America's lobsters",
    keyIndustries: ["Tourism", "Fishing", "Healthcare", "Manufacturing", "Agriculture"],
    creatorScene: "Coastal lifestyle, seafood content, and authentic New England storytelling.",
    businessVibe: "Authentic, hardworking, and connected to the land and sea.",
    population: 1362359,
    nickname: "The Pine Tree State"
  },
  {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland",
    region: "northeast",
    marketingHook: "DC corridor innovation and biotech powerhouse",
    localFact: "Maryland has more federal research labs than any state",
    keyIndustries: ["Biotech", "Cybersecurity", "Healthcare", "Defense", "Education"],
    creatorScene: "Biotech innovators, DC-adjacent policy content, and Baltimore's authentic urban culture.",
    businessVibe: "Research-driven, government-connected, and innovation-focused.",
    population: 6177224,
    nickname: "The Old Line State"
  },
  {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware",
    region: "northeast",
    marketingHook: "Corporate headquarters capital — business-friendly by design",
    localFact: "More than 60% of Fortune 500 companies are incorporated in Delaware",
    keyIndustries: ["Finance", "Chemicals", "Healthcare", "Agriculture", "Tech"],
    creatorScene: "Corporate thought leadership, tax strategy content, and coastal Delaware lifestyle.",
    businessVibe: "Business-friendly laws, no sales tax, and strategically positioned. Delaware knows business.",
    population: 989948,
    nickname: "The First State"
  },
  {
    name: "Washington DC",
    abbr: "DC",
    slug: "washington-dc",
    region: "northeast",
    marketingHook: "Where policy meets influence",
    localFact: "DC has the highest percentage of college-educated residents in America",
    keyIndustries: ["Government", "Defense", "Consulting", "Media", "Nonprofits"],
    creatorScene: "Policy influencers, political commentators, and DC lifestyle creators shape national conversation.",
    businessVibe: "Educated, connected, and influence-focused. Your network is your net worth here.",
    population: 689545,
    nickname: "The Nation's Capital"
  }
];

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

export function getStateBySlug(slug: string): State | undefined {
  return states.find(state => state.slug === slug);
}

export function getStateByAbbr(abbr: string): State | undefined {
  return states.find(state => state.abbr === abbr);
}

export function getAllStateSlugs(): string[] {
  return states.map(state => state.slug);
}

export function getStatesByRegion(region: State['region']): State[] {
  return states.filter(state => state.region === region);
}

export function getStatesGroupedByRegion(): Record<string, State[]> {
  return states.reduce((acc, state) => {
    const region = state.region;
    if (!acc[region]) acc[region] = [];
    acc[region].push(state);
    return acc;
  }, {} as Record<string, State[]>);
}

// ═══════════════════════════════════════════════════════════════════
// STATE CONTENT GENERATION
// ═══════════════════════════════════════════════════════════════════

export interface StateContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheadline: string;
  introContent: string;
  keywords: string[];
}

const stateHeroPatterns = [
  (state: string) => `Social Media Marketing Agency in ${state}`,
  (state: string) => `${state}'s Premier Growth Agency`,
  (state: string) => `Grow Your Brand in ${state}`,
  (state: string) => `${state} Marketing That Moves`,
  (state: string) => `The ${state} Growth Partner`,
];

const stateSubheadlinePatterns = [
  (state: string, hook: string) => `${hook}. Real growth for ${state} creators, brands, and entrepreneurs.`,
  (state: string, hook: string) => `${hook}. The marketing ecosystem ${state} businesses trust.`,
  (state: string, hook: string) => `${hook}. Helping ${state} brands blow up since day one.`,
];

const stateIntroPatterns = [
  (state: string, nickname: string, fact: string, scene: string, vibe: string) => 
    `Welcome to ${state}, ${nickname}. ${fact}. ${scene} ${vibe} EDST has helped hundreds of ${state}-based creators and businesses break through the noise with campaigns that actually convert.`,
  
  (state: string, nickname: string, fact: string, scene: string, vibe: string) => 
    `${state} — ${nickname} — is more than just a location. It's a mindset. ${fact}. ${scene} ${vibe} That's why EDST has become the go-to growth partner for ${state} entrepreneurs and creators.`,
  
  (state: string, nickname: string, fact: string, scene: string, vibe: string) => 
    `There's something special about doing business in ${state}. ${fact}. ${scene} ${vibe} EDST understands the ${state} market inside and out.`,
];

export function generateStateContent(state: State): StateContent {
  const hash = state.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const heroPattern = stateHeroPatterns[hash % stateHeroPatterns.length];
  const subheadlinePattern = stateSubheadlinePatterns[hash % stateSubheadlinePatterns.length];
  const introPattern = stateIntroPatterns[hash % stateIntroPatterns.length];

  const h1 = heroPattern(state.name);
  const heroSubheadline = subheadlinePattern(state.name, state.marketingHook);
  const introContent = introPattern(state.name, state.nickname, state.localFact, state.creatorScene, state.businessVibe);

  const metaTitleOptions = [
    `${state.name} Marketing Agency | EDST`,
    `EDST ${state.name} | Social Media Growth`,
    `Social Media Marketing ${state.name} | EDST`,
    `${state.abbr} Growth Agency | EDST Marketing`,
  ];
  const metaTitle = metaTitleOptions[hash % metaTitleOptions.length];

  const metaDescOptions = [
    `EDST is ${state.name}'s premier social media growth agency. ${state.marketingHook}. Real results for creators & brands.`,
    `Looking for marketing in ${state.name}? EDST delivers viral campaigns & real growth. Serving all major ${state.name} cities.`,
    `${state.name}'s trusted growth partner. EDST helps creators & brands blow up with proven strategies across ${state.abbr}.`,
  ];
  const metaDescription = metaDescOptions[hash % metaDescOptions.length];

  const keywords = [
    `${state.name} marketing agency`,
    `social media marketing ${state.name}`,
    `${state.abbr} growth agency`,
    `influencer marketing ${state.name}`,
    `digital marketing ${state.name}`,
    `${state.keyIndustries[0].toLowerCase()} marketing ${state.name}`,
    `${state.keyIndustries[1].toLowerCase()} marketing ${state.name}`,
    `viral marketing ${state.name}`,
  ];

  return {
    metaTitle,
    metaDescription,
    h1,
    heroSubheadline,
    introContent,
    keywords,
  };
}



