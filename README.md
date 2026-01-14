# Lakshmi Nair - Personal Brand Hub

A sophisticated, editorial-style personal portfolio built with Next.js 14, featuring an Instagram-native aesthetic for founders and builders.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: Formspree

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0A1128` | Primary, backgrounds |
| Cream | `#F7F3E9` | Secondary, backgrounds |
| Terracotta | `#E07A5F` | Accent, CTAs |
| Charcoal | `#2D3142` | Body text |

## Typography

- **Headlines**: Playfair Display (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Accent**: Uto (local font)

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout + metadata
│   └── page.tsx        # Main page composition
├── components/
│   ├── Navigation.tsx  # Sticky nav (About | Building | Connect)
│   ├── Hero.tsx        # Hero section with bio + CTAs
│   ├── Building.tsx    # GUTSY + Current State cards
│   ├── Timeline.tsx    # Career journey visualization
│   ├── Connect.tsx     # Contact form + social links
│   └── Footer.tsx      # Simple footer
public/
├── fonts/              # Local Uto font files
└── images/             # User photos (to be added)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). The form is pre-configured to submit to a Formspree endpoint. To set up your own:

1. Create a free account at formspree.io
2. Create a new form
3. Copy the form ID
4. Update the endpoint in `src/components/Connect.tsx`:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

Current endpoint sends to: `lachunair@gmail.com`

## Adding Photos

Place your photos in the `public/images/` directory:

- **Hero photo**: Recommended 800x1000px (4:5 aspect ratio)
- **Format**: WebP preferred, JPG as fallback
- **Style**: High contrast, editorial feel

Update the Hero component to reference your images:
```tsx
<img src="/images/hero.webp" alt="Lakshmi Nair" />
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import from GitHub: `lachunair-design/portfolio`
4. Configure:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

### Custom Domain

After deployment:
1. Go to Project Settings → Domains
2. Add: `lakshminair.co`
3. Configure DNS:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

## Environment Variables

None required for basic functionality. If adding analytics:

```env
NEXT_PUBLIC_GA_ID=your-ga-id
```

## License

Private - All rights reserved
