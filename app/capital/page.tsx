'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap,
  Building2,
  Phone,
  Mail,
  User,
  DollarSign,
  TrendingUp,
  BadgeCheck,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { LandingFooter } from '@/components/LandingFooter';

const stats = [
  { value: '$250M+', label: 'Funded' },
  { value: '5,000+', label: 'Businesses Served' },
  { value: '24hrs', label: 'Funding Time' },
  { value: '90%', label: 'Approval Rate' },
];

const processSteps = [
  { step: '01', title: 'Apply', description: 'Complete our 2-minute application', icon: User },
  { step: '02', title: 'Get Approved', description: 'Offers within hours', icon: BadgeCheck },
  { step: '03', title: 'Get Funded', description: 'Funds as fast as same day', icon: DollarSign },
];

const faqItems = [
  { question: 'What are the requirements?', answer: '6+ months in business, $10K+ monthly revenue, and a business bank account. All credit types welcome.' },
  { question: 'How fast can I get funded?', answer: 'Most clients receive funds within 24 hours of approval. Same-day funding available for qualified applicants.' },
  { question: 'Will applying affect my credit?', answer: 'No. We use a soft pull that does not impact your credit score.' },
  { question: 'Are there upfront fees?', answer: 'Never. You only pay when you receive and accept funding.' },
];

