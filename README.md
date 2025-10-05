# Bharata Energy Defence Program Website

A professional, responsive multi-page website promoting the Bharata Energy Defence Program by Chola Mandala Mahaa Samsthaanam. The site showcases the organization's spiritual mission, achievements since 2005, and proposals for protecting India through spiritual energy practices.

## Overview

Chola Mandala Mahaa Samsthaanam is a congregation of royal families, spiritual gurus, and social activists dedicated to reestablishing Bharata in its full glory. Through spiritual-mystic processes and socio-political initiatives, they work to protect the motherland and balance planetary energies.

## Features

- **Comprehensive Timeline (2005-2019)**: Interactive accordion displaying the organization's journey, achievements, and milestones
- **Executive Summary**: Detailed overview of the program's vision, capabilities, and pledge to Bharata
- **Image Gallery**: Visual documentation of spiritual installations and energy centers across Bharata
- **Upcoming Activities**: Strategic plans for future spiritual defense programs
- **Convenor Biography**: Detailed introduction of Chief Convenor Prince A Amithaab
- **Cosmic Explanations**: Understanding the spiritual technology and cosmic connections
- **Contact Form**: Direct communication channel for inquiries and support
- **Document Downloads**: Access to the complete proposal and supporting materials
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Light/Dark Mode**: Theme switching for user preference

## Technology Stack

### Frontend
- **React 18** - Modern UI library with TypeScript
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library (Radix UI primitives)
- **Framer Motion** - Animation library for smooth transitions
- **TanStack React Query** - Server state management

### Backend
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database (via Neon serverless)

### Development Tools
- **ESBuild** - JavaScript bundler
- **PostCSS** - CSS processing
- **Replit** - Development environment

## Key Achievements Highlighted

- **4500+ Maha Yagnas** - Sacred fire rituals conducted since 2005
- **54 Shiva Lingha Installations** - Temple consecrations across national and international locations
- **1 Million+ Trees** - Massive tree plantation drives
- **Border Protection** - Conducted sacred yagnas at 8 strategic border locations
- **Global Impact** - Prevented economic catastrophes and influenced global stability

## Getting Started

### Prerequisites
- Node.js 20+ installed
- Python 3.x (only needed if extracting content from PDFs)
- PostgreSQL database (optional - only needed for persistent storage in production)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/claytoncuteri/bharata-energy-defense-program-website.git
cd bharata-energy-defense-program-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000` (both frontend and backend served on the same port)

## Project Structure

```
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── ui/          # shadcn/ui base components
│   │   │   └── ...          # Custom components
│   │   ├── pages/           # Page components
│   │   ├── lib/             # Utility functions and configs
│   │   └── App.tsx          # Main app component with routing
│   └── index.html           # HTML entry point
├── server/                   # Backend application
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Storage interface
│   └── index.ts             # Express server setup
├── shared/                  # Shared types and schemas
│   └── schema.ts            # Drizzle database schemas
├── attached_assets/         # Static assets and images
├── extracted_content/       # PDF extracted content
└── extract_pdf.py          # Python script for PDF extraction

```

## Development

### Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (if using PostgreSQL)

### Key Pages

- `/` - Home page with hero and overview
- `/executive` - Executive summary
- `/past-timeline` - Complete timeline 2005-2019
- `/upcoming-timeline` - Planned activities
- `/convenor` - About the Chief Convenor
- `/cosmic` - Cosmic explanations
- `/appendix` - Image gallery
- `/message` - Call-to-action message
- `/downloads` - Download proposal documents
- `/contact` - Contact form
- `/admin` - Admin dashboard (for viewing submissions)

### Database

The project uses **in-memory storage by default** for development, which means no database setup is required to get started.

For production or if you want persistent storage:
1. Set up a PostgreSQL database (Neon recommended)
2. Add `DATABASE_URL` to environment variables
3. Run migrations: `npm run db:push`
4. The project uses Drizzle ORM for type-safe database operations

## PDF Content Extraction

The project includes a Python script to extract text and images from PDF documents:

```bash
python3 extract_pdf.py <pdf_file_path> [output_dir]
```

This was used to extract the complete proposal content, timeline events, and images for the website.

## Styling

The project uses a custom design system based on:
- **Color Palette**: Gold, Deep Saffron, Royal Blue, Warm Cream
- **Typography**: Playfair Display (headers), Inter (body), Cinzel (accents)
- **Components**: shadcn/ui with "new-york" style variant
- **Theme**: Supports both light and dark modes

## Contact Information

For official inquiries, government officials, defense personnel, and institutional representatives:

- **Email**: susharadhya14@gmail.com
- **Phone**: +91 636 421 4919

## Spiritual Mission

The Bharata Energy Defence Program aims to protect India from nuclear threats and balance planetary energies through:

- Rajasuya Maha Yagnas (sacred fire rituals)
- Shiva Lingha installations at strategic energy points
- Temple consecrations and spiritual activations
- Meditation and consciousness programs
- Environmental restoration through tree plantations

**Proposed Budget**: ~0.000001% of national defense budget for complete protection and planetary balance.

## License

Copyright © 2005-2024 Chola Mandala Mahaa Samsthaanam. All rights reserved.

## Acknowledgments

- Chief Convenor: Prince A Amithaab
- Development: Built with modern web technologies
- Spiritual Guidance: Under divine ordainment since 2005
- Platform: Developed on Replit

---

*"Protecting Bharata Through Spiritual Energy"*
