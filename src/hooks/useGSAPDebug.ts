'use client';

import { useEffect } from 'react';

export const useGSAPDebug = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('GSAP Debug - Environment: Development');
      
      // Log available GSAP plugins
      const plugins = [];
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsapWindow = (window as any).gsap;
        if (gsapWindow.ScrollTrigger) plugins.push('ScrollTrigger');
        if (gsapWindow.ScrollSmoother) plugins.push('ScrollSmoother');
        if (gsapWindow.SplitText) plugins.push('SplitText');
        
        console.log('GSAP Plugins loaded:', plugins);
      }
    }
  }, []);
};
