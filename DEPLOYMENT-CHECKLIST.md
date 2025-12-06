# 🚀 Deployment Checklist

## Before You Deploy

### ✅ Content Updates

- [ ] **Hero Image** (800x800px)
  - Location: `src/components/Hero.tsx` line ~54
  - Replace placeholder with your professional photo
  
- [ ] **About Photos** (600x600px each)
  - Location: `src/components/About.tsx` line ~87
  - Add personal/professional photos
  
- [ ] **GUTSY Image** (600x600px)
  - Location: `src/components/Gutsy.tsx` line ~97
  - Add GUTSY brand illustration or product image

- [ ] **Email Address**
  - Location: `src/components/Contact.tsx` line ~164
  - Update `mailto:` link with your actual email
  
- [ ] **LinkedIn URL**
  - Search project for "linkedin.com/in/lakshmicnair"
  - Replace with your actual LinkedIn profile
  
- [ ] **Instagram URLs**
  - Update GUTSY Instagram handle throughout
  - Add your personal Instagram if desired

- [ ] **Blog Posts**
  - Location: `src/components/Blog.tsx` line ~10
  - Update with your actual latest Substack posts
  - Or keep as placeholders linking to Substack

### ✅ Technical Setup

- [ ] Run `npm install` successfully
- [ ] Test `npm run dev` locally
- [ ] Test all sections scroll smoothly
- [ ] Test confetti effects work
- [ ] Test modal opens/closes
- [ ] Test contact form (even if not connected yet)
- [ ] Test on mobile viewport
- [ ] Test all external links open correctly

### ✅ Optional Enhancements

- [ ] Connect contact form to email service (e.g., FormSpree, EmailJS)
- [ ] Add Google Analytics tracking code
- [ ] Set up custom domain
- [ ] Add meta image for social sharing (1200x630px)
- [ ] Add favicon (in `public/` folder)

## Deployment Steps

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✨

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
cd lakshmi-portfolio
vercel --prod
```

### Option 3: Netlify

1. Push to GitHub (see Option 1)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

## Post-Deployment

### ✅ Testing Live Site

- [ ] Visit your live URL
- [ ] Test all interactive features
- [ ] Test on different devices (phone, tablet, desktop)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all images load correctly
- [ ] Check all external links work
- [ ] Test contact form submission

### ✅ SEO & Sharing

- [ ] Update meta title and description in `src/app/layout.tsx`
- [ ] Add Open Graph image for social sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Share on LinkedIn
- [ ] Share on Instagram
- [ ] Add to your LinkedIn profile

### ✅ Maintenance

- [ ] Set up analytics to track visitors
- [ ] Update blog posts section when you publish new posts
- [ ] Keep work experience updated
- [ ] Update GUTSY section as launch approaches
- [ ] Regularly check that all links still work

## Quick Fixes

### If images don't load:
1. Make sure images are in `public/images/`
2. Reference them as `/images/filename.jpg` (with leading slash)
3. Check file names match exactly (case-sensitive)

### If fonts look wrong:
1. Check that font files are in `public/fonts/`
2. Verify paths in `src/app/globals.css`
3. Try clearing browser cache

### If animations don't work:
1. Check browser console for errors
2. Make sure you ran `npm install`
3. Try incognito window (extensions can interfere)

### If confetti doesn't appear:
1. Check that `canvas-confetti` installed correctly
2. Look for console errors
3. Try clicking on actual content (not empty space)

## Performance Optimization

After deployment, you can:

- [ ] Run Lighthouse audit (in Chrome DevTools)
- [ ] Optimize images (use WebP format)
- [ ] Add lazy loading for images
- [ ] Enable Vercel Analytics

## Custom Domain Setup

If you have a custom domain:

1. **On Vercel**:
   - Go to project settings
   - Click "Domains"
   - Add your domain
   - Update DNS records as shown

2. **DNS Records** (at your domain registrar):
   - Add A record pointing to Vercel IP
   - Or add CNAME record pointing to your-project.vercel.app

3. **SSL Certificate**:
   - Vercel automatically provisions SSL
   - Wait ~30 minutes for DNS propagation

## Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)

## Final Checklist

- [ ] All placeholder images replaced
- [ ] All contact info updated
- [ ] Site tested locally
- [ ] Code pushed to GitHub
- [ ] Site deployed to production
- [ ] Live site tested thoroughly
- [ ] Analytics set up
- [ ] Custom domain configured (optional)
- [ ] Shared on social media
- [ ] Added to LinkedIn profile

---

## 🎉 You're Live!

Once everything is checked off, you're ready to share your new portfolio with the world!

**Share it with:**
- LinkedIn connections
- Instagram followers
- Email signature
- Resume/CV
- Business cards
- Networking events

Your professional presence is now online! 🚀

---

## Need Help?

Refer to:
- `README.md` - Full documentation
- `SETUP.md` - Detailed setup guide
- `VISUAL-GUIDE.md` - Section-by-section breakdown
- `START-HERE.md` - Quick start guide

Or search for specific issues in the Next.js/Vercel community forums.

Good luck! 🌟
