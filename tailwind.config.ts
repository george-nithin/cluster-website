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
        cluster: {
          blue: "#0E7293",
          "blue-hover": "#0a5670",
          coral: "#FF8A65",
          "coral-hover": "#f37a54",
          teal: "#22C195",
          "teal-hover": "#1aa67f",
          bg: "#FFFFFF",
          surface: "#FFFFFF",
          text: "#111111",
          muted: "#666666",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "Comfortaa", "sans-serif"],
        heading: ["var(--font-comfortaa)", "Comfortaa", "sans-serif"],
        title: ["var(--font-comfortaa)", "Comfortaa", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
        numbers: ["var(--font-manrope)", "Manrope", "sans-serif"],
        mono: ["var(--font-manrope)", "Manrope", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "0.98", fontWeight: "900" }],
        "h1": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.04", fontWeight: "900" }],
        "h2": ["clamp(1.65rem, 3.2vw, 3rem)", { lineHeight: "1.08", fontWeight: "900" }],
        "h3": ["clamp(1.25rem, 2vw, 1.875rem)", { lineHeight: "1.18", fontWeight: "900" }],
        "body-lg": ["clamp(1rem, 1.2vw, 1.1875rem)", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["clamp(0.9375rem, 1.1vw, 1.0625rem)", { lineHeight: "1.6", fontWeight: "400" }],
        "small": ["0.84375rem", { lineHeight: "1.4", fontWeight: "400" }], // ~13.5px
        "nav": ["0.9375rem", { lineHeight: "1.4", fontWeight: "500" }], // ~15px
      },
      spacing: {
        "8px": "8px",
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "40px": "40px",
        "48px": "48px",
        "64px": "64px",
        "80px": "80px",
        "96px": "96px",
        "120px": "120px",
        "160px": "160px",
      },
      borderRadius: {
        btn: "10px",
        input: "10px",
        card: "16px",
        img: "18px",
        feature: "24px",
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
