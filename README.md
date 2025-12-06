# Lakshmi Nair Portfolio Website

A clean, engaging, and inviting portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Interactive Elements**
- Confetti effects on clicks throughout the site
- Smooth scroll animations
- Hover effects on images and cards
- Professional experience modal popup
- Celebration confetti on form submission

🎨 **Design**
- Custom Uto font family
- Sophisticated color palette (Coral Red #FF5A5F, Navy #1B2838, Amber #FFB84D)
- Responsive design for all devices
- Clean, modern aesthetic

📱 **Sections**
- Hero with engaging tagline
- Stats showcase
- What I Do (services)
- About/Timeline
- Professional Experience (modal)
- GUTSY section
- How I Work (capabilities)
- Blog/Substack integration
- Contact form
- Footer with social links

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

### Images
Replace the placeholder text in the following components with your actual images:

1. **Hero Image** (`src/components/Hero.tsx`): 800x800px professional photo
2. **About Photos** (`src/components/About.tsx`): 600x600px personal photos
3. **GUTSY Illustration** (`src/components/Gutsy.tsx`): 600x600px brand illustration

### Content
Update the following:

1. **Contact Email**: Update in `src/components/Contact.tsx` (line with `mailto:`)
2. **LinkedIn URL**: Update in all components where it appears
3. **Instagram URL**: Update for GUTSY links
4. **Substack URL**: Already set to `https://lakshmiinprogress.substack.com`

### Colors
To change the color scheme, edit `tailwind.config.js`:

\`\`\`javascript
colors: {
  primary: '#FF5A5F',    // Main coral-red
  secondary: '#1B2838',  // Deep navy
  accent: '#FFB84D',     // Warm amber
  background: '#FCFCFC', // Off-white
  text: '#0F1419',       // Rich black
}
\`\`\`

## Project Structure

\`\`\`
lakshmi-portfolio/
├── public/
│   └── fonts/           # Uto font files
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles + font faces
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── WhatIDo.tsx
│       ├── About.tsx
│       ├── ExperienceModal.tsx
│       ├── Gutsy.tsx
│       ├── HowIWork.tsx
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── confetti.ts  # Confetti utilities
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
\`\`\`

## Interactive Features

### Confetti Effects
- **Click anywhere**: Small confetti burst at cursor position
- **Form submission**: Celebration confetti animation
- Colors match the brand palette

### Animations
- Smooth scroll to sections
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Image tilt effects
- Floating decorative elements

### Professional Experience Modal
- Opens in a clean overlay
- Expandable role sections
- Smooth animations
- Mobile-friendly

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **canvas-confetti**: Confetti effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js

For Vercel:
\`\`\`bash
npm run build
vercel --prod
\`\`\`

## License

© 2025 Lakshmi Nair. All rights reserved.
