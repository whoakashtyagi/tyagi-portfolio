# Portfolio Implementation Summary

## ✅ What's Been Implemented

### 1. Core Content Configuration ([content.tsx](src/resources/content.tsx))

**Person Profile**
- Name: Akash Tyagi
- Role: Backend Engineer
- Email: akashttyagi21@gmail.com
- Location: Asia/Kolkata
- Languages: English, Hindi

**Social Links**
- GitHub: https://github.com/whoakashtyagi
- LinkedIn: https://www.linkedin.com/in/akashtyagi21/
- Email: akashttyagi21@gmail.com

**Home Section**
- Headline: "I design systems. Not just code."
- Subline: Backend engineer with 4+ years, distributed systems focus
- Featured work: AI Document Structuring Service (80% faster onboarding)
- Stat strip: 4+ years, 3× performance, 80% reduction, 25-50% delivery savings

**About Section**
- **Introduction**: Systems thinking philosophy, Java primary but language-agnostic approach, ECE background
- **Work Experience**: 4 roles at Quark with detailed achievements
  - Software Specialist (Jul 2025-Present): AI Document Structuring, MCP Server, SDLC ownership
  - Software Engineer II (Jul 2024-Jul 2025): Library Suite, SSO Migration (Keycloak), License Manager (2× Employee of Quarter)
  - Software Engineer I (Jul 2022-Jul 2024): 3× Performance, Asset Branching, 12+ peer awards
  - R&D Intern (Jan 2022-Jul 2022): DocuSign, Automation Channel, Production Support
- **Education & Certifications**:
  - B.Eng ECE, Punjab University (2018-2022, CGPA 7.9)
  - Microsoft Certified: Azure AI Engineer Associate
  - Microsoft Azure AI Essentials Professional Certificate
  - Building Scalable Java Microservices — Google Cloud
- **Technical Skills**: 7 skill categories (Backend, Spring, Cloud, Databases, AI/LLM, Messaging, APIs/Auth)

**Other Sections**
- Newsletter: Disabled (can be enabled later)
- Gallery: Disabled (can be enabled with architecture diagrams or personal photos)
- Blog: Configured with backend engineering focus
- Work: Configured with project listings

### 2. Project MDX Files (7 Projects in `src/app/work/projects/`)

**Production Projects (Quark)**
1. **prapper-ai.mdx** — Full-stack AI agent builder platform (personal flagship)
2. **ai-document-structuring-service.mdx** — 80% onboarding time reduction
3. **quark-mcp-server.mdx** — AI agent integration via MCP
4. **multi-tenant-license-manager.mdx** — Vendor replacement, Employee of Quarter
5. **keycloak-sso-migration.mdx** — Zero-downtime SSO, Employee of Quarter
6. **publishing-performance-optimization.mdx** — 3× performance boost via profiling

**Personal Projects (GitHub)**
7. **spring-boot-rabbitmq-rest-api.mdx** — Messaging template for learning
8. **face-mask-detection.mdx** — COVID-era CV/ML project (Python)

Each project includes:
- Comprehensive technical writeups (problem, solution, architecture, challenges, results)
- Engineering decision rationales
- Lessons learned
- Tech stack details
- Links to GitHub repos where applicable

### 3. Configuration Updates

**[once-ui.config.ts](src/resources/once-ui.config.ts)**
- Gallery route disabled (can be re-enabled later)
- Protected routes removed (no password-protected pages currently)
- baseURL marked for update when deploying to production

### 4. Directory Structure Created

Image directories created for all 8 projects:
```
public/images/projects/
├── prapper-ai/
├── ai-document-structuring-service/
├── quark-mcp-server/
├── multi-tenant-license-manager/
├── keycloak-sso-migration/
├── publishing-performance-optimization/
├── spring-boot-rabbitmq-rest-api/
└── face-mask-detection/
```

Each directory includes a README.md with guidance on what images to add.

---

## 🔴 What Still Needs To Be Done

### 1. Add Your Professional Photo

**File**: `public/images/avatar.png`

- Replace the existing placeholder with your professional headshot
- **Specifications**:
  - Square aspect ratio (e.g., 800×800px)
  - Professional attire
  - Clean background
  - High quality (not blurry or pixelated)
  - File size: Under 200KB (compress if needed)

### 2. Add Project Images

Each project MDX file references images that need to be added to the corresponding directories.

**Priority Projects** (Add images first):
1. **prapper-ai** → Screenshots from https://prapper-ai.vercel.app/
   - Dashboard, chat interface, document processing
   - 2 images minimum (cover-01.jpg, cover-02.jpg)

2. **ai-document-structuring-service** → Architecture diagram
   - Show: Document → Azure AI → Mapping → Quark Schema
   - Highlight: 80% time reduction metric
   - 1-2 images (cover-01.jpg)

3. **face-mask-detection** → Application screenshot or flow diagram
   - Show: Face detection with bounding boxes
   - OR: System flow diagram
   - 1 image (cover-01.jpg)

**For Production Quark Projects** (Architecture Diagrams):
- Use Draw.io, Excalidraw, Figma, or PowerPoint
- Create clean system architecture diagrams
- Show component interactions and tech stack
- Export as 16:9 aspect ratio PNG/JPG

**Image Naming Convention**:
- Primary: `cover-01.jpg`
- Secondary: `cover-02.jpg`, `cover-03.jpg`, etc.
- All 16:9 aspect ratio (1920×1080px or 1600×900px recommended)
- Compress to under 500KB per image (use TinyPNG)

### 3. Optional: Add Blog Posts

