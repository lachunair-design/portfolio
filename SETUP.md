# Setup Guide for Cursor

## Quick Start

1. **Open in Cursor**
   - Open Cursor
   - File → Open Folder → Select `lakshmi-portfolio` folder

2. **Install Dependencies**
   Open terminal in Cursor (Ctrl+` or Cmd+`) and run:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Open http://localhost:3000 in your browser

## What's Included

### ✅ Already Done
- Complete Next.js 14 setup with TypeScript
- All components built and styled
- Framer Motion animations configured
- Confetti effects on clicks
- Professional experience modal
- Smooth scroll animations
- Custom Uto fonts loaded
- Responsive design
- Color palette applied (Coral Red, Navy, Amber)

### 📝 To Customize

#### 1. Replace Placeholder Images
Look for these placeholders in the code:

**Hero Section** (`src/components/Hero.tsx` line ~54):
\`\`\`tsx
<div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
  <p className="text-gray-400 text-center px-8">
    [Your professional photo with red background shapes here - 800x800px]
  </p>
</div>
\`\`\`

Replace with:
\`\`\`tsx
<img 
  src="/images/hero-photo.jpg" 
  alt="Lakshmi Nair"
  className="rounded-3xl overflow-hidden shadow-2xl aspect-square object-cover"
/>
\`\`\`

**About Section** (`src/components/About.tsx` line ~87):
Similar replacement for personal photos

**GUTSY Section** (`src/components/Gutsy.tsx` line ~97):
Similar replacement for GUTSY illustration

#### 2. Update Contact Information

**Email Address** (`src/components/Contact.tsx` line ~164):
\`\`\`tsx
<motion.a
  href="mailto:your-email@example.com"  // ← Update this
\`\`\`

**LinkedIn URL** (multiple files):
Search for `linkedin.com/in/lakshmicnair` and update

**Instagram URL**:
Search for `instagram.com/gutsy` and update

#### 3. Customize Content

**Blog Posts** (`src/components/Blog.tsx` line ~10):
Update the `blogPosts` array with your actual Substack posts

**Timeline** (`src/components/About.tsx` line ~7):
Edit your career timeline

**Professional Experience** (`src/components/ExperienceModal.tsx` line ~15):
Update with complete work history

## Testing Interactive Features

### Confetti
- Click anywhere on the page → Small confetti burst
- Submit contact form → Celebration confetti

### Animations
- Scroll down → Elements fade in
- Hover over cards → Lift effect
- Hover over buttons → Color shift
- Click "View Full Experience" → Modal popup

### Navigation
- Click nav items → Smooth scroll to section
- Scroll page → Nav background appears

## Adding Images

1. Create `public/images` folder
2. Add your images there
3. Reference them as `/images/filename.jpg`

Example:
\`\`\`tsx
<img src="/images/hero-photo.jpg" alt="Description" />
\`\`\`

## Color Customization

Edit `tailwind.config.js`:
\`\`\`javascript
colors: {
  primary: '#FF5A5F',    // Your main color
  secondary: '#1B2838',  // Your secondary color
  accent: '#FFB84D',     // Your accent color
}
\`\`\`

## Common Issues

**Fonts not loading?**
- Check that font files are in `public/fonts/`
- Restart dev server

**Animations not working?**
- Make sure you ran `npm install`
- Check browser console for errors

**Port 3000 already in use?**
- Run on different port: `npm run dev -- -p 3001`

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

**Vercel (Recommended)**:
1. Push code to GitHub
2. Connect to Vercel
3. Deploy

**Manual Vercel**:
\`\`\`bash
npm run build
vercel --prod
\`\`\`

## Need Help?

- Check README.md for full documentation
- Review component files for inline comments
- Test on localhost before deploying

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Replace placeholder images
4. ⬜ Update contact information
5. ⬜ Customize content
6. ⬜ Test all interactions
7. ⬜ Deploy to production

Happy coding! 🚀
