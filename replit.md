# Bharata Energy Defence Program Website

## Overview

A multi-page promotional website for the Bharata Energy Defence Program by Chola Mandala Mahaa Samsthaanam. The site showcases the organization's spiritual mission, achievements since 2005, and proposals for protecting India through spiritual energy practices. Built with React, TypeScript, Express, and styled using Tailwind CSS with shadcn/ui components.

The website features a comprehensive presentation of the program including executive summaries, detailed timelines (2005-2019), upcoming activities, convenor biography, cosmic explanations of spiritual technology, image galleries, downloadable PDF documents, and a contact form for inquiries.

## Recent Changes

**October 5, 2025 - Image Integration & Navigation Fixes:**
- Fixed nested anchor tag issue in Footer component (Link components now properly styled without nested <a> tags)
- Integrated 6 installation images into Appendix gallery with proper captions extracted from PDF
- Added timeline images to Past Timeline events (2008, 2012, 2013, 2014, 2015)
- Updated all image imports to use @assets alias for proper Vite bundling
- Fixed Header letterhead watermark to use @assets import instead of direct path
- All images display correctly with no console errors

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing:**
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight client-side routing (no React Router dependency)
- Vite as the build tool and development server with HMR support

**UI Component System:**
- shadcn/ui component library (Radix UI primitives) configured with "new-york" style
- Tailwind CSS for utility-first styling with custom design tokens
- Component aliases configured via tsconfig paths (`@/components`, `@/lib`, etc.)

**Design System:**
- Custom HSL-based color palette supporting both light and dark modes
- Primary colors: Gold (38 85% 55%), Deep Saffron, Royal Blue, Warm Cream
- Typography: Playfair Display (headers), Inter (body), Cinzel (accents) from Google Fonts
- Responsive layout with mobile-first approach using Tailwind breakpoints

**State Management:**
- TanStack React Query (v5) for server state management and caching
- Form state managed via react-hook-form with Zod validation
- Toast notifications using shadcn/ui toast system

**Key Pages & Routes:**
- `/` - Home with hero section and overview
- `/executive` - Executive summary
- `/past-timeline` - Timeline accordion for 2005-2019 events
- `/upcoming-timeline` - Planned activities grid
- `/convenor` - Chief Convenor biography
- `/cosmic` - Spiritual technology explanations
- `/appendix` - Image gallery of installations
- `/message` - Call-to-action message
- `/downloads` - PDF document downloads
- `/contact` - Contact form
- `/admin` - Admin dashboard for viewing submissions

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js with TypeScript
- ESM module system throughout
- Development mode uses tsx for hot reloading
- Production build uses esbuild for bundling

**API Endpoints:**
- `POST /api/contact` - Submit contact form (validated with Zod)
- `GET /api/contact` - Retrieve all contact submissions (admin)

**Data Storage:**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definition in `shared/schema.ts` for type safety across client/server
- Currently implements in-memory storage (`MemStorage`) as fallback
- Database migrations configured via drizzle-kit pointing to `./migrations`

**Session Management:**
- `connect-pg-simple` for PostgreSQL-backed sessions (configured but not actively used)
- User schema defined but authentication not implemented

### External Dependencies

**Database:**
- PostgreSQL (via Neon serverless) - configured but database provisioning required
- Environment variable `DATABASE_URL` must be set for database connectivity
- Drizzle ORM handles schema management and type-safe queries

**Third-Party Services:**
- Google Fonts API for typography (Playfair Display, Inter, Cinzel)
- No external API integrations for email/notifications currently implemented
- Contact form submissions stored in database only

**Development Tools:**
- Replit-specific plugins for development:
  - `@replit/vite-plugin-runtime-error-modal` for error overlay
  - `@replit/vite-plugin-cartographer` for code navigation
  - `@replit/vite-plugin-dev-banner` for dev environment indicator

**Content Processing:**
- Python script (`extract_pdf.py`) for PDF content extraction:
  - `pypdf` for text extraction
  - `pdf2image` for converting pages to images
  - `Pillow` for image processing
  - `poppler-utils` system dependency
- Extracted content intended for populating timeline and gallery components

**Asset Management:**
- Static assets stored in `attached_assets` directory
- Vite configured with alias `@assets` pointing to `attached_assets`
- Images referenced include letterhead logo and program-specific graphics