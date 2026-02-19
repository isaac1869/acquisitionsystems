"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16 md:mb-20 rounded-lg overflow-hidden bg-gray-100">
      {!videoError ? (
        <video
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Reading becomes data. Data becomes pipeline."
          onError={() => setVideoError(true)}
        >
          <source src="/static/hero-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="w-full aspect-video flex flex-col items-center justify-center text-gray-500 bg-gray-200/80">
          <p className="text-sm font-medium">Hero video</p>
          <p className="text-xs mt-1">Add hero-loop.mp4 to public/static/</p>
        </div>
      )}
    </div>
  );
}
