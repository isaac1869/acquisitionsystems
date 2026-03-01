"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoMode } from "@/hooks/useDemoMode";

import { ProgressBar } from "@/components/demo/Navigation/ProgressBar";
import { SideNav } from "@/components/demo/Navigation/SideNav";

import { Scene1_BookArrives } from "@/components/demo/Act1_ReaderExperience/Scene1_BookArrives";
import { BookPage } from "@/components/demo/Act1_ReaderExperience/BookPage";
import { AITwinChat } from "@/components/demo/Act1_ReaderExperience/AITwinChat";
import { BookingConfirmation } from "@/components/demo/Act1_ReaderExperience/BookingConfirmation";

import { CoreTextDashboard } from "@/components/demo/Act2_ExpertDashboard/CoreTextDashboard";
import { ReaderProfile } from "@/components/demo/Act2_ExpertDashboard/ReaderProfile";
import { AttributionTimeline } from "@/components/demo/Act2_ExpertDashboard/AttributionTimeline";

import { SideBySide } from "@/components/demo/Act3_Economics/SideBySide";
import { CompoundingChart } from "@/components/demo/Act3_Economics/CompoundingChart";
import { ClosingStatement } from "@/components/demo/Act3_Economics/ClosingStatement";

import { COLORS } from "@/lib/demo/constants";

const scenes = [
  Scene1_BookArrives,
  BookPage,
  AITwinChat,
  BookingConfirmation,
  CoreTextDashboard,
  ReaderProfile,
  AttributionTimeline,
  SideBySide,
  CompoundingChart,
  ClosingStatement,
];

export default function DemoPage() {
  const nav = useDemoMode();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const SceneComponent = scenes[nav.currentScene];

  const handleNext = () => {
    if (nav.isLast) return;
    setDirection(1);
    nav.goNext();
  };

  const handlePrev = () => {
    if (nav.isFirst) return;
    setDirection(-1);
    nav.goPrev();
  };

  const handleGoTo = (i: number) => {
    setDirection(i > nav.currentScene ? 1 : -1);
    nav.goToScene(i);
  };

  return (
    <div
      className="relative flex flex-col h-screen overflow-hidden"
      style={{
        background: COLORS.bg,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Top bar */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: COLORS.border }}
      >
        <a
          href="/product"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: COLORS.textPrimary }}>
            INTELLIBOOK
          </span>
          <span style={{ color: COLORS.textMuted }}>|</span>
          <span className="text-xs font-mono" style={{ color: COLORS.textMuted }}>
            CLEAR Demo
          </span>
        </a>

        <div className="hidden md:block">
          <ProgressBar
            currentScene={nav.currentScene}
            totalScenes={nav.totalScenes}
            allScenes={nav.allScenes}
            currentActNumber={nav.currentAct.number}
            goToScene={handleGoTo}
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono hidden sm:block" style={{ color: COLORS.textMuted }}>
            {nav.currentScene + 1} / {nav.totalScenes}
          </span>
          <button
            onClick={() => setSideNavOpen(true)}
            className="text-xl leading-none hover:opacity-70 transition-opacity"
            style={{ color: COLORS.textMuted }}
            aria-label="Open scene navigator"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Act label */}
      <div
        className="flex-shrink-0 px-6 py-2 border-b"
        style={{ borderColor: COLORS.border }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={nav.currentAct.number}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: COLORS.accent }}
            >
              Act {nav.currentAct.number}: {nav.currentAct.title}
            </span>
            <span style={{ color: COLORS.textMuted }}>—</span>
            <span className="text-[10px] font-mono" style={{ color: COLORS.textMuted }}>
              {nav.scene.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scene content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={nav.currentScene}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir * 40, scale: 0.98 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (dir: number) => ({ opacity: 0, x: -dir * 40, scale: 0.98 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 flex items-center justify-center overflow-y-auto"
            style={{ paddingTop: "24px", paddingBottom: "80px" }}
          >
            <SceneComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-t"
        style={{ borderColor: COLORS.border }}
      >
        <button
          onClick={handlePrev}
          disabled={nav.isFirst}
          className={`flex items-center gap-2 text-sm transition-all ${
            nav.isFirst ? "opacity-40 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"
          }`}
          style={{ color: nav.isFirst ? COLORS.textMuted : COLORS.textSecondary }}
        >
          <span>←</span>
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: nav.totalScenes }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleGoTo(i)}
              className="transition-all"
              aria-label={`Go to scene ${i + 1}`}
            >
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === nav.currentScene ? "20px" : "6px",
                  height: "6px",
                  background:
                    i === nav.currentScene
                      ? COLORS.accent
                      : i < nav.currentScene
                      ? COLORS.accentDim
                      : COLORS.border,
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={nav.isLast}
          className={`flex items-center gap-2 text-sm transition-all font-medium ${
            nav.isLast ? "opacity-40 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"
          }`}
          style={{ color: nav.isLast ? COLORS.textMuted : COLORS.accent }}
        >
          <span className="hidden sm:inline">Next</span>
          <span>→</span>
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-[10px] font-mono whitespace-nowrap" style={{ color: COLORS.textMuted }}>
          Use arrow keys, space bar, or click to navigate
        </p>
      </div>

      <SideNav
        open={sideNavOpen}
        onClose={() => setSideNavOpen(false)}
        allScenes={nav.allScenes}
        currentScene={nav.currentScene}
        goToScene={handleGoTo}
      />
    </div>
  );
}
