# New Wave Acquisitions | acquisitionsystems.io

Premium B2B marketing site for the book-based client acquisition system. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and TypeScript. Deploy to Vercel.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and set:

   - `RESEND_API_KEY` — Resend API key for sending application notification emails to isaac@, daniel@, hello@newwavepress.co
   - `ZAPIER_WEBHOOK_URL` — Zapier webhook URL to push applications to Monday.com (optional; if missing, form still works and emails still send)

3. **Hero video**

   Place `hero-loop.mp4` in `public/static/hero-loop.mp4` for the home page hero. If you don’t have it yet, the hero will show a gray placeholder.

4. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/product` — System deep dive (Intellibook, AI SDR, CoreText)
- `/results` — Proof and case studies
- `/about` — Story and team
- `/community` — Skool community CTA
- `/contact` — Email and “Go to Application”
- `/apply` — Application form (Resend + Zapier)
- `/thank-you` — Post-apply confirmation

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Add `RESEND_API_KEY` and `ZAPIER_WEBHOOK_URL` in Vercel project environment variables.
3. Deploy. Domain: point `acquisitionsystems.io` to the Vercel project.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (electric-cyan #00F0FF, wave-blue #3A4BFF, Inter)
- **Framer Motion** (scroll reveal, mobile menu)
- **TypeScript**
- **Resend** (application emails)
- **Zapier** (webhook for CRM/boards)
