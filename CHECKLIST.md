# 🎯 Portfolio Launch Checklist

Use this checklist to track your progress from implementation to deployment.

---

## 📋 Pre-Launch Tasks

### Content Verification
- [x] ✅ Person profile updated (name, email, role, location)
- [x] ✅ Social links configured (GitHub, LinkedIn, Email)
- [x] ✅ Home section updated (headline, subline, featured work)
- [x] ✅ About section complete (intro, work experience, skills, education)
- [x] ✅ 7 project MDX files created
- [ ] ⏳ **Professional photo added** (`public/images/avatar.png`)
- [ ] ⏳ **Project images added** (at least cover-01.jpg for each project)
- [ ] ⏳ Optional: Blog posts written (2-3 recommended)

### Visual Assets (PRIORITY)

**Critical (Must-Have)**
- [ ] `public/images/avatar.png` → Your professional headshot (square, under 200KB)
- [ ] `public/images/projects/prapper-ai/cover-01.jpg` → Prapper AI dashboard screenshot
- [ ] `public/images/projects/ai-document-structuring-service/cover-01.jpg` → Architecture diagram
- [ ] `public/images/projects/face-mask-detection/cover-01.jpg` → App screenshot or diagram

**Important (Should-Have)**
- [ ] `public/images/projects/quark-mcp-server/cover-01.jpg` → MCP architecture
- [ ] `public/images/projects/multi-tenant-license-manager/cover-01.jpg` → Data model diagram
- [ ] `public/images/projects/keycloak-sso-migration/cover-01.jpg` → Migration flow
- [ ] `public/images/projects/publishing-performance-optimization/cover-01.jpg` → Performance charts
- [ ] `public/images/projects/spring-boot-rabbitmq-rest-api/cover-01.jpg` → Architecture

**Optional (Nice-to-Have)**
- [ ] `public/images/og/home.jpg` → Open Graph image for social sharing (1200×630px)
- [ ] Additional project images (cover-02.jpg, cover-03.jpg, etc.)

---

## 🧪 Testing Checklist

### Local Development
- [ ] Run `yarn dev` successfully
- [ ] Homepage loads without errors
- [ ] About page shows all work experience entries
- [ ] Work page displays all 7 projects
- [ ] Each project detail page loads (click through all 7)
- [ ] Social links in footer work (GitHub, LinkedIn, Email)
- [ ] Featured work link on homepage navigates correctly

### Mobile Responsiveness
- [ ] Open Chrome DevTools → Toggle device toolbar
- [ ] Test iPhone viewport (375px width)
- [ ] Test iPad viewport (768px width)
- [ ] Verify text is readable, images scale properly

### Content Accuracy
- [ ] Read through all project writeups for typos
- [ ] Verify all metrics and dates are correct
- [ ] Check that GitHub links work (personal projects)
- [ ] LinkedIn profile link is correct
- [ ] Email mailto link works

### Build Validation
- [ ] Run `yarn build` without TypeScript errors
- [ ] Run `yarn start` and verify production build works
- [ ] Check bundle size isn't excessive (Next.js will warn)

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Update `baseURL` in [once-ui.config.ts](src/resources/once-ui.config.ts) (if using custom domain)
- [ ] Create Vercel account (if deploying to Vercel)
- [ ] Push all changes to GitHub repository

### Vercel Deployment (Recommended)
- [ ] Connect GitHub repo to Vercel
- [ ] Configure build settings (Next.js auto-detected)
- [ ] Add environment variables (if any needed)
- [ ] Deploy to production
- [ ] Verify deployed site works (test all pages)
- [ ] Configure custom domain (optional)

### Alternative: Netlify
- [ ] Create Netlify account
- [ ] Connect GitHub repo
- [ ] Configure build command: `yarn build`
- [ ] Configure publish directory: `.next`
- [ ] Deploy and verify

### Post-Deployment
- [ ] Test deployed site on mobile device
- [ ] Share portfolio link with 2-3 trusted peers for feedback
- [ ] Check Google Search Console (index status)
- [ ] Test Open Graph preview on LinkedIn/Twitter

