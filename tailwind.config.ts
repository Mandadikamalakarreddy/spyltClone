import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222123",
        "main-bg": "#232224",
        white: "#ffffff",
        "dark-brown": "#523122",
        "mid-brown": "#a26833",
        "light-brown": "#e3a458",
        "red-brown": "#7f3b2d",
        "yellow-brown": "#a26833",
        "milk-yellow": "#e3d3bc",
        red: "#a02128",
        milk: "#faeade",
      },
      fontFamily: {
        sans: ["var(--font-antonio)", "Antonio", "system-ui", "sans-serif"],
        paragraph: ["var(--font-proxima-nova)", "ProximaNova", "system-ui", "sans-serif"],
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
