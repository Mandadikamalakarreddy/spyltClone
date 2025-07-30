'use client';

import { useEffect } from 'react';
import { initializeGSAP, ScrollTrigger } from '../lib/gsap';

export default function GSAPInitializer() {
  useEffect(() => {
    // Initialize GSAP configuration
    initializeGSAP();

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
}
