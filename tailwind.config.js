const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: { "out-expo": "cubic-bezier(0.23, 1, 0.32, 1)" },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        mono: ["var(--font-code)", ...fontFamily.mono],
        sans: ["var(--font-code)", ...fontFamily.mono],
      },
      colors: {
        void: "var(--void)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        phosphor: "var(--phosphor)",
        dim: "var(--phosphor-dim)",
        cyan: "var(--cyan)",
        magenta: "var(--magenta)",
        gold: "var(--gold)",
        red: "var(--red)",
        border: "var(--border)",
        background: "var(--void)",
        foreground: "var(--ink)",
      },
    },
  },
  plugins: [],
}
