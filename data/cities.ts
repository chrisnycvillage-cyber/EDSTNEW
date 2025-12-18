/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST P-SEO EXPANDED CITY DATABASE — 300+ CITIES
 * ───────────────────────────────────────────────────────────────────
 * Comprehensive US city coverage with 5-10 cities per state.
 * URL structure: /us/[state]/[city]
 * ═══════════════════════════════════════════════════════════════════
 */

export interface City {
  city: string;
  state: string;
  stateAbbr: string;
  stateSlug: string;
  slug: string;
  population: number;
  marketingHook: string;
  localFact: string;
  keyIndustries: string[];
  creatorScene: string;
  businessVibe: string;
}

// Helper to generate city data with templates
function createCity(
  city: string,
  state: string,
  stateAbbr: string,
  stateSlug: string,
  population: number,
  industries: string[],
  hook?: string,
  fact?: string
): City {
  const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  return {
    city,
    state,
    stateAbbr,
    stateSlug,
    slug,
    population,
    marketingHook: hook || `${city}'s trusted growth partner for creators and brands`,
    localFact: fact || `${city} is a growing market for digital marketing and content creation`,
    keyIndustries: industries,
    creatorScene: `${city} has a vibrant creator community spanning lifestyle, business, and entertainment content.`,
    businessVibe: `${city} offers unique opportunities for brands looking to connect with local audiences.`
  };
}

