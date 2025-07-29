"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavorTitle = () => {
  const fontsLoaded = useFontsLoaded();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    // Only run animations if fonts are loaded and we're on the client
    if (!fontsLoaded || !isClient) return;

    gsap.delayedCall(0.1, () => {
      const firstTextElement = document.querySelector(".first-text-split h1");
      const secondTextElement = document.querySelector(".second-text-split h1");
      const flavorTextScroll = document.querySelector(".flavor-text-scroll");

      if (firstTextElement && secondTextElement && flavorTextScroll) {
        const firstTextSplit = SplitText.create(".first-text-split h1", {
          type: "chars",
        });

        const secondTextSplit = SplitText.create(".second-text-split h1", { 
          type: "chars",
        });

        gsap.from(firstTextSplit.chars, {
          yPercent: 200,
          stagger: 0.02,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "top 30%",
          },
        });

        gsap.to(".flavor-text-scroll", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "top 10%",
          },
        });

        gsap.from(secondTextSplit.chars, {
          yPercent: 200,
          stagger: 0.02,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "top 1%",
          },
        });
      }
    });
  }, [fontsLoaded, isClient]);

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 ">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>
      <div
        style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3 ">
          <h2 className="text-milk ">freaking</h2>
        </div>
      </div>
      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
