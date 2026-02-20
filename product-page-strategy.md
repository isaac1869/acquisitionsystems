# Product Page — Copy + Demo Integration Strategy

## The Core Problem with the Current Page

The current page describes the system in three static sections (Intellibook, AI SDR Twin, CoreText) with placeholder brackets like "[Diagram: Book → reader interaction → data capture]" and a "Sales Video Coming Soon" block. It's telling the prospect what the system does. It needs to SHOW them. The interactive demo replaces all the placeholders and becomes the centerpiece of the page.

---

## PAGE STRUCTURE (Top to Bottom)

---

### SECTION 1: Hero
**Purpose**: Pattern interrupt. Make them stop scrolling.

```
Subhead (small, uppercase, tracked):
YOUR BOOK IS NOT A BOOK

Headline (large, hero-weight):
It's a client acquisition engine
with negative CAC.

Body (1-2 lines max):
Intellibook turns a single book into a system that acquires
high-ticket clients at a lower cost than Meta or Google —
and keeps working after you stop spending.

CTA button:
[See It In Action ↓] (smooth-scrolls to the demo)

Secondary link:
[Apply for Early Access →] (/apply)
```

**Design notes**: No video placeholder. No "coming soon." The demo IS the video. The hero's only job is to create enough intrigue that they scroll into the demo.

---

### SECTION 2: The Interactive Demo (FULL-WIDTH, IMMERSIVE)
**Purpose**: This IS the product page. Everything else supports it.

The interactive demo lives here as an embedded, full-width section. It takes over the page. The prospect scrolls into it and experiences the three-act structure:

- Act 1: The Reader Experience
- Act 2: The CoreText Dashboard
- Act 3: The Economics

**Integration approach**: Two options depending on build complexity:

**Option A — Embedded directly in the product page (preferred)**
The demo components are built into the product page itself. As the user scrolls, the acts trigger in sequence. The page IS the demo. This is the Apple product page approach — no separate app, no "click here to see the demo." You're already in it.

**Option B — Iframe or linked experience**
If the demo is a separate Next.js app on its own Vercel deployment, embed it in an iframe that takes up the full viewport width and a fixed height (e.g., 80vh), or link to it with a prominent "Launch Demo" button that opens it in a new tab. Less ideal because it breaks the flow.

**Recommendation**: Option A if the product site and the demo are in the same codebase. Option B as a short-term solution if they're separate deploys — you can always merge later.

**Transition copy after the demo ends:**

```
Small text, centered, after the demo's closing statement:
That's one book. One expert. One system.
Now imagine what it does for yours.
```

---

### SECTION 3: How It Works (Compressed)
**Purpose**: Reinforce the three layers for prospects who want a quick summary after experiencing the demo.

This replaces the current three long sections (Intellibook, AI SDR Twin, CoreText) with a tight, visual summary. The demo already did the heavy lifting — this is just the reference card.

```
Section header:
THREE LAYERS. ONE LOOP.

Layout: Three columns (or stacked on mobile), each with an icon/visual, short headline, and 2-line description. No bullet points — the demo already showed the details.
```

**Column 1: Intellibook**
```
Headline: Capture
Subhead: Your book becomes infrastructure.

Every chapter is instrumented with SMS triggers, QR codes,
and trackable CTAs. Passive readers become active leads —
captured at the moment of intent, not after a cold opt-in.
```

**Column 2: AI SDR Twin**
```
Headline: Qualify
Subhead: Your best closer, available 24/7.

An AI trained on your methodology engages every reader via
SMS and chat. It answers questions in your voice, handles
objections, and books qualified calls — without you
touching anything.
```

**Column 3: CoreText**
```
Headline: Attribute
Subhead: From page to payment, tracked.

See which chapters drive action, which readers become clients,
and what every dollar of book spend actually produced. Full
attribution from first scan to closed deal.
```

```
Below the three columns, a single connecting line or arrow graphic:

Capture → Qualify → Attribute → Optimize → Compound

One line below it:
The more books you distribute, the smarter the system gets.
The more it runs, the less each client costs.
```

---

### SECTION 4: The Math
**Purpose**: For the operator brain. They saw the demo — now give them the reference numbers.

```
Section header:
THE ECONOMICS THAT CHANGE THE CONVERSATION

Layout: Two-column comparison card (dark card, same aesthetic as demo)
```

**Left column (muted/red-tinted): "The Treadmill"**
```
- You spend $25K/month on Meta
- 500 cold leads, 50% show rate
- True CAC runs into the thousands — and rising
- Pipeline goes to zero when spend stops
- Zero attribution between ad click and close
```

**Right column (cyan-tinted): "The Engine"**
```
- Same $25K — but spent acquiring book buyers
- 500 warm readers who paid, read, and trust you
- Front-end book revenue offsets ad spend
- Effective CAC: negative
- Full 1:1 attribution from book to booked call
- The book never stops working
```

```
Below the comparison:

Hero stat (large, centered):
"$0 → Negative"
What your client acquisition cost becomes when the
book pays for itself before the first call is booked.

Small link: [Run Your Numbers →] (links to the Negative CAC Calculator)
```

