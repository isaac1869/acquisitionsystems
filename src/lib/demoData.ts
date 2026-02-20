// lib/demoData.ts

export const dashboardMetrics = [
  { label: "Books Sold", value: 347, prefix: "", suffix: "", isMoney: false },
  { label: "Active Readers", value: 1204, prefix: "", suffix: "", isMoney: false },
  { label: "AI Twin Conversations", value: 892, prefix: "", suffix: "", isMoney: false },
  { label: "Calls Booked", value: 23, prefix: "", suffix: "", isMoney: false },
  { label: "High-Ticket Closes", value: 4, prefix: "", suffix: "", isMoney: false },
  { label: "Book Revenue", value: 17350, prefix: "$", suffix: "", isMoney: true },
  { label: "High-Ticket Revenue", value: 60000, prefix: "$", suffix: "", isMoney: true },
  { label: "Effective CAC", value: -47, prefix: "$", suffix: "", isMoney: true, isNegativeCAC: true },
];

export const funnelStages = [
  { label: "Books Sold", value: 347, pct: 100 },
  { label: "Triggers Activated", value: 204, pct: 58.8 },
  { label: "AI Conversations", value: 128, pct: 36.9 },
  { label: "Calls Booked", value: 23, pct: 6.6 },
  { label: "Closed", value: 4, pct: 1.2 },
];

export interface FeedEvent {
  icon: string;
  message: string;
  location?: string;
  isHighlight?: boolean;
}

export const feedEvents: FeedEvent[] = [
  { icon: "📖", message: "Reader #1,204 opened Chapter 3", location: "Houston, TX" },
  { icon: "💬", message: "AI Twin conversation — Topic: Pricing framework" },
  { icon: "📱", message: "SMS trigger — Reader scanned QR in Chapter 7" },
  { icon: "📖", message: "Reader #892 completed book — 4hr 23min read time" },
  { icon: "🎯", message: "AI Twin qualified Reader #892 as HIGH INTENT", isHighlight: true },
  { icon: "📅", message: "Call booked — Reader #892 → March 3", isHighlight: true },
  { icon: "💬", message: "Reader #1,187 asked about certification program" },
  { icon: "📦", message: "New book sale — Bundle #348", location: "Austin, TX" },
  { icon: "💰", message: "HIGH-TICKET CLOSE — Reader #341 → $15,000", isHighlight: true },
  { icon: "🔗", message: "Reader #1,102 shared QR code with colleague" },
  { icon: "💬", message: "AI Twin handled objection — Time commitment" },
  { icon: "📖", message: "Reader #956 returned to Chapter 5 (2nd read)" },
  { icon: "📱", message: "SMS trigger — Reader downloaded bonus toolkit" },
  { icon: "📦", message: "New book sale — Bundle #349", location: "Miami, FL" },
  { icon: "🎯", message: "AI Twin qualified Reader #1,187 as WARM" },
  { icon: "📅", message: "Call booked — Reader #1,187 → March 5", isHighlight: true },
  { icon: "📖", message: "Reader #1,198 highlighted 3 passages in Ch. 4" },
  { icon: "⭐", message: "Reader #780 left 5-star review on Amazon" },
  { icon: "📦", message: "New book sale — Bundle #350", location: "Nashville, TN" },
  { icon: "💰", message: "HIGH-TICKET CLOSE — Reader #1,044 → $20,000", isHighlight: true },
];

export const attributionNodes = [
  { day: 1, date: "Feb 3", event: "Book Purchased", detail: "$100 bundle via Facebook ad", type: "purchase" as const },
  { day: 3, date: "Feb 5", event: "Started Reading", detail: "Chapters 1–3, 1hr 12min", type: "reading" as const },
  { day: 5, date: "Feb 7", event: "QR Trigger", detail: "Scanned Chapter 3 — pricing video", type: "engagement" as const },
  { day: 5, date: "Feb 7", event: "AI Twin Chat", detail: "4 follow-up questions, high intent", type: "engagement" as const },
  { day: 7, date: "Feb 9", event: "Qualified: HOT", detail: "Score: 8.7/10 — priority routing", type: "qualification" as const },
  { day: 8, date: "Feb 10", event: "Call Booked", detail: "Self-booked for Feb 14", type: "booking" as const },
  { day: 12, date: "Feb 14", event: "$15,000 Close", detail: "11 days: book → client", type: "close" as const },
];

