import { Antonio } from "next/font/google";
import localFont from "next/font/local";

export const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
