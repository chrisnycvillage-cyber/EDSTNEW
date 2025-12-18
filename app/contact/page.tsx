'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * CONTACT PAGE - Get in Touch
 * ───────────────────────────────────────────────────────────────────
 * A beautiful, modern contact page with multiple ways to reach EDST
 * ═══════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer, FAQ } from '@/components';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-edst-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-edst-gold/[0.02] blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 text-sm text-edst-gold mb-6">
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6"
          >
            Get in Touch with
            <span className="block text-gradient-gold">EDST</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-edst-silver max-w-2xl mx-auto"
          >
            Ready to blow up your brand? Have questions about our services? 
            We're here to help you scale.
          </motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Clock, label: 'Response Time', value: '< 2 hours' },
              { icon: Users, label: 'Clients Served', value: '30K+' },
              { icon: Zap, label: 'Campaigns Active', value: '5K+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center p-4 rounded-xl bg-edst-charcoal/30 border border-edst-slate/10"
              >
                <stat.icon className="w-5 h-5 text-edst-gold mx-auto mb-2" />
                <div className="text-xl font-bold text-edst-white">{stat.value}</div>
                <div className="text-xs text-edst-silver">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-8 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10">
                <h2 className="text-2xl font-bold text-edst-white mb-2">Send a Message</h2>
                <p className="text-edst-silver text-sm mb-6">
                  Fill out the form and our team will get back to you within 2 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-edst-gold/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-edst-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-edst-white mb-2">Message Sent!</h3>
                    <p className="text-edst-silver text-sm">We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-edst-silver mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 bg-edst-charcoal/50 border border-edst-slate/30 rounded-xl text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-edst-silver mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 bg-edst-charcoal/50 border border-edst-slate/30 rounded-xl text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-edst-silver mb-1.5">Subject</label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-edst-charcoal/50 border border-edst-slate/30 rounded-xl text-edst-white text-sm focus:border-edst-gold/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="custom">Custom Campaign</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-edst-silver mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-edst-charcoal/50 border border-edst-slate/30 rounded-xl text-edst-white text-sm placeholder:text-edst-silver/50 focus:border-edst-gold/50 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-edst-gold text-edst-black font-semibold rounded-xl hover:bg-edst-gold-light transition-colors"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10">
                <h3 className="text-lg font-semibold text-edst-white mb-4">Direct Contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:support@edst.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-edst-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-edst-white group-hover:text-edst-gold transition-colors">
                        support@edst.com
                      </div>
                      <div className="text-xs text-edst-silver">Email us anytime</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://instagram.com/everydaysuccessteam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-edst-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-edst-white group-hover:text-edst-gold transition-colors">
                        @everydaysuccessteam
                      </div>
                      <div className="text-xs text-edst-silver">1.1M+ followers • DM us</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/10">
                <h3 className="text-lg font-semibold text-edst-white mb-4">Our Offices</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-edst-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-edst-white">Miami, FL</div>
                      <div className="text-xs text-edst-silver">Headquarters</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-edst-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-edst-white">Manhattan, NY</div>
                      <div className="text-xs text-edst-silver">East Coast Office</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-edst-gold/10 to-edst-gold/5 border border-edst-gold/20">
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-edst-gold" />
                  <div>
                    <h3 className="text-lg font-semibold text-edst-white">Ready to Start?</h3>
                    <p className="text-xs text-edst-silver">Skip the form and jump right in</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link
                    href="/marketing"
                    className="flex items-center justify-between p-3 rounded-xl bg-edst-black/30 hover:bg-edst-black/50 transition-colors group"
                  >
                    <span className="text-sm text-edst-white">View Pricing</span>
                    <ArrowRight className="w-4 h-4 text-edst-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href="/jointheteam"
                    className="flex items-center justify-between p-3 rounded-xl bg-edst-black/30 hover:bg-edst-black/50 transition-colors group"
                  >
                    <span className="text-sm text-edst-white">Become a Partner</span>
                    <ArrowRight className="w-4 h-4 text-edst-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href="/viral"
                    className="flex items-center justify-between p-3 rounded-xl bg-edst-black/30 hover:bg-edst-black/50 transition-colors group"
                  >
                    <span className="text-sm text-edst-white">Explore Viral Marketing</span>
                    <ArrowRight className="w-4 h-4 text-edst-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  );
}

