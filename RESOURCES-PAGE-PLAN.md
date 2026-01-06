# Resources Page - Planning Document

## Current Content Analysis

### ✅ What We Have:
- **Guides Section**: 4 guide titles
  - Accredited Investor Checklist
  - Modern Retirement Planning Guide
  - Understanding Alternative Investments
  - How Real Assets Create Stability

- **Videos Section**: 4 video titles
  - Zach's Story
  - Retirement Planning Strategies
  - Why Alternatives Matter
  - Income-Focused Investing

- **Articles Section**: General description only ("Blog-style educational content in a clean 3-column layout")

### ❌ What's Missing:

1. **Page-Level Content:**
   - Hero/intro section with page title and description
   - No introduction explaining what visitors will find
   - No CTA section at the bottom

2. **Guide Details:**
   - Descriptions for each guide
   - Download links or file paths
   - File format information (PDF, etc.)
   - Thumbnail images or icons
   - File size or page count
   - Publication dates

3. **Video Details:**
   - Video embed URLs (YouTube, Vimeo, etc.)
   - Thumbnail images
   - Video descriptions
   - Duration
   - Publication dates

4. **Article Content:**
   - No actual article titles listed
   - No article descriptions
   - No publication dates
   - No author information
   - No category/tag system
   - No featured images

5. **Functional Elements:**
   - Search functionality
   - Filter by category (Guides, Videos, Articles)
   - Sort options (newest, most popular, etc.)
   - Pagination (if needed)

---

## Recommended Page Structure

### 1. Hero Section
**Purpose**: Introduce the resources page and set expectations

**Content Needed:**
- Page title: "Resources" or "Educational Resources"
- Subtitle/description: 1-2 sentences explaining what visitors will find
- Optional: Brief stats (e.g., "50+ guides, videos, and articles")

**Design Pattern**: Similar to Services page hero - centered or left-aligned with optional background effects

---

### 2. Navigation/Filter Tabs
**Purpose**: Allow users to quickly jump to different resource types

**Options:**
- Tabs: "All Resources" | "Guides" | "Videos" | "Articles"
- Or: Sticky section headers that users can scroll to

**Design Pattern**: Use shadcn/ui Tabs component or simple button group

---

### 3. Guides Section
**Layout**: Grid of cards (2-3 columns on desktop, 1 column on mobile)

**Each Guide Card Should Include:**
- Thumbnail/icon (PDF icon or custom image)
- Title
- Brief description (2-3 sentences)
- Download button/link
- Optional: File size, page count, or "PDF" badge
- Optional: Publication date

**Design Pattern**: 
- Use card components with hover effects
- Similar to the investment strategies cards on Services page
- Consider using the card pattern from `components/ui/card.tsx`

**Content Needed from Client:**
- [ ] Description for each guide
- [ ] PDF files or download links
- [ ] Thumbnail images (or we can use generic PDF icons)
- [ ] File sizes
- [ ] Publication dates (if available)

---

### 4. Videos Section
**Layout**: Grid of video cards (2-3 columns on desktop)

**Each Video Card Should Include:**
- Video thumbnail (with play button overlay)
- Title
- Brief description
- Duration (if available)
- Click to open modal/lightbox or navigate to video page

**Design Pattern**: 
- Similar to Insights & Education section on home page
- Use video embed modal (YouTube/Vimeo) or lightbox
- Consider using shadcn/ui Dialog component for video modal

**Content Needed from Client:**
- [ ] Video embed URLs (YouTube, Vimeo, or hosted)
- [ ] Video descriptions
- [ ] Thumbnail images (or we can extract from video platform)
- [ ] Duration
- [ ] Publication dates

---

### 5. Articles Section
**Layout**: 3-column grid as specified (on desktop), 1 column on mobile

**Each Article Card Should Include:**
- Featured image
- Title
- Excerpt/description (2-3 sentences)
- Publication date
- Optional: Author name
- Optional: Category/tag badges
- "Read More" link

**Design Pattern**: 
- Similar to Insights & Education cards on home page
- Blog-style layout with images
- Consider using the card pattern with image overlay

**Content Needed from Client:**
- [ ] Article titles (at least 3-6 to start)
- [ ] Article descriptions/excerpts
- [ ] Featured images for each article
- [ ] Article content or links to full articles
- [ ] Publication dates
- [ ] Author names (if applicable)
- [ ] Categories/tags (if they want filtering)

---

### 6. CTA Section
**Purpose**: Convert visitors to take action

**Options:**
- "Want personalized retirement planning advice? Schedule a consultation"
- "Download our complete retirement planning guide"
- "Subscribe to our newsletter for new resources"

**Design Pattern**: Similar to CTA sections on other pages (Services, About)

---

## Design Recommendations

