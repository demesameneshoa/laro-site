# LARO Advertising PLC website

A multi-page marketing site built with Next.js 15 (App Router) and React 19. Its layout and motion follow spotlightplc.com, in LARO green. It runs on Vercel with no extra configuration and needs no packages beyond Next and React.

## Interactions

- First-visit loader (green screen, pie counter to 100%), green curtain between pages
- Custom cursor: green dot plus a soft trailing disc that shows labels (View, Explore, Drag…)
- Hero: giant LARO wordmark; the O is a window onto a crossfading showreel that grows to full screen as you scroll
- Letter-by-letter heading reveals, scroll-lit paragraphs, count-up numbers, parallax images
- Selected works: three staggered columns drifting at different speeds
- Our Services: pinned section, a green disc sweeps the title, then service columns slide in sideways (hover fills a column and shows its image)
- We Are LARO!: disc sweep plus an image trail that follows the pointer
- Approach / Why rows: hovering a row floats its image at the pointer
- SECTORS: a glass lens follows the pointer over the word
- Header hides on scroll down and returns on scroll up; Services dropdown with thumbnails; full-screen menu on phones
- Green "Let's connect!" footer with a working form

All motion respects prefers-reduced-motion. Pinned and horizontal effects switch to simple stacked layouts on phones.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: wordmark hero, selected works, our services, we are LARO, approach, sectors, why LARO, clients, testimonials, one brief one partner |
| `/services` | Services overview |
| `/services/[slug]` | 8 service detail pages, generated statically from `lib/content.ts` |
| `/solutions` | Integrated solutions, example projects, approach |
| `/work` | Portfolio with category filter |
| `/about` | Story, commitment, why LARO, leadership team, legal documents |
| `/clients` | Sectors served, partner logos, testimonials |
| `/contact` | Quote form, phones, WhatsApp, address, map |
| `/api/quote` | Receives the quote form (POST JSON) |

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

All copy lives in `lib/content.ts`: services, approach, sectors, why LARO, team, legal documents, portfolio items and contact details. Edit it there and every page updates.

## Before launch: replace the placeholders

These are marked on the site in yellow:

- **Portfolio images** in `public/images/` are 3D product renders. Replace them with real project photos and update `work` in `lib/content.ts`.
- **Client logos** on Home and Clients: add logos you have permission to use.
- **Testimonials** on Clients.
- **Team portraits** on About.
- **Legal documents** on About: put the PDFs in `public/docs/` and link them in `legalDocs`.
- **Email address and social links** in `company` in `lib/content.ts`.

## Structure

```
app/            routes, layout, global styles, API route, sitemap, robots
components/     Header, Footer (connect form), HeroWordmark, MasonryWork, PinnedServices, WeAre,
                HoverRows, LensWord, Marquee, Cursor, Preloader, PageTransition, ScrollFx, forms
lib/content.ts  all site copy
public/images/  renders, logos
```

Styling is plain CSS in `app/globals.css`. Responsive rules use container queries on `.site`. DM Sans loads through `next/font`. To use a real showreel video in the hero, replace the images in `components/HeroWordmark.tsx` with a `<video autoPlay muted loop playsInline>`.
