/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /**
       * EDST COLOR SYSTEM - Black + Gold
       * ─────────────────────────────────────────
       * Primary: Deep blacks
       * Accent: EDST Gold (change gold hex here to update globally)
       * Green: ONLY for live/online indicators
       */
      colors: {
        // Base palette - Deep blacks
        'edst-black': '#020309',       // Primary background
        'edst-dark': '#050608',        // Alternate dark
        'edst-charcoal': '#0a0a10',    // Card backgrounds
        'edst-gray': '#101018',        // Elevated surfaces
        'edst-slate': '#1a1a24',       // Borders and dividers
        'edst-silver': '#6b7280',      // Muted text
        'edst-light': '#d1d5db',       // Secondary text
        'edst-white': '#fafafa',       // Primary text
        
        // EDST Gold accent (primary accent color)
        'edst-gold': '#FACC53',        // Primary gold
        'edst-gold-light': '#FFE082',  // Light gold for hover
        'edst-gold-dark': '#D4A846',   // Dark gold for contrast
        
        // Status colors - Green ONLY for live indicators
        'edst-online': '#22c55e',      // Online/live green
        'edst-warning': '#f59e0b',     // Warning amber
        'edst-error': '#ef4444',       // Error red
        
        // Legacy (keeping for any remnant usage, but avoid using)
        'edst-neon': '#FACC53',        // Mapped to gold now
        'edst-lime': '#22c55e',        // Mapped to online green
        'edst-purple': '#8b5cf6',      // Keep for subtle accents if needed
        'edst-blue': '#3b82f6',        // Keep for subtle accents if needed
      },
      
      /**
       * TYPOGRAPHY
       * ─────────────────────────────────────────
       */
      fontFamily: {
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      
      /**
       * SPACING
       * ─────────────────────────────────────────
       */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      
      /**
       * FONT SIZES
       * ─────────────────────────────────────────
       */
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
        '10xl': ['10rem', { lineHeight: '0.9' }],
      },
      
      /**
       * ANIMATIONS
       * ─────────────────────────────────────────
       */
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-online': 'pulseOnline 2s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'grid-flow': 'gridFlow 20s linear infinite',
        'data-stream': 'dataStream 8s linear infinite',
        'ticker': 'ticker 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'line-pulse': 'linePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(250, 204, 83, 0.4)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 35px rgba(250, 204, 83, 0.6)' },
        },
        pulseOnline: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.7' },
        },
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        dataStream: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        linePulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.8)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
      
      /**
       * BACKDROP BLUR
       * ─────────────────────────────────────────
       */
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      
      /**
       * TRANSITIONS
       * ─────────────────────────────────────────
       */
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      
      /**
       * BOX SHADOWS - Gold-based glows
       * ─────────────────────────────────────────
       */
      boxShadow: {
        'glow-gold': '0 0 30px rgba(250, 204, 83, 0.25)',
        'glow-gold-lg': '0 0 50px rgba(250, 204, 83, 0.35)',
        'glow-gold-sm': '0 0 15px rgba(250, 204, 83, 0.2)',
        'glow-online': '0 0 12px rgba(34, 197, 94, 0.4)',
        'glow-white': '0 0 30px rgba(255, 255, 255, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 50px rgba(0, 0, 0, 0.6)',
        'panel': '0 0 60px rgba(250, 204, 83, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
