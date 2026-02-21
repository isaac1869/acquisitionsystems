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
    trigger: "How do I actually implement value-based pricing?",
    messages: [
      { role: "reader" as const, text: "I just read Chapter 3 on value-based pricing. How do I actually implement this with my current clients? Do I just raise my prices?" },
      { role: "twin" as const, text: "Not quite — raising prices without restructuring the offer is the most common mistake. What Chapter 3 is getting at is reframing the conversation entirely. Instead of 'here's what I deliver,' you lead with 'here's the outcome I create.'" },
      { role: "twin" as const, text: "For example, if you're a health coach charging $3,000 for a 12-week program, the shift isn't charging $5,000 for the same thing. It's restructuring around the transformation — 'lose 30 pounds and keep it off for a year' — and pricing that outcome." },
      { role: "twin" as const, text: "I walk through this in more detail in Chapter 5. But if you want help applying this to your specific offer, that's exactly what the program is designed for. Want me to check if there's availability?" },
    ],
  },
  {
    trigger: "What if my clients push back on higher pricing?",
    messages: [
      { role: "reader" as const, text: "I love the concept but my market is price-sensitive. What if clients push back?" },
      { role: "twin" as const, text: "That's actually addressed in Chapter 6 — the objection handling framework. But here's the short version: price resistance almost always means the prospect doesn't yet see the value gap between where they are and where your program takes them." },
      { role: "twin" as const, text: "The book covers three specific techniques for widening that gap before you ever mention price. Most experts do it backward — they pitch the price, then try to justify it. The framework flips that." },
      { role: "twin" as const, text: "If you want to practice this with your actual offer, we do live role-plays inside the program. Should I see if there's a spot this month?" },
    ],
  },
  {
    trigger: "How long before I see results?",
    messages: [
      { role: "reader" as const, text: "This all makes sense conceptually. But realistically, how long before I see a difference in my business?" },
      { role: "twin" as const, text: "Most people who implement the full framework from the book see their first pricing restructure produce results within 30 days — usually a 20-40% increase in average deal size without losing close rate." },
      { role: "twin" as const, text: "The bigger shift happens around month 3, when the positioning work from Chapters 7-9 kicks in and your inbound quality changes. That's when clients start coming to you pre-sold instead of price-shopping." },
      { role: "twin" as const, text: "But it depends heavily on your starting point. The program includes a diagnostic in the first week that gives you a specific timeline based on your current numbers. Want to explore that?" },
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
