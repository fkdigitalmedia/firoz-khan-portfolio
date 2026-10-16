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

## Cloudflare preview / deploy (adapter path)

These use the official `@opennextjs/cloudflare` adapter documented at
https://opennext.js.org/cloudflare/get-started:

```bash
npm run preview    # opennextjs-cloudflare build && preview locally (workerd)
npm run deploy     # opennextjs-cloudflare build && deploy via wrangler
npm run upload     # build && upload a new worker version without deploying
```

`npm run build` and the `opennextjs-cloudflare build` path both pass cleanly.

## Deploy on Cloudflare (production)

### Option A — Git integration (recommended)

1. Push this repo to GitHub (already at
   https://github.com/fkdigitalmedia/firoz-khan-portfolio).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Connect to Git** →
   select `fkdigitalmedia/firoz-khan-portfolio`.
3. Build settings:
   - **Build command:** `npx @opennextjs/cloudflare build`
     (this runs `npm run build` internally, then adapts the output for Workers)
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/`
   - **Node.js version:** 20+ (set `NODE_VERSION=20` if prompted)
4. **Deploy.** Cloudflare builds and deploys on every push to `main`.
   (`wrangler.jsonc` in the repo already sets `nodejs_compat` and the
   `.open-next` worker/assets paths — no extra dashboard config needed.)

### Option B — Direct deploy with wrangler

Needs a Cloudflare API token (`wrangler login` or `CLOUDFLARE_API_TOKEN`):

```bash
npm run deploy
```

This builds with the adapter and deploys the Worker defined in `wrangler.jsonc`
(`name: firoz-khan-portfolio`).

## Notes

- `next/image` is set to `unoptimized` — Cloudflare Workers has no Next.js
  image-optimization server, so images are served as static assets.
- No `export const runtime = "edge"` anywhere (unsupported by the adapter).
- SEO: semantic HTML, single `h1`, canonical `https://firozkhan.dev`,
  Open Graph + Twitter cards, `/sitemap.xml`, `/robots.txt`, JSON-LD Person schema.
- All FK Digital Media backlinks are plain dofollow (only `rel="noopener"` on
  `target="_blank"` links — never `nofollow`/`sponsored`).
