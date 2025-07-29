"use client";

import Navbar from "@/components/Navbar";
import FlavorSection from "@/sections/FlavorSection";
import HeroSection from "@/sections/HeroSection";
import MessageSection from "@/sections/MessageSection";
import { ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NutritionSection from "@/sections/NutritionSection";
import BenefitSection from "@/sections/BenefitSection";
import TestimonialSection from "@/sections/TestimonialSection";
import FooterSection from "@/sections/FooterSection";
import PlaceSection from "@/sections/PlaceSection";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
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
