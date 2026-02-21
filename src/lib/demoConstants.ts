// lib/constants.ts
// Design tokens and configuration for the Intellibook demo

// ─── COLORS ──────────────────────────────────────────────────────
// These should also be configured as CSS variables in globals.css
// and as Tailwind theme extensions in tailwind.config.ts

export const COLORS = {
  // Backgrounds
  bgPrimary: "#0A0A0A",      // Near-black — main background
  bgSurface: "#111111",      // Slightly lighter — card/panel backgrounds
  bgElevated: "#1A1A1A",     // Dashboard panels, modals
  bgHover: "#222222",        // Hover states

  // Primary accent — New Wave signal color (cyan/teal)
  accent: "#00E5CC",
  accentDim: "rgba(0, 229, 204, 0.15)",
  accentGlow: "rgba(0, 229, 204, 0.4)",
  accentBorder: "rgba(0, 229, 204, 0.25)",

  // Money accent — used for revenue, closes, profit
  gold: "#FFB800",
  goldDim: "rgba(255, 184, 0, 0.15)",
  goldGlow: "rgba(255, 184, 0, 0.4)",

  // Text
  textPrimary: "#F5F5F5",
  textSecondary: "#999999",
  textMuted: "#666666",
  textDim: "#444444",

  // Status
  red: "#FF4444",
  redDim: "rgba(255, 68, 68, 0.15)",
  green: "#00CC88",
  greenDim: "rgba(0, 204, 136, 0.15)",

  // Borders
  border: "rgba(255, 255, 255, 0.06)",
  borderHover: "rgba(255, 255, 255, 0.12)",
};

// ─── TYPOGRAPHY ──────────────────────────────────────────────────
// Font families are loaded via next/font in layout.tsx
// These are reference values for the design system

export const FONTS = {
  display: "'Outfit', sans-serif",       // Headers, act titles, hero numbers
  body: "'Outfit', sans-serif",          // Body text, descriptions (lighter weight)
  mono: "'JetBrains Mono', monospace",   // Numbers, data, dashboard metrics, code
};

// ─── NAVIGATION ──────────────────────────────────────────────────

export const ACTS = [
  {
    number: 1,
    title: "The Reader Experience",
    subtitle: "What your future client sees",
    scenes: [
      { id: "1.1", label: "The Book Arrives" },
      { id: "1.2", label: "The First Trigger" },
      { id: "1.3", label: "The AI Author Twin" },
      { id: "1.4", label: "The Conversion Moment" },
    ],
  },
  {
    number: 2,
    title: "The Expert Dashboard",
    subtitle: "What YOU see",
    scenes: [
      { id: "2.1", label: "CoreText Dashboard" },
      { id: "2.2", label: "Reader Intelligence" },
      { id: "2.3", label: "The Attribution Chain" },
    ],
  },
  {
    number: 3,
    title: "The Economics",
    subtitle: "The math that changes everything",
    scenes: [
      { id: "3.1", label: "The Side-by-Side" },
      { id: "3.2", label: "The Compounding Effect" },
      { id: "3.3", label: "The Close" },
    ],
  },
];

// ─── EXTERNAL LINKS ──────────────────────────────────────────────

export const LINKS = {
  applicationPage: "/apply",
  cacCalculator: "/calculator",
  bookCall: "/apply",
  // Aliases used by older demo components
  apply: "/apply",
  calculator: "/calculator",
};

// Alias for older hooks that import TIMING from demoConstants
export const TIMING = {
  activityFeedInterval: 2500,
  countUpDuration: 2000,
  typingDelay: 1200,
  stagger: 0.1,
};

// ─── DEMO CONFIGURATION ──────────────────────────────────────────

export const DEMO_CONFIG = {
  // Activity feed
  activityFeedMaxVisible: 8,       // Max events shown at once before oldest fade out
  activityFeedIntervalMs: 2500,    // New event appears every 2.5 seconds

  // Chat simulation
  typingIndicatorMs: 1200,         // Show typing dots for this long before AI responds
  messageDelayMs: 800,             // Gap between consecutive messages

  // Dashboard number count-up
  countUpDurationMs: 2000,         // How long dashboard numbers take to count up
  countUpStartDelay: 300,          // Delay before count-up begins (after element is visible)

  // Scroll-driven mode
  sceneSnapThreshold: 0.6,        // How much of a scene must be visible to snap to it

  // Attribution timeline
  timelineNodeDelayMs: 500,        // Delay between each node lighting up in sequence
};
