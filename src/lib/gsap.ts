'use client';

import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all';

// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Export configured GSAP instance and plugins
export { gsap, ScrollTrigger, ScrollSmoother, SplitText };

// Initialize GSAP configuration
export const initializeGSAP = () => {
  if (typeof window === 'undefined') return;

  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true,
  });

  // Ensure ScrollTrigger refreshes properly
  ScrollTrigger.addEventListener("refresh", () => {
    console.log("ScrollTrigger refreshed");
  });

  // Initial refresh
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
};
