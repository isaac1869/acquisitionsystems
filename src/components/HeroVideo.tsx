"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-[#05070A]">
      {!videoError ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Reading becomes data. Data becomes pipeline."
          onError={() => setVideoError(true)}
        >
          <source src="/static/hero-loop-v2.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-[#05070A]">
          <p className="text-sm font-medium">Hero video</p>
          <p className="text-xs mt-1">Add hero-loop-v2.mp4 to public/static/</p>
        </div>
      )}
    </div>
  );
}