Blog posts are configured but not yet created. You can add 2-3 posts in `src/app/blog/posts/`:

**Suggested Topics** (from your content document):
1. **language-is-the-last-mile.mdx** — Why fundamentals matter more than language debates
2. **ai-as-professional-tool.mdx** — LLM-assisted engineering workflow
3. **systems-thinking-backend-engineers.mdx** — Designing for failure modes first

**Blog Post Template**:
```yaml
---
title: "Your Post Title"
publishedAt: "2026-03-26"
summary: "Brief 1-2 sentence summary"
tag: "Engineering Philosophy"
---

## Your Content Here

Write your post in Markdown...
```

Blog posts are **optional** but recommended to differentiate your portfolio from standard resume sites.

### 4. Update baseURL for Production

If deploying to a custom domain:
- Update `baseURL` in [once-ui.config.ts](src/resources/once-ui.config.ts)
- Example: `const baseURL: string = "https://akashtyagi.dev";`

---

## 🧪 How to Test the Portfolio

### 1. Start Development Server

```bash
yarn dev
```

Open http://localhost:3000 in your browser.

### 2. Check Each Section

- **Homepage** (`/`) → Verify headline, subline, featured work link
- **About** (`/about`) → Verify intro, work experience, skills, education
- **Work** (`/work`) → Should show all 7 projects in grid/list
- **Individual Projects** (`/work/[slug]`) → Click each project, verify content renders
- **Blog** (`/blog`) → Currently empty (shows message to create posts)

### 3. Verify Links

- Social links in footer (GitHub, LinkedIn, Email)
- Featured work link on homepage → should go to `/work/ai-document-structuring-service`
- External links in projects (GitHub repos for personal projects)

### 4. Check for Errors

```bash
yarn build
```

Fix any TypeScript errors or missing imports before deploying.

---

## 🚀 Next Steps

### Phase 1: Content Finalization (This Week)
1. ✅ Add your professional photo (`public/images/avatar.png`)
2. ✅ Add project images (start with prapper-ai, ai-document-structuring-service, face-mask-detection)
3. ⏳ Optional: Write 2-3 blog posts

### Phase 2: Review & Polish
1. Test all links and navigation
2. Verify mobile responsiveness (Once UI handles this, but check)
3. Read through project writeups for typos/accuracy
4. Get feedback from peers/mentors

### Phase 3: Deployment
1. Choose hosting platform:
   - **Vercel** (recommended, zero-config Next.js deployment)
   - **Netlify** (alternative)
   - **Self-hosted** (VPS, Docker)
2. Update `baseURL` in once-ui.config.ts
3. Configure custom domain (optional)
4. Deploy and test production build

### Phase 4: SEO & Sharing
1. Create Open Graph image (`public/images/og/home.jpg`)
2. Test social media preview (Twitter, LinkedIn share preview)
3. Submit to Google Search Console
4. Share portfolio on LinkedIn, GitHub profile

---

## 📝 Content Philosophy Summary

Your portfolio positioning:
- **Identity**: Backend engineer who thinks in systems, not syntax
- **Target**: Startup engineering roles requiring ownership and full-stack thinking
- **Differentiation**: AI integration experience, distributed systems depth, Employee of Quarter recognition
- **Tone**: Punchy confidence without arrogance; specific metrics over generic claims
- **Message**: "Language is the last mile — systems thinking is the whole road"

---

## 🆘 Troubleshooting

### Images Not Showing
- Verify image paths match MDX frontmatter (`/images/projects/[slug]/cover-01.jpg`)
- Check file extensions (jpg, not jpeg or png if specified as jpg)
- Restart dev server after adding images

### Project Not Appearing on /work
- Verify `.mdx` file is in `src/app/blog/projects/`
- Check frontmatter has required fields: `title`, `publishedAt`, `summary`, `images`
- Date format must be `YYYY-MM-DD`

### TypeScript Errors
- Run `yarn build` to see all errors
- Most common: Missing required fields in frontmatter
- Check [content.types.ts](src/types/content.types.ts) for field requirements

---

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| [content.tsx](src/resources/content.tsx) | Main content configuration (person, social, sections) |
| [once-ui.config.ts](src/resources/once-ui.config.ts) | Routes, theme, protected routes |
| [src/app/work/projects/*.mdx](src/app/work/projects/) | Individual project case studies |
| [src/app/blog/posts/*.mdx](src/app/blog/posts/) | Blog posts (optional) |
| [public/images/avatar.png](public/images/avatar.png) | Your professional photo |
| [public/images/projects/](public/images/projects/) | Project screenshots/diagrams |

---

## ✨ What Makes This Portfolio Different

1. **Production Work Emphasis**: 6/7 projects are production systems at Quark with real impact metrics
2. **Technical Depth**: Each project includes architecture, challenges, design decisions, lessons learned
3. **Systems Thinking**: Emphasis on failure modes, performance, scalability — not just features
4. **AI Integration**: Multiple AI projects showing practical production experience (not just tutorials)
5. **Quantified Impact**: Every major achievement has a metric (80% reduction, 3× performance, Employee of Quarter)
6. **Honest Positioning**: "Language is the last mile" — Java primary, but systems thinking travels

---

## 💬 Questions or Issues?

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the Once UI documentation (if needed)
3. Inspect the existing placeholder content for examples
4. Reach out to your development team or peers for review

---

**Ready to ship?** Once you've added images and reviewed the content, deploy to Vercel with `vercel deploy` or via GitHub integration. Your portfolio will be live in minutes.

Good luck! 🚀