export const aiTwinConversations = [
  {
    trigger: "How does the pricing framework work?",
    messages: [
      { role: "reader" as const, text: "How does the pricing framework actually work? The book mentions value-based pricing but I want to understand the implementation." },
      { role: "twin" as const, text: "Great question — you're on Chapter 3, so you've seen the foundation. The framework has three layers: anchor pricing, tiered packaging, and what I call the \"outcome guarantee stack.\"" },
      { role: "twin" as const, text: "Most experts undercharge by 3-5x because they price on deliverables instead of outcomes. When you restructure around the transformation you create, the economics change completely." },
      { role: "twin" as const, text: "If you want to go deeper, I run a program that builds this for you. Want me to check if there's a spot open this month?" },
    ],
  },
  {
    trigger: "What results have others gotten?",
    messages: [
      { role: "reader" as const, text: "What kind of results have other people gotten from this?" },
      { role: "twin" as const, text: "The pattern is consistent — most experts who implement the full system see acquisition costs drop 60-80% within the first 90 days." },
      { role: "twin" as const, text: "One practitioner went from $9,000 per client on Facebook to acquiring clients at essentially zero cost through the book funnel. Another scaled from $1.2M to $3.4M in 14 months without increasing ad spend." },
      { role: "twin" as const, text: "The common thread isn't the tactic — it's having a system that compounds instead of resets every month. Should I send you the program details?" },
    ],
  },
  {
    trigger: "Not sure this applies to my niche",
    messages: [
      { role: "reader" as const, text: "This is interesting but I'm not sure it applies to my specific niche." },
      { role: "twin" as const, text: "That's actually the best position to be in. The more specialized your expertise, the more powerful a book becomes as an acquisition tool." },
      { role: "twin" as const, text: "If you have a high-ticket offer and you're spending on ads to fill it, the economics work regardless of niche. The book becomes the bridge between 'stranger who saw your ad' and 'warm prospect who trusts your thinking.'" },
      { role: "twin" as const, text: "Want to explore what this looks like for your business specifically? I can get you on the calendar." },
    ],
  },
];

export const compoundingChartData = [
  { month: "Jan", traditional: 270, intellibook: 75 },
  { month: "Feb", traditional: 265, intellibook: 82 },
  { month: "Mar", traditional: 258, intellibook: 95 },
  { month: "Apr", traditional: 250, intellibook: 115 },
  { month: "May", traditional: 242, intellibook: 140 },
  { month: "Jun", traditional: 235, intellibook: 172 },
  { month: "Jul", traditional: 228, intellibook: 210 },
  { month: "Aug", traditional: 220, intellibook: 255 },
  { month: "Sep", traditional: 212, intellibook: 305 },
  { month: "Oct", traditional: 205, intellibook: 362 },
  { month: "Nov", traditional: 198, intellibook: 425 },
  { month: "Dec", traditional: 190, intellibook: 495 },
];

export const bookPageContent = {
  chapterTitle: "Chapter 3: The Acquisition Inversion",
  body: "Most experts approach client acquisition backward. They spend money to interrupt strangers, push them into a funnel, and hope a small percentage convert. Every month, the meter resets.\n\nBut what if the equation could be inverted entirely? What if, instead of paying to reach cold prospects, you could get paid by warm prospects — people who already know your methodology and have demonstrated commitment with their wallet?",
  ctaText: "Unlock the complete Acquisition Inversion toolkit",
  ctaInstruction: "Scan or text UNLOCK to 555-0100",
};
