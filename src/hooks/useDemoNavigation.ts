"use client";

import { useState, useEffect, useCallback } from "react";
import { ACTS } from "@/lib/demoConstants";

// Flatten all scenes across acts into a single ordered list
const allScenes = ACTS.flatMap((act) =>
  act.scenes.map((scene) => ({ ...scene, actNumber: act.number, actTitle: act.title }))
);

const TOTAL_SCENES = allScenes.length;

export function useDemoNavigation() {
  const [currentScene, setCurrentScene] = useState(0); // 0-indexed

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
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const scene = allScenes[currentScene];
  const actIndex = ACTS.findIndex((a) => a.number === scene.actNumber);
  const currentAct = ACTS[actIndex];

  return {
    currentScene,
    totalScenes: TOTAL_SCENES,
    scene,
    currentAct,
    actIndex,
    acts: ACTS,
    allScenes,
    goNext,
    goPrev,
    goToScene,
    isFirst: currentScene === 0,
    isLast: currentScene === TOTAL_SCENES - 1,
  };
}
