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
        brand: {
          DEFAULT: "#E62129",
          dark: "#C4181F",
          light: "#FDECEA",
          star: "#FFD200",
        },
        yellow: {
          DEFAULT: "#FFD200",
          dark: "#E6BD00",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F7",
          alt: "#F2F2F2",
          dark: "#111111",
          card: "#FFFFFF",
        },
        text: {
          primary: "#111111",
          body: "#333333",
          muted: "#666666",
          light: "#999999",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#D0D0D0",
        },
        alert: {
          red: "#E53935",
          orange: "#FF6B00",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1.5" }],
        sm:   ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem",     { lineHeight: "1.65" }],
        lg:   ["1.125rem", { lineHeight: "1.7" }],
        xl:   ["1.25rem",  { lineHeight: "1.4" }],
        "2xl":["1.5rem",   { lineHeight: "1.3" }],
        "3xl":["2rem",     { lineHeight: "1.25" }],
        "4xl":["2.5rem",   { lineHeight: "1.2" }],
        "5xl":["3rem",     { lineHeight: "1.1" }],
      },
      maxWidth: {
        site:  "1200px",
        prose: "800px",
      },
      borderRadius: {
        card:  "12px",
        btn:   "6px",
        badge: "4px",
        pill:  "9999px",
      },
      boxShadow: {
        card:       "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover":"0 8px 24px rgba(0,0,0,0.12)",
        btn:        "0 4px 16px rgba(230,33,41,0.35)",
        sticky:     "0 -2px 16px rgba(0,0,0,0.12)",
        nav:        "0 2px 8px rgba(0,0,0,0.08)",
      },
      spacing: {
        section: "80px",
        "section-sm": "48px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