export const cities: City[] = [
  // ═══════════════════════════════════════════════════════════════
  // ALABAMA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Birmingham", "Alabama", "AL", "alabama", 200733, ["Healthcare", "Banking", "Manufacturing", "Food", "Automotive"], "The South's most underrated food and culture city", "Birmingham has more James Beard Award winners than cities 5x its size"),
  createCity("Montgomery", "Alabama", "AL", "alabama", 200603, ["Government", "Military", "Healthcare", "Education", "Manufacturing"], "Alabama's capital with civil rights history", "Montgomery is the birthplace of the Civil Rights Movement"),
  createCity("Huntsville", "Alabama", "AL", "alabama", 215006, ["Aerospace", "Defense", "Tech", "Research", "Manufacturing"], "Rocket City USA — space and defense hub", "Huntsville has more engineers per capita than Silicon Valley"),
  createCity("Mobile", "Alabama", "AL", "alabama", 187041, ["Shipping", "Aerospace", "Healthcare", "Tourism", "Manufacturing"], "Gulf Coast port city with Southern charm", "Mobile is home to America's original Mardi Gras"),
  createCity("Tuscaloosa", "Alabama", "AL", "alabama", 99600, ["Education", "Healthcare", "Manufacturing", "Automotive", "Retail"], "Roll Tide — college town with passionate fans", "University of Alabama drives the local economy and culture"),
  createCity("Auburn", "Alabama", "AL", "alabama", 76143, ["Education", "Tech", "Research", "Healthcare", "Retail"], "War Eagle — Auburn University's home", "Auburn has one of the fastest-growing tech sectors in Alabama"),

  // ═══════════════════════════════════════════════════════════════
  // ALASKA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Anchorage", "Alaska", "AK", "alaska", 291247, ["Oil & Gas", "Tourism", "Military", "Fishing", "Healthcare"], "Alaska's largest city — gateway to adventure", "Anchorage is home to 40% of Alaska's population"),
  createCity("Fairbanks", "Alaska", "AK", "alaska", 32325, ["Military", "Mining", "Education", "Tourism", "Research"], "Northern Lights capital of North America", "Fairbanks is one of the best places to see the Aurora Borealis"),
  createCity("Juneau", "Alaska", "AK", "alaska", 32255, ["Government", "Tourism", "Fishing", "Mining", "Healthcare"], "Alaska's capital — accessible only by air or sea", "Juneau is the only US state capital not accessible by road"),
  createCity("Sitka", "Alaska", "AK", "alaska", 8458, ["Fishing", "Tourism", "Healthcare", "Government", "Education"], "Alaska's former Russian capital", "Sitka was the capital of Russian America"),
  createCity("Ketchikan", "Alaska", "AK", "alaska", 8192, ["Tourism", "Fishing", "Healthcare", "Retail", "Transportation"], "Salmon capital of the world", "Ketchikan sees over 1 million cruise visitors annually"),

  // ═══════════════════════════════════════════════════════════════
  // ARIZONA (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Phoenix", "Arizona", "AZ", "arizona", 1680992, ["Real Estate", "Tech", "E-commerce", "Content Creation", "Small Business"], "The Southwest's fastest-growing creator market", "Phoenix is America's fastest-growing major city for 5 years running"),
  createCity("Tucson", "Arizona", "AZ", "arizona", 548073, ["Aerospace", "Defense", "Education", "Healthcare", "Mining"], "Desert beauty meets university town creativity", "Tucson is a UNESCO City of Gastronomy — the first in the US"),
  createCity("Scottsdale", "Arizona", "AZ", "arizona", 258069, ["Tourism", "Healthcare", "Real Estate", "Tech", "Hospitality"], "Luxury desert lifestyle and wellness destination", "Scottsdale has more spas per capita than any US city"),
  createCity("Mesa", "Arizona", "AZ", "arizona", 518012, ["Aerospace", "Healthcare", "Education", "Tech", "Manufacturing"], "Arizona's third-largest city with diverse economy", "Mesa is larger by population than Miami, Atlanta, or Minneapolis"),
  createCity("Chandler", "Arizona", "AZ", "arizona", 275987, ["Tech", "Manufacturing", "Healthcare", "Finance", "Retail"], "Silicon Desert — major tech manufacturing hub", "Intel's largest manufacturing site is in Chandler"),
  createCity("Gilbert", "Arizona", "AZ", "arizona", 267918, ["Tech", "Healthcare", "Retail", "Finance", "Education"], "America's largest town and family destination", "Gilbert consistently ranks as one of America's safest cities"),
  createCity("Glendale", "Arizona", "AZ", "arizona", 248325, ["Sports", "Entertainment", "Healthcare", "Retail", "Manufacturing"], "Arizona's sports and entertainment capital", "Glendale hosts Super Bowls, Final Fours, and major concerts"),
  createCity("Tempe", "Arizona", "AZ", "arizona", 185038, ["Education", "Tech", "Finance", "Healthcare", "Hospitality"], "ASU's home — innovation and young energy", "Arizona State is the largest public university in the US"),

  // ═══════════════════════════════════════════════════════════════
  // ARKANSAS (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Little Rock", "Arkansas", "AR", "arkansas", 202591, ["Retail", "Healthcare", "Government", "Finance", "Logistics"], "Arkansas's capital with Walmart connection", "Walmart's vendor community means massive B2B activity flows through Arkansas"),
  createCity("Fort Smith", "Arkansas", "AR", "arkansas", 89142, ["Manufacturing", "Healthcare", "Logistics", "Retail", "Education"], "Gateway to the Ozarks with frontier history", "Fort Smith was once one of the most dangerous frontier towns"),
  createCity("Fayetteville", "Arkansas", "AR", "arkansas", 95322, ["Education", "Healthcare", "Tech", "Retail", "Food"], "University of Arkansas — Razorback nation", "Fayetteville is consistently ranked best place to live in Arkansas"),
  createCity("Springdale", "Arkansas", "AR", "arkansas", 86259, ["Food Processing", "Manufacturing", "Logistics", "Healthcare", "Retail"], "Tyson Foods headquarters — poultry capital", "Springdale is home to the world's largest meat processor"),
  createCity("Bentonville", "Arkansas", "AR", "arkansas", 57434, ["Retail", "Tech", "Art", "Cycling", "Hospitality"], "Walmart's hometown with world-class art", "Crystal Bridges Museum has art worth over $1 billion"),
  createCity("Rogers", "Arkansas", "AR", "arkansas", 72758, ["Retail", "Manufacturing", "Healthcare", "Tech", "Logistics"], "Northwest Arkansas growth corridor", "Rogers is one of the fastest-growing cities in the region"),

  // ═══════════════════════════════════════════════════════════════
  // CALIFORNIA (15 cities) - Keeping existing + adding
  // ═══════════════════════════════════════════════════════════════
  createCity("Los Angeles", "California", "CA", "california", 3979576, ["Entertainment", "Tech", "Fashion", "Health & Wellness", "Music"], "Where content creators become household names", "90% of major influencer agencies are headquartered in LA"),
  createCity("San Francisco", "California", "CA", "california", 873965, ["Tech", "Venture Capital", "Biotech", "AI", "SaaS"], "The birthplace of tech marketing innovation", "SF startups receive 40% of all US venture capital"),
  createCity("San Diego", "California", "CA", "california", 1423851, ["Defense", "Biotech", "Tourism", "Craft Beer", "Tech"], "Lifestyle marketing with perfect weather year-round", "San Diego has more craft breweries per capita than any major US city"),
  createCity("San Jose", "California", "CA", "california", 1021795, ["Tech", "Hardware", "Semiconductors", "AI", "Clean Energy"], "Silicon Valley's backyard for tech creators", "San Jose residents have the highest median income of any major US city"),
  createCity("Sacramento", "California", "CA", "california", 513624, ["Government", "Healthcare", "Agriculture", "Tech", "Clean Energy"], "California's capital with farm-to-fork culture", "Sacramento is America's Farm-to-Fork Capital"),
  createCity("Oakland", "California", "CA", "california", 433031, ["Tech", "Shipping", "Healthcare", "Food", "Cannabis"], "The real Bay Area with authentic culture", "Oakland is one of the most diverse cities in America"),
  createCity("Long Beach", "California", "CA", "california", 466742, ["Shipping", "Aerospace", "Healthcare", "Tourism", "Oil"], "LA's artsy neighbor with port city energy", "Long Beach has the busiest container port in America"),
  createCity("Anaheim", "California", "CA", "california", 350365, ["Entertainment", "Tourism", "Hospitality", "Tech", "Healthcare"], "Disneyland's hometown — family entertainment capital", "Disneyland drives $8B+ in annual economic impact"),
  createCity("Fresno", "California", "CA", "california", 542107, ["Agriculture", "Healthcare", "Education", "Manufacturing", "Logistics"], "Agricultural capital of California", "Fresno County is the #1 agricultural county in the US"),
  createCity("Santa Ana", "California", "CA", "california", 310227, ["Manufacturing", "Finance", "Healthcare", "Retail", "Tech"], "Orange County's largest city", "Santa Ana is the second most densely populated city in the US"),
  createCity("Riverside", "California", "CA", "california", 314998, ["Logistics", "Education", "Healthcare", "Manufacturing", "Agriculture"], "Inland Empire's affordable California dream", "UCR is a top research university driving innovation"),
  createCity("Stockton", "California", "CA", "california", 320804, ["Agriculture", "Logistics", "Healthcare", "Manufacturing", "Retail"], "Central Valley hub with port access", "Stockton is an inland seaport with global shipping connections"),
  createCity("Irvine", "California", "CA", "california", 307670, ["Tech", "Healthcare", "Finance", "Gaming", "Biotech"], "Master-planned tech hub in Orange County", "Irvine is consistently ranked the safest large city in America"),
  createCity("Bakersfield", "California", "CA", "california", 403455, ["Energy", "Agriculture", "Logistics", "Healthcare", "Manufacturing"], "California's country music and energy capital", "Bakersfield produces more oil than any other California county"),
  createCity("Fremont", "California", "CA", "california", 241110, ["Tech", "Manufacturing", "Clean Energy", "Biotech", "Healthcare"], "Tesla country and Bay Area affordability", "Tesla's main manufacturing plant produces 600K+ vehicles annually"),

  // ═══════════════════════════════════════════════════════════════
  // COLORADO (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Denver", "Colorado", "CO", "colorado", 727211, ["Fitness & Wellness", "Outdoor Recreation", "Tech", "Content Creation", "E-commerce"], "The outdoor lifestyle and wellness content capital", "Denver is the #1 city for fitness and outdoor influencers"),
  createCity("Colorado Springs", "Colorado", "CO", "colorado", 478961, ["Military", "Tech", "Healthcare", "Tourism", "Aerospace"], "Olympic city with military and outdoor culture", "Colorado Springs is home to the US Olympic Training Center"),
  createCity("Aurora", "Colorado", "CO", "colorado", 386261, ["Healthcare", "Aerospace", "Tech", "Military", "Logistics"], "Denver metro diversity hub", "Aurora is one of the most diverse cities in the Mountain West"),
  createCity("Fort Collins", "Colorado", "CO", "colorado", 169810, ["Education", "Tech", "Craft Beer", "Healthcare", "Clean Energy"], "Craft beer capital meets university town", "Fort Collins is home to New Belgium and Odell Brewing"),
  createCity("Boulder", "Colorado", "CO", "colorado", 105485, ["Tech", "Education", "Outdoor Recreation", "Natural Products", "Research"], "Innovation hub with outdoor lifestyle", "Boulder has more startups per capita than almost any US city"),
  createCity("Lakewood", "Colorado", "CO", "colorado", 156595, ["Government", "Healthcare", "Retail", "Tech", "Manufacturing"], "Denver's western neighbor", "Lakewood is home to the Federal Center"),
  createCity("Pueblo", "Colorado", "CO", "colorado", 111876, ["Steel", "Manufacturing", "Healthcare", "Education", "Cannabis"], "Steel City of the West", "Pueblo has the lowest cost of living of any Colorado metro"),

  // ═══════════════════════════════════════════════════════════════
  // CONNECTICUT (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Hartford", "Connecticut", "CT", "connecticut", 121054, ["Insurance", "Finance", "Healthcare", "Manufacturing", "Education"], "Insurance capital of America", "Hartford is known as the Insurance Capital of the World"),
  createCity("Bridgeport", "Connecticut", "CT", "connecticut", 148654, ["Manufacturing", "Healthcare", "Finance", "Education", "Tech"], "Connecticut's largest city", "Bridgeport has a growing arts and innovation district"),
  createCity("New Haven", "Connecticut", "CT", "connecticut", 134023, ["Education", "Healthcare", "Biotech", "Tech", "Food"], "Yale University's home — pizza capital", "New Haven-style pizza is world famous"),
  createCity("Stamford", "Connecticut", "CT", "connecticut", 135470, ["Finance", "Tech", "Media", "Healthcare", "Corporate HQ"], "New York's business neighbor", "More Fortune 500 companies per capita than NYC"),
  createCity("Waterbury", "Connecticut", "CT", "connecticut", 114403, ["Manufacturing", "Healthcare", "Finance", "Education", "Retail"], "Brass City with manufacturing heritage", "Waterbury was once the brass capital of the world"),
  createCity("Norwalk", "Connecticut", "CT", "connecticut", 91184, ["Finance", "Tech", "Healthcare", "Retail", "Media"], "Gold Coast business hub", "Norwalk has a thriving creative and tech scene"),
  createCity("Danbury", "Connecticut", "CT", "connecticut", 86518, ["Healthcare", "Manufacturing", "Tech", "Retail", "Finance"], "Hat City with growing economy", "Danbury was once the hat-making capital of America"),

  // ═══════════════════════════════════════════════════════════════
  // DELAWARE (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Wilmington", "Delaware", "DE", "delaware", 70898, ["Finance", "Chemicals", "Healthcare", "Pharma", "Legal"], "Corporate capital — business-friendly HQ city", "More than 60% of Fortune 500 companies are incorporated in Delaware"),
  createCity("Dover", "Delaware", "DE", "delaware", 39403, ["Government", "Military", "Healthcare", "Education", "Retail"], "Delaware's capital with NASCAR and military", "Dover Air Force Base is one of the largest in the US"),
  createCity("Newark", "Delaware", "DE", "delaware", 33673, ["Education", "Healthcare", "Tech", "Retail", "Manufacturing"], "University of Delaware's home", "Newark has a vibrant college town atmosphere"),
  createCity("Middletown", "Delaware", "DE", "delaware", 25099, ["Retail", "Healthcare", "Finance", "Agriculture", "Tech"], "Delaware's fastest-growing city", "Middletown has grown 300% in the past two decades"),
  createCity("Bear", "Delaware", "DE", "delaware", 21190, ["Retail", "Healthcare", "Finance", "Logistics", "Manufacturing"], "New Castle County suburban hub", "Bear is a major retail and residential growth area"),

  // ═══════════════════════════════════════════════════════════════
  // FLORIDA (12 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Miami", "Florida", "FL", "florida", 467963, ["Tech", "Crypto", "Real Estate", "Nightlife", "Fashion"], "Where young entrepreneurs and creators blow up", "Miami's tech scene grew 340% since 2020 — it's the new hustle capital"),
  createCity("Tampa", "Florida", "FL", "florida", 399700, ["Tech", "E-commerce", "Healthcare", "Entrepreneurship", "Content Creation"], "Florida's business coast creator hub", "Tampa Bay is the fastest-growing tech hub in Florida"),
  createCity("Orlando", "Florida", "FL", "florida", 307573, ["Entertainment", "Content Creation", "Tech", "Tourism", "Influencer Marketing"], "Theme park capital meets creator economy", "Orlando is the most-visited city in America with 75M+ annual visitors"),
  createCity("Jacksonville", "Florida", "FL", "florida", 911507, ["Finance", "E-commerce", "Healthcare", "Content Creation", "Small Business"], "Florida's largest city with untapped creator potential", "Jacksonville is the largest city by land area in the continental US"),
  createCity("St. Petersburg", "Florida", "FL", "florida", 265351, ["Tourism", "Healthcare", "Finance", "Creative", "Tech"], "Florida's arts coast with creative community", "St. Pete has the largest collection of Salvador Dalí works outside Spain"),
  createCity("Fort Lauderdale", "Florida", "FL", "florida", 182760, ["Tourism", "Marine", "Healthcare", "Tech", "Hospitality"], "Yacht capital with luxury lifestyle content", "Fort Lauderdale has more boats per capita than anywhere else"),
  createCity("Tallahassee", "Florida", "FL", "florida", 196169, ["Government", "Education", "Healthcare", "Tech", "Research"], "Florida's capital with college town energy", "Tallahassee is home to both FSU and FAMU"),
  createCity("West Palm Beach", "Florida", "FL", "florida", 117415, ["Finance", "Real Estate", "Healthcare", "Tech", "Tourism"], "Palm Beach luxury meets business growth", "West Palm Beach has seen massive finance industry relocation"),
  createCity("Gainesville", "Florida", "FL", "florida", 141085, ["Education", "Healthcare", "Tech", "Research", "Biotech"], "University of Florida — Gator nation", "UF is a top-10 public university driving innovation"),
  createCity("Sarasota", "Florida", "FL", "florida", 57602, ["Tourism", "Healthcare", "Arts", "Real Estate", "Retail"], "Cultural coast with arts and beaches", "Sarasota has world-class arts and beautiful beaches"),
  createCity("Fort Myers", "Florida", "FL", "florida", 92245, ["Tourism", "Healthcare", "Real Estate", "Retail", "Finance"], "Southwest Florida's growing hub", "Fort Myers is one of the fastest-growing metros in America"),
  createCity("Pensacola", "Florida", "FL", "florida", 52975, ["Military", "Tourism", "Healthcare", "Aviation", "Manufacturing"], "Cradle of Naval Aviation", "Pensacola is home to the Blue Angels"),

  // ═══════════════════════════════════════════════════════════════
  // GEORGIA (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Atlanta", "Georgia", "GA", "georgia", 498715, ["Music", "Film", "Content Creation", "Influencer Marketing", "Entertainment"], "The entertainment capital of the South", "Atlanta produces more hip-hop content than any other city globally"),
  createCity("Savannah", "Georgia", "GA", "georgia", 147780, ["Tourism", "Port/Logistics", "Manufacturing", "Creative", "Healthcare"], "Historic charm meets modern creativity", "Savannah has one of the largest historic districts in the US"),
  createCity("Augusta", "Georgia", "GA", "georgia", 202081, ["Healthcare", "Military", "Manufacturing", "Tech", "Golf"], "Masters Tournament host city", "Augusta hosts the most prestigious golf tournament in the world"),
  createCity("Columbus", "Georgia", "GA", "georgia", 206922, ["Military", "Healthcare", "Manufacturing", "Finance", "Insurance"], "Fort Benning's hometown", "Columbus is home to one of the largest Army installations"),
  createCity("Macon", "Georgia", "GA", "georgia", 157346, ["Healthcare", "Education", "Music", "Manufacturing", "Logistics"], "Georgia's heart with music history", "Macon was home to Otis Redding and the Allman Brothers"),
  createCity("Athens", "Georgia", "GA", "georgia", 127315, ["Education", "Music", "Healthcare", "Tech", "Food"], "UGA and indie music capital", "Athens launched R.E.M. and the B-52s"),
  createCity("Sandy Springs", "Georgia", "GA", "georgia", 108080, ["Finance", "Healthcare", "Tech", "Corporate HQ", "Retail"], "Atlanta's corporate neighbor", "Sandy Springs has many Fortune 500 company offices"),

  // ═══════════════════════════════════════════════════════════════
  // HAWAII (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Honolulu", "Hawaii", "HI", "hawaii", 350964, ["Tourism", "Military", "Real Estate", "Healthcare", "Hospitality"], "Paradise lifestyle content that makes everyone jealous", "Hawaii receives 10M+ visitors annually seeking the island lifestyle"),
  createCity("Pearl City", "Hawaii", "HI", "hawaii", 47698, ["Military", "Retail", "Healthcare", "Education", "Service"], "Central Oahu residential hub", "Pearl City is near the historic Pearl Harbor"),
  createCity("Hilo", "Hawaii", "HI", "hawaii", 45703, ["Agriculture", "Tourism", "Education", "Healthcare", "Research"], "Big Island's rainforest city", "Hilo is near active volcanoes and rainforests"),
  createCity("Kailua", "Hawaii", "HI", "hawaii", 40514, ["Tourism", "Retail", "Healthcare", "Military", "Real Estate"], "Windward Oahu beach town", "Kailua Beach is consistently ranked among America's best"),
  createCity("Kapolei", "Hawaii", "HI", "hawaii", 21541, ["Retail", "Healthcare", "Tourism", "Tech", "Government"], "Oahu's second city", "Kapolei is Hawaii's planned second urban center"),

  // ═══════════════════════════════════════════════════════════════
  // IDAHO (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Boise", "Idaho", "ID", "idaho", 235684, ["Tech", "Agriculture", "Outdoor Recreation", "Healthcare", "Manufacturing"], "America's fastest-growing small metro", "Boise was rated the #1 city for entrepreneurs by Inc. Magazine"),
  createCity("Meridian", "Idaho", "ID", "idaho", 117635, ["Tech", "Healthcare", "Retail", "Manufacturing", "Agriculture"], "Idaho's fastest-growing city", "Meridian is the second-largest city in Idaho"),
  createCity("Nampa", "Idaho", "ID", "idaho", 100200, ["Agriculture", "Manufacturing", "Healthcare", "Retail", "Logistics"], "Treasure Valley's affordable alternative", "Nampa offers lower costs with Boise access"),
  createCity("Idaho Falls", "Idaho", "ID", "idaho", 64820, ["Energy", "Research", "Healthcare", "Agriculture", "Tech"], "Nuclear energy and research hub", "Idaho National Laboratory is nearby"),
  createCity("Pocatello", "Idaho", "ID", "idaho", 56320, ["Education", "Healthcare", "Manufacturing", "Tech", "Agriculture"], "Idaho State University's home", "Pocatello is the gateway to Yellowstone"),
  createCity("Coeur d'Alene", "Idaho", "ID", "idaho", 54628, ["Tourism", "Healthcare", "Tech", "Real Estate", "Retail"], "Lake resort town with California refugees", "Coeur d'Alene has seen massive population growth"),

  // ═══════════════════════════════════════════════════════════════
  // ILLINOIS (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Chicago", "Illinois", "IL", "illinois", 2693976, ["Content Creation", "Advertising", "Food & Beverage", "Tech", "Influencer Marketing"], "The Midwest's marketing and media powerhouse", "Chicago has the 3rd largest advertising industry in the US"),
  createCity("Aurora", "Illinois", "IL", "illinois", 180542, ["Manufacturing", "Healthcare", "Retail", "Logistics", "Finance"], "Chicago suburb with diverse community", "Aurora is the second-largest city in Illinois"),
  createCity("Naperville", "Illinois", "IL", "illinois", 149540, ["Tech", "Finance", "Healthcare", "Retail", "Education"], "Top suburb for families and professionals", "Naperville consistently ranks among best places to live"),
  createCity("Rockford", "Illinois", "IL", "illinois", 148655, ["Manufacturing", "Healthcare", "Aerospace", "Logistics", "Education"], "Illinois' third-largest city", "Rockford has a strong manufacturing heritage"),
  createCity("Joliet", "Illinois", "IL", "illinois", 150362, ["Logistics", "Manufacturing", "Healthcare", "Gaming", "Retail"], "Chicago's industrial suburb", "Joliet is a major logistics hub"),
  createCity("Springfield", "Illinois", "IL", "illinois", 114394, ["Government", "Healthcare", "Insurance", "Education", "Finance"], "Illinois capital — Land of Lincoln", "Springfield is where Lincoln began his political career"),
  createCity("Peoria", "Illinois", "IL", "illinois", 113150, ["Manufacturing", "Healthcare", "Agriculture", "Finance", "Education"], "Will it play in Peoria? Test market city", "Peoria is a famous American test market"),
  createCity("Champaign", "Illinois", "IL", "illinois", 88302, ["Education", "Tech", "Research", "Healthcare", "Agriculture"], "University of Illinois — Big Ten town", "UIUC is a top computer science school"),

  // ═══════════════════════════════════════════════════════════════
  // INDIANA (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Indianapolis", "Indiana", "IN", "indiana", 867125, ["Sports", "Motorsports", "Pharmaceuticals", "Healthcare", "Logistics"], "Sports marketing capital of the Midwest", "Indianapolis hosts more major sporting events than any US city"),
  createCity("Fort Wayne", "Indiana", "IN", "indiana", 270402, ["Manufacturing", "Healthcare", "Defense", "Insurance", "Retail"], "Northeast Indiana's growing hub", "Fort Wayne has one of the lowest costs of living of any metro"),
  createCity("Evansville", "Indiana", "IN", "indiana", 117298, ["Manufacturing", "Healthcare", "Logistics", "Finance", "Education"], "Southern Indiana's largest city", "Evansville is a regional healthcare center"),
  createCity("South Bend", "Indiana", "IN", "indiana", 103453, ["Education", "Healthcare", "Tech", "Manufacturing", "Tourism"], "Notre Dame's home — Fighting Irish", "Notre Dame football drives massive engagement"),
  createCity("Carmel", "Indiana", "IN", "indiana", 99757, ["Finance", "Healthcare", "Tech", "Corporate HQ", "Retail"], "Best suburb in America", "Carmel has more roundabouts than any US city"),
  createCity("Bloomington", "Indiana", "IN", "indiana", 79168, ["Education", "Healthcare", "Tech", "Entertainment", "Research"], "Indiana University's home", "IU has a top music school and basketball program"),
  createCity("Fishers", "Indiana", "IN", "indiana", 98977, ["Tech", "Healthcare", "Finance", "Retail", "Manufacturing"], "Indianapolis' tech suburb", "Fishers is one of the fastest-growing cities in Indiana"),

  // ═══════════════════════════════════════════════════════════════
  // IOWA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Des Moines", "Iowa", "IA", "iowa", 214133, ["Insurance", "Finance", "Agriculture", "Healthcare", "Tech"], "Insurance capital with Iowa nice authenticity", "Des Moines has more insurance company HQs than any US city"),
  createCity("Cedar Rapids", "Iowa", "IA", "iowa", 137710, ["Manufacturing", "Agriculture", "Healthcare", "Finance", "Logistics"], "Iowa's second-largest city", "Cedar Rapids is a major cereal manufacturing center"),
  createCity("Davenport", "Iowa", "IA", "iowa", 101724, ["Manufacturing", "Healthcare", "Finance", "Logistics", "Agriculture"], "Quad Cities hub", "Davenport is part of the bi-state Quad Cities region"),
  createCity("Sioux City", "Iowa", "IA", "iowa", 85797, ["Agriculture", "Manufacturing", "Healthcare", "Logistics", "Finance"], "Tri-state area hub", "Sioux City serves Iowa, Nebraska, and South Dakota"),
  createCity("Iowa City", "Iowa", "IA", "iowa", 74828, ["Education", "Healthcare", "Research", "Tech", "Publishing"], "UNESCO City of Literature", "Iowa City has the world-famous Iowa Writers' Workshop"),
  createCity("Ames", "Iowa", "IA", "iowa", 66427, ["Education", "Research", "Agriculture", "Tech", "Healthcare"], "Iowa State University's home", "ISU is a leading agricultural research university"),

  // ═══════════════════════════════════════════════════════════════
  // KANSAS (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Wichita", "Kansas", "KS", "kansas", 397532, ["Aerospace", "Manufacturing", "Healthcare", "Agriculture", "Energy"], "Air capital of the world", "More than half of all aircraft in the world have Wichita-made components"),
  createCity("Overland Park", "Kansas", "KS", "kansas", 197238, ["Tech", "Finance", "Healthcare", "Corporate HQ", "Retail"], "KC metro's business hub", "Overland Park has many Fortune 500 company offices"),
  createCity("Kansas City", "Kansas", "KS", "kansas", 156607, ["Logistics", "Manufacturing", "Healthcare", "Finance", "Automotive"], "The Kansas side of KC metro", "Kansas City KS has major automotive manufacturing"),
  createCity("Olathe", "Kansas", "KS", "kansas", 144674, ["Tech", "Healthcare", "Education", "Retail", "Manufacturing"], "KC suburb with growing tech", "Olathe has excellent schools and tech jobs"),
  createCity("Topeka", "Kansas", "KS", "kansas", 126587, ["Government", "Healthcare", "Finance", "Education", "Manufacturing"], "Kansas capital — heartland values", "Topeka is the birthplace of the Brown v. Board decision"),
  createCity("Lawrence", "Kansas", "KS", "kansas", 94934, ["Education", "Healthcare", "Tech", "Retail", "Research"], "University of Kansas — Rock Chalk", "KU basketball is legendary"),

  // ═══════════════════════════════════════════════════════════════
  // KENTUCKY (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Louisville", "Kentucky", "KY", "kentucky", 617638, ["Bourbon", "Healthcare", "Logistics", "Manufacturing", "Horse Racing"], "Bourbon, horses, and authentic Southern marketing", "Louisville produces 95% of the world's bourbon"),
  createCity("Lexington", "Kentucky", "KY", "kentucky", 323152, ["Equine", "Healthcare", "Education", "Manufacturing", "Tech"], "Horse capital meets basketball kingdom", "Lexington's horse industry is worth $4B+ annually"),
  createCity("Bowling Green", "Kentucky", "KY", "kentucky", 74557, ["Automotive", "Healthcare", "Education", "Manufacturing", "Logistics"], "Corvette's hometown", "Every Corvette is built in Bowling Green"),
  createCity("Owensboro", "Kentucky", "KY", "kentucky", 60183, ["Manufacturing", "Healthcare", "Agriculture", "Energy", "Music"], "Bluegrass music capital", "Owensboro hosts the International Bluegrass Music Association"),
  createCity("Covington", "Kentucky", "KY", "kentucky", 40961, ["Finance", "Healthcare", "Manufacturing", "Retail", "Tourism"], "Cincinnati's Kentucky neighbor", "Covington is part of greater Cincinnati"),
  createCity("Frankfort", "Kentucky", "KY", "kentucky", 28602, ["Government", "Bourbon", "Healthcare", "Tourism", "Manufacturing"], "Kentucky's capital", "Frankfort is surrounded by bourbon distilleries"),

  // ═══════════════════════════════════════════════════════════════
  // LOUISIANA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("New Orleans", "Louisiana", "LA", "louisiana", 391006, ["Tourism", "Music", "Food", "Energy", "Film"], "Where culture, food, and music create unforgettable content", "New Orleans hosts 18M+ tourists annually"),
  createCity("Baton Rouge", "Louisiana", "LA", "louisiana", 227470, ["Energy", "Petrochemical", "Education", "Healthcare", "Government"], "Louisiana's capital with SEC energy", "LSU's Death Valley is the loudest stadium in college football"),
  createCity("Shreveport", "Louisiana", "LA", "louisiana", 188987, ["Healthcare", "Gaming", "Energy", "Manufacturing", "Film"], "North Louisiana's largest city", "Shreveport has a growing film industry"),
  createCity("Lafayette", "Louisiana", "LA", "louisiana", 126185, ["Energy", "Healthcare", "Tech", "Agriculture", "Music"], "Heart of Cajun Country", "Lafayette is the hub of Cajun culture"),
  createCity("Lake Charles", "Louisiana", "LA", "louisiana", 84872, ["Energy", "Gaming", "Petrochemical", "Healthcare", "Tourism"], "Louisiana's energy coast", "Lake Charles has massive petrochemical investments"),
  createCity("Kenner", "Louisiana", "LA", "louisiana", 66702, ["Aviation", "Tourism", "Retail", "Healthcare", "Manufacturing"], "New Orleans airport city", "Kenner is home to Louis Armstrong International"),

  // ═══════════════════════════════════════════════════════════════
  // MAINE (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Portland", "Maine", "ME", "maine", 68408, ["Tourism", "Food", "Healthcare", "Maritime", "Tech"], "New England's foodie destination", "Portland has more restaurants per capita than San Francisco"),
  createCity("Lewiston", "Maine", "ME", "maine", 37104, ["Manufacturing", "Healthcare", "Education", "Retail", "Finance"], "Maine's second-largest city", "Lewiston has a revitalizing downtown"),
  createCity("Bangor", "Maine", "ME", "maine", 32029, ["Healthcare", "Education", "Retail", "Tourism", "Logistics"], "Stephen King's hometown", "Bangor is the gateway to northern Maine"),
  createCity("South Portland", "Maine", "ME", "maine", 26498, ["Retail", "Healthcare", "Manufacturing", "Finance", "Tech"], "Portland's business neighbor", "South Portland has Maine's largest mall"),
  createCity("Auburn", "Maine", "ME", "maine", 24061, ["Manufacturing", "Healthcare", "Retail", "Education", "Finance"], "Lewiston-Auburn twin city", "Auburn has a growing downtown scene"),

  // ═══════════════════════════════════════════════════════════════
  // MARYLAND (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Baltimore", "Maryland", "MD", "maryland", 585708, ["Healthcare", "Biotech", "Education", "Cybersecurity", "Finance"], "Gritty charm and authentic East Coast storytelling", "Baltimore has more public monuments than any US city"),
  createCity("Columbia", "Maryland", "MD", "maryland", 104681, ["Tech", "Healthcare", "Defense", "Finance", "Retail"], "Planned community between DC and Baltimore", "Columbia was one of America's first planned cities"),
  createCity("Germantown", "Maryland", "MD", "maryland", 91249, ["Tech", "Healthcare", "Biotech", "Government", "Retail"], "Montgomery County tech hub", "Germantown has major federal facilities nearby"),
  createCity("Silver Spring", "Maryland", "MD", "maryland", 81015, ["Tech", "Media", "Healthcare", "Government", "Retail"], "DC's diverse neighbor", "Silver Spring is a major cultural hub"),
  createCity("Rockville", "Maryland", "MD", "maryland", 68155, ["Biotech", "Tech", "Healthcare", "Government", "Finance"], "Biotech corridor hub", "Many biotech companies are headquartered in Rockville"),
  createCity("Frederick", "Maryland", "MD", "maryland", 78171, ["Biotech", "Healthcare", "Tech", "Manufacturing", "Tourism"], "Historic city with biotech growth", "Frederick has Fort Detrick and growing biotech sector"),
  createCity("Annapolis", "Maryland", "MD", "maryland", 40812, ["Government", "Tourism", "Military", "Education", "Maritime"], "Maryland's capital — sailing city", "Annapolis is home to the US Naval Academy"),

  // ═══════════════════════════════════════════════════════════════
  // MASSACHUSETTS (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Boston", "Massachusetts", "MA", "massachusetts", 692600, ["Education", "Biotech", "Healthcare", "Finance", "Tech"], "Where education meets innovation marketing", "Boston has more colleges per capita than any US city"),
  createCity("Worcester", "Massachusetts", "MA", "massachusetts", 206518, ["Healthcare", "Education", "Biotech", "Manufacturing", "Tech"], "Heart of Massachusetts with growing innovation", "Worcester has 9 colleges and universities"),
  createCity("Cambridge", "Massachusetts", "MA", "massachusetts", 118927, ["Biotech", "Education", "Tech", "Pharma", "Research"], "Harvard, MIT, and biotech powerhouse", "Cambridge has more Nobel laureates per capita than anywhere"),
  createCity("Springfield", "Massachusetts", "MA", "massachusetts", 155929, ["Healthcare", "Education", "Finance", "Manufacturing", "Insurance"], "Western Massachusetts hub", "Springfield is birthplace of basketball"),
  createCity("Lowell", "Massachusetts", "MA", "massachusetts", 115554, ["Tech", "Healthcare", "Manufacturing", "Education", "Retail"], "Mill city turned tech hub", "Lowell has UMass Lowell driving innovation"),
  createCity("Quincy", "Massachusetts", "MA", "massachusetts", 101636, ["Finance", "Healthcare", "Tech", "Shipping", "Retail"], "City of Presidents", "Quincy was home to John Adams and John Quincy Adams"),
  createCity("Newton", "Massachusetts", "MA", "massachusetts", 88414, ["Education", "Tech", "Healthcare", "Finance", "Retail"], "Boston's affluent suburb", "Newton has excellent schools and corporate offices"),
  createCity("Somerville", "Massachusetts", "MA", "massachusetts", 81045, ["Tech", "Creative", "Food", "Healthcare", "Education"], "Boston's artsy neighbor", "Somerville has a thriving creative scene"),

  // ═══════════════════════════════════════════════════════════════
  // MICHIGAN (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Detroit", "Michigan", "MI", "michigan", 639111, ["Automotive", "Tech", "Music", "Manufacturing", "Healthcare"], "The comeback city for authentic brand stories", "Detroit's tech industry has grown 400% since 2010"),
  createCity("Grand Rapids", "Michigan", "MI", "michigan", 198917, ["Furniture", "Healthcare", "Craft Beer", "Manufacturing", "Food Processing"], "Beer City USA with maker movement energy", "Grand Rapids was voted Beer City USA 7 times"),
  createCity("Ann Arbor", "Michigan", "MI", "michigan", 123851, ["Education", "Tech", "Healthcare", "Research", "Automotive"], "University of Michigan brain power", "Ann Arbor is one of the most educated cities in America"),
  createCity("Warren", "Michigan", "MI", "michigan", 139387, ["Automotive", "Manufacturing", "Healthcare", "Tech", "Defense"], "Detroit's manufacturing neighbor", "GM's technical center is in Warren"),
  createCity("Sterling Heights", "Michigan", "MI", "michigan", 134346, ["Automotive", "Manufacturing", "Healthcare", "Retail", "Tech"], "Macomb County's largest city", "Major automotive suppliers are headquartered here"),
  createCity("Lansing", "Michigan", "MI", "michigan", 118210, ["Government", "Automotive", "Education", "Healthcare", "Insurance"], "Michigan's capital", "Lansing has Michigan State nearby"),
  createCity("Dearborn", "Michigan", "MI", "michigan", 109976, ["Automotive", "Manufacturing", "Healthcare", "Education", "Tech"], "Ford's hometown", "Ford Motor Company is headquartered in Dearborn"),
  createCity("Kalamazoo", "Michigan", "MI", "michigan", 73598, ["Pharma", "Education", "Healthcare", "Manufacturing", "Brewing"], "Pharmaceutical and craft beer hub", "Pfizer started in Kalamazoo"),

  // ═══════════════════════════════════════════════════════════════
  // MINNESOTA (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Minneapolis", "Minnesota", "MN", "minnesota", 429954, ["Retail", "Healthcare", "Finance", "Food", "Creative"], "Creative Midwest hub punching above its weight", "Minneapolis has more theater seats per capita than any city except NYC"),
  createCity("Saint Paul", "Minnesota", "MN", "minnesota", 311527, ["Government", "Healthcare", "Education", "Finance", "Manufacturing"], "Minnesota's capital with historic charm", "Saint Paul has the most Victorian architecture per capita"),
  createCity("Rochester", "Minnesota", "MN", "minnesota", 121395, ["Healthcare", "Tech", "Research", "Education", "Manufacturing"], "Mayo Clinic's home", "Rochester has the world's best medical center"),
  createCity("Bloomington", "Minnesota", "MN", "minnesota", 89987, ["Retail", "Healthcare", "Tech", "Finance", "Hospitality"], "Mall of America's home", "Bloomington has America's largest mall"),
  createCity("Duluth", "Minnesota", "MN", "minnesota", 90884, ["Healthcare", "Shipping", "Tourism", "Education", "Manufacturing"], "Lake Superior port city", "Duluth has stunning natural beauty"),
  createCity("Brooklyn Park", "Minnesota", "MN", "minnesota", 86478, ["Manufacturing", "Healthcare", "Tech", "Retail", "Logistics"], "Twin Cities diverse suburb", "Brooklyn Park is one of Minnesota's most diverse cities"),
  createCity("Plymouth", "Minnesota", "MN", "minnesota", 81026, ["Tech", "Healthcare", "Finance", "Manufacturing", "Retail"], "Twin Cities corporate suburb", "Plymouth has many corporate headquarters"),

  // ═══════════════════════════════════════════════════════════════
  // MISSISSIPPI (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Jackson", "Mississippi", "MS", "mississippi", 153701, ["Government", "Healthcare", "Education", "Finance", "Manufacturing"], "Mississippi's capital with Southern soul", "Jackson is the cultural and economic hub of Mississippi"),
  createCity("Gulfport", "Mississippi", "MS", "mississippi", 72926, ["Tourism", "Gaming", "Military", "Healthcare", "Shipping"], "Gulf Coast resort city", "Gulfport has beautiful beaches and casinos"),
  createCity("Southaven", "Mississippi", "MS", "mississippi", 55026, ["Logistics", "Manufacturing", "Healthcare", "Retail", "Finance"], "Memphis suburb in Mississippi", "Southaven is Mississippi's third-largest city"),
  createCity("Hattiesburg", "Mississippi", "MS", "mississippi", 48985, ["Education", "Healthcare", "Military", "Manufacturing", "Retail"], "Hub City — university town", "Hattiesburg has two universities"),
  createCity("Biloxi", "Mississippi", "MS", "mississippi", 46586, ["Gaming", "Tourism", "Military", "Healthcare", "Fishing"], "Casino capital of the Gulf", "Biloxi has major casino resorts"),

  // ═══════════════════════════════════════════════════════════════
  // MISSOURI (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Kansas City", "Missouri", "MO", "missouri", 508090, ["Agriculture", "Logistics", "Tech", "Healthcare", "Finance"], "BBQ, jazz, and heartland creative energy", "Kansas City has more BBQ restaurants per capita than any city"),
  createCity("St. Louis", "Missouri", "MO", "missouri", 301578, ["Healthcare", "Biotech", "Finance", "Agriculture", "Manufacturing"], "Gateway to the West with startup spirit", "St. Louis has more free attractions than any US city"),
  createCity("Springfield", "Missouri", "MO", "missouri", 169176, ["Healthcare", "Education", "Manufacturing", "Retail", "Tourism"], "Bass Pro Shops hometown", "Springfield is the birthplace of Route 66"),
  createCity("Columbia", "Missouri", "MO", "missouri", 126254, ["Education", "Healthcare", "Tech", "Insurance", "Research"], "University of Missouri's home", "Columbia has Mizzou and world-class journalism school"),
  createCity("Independence", "Missouri", "MO", "missouri", 123011, ["Healthcare", "Retail", "Manufacturing", "Logistics", "Government"], "Harry Truman's hometown", "Independence is where the Oregon Trail began"),
  createCity("Lee's Summit", "Missouri", "MO", "missouri", 101108, ["Healthcare", "Education", "Retail", "Tech", "Finance"], "KC metro's family suburb", "Lee's Summit has excellent schools"),
  createCity("St. Joseph", "Missouri", "MO", "missouri", 72473, ["Healthcare", "Manufacturing", "Logistics", "Agriculture", "Education"], "Pony Express starting point", "St. Joseph has rich frontier history"),

  // ═══════════════════════════════════════════════════════════════
  // MONTANA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Billings", "Montana", "MT", "montana", 117116, ["Energy", "Healthcare", "Agriculture", "Retail", "Finance"], "Montana's largest city", "Billings is the economic hub of the region"),
  createCity("Missoula", "Montana", "MT", "montana", 75516, ["Education", "Healthcare", "Tourism", "Tech", "Timber"], "University of Montana's home", "Missoula has a thriving arts and outdoor scene"),
  createCity("Great Falls", "Montana", "MT", "montana", 60506, ["Military", "Healthcare", "Agriculture", "Manufacturing", "Energy"], "Electric City — hydropower hub", "Great Falls has Malmstrom Air Force Base"),
  createCity("Bozeman", "Montana", "MT", "montana", 53293, ["Education", "Tech", "Tourism", "Healthcare", "Agriculture"], "Montana State and outdoor mecca", "Bozeman is one of the fastest-growing micropolitan areas"),
  createCity("Helena", "Montana", "MT", "montana", 32091, ["Government", "Healthcare", "Tourism", "Education", "Finance"], "Montana's capital", "Helena was founded during the gold rush"),

  // ═══════════════════════════════════════════════════════════════
  // NEBRASKA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Omaha", "Nebraska", "NE", "nebraska", 486051, ["Finance", "Insurance", "Agriculture", "Tech", "Transportation"], "Warren Buffett's hometown", "Omaha is home to 5 Fortune 500 companies"),
  createCity("Lincoln", "Nebraska", "NE", "nebraska", 291082, ["Government", "Education", "Healthcare", "Insurance", "Tech"], "Nebraska's capital and university town", "Lincoln has University of Nebraska — Go Big Red"),
  createCity("Bellevue", "Nebraska", "NE", "nebraska", 64176, ["Military", "Tech", "Healthcare", "Retail", "Finance"], "Offutt AFB's hometown", "Bellevue has major military presence"),
  createCity("Grand Island", "Nebraska", "NE", "nebraska", 53131, ["Agriculture", "Manufacturing", "Healthcare", "Logistics", "Retail"], "Central Nebraska hub", "Grand Island is in the heart of farm country"),
  createCity("Kearney", "Nebraska", "NE", "nebraska", 33783, ["Education", "Healthcare", "Manufacturing", "Agriculture", "Retail"], "Crossroads of America", "Kearney is exactly halfway between NYC and SF"),

  // ═══════════════════════════════════════════════════════════════
  // NEVADA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Las Vegas", "Nevada", "NV", "nevada", 651319, ["Entertainment", "Hospitality", "Conventions", "Sports", "Real Estate"], "Entertainment marketing that never sleeps", "Vegas hosts 40M+ visitors annually"),
  createCity("Henderson", "Nevada", "NV", "nevada", 320189, ["Healthcare", "Tech", "Real Estate", "Retail", "Entertainment"], "Vegas adjacent with family-friendly growth", "Henderson is consistently ranked safest in America"),
  createCity("Reno", "Nevada", "NV", "nevada", 264165, ["Tech", "Gaming", "Logistics", "Tourism", "Manufacturing"], "Tahoe access with no state income tax", "Tesla, Google, and Apple have built facilities near Reno"),
  createCity("North Las Vegas", "Nevada", "NV", "nevada", 262527, ["Logistics", "Manufacturing", "Retail", "Healthcare", "Aviation"], "Vegas metro's growing hub", "North Las Vegas has major Amazon facilities"),
  createCity("Sparks", "Nevada", "NV", "nevada", 108445, ["Logistics", "Manufacturing", "Gaming", "Retail", "Tech"], "Reno's industrial neighbor", "Sparks has major distribution centers"),
  createCity("Carson City", "Nevada", "NV", "nevada", 58639, ["Government", "Healthcare", "Tourism", "Manufacturing", "Tech"], "Nevada's capital", "Carson City is near Lake Tahoe"),

  // ═══════════════════════════════════════════════════════════════
  // NEW HAMPSHIRE (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Manchester", "New Hampshire", "NH", "new-hampshire", 115644, ["Tech", "Healthcare", "Manufacturing", "Finance", "Education"], "New Hampshire's largest city", "Manchester has a thriving tech scene"),
  createCity("Nashua", "New Hampshire", "NH", "new-hampshire", 91322, ["Tech", "Healthcare", "Manufacturing", "Finance", "Retail"], "Tax-free business hub", "Nashua is on the Massachusetts border — no sales tax"),
  createCity("Concord", "New Hampshire", "NH", "new-hampshire", 44503, ["Government", "Healthcare", "Finance", "Insurance", "Education"], "New Hampshire's capital", "Concord hosts the famous presidential primary"),
  createCity("Derry", "New Hampshire", "NH", "new-hampshire", 33879, ["Tech", "Healthcare", "Manufacturing", "Retail", "Finance"], "Southern NH suburb", "Derry has easy Boston access"),
  createCity("Rochester", "New Hampshire", "NH", "new-hampshire", 32492, ["Manufacturing", "Healthcare", "Retail", "Education", "Finance"], "Seacoast region city", "Rochester is the Lilac City"),

  // ═══════════════════════════════════════════════════════════════
  // NEW JERSEY (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Newark", "New Jersey", "NJ", "new-jersey", 311549, ["Logistics", "Insurance", "Healthcare", "Finance", "Tech"], "NYC gateway with Jersey authenticity", "Newark has one of the busiest airports on the East Coast"),
  createCity("Jersey City", "New Jersey", "NJ", "new-jersey", 292449, ["Finance", "Tech", "Healthcare", "Real Estate", "Logistics"], "NYC's urban neighbor", "Jersey City has exploding tech and finance sectors"),
  createCity("Paterson", "New Jersey", "NJ", "new-jersey", 159732, ["Manufacturing", "Healthcare", "Retail", "Food", "Tech"], "Silk City with industrial heritage", "Paterson was America's first planned industrial city"),
  createCity("Elizabeth", "New Jersey", "NJ", "new-jersey", 137298, ["Logistics", "Retail", "Healthcare", "Manufacturing", "Finance"], "Port city and retail hub", "Elizabeth has major port facilities and IKEA"),
  createCity("Edison", "New Jersey", "NJ", "new-jersey", 107588, ["Tech", "Pharma", "Healthcare", "Retail", "Finance"], "Named after Thomas Edison", "Edison has diverse tech and pharma presence"),
  createCity("Trenton", "New Jersey", "NJ", "new-jersey", 90871, ["Government", "Healthcare", "Manufacturing", "Education", "Finance"], "New Jersey's capital", "Trenton makes, the world takes"),
  createCity("Princeton", "New Jersey", "NJ", "new-jersey", 31822, ["Education", "Research", "Tech", "Finance", "Pharma"], "Princeton University's home", "Princeton is an Ivy League town"),
  createCity("Hoboken", "New Jersey", "NJ", "new-jersey", 60419, ["Tech", "Finance", "Media", "Food", "Entertainment"], "NYC's hip neighbor", "Hoboken has a famous bar and restaurant scene"),

  // ═══════════════════════════════════════════════════════════════
  // NEW MEXICO (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Albuquerque", "New Mexico", "NM", "new-mexico", 564559, ["Film", "Tech", "Aerospace", "Healthcare", "Military"], "Southwest culture and film production hub", "Albuquerque has 310 days of sunshine annually"),
  createCity("Las Cruces", "New Mexico", "NM", "new-mexico", 111385, ["Education", "Healthcare", "Aerospace", "Agriculture", "Military"], "New Mexico State University's home", "Las Cruces is near White Sands and Spaceport America"),
  createCity("Rio Rancho", "New Mexico", "NM", "new-mexico", 104046, ["Tech", "Manufacturing", "Healthcare", "Retail", "Finance"], "Intel's New Mexico home", "Rio Rancho has major semiconductor manufacturing"),
  createCity("Santa Fe", "New Mexico", "NM", "new-mexico", 87505, ["Tourism", "Art", "Government", "Healthcare", "Education"], "Art capital of the Southwest", "Santa Fe has the oldest house in America"),
  createCity("Roswell", "New Mexico", "NM", "new-mexico", 48422, ["Tourism", "Agriculture", "Manufacturing", "Healthcare", "Energy"], "UFO capital of the world", "Roswell attracts alien enthusiasts globally"),

  // ═══════════════════════════════════════════════════════════════
  // NEW YORK (10 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("New York", "New York", "NY", "new-york", 8336817, ["Fashion", "Media", "Tech", "Influencer Marketing", "Entertainment"], "Dominate the world's most competitive creator market", "Home to 60,000+ influencers and the largest media industry"),
  createCity("Buffalo", "New York", "NY", "new-york", 278349, ["Healthcare", "Education", "Manufacturing", "Tech", "Finance"], "Resurgent Rust Belt city with authentic character", "Buffalo has one of the fastest-growing tech scenes"),
  createCity("Rochester", "New York", "NY", "new-york", 211328, ["Healthcare", "Education", "Tech", "Manufacturing", "Optics"], "Innovation heritage meets modern tech", "Rochester was once the tech capital of America"),
  createCity("Albany", "New York", "NY", "new-york", 99224, ["Government", "Healthcare", "Education", "Tech", "Finance"], "New York's capital with government influence", "Albany is one of the oldest cities in America"),
  createCity("Syracuse", "New York", "NY", "new-york", 148620, ["Education", "Healthcare", "Tech", "Manufacturing", "Finance"], "Syracuse University's home", "Syracuse has a growing tech corridor"),
  createCity("Yonkers", "New York", "NY", "new-york", 211569, ["Healthcare", "Retail", "Finance", "Manufacturing", "Tech"], "NYC's northern neighbor", "Yonkers is the fourth-largest city in New York"),
  createCity("White Plains", "New York", "NY", "new-york", 58461, ["Finance", "Healthcare", "Retail", "Corporate HQ", "Tech"], "Westchester's business hub", "Many corporations are headquartered in White Plains"),
  createCity("Ithaca", "New York", "NY", "new-york", 32108, ["Education", "Tech", "Research", "Healthcare", "Tourism"], "Cornell University's home", "Ithaca is gorges — literally"),
  createCity("Binghamton", "New York", "NY", "new-york", 47969, ["Education", "Healthcare", "Tech", "Manufacturing", "Finance"], "SUNY Binghamton's home", "IBM was born in the Binghamton area"),
  createCity("Schenectady", "New York", "NY", "new-york", 67047, ["Tech", "Healthcare", "Education", "Manufacturing", "Finance"], "GE's historic home", "General Electric was founded in Schenectady"),

  // ═══════════════════════════════════════════════════════════════
  // NORTH CAROLINA (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Charlotte", "North Carolina", "NC", "north-carolina", 874579, ["Finance", "Banking", "Tech", "Energy", "Healthcare"], "Banking hub with Southern creator charm", "Charlotte is the 2nd largest banking center in the US"),
  createCity("Raleigh", "North Carolina", "NC", "north-carolina", 467665, ["Tech", "Biotech", "Education", "Research", "Healthcare"], "Research Triangle innovation meets creator growth", "Raleigh-Durham has the highest concentration of PhDs"),
  createCity("Durham", "North Carolina", "NC", "north-carolina", 283506, ["Tech", "Biotech", "Education", "Healthcare", "Research"], "Research Triangle innovation with Bull City grit", "Duke University drives $1B+ annually into Durham"),
  createCity("Greensboro", "North Carolina", "NC", "north-carolina", 299035, ["Manufacturing", "Finance", "Transportation", "Healthcare", "Education"], "The Triad's growing business and sports hub", "Greensboro is the tournament capital of the ACC"),
  createCity("Winston-Salem", "North Carolina", "NC", "north-carolina", 249545, ["Healthcare", "Finance", "Education", "Arts", "Manufacturing"], "Arts, innovation, and Wake Forest excellence", "Winston-Salem has more artists per capita than most cities"),
  createCity("Fayetteville", "North Carolina", "NC", "north-carolina", 211657, ["Military", "Healthcare", "Retail", "Education", "Logistics"], "Fort Bragg's hometown — military marketing capital", "Fort Bragg is the largest military base by population"),
  createCity("Wilmington", "North Carolina", "NC", "north-carolina", 115451, ["Film", "Tourism", "Healthcare", "Tech", "Shipping"], "Hollywood East — film production hub", "Wilmington has produced major films and TV shows"),
  createCity("Asheville", "North Carolina", "NC", "north-carolina", 94067, ["Tourism", "Healthcare", "Craft Beer", "Arts", "Tech"], "Mountain town with hippie-creative energy", "Asheville is one of the top craft beer cities"),

  // ═══════════════════════════════════════════════════════════════
  // NORTH DAKOTA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Fargo", "North Dakota", "ND", "north-dakota", 125990, ["Tech", "Healthcare", "Agriculture", "Manufacturing", "Finance"], "Silicon Prairie hub", "Fargo has a thriving startup scene"),
  createCity("Bismarck", "North Dakota", "ND", "north-dakota", 74018, ["Government", "Healthcare", "Energy", "Agriculture", "Finance"], "North Dakota's capital", "Bismarck is the capital of the energy boom state"),
  createCity("Grand Forks", "North Dakota", "ND", "north-dakota", 59166, ["Education", "Military", "Healthcare", "Tech", "Agriculture"], "University of North Dakota's home", "UND has a famous aviation program"),
  createCity("Minot", "North Dakota", "ND", "north-dakota", 49587, ["Military", "Energy", "Healthcare", "Agriculture", "Retail"], "Magic City — Air Force hub", "Minot AFB is a major military installation"),
  createCity("West Fargo", "North Dakota", "ND", "north-dakota", 38626, ["Retail", "Manufacturing", "Healthcare", "Finance", "Tech"], "Fargo's growing suburb", "West Fargo is one of the fastest-growing cities"),

  // ═══════════════════════════════════════════════════════════════
  // OHIO (10 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Columbus", "Ohio", "OH", "ohio", 905748, ["Retail", "Insurance", "Education", "Healthcare", "Fashion"], "Test market capital — if it works here, it works anywhere", "Columbus is America's #1 test market"),
  createCity("Cleveland", "Ohio", "OH", "ohio", 381009, ["Healthcare", "Manufacturing", "Finance", "Tech", "Sports"], "The comeback city with championship mentality", "Cleveland is home to the Rock and Roll Hall of Fame"),
  createCity("Cincinnati", "Ohio", "OH", "ohio", 309317, ["Consumer Goods", "Retail", "Healthcare", "Finance", "Manufacturing"], "Consumer goods capital where brands are born", "P&G, Kroger, and Macy's are all headquartered here"),
  createCity("Toledo", "Ohio", "OH", "ohio", 270871, ["Manufacturing", "Healthcare", "Automotive", "Solar", "Logistics"], "Glass city with manufacturing heritage", "Toledo was once the Glass Capital of the World"),
  createCity("Akron", "Ohio", "OH", "ohio", 190469, ["Polymer", "Healthcare", "Manufacturing", "Education", "Tech"], "Rubber capital turned polymer hub", "Akron was the rubber capital of the world"),
  createCity("Dayton", "Ohio", "OH", "ohio", 137644, ["Aerospace", "Healthcare", "Manufacturing", "Defense", "Tech"], "Birthplace of aviation", "The Wright Brothers were from Dayton"),
  createCity("Parma", "Ohio", "OH", "ohio", 81601, ["Healthcare", "Manufacturing", "Retail", "Finance", "Tech"], "Cleveland's largest suburb", "Parma has strong Polish heritage"),
  createCity("Canton", "Ohio", "OH", "ohio", 70447, ["Healthcare", "Manufacturing", "Sports", "Finance", "Retail"], "Pro Football Hall of Fame's home", "Canton is the birthplace of professional football"),
  createCity("Youngstown", "Ohio", "OH", "ohio", 60068, ["Healthcare", "Manufacturing", "Education", "Tech", "Finance"], "Steel city reinventing itself", "Youngstown is making a tech comeback"),
  createCity("Lorain", "Ohio", "OH", "ohio", 65211, ["Manufacturing", "Healthcare", "Shipping", "Retail", "Education"], "Lake Erie port city", "Lorain has shipbuilding heritage"),

  // ═══════════════════════════════════════════════════════════════
  // OKLAHOMA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Oklahoma City", "Oklahoma", "OK", "oklahoma", 681054, ["Energy", "Aerospace", "Healthcare", "Agriculture", "Biotech"], "Energy industry meets heartland authenticity", "OKC has one of the lowest costs of living of any major city"),
  createCity("Tulsa", "Oklahoma", "OK", "oklahoma", 413066, ["Energy", "Aerospace", "Finance", "Healthcare", "Tech"], "Remote worker paradise paying people to move there", "Tulsa Remote pays $10K+ for remote workers to relocate"),
  createCity("Norman", "Oklahoma", "OK", "oklahoma", 128026, ["Education", "Healthcare", "Tech", "Research", "Retail"], "University of Oklahoma — Boomer Sooner", "OU has a storied football tradition"),
  createCity("Broken Arrow", "Oklahoma", "OK", "oklahoma", 113540, ["Manufacturing", "Healthcare", "Tech", "Retail", "Finance"], "Tulsa's largest suburb", "Broken Arrow is one of Oklahoma's fastest-growing"),
  createCity("Edmond", "Oklahoma", "OK", "oklahoma", 94428, ["Education", "Healthcare", "Retail", "Finance", "Tech"], "OKC's affluent suburb", "Edmond has excellent schools and safe neighborhoods"),
  createCity("Lawton", "Oklahoma", "OK", "oklahoma", 89015, ["Military", "Healthcare", "Retail", "Education", "Manufacturing"], "Fort Sill's hometown", "Lawton has major military presence"),

  // ═══════════════════════════════════════════════════════════════
  // OREGON (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Portland", "Oregon", "OR", "oregon", 654741, ["Outdoor Gear", "Craft Beer", "Tech", "Creative Services", "Sustainability"], "Authentic, indie marketing that stands out", "Portland has more independent businesses per capita"),
  createCity("Eugene", "Oregon", "OR", "oregon", 176654, ["Education", "Tech", "Athletics", "Healthcare", "Manufacturing"], "Track Town USA with outdoor culture", "Eugene is home to Nike's founding"),
  createCity("Salem", "Oregon", "OR", "oregon", 175535, ["Government", "Healthcare", "Agriculture", "Manufacturing", "Finance"], "Oregon's capital", "Salem is in the heart of wine country"),
  createCity("Gresham", "Oregon", "OR", "oregon", 114247, ["Manufacturing", "Healthcare", "Retail", "Tech", "Logistics"], "Portland's eastern neighbor", "Gresham has growing tech presence"),
  createCity("Hillsboro", "Oregon", "OR", "oregon", 106447, ["Tech", "Manufacturing", "Healthcare", "Retail", "Agriculture"], "Intel's Oregon home", "Hillsboro is the Silicon Forest hub"),
  createCity("Bend", "Oregon", "OR", "oregon", 102059, ["Tourism", "Healthcare", "Tech", "Outdoor Recreation", "Craft Beer"], "Outdoor adventure capital", "Bend has more breweries per capita than almost anywhere"),

  // ═══════════════════════════════════════════════════════════════
  // PENNSYLVANIA (10 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Philadelphia", "Pennsylvania", "PA", "pennsylvania", 1584064, ["Healthcare", "Education", "Pharmaceuticals", "Finance", "Food"], "Authentic, gritty marketing that resonates", "Philly has the fastest-growing food influencer scene"),
  createCity("Pittsburgh", "Pennsylvania", "PA", "pennsylvania", 302971, ["Tech", "Robotics", "Healthcare", "Education", "Energy"], "Steel City reinvented as a tech and robotics hub", "Pittsburgh has more bridges than any city in the world"),
  createCity("Allentown", "Pennsylvania", "PA", "pennsylvania", 126092, ["Healthcare", "Manufacturing", "Distribution", "Tech", "Retail"], "Lehigh Valley's growing business hub", "Allentown is the fastest-growing city in Pennsylvania"),
  createCity("Erie", "Pennsylvania", "PA", "pennsylvania", 94831, ["Manufacturing", "Healthcare", "Insurance", "Education", "Tourism"], "Lake Erie port city", "Erie has beautiful lake beaches"),
  createCity("Reading", "Pennsylvania", "PA", "pennsylvania", 95112, ["Healthcare", "Manufacturing", "Retail", "Finance", "Logistics"], "Outlet shopping capital", "Reading was once the outlet capital of the world"),
  createCity("Scranton", "Pennsylvania", "PA", "pennsylvania", 76997, ["Healthcare", "Education", "Tech", "Finance", "Manufacturing"], "The Office's hometown", "Scranton is Joe Biden's birthplace"),
  createCity("Bethlehem", "Pennsylvania", "PA", "pennsylvania", 75922, ["Healthcare", "Education", "Manufacturing", "Arts", "Tech"], "Steel city turned arts hub", "Bethlehem Steel site is now a casino and arts center"),
  createCity("Lancaster", "Pennsylvania", "PA", "pennsylvania", 63490, ["Healthcare", "Tourism", "Agriculture", "Manufacturing", "Education"], "Amish country charm", "Lancaster has charming downtown and Amish heritage"),
  createCity("Harrisburg", "Pennsylvania", "PA", "pennsylvania", 50099, ["Government", "Healthcare", "Insurance", "Finance", "Tech"], "Pennsylvania's capital", "Harrisburg is the seat of state government"),
  createCity("State College", "Pennsylvania", "PA", "pennsylvania", 42034, ["Education", "Research", "Tech", "Healthcare", "Retail"], "Penn State's home — We Are", "Penn State has massive football following"),

  // ═══════════════════════════════════════════════════════════════
  // RHODE ISLAND (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Providence", "Rhode Island", "RI", "rhode-island", 190934, ["Education", "Healthcare", "Design", "Manufacturing", "Tourism"], "RISD creativity meets New England charm", "Providence is home to RISD, one of the world's best design schools"),
  createCity("Warwick", "Rhode Island", "RI", "rhode-island", 82823, ["Retail", "Healthcare", "Finance", "Manufacturing", "Tourism"], "Rhode Island's second-largest city", "Warwick has the state's main airport"),
  createCity("Cranston", "Rhode Island", "RI", "rhode-island", 82934, ["Healthcare", "Manufacturing", "Retail", "Finance", "Education"], "Providence's neighbor", "Cranston has diverse neighborhoods"),
  createCity("Pawtucket", "Rhode Island", "RI", "rhode-island", 75604, ["Manufacturing", "Healthcare", "Retail", "Arts", "Tech"], "Industrial heritage city", "Pawtucket has arts district growth"),
  createCity("Newport", "Rhode Island", "RI", "rhode-island", 24854, ["Tourism", "Military", "Healthcare", "Education", "Marine"], "Gilded Age mansions and sailing", "Newport hosts world-class sailing events"),

  // ═══════════════════════════════════════════════════════════════
  // SOUTH CAROLINA (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Charleston", "South Carolina", "SC", "south-carolina", 150227, ["Tourism", "Tech", "Healthcare", "Manufacturing", "Shipping"], "Most charming city in America", "Charleston wins best US city awards constantly"),
  createCity("Columbia", "South Carolina", "SC", "south-carolina", 136632, ["Government", "Education", "Healthcare", "Military", "Insurance"], "South Carolina's capital", "Columbia has University of South Carolina"),
  createCity("North Charleston", "South Carolina", "SC", "south-carolina", 115382, ["Manufacturing", "Logistics", "Healthcare", "Aviation", "Retail"], "Boeing's East Coast home", "North Charleston has major Boeing facility"),
  createCity("Greenville", "South Carolina", "SC", "south-carolina", 72095, ["Manufacturing", "Healthcare", "Tech", "Automotive", "Finance"], "Upstate's booming city", "Greenville has won countless revitalization awards"),
  createCity("Spartanburg", "South Carolina", "SC", "south-carolina", 40598, ["Manufacturing", "Healthcare", "Education", "Automotive", "Logistics"], "BMW's US headquarters", "Spartanburg manufactures BMW vehicles"),
  createCity("Myrtle Beach", "South Carolina", "SC", "south-carolina", 35682, ["Tourism", "Healthcare", "Retail", "Real Estate", "Entertainment"], "Grand Strand resort capital", "Myrtle Beach attracts 20M+ visitors annually"),

  // ═══════════════════════════════════════════════════════════════
  // SOUTH DAKOTA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Sioux Falls", "South Dakota", "SD", "south-dakota", 195850, ["Finance", "Healthcare", "Retail", "Manufacturing", "Tech"], "South Dakota's largest city", "Sioux Falls has major credit card processing"),
  createCity("Rapid City", "South Dakota", "SD", "south-dakota", 74703, ["Tourism", "Healthcare", "Military", "Manufacturing", "Retail"], "Gateway to Mount Rushmore", "Rapid City serves 3M+ Rushmore visitors annually"),
  createCity("Aberdeen", "South Dakota", "SD", "south-dakota", 28324, ["Healthcare", "Education", "Agriculture", "Manufacturing", "Retail"], "Hub City of the Dakotas", "Aberdeen is a regional center"),
  createCity("Brookings", "South Dakota", "SD", "south-dakota", 24194, ["Education", "Agriculture", "Research", "Healthcare", "Manufacturing"], "South Dakota State University's home", "SDSU drives agricultural research"),
  createCity("Watertown", "South Dakota", "SD", "south-dakota", 22655, ["Manufacturing", "Healthcare", "Agriculture", "Retail", "Finance"], "Lake country hub", "Watertown has beautiful lake recreation"),

  // ═══════════════════════════════════════════════════════════════
  // TENNESSEE (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Nashville", "Tennessee", "TN", "tennessee", 670820, ["Music", "Content Creation", "Influencer Marketing", "Entertainment", "Tech"], "Where music artists build empires", "Nashville's music industry generates $10B+ annually"),
  createCity("Memphis", "Tennessee", "TN", "tennessee", 650100, ["Logistics", "Music", "Healthcare", "Manufacturing", "Food"], "Birthplace of rock and roll, home of authentic stories", "FedEx ships 99% of all US overnight packages through Memphis"),
  createCity("Knoxville", "Tennessee", "TN", "tennessee", 190740, ["Energy", "Education", "Healthcare", "Tourism", "Manufacturing"], "Gateway to the Smokies with Vol nation energy", "Great Smoky Mountains is the most visited national park"),
  createCity("Chattanooga", "Tennessee", "TN", "tennessee", 181099, ["Tech", "Manufacturing", "Healthcare", "Tourism", "Logistics"], "Gig City — fastest internet in America", "Chattanooga has gigabit internet citywide"),
  createCity("Clarksville", "Tennessee", "TN", "tennessee", 166722, ["Military", "Healthcare", "Education", "Retail", "Manufacturing"], "Fort Campbell's hometown", "Clarksville is Tennessee's fifth-largest city"),
  createCity("Murfreesboro", "Tennessee", "TN", "tennessee", 152769, ["Education", "Healthcare", "Retail", "Manufacturing", "Finance"], "MTSU's home — Blue Raiders", "Murfreesboro is one of the fastest-growing cities"),
  createCity("Franklin", "Tennessee", "TN", "tennessee", 83472, ["Healthcare", "Finance", "Retail", "Corporate HQ", "Entertainment"], "Nashville's affluent suburb", "Franklin has charming historic downtown"),

  // ═══════════════════════════════════════════════════════════════
  // TEXAS (15 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Houston", "Texas", "TX", "texas", 2320268, ["Tech", "Healthcare", "E-commerce", "Content Creation", "Small Business"], "Energy capital meets diverse creator economy", "Houston is the most ethnically diverse city in America"),
  createCity("Dallas", "Texas", "TX", "texas", 1343573, ["Finance", "Tech", "Retail", "Healthcare", "Real Estate"], "Where corporate meets content creator culture", "Dallas-Fort Worth has more corporate HQs than any metro except NYC"),
  createCity("Austin", "Texas", "TX", "texas", 978908, ["Tech", "Music", "Film", "Startups", "Gaming"], "Where tech meets creativity and content explodes", "Austin is the #1 city for podcast creators per capita"),
  createCity("San Antonio", "Texas", "TX", "texas", 1547253, ["Healthcare", "Tourism", "E-commerce", "Content Creation", "Small Business"], "Growing creator hub with Texas hospitality", "San Antonio is one of America's fastest-growing metros"),
  createCity("Fort Worth", "Texas", "TX", "texas", 909585, ["Aerospace", "Defense", "Healthcare", "Logistics", "Aviation"], "Where the West begins — authentic Texas marketing", "Fort Worth's Stockyards has twice-daily cattle drives"),
  createCity("El Paso", "Texas", "TX", "texas", 678815, ["Military", "Manufacturing", "Healthcare", "Trade", "Call Centers"], "Bilingual border city with cross-cultural reach", "El Paso is one of the safest large cities in America"),
  createCity("Arlington", "Texas", "TX", "texas", 398854, ["Entertainment", "Sports", "Aerospace", "Healthcare", "Automotive"], "Sports and entertainment capital of DFW", "Arlington is home to AT&T Stadium"),
  createCity("Plano", "Texas", "TX", "texas", 287677, ["Tech", "Finance", "Healthcare", "Retail", "Telecom"], "Corporate headquarters capital of Texas", "Plano has more corporate relocations from California than any Texas city"),
  createCity("Frisco", "Texas", "TX", "texas", 200509, ["Sports", "Tech", "Healthcare", "Retail", "Corporate HQ"], "Dallas Cowboys and FC Dallas home", "Frisco is one of America's fastest-growing cities"),
  createCity("Lubbock", "Texas", "TX", "texas", 263930, ["Education", "Healthcare", "Agriculture", "Manufacturing", "Retail"], "Texas Tech's home — Red Raiders", "Lubbock is the hub of West Texas"),
  createCity("Corpus Christi", "Texas", "TX", "texas", 326586, ["Energy", "Military", "Tourism", "Healthcare", "Shipping"], "Coastal Texas with beach and energy vibes", "Corpus Christi is the largest US port for crude oil exports"),
  createCity("Irving", "Texas", "TX", "texas", 256684, ["Corporate HQ", "Tech", "Healthcare", "Aviation", "Telecom"], "Las Colinas corporate hub", "Many Fortune 500 companies are in Irving"),
  createCity("Amarillo", "Texas", "TX", "texas", 200393, ["Energy", "Agriculture", "Healthcare", "Manufacturing", "Logistics"], "Texas Panhandle hub", "Amarillo is on Route 66"),
  createCity("McKinney", "Texas", "TX", "texas", 199177, ["Tech", "Healthcare", "Finance", "Retail", "Manufacturing"], "Best place to live in America", "McKinney has won countless best-of awards"),
  createCity("Waco", "Texas", "TX", "texas", 142960, ["Education", "Healthcare", "Manufacturing", "Tourism", "Tech"], "Baylor's home — Fixer Upper fame", "Chip and Joanna Gaines put Waco on the map"),

  // ═══════════════════════════════════════════════════════════════
  // UTAH (6 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Salt Lake City", "Utah", "UT", "utah", 200567, ["Tech", "Outdoor Recreation", "Healthcare", "Finance", "MLM/Direct Sales"], "Outdoor lifestyle meets tech startup energy", "Salt Lake City has the youngest average workforce in America"),
  createCity("West Valley City", "Utah", "UT", "utah", 140230, ["Manufacturing", "Healthcare", "Retail", "Tech", "Logistics"], "Salt Lake's diverse neighbor", "West Valley City is Utah's second-largest city"),
  createCity("Provo", "Utah", "UT", "utah", 115162, ["Education", "Tech", "Healthcare", "Finance", "Research"], "BYU's home — Silicon Slopes hub", "Provo has major tech startups"),
  createCity("West Jordan", "Utah", "UT", "utah", 116961, ["Tech", "Manufacturing", "Healthcare", "Retail", "Finance"], "Salt Lake County suburb", "West Jordan is one of Utah's fastest-growing"),
  createCity("Orem", "Utah", "UT", "utah", 100102, ["Tech", "Education", "Healthcare", "Retail", "Finance"], "Family City USA", "Orem has UVU and major tech presence"),
  createCity("Ogden", "Utah", "UT", "utah", 87773, ["Aerospace", "Manufacturing", "Healthcare", "Outdoor Recreation", "Education"], "Junction City — railroad heritage", "Ogden has growing outdoor industry"),

  // ═══════════════════════════════════════════════════════════════
  // VERMONT (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Burlington", "Vermont", "VT", "vermont", 45445, ["Education", "Healthcare", "Tech", "Tourism", "Food"], "Vermont's largest city — Ben & Jerry's territory", "Burlington has UVM and thriving food scene"),
  createCity("South Burlington", "Vermont", "VT", "vermont", 20292, ["Retail", "Healthcare", "Tech", "Finance", "Hospitality"], "Burlington's suburban neighbor", "South Burlington has the state's main mall"),
  createCity("Rutland", "Vermont", "VT", "vermont", 15807, ["Healthcare", "Manufacturing", "Tourism", "Retail", "Education"], "Vermont's second-largest city", "Rutland is near Killington ski resort"),
  createCity("Montpelier", "Vermont", "VT", "vermont", 8074, ["Government", "Insurance", "Healthcare", "Finance", "Education"], "Smallest US state capital", "Montpelier has no McDonald's"),
  createCity("Stowe", "Vermont", "VT", "vermont", 5227, ["Tourism", "Healthcare", "Hospitality", "Retail", "Recreation"], "Ski capital of the East", "Stowe is Vermont's premier ski destination"),

  // ═══════════════════════════════════════════════════════════════
  // VIRGINIA (8 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Virginia Beach", "Virginia", "VA", "virginia", 459470, ["Military", "Tourism", "Healthcare", "Defense", "Agriculture"], "Military families and beach lifestyle content", "Virginia Beach is home to the largest naval base in the world"),
  createCity("Richmond", "Virginia", "VA", "virginia", 226610, ["Finance", "Healthcare", "Law", "Manufacturing", "Craft Beer"], "Historic capital with modern creative energy", "Richmond has more craft breweries per capita than any East Coast city"),
  createCity("Norfolk", "Virginia", "VA", "virginia", 244703, ["Military", "Shipping", "Healthcare", "Tourism", "Education"], "Naval hub with maritime heritage", "Norfolk is home to the world's largest naval station"),
  createCity("Chesapeake", "Virginia", "VA", "virginia", 249422, ["Military", "Healthcare", "Retail", "Logistics", "Agriculture"], "Hampton Roads growth corridor", "Chesapeake is one of the fastest-growing cities in Virginia"),
  createCity("Arlington", "Virginia", "VA", "virginia", 238643, ["Government", "Defense", "Tech", "Finance", "Consulting"], "Pentagon's home — DC power suburb", "Arlington has the Pentagon and Amazon HQ2"),
  createCity("Newport News", "Virginia", "VA", "virginia", 186247, ["Shipbuilding", "Military", "Healthcare", "Manufacturing", "Tourism"], "Shipbuilding capital", "Newport News builds aircraft carriers"),
  createCity("Alexandria", "Virginia", "VA", "virginia", 159467, ["Government", "Tech", "Defense", "Tourism", "Retail"], "Historic DC neighbor", "Alexandria's Old Town is charming"),
  createCity("Roanoke", "Virginia", "VA", "virginia", 100011, ["Healthcare", "Transportation", "Manufacturing", "Education", "Tech"], "Star City of the South", "Roanoke is the largest city in western Virginia"),

  // ═══════════════════════════════════════════════════════════════
  // WASHINGTON (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Seattle", "Washington", "WA", "washington", 737015, ["Tech", "E-commerce", "Gaming", "Content Creation", "Entrepreneurship"], "Where tech giants and indie creators coexist", "Seattle has more software developers per capita than any US city"),
  createCity("Spokane", "Washington", "WA", "washington", 228989, ["Healthcare", "Education", "Agriculture", "Manufacturing", "Tech"], "Pacific Northwest outdoor lifestyle at affordable prices", "Spokane is the largest city between Seattle and Minneapolis"),
  createCity("Tacoma", "Washington", "WA", "washington", 219346, ["Military", "Shipping", "Healthcare", "Manufacturing", "Tech"], "Seattle talent without Seattle prices", "Tacoma's Museum of Glass is world-renowned"),
  createCity("Vancouver", "Washington", "WA", "washington", 190915, ["Tech", "Healthcare", "Manufacturing", "Retail", "Finance"], "Portland's Washington neighbor — no income tax", "Vancouver has Portland access without Oregon taxes"),
  createCity("Bellevue", "Washington", "WA", "washington", 151854, ["Tech", "Finance", "Retail", "Corporate HQ", "Healthcare"], "Seattle's corporate neighbor", "Many tech companies are headquartered in Bellevue"),
  createCity("Everett", "Washington", "WA", "washington", 111475, ["Aerospace", "Manufacturing", "Healthcare", "Retail", "Tech"], "Boeing's assembly home", "Everett has the largest building in the world by volume"),
  createCity("Kent", "Washington", "WA", "washington", 136588, ["Logistics", "Manufacturing", "Tech", "Healthcare", "Retail"], "Seattle's distribution hub", "Kent has major Amazon warehouses"),

  // ═══════════════════════════════════════════════════════════════
  // WEST VIRGINIA (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Charleston", "West Virginia", "WV", "west-virginia", 48864, ["Government", "Healthcare", "Energy", "Finance", "Chemical"], "West Virginia's capital", "Charleston is the largest city in West Virginia"),
  createCity("Huntington", "West Virginia", "WV", "west-virginia", 46842, ["Healthcare", "Education", "Manufacturing", "Energy", "Retail"], "Marshall University's home", "Huntington has Marshall and growing healthcare"),
  createCity("Morgantown", "West Virginia", "WV", "west-virginia", 30955, ["Education", "Healthcare", "Research", "Tech", "Energy"], "WVU's home — Mountaineers", "Morgantown is a growing tech hub"),
  createCity("Parkersburg", "West Virginia", "WV", "west-virginia", 29675, ["Manufacturing", "Healthcare", "Chemical", "Energy", "Retail"], "Ohio River city", "Parkersburg has chemical manufacturing heritage"),
  createCity("Wheeling", "West Virginia", "WV", "west-virginia", 27062, ["Healthcare", "Manufacturing", "Gaming", "Education", "Retail"], "West Virginia's first state capital", "Wheeling has gaming and healthcare growth"),

  // ═══════════════════════════════════════════════════════════════
  // WISCONSIN (7 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Milwaukee", "Wisconsin", "WI", "wisconsin", 577222, ["Beer", "Manufacturing", "Healthcare", "Financial Services", "Water Tech"], "Craft brewing capital with Midwest maker spirit", "Milwaukee produces more beer than any other US city"),
  createCity("Madison", "Wisconsin", "WI", "wisconsin", 269840, ["Biotech", "Education", "Healthcare", "Tech", "Government"], "Progressive college town with biotech strength", "UW-Madison drives $15B+ in economic impact annually"),
  createCity("Green Bay", "Wisconsin", "WI", "wisconsin", 107395, ["Manufacturing", "Healthcare", "Paper", "Food Processing", "Sports"], "Titletown USA — Packers country", "Green Bay Packers are the only publicly owned NFL team"),
  createCity("Kenosha", "Wisconsin", "WI", "wisconsin", 99944, ["Manufacturing", "Healthcare", "Education", "Retail", "Logistics"], "Between Milwaukee and Chicago", "Kenosha has Amazon and major employers"),
  createCity("Racine", "Wisconsin", "WI", "wisconsin", 77816, ["Manufacturing", "Healthcare", "Finance", "Retail", "Education"], "SC Johnson's hometown", "Racine is home to SC Johnson company"),
  createCity("Appleton", "Wisconsin", "WI", "wisconsin", 75644, ["Manufacturing", "Healthcare", "Finance", "Paper", "Education"], "Fox Valley hub", "Appleton is consistently ranked among best small cities"),
  createCity("Eau Claire", "Wisconsin", "WI", "wisconsin", 69421, ["Healthcare", "Education", "Manufacturing", "Tech", "Finance"], "Western Wisconsin hub", "Eau Claire has UW campus and growing arts scene"),

  // ═══════════════════════════════════════════════════════════════
  // WYOMING (5 cities)
  // ═══════════════════════════════════════════════════════════════
  createCity("Cheyenne", "Wyoming", "WY", "wyoming", 65132, ["Government", "Military", "Tech", "Agriculture", "Energy"], "Wyoming's capital", "Cheyenne is known for Frontier Days"),
  createCity("Casper", "Wyoming", "WY", "wyoming", 58286, ["Energy", "Healthcare", "Tourism", "Finance", "Manufacturing"], "Oil City of Wyoming", "Casper is the hub of Wyoming's energy industry"),
  createCity("Laramie", "Wyoming", "WY", "wyoming", 32158, ["Education", "Research", "Healthcare", "Tech", "Agriculture"], "University of Wyoming's home", "Laramie is at 7,200 feet elevation"),
  createCity("Gillette", "Wyoming", "WY", "wyoming", 33403, ["Energy", "Mining", "Healthcare", "Agriculture", "Retail"], "Energy capital of Wyoming", "Gillette is the coal mining hub"),
  createCity("Jackson", "Wyoming", "WY", "wyoming", 10585, ["Tourism", "Real Estate", "Hospitality", "Recreation", "Finance"], "Gateway to Yellowstone and Grand Teton", "Jackson Hole is a world-famous ski destination"),

  // ═══════════════════════════════════════════════════════════════
  // WASHINGTON DC (1)
  // ═══════════════════════════════════════════════════════════════
  createCity("Washington", "District of Columbia", "DC", "washington-dc", 689545, ["Government", "Defense", "Consulting", "Media", "Nonprofits"], "Where policy meets influence", "DC has the highest percentage of college-educated residents"),
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

