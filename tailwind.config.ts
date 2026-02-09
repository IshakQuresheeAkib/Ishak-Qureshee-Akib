import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0B2F52",
        "light-blue": "#024295",
        primary: "#2396fb",
        secondary: "#187bd1",
        accent: "#3996ff",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      screens: {
        xs: "375px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
} as Config;

export default config;
