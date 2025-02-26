import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          yellow: "var(--accent-yellow)",
          red: "var(--accent-red)",
          green: "var(--accent-green)",
        },
        surface: {
          dark: "var(--surface-dark)",
          light: "var(--surface-light)",
        },
        neon: {
          blue: "var(--neon-blue)",
          purple: "var(--neon-purple)",
        },
        gaming: {
          gray: "var(--gaming-gray)",
        },
        whatsapp: "var(--whatsapp)",
        telegram: "var(--telegram)",
      },
    },
  },
  plugins: [],
} satisfies Config;
