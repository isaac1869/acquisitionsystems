// lib/demoData.ts
// All sample data for the Intellibook product demo
// This data should feel realistic — not inflated, not deflated

// ─── DASHBOARD METRICS ───────────────────────────────────────────

export const dashboardMetrics = {
  booksSoldThisMonth: 347,
  activeReaders: 1204,
  aiTwinConversations: 892,
  callsBooked: 23,
  highTicketCloses: 4,
  frontEndBookRevenue: 17350,
  highTicketRevenue: 60000,
  totalRevenue: 77350,
  adSpendThisMonth: 17350,
  effectiveCAC: -47, // THIS IS THE MONEY NUMBER — negative means the system pays for itself
};

// ─── FUNNEL DATA ─────────────────────────────────────────────────

export const funnelStages = [
  { label: "Books Sold", value: 347, percentage: 100 },
  { label: "Triggers Activated", value: 204, percentage: 58.8 },
  { label: "AI Twin Conversations", value: 128, percentage: 36.9 },
  { label: "Calls Booked", value: 23, percentage: 6.6 },
  { label: "Closed", value: 4, percentage: 1.2 },
];

// ─── ACTIVITY FEED EVENTS ────────────────────────────────────────
// These rotate through the feed on a timer (every 2-4 seconds)
// Types: "reader" | "ai_twin" | "trigger" | "booking" | "close" | "engagement"

export type ActivityEventType = "reader" | "ai_twin" | "trigger" | "booking" | "close" | "engagement";

export interface ActivityEvent {
  id: string;
  type: ActivityEventType;
  icon: string;
  message: string;
  location?: string;
  timestamp: string; // relative, e.g., "just now", "2m ago"
  isHighlight?: boolean; // true for closes and bookings — gets special styling
}

export const activityFeedEvents: Omit<ActivityEvent, "id" | "timestamp">[] = [
  {
    type: "reader",
    icon: "📖",
    message: "Reader #1,204 opened Chapter 3",
    location: "Houston, TX",
  },
  {
    type: "ai_twin",
    icon: "💬",
    message: "AI Twin conversation started — Topic: Pricing framework",
  },
  {
    type: "trigger",
    icon: "📱",
    message: "SMS trigger activated — Reader scanned QR in Chapter 7",
  },
  {
    type: "reader",
    icon: "📖",
    message: "Reader #892 completed book — 4hr 23min total read time",
  },
  {
    type: "ai_twin",
    icon: "🎯",
    message: "AI Twin qualified Reader #892 as HIGH INTENT",
    isHighlight: true,
  },
  {
    type: "booking",
    icon: "📅",
    message: "Call booked — Reader #892 → Sales calendar, March 3",
    isHighlight: true,
  },
  {
    type: "ai_twin",
    icon: "💬",
    message: "Reader #1,187 asked AI Twin about certification program",
  },
  {
    type: "reader",
    icon: "📦",
    message: "New book sale — Bundle #348",
    location: "Austin, TX",
  },
  {
    type: "close",
    icon: "💰",
    message: "HIGH-TICKET CLOSE — Reader #341 → $15,000 program",
    isHighlight: true,
  },
  {
    type: "engagement",
    icon: "🔗",
    message: "Reader #1,102 shared book QR code with colleague",
  },
  {
    type: "ai_twin",
    icon: "💬",
    message: "AI Twin handled objection — Topic: Time commitment",
  },
  {
    type: "reader",
    icon: "📖",
    message: "Reader #956 returned to Chapter 5 (second read)",
  },
  {
    type: "trigger",
    icon: "📱",
    message: "SMS trigger activated — Reader downloaded bonus toolkit",
  },
  {
    type: "reader",
    icon: "📦",
    message: "New book sale — Bundle #349",
    location: "Miami, FL",
  },
  {
    type: "ai_twin",
    icon: "🎯",
    message: "AI Twin qualified Reader #1,187 as WARM",
  },
  {
    type: "booking",
    icon: "📅",
    message: "Call booked — Reader #1,187 → Sales calendar, March 5",
    isHighlight: true,
  },
  {
    type: "reader",
    icon: "📖",
    message: "Reader #1,198 highlighted 3 passages in Chapter 4",
  },
  {
    type: "engagement",
    icon: "⭐",
    message: "Reader #780 left 5-star review on Amazon",
  },
  {
    type: "reader",
    icon: "📦",
    message: "New book sale — Bundle #350",
    location: "Nashville, TN",
  },
  {
    type: "close",
    icon: "💰",
    message: "HIGH-TICKET CLOSE — Reader #1,044 → $20,000 program",
    isHighlight: true,
  },
];

