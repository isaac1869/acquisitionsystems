// components/ui/AnimatedNumber.tsx
"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  glowing?: boolean;
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
  glowing = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const displayValue = useCountUp(value, duration, isInView);

  const isNegative = value < 0;
  const absDisplay = Math.abs(displayValue).toLocaleString("en-US");
  const formatted = `${isNegative ? "-" : ""}${prefix}${absDisplay}${suffix}`;

  return (
    <span
      ref={ref}
      className={`font-mono tabular-nums ${className} ${
        glowing ? "animate-glow" : ""
      }`}
    >
      {formatted}
    </span>
  );
}
