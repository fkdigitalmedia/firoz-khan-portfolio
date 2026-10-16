# Firoz Khan — Full-Stack Developer · Portfolio

Personal portfolio website for **Firoz Khan**, a full-stack web developer based in
Palghar, Maharashtra, India, and founder of
[FK Digital Media](https://fkdigitalmedia.com).

Live repo: **https://github.com/fkdigitalmedia/firoz-khan-portfolio**

## Stack

- **Next.js 15** (App Router) + TypeScript + React 19
- **Tailwind CSS v4** + hand-written CSS animations (no heavy UI libraries)
- `next/font` (Inter, latin subset) for typography
- **@opennextjs/cloudflare** adapter — deployed on **Cloudflare Workers/Pages**
- Scroll-reveal via a tiny `IntersectionObserver` component; mobile menu + contact
  form are the only other client-side JS

## Project structure

```
app/
  layout.tsx        # SEO metadata, Open Graph, JSON-LD Person schema
  page.tsx          # All sections: hero, about, skills, services, projects,
                    # highlights, contact, footer
  globals.css       # Tailwind + custom theme/animations
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/
  Header.tsx        # Sticky blurred header + mobile menu
  Reveal.tsx        # IntersectionObserver reveal-on-scroll
  ContactForm.tsx   # Front-end mailto: composer (no backend)
  icons.tsx         # Inline SVG social/contact icons
public/
  firoz-khan.webp   # Hero/about photo
  favicon.svg
wrangler.jsonc      # Cloudflare Worker config (nodejs_compat, static assets)
open-next.config.ts # @opennextjs/cloudflare adapter config
.dev.vars           # Local dev env (NEXTJS_ENV=development)
```

## Local development

Requires **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build check

```bash
npm run build      # standard Next.js production build
```

## Deploy on Cloudflare Pages (production)

The site is 100% static (`output: "export"` in `next.config.ts`) and deploys
to **Cloudflare Pages**. Live at https://firoz-khan-portfolio.pages.dev.

### Option A — Git integration (recommended)

1. Push this repo to GitHub (already at
   https://github.com/fkdigitalmedia/firoz-khan-portfolio).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Connect to Git** →
   select `fkdigitalmedia/firoz-khan-portfolio`.
3. Build settings (Framework preset: **Next.js (Static HTML Export)** or None):
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/`
   - **Node.js version:** 20+
4. **Deploy.** Cloudflare rebuilds and deploys on every push to `main`.

### Option B — Direct deploy with wrangler

Needs a Cloudflare API token with **Pages:Edit**
(`wrangler login` or `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`):

```bash
npm run build
npx wrangler pages deploy out --project-name=firoz-khan-portfolio --branch=main
```

(The repo also ships `wrangler.jsonc` + `@opennextjs/cloudflare` config from an
earlier Workers-based setup; the live deployment uses the static Pages path
above. `npm run preview` runs the old adapter preview and is not used.)

## Notes

- `next/image` is set to `unoptimized` — Cloudflare Workers has no Next.js
  image-optimization server, so images are served as static assets.
- No `export const runtime = "edge"` anywhere (unsupported by the adapter).
- SEO: semantic HTML, single `h1`, canonical `https://firozkhan.dev`,
  Open Graph + Twitter cards, `/sitemap.xml`, `/robots.txt`, JSON-LD Person schema.
- All FK Digital Media backlinks are plain dofollow (only `rel="noopener"` on
  `target="_blank"` links — never `nofollow`/`sponsored`).