// ─── SAMPLE READER PROFILE ──────────────────────────────────────

export interface ReaderProfile {
  name: string;
  location: string;
  bookPurchased: string;
  chaptersRead: number;
  totalChapters: number;
  totalReadTime: string;
  readingSessions: number;
  qrScans: { chapter: number; action: string }[];
  aiTwinConversations: { topic: string; outcome: string }[];
  qualificationScore: number; // 0-10
  qualificationLabel: "COLD" | "WARM" | "HOT";
  status: string;
  predictedCloseRate: number; // percentage
}

export const sampleReaderProfile: ReaderProfile = {
  name: "Michael R.",
  location: "Scottsdale, AZ",
  bookPurchased: "Feb 3, 2026",
  chaptersRead: 7,
  totalChapters: 12,
  totalReadTime: "3hr 47min",
  readingSessions: 5,
  qrScans: [
    { chapter: 2, action: "Downloaded assessment worksheet" },
    { chapter: 3, action: "Accessed pricing framework video" },
    { chapter: 7, action: "Started AI Twin conversation" },
  ],
  aiTwinConversations: [
    { topic: "Asked about pricing model", outcome: "Engaged — asked 4 follow-up questions" },
    { topic: "Asked about certification process", outcome: "HIGH INTENT — requested call booking" },
  ],
  qualificationScore: 8.7,
  qualificationLabel: "HOT",
  status: "Call booked — Feb 24",
  predictedCloseRate: 73,
};

// ─── ATTRIBUTION TIMELINE ────────────────────────────────────────

export interface AttributionNode {
  day: number;
  date: string;
  event: string;
  detail: string;
  type: "purchase" | "reading" | "engagement" | "qualification" | "booking" | "close";
}

export const attributionTimeline: AttributionNode[] = [
  {
    day: 1,
    date: "Feb 3",
    event: "Book Purchased",
    detail: "Bundle #312 — $100 via Facebook ad (Campaign: Expert_Retarget_Feb)",
    type: "purchase",
  },
  {
    day: 3,
    date: "Feb 5",
    event: "Started Reading",
    detail: "Chapters 1–3 completed in first session (1hr 12min)",
    type: "reading",
  },
  {
    day: 5,
    date: "Feb 7",
    event: "QR Trigger Activated",
    detail: "Scanned QR in Chapter 3 — accessed pricing framework video",
    type: "engagement",
  },
  {
    day: 5,
    date: "Feb 7",
    event: "AI Twin Conversation",
    detail: "Asked about pricing model, 4 follow-up questions. AI Twin identified high intent",
    type: "engagement",
  },
  {
    day: 7,
    date: "Feb 9",
    event: "Qualified: HIGH INTENT",
    detail: "Qualification score: 8.7/10 — triggered priority routing",
    type: "qualification",
  },
  {
    day: 8,
    date: "Feb 10",
    event: "Call Booked",
    detail: "AI Twin suggested call → Reader self-booked for Feb 14",
    type: "booking",
  },
  {
    day: 12,
    date: "Feb 14",
    event: "HIGH-TICKET CLOSE",
    detail: "$15,000 — Project 90 program. Time from book purchase to close: 11 days",
    type: "close",
  },
];

// ─── ACT 3: COMPARISON DATA ─────────────────────────────────────

export const comparisonData = {
  current: {
    label: "Your Current Model",
    monthlyAdSpend: 25000,
    leadsGenerated: 500,
    leadQuality: "Cold opt-ins who haven't read anything",
    showRate: "50%",
    closeRate: "10%",
    clientsClosed: 25,
    trueCAC: 4200,
    monthlyRevenue: 375000,
    monthlyNet: 270000,
  },
  intellibook: {
    label: "With Intellibook",
    monthlyAdSpend: 25000,
    booksSold: 500,
    bookProfit: 25000,
    leadQuality: "Warm buyers who paid, read, and trust you",
    showRate: "85%",
    closeRate: "20%",
    highTicketCloses: 5,
    trueCAC: -5000, // Negative — book revenue exceeds ad cost per close
    highTicketRevenue: 75000,
    totalRevenue: 100000,
    monthlyNet: 75000,
  },
};

// ─── ACT 3: 12-MONTH COMPOUNDING CHART DATA ─────────────────────

