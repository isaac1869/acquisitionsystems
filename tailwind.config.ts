import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-cyan": "#00F0FF",
        "wave-blue": "#3A4BFF",
        nw: {
          bg: "#0A0A0A",
          surface: "#111111",
          elevated: "#1A1A1A",
          accent: "#00E5CC",
          gold: "#FFB800",
          red: "#FF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        head: "-0.02em",
      },
      lineHeight: {
        display: "1.08",
        body: "1.6",
      },
    },
  },
  plugins: [],
};

export default config;
