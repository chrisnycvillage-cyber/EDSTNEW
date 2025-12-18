'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { City } from '@/data/cities';

interface CityInternalLinksProps {
  currentCity: string;
  relatedCities: City[];
}

export const CityInternalLinks = ({ currentCity, relatedCities }: CityInternalLinksProps) => {
  if (!relatedCities || relatedCities.length === 0) return null;

  return (
    <section className="py-12 bg-edst-charcoal/30 border-t border-edst-slate/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-edst-gold" />
            <h3 className="text-sm font-medium text-edst-silver uppercase tracking-wider">
              Also Helping Creators In
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {relatedCities.map((city, i) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/us/${city.stateSlug}/${city.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/50 border border-edst-slate/20 text-sm text-edst-silver hover:text-edst-gold hover:border-edst-gold/30 transition-all group"
                >
                  {city.city}, {city.stateAbbr}
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Cities Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6"
          >
            <Link
              href="/us"
              className="text-xs text-edst-silver/60 hover:text-edst-gold transition-colors"
            >
              View all 100+ cities we serve →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


