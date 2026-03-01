"use client";

import { COLORS, ACTS } from "@/lib/demo/constants";

interface ProgressBarProps {
  currentScene: number;
  totalScenes: number;
  allScenes: { id: string; label: string; actNumber: number }[];
  currentActNumber: number;
  goToScene: (i: number) => void;
}

export function ProgressBar({
  currentScene,
  totalScenes,
  allScenes,
  currentActNumber,
  goToScene,
}: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      {ACTS.map((act) => {
        const isActive = act.number === currentActNumber;
        const firstSceneIdx = allScenes.findIndex((s) => s.actNumber === act.number);
        const completed = firstSceneIdx >= 0 && firstSceneIdx < currentScene;

        return (
          <button
            key={act.number}
            onClick={() => goToScene(firstSceneIdx)}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="h-0.5 w-10 rounded-full transition-all duration-500"
              style={{
                background: isActive ? COLORS.accent : completed ? COLORS.accentDim : COLORS.border,
              }}
            />
            <span
              className="text-[11px] font-mono uppercase tracking-widest transition-colors"
              style={{
                color: isActive ? COLORS.accent : completed ? COLORS.textMuted : COLORS.textMuted,
              }}
            >
              Act {act.number}
            </span>
          </button>
        );
      })}
    </div>
  );
}
