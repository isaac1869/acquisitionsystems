"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoNavigation } from "@/hooks/useDemoNavigation";

import { Scene1_BookArrives } from "@/components/demo/scenes/Scene1_BookArrives";
import { Scene2_FirstTrigger } from "@/components/demo/scenes/Scene2_FirstTrigger";
import { Scene3_AITwinChat } from "@/components/demo/scenes/Scene3_AITwinChat";
import { Scene4_BookingConfirmation } from "@/components/demo/scenes/Scene4_BookingConfirmation";
import { Scene5_CoreTextDashboard } from "@/components/demo/scenes/Scene5_CoreTextDashboard";
import { Scene6_ReaderIntelligence } from "@/components/demo/scenes/Scene6_ReaderIntelligence";
import { Scene7_AttributionChain } from "@/components/demo/scenes/Scene7_AttributionChain";
import { Scene8_SideBySide } from "@/components/demo/scenes/Scene8_SideBySide";
import { Scene9_CompoundingChart } from "@/components/demo/scenes/Scene9_CompoundingChart";
import { Scene10_ClosingStatement } from "@/components/demo/scenes/Scene10_ClosingStatement";

const scenes = [
  Scene1_BookArrives,
  Scene2_FirstTrigger,
  Scene3_AITwinChat,
  Scene4_BookingConfirmation,
  Scene5_CoreTextDashboard,
  Scene6_ReaderIntelligence,
  Scene7_AttributionChain,
  Scene8_SideBySide,
  Scene9_CompoundingChart,
  Scene10_ClosingStatement,
];

