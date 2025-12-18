'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Zap, TrendingUp, Building2, Sparkles } from 'lucide-react';

interface CityIntroSectionProps {
  city: string;
  state: string;
  // UNIQUE content per city - critical for SEO differentiation
  cityIntro: string;
  localContent: string;
  industries: string[];
  // For dynamic stats
  population?: number;
}

export const CityIntroSection = ({ 
  city, 
  state, 
  cityIntro, 
  localContent,
  industries,
  population = 500000
}: CityIntroSectionProps) => {
  // Calculate dynamic stats based on city population (deterministic - based on city name hash)
  const cityHash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const popInThousands = population / 1000;
  const localClients = Math.floor(popInThousands * 0.8) + (cityHash % 50);
  const localClientsStr = localClients > 1000 ? `${(localClients / 1000).toFixed(1)}K+` : `${localClients}+`;
  const campaigns = Math.floor(popInThousands * 2.5) + (cityHash % 100);
  const campaignsStr = campaigns > 1000 ? `${(campaigns / 1000).toFixed(1)}K+` : `${campaigns}+`;
  // Growth multiplier (2-5x range based on city)
  const growthMultiplier = 2 + Math.floor((cityHash % 30) / 10);
  const avgGrowth = `${growthMultiplier}-${growthMultiplier + 2}x`;
  return (
    <section className="py-16 bg-edst-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-edst-charcoal/20 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Location Tag */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold">
              <MapPin className="w-4 h-4" />
              {city}, {state}
            </span>
          </div>

          {/* City-Specific Intro - UNIQUE H2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-edst-white text-center mb-6">
            Why Creators & Brands in {city} Choose EDST
          </h2>
          
          {/* UNIQUE intro paragraph per city */}
          <p className="text-lg text-edst-silver text-center mb-8 leading-relaxed">
            {cityIntro}
          </p>

          {/* UNIQUE local content paragraph */}
          <div className="bg-edst-charcoal/20 border border-edst-slate/10 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-edst-gold flex-shrink-0 mt-1" />
              <p className="text-edst-silver leading-relaxed">
                {localContent}
              </p>
            </div>
          </div>

          {/* Quick Stats for the City - Dynamic based on population */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Users, label: 'Local Clients', value: localClientsStr, desc: `creators in ${city}` },
              { icon: TrendingUp, label: 'Avg Growth', value: avgGrowth, desc: 'follower increase' },
              { icon: Zap, label: 'Campaigns', value: campaignsStr, desc: 'launched locally' },
              { icon: MapPin, label: 'Coverage', value: '100%', desc: `${city} metro area` },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10 text-center"
              >
                <stat.icon className="w-5 h-5 text-edst-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-edst-white">{stat.value}</div>
                <div className="text-xs text-edst-silver">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* UNIQUE Industries Section - different for each city */}
          {industries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-edst-white text-center mb-4">
                Industries We Serve in {city}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {industries.map((industry, i) => (
                  <span
                    key={industry}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 text-sm text-edst-silver"
                  >
                    <Building2 className="w-3.5 h-3.5 text-edst-gold" />
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
