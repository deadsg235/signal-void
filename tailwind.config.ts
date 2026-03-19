import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        signal: "#00ff88",
        void: "#ff003c",
        dark: "#050508",
        panel: "#0d0d14",
        border: "#1a1a2e",
      },
      animation: {
        flicker: "flicker 4s linear infinite",
        scan: "scan 8s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.3" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.5" },
          "97%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(110vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
