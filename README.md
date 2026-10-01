# LARO Advertising PLC — website

Next.js site with scroll animations, a WebGL 3D showroom, smooth scrolling, page transitions
and a working quote form. Hosted on Vercel. **No software needs to be installed on your computer**:
GitHub stores the files, Vercel builds and publishes them.

## Publish it (about 15 minutes, all in the browser)

1. **GitHub** — sign in at github.com (create a free account if needed).
   Click **New repository**, name it `laro-site`, choose Private, click **Create repository**.
2. On the new repository page click **uploading an existing file**.
   Unzip `laro-site.zip` on your computer, open the `laro-site` folder, select **everything inside it**
   (`app`, `components`, `content`, `lib`, `public`, `package.json`, …) and drag it onto the page.
   Wait for the upload to finish, then click **Commit changes**.
3. **Vercel** — go to vercel.com, choose **Sign up → Continue with GitHub** (Hobby plan is free).
   Click **Add New → Project**, find `laro-site`, click **Import**, then **Deploy**.
   Vercel detects Next.js by itself. After about a minute you get a live link like `laro-site.vercel.app`.

From then on, every change you commit on GitHub is published automatically.

## Make the quote form send email

The form emails requests through [Resend](https://resend.com) (free for 3,000 emails a month).

1. Sign up at resend.com with the email address that should receive quote requests.
2. **API Keys → Create API Key** → copy the key (starts with `re_`).
3. In Vercel: **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = the key
   - `QUOTE_TO_EMAIL` = the address that receives requests (must be your Resend login email
     until you verify a domain)
4. **Deployments → ⋯ → Redeploy**.

Optional, after verifying `laroadvertising.com` in Resend (Domains → Add domain):
`QUOTE_FROM_EMAIL` = `LARO Website <website@laroadvertising.com>`, and `QUOTE_TO_EMAIL` can then be any address.

Until this is set up, the form tells visitors to call or WhatsApp instead.

## Use your own domain

Vercel → **Project → Settings → Domains** → add `laroadvertising.com` (and `www.laroadvertising.com`).
Vercel shows the DNS records to add at your domain registrar. Once they are added it switches over and
issues the HTTPS certificate automatically. Optionally add `NEXT_PUBLIC_SITE_URL` = `https://laroadvertising.com`
so share previews and the sitemap use the domain.

## Change text, phone numbers and images

- **All words, phone numbers, address, menu, team, projects and the showroom scenes** are in
  `content/site.js`. On GitHub open the file, click the ✏️ pencil, edit the text between the quotes,
  then **Commit changes**. Vercel republishes in about a minute.
- **Images** are in `public/img`. To replace one, upload a new file with the **same name**
  (Add file → Upload files inside `public/img`). To add a new one, upload it and put its name in
  `content/site.js`, e.g. `img: '/img/new-project.jpg'`.
- **Portfolio**: in `projects`, set `placeholder: false` once a real photo is used.
- **Team portraits**: upload to `public/img/team/` and set `photo: '/img/team/lealem.jpg'`.
- **Client logos**: upload to `public/img/clients/` and set `logo: '/img/clients/bank.png'`.
- If a change breaks the build, Vercel keeps the previous version online and shows the error under
  **Deployments**; undo the last edit on GitHub to fix it.

## What is where

| Path | What it is |
| --- | --- |
| `content/site.js` | All site content |
| `app/*/page.js` | The six pages (Home, Services, Eco Range, Portfolio, About, Contact) |
| `app/api/quote/route.js` | Quote form email sender |
| `components/` | Header, footer, showroom and the page blocks |
| `lib/engine.js` | Scroll animations and the WebGL showroom |
| `app/globals.css` | Colours, type and layout |
| `public/img` | Images and logos |

Visitors who ask their device for reduced motion get still scenes and simple fades. Phones use
native scrolling with the same pinned scenes.
