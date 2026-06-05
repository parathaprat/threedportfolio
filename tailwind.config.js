/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        space: {
          900: "#05060f",
          800: "#0a0b1e",
          700: "#0c1336",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        glow: "0 8px 30px -8px rgba(124, 58, 237, 0.45)",
        "glow-lg": "0 16px 50px -10px rgba(124, 58, 237, 0.6)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