export default function CapitalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    amount: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Animate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email || !formData.phone) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-edst-black">
      {/* Custom Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-edst-black/80 backdrop-blur-xl border-b border-edst-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-edst-white">EDST</span>
              <span className="text-sm font-medium text-edst-gold">Capital</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className="hidden md:flex items-center gap-2 text-sm text-edst-silver hover:text-edst-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>Speak to Us</span>
              </a>
              <a 
                href="#apply"
                className="px-4 py-2 bg-edst-gold text-edst-black text-sm font-medium rounded-lg hover:bg-edst-gold/90 transition-colors"
              >
                Get Funded
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Form */}
      <section id="apply" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-charcoal/30 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-edst-gold/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Clean Copy */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-edst-white mb-6 leading-tight"
              >
                Business Funding<br />
                <span className="text-gradient-gold">in 24 Hours</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-edst-silver mb-8"
              >
                $10K to $1M. Fast approvals. No collateral required.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: Zap, text: 'Same-Day Approval' },
                  { icon: Shield, text: 'All Credit Types' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-edst-silver">
                    <item.icon className="w-4 h-4 text-edst-gold" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
                <div className="relative">
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-edst-gold/20 via-edst-gold/10 to-edst-gold/20 rounded-2xl blur-xl"
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-edst-charcoal/60 border border-edst-slate/20 backdrop-blur-sm">
                  {!submitted ? (
                    <>
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold text-edst-white mb-1">See If You Qualify</h2>
                        <p className="text-sm text-edst-silver">Takes less than 2 minutes</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/40" />
                          <input
                            type="text"
                            placeholder="Business Name"
                            required
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-edst-charcoal/80 border border-edst-slate/30 text-edst-white placeholder-edst-silver/40 focus:border-edst-gold/50 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/40" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-edst-charcoal/80 border border-edst-slate/30 text-edst-white placeholder-edst-silver/40 focus:border-edst-gold/50 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/40" />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-edst-charcoal/80 border border-edst-slate/30 text-edst-white placeholder-edst-silver/40 focus:border-edst-gold/50 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="relative">
                          <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/40" />
                          <select
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-edst-charcoal/80 border border-edst-slate/30 text-edst-silver focus:border-edst-gold/50 focus:outline-none transition-colors appearance-none"
                          >
                            <option value="">How much do you need?</option>
                            <option value="10-50k">$10K - $50K</option>
                            <option value="50-100k">$50K - $100K</option>
                            <option value="100-250k">$100K - $250K</option>
                            <option value="250-500k">$250K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-edst-silver/40 pointer-events-none" />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full py-4 bg-edst-gold text-edst-black font-semibold rounded-xl hover:bg-edst-gold/90 transition-all shadow-lg shadow-edst-gold/20 flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {submitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-edst-black/30 border-t-edst-black rounded-full"
                            />
                          ) : (
                            <>
                              See My Options
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>

                      <p className="text-xs text-edst-silver/50 text-center mt-4">
                        No credit impact • No obligation
                      </p>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-edst-gold/20 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-edst-gold" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-edst-white mb-2">Application Received</h3>
                      <p className="text-sm text-edst-silver mb-6">
                        A funding specialist will contact you within 2 hours.
                      </p>
                      <div className="text-xs text-edst-silver/60">
                        Check your email for confirmation
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-edst-slate/10 bg-edst-charcoal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-edst-white">{stat.value}</div>
                <div className="text-xs text-edst-silver uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do You Qualify? */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white text-center mb-8">
              Do You Qualify?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { check: '6+ months', label: 'in business' },
                { check: '$10K+', label: 'monthly revenue' },
                { check: 'Any credit', label: 'score accepted' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-edst-charcoal/30 border border-edst-slate/15 text-center"
                >
                  <div className="text-xl font-bold text-edst-gold mb-1">{item.check}</div>
                  <div className="text-sm text-edst-silver">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-sm text-edst-silver/70 mt-6"
            >
              If you meet these requirements, you likely qualify for funding up to $1M.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Animated */}
      <section className="py-20 md:py-28 border-t border-edst-slate/10 bg-edst-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Simple. Fast. <span className="text-gradient-gold">Done.</span>
            </h2>
            <p className="text-edst-silver max-w-md mx-auto">
              From application to funded in as little as 24 hours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative text-center p-6 rounded-2xl border transition-all duration-500 ${
                  activeStep === i 
                    ? 'bg-edst-gold/10 border-edst-gold/40 scale-105' 
                    : 'bg-edst-charcoal/20 border-edst-slate/15'
                }`}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-colors duration-500 ${
                    activeStep === i ? 'bg-edst-gold/20' : 'bg-edst-charcoal/40'
                  }`}
                  animate={activeStep === i ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className={`w-6 h-6 transition-colors duration-500 ${
                    activeStep === i ? 'text-edst-gold' : 'text-edst-silver'
                  }`} />
                </motion.div>
                
                <div className={`text-xs font-medium mb-2 transition-colors duration-500 ${
                  activeStep === i ? 'text-edst-gold' : 'text-edst-silver/60'
                }`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-edst-white mb-1">{step.title}</h3>
                <p className="text-sm text-edst-silver">{step.description}</p>

                {/* Progress indicator */}
                {activeStep === i && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-edst-gold origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 bg-edst-charcoal/10 border-y border-edst-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white mb-2">
              Trusted by Business Owners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { quote: 'Got approved in 3 hours and funded the next morning. Exactly what my business needed.', name: 'Marcus T.', role: 'Restaurant Owner' },
              { quote: 'The process was incredibly simple. No jumping through hoops. Just straightforward funding.', name: 'Sarah K.', role: 'E-commerce Store' },
              { quote: 'Used the funds to expand my team. Best business decision I made this year.', name: 'David L.', role: 'Agency Owner' },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-edst-charcoal/40 border border-edst-slate/15"
              >
                <p className="text-sm text-edst-light mb-4 italic">&quot;{review.quote}&quot;</p>
                <div>
                  <div className="text-sm font-medium text-edst-white">{review.name}</div>
                  <div className="text-xs text-edst-silver">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EDST Capital */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-6">
                Why <span className="text-gradient-gold">EDST Capital</span>
              </h2>
              <p className="text-edst-silver mb-8">
                We are entrepreneurs who understand the grind. That is why we built funding that actually works.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Speed', desc: 'Approved in hours, funded in days.' },
                  { title: 'Flexibility', desc: 'Use funds for any business purpose.' },
                  { title: 'Transparency', desc: 'No hidden fees. Know exactly what you pay.' },
                  { title: 'Support', desc: 'Real humans available when you need them.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle className="w-5 h-5 text-edst-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-edst-white">{item.title}</div>
                      <div className="text-sm text-edst-silver">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-edst-gold/10 rounded-full blur-2xl" />
                
                <div className="text-center mb-6">
                  <div className="text-sm text-edst-silver mb-2">Average Funding</div>
                  <div className="text-5xl font-bold text-edst-gold">$127K</div>
                  <div className="text-xs text-edst-silver mt-2">per business served</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-edst-charcoal/40 text-center">
                    <div className="text-2xl font-bold text-edst-white">4.9</div>
                    <div className="text-xs text-edst-silver">Trustpilot</div>
                  </div>
                  <div className="p-4 rounded-xl bg-edst-charcoal/40 text-center">
                    <div className="text-2xl font-bold text-edst-white">A+</div>
                    <div className="text-xs text-edst-silver">BBB Rating</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-edst-gold/5 border border-edst-gold/20">
                  <p className="text-sm text-edst-light text-center italic">
                    Got approved in 3 hours and funded the next morning. Exactly what my business needed.
                  </p>
                  <p className="text-xs text-edst-gold text-center mt-2">— Marcus T., Restaurant Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-edst-charcoal/10 border-t border-edst-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Questions?
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-edst-slate/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-edst-charcoal/20 hover:bg-edst-charcoal/30 transition-colors"
                >
                  <span className="font-medium text-edst-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-edst-gold transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-edst-charcoal/20">
                    <p className="text-sm text-edst-silver leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Ready to Grow?
            </h2>
            <p className="text-lg text-edst-silver mb-8 max-w-md mx-auto">
              Join 1,500+ businesses funded through EDST Capital.
            </p>
            <a 
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-edst-gold text-edst-black font-semibold rounded-xl hover:bg-edst-gold/90 transition-all shadow-lg shadow-edst-gold/20"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <LandingFooter />
    </main>
  );
}
