# LARO Advertising PLC website

A multi-page marketing site built with Next.js 15 (App Router) and React 19. It runs on Vercel with no extra configuration.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero slideshow, intro, selected work, 8 services, integrated solutions, approach, who we serve, why LARO, partner logos, closing CTA |
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
components/     Header, Footer, floating contact, cards, work filter, quote form
lib/content.ts  all site copy
public/images/  renders, logos
```

Styling is plain CSS in `app/globals.css`. Responsive rules use container queries on `.site`. Fonts (Archivo, Geist, Geist Mono) load through `next/font`. Scroll reveals and the hero slideshow respect `prefers-reduced-motion`.
