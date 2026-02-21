"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TOTAL_SLIDES,
  slideMeta,
  actLabels,
  actStartIndex,
} from "@/lib/demoSlides";
import { bookPageContent } from "@/lib/demoData";
import { FadeReveal } from "@/components/demo/FadeReveal";
import { AnimatedNumber } from "@/components/demo/AnimatedNumber";
import { useActivityFeed } from "@/hooks/useActivityFeed";
import { dashboardMetrics, funnelStages, feedEvents } from "@/lib/demoData";
import { LINKS } from "@/lib/demoConstants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { compoundingChartData } from "@/lib/demoData";

const ACT_SUBTITLES = [
  "The Reader Experience",
  "The Expert Dashboard",
  "The Economics",
];

// ─── Slide 0: The Book Arrives ───────────────────────────────────────
function SlideBookArrives() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-gray-500 text-sm mt-4">
        Every chapter is instrumented with intelligent triggers — QR codes,
        SMS prompts, and AI conversations that turn readers into clients.
      </p>
      <p className="text-teal-600 font-semibold mt-8">CLEAR by James Swanwick</p>
    </div>
  );
}

// ─── Slide 1: The First Trigger (book mockup) ──────────────────────────
function SlideFirstTrigger() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-[#111] border border-gray-200 rounded-lg shadow-xl p-6 text-left">
        <p className="text-teal-600 text-xs font-mono uppercase tracking-widest mb-3">
          {bookPageContent.chapterTitle}
        </p>
        <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
          {bookPageContent.body.split("\n\n").slice(0, 2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 border border-teal-200 rounded-lg p-4 flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center border border-teal-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-teal-600"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="3" height="3" />
              <rect x="18" y="14" width="3" height="3" />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-medium">
              {bookPageContent.ctaText}
            </p>
            <p className="text-gray-500 text-xs mt-1 font-mono">
              {bookPageContent.ctaInstruction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 2: AI Twin Engages ──────────────────────────────────────────
function SlideAITwin() {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900">AI Author Twin</p>
        <p className="text-xs text-gray-500">Responds in your voice, 24/7</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[85%]">
            <p className="text-sm text-gray-700">
              How does the pricing framework actually work?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-teal-600 text-white rounded-lg px-4 py-2 max-w-[85%]">
            <p className="text-sm">
              Great question — the framework has three layers: anchor pricing,
              tiered packaging, and the outcome guarantee stack.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-teal-600 text-white rounded-lg px-4 py-2 max-w-[85%]">
            <p className="text-sm">
              Want me to check if there&apos;s a spot open this month?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 3: Reader to Client ─────────────────────────────────────────
function SlideReaderToClient() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2 flex-wrap text-sm font-medium text-gray-600">
        <span>Book</span>
        <span className="text-gray-400">→</span>
        <span>Trigger</span>
        <span className="text-gray-400">→</span>
        <span>AI Twin</span>
        <span className="text-gray-400">→</span>
        <span>Qualified</span>
        <span className="text-gray-400">→</span>
        <span className="text-teal-600">Client</span>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">
        From first scan to closed deal, every step is captured and attributed.
      </p>
    </div>
  );
}

// ─── Slide 4: CoreText Dashboard ────────────────────────────────────────
function SlideCoreTextDashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            CoreText Intelligence Engine
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-600">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            LIVE
          </span>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {dashboardMetrics.slice(0, 4).map((m) => (
            <div
              key={m.label}
              className="p-3 rounded-lg border border-gray-100 bg-gray-50"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {m.label}
              </p>
              <p className="text-xl font-bold text-gray-900 mt-1">
                <AnimatedNumber value={m.value} prefix={m.prefix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 5: Activity Feed ────────────────────────────────────────────
function SlideActivityFeed() {
  const events = useActivityFeed(true);
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <p className="font-medium text-gray-900">Activity Feed</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-600">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          LIVE
        </span>
      </div>
      <div className="p-3 space-y-2 max-h-[320px] overflow-y-auto hide-scrollbar">
        {(events.length ? events : feedEvents.slice(0, 6)).map((e, i) => (
          <div
            key={"id" in e && e.id ? String(e.id) : `static-${i}`}
            className={`flex items-start gap-3 px-3 py-2 rounded-lg text-sm ${
              e.isHighlight ? "bg-teal-50 border border-teal-100" : "bg-gray-50"
            }`}
          >
            <span className="text-base flex-shrink-0">{e.icon}</span>
            <p
              className={
                e.isHighlight ? "text-gray-900 font-medium" : "text-gray-600"
              }
            >
              {e.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 6: Conversion Funnel ─────────────────────────────────────────
function SlideConversionFunnel() {
  return (
    <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-4">
      <p className="font-medium text-gray-900 mb-4">Conversion Funnel</p>
      <div className="space-y-3">
        {funnelStages.map((stage) => (
          <div key={stage.label} className="flex justify-between text-sm">
            <span className="text-gray-600">{stage.label}</span>
            <span className="font-mono text-gray-900">
              {stage.value} ({stage.pct}%)
            </span>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-4 italic">
        &ldquo;For the first time in publishing history, you can see exactly
        which reader became which client.&rdquo;
      </p>
    </div>
  );
}

// ─── Slide 7: The Side-by-Side ──────────────────────────────────────────
function SlideSideBySide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="bg-white border border-red-200 rounded-xl p-6">
        <p className="text-red-600 text-xs font-mono uppercase tracking-widest mb-3">
          Your Current Model
        </p>
        <div className="space-y-2 text-sm">
          <Row label="Monthly Ad Spend" value="$25,000" />
          <Row label="Leads Generated" value="500" />
          <Row label="Lead Quality" value="Cold opt-ins" />
          <Row label="Show Rate" value="50%" />
          <Row label="Close Rate" value="10%" />
          <Row label="Clients Closed" value="25" />
          <div className="pt-3 border-t border-gray-100">
            <Row label="True CAC" value="$4,193" highlight="red" />
          </div>
        </div>
      </div>
      <div className="bg-white border border-teal-200 rounded-xl p-6">
        <p className="text-teal-600 text-xs font-mono uppercase tracking-widest mb-3">
          With Intellibook
        </p>
        <div className="space-y-2 text-sm">
          <Row label="Monthly Ad Spend" value="$25,000" />
          <Row label="Books Sold" value="500" />
          <Row label="Lead Quality" value="Warm buyers who read & trust you" highlight="teal" />
          <Row label="Show Rate" value="85%" />
          <Row label="Close Rate" value="20%" />
          <Row label="High-Ticket Closes" value="5" />
          <div className="pt-3 border-t border-gray-100">
            <Row label="Effective CAC" value="-$4,954" highlight="teal" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "red" | "teal";
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span
        className={
          highlight === "red"
            ? "text-red-600 font-bold"
            : highlight === "teal"
              ? "text-teal-600 font-bold"
              : "text-gray-900 font-medium"
        }
      >
        {value}
      </span>
    </div>
  );
}

// ─── Slide 8: Compounding Effect ────────────────────────────────────────
function SlideCompounding() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={compoundingChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `$${v}`} />
            <Tooltip formatter={(value?: number) => (value != null ? `$${value}` : "")} />
            <Legend />
            <Line
              type="monotone"
              dataKey="traditional"
              stroke="#ef4444"
              strokeWidth={2}
              name="Traditional"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="intellibook"
              stroke="#14b8a6"
              strokeWidth={2}
              name="Intellibook"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        The more books you distribute, the smarter the system gets. CAC drops
        over time.
      </p>
    </div>
  );
}

// ─── Slide 9: What You Get (CTA) ────────────────────────────────────────
function SlideWhatYouGet() {
  return (
    <div className="text-center max-w-xl mx-auto">
      <p className="text-gray-600 text-sm mb-6">
        One system. Book extraction, Intellibook tech, AI SDR Twin, CoreText
        analytics, fulfillment — and one expert brand per month.
      </p>
      <a
        href={LINKS.apply}
        className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
      >
        Apply for Early Access
      </a>
    </div>
  );
}

const SLIDE_COMPONENTS = [
  SlideBookArrives,
  SlideFirstTrigger,
  SlideAITwin,
  SlideReaderToClient,
  SlideCoreTextDashboard,
  SlideActivityFeed,
  SlideConversionFunnel,
  SlideSideBySide,
  SlideCompounding,
  SlideWhatYouGet,
];

// ─── Main deck with chrome ─────────────────────────────────────────────
export function IntellibookDemoSlides() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(TOTAL_SLIDES - 1, index));
      setCurrent(next);
    },
    []
  );

  const goPrev = useCallback(() => go(current - 1), [current, go]);
  const goNext = useCallback(() => go(current + 1), [current, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const meta = slideMeta[current];
  const actLabel = ACT_SUBTITLES[meta.act];
  const SlideContent = SLIDE_COMPONENTS[current];

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50"
      style={{
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Header */}
      <header className="flex-shrink-0 border-b border-gray-200 bg-white/90 backdrop-blur px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <span className="font-semibold text-gray-900">
            INTELLIBOOK
            <span className="text-gray-400 font-normal mx-2">|</span>
            Product Demo
          </span>
        </div>
        <div className="flex items-center gap-2">
          {actLabels.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => go(actStartIndex[i])}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                meta.act === i
                  ? "bg-teal-600 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-500 tabular-nums">
          {current + 1} / {TOTAL_SLIDES}
        </span>
      </header>

      {/* Slide list overlay (hamburger) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="w-72 h-full bg-white shadow-xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-semibold text-gray-900 mb-4">Slides</p>
              <ul className="space-y-1">
                {slideMeta.map((s, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => {
                        go(i);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                        i === current ? "bg-teal-100 text-teal-800 font-medium" : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {i + 1}. {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl">
          <p className="text-teal-600 text-xs font-mono uppercase tracking-[0.2em] text-center mb-2">
            ACT {meta.act + 1}: {actLabel.toUpperCase()}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            {meta.title}
          </h2>
          {meta.subtitle && (
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              {meta.subtitle}
            </p>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="min-h-[280px] flex items-center justify-center"
            >
              <SlideContent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer nav */}
      <footer className="flex-shrink-0 border-t border-gray-200 bg-white/90 backdrop-blur px-4 py-4">
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-500 tabular-nums">
            {current + 1} / {TOTAL_SLIDES}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={current === TOTAL_SLIDES - 1}
            className="px-4 py-2 rounded-lg bg-teal-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-700"
          >
            Next →
          </button>
        </div>
        <p className="text-center text-gray-400 text-xs mt-2">
          Use arrow keys or click to navigate
        </p>
      </footer>
    </div>
  );
}
