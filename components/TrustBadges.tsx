'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * TRUST BADGES - Security & Payment Indicators
 * ───────────────────────────────────────────────────────────────────
 * Displays trust signals: payment methods, SSL, guarantees
 * ═══════════════════════════════════════════════════════════════════
 */

import { Shield, Lock, CreditCard, CheckCircle } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'full' | 'compact' | 'checkout';
  className?: string;
  showGuarantee?: boolean;
}

export function TrustBadges({ 
  variant = 'full', 
  className = '',
  showGuarantee = true 
}: TrustBadgesProps) {
  
  // Compact version for footers/checkout
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        <div className="flex items-center gap-1.5 text-xs text-edst-silver/50">
          <Lock className="w-3 h-3" />
          <span>256-bit SSL</span>
        </div>
        <div className="h-3 w-px bg-edst-slate/20" />
        <div className="flex items-center gap-2 text-xs text-edst-silver/50">
          <span>Visa</span>
          <span>•</span>
          <span>MC</span>
          <span>•</span>
          <span>Amex</span>
          <span>•</span>
          <span>Discover</span>
        </div>
      </div>
    );
  }

  // Checkout version - subtle and consistent
  if (variant === 'checkout') {
    return (
      <div className={`space-y-3 ${className}`}>
        {/* Security & Payment - Single line */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-edst-silver/50">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            <span>Secure Checkout</span>
          </div>
          <span>•</span>
          <span>Visa / MC / Amex / Discover</span>
          {showGuarantee && (
            <>
              <span>•</span>
              <span>Satisfaction Guaranteed</span>
            </>
          )}
        </div>
      </div>
    );
  }

  // Full version for dedicated sections
  return (
    <section className={`py-10 px-4 bg-edst-charcoal/10 border-y border-edst-slate/10 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Secure Payments */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-sm font-medium text-edst-white mb-1">Secure Payments</span>
            <span className="text-xs text-edst-silver/60">256-bit SSL encryption</span>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-edst-white mb-1">We Accept</span>
            <span className="text-xs text-edst-silver/60">Visa, MC, Amex, Discover</span>
          </div>

          {/* Protection */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-medium text-edst-white mb-1">Protected</span>
            <span className="text-xs text-edst-silver/60">Your data is safe with us</span>
          </div>

          {/* Guarantee */}
          {showGuarantee && (
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-edst-gold/10 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-edst-gold" />
              </div>
              <span className="text-sm font-medium text-edst-white mb-1">Satisfaction</span>
              <span className="text-xs text-edst-silver/60">100% Guaranteed</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;

