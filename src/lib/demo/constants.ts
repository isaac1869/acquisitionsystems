// lib/demo/constants.ts
// Light theme design tokens for Intellibook demo (CLEAR / Negative CAC Calculator palette)

export const COLORS = {
  bg: "#FAFAFA",
  surface: "#FFFFFF",
  elevated: "#F3F4F6",
  textPrimary: "#111111",
  textSecondary: "#4B5563",
  textMuted: "#9CA3AF",
  accent: "#0D9488",
  accentDim: "rgba(13, 148, 136, 0.15)",
  money: "#059669",
  moneyDim: "rgba(5, 150, 105, 0.15)",
  warning: "#DC2626",
  warningDim: "rgba(220, 38, 38, 0.15)",
  border: "#E5E7EB",
  dotGrid: "rgba(0,0,0,0.04)",
};

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

export const LINKS = {
  apply: "https://newwavepress.co/apply",
  calculator: "/calculator",
};

export const DEMO_CONFIG = {
  activityFeedIntervalMs: 2500,
  typingIndicatorMs: 1200,
  countUpDurationMs: 2000,
  actTransitionDuration: 0.8,
};
