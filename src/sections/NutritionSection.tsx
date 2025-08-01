"use client"

import { nutrientLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import  { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap"
import { useFontsLoaded } from "@/hooks/useFontsLoaded";




gsap.registerPlugin(ScrollTrigger);

const NutritionSection = () => {
  const fontsLoaded = useFontsLoaded();

  const isMobile = useMediaQuery({
    query : "(max-width: 768px)",
  })

  const [lists ,setLists] = useState(nutrientLists)

  useEffect(()=>{
     if(isMobile){
      setLists(nutrientLists.slice(0, 3))
     }else{
      setLists(nutrientLists)
     }
  },[isMobile])


  useGSAP(()=>{
    // Only run animations if fonts are loaded
    if (!fontsLoaded) return;
    const titleSplit = SplitText.create(".nutrition-title",{
      type:"chars"
    })
    const paragraphSplit = SplitText.create(".nutrition-section p",{
      type:"words, lines",
      linesClass: "paragraph-line"
    })

    const contentTl = gsap.timeline({
       scrollTrigger:{
        trigger:".nutrition-section",
        start:"15% center",
        end:"bottom bottom",
        scrub:true,
       },
    });

    contentTl.from(titleSplit.chars, {
      yPercent:100,
      stagger:0.02,
      ease:"power2.out"
    }).from(paragraphSplit.words,{
      yPercent:300,
      rotate:3,
      ease:"power1.inOut",
      duration:0.5,
      stagger:0.02
    })


    const titleTl = gsap.timeline({
      scrollTrigger:{
        trigger:".nutrition-section",
        start:"20% 80%",
        end:"bottom bottom",
        scrub:true
      }
    })
    titleTl.to(".nutrition-text-scroll",{
      duration:1,
      opacity:1,
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease:"power1.inOut"
    })


  }, [fontsLoaded])


  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />
      <img src="/images/big-img.png" alt="" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-8 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20 ">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}} className="nutrition-text-scroll opacity-0 place-self-start">
              <div className="bg-yellow-brown pd-5 md:pt-0 pt-3 md:px-5 px--3 inline-block ">
                <h2 className="text-milk-yellow">body good</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>
        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
                <div key={index} className="relative flex-1 col-center ">
                  <div>
                    <p className="md:text-lg font-paragraph ">{nutrient.label}</p>
                    <p className="font-paragraph text-sm mt-2">up to</p>
                    <p className="text-2xl md:text-4xl tracking-tight font-bold">{nutrient.amount}</p>
                  </div>
                     {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
