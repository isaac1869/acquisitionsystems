// lib/demo/demoData.ts
// CLEAR by James Swanwick — real content for the Intellibook demo

// ─── DASHBOARD METRICS (CLEAR bundles, Project 90) ─────────────────

export const dashboardMetrics = {
  booksSoldThisMonth: 412,
  activeReaders: 1189,
  aiTwinConversations: 847,
  callsBooked: 28,
  highTicketCloses: 5,
  frontEndBookRevenue: 20600,
  highTicketRevenue: 75000,
  totalRevenue: 95600,
  adSpendThisMonth: 18500,
  effectiveCAC: -42,
};

// ─── FUNNEL ───────────────────────────────────────────────────────

export const funnelStages = [
  { label: "CLEAR Bundles Sold", value: 412, percentage: 100 },
  { label: "Triggers Activated", value: 238, percentage: 57.8 },
  { label: "AI Twin Conversations", value: 156, percentage: 37.9 },
  { label: "Calls Booked", value: 28, percentage: 6.8 },
  { label: "Project 90 Closed", value: 5, percentage: 1.2 },
];

// ─── ACTIVITY FEED (CLEAR-specific) ─────────────────────────────────

export type ActivityEventType = "reader" | "ai_twin" | "trigger" | "booking" | "close" | "engagement";

export interface ActivityEvent {
  id: string;
  type: ActivityEventType;
  icon: string;
  message: string;
  location?: string;
  timestamp: string;
  isHighlight?: boolean;
}

export const activityFeedEvents: Omit<ActivityEvent, "id" | "timestamp">[] = [
  { type: "reader", icon: "📖", message: "Reader #1,189 opened Chapter 3 — Neuroplasticity", location: "Melbourne, AU" },
  { type: "ai_twin", icon: "💬", message: "AI Twin conversation — Topic: Project 90 readiness" },
  { type: "trigger", icon: "📱", message: "SMS trigger — Reader scanned QR in Chapter 5 (mindset worksheets)" },
  { type: "reader", icon: "📖", message: "Reader #892 completed CLEAR — 4hr 12min total read time" },
  { type: "ai_twin", icon: "🎯", message: "AI Twin qualified Reader #892 as HIGH INTENT", isHighlight: true },
  { type: "booking", icon: "📅", message: "Call booked — Reader #892 → Project 90 discovery, March 3", isHighlight: true },
  { type: "reader", icon: "📦", message: "New CLEAR bundle sale — AFL Team bulk order", location: "Sydney, AU" },
  { type: "close", icon: "💰", message: "Project 90 enrollment — Reader #341 → $17,500", isHighlight: true },
  { type: "ai_twin", icon: "💬", message: "Reader asked about attorney/surgeon case studies" },
  { type: "reader", icon: "📖", message: "Reader #956 returned to Chapter 7 (second read)" },
  { type: "trigger", icon: "📱", message: "SMS trigger — Reader downloaded neuroplasticity assessment" },
  { type: "reader", icon: "📦", message: "New CLEAR bundle sale", location: "Brisbane, AU" },
  { type: "ai_twin", icon: "🎯", message: "AI Twin handled objection — Topic: 90-day commitment" },
  { type: "booking", icon: "📅", message: "Call booked — Reader #1,187 → Project 90 discovery", isHighlight: true },
  { type: "close", icon: "💰", message: "Project 90 enrollment — Reader #1,044 → $15,000", isHighlight: true },
];

// ─── READER PROFILE (Michael R. — CLEAR, 9 chapters) ───────────────

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
  qualificationScore: number;
  qualificationLabel: "COLD" | "WARM" | "HOT";
  status: string;
  predictedCloseRate: number;
}

export const sampleReaderProfile: ReaderProfile = {
  name: "Michael R.",
  location: "Scottsdale, AZ",
  bookPurchased: "Feb 3, 2026",
  chaptersRead: 7,
  totalChapters: 9,
  totalReadTime: "3hr 47min",
  readingSessions: 5,
  qrScans: [
    { chapter: 2, action: "Downloaded neuroplasticity assessment" },
    { chapter: 3, action: "Accessed mindset worksheets" },
    { chapter: 7, action: "Started AI Twin conversation — business growth case studies" },
  ],
  aiTwinConversations: [
    { topic: "Asked about Project 90 results", outcome: "Engaged — asked 4 follow-up questions" },
    { topic: "Asked about attorney/surgeon case studies", outcome: "HIGH INTENT — requested discovery call" },
  ],
  qualificationScore: 8.7,
  qualificationLabel: "HOT",
  status: "Discovery call booked — Feb 24",
  predictedCloseRate: 73,
};

// ─── ATTRIBUTION TIMELINE ─────────────────────────────────────────

export interface AttributionNode {
  day: number;
  date: string;
  event: string;
  detail: string;
  type: "purchase" | "reading" | "engagement" | "qualification" | "booking" | "close";
}

