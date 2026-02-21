// lib/animations.ts
// Shared Framer Motion animation variants for the Intellibook demo
// Philosophy: choreographed, not chaotic. Every animation has purpose.

import { Variants, Transition } from "framer-motion";

// ─── TIMING CONSTANTS ────────────────────────────────────────────

export const TIMING = {
  actTransitionDuration: 0.8,      // seconds — transition between acts
  sceneRevealDuration: 0.6,        // seconds — scene elements fading in
  numberCountUpDuration: 2.0,      // seconds — dashboard numbers counting up
  activityFeedInterval: 2500,      // ms — new event every 2.5 seconds
  chatTypingDelay: 1200,           // ms — typing indicator before AI twin responds
  staggerChildren: 0.1,           // seconds — delay between staggered child elements
  qrPulseInterval: 2.0,           // seconds — QR code glow pulse cycle
};

// ─── FADE & REVEAL VARIANTS ─────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── STAGGER CONTAINER ───────────────────────────────────────────
// Wrap children in this to get staggered reveal animations

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: TIMING.staggerChildren,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ─── ACT TRANSITIONS ─────────────────────────────────────────────
// Used for the cinematic wipe between acts

export const actEnter: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.actTransitionDuration,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const actTitleReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

// ─── DASHBOARD SPECIFIC ──────────────────────────────────────────

export const metricReveal: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const activityFeedItem: Variants = {
  hidden: { opacity: 0, x: 20, height: 0 },
  visible: {
    opacity: 1,
    x: 0,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export const funnelBar: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ─── GLOW / PULSE EFFECTS ────────────────────────────────────────

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 10px rgba(0, 229, 204, 0.3)",
      "0 0 25px rgba(0, 229, 204, 0.6)",
      "0 0 10px rgba(0, 229, 204, 0.3)",
    ],
    transition: {
      duration: TIMING.qrPulseInterval,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const negativeCAGlow = {
  animate: {
    textShadow: [
      "0 0 10px rgba(0, 229, 204, 0.4)",
      "0 0 30px rgba(0, 229, 204, 0.8)",
      "0 0 10px rgba(0, 229, 204, 0.4)",
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ─── BOOK ANIMATIONS ─────────────────────────────────────────────

export const bookOpen: Variants = {
  closed: {
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  open: {
    rotateY: -30,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// ─── ATTRIBUTION TIMELINE ────────────────────────────────────────

export const timelineNode: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const timelineLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ─── CHAT ANIMATIONS ─────────────────────────────────────────────

export const chatBubble: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const typingIndicator = {
  animate: {
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ─── COMPARISON / ACT 3 ─────────────────────────────────────────

export const columnReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const heroNumberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

// ─── PARTICLE EFFECT (for booking confirmation) ──────────────────

export const particle: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: { x: number; y: number; delay: number }) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 1.5,
      delay: custom.delay,
      ease: "easeOut",
    },
  }),
};

// ─── SPRING CONFIGS ──────────────────────────────────────────────

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};