### Visual Hierarchy:
1. **Hero** - Large, prominent
2. **Filter/Tabs** - Sticky or prominent navigation
3. **Resource Sections** - Equal weight, clear separation
4. **CTA** - Bottom of page, prominent

### Color Scheme:
- Use brand colors: `#011E35` (dark navy), `#005EB8` (blue), `#BDDEFD` (light blue)
- Follow existing design system from STYLE-GUIDELINES.txt
- Use gray scale for text and backgrounds

### Typography:
- Hero: `text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-7xl`
- Section Headings: `text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl`
- Card Titles: `text-lg font-semibold text-gray-900 sm:text-xl`
- Body Text: `text-base/7 text-gray-600`

### Spacing:
- Follow spacing system: `mt-32 sm:mt-56` for major sections
- Use `gap-x-8 gap-y-16` for grids

---

## Implementation Approach

### Phase 1: Structure & Layout (MVP)
1. Create hero section
2. Build Guides section with cards
3. Build Videos section with cards
4. Build Articles section with cards (even if placeholder content)
5. Add CTA section
6. Make it responsive

### Phase 2: Content Integration
1. Add actual guide PDFs/links
2. Integrate video embeds
3. Add article content
4. Add metadata (dates, descriptions, etc.)

### Phase 3: Enhancements (Optional)
1. Add search functionality
2. Add filtering by category
3. Add sorting options
4. Add pagination (if many resources)
5. Add "Related Resources" suggestions

---

## Questions for Client

### Immediate Needs:
1. **Guides:**
   - Do you have PDF files ready, or are these still being created?
   - What descriptions should we use for each guide?
   - Do you have thumbnail images, or should we use generic PDF icons?

2. **Videos:**
   - Where are videos hosted? (YouTube, Vimeo, self-hosted?)
   - Do you have video embed URLs?
   - What descriptions should we use for each video?
   - Do you have custom thumbnails, or should we use platform defaults?

3. **Articles:**
   - How many articles do you want to feature initially?
   - What are the article titles?
   - Do you have article content ready, or are these placeholders for future content?
   - Where will articles live? (Same site, external blog, etc.)
   - Do you have featured images for articles?

4. **General:**
   - Do you want search/filter functionality from the start?
   - Should resources be sortable (newest first, alphabetical, etc.)?
   - Do you want a newsletter signup on this page?
   - What CTA do you want at the bottom?

---

## Suggested Content Placeholders

If client content isn't ready, we can use these placeholders:

### Guides:
- "Download our comprehensive guide to [topic]"
- "Learn the essential steps for [topic]"
- "Get expert insights on [topic]"

### Videos:
- "Watch our expert explain [topic]"
- "Learn about [topic] in this detailed video"
- "Discover how [topic] can benefit your retirement"

### Articles:
- Start with 3-6 placeholder articles
- Use generic financial/retirement topics
- Add "Coming Soon" badges if content isn't ready

---

## Next Steps

1. **Review this plan with the client** - Get answers to questions above
2. **Gather all content assets** - PDFs, videos, images, descriptions
3. **Create component structure** - Build reusable card components
4. **Implement MVP** - Get basic structure working
5. **Iterate** - Add content and refine based on feedback

---

## Component Structure Recommendation

```
components/resources/
  ├── ResourcesHero.tsx          # Hero section
  ├── ResourceFilters.tsx        # Tabs/filter navigation
  ├── GuidesSection.tsx          # Guides grid
  ├── VideosSection.tsx          # Videos grid
  ├── ArticlesSection.tsx        # Articles grid
  ├── ResourceCard.tsx           # Reusable card component
  ├── VideoCard.tsx              # Video-specific card
  ├── GuideCard.tsx              # Guide-specific card
  ├── ArticleCard.tsx            # Article-specific card
  └── ResourcesCTA.tsx           # CTA section
```

---

## Design Mockup Structure

```
┌─────────────────────────────────────┐
│         HERO SECTION                 │
│  "Resources" Title + Description    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│    FILTER TABS (All | Guides |      │
│    Videos | Articles)                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         GUIDES SECTION               │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         VIDEOS SECTION               │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│        ARTICLES SECTION              │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │Card │ │Card │ │Card │           │
│  └─────┘ └─────┘ └─────┘           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         CTA SECTION                  │
│  Call-to-action with button          │
└─────────────────────────────────────┘
```

---

## Notes

- The client's content feels incomplete because:
  1. No descriptions for any resources
  2. No actual article titles
  3. No metadata (dates, authors, etc.)
  4. No visual assets mentioned
  5. No functional requirements (search, filter, etc.)

- **Recommendation**: Start with an MVP that has the structure in place, then fill in content as it becomes available. This allows the client to see the page taking shape and provide better feedback.

- **Alternative Approach**: If client wants to launch with minimal content, we could create a "coming soon" or "under construction" version that shows the structure but indicates content is being added.

