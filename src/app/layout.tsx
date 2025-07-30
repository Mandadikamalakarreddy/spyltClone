import type { Metadata } from "next";
import { antonio, proximaNova } from "../lib/fonts";
import FontOptimizer from "../components/FontOptimizer";
import GSAPInitializer from "../components/GSAPInitializer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPYLT - Premium Protein Energy Drinks | Fuel Your Adventure",
  description: "Discover SPYLT's delicious protein energy drinks that combine nostalgia with nutrition. Featuring 6 amazing flavors including Chocolate Milk, Strawberry Milk, and Cookies & Cream. Shelf-stable, lactose-free, and packed with protein + caffeine to fuel your fearless adventures. Available at local stores nationwide.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/fonts/ProximaNova-Regular.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
      </head>
      <body suppressHydrationWarning
        className={`${antonio.variable} ${proximaNova.variable} antialiased`}
      >
        <GSAPInitializer />
        <FontOptimizer />
        {children}
      </body>
    </html>
  );
}
