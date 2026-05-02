# DoMyPooja — Next.js 16 Website

India's trusted platform for sacred, hassle-free Puja services.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build (135 static pages)
```

## Project Structure

```
app/
  page.tsx              → Homepage
  about/page.tsx        → About Us
  blog/page.tsx         → Blog
  contact/page.tsx      → Contact + FAQ
  epuja/page.tsx        → E-Puja for NRIs
  puja-services/page.tsx → All 118 services (filter + search)
  puja/[id]/page.tsx    → Individual puja detail (118 SSG pages)

components/
  layout/  → Navbar, Footer
  home/    → Hero, YagnaKunda, StatsBar, FeaturedPujas, etc.
  services/→ PujaBookingCard
  shared/  → RevealOnScroll, WhatsAppFab

data/
  services.ts → All 118 Harivara puja services with prices

public/images/
  yagna-kunda.png → Rotating hero image
```

## Yagna Kunda Rotation Fix
Uses `mix-blend-mode: multiply` on a white background container.
White × colour = colour (kunda visible), White × black = black hidden → black PNG bg disappears.

## Deploy to Vercel
```bash
npx vercel
```

## Customise
- Phone: 080-6116-0400  → your number
- WhatsApp: 919036050108 → your number  
- Email: namaste@domypooja.com → your email