---

### SECTION 5: What You Get (Compressed)
**Purpose**: The deliverables list for the detail-oriented buyer (or their COO).

```
Section header:
WHAT'S INCLUDED

Layout: Clean grid, 2x3 on desktop, stacked on mobile.
Each item: icon + bold headline + one sentence.
No multi-paragraph descriptions — just clarity.
```

```
1. Book Extraction + Production
   Six 90-minute sessions. Nine hours. No writing.
   We extract your methodology and build the book.

2. Intellibook Technology
   QR triggers, SMS capture, and trackable CTAs
   embedded in every format — physical, digital, audio.

3. AI SDR Twin
   Trained on your voice and offer. Engages readers,
   qualifies intent, books calls. Always on.

4. CoreText Analytics
   Chapter-level engagement, CTA performance,
   conversation outcomes, revenue attribution.

5. Fulfillment + Distribution
   Print, digital, audio, Amazon — handled end to end.
   No vendor coordination on your side.

6. Selective Onboarding
   One expert brand per month. Application-based.
   We only take clients where we can forecast ROI.
```

---

### SECTION 6: Who This Is For / Who This Is Not For
**Purpose**: Self-qualification. Saves everyone time. Also creates exclusivity.

```
Section header:
THIS IS BUILT FOR A SPECIFIC OPERATOR

Layout: Two columns
```

**Left column: "This is for you if..."**
```
- You run a 7-8 figure business in health, wealth, or mindset
- You have a proven high-ticket offer ($5K-$25K+) that closes
- You're currently spending $10K-$100K+/month on Meta or Google
- You have a sales team or process that converts qualified leads
- You think in CAC, LTV, and pipeline velocity — not vanity metrics
- You want an asset that compounds, not an expense that resets monthly
```

**Right column: "This is not for you if..."**
```
- You don't have a proven backend offer yet
- You're not currently running paid traffic
- You want a book for credibility or legacy — not client acquisition
- You're evaluating this as a "publishing" investment
- You're looking for the cheapest option
```

```
Below:
If you meet the criteria on the left, the ROI math is
straightforward. If you're on the right, we'll tell you
that on the first call — we don't take clients we can't
deliver for.
```

---

### SECTION 7: CTA (Final)
**Purpose**: Close the page with urgency and a single action.

```
Background: Slightly different from the rest of the page — a subtle gradient or elevated card to create visual separation.

Headline:
One expert brand per month.
Application-based. Capacity-limited.

Body:
We review every application against three criteria:
a compelling methodology, a proven high-ticket offer
running paid traffic, and the revenue to invest strategically.
If you qualify, we'll show you the model with your numbers.

CTA button (prominent):
[Apply for Early Access]

Small text below:
Application takes 3 minutes. If accepted, your first
call is a no-obligation system walkthrough.
```

---

## WHAT TO REMOVE FROM THE CURRENT PAGE

1. **"Sales Video Coming Soon"** — Kill this immediately. The demo replaces it. "Coming Soon" signals you're not ready. You are.

2. **The bracketed placeholders** — "[Diagram: Book → reader interaction → data capture]" etc. These look like wireframe notes that shipped to production.

3. **The long bullet-point lists under each product section** — The demo shows all of this. The page text just needs to reference it, not re-explain it.

4. **"The Loop" section as currently written** — The concept is right but the current single-line text treatment doesn't land. Replace with the visual "Capture → Qualify → Attribute → Optimize → Compound" treatment with the line underneath.

5. **Redundant "What you get" descriptions** — Current versions are too long. Compress to one sentence each.

---

## COPY PRINCIPLES FOR THIS PAGE

1. **Lead with the outcome, not the mechanism.** Never say "we publish books." Say "we acquire clients at negative cost." The book is the how, not the what.

2. **Numbers over adjectives.** "Negative CAC" beats "revolutionary system." "$47 below zero" beats "incredibly efficient." This audience lives in dashboards.

3. **The prospect should see themselves.** Every pain point should feel like you read their mind: rising CPAs, cold leads, pipeline that dies when spend stops.

4. **Scarcity is real, so state it plainly.** "One brand per month" isn't manufactured urgency — it's an operational constraint. Say it without hype.

5. **The demo does the selling.** The copy's job is to get them INTO the demo and then give them a clear next step AFTER the demo. Don't compete with the demo — support it.

---

## INTEGRATION CHECKLIST

- [ ] Remove "Sales Video Coming Soon" block
- [ ] Remove bracketed placeholder references
- [ ] Build demo as full-width embedded section (or iframe short-term)
- [ ] Replace three long product sections with compressed three-column layout
- [ ] Add the comparison card (treadmill vs engine)
- [ ] Add "Who This Is For / Not For" section
- [ ] Link to Negative CAC Calculator from the economics section
- [ ] Update final CTA copy
- [ ] Ensure mobile responsiveness (demo must work on phone — Meta ad traffic)
- [ ] Connect Apply button to actual application intake (future: the Lead Scorer tool)
