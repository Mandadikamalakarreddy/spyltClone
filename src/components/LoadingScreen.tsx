"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import navLogo from "../../public/images/nav-logo.svg";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 3000;     
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(progressPercent);
      
      if (progressPercent < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsLoading(false), 300);
      }
    };
    
    animationFrame = requestAnimationFrame(updateProgress);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isMounted]);

  // Don't render anything on server-side to prevent hydration issues
  if (!isMounted) return null;
  
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faeade]">
      <div className="mb-12">
        <Image
          src={navLogo}
          alt="SPYLT Logo"
          width={200}
          height={80}
          priority
          className="object-contain"
        />
      </div>

      <div className="w-80 max-w-[90vw]">
        <div className="my-4 text-center">
          <span className="text-[#7F3B2D] text-xl font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="relative h-2 bg-white rounded-full overflow-hidden border border-[#222123]/20">
          <div
            className="absolute top-0 left-0 h-full bg-[#7F3B2D] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
