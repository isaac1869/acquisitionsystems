"use client";

import HeroVideo from "@/components/HeroVideo";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <div className="relative bg-[#05070A]">
      {/* Full-bleed video */}
      <HeroVideo />

      {/* Scrim: subtle dark gradient under text (bottom-right emphasis) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 75% 85%, rgba(0,0,0,0.35) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      {/* Overlay copy: center-right on desktop, centered on mobile */}
      <div className="absolute inset-0 flex flex-col justify-end pb-[12%] md:pb-[15%] pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-2xl mx-auto md:ml-auto md:mr-0 md:max-w-xl text-center md:text-right">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              BOOK-BASED ACQUISITION + ATTRIBUTION
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] mb-6 text-white"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
            >
              Acquire high-ticket clients with an AI SDR twin embedded in your book.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-[1.55] md:ml-auto">
              Intellibook captures reader intent. CoreText shows what converts. Your AI SDR turns it into booked calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <Button href="/apply">APPLY FOR EARLY ACCESS</Button>
              <Button
                href="/product"
                variant="secondary"
                className="border-white/50 text-white hover:bg-white/10 hover:border-white/70"
              >
                See how it works →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
