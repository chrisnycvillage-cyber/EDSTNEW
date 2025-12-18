# MCG Website — Slash-Style Redesign

A modern, luxury-minimal website built with **Next.js 14**, **TailwindCSS**, and **Framer Motion**. Inspired by Slash.com's clean aesthetic with a bold, premium feel.

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
/app
  ├── globals.css      # Global styles, CSS variables, utilities
  ├── layout.tsx       # Root layout with metadata
  └── page.tsx         # Main page (assembles all sections)

/components
  ├── index.ts         # Barrel export file
  ├── Navbar.tsx       # Fixed navigation with mobile menu
  ├── Hero.tsx         # Full viewport hero with animations
  ├── About.tsx        # Split layout about section
  ├── Services.tsx     # Offers grid
  ├── Testimonials.tsx # Social proof cards
  ├── Process.tsx      # 3-step flow
  ├── CTA.tsx          # Final call to action
  └── Footer.tsx       # Minimal footer

/public               # Static assets (add images here)
```

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to adjust the color palette:

```js
colors: {
  'mcg-black': '#0A0A0A',     // Main background
  'mcg-dark': '#111111',       // Section alternate
  'mcg-charcoal': '#1A1A1A',   // Card backgrounds
  'mcg-gray': '#2A2A2A',       // Borders, subtle elements
  'mcg-silver': '#888888',     // Secondary text
  'mcg-light': '#E5E5E5',      // Light text
  'mcg-white': '#FAFAFA',      // Primary text
  
  // Accent colors
  'mcg-blue': '#4A9ECC',       // Primary accent
  'mcg-tan': '#C4A77D',        // Warm accent (optional)
  'mcg-red': '#CC4A4A',        // Alert/emphasis (optional)
}
```

### Typography

The site uses two fonts:
- **Bebas Neue** - Headlines (display font)
- **Outfit** - Body text

To change fonts:
1. Update the Google Fonts import in `app/globals.css`
2. Update `fontFamily` in `tailwind.config.js`

### Spacing

The site uses generous spacing for a premium feel. Key classes:
- `.section-padding` - `py-24 md:py-32 lg:py-40`
- `.section-container` - `max-w-7xl mx-auto px-6 md:px-8 lg:px-12`

Adjust these in `app/globals.css` for tighter or looser layouts.

### Animations

Animations are handled via:
1. **Tailwind keyframes** in `tailwind.config.js`
2. **Framer Motion** for scroll-triggered reveals

To adjust animation speed/style, edit:
- `keyframes` in `tailwind.config.js`
- `transition` props in components using Framer Motion

---

## 📷 Adding Images

### Portrait Image (About Section)
Replace the placeholder in `components/About.tsx`:

```tsx
<Image 
  src="/your-portrait.jpg" 
  alt="MCG Portrait" 
  fill 
  className="object-cover"
/>
```

### Hero Background
To add a background image to the hero, edit `components/Hero.tsx`:

```tsx
<div 
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
/>
```

---

## ✏️ Content Updates

### Hero Section (`components/Hero.tsx`)
- Main headline: Line ~60
- Subheadline: Line ~68
- CTA button: Line ~79

### About Section (`components/About.tsx`)
- Headline: Line ~40
- Body copy: Lines ~47-55
- Stats: Lines ~58-70

### Services (`components/Services.tsx`)
- Edit the `services` array at the top of the file

### Testimonials (`components/Testimonials.tsx`)
- Edit the `testimonials` array at the top
- Update `badges` array for stats

### Process (`components/Process.tsx`)
- Edit the `steps` array

### CTA Section (`components/CTA.tsx`)
- Headlines: Lines ~52-60
- Subtext: Lines ~63-70

---

## 🔗 External Links

Update these placeholder links:
- Social links in `components/Footer.tsx`
- Apply button href in multiple components (currently `#apply`)
- Navigation links in `components/Navbar.tsx`

---

## 📱 Responsive Design

The site is fully responsive with these breakpoints:
- **Mobile**: Default styles
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

---

## 🛠 Tech Stack

- **Next.js 14** - App Router
- **TailwindCSS 3.4** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **TypeScript** - Type safety

---

## 📄 License

Private - All rights reserved.

