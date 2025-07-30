"use client";

import Navbar from "@/components/Navbar";
import FlavorSection from "@/sections/FlavorSection";
import HeroSection from "@/sections/HeroSection";
import MessageSection from "@/sections/MessageSection";
import { gsap, ScrollSmoother } from "../lib/gsap";
import { useGSAP } from "@gsap/react";
import NutritionSection from "@/sections/NutritionSection";
import BenefitSection from "@/sections/BenefitSection";
import TestimonialSection from "@/sections/TestimonialSection";
import FooterSection from "@/sections/FooterSection";
import PlaceSection from "@/sections/PlaceSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    if (!isClient) return;
    
    // Delay ScrollSmoother initialization to ensure DOM is ready
    gsap.delayedCall(0.1, () => {
      try {
        ScrollSmoother.create({
          smooth: 3,
          effects: true,
          smoothTouch: 0.1, // Better mobile performance
        });
      } catch (error) {
        console.warn('ScrollSmoother failed to initialize:', error);
      }
    });
  }, [isClient]);
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <PlaceSection/>
          <FooterSection/>
        </div>
      </div>
    </main>
  );
}
