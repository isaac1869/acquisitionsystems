// Slide deck structure matching https://intellibook-demo.vercel.app/ (10 slides, 3 acts)

export const TOTAL_SLIDES = 10;

export interface SlideMeta {
  act: 0 | 1 | 2;
  title: string;
  subtitle?: string;
}

export const slideMeta: SlideMeta[] = [
  // Act 1: The Reader Experience (slides 0–3)
  {
    act: 0,
    title: "The Book Arrives",
    subtitle: "Your book arrives. But this isn't an ordinary book.",
  },
  {
    act: 0,
    title: "The First Trigger",
    subtitle:
      "Every chapter contains intelligent triggers — QR codes, SMS prompts, and URLs that turn passive readers into active participants.",
  },
  {
    act: 0,
    title: "The AI Twin Engages",
    subtitle: "When a reader scans or texts, your AI twin responds in your voice — qualifying, answering, and booking calls.",
  },
  {
    act: 0,
    title: "Reader to Client",
    subtitle: "From first scan to closed deal, every step is captured and attributed.",
  },
  // Act 2: The Expert Dashboard (slides 4–6)
  {
    act: 1,
    title: "CoreText Dashboard",
    subtitle:
      "For the first time, every reader interaction is tracked. Every page read, every QR scanned, every AI conversation — all flowing into one intelligence engine.",
  },
  {
    act: 1,
    title: "Activity Feed",
    subtitle: "See what's happening in real time — who's reading, who's engaging, who's booking.",
  },
  {
    act: 1,
    title: "Conversion Funnel",
    subtitle:
      "From book sold to high-ticket close. Full attribution from first touch to revenue.",
  },
  // Act 3: The Economics (slides 7–9)
  {
    act: 2,
    title: "The Side-by-Side",
    subtitle: "Same ad spend. Radically different economics.",
  },
  {
    act: 2,
    title: "The Compounding Effect",
    subtitle: "The more books you distribute, the smarter the system gets. CAC drops over time.",
  },
  {
    act: 2,
    title: "What You Get",
    subtitle: "One system. One expert brand per month. Application-based.",
  },
];

// Act labels for header tabs
export const actLabels = ["Act 1", "Act 2", "Act 3"] as const;

// First slide index for each act (for "jump to act")
export const actStartIndex: number[] = [0, 4, 7];
