'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, FileText, CreditCard, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-edst-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-charcoal/30 to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms, Privacy & <span className="text-gradient-gold">Policies</span>
            </h1>
            <p className="text-edst-silver">
              Last Updated: November 30, 2023
            </p>
          </motion.div>

          {/* Quick Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            <button
              onClick={() => scrollToSection('terms')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors"
            >
              <FileText className="w-4 h-4 text-edst-gold" />
              <span className="text-sm text-edst-white">Terms of Service</span>
            </button>
            <button
              onClick={() => scrollToSection('privacy')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors"
            >
              <Shield className="w-4 h-4 text-edst-gold" />
              <span className="text-sm text-edst-white">Privacy Policy</span>
            </button>
            <button
              onClick={() => scrollToSection('cancellation')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors"
            >
              <CreditCard className="w-4 h-4 text-edst-gold" />
              <span className="text-sm text-edst-white">Cancellation Policy</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Terms of Service */}
            <motion.div
              id="terms"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-edst-gold/10 border border-edst-gold/20">
                  <FileText className="w-6 h-6 text-edst-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Terms of Service</h2>
              </div>

              <div className="prose prose-invert prose-sm max-w-none space-y-8">
                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Introduction</h3>
                  <p className="text-edst-silver leading-relaxed">
                    All intellectual property rights in our Services, including, without limitation, all software, text, graphics, logos, images, and other content, are owned by EDST or its licensors and are protected by applicable intellectual property laws. Except as expressly permitted by these Terms, you may not reproduce, modify, transmit, distribute, or otherwise use our Services, or any portion thereof, in any form or by any means.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Eligibility and Account Registration</h3>
                  <p className="text-edst-silver leading-relaxed">
                    To use our Services, you must be at least 18 years of age, possess the legal capacity to enter into a binding agreement, and not be barred from using our Services under applicable law. You may be required to create an account with EDST and provide certain information about yourself to access or use certain features of our Services. You agree to provide accurate, current, and complete information during the registration process and to update such information as needed. You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account. You agree to notify EDST immediately of any unauthorized use of your account or any other breach of security.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Use of Services</h3>
                  <p className="text-edst-silver leading-relaxed mb-4">
                    Subject to these Terms, EDST grants you a limited, non-exclusive, non-transferable, and revocable license to use our Services for your personal or internal business purposes, as applicable. You agree not to use our Services for any other purpose, including, without limitation, any commercial purpose, without the prior written consent of EDST.
                  </p>
                  <p className="text-edst-silver leading-relaxed mb-3">You agree not to use our Services in any manner that:</p>
                  <ul className="list-disc list-inside space-y-2 text-edst-silver">
                    <li>Violates any applicable law, regulation, or court order</li>
                    <li>Infringes upon the rights of any third party, including intellectual property rights</li>
                    <li>Is abusive, harassing, defamatory, obscene, or otherwise offensive</li>
                    <li>Interferes with or disrupts the operation of our Services</li>
                    <li>Involves the unauthorized use, access, or distribution of any data</li>
                    <li>Involves the use of any automated system or software to extract data</li>
                    <li>Attempts to gain unauthorized access to any part of our Services</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Compensation of Contractors and Referral Partners</h3>
                  <p className="text-edst-silver leading-relaxed mb-4">
                    EveryDay Success Team LLC ("EDST") engages a network of contractors and referral partners, who are compensated primarily through commission-based structures.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-edst-silver">
                    <li><strong className="text-edst-white">General Compensation Framework:</strong> Contractors and referral partners are compensated based on a commission model, determined by performance metrics as predefined by EDST.</li>
                    <li><strong className="text-edst-white">Right to Modify Compensation Terms:</strong> EDST retains sole discretion to modify, revise, or update the compensation structure at any time.</li>
                    <li><strong className="text-edst-white">Notification of Changes:</strong> EDST commits to providing timely notification to all affected parties prior to implementing changes.</li>
                    <li><strong className="text-edst-white">Independent Contractor Status:</strong> Contractors and referral partners operate as independent entities and not as employees of EDST.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Intellectual Property Rights</h3>
                  <p className="text-edst-silver leading-relaxed">
                    All intellectual property rights in our Services, including all software, text, graphics, logos, images, and other content, are owned by EDST or its licensors and are protected by applicable intellectual property laws.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">User Content</h3>
                  <p className="text-edst-silver leading-relaxed">
                    You are solely responsible for any content that you create, transmit, or display while using our Services ("User Content"). By submitting User Content, you grant EDST a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such User Content in connection with our Services and for the promotion of EDST's business, products, and services.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Disclaimers & Limitation of Liability</h3>
                  <p className="text-edst-silver leading-relaxed mb-4">
                    Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. EDST does not warrant that the Services will be uninterrupted, error-free, secure, or free of viruses. Your use of our Services is at your sole risk.
                  </p>
                  <p className="text-edst-silver leading-relaxed">
                    To the fullest extent permitted by applicable law, EDST will not be liable for any direct, indirect, incidental, special, consequential, punitive, or exemplary damages resulting from your access to or use of our Services.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Contact Information</h3>
                  <p className="text-edst-silver leading-relaxed">
                    If you have any questions or concerns about these Terms, please contact us at{' '}
                    <a href="mailto:support@edst.com" className="text-edst-gold hover:underline">support@edst.com</a>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-edst-gold/20 to-transparent" />

            {/* Privacy Policy */}
            <motion.div
              id="privacy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-edst-gold/10 border border-edst-gold/20">
                  <Shield className="w-6 h-6 text-edst-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Privacy Policy</h2>
              </div>

              <div className="prose prose-invert prose-sm max-w-none space-y-8">
                <p className="text-edst-silver leading-relaxed">
                  EveryDay Success Team LLC ("EDST", "we", "us", or "our") is committed to protecting the privacy of our users. This Privacy Policy applies to all EDST SaaS products, services, and websites (collectively, the "Services") and outlines how we collect, use, and disclose your information.
                </p>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Information We Collect</h3>
                  <ul className="list-disc list-inside space-y-3 text-edst-silver">
                    <li><strong className="text-edst-white">Personal Information:</strong> When you sign up for our Services, we may collect personal information such as your name, email address, phone number, and payment information. We may also collect information about your business.</li>
                    <li><strong className="text-edst-white">Usage Information:</strong> We collect information about your use of our Services, including the type of device you use, the pages you visit, and the actions you take on our platform.</li>
                    <li><strong className="text-edst-white">Cookies and Tracking Technologies:</strong> We use cookies and other tracking technologies, including Google Analytics, to collect information about your browsing activity.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-edst-silver">
                    <li>To provide and maintain our Services, including customer support</li>
                    <li>To improve the performance and functionality of our Services</li>
                    <li>To personalize your experience on our platform</li>
                    <li>To send you promotional materials and newsletters</li>
                    <li>To comply with legal requirements</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">How We Share Your Information</h3>
                  <p className="text-edst-silver leading-relaxed mb-3">
                    We do not sell, rent, or trade your personal information with third parties. However, we may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-edst-silver">
                    <li>Service providers who assist us in providing our Services</li>
                    <li>Our business partners and affiliates</li>
                    <li>Legal and regulatory authorities, if required by law</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Your Choices and Rights</h3>
                  <p className="text-edst-silver leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us at{' '}
                    <a href="mailto:support@edst.com" className="text-edst-gold hover:underline">support@edst.com</a>.
                    You may also opt-out of receiving promotional communications from us.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Security</h3>
                  <p className="text-edst-silver leading-relaxed">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is 100% secure.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Children's Privacy</h3>
                  <p className="text-edst-silver leading-relaxed">
                    Our Services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-edst-gold/20 to-transparent" />

            {/* Cancellation Policy */}
            <motion.div
              id="cancellation"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-edst-gold/10 border border-edst-gold/20">
                  <CreditCard className="w-6 h-6 text-edst-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Cancellation Policy</h2>
              </div>

              <div className="prose prose-invert prose-sm max-w-none space-y-8">
                <p className="text-edst-silver leading-relaxed">
                  This Cancellation Policy governs the cancellation and refund procedures for SaaS products and marketing services provided by EveryDay Success Team LLC ("EDST").
                </p>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Account Cancellation</h3>
                  <p className="text-edst-silver leading-relaxed mb-4">
                    To cancel your account with EDST, you must provide a written cancellation request via email to our support team at{' '}
                    <a href="mailto:support@edst.com" className="text-edst-gold hover:underline">support@edst.com</a>.
                    Please include your account information and the reason for your cancellation. Upon receipt, we will process it within 48 hours.
                  </p>
                  <div className="p-4 rounded-lg bg-edst-gold/10 border border-edst-gold/20">
                    <p className="text-sm text-edst-white">
                      <strong>Important:</strong> Account cancellations must be submitted at least <strong>three (3) business days</strong> before your next billing cycle. If you submit your cancellation request less than 3 business days before your next billing cycle, you will be charged for the upcoming month.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Refund Policy</h3>
                  <p className="text-edst-silver leading-relaxed mb-4">
                    Due to the customized nature of our services, including but not limited to marketing, public relations, content creation, advertising, and software solutions, <strong className="text-edst-white">all services provided by EveryDay Success Team LLC are non-refundable</strong>.
                  </p>
                  <p className="text-edst-silver leading-relaxed">
                    While our services are non-refundable, we are deeply committed to ensuring the highest level of client satisfaction. Should you have any concerns or issues regarding the services rendered, we encourage you to contact us promptly.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Termination by EDST</h3>
                  <p className="text-edst-silver leading-relaxed">
                    We reserve the right to terminate your account without prior notice if you violate any terms and conditions of our Terms of Service or this Cancellation Policy. In the event of account termination by EDST, you will not be entitled to a refund for any unused portion of your subscription.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10">
                  <h3 className="text-lg font-semibold text-edst-gold mb-3">Contact Information</h3>
                  <p className="text-edst-silver leading-relaxed">
                    If you have any questions or concerns about this Cancellation Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-lg bg-edst-charcoal/30">
                    <p className="text-edst-white font-medium">EveryDay Success Team LLC</p>
                    <a href="mailto:support@edst.com" className="text-edst-gold hover:underline">support@edst.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-edst-gold text-edst-black shadow-lg hover:bg-edst-gold-light transition-colors z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <Footer />
    </main>
  );
}
