"use client";

import { useRef, useState, useEffect } from "react";
import HeroVideo from "@/components/HeroVideo";
import Button from "@/components/Button";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={
        isDesktop
          ? {
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.06), transparent 40%)`,
            }
          : undefined
      }
    >
      <section className="pt-16 md:pt-20 pb-16 md:pb-24 px-6 fade-in">
        <div className="max-w-5xl mx-auto">
          <HeroVideo />
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            BOOK-BASED ACQUISITION + ATTRIBUTION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl">
            Acquire high-ticket clients with an AI SDR twin embedded in your book.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-[1.55]">
            Intellibook captures reader intent. CoreText shows what converts. Your AI SDR turns it into booked calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/apply">APPLY FOR EARLY ACCESS</Button>
            <Button href="/product" variant="secondary">
              See how it works →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
