# Intellibook Product Demo — Cursor Integration Guide

## What This Is

A complete interactive product demo for the Intellibook system, built as React/Next.js components. This is designed to be embedded into the existing New Wave Acquisitions site at `/product`.

## How to Integrate

### Step 1: Copy files
Copy the entire contents of this package into your project:
- `components/` → into your `src/components/demo/` directory
- `lib/` → merge into your existing `src/lib/` directory  
- `hooks/` → merge into your existing `src/hooks/` directory (or create if it doesn't exist)

### Step 2: Install dependencies (if not already present)
```bash
npm install framer-motion recharts
```
Your project likely already has these from the CAC calculator. Check `package.json` first.

### Step 3: Add Tailwind theme extensions
Add these to your `tailwind.config.ts` under `theme.extend`:
```ts
colors: {
  nw: {
    bg: '#0A0A0A',
    surface: '#111111',
    elevated: '#1A1A1A',
    accent: '#00E5CC',
    gold: '#FFB800',
    red: '#FF4444',
  }
},
fontFamily: {
  mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
}
```

### Step 4: Add fonts
In your root layout, add JetBrains Mono via next/font or Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Step 5: Replace the product page
Replace the content of your `/product` page with the new `ProductPage` component from `components/ProductPage.tsx`. This includes the full page copy rewrite AND the embedded demo.

### Step 6: Update links
Search for `UPDATE_ME` in the codebase and replace with your actual URLs:
- Application page URL
- Booking calendar URL
- CAC Calculator URL

## Architecture

The demo is built as scroll-triggered sections. As the user scrolls down the product page, they move through:

1. **Hero** → Pattern interrupt headline
2. **Demo Act 1** → Reader Experience (book mockup, QR trigger, AI twin chat)
3. **Demo Act 2** → CoreText Dashboard (live-feeling metrics, activity feed, funnel)
4. **Demo Act 3** → Economics (side-by-side comparison, compounding chart)
5. **How It Works** → Compressed three-column summary
6. **The Math** → Comparison card with link to CAC Calculator
7. **Who This Is For** → Self-qualification
8. **Final CTA** → Application

All components use Framer Motion for scroll-triggered animations. The dashboard activity feed auto-populates events on a timer to create the feeling of a live system.

## Key Cursor Prompts for Polish

After initial integration, use these prompts in Cursor to refine:

- "Make the demo sections full-bleed (edge to edge) while keeping the text sections contained in max-w-6xl"
- "Add smooth scroll snapping between demo acts on desktop"
- "Ensure the activity feed pauses when not in viewport to save performance"
- "Add keyboard navigation (arrow keys) for the demo sections"
- "Test and fix mobile responsiveness — the dashboard should stack vertically on phones"