---

## 📣 Marketing Checklist (Optional but Recommended)

### Update Profiles
- [ ] Add portfolio link to GitHub profile bio
- [ ] Update LinkedIn "Featured" section with portfolio link
- [ ] Add portfolio link to resume
- [ ] Update Twitter/X bio (if applicable)

### Share Your Work
- [ ] Write LinkedIn post announcing portfolio launch
- [ ] Share individual project highlights (one post per week)
- [ ] Tweet about interesting technical challenges (thread format)
- [ ] Consider writing on Medium/Dev.to (cross-link to portfolio)

### SEO & Discoverability
- [ ] Submit sitemap to Google Search Console
- [ ] Add schema.org markup (Once UI handles this)
- [ ] Monitor search rankings for "Akash Tyagi backend engineer"
- [ ] Share on relevant Slack/Discord communities (if applicable)

---

## 🎨 Image Creation Quick Tips

### For Prapper AI Screenshots
1. Open https://prapper-ai.vercel.app/ in browser
2. Use Chrome DevTools to toggle Responsive Design Mode (Ctrl+Shift+M)
3. Set viewport to 1920×1080
4. Take screenshot of dashboard (F12 → Capture screenshot)
5. Crop to clean interface (no browser chrome)
6. Compress with TinyPNG (https://tinypng.com/)
7. Save as `cover-01.jpg` in `public/images/projects/prapper-ai/`

### For Architecture Diagrams
**Recommended Tools:**
- **Excalidraw** (https://excalidraw.com/) → Minimal, hand-drawn style
- **Draw.io** (https://app.diagrams.net/) → Professional flowcharts
- **Figma** (https://figma.com/) → Most polished results

**Diagram Checklist:**
- [ ] Use consistent colors (brand colors from Once UI theme)
- [ ] Include technology logos/icons (optional but helpful)
- [ ] Show data flow with arrows
- [ ] Highlight key metrics (e.g., "80% reduction" badge)
- [ ] Export as 16:9 aspect ratio (1920×1080px)
- [ ] Compress to under 500KB

### For GitHub Project Screenshots
1. Clone repo locally
2. Follow README to run the project
3. Capture running application (for Face Mask Detection, run the video feed)
4. Use Snipping Tool (Windows) or Screenshot (macOS)
5. Crop and compress

---

## ⚡ Quick Wins (Can Do Right Now)

1. **Add Your Photo** (5 minutes)
   - Find professional headshot
   - Crop to square
   - Compress to under 200KB
   - Save as `public/images/avatar.png`
   - Reload portfolio → See your face!

2. **Screenshot Prapper AI** (10 minutes)
   - Visit https://prapper-ai.vercel.app/
   - Take 2 screenshots (dashboard + chat)
   - Save to `public/images/projects/prapper-ai/`
   - Project now has visuals!

3. **Test the Portfolio** (5 minutes)
   - Run `yarn dev`
   - Click through every page
   - Fix any broken links
   - Verify work experience displays correctly

---

## 🏁 Definition of "Done"

Your portfolio is ready to deploy when:
- ✅ All critical images added (avatar + at least 3 project images)
- ✅ `yarn build` completes without errors
- ✅ All pages load correctly in browser
- ✅ No placeholder content visible (Selene Yu references removed)
- ✅ Social links work (GitHub, LinkedIn, Email)
- ✅ At least 1 peer has reviewed and provided feedback

---

## 📞 Need Help?

**Common Issues:**
- **Images not showing?** → Check file paths, extensions, and restart dev server
- **TypeScript errors?** → Run `yarn build` to see details, check MDX frontmatter
- **Project not appearing?** → Verify `.mdx` in correct directory, check `publishedAt` format

**Resources:**
- [Once UI Documentation](https://once-ui.com/docs) (if needed)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Vercel Deployment Docs](https://vercel.com/docs/deployments/overview)

---

**You're 90% there!** Just add images, test thoroughly, and deploy. Your portfolio content is comprehensive and professional — now make it visual. 🎨

Expected time to completion with images: **2-4 hours**.

Let's ship this! 🚀
