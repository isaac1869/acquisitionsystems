"use client";

import { useState, useEffect, useCallback } from "react";
import { ACTS } from "@/lib/demo/constants";

const allScenes = ACTS.flatMap((act) =>
  act.scenes.map((scene) => ({ ...scene, actNumber: act.number, actTitle: act.title }))
);

const TOTAL_SCENES = allScenes.length;

export function useDemoMode() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goNext = useCallback(() => {
    setCurrentScene((s) => Math.min(s + 1, TOTAL_SCENES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentScene((s) => Math.max(s - 1, 0));
  }, []);

  const goToScene = useCallback((index: number) => {
    setCurrentScene(Math.max(0, Math.min(index, TOTAL_SCENES - 1)));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const scene = allScenes[currentScene];
  const currentAct = ACTS.find((a) => a.number === scene.actNumber)!;

  return {
    currentScene,
    totalScenes: TOTAL_SCENES,
    scene,
    currentAct,
    actIndex: ACTS.findIndex((a) => a.number === scene.actNumber),
    acts: ACTS,
    allScenes,
    goNext,
    goPrev,
    goToScene,
    isFirst: currentScene === 0,
    isLast: currentScene === TOTAL_SCENES - 1,
    isTransitioning,
    setIsTransitioning,
  };
}
