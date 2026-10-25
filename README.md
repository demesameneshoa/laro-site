# LARO Advertising PLC website

A multi-page marketing site built with Next.js 15 (App Router) and React 19. Its layout and motion follow spotlightplc.com, in LARO green. It runs on Vercel with no extra configuration and needs no packages beyond Next and React.

## Interactions

- Home hero: full-bleed carousel of real LARO work with the brand promise, progress bars and arrows (pauses on hover; no autoplay with reduced motion)
- Selected work: bento grid of featured projects, each opening its project page
- Work: search box plus service categories; every project has its own page with a gallery and full-screen viewer (photos and clips)
- Our Services: pinned section, a green disc sweeps the title, then service columns slide in sideways
- Letter-by-letter heading reveals, scroll-lit paragraphs, count-up numbers, custom cursor, page curtain
- Header: Work, Services (dropdown grouped by category), Solutions, About and a "Request a quote" button; full-screen menu on phones

All motion respects prefers-reduced-motion.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero carousel, selected work, services, approach, sectors, why LARO, clients, testimonials |
| `/work` | Portfolio with search and service categories |
| `/work/[slug]` | Project pages (case studies), generated from `projects` in `lib/content.ts` |
| `/services` | Ten services grouped by category |
| `/services/[slug]` | Service detail pages, generated from `services` in `lib/content.ts` |
| `/solutions` | Integrated projects, process and delivery |
| `/about` | Company story, team, leadership, clients, testimonials, credentials, company profile download |
| `/contact` | Request a quote form, phones, WhatsApp, address, map |
| `/api/quote` | Receives the quote form (POST JSON) |

`/clients` and the old service addresses redirect to their new homes (see `next.config.mjs`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New → Project**, import the repository and keep the detected **Next.js** preset.
3. Optional environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL`: the live domain, e.g. `https://laroadvertising.com` (used for metadata, sitemap and robots).
   - `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL`: to email quote requests through [Resend](https://resend.com). Without them, requests are logged in Vercel's function logs.
4. Add your domain under Project → Settings → Domains.

## Editing content

All copy lives in `lib/content.ts`: services, approach, sectors, why LARO, team, credentials, brochure, portfolio items and contact details. Edit it there and every page updates.

## Content you can extend

- **Portfolio**: project photos live in `public/images/work/` (large hero versions in `public/images/hero/`) and short clips in `public/videos/` (H.264 MP4 with a poster JPG). Add a project to `projects` in `lib/content.ts`; its `services` (service tags) decide which category and service pages it appears on. `featuredProjects` picks the seven shown on the home page.
- **Favicon**: `app/icon.jpg` and `app/apple-icon.jpg` (Next.js serves them automatically).
- **Testimonials**: `testimonials` in `lib/content.ts` (shown on Home and Clients).
- **Credentials**: certificate scans in `public/images/credentials/`, listed in `credentials` in `lib/content.ts` (set `landscape: true` for wide certificates).
- **Company profile**: `public/docs/LARO-Company-Overview.pdf`, with preview pages in `public/images/brochure/`. Update `brochure` in `lib/content.ts` if the page count or size changes.
- **Still to add**: public email address and social links in `company` in `lib/content.ts`.

## Structure

```
app/            routes, layout, global styles, API route, sitemap, robots
components/     Header, Footer (connect form), HeroWordmark, MasonryWork, PinnedServices, WeAre,
                HoverRows, LensWord, Marquee, Cursor, Preloader, PageTransition, ScrollFx, forms
lib/content.ts  all site copy
public/images/  renders, logos
```

Styling is plain CSS in `app/globals.css`. Responsive rules use container queries on `.site`. DM Sans loads through `next/font`. To use a real showreel video in the hero, replace the images in `components/HeroWordmark.tsx` with a `<video autoPlay muted loop playsInline>`.
