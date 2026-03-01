"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ACTS } from "@/lib/demo/constants";
import { COLORS } from "@/lib/demo/constants";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
  allScenes: { id: string; label: string; actNumber: number }[];
  currentScene: number;
  goToScene: (i: number) => void;
}

export function SideNav({ open, onClose, allScenes, currentScene, goToScene }: SideNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-72 bg-white border-r z-50 overflow-y-auto shadow-xl"
            style={{ borderColor: COLORS.border }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: COLORS.border }}
            >
              <p className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
                Scene Navigator
              </p>
              <button
                onClick={onClose}
                className="text-lg leading-none hover:opacity-70 transition-opacity"
                style={{ color: COLORS.textMuted }}
              >
                ×
              </button>
            </div>

            <div className="p-4 space-y-6">
              {ACTS.map((act) => {
                const actScenes = allScenes.filter((s) => s.actNumber === act.number);
                return (
                  <div key={act.number}>
                    <p
                      className="text-[10px] font-mono uppercase tracking-widest mb-2 px-2"
                      style={{ color: COLORS.accent }}
                    >
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
                              isActive ? "font-medium" : ""
                            }`}
                            style={{
                              background: isActive ? COLORS.accentDim : "transparent",
                              color: isActive ? COLORS.accent : COLORS.textSecondary,
                            }}
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

            <div className="p-5 border-t" style={{ borderColor: COLORS.border }}>
              <a
                href="/product"
                className="block text-center text-xs font-mono hover:underline transition-colors"
                style={{ color: COLORS.textMuted }}
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
