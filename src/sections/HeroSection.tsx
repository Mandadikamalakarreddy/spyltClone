"use client";

import { useState, useEffect } from "react";
import { gsap, ScrollTrigger, SplitText } from "../lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import heroBg from "../../public/images/hero-bg.png";
import heroImg from "../../public/images/hero-img.png";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";


const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const fontsLoaded = useFontsLoaded();

  useEffect(() => {
    setIsClient(true);
    
    const checkMediaQueries = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      setIsTablet(window.matchMedia("(max-width: 1024px)").matches);
    };

    checkMediaQueries();
    
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    
    mobileQuery.addEventListener('change', checkMediaQueries);
    tabletQuery.addEventListener('change', checkMediaQueries);
    
    return () => {
      mobileQuery.removeEventListener('change', checkMediaQueries);
      tabletQuery.removeEventListener('change', checkMediaQueries);
    };
  }, []);


  useGSAP(()=>{
    // Only run animations if fonts are loaded
    if (!fontsLoaded) return;

    const titleSpilt =  SplitText.create(".hero-title",{
      type : "chars"
    });

    const tl = gsap.timeline({
      delay : 1,
    })
   
    tl.to(".hero-content",{
      opacity:1,
      y:0,
      ease:"power1.inOut"
    }).to(".hero-text-scroll",{
      duration:1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"circ.out"
    },"-=0.5")
    .from(titleSpilt.chars,{
      yPercent:200,
      stagger:0.02,
      ease:"power2.out"
    },"-=0.5");

    const heroTL = gsap.timeline({
      scrollTrigger:{
        trigger:".hero-container",
        start:"1% top",
        end:"bottom top",
        scrub:true,
      },
    });
    heroTL.to(".hero-container",{
      rotate:5,
      scale:0.9,
      yPercent:30,
      ease:"power1.inOut"
    })
  }, [fontsLoaded])


  return (
    <section className="bg-main-bg">
      <div className="hero-container" suppressHydrationWarning={true}>
        {isClient && isTablet ? (
          <>
            {isMobile && (
              <Image
                src={heroBg}
                className="absolute bottom-40 size-full object-cover"
                priority
                alt="Hero background"
              />
            )}
            <Image
              src={heroImg}
              className="absolute -bottom-40 left-1/2 -translate-x-1/2 object-auto"
              priority
              alt="Hero image"
            />
          </>
        ) : isClient ? (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          // Fallback content for SSR - render video by default
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
            <div className="overflow-hidden">
               <h1 className="hero-title">Freaking Delicious</h1>
            </div>
            <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"
            }}
            className="hero-text-scroll">
             <h1 className="hero-subtitle">
              Protein + Caffeine
             </h1>
            </div>
            <h2>
              Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
            </h2>
            <button suppressHydrationWarning={true} className="hero-button">
            <p>Chug a Spylt</p>
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