export const attributionTimeline: AttributionNode[] = [
  { day: 1, date: "Feb 3", event: "CLEAR Bundle Purchased", detail: "Bundle #312 — $50 via Facebook ad", type: "purchase" },
  { day: 3, date: "Feb 5", event: "Started Reading", detail: "Chapters 1–3 (neuroplasticity) in first session", type: "reading" },
  { day: 5, date: "Feb 7", event: "QR Trigger — Chapter 3", detail: "Downloaded mindset worksheets", type: "engagement" },
  { day: 5, date: "Feb 7", event: "AI Twin Conversation", detail: "Asked about Project 90, attorney results", type: "engagement" },
  { day: 7, date: "Feb 9", event: "Qualified: HIGH INTENT", detail: "Score: 8.7/10 — priority routing", type: "qualification" },
  { day: 8, date: "Feb 10", event: "Discovery Call Booked", detail: "AI Twin suggested call → self-booked Feb 14", type: "booking" },
  { day: 12, date: "Feb 14", event: "Project 90 Enrollment", detail: "$17,500 — 11 days from book purchase", type: "close" },
];

// ─── COMPARISON DATA ───────────────────────────────────────────────

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
  },
  intellibook: {
    label: "With Intellibook",
    monthlyAdSpend: 25000,
    booksSold: 500,
    bookProfit: 25000,
    leadQuality: "Warm buyers who paid, read CLEAR, trust you",
    showRate: "85%",
    closeRate: "20%",
    highTicketCloses: 5,
    trueCAC: -5000,
    highTicketRevenue: 75000,
    totalRevenue: 100000,
  },
};

// ─── COMPOUNDING CHART ────────────────────────────────────────────

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

// ─── AI TWIN CONVERSATIONS (James Swanwick, Project 90, CLEAR) ──────

export interface ChatMessage {
  role: "reader" | "twin";
  text: string;
  delayMs: number;
}

export interface ConversationPath {
  triggerQuestion: string;
  messages: ChatMessage[];
}

export const aiTwinConversations: ConversationPath[] = [
  {
    triggerQuestion: "What results have people gotten from Project 90?",
    messages: [
      { role: "reader", text: "What kind of results have people gotten from Project 90?", delayMs: 0 },
      { role: "twin", text: "Depends on where they start — but the pattern is consistent. The attorney who went from 2 bottles of wine a night to zero in 90 days. The surgeon who finally quit after 20 years. The tech VP who said it was the best investment he'd made.", delayMs: 1500 },
      { role: "twin", text: "The neuroscience approach in CLEAR — the neuroplasticity stuff you're reading — that's what makes it stick. Not willpower. Not AA. Your brain actually rewires.", delayMs: 3000 },
      { role: "twin", text: "If you're curious whether you're a fit, I can walk you through the readiness assessment. Or we can book a discovery call and I'll show you the exact framework. Which would you prefer?", delayMs: 4500 },
    ],
  },
  {
    triggerQuestion: "I'm not sure I'm ready to commit to 90 days.",
    messages: [
      { role: "reader", text: "I'm not sure I'm ready to commit to 90 days. That feels like a lot.", delayMs: 0 },
      { role: "twin", text: "That's the most common objection — and it's actually a good sign. It means you're taking it seriously.", delayMs: 1500 },
      { role: "twin", text: "The 90 days isn't arbitrary. It's how long it takes for the brain to form new pathways. The research in CLEAR Chapter 3 — that's the science. Most people who \"try\" for 30 days relapse because the old pathways are still dominant.", delayMs: 3000 },
      { role: "twin", text: "We have a readiness assessment that takes 5 minutes. It'll tell you if you're in the right headspace. Want me to send it?", delayMs: 4500 },
    ],
  },
  {
    triggerQuestion: "How does this work with a busy schedule?",
    messages: [
      { role: "reader", text: "How does this work if you have a demanding job? I'm an executive — I don't have hours for calls.", delayMs: 0 },
      { role: "twin", text: "Most of our best outcomes are from people like you — attorneys, surgeons, VPs. The program is designed around high performers.", delayMs: 1500 },
      { role: "twin", text: "It's not daily calls. It's structured support that fits your calendar. The mindset work in CLEAR — the worksheets you can do in 15 minutes — that's the foundation. The rest is accountability and the right framework.", delayMs: 3000 },
      { role: "twin", text: "Want to see what a typical week looks like? I can send you the program overview — or we can book a 20-minute call and I'll walk you through it.", delayMs: 4500 },
    ],
  },
];

// ─── BOOK PAGE (CLEAR Chapter 3 — Neuroplasticity) ──────────────────

export const bookPageContent = {
  chapterTitle: "Chapter 3: Your Brain Can Rewire",
  bodyText: `The science is clear: your brain is not fixed. Neuroplasticity — the brain's ability to form new neural pathways — means that the habits that feel impossible to break are, in fact, changeable.

Most approaches to behavior change rely on willpower. They assume you can simply decide to stop. But your brain has spent years building pathways that make drinking feel automatic. Those pathways don't disappear because you want them to.

The CLEAR method works differently. Instead of fighting your brain, you give it something better to build. New pathways. New defaults. Over 90 days, the old pathways weaken and the new ones take over.

That's not motivational fluff. It's neuroscience. And it's why the people who complete the program don't white-knuckle their way through — they actually change.`,
  qrCallToAction: "Unlock the Neuroplasticity Assessment — see where your brain is in the rewiring process.",
  qrInstruction: "Scan or text CLEAR to 555-0100",
};
