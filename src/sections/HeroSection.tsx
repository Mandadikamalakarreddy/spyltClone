"use client";


import Image from "next/image";
import heroImage from "../../public/images/static-img.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const HeroSection = () => {


  useGSAP(()=>{
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
  })


  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <Image src={heroImage} alt="hero-image" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150 " />
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
            <button className="hero-button">
            <p>Chug a Spylt</p>
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
