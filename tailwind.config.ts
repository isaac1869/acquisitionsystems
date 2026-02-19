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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
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
