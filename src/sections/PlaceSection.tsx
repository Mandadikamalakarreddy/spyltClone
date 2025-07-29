"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";


gsap.registerPlugin(ScrollTrigger);

const PlaceSection = () => {
  const fontsLoaded = useFontsLoaded();


  useGSAP(()=>{
    // Only run animations if fonts are loaded
    if (!fontsLoaded) return;
    const firstTitle = SplitText.create(".place-title",{
      type:"chars"
    })
    const paragraph = SplitText.create(".place-section p",{
      type:"chars words"
    })

    const contentTl = gsap.timeline({
      scrollTrigger:{
        trigger:".place-section",
        start:"top center",
        end:"bottom bottom",
        scrub:true,
      }
    })
      contentTl.from(firstTitle.chars,{
        yPercent:100,
        stagger:0.02,
        ease:"power1.inOut"
      }).from(paragraph.words,{
        yPercent:300,
        rotate:3,
        ease:"power1.inOut",
        duration:0.5,
        stagger:0.02
      })


      const titleTl = gsap.timeline({
      scrollTrigger:{
        trigger:".place-section",
        start:"top center",
        end:"bottom bottom",
        scrub:true,
      }
      })
      titleTl.to(".place-text-scroll",{
        duration:1,
        opacity:1,
        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease:"power1.inOut"
      })
  }, [fontsLoaded])

  return (
    <div className="place-section">
      <div className="relative z-20">
        <img
          src="/images/footer-dip.png"
          alt=" Footer Dip"
          className="w-full -translate-y-6 object-cover"
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/images/bgImage3.jpg"
            alt="Background"
            className="big-img"
          />
        </div>
      </div>

      <div className="relative z-10 min-h-dvh flex flex-col justify-center">
        <div className="container  px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-start">
            <div className="general-title  relative flex flex-col justify-center items-center gap-20 md:gap-26  lg:gap-26">
              <div className="overflow-hidden">
                <h1 className="place-title text-milk">Right around</h1>
              </div>
              <div style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"}} className="place-text-scroll opacity-0 place-self-start">
                <div className="bg-light-brown pd-5 md:pt-0 pt-3 md:px-5 px--3 inline-block ">
                  <h2 className="text-[#513022]">The corner</h2>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 lg:mt-8">
              <p className=" text-lg text-milk max-w-[20rem] font-paragraph">
                Buy our drinks at your local store or get them delivered (to
                your door).
              </p>
            </div>

            <button suppressHydrationWarning={true} className="place-button">
              <p>find in stores</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceSection;
