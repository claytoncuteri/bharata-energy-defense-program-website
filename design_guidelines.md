# Bharata Energy Defence Program - Design Guidelines

## Design Principles
Heritage meets modernity with traditional Indian aesthetics and contemporary web patterns. Prioritize trust, visual storytelling, and accessibility with clear information hierarchy.

---

## Visual System

### Color Palette (HSL Format)

**Dark Mode:**
- Primary Gold: `38 85% 55%` - Headers, CTAs, accents
- Deep Saffron: `25 90% 45%` - Highlights, important elements
- Royal Blue: `215 75% 50%` - Links, interactive elements
- Warm Cream: `40 30% 92%` - Light backgrounds, cards

**Light Mode:**
- Primary Gold: `38 75% 50%`
- Deep Saffron: `25 80% 40%`
- Royal Blue: `215 70% 45%`
- Soft Beige: `40 25% 95%` - Page backgrounds

**Neutrals & Accents:**
- Dark Text: `220 15% 15%` | Medium Gray: `220 10% 55%` | Light Gray: `220 8% 85%`
- Success Green: `145 65% 45%` | Alert Orange: `15 80% 55%`

### Typography

**Fonts (Google Fonts):**
- Headers: 'Playfair Display' (serif)
- Body: 'Inter' (sans-serif)
- Accent: 'Cinzel' (special titles/quotes - use sparingly)

**Scale:**
- Hero: `text-6xl` (60px) / `font-bold` / `tracking-tight`
- Page Headers: `text-5xl` (48px) / `font-bold`
- Sections: `text-3xl` (30px) / `font-semibold`
- Cards: `text-xl` (20px) / `font-semibold`
- Body: `text-base` (16px) / `leading-relaxed`
- Small: `text-sm` (14px)

### Layout System

**Spacing:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: `p-6` to `p-8`
- Sections: `py-16` to `py-24` (desktop), `py-12` (mobile)
- Cards: `gap-6` to `gap-8`

**Grid:**
- Container: `max-w-7xl` (1280px)
- Content: `max-w-6xl` (text-heavy)
- Multi-column: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**Breakpoints:**
- Mobile: <768px | Tablet: 768-1024px | Desktop: >1024px

---

## Components

### Header
- Fixed top nav with letterhead watermark (opacity: 0.08, full-width)
- Logo left (~60px) + "Bharata Energy Defence Program" (`text-2xl`, gold)
- Subtitle: "Proposal by Chola Mandala Mahaa Samsthaanam | Chief Convenor: Prince A Amithaab" (`text-sm`, gray)
- Bootstrap navbar, hamburger menu (mobile)
- Dropdowns: Timeline (Past/Upcoming), About (Convenor/Message/Cosmic)
- Background: White/cream, `shadow-md`, sticky

### Hero (Home)
- Full-width with gradient overlay (gold→saffron, opacity 0.85)
- Title: "Protecting Bharata Through Spiritual Energy" (`text-6xl`, white, centered)
- Subtitle: 2-3 sentence summary (`text-xl`, white/cream)
- Dual CTAs: Primary gold button + outline white button (blur background)
- Height: `min-h-screen` (desktop), `min-h-[70vh]` (mobile)

### Accordion (Timeline)
- Year-based items, 4px gold left border
- Header: Year + summary (`text-xl`, semibold, clickable)
- Content: Description + image grid (2-3 images)
- Animation: 300ms ease expand/collapse
- Alternating backgrounds (cream/white)
- Chevron icons for state

### Cards
- Timeline: White, `shadow-md`, `rounded-lg`, `p-6`
- Images: 16:9 or 4:3 ratio, rounded corners
- Bio: Horizontal (desktop), stacked (mobile)
- Hover: `translateY(-2px)` + `shadow-lg` (transition)

### Navigation (Mobile)
- Slide-in right (300ms)
- Semi-transparent overlay
- Category headers: `text-xs`, uppercase, `tracking-wide`
- Items: `text-lg`, `py-3`, gold underline (active)

### Forms
- Inputs: `border-2`, `rounded-md`, `p-3`, `focus:ring-2 focus:ring-gold`
- Labels: `text-sm`, `font-medium`, `mb-2`
- Errors: Red border + message (`text-sm`)
- Submit: Primary gold, full-width (mobile)

### Footer
- 3-column (desktop): Quick Links | Contact | Social
- Single column (mobile)
- Background: `220 15% 20%` with gold accents
- Social icons: Size-6, gold, Font Awesome/Heroicons

### Gallery
- Masonry/grid: 2-3 columns
- Lightbox modal on click
- Captions: Hover overlay or below (`text-sm`, italic)

### Animations (Minimal)
- Fade-in on scroll (IntersectionObserver)
- Smooth scroll (anchors)
- Button hover: `scale(1.02)` + shadow (150ms)
- Page transitions: 200ms fade

---

## Page Layouts

### Home
- Hero + 4 sections: Vision | Key Achievements (grid) | Impact Stats | CTA
- Sections: `py-20`, alternating white/cream backgrounds
- Highlights: 2-column grid (`lg:grid-cols-2`)

### Executive Summary
- Centered `max-w-4xl`
- Pull quotes: Gold, `text-2xl`, italic

### Past Timeline (Accordion)
- `max-w-7xl`, sticky year sidebar (desktop)
- 2005-2019, grouped by year
- Image grid: 2-3 per event, captions below

### Upcoming Timeline
- `grid-cols-1 md:grid-cols-2`
- 8 activity cards: Icon + Title + Description

### About Convenor
- Hero with photo (circular/rounded)
- 2-column: Bio | Family lineage/photos
- Gallery at bottom (2-3 photos)

### Cosmic Explanations
- `max-w-3xl` single column
- 2-3 paragraphs + illustrative image
- Blockquotes for key concepts

### Appendix
- Masonry: 3 cols (desktop), 2 (tablet), 1 (mobile)
- 2-3 installation images, captions
- Lightbox for full view

### Message to Reader
- `max-w-2xl` centered
- Large quote/heading
- Dual CTAs: "Contact Us" + "Download Proposal"

### Downloads
- 2 cards side-by-side (desktop): Letterhead PDF | Main PDF
- Each: Icon + title + 100-150 word description + button
- File size/format info below

### Contact
- 2-column: Form (60%) | Info/map (40%)
- Fields: Name, Email, Phone (optional), Message
- Client-side validation

### Admin Dashboard
- Password-protected
- Table: Name | Email | Phone | Message | Date
- Search/filter bar, responsive (scroll mobile)

---

## Images

**Required:**
1. Letterhead logo (header watermark, low opacity)
2. Hero image (yagna/temple/border, 1920x1080+)
3. Timeline images (2005-2019, organized by event)
4. Convenor photos (2-3, family/lineage)
5. Installation images (Chitradurga fort, Pancha Pativrata)
6. Cosmic/spiritual imagery (1 for Cosmic page)
7. Icon library (Heroicons/Font Awesome)

**Optimization:**
- Lazy loading, WebP format
- Responsive srcset
- Alt text (descriptive)

---

## Accessibility

- WCAG AA contrast (4.5:1 minimum)
- Keyboard navigation (accordion, forms)
- Visible focus states (`ring-2 ring-gold`)
- Semantic HTML (header, nav, main, section, footer, article)

---

**Total Word Count: ~1,100 | Estimated Tokens: ~1,800**