'use client';

import { useEffect } from 'react';

export default function FontOptimizer() {
  useEffect(() => {
    // Immediately make fonts visible to prevent FOIT (Flash of Invisible Text)
    document.body.classList.add('fonts-loaded');

    // Load custom fonts
    const loadCustomFont = async () => {
      try {
        if ('fonts' in document) {
          const proximaNova = new FontFace('ProximaNova', 'url(/fonts/ProximaNova-Regular.otf)', {
            display: 'swap',
            weight: 'normal',
            style: 'normal'
          });

          await proximaNova.load();
          document.fonts.add(proximaNova);
        }
      } catch (error) {
        console.warn('Custom font loading failed, using fallback:', error);
      }
    };

    loadCustomFont();

    // Ensure document fonts are ready
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }
  }, []);

  return null;
}
