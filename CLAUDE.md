# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Korean job consulting service website ("대기업김과장의 합격하는 자소서") built with Next.js 15 (App Router), React 19, and TypeScript. Deployed on Vercel at https://www.allpsn.com/.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build (auto-generates sitemap via postbuild)
npm run lint      # ESLint
npm start         # Start production server
```

## Architecture

- **Framework:** Next.js 15 with App Router (`src/app/`)
- **Styling:** Tailwind CSS v4 with inline `@theme` directive in `globals.css` (no separate tailwind.config)
- **Font:** Pretendard Variable (Korean font, loaded via `@font-face` in globals.css)
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **SEO:** `next-sitemap` auto-generates sitemap on `postbuild`

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Directory Layout

- `src/app/` — Pages: home (`/`), `/about`, `/services`, `/contact`, `/testimonials`
- `src/components/` — Shared UI components (NavBar, animations, sliders, etc.)
- `src/data/` — Static data files (companies list, jobs, testimonials, constants)
- `public/` — Static assets (fonts, icons, images)

### Key Patterns

- Client components that need browser APIs (sliders, animations) use `"use client"` directive
- `HomeTestimonialSliderWrapper.tsx` uses `next/dynamic` with `ssr: false` to disable SSR for the slider
- Animation components (`FadeInAnimation`, `BubblePopAnimation`) use Intersection Observer API
- Static data is co-located in `src/data/` as TypeScript arrays/objects — no database or CMS

### Color Scheme

- Primary blue: `#4655C7`
- Accent orange: `#e1582e`
- Light backgrounds: `#f0f2ff`, `#f0f4fa`