function ProgressBar({
  currentScene,
  totalScenes,
  acts,
  currentAct,
  allScenes,
  goToScene,
}: {
  currentScene: number;
  totalScenes: number;
  acts: { number: number; title: string; scenes: { id: string; label: string }[] }[];
  currentAct: { number: number };
  allScenes: { id: string; label: string; actNumber: number }[];
  goToScene: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      {acts.map((act) => {
        const isActive = act.number === currentAct.number;
        const scenesInAct = allScenes.filter((s) => s.actNumber === act.number);
        const firstSceneIdx = allScenes.findIndex((s) => s.actNumber === act.number);
        const completed = allScenes.findIndex((s) => s.actNumber === act.number) < currentScene;

        return (
          <button
            key={act.number}
            onClick={() => goToScene(firstSceneIdx)}
            className="flex items-center gap-2.5 group"
          >
            <div
              className={`h-0.5 w-10 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-[#00E5CC]"
                  : completed
                  ? "bg-[rgba(0,229,204,0.3)]"
                  : "bg-[rgba(255,255,255,0.1)]"
              }`}
            />
            <span
              className={`text-[11px] font-mono uppercase tracking-widest transition-colors ${
                isActive
                  ? "text-[#00E5CC]"
                  : completed
                  ? "text-[#444]"
                  : "text-[#2A2A2A] group-hover:text-[#555]"
              }`}
            >
              Act {act.number}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SideNav({
  open,
  onClose,
  allScenes,
  currentScene,
  acts,
  goToScene,
}: {
  open: boolean;
  onClose: () => void;
  allScenes: { id: string; label: string; actNumber: number }[];
  currentScene: number;
  acts: { number: number; title: string; subtitle: string; scenes: { id: string; label: string }[] }[];
  goToScene: (i: number) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-72 bg-[#0D0D0D] border-l border-[rgba(255,255,255,0.06)] z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-between p-5 border-b border-[rgba(255,255,255,0.06)]">
              <p className="text-[#F5F5F5] text-sm font-medium">Scene Navigator</p>
              <button onClick={onClose} className="text-[#444] hover:text-[#F5F5F5] transition-colors text-xl leading-none">
                ✕
              </button>
            </div>

            <div className="p-4 space-y-6">
              {acts.map((act) => {
                const actScenes = allScenes.filter((s) => s.actNumber === act.number);
                return (
                  <div key={act.number}>
                    <p className="text-[#00E5CC] text-[10px] font-mono uppercase tracking-widest mb-2 px-2">
                      Act {act.number} — {act.title}
                    </p>
                    <div className="space-y-1">
                      {actScenes.map((scene) => {
                        const globalIdx = allScenes.findIndex((s) => s.id === scene.id);
                        const isActive = globalIdx === currentScene;
                        return (
                          <button
                            key={scene.id}
                            onClick={() => {
                              goToScene(globalIdx);
                              onClose();
                            }}
                            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                              isActive
                                ? "bg-[rgba(0,229,204,0.1)] text-[#00E5CC] border border-[rgba(0,229,204,0.2)]"
                                : "text-[#555] hover:text-[#999] hover:bg-[rgba(255,255,255,0.03)]"
                            }`}
                          >
                            <span className="text-[10px] font-mono mr-2 opacity-50">{scene.id}</span>
                            {scene.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 border-t border-[rgba(255,255,255,0.06)]">
              <a
                href="/product"
                className="block text-center text-[#444] text-xs font-mono hover:text-[#666] transition-colors"
              >
                ← Back to Product Page
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function DemoPage() {
  const nav = useDemoNavigation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [prevScene, setPrevScene] = useState(0);
  const [direction, setDirection] = useState(1);

  const SceneComponent = scenes[nav.currentScene];

  const handleNext = () => {
    if (nav.isLast) return;
    setDirection(1);
    setPrevScene(nav.currentScene);
    nav.goNext();
  };

  const handlePrev = () => {
    if (nav.isFirst) return;
    setDirection(-1);
    setPrevScene(nav.currentScene);
    nav.goPrev();
  };

  const handleGoTo = (i: number) => {
    setDirection(i > nav.currentScene ? 1 : -1);
    setPrevScene(nav.currentScene);
    nav.goToScene(i);
  };

  return (
    <div className="relative flex flex-col h-screen bg-[#0A0A0A] select-none overflow-hidden">
      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.05)] z-30">
        {/* Brand */}
        <a href="/product" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#F5F5F5] text-xs font-mono tracking-widest">INTELLIBOOK</span>
          <span className="text-[#333] text-xs">|</span>
          <span className="text-[#444] text-xs font-mono">Product Demo</span>
        </a>

        {/* Progress bar — center */}
        <div className="hidden md:block">
          <ProgressBar
            currentScene={nav.currentScene}
            totalScenes={nav.totalScenes}
            acts={nav.acts}
            currentAct={nav.currentAct}
            allScenes={nav.allScenes}
            goToScene={handleGoTo}
          />
        </div>

        {/* Right: counter + menu */}
        <div className="flex items-center gap-4">
          <span className="text-[#333] text-xs font-mono hidden sm:block">
            {nav.currentScene + 1} / {nav.totalScenes}
          </span>
          <button
            onClick={() => setSideNavOpen(true)}
            className="text-[#444] hover:text-[#F5F5F5] transition-colors text-xl leading-none"
            aria-label="Open scene navigator"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Act label */}
      <div className="flex-shrink-0 px-6 py-2 border-b border-[rgba(255,255,255,0.03)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={nav.currentAct.number}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="text-[#00E5CC] text-[10px] font-mono uppercase tracking-widest">
              Act {nav.currentAct.number}: {nav.currentAct.title}
            </span>
            <span className="text-[#222] text-[10px]">—</span>
            <span className="text-[#333] text-[10px] font-mono">{nav.scene.label}</span>
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
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-t border-[rgba(255,255,255,0.05)] z-30">
        {/* Prev */}
        <button
          onClick={handlePrev}
          disabled={nav.isFirst}
          className={`flex items-center gap-2 text-sm transition-all ${
            nav.isFirst
              ? "text-[#222] cursor-not-allowed"
              : "text-[#666] hover:text-[#F5F5F5] cursor-pointer"
          }`}
        >
          <span>←</span>
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Scene dots */}
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
                      ? "#00E5CC"
                      : i < nav.currentScene
                      ? "rgba(0,229,204,0.25)"
                      : "rgba(255,255,255,0.08)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={nav.isLast}
          className={`flex items-center gap-2 text-sm transition-all ${
            nav.isLast
              ? "text-[#222] cursor-not-allowed"
              : "text-[#00E5CC] hover:text-[#00D4BB] cursor-pointer font-medium"
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <span>→</span>
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-[#1A1A1A] text-[10px] font-mono whitespace-nowrap">
          Use arrow keys or click to navigate
        </p>
      </div>

      {/* Side nav */}
      <SideNav
        open={sideNavOpen}
        onClose={() => setSideNavOpen(false)}
        allScenes={nav.allScenes}
        currentScene={nav.currentScene}
        acts={nav.acts}
        goToScene={handleGoTo}
      />
    </div>
  );
}
