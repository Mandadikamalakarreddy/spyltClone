import { useState, useEffect } from 'react';

/**
 * Custom hook to check if fonts are loaded before running animations
 * This prevents SplitText from running before fonts are ready
 */
export const useFontsLoaded = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const checkFontsLoaded = async () => {
      try {
        // Check if fonts are loaded using document.fonts API
        if (typeof window !== 'undefined' && document.fonts && document.fonts.ready) {
          await document.fonts.ready;
          setFontsLoaded(true);
        } else {
          // Fallback for browsers that don't support document.fonts
          setTimeout(() => setFontsLoaded(true), 1500);
        }
      } catch (error) {
        console.warn('Font loading check failed, using fallback:', error);
        // Fallback if font loading check fails
        setTimeout(() => setFontsLoaded(true), 1500);
      }
    };

    // Only run on client side
    if (typeof window !== 'undefined') {
      checkFontsLoaded();
    }
  }, []);

  return fontsLoaded;
};
