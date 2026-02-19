"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          New Wave Acquisitions
        </Link>

        {/* Desktop: center/right links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="px-5 py-2.5 bg-electric-cyan text-black font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-150"
          >
            APPLY FOR EARLY ACCESS
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/apply"
            className="px-4 py-2 bg-electric-cyan text-black font-semibold text-xs tracking-wide"
          >
            APPLY
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-200 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setMobileOpen(false)}
            className="block py-3 px-5 mt-4 text-center bg-electric-cyan text-black font-semibold text-sm tracking-wide w-fit"
          >
            APPLY FOR EARLY ACCESS
          </Link>
        </div>
      </div>
    </nav>
  );
}