export const compoundingChartData = [
  { month: "Jan", traditional: 270000, intellibook: 75000 },
  { month: "Feb", traditional: 265000, intellibook: 82000 },
  { month: "Mar", traditional: 258000, intellibook: 95000 },
  { month: "Apr", traditional: 250000, intellibook: 115000 },
  { month: "May", traditional: 242000, intellibook: 140000 },
  { month: "Jun", traditional: 235000, intellibook: 172000 },
  { month: "Jul", traditional: 228000, intellibook: 210000 },
  { month: "Aug", traditional: 220000, intellibook: 255000 },
  { month: "Sep", traditional: 212000, intellibook: 305000 },
  { month: "Oct", traditional: 205000, intellibook: 362000 },
  { month: "Nov", traditional: 198000, intellibook: 425000 },
  { month: "Dec", traditional: 190000, intellibook: 495000 },
];

// ─── AI TWIN SAMPLE CONVERSATIONS ───────────────────────────────
// Pre-scripted paths for the interactive demo in Act 1

export interface ChatMessage {
  role: "reader" | "twin";
  text: string;
  delayMs: number; // delay before this message appears
}

export interface ConversationPath {
  triggerQuestion: string; // What the user clicks to start this path
  messages: ChatMessage[];
}

export const aiTwinConversations: ConversationPath[] = [
  {
    triggerQuestion: "How does the pricing framework actually work?",
    messages: [
      { role: "reader", text: "How does the pricing framework actually work? The book mentions value-based pricing but I want to understand the implementation.", delayMs: 0 },
      { role: "twin", text: "Great question — you're on Chapter 3, so you've seen the foundation. The framework has three layers: anchor pricing, tiered packaging, and what I call the \"outcome guarantee stack.\"", delayMs: 1500 },
      { role: "twin", text: "The short version: most experts undercharge by 3-5x because they price on deliverables instead of outcomes. When you restructure around the transformation you create, the economics change completely.", delayMs: 3000 },
      { role: "twin", text: "If you want to see how this applies to YOUR specific offer, I can walk you through it. Or — if you're ready to go deep — we do this as a full diagnostic inside the program. Want me to check if there's a spot open this month?", delayMs: 4500 },
    ],
  },
  {
    triggerQuestion: "What results have other people gotten?",
    messages: [
      { role: "reader", text: "What kind of results have other people gotten from this?", delayMs: 0 },
      { role: "twin", text: "Depends on where they start — but the pattern is consistent. Most experts who implement the full system see their cost to acquire a client drop by 60-80% within the first 90 days.", delayMs: 1500 },
      { role: "twin", text: "One practitioner went from spending $9,000 per client on Facebook to acquiring clients at essentially zero cost through the book funnel. Another scaled from $1.2M to $3.4M in 14 months without increasing ad spend.", delayMs: 3000 },
      { role: "twin", text: "The common thread isn't the tactic — it's having a system that compounds instead of resets every month. That's what the program builds for you. Should I send you the details?", delayMs: 4500 },
    ],
  },
  {
    triggerQuestion: "I'm not sure this applies to my niche.",
    messages: [
      { role: "reader", text: "This is interesting but I'm not sure it applies to my specific niche. I'm in a pretty specialized space.", delayMs: 0 },
      { role: "twin", text: "That's actually the best position to be in. The more specialized your expertise, the more powerful a book becomes as an acquisition tool — because you're the definitive authority in a defined space.", delayMs: 1500 },
      { role: "twin", text: "What's your area? I can tell you specifically how other experts in adjacent spaces have applied this.", delayMs: 3000 },
      { role: "twin", text: "Either way — if you have a high-ticket offer and you're spending on ads to fill it, the economics work regardless of niche. The book just becomes the bridge between 'stranger who saw your ad' and 'warm prospect who trusts your thinking.' Want to explore what this looks like for your business specifically?", delayMs: 4500 },
    ],
  },
];

// ─── BOOK PAGE SAMPLE CONTENT ────────────────────────────────────
// Simulated book text for Act 1

export const bookPageContent = {
  chapterTitle: "Chapter 3: The Acquisition Inversion",
  bodyText: `Most experts approach client acquisition backward. They spend money to interrupt strangers, push them into a funnel, and hope a small percentage convert. Every month, the meter resets. Every month, the cost goes up.

But what if the equation could be inverted entirely?

What if, instead of paying to reach cold prospects, you could get paid by warm prospects — people who already know your methodology, trust your thinking, and have demonstrated commitment with their wallet — before they ever speak to your sales team?

That's not a hypothetical. It's a model that's already working for a small number of experts who've figured out what the book actually is: not a product, but an acquisition engine.`,
  qrCallToAction: "Unlock the complete Acquisition Inversion toolkit — including the calculator that shows your exact numbers.",
  qrInstruction: "Scan or text UNLOCK to 555-0100",
};
