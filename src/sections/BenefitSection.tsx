"use client";

import TitleClipPath from "@/components/TitleClipPath";
import VideoPinSection from "@/components/VideoPinSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "20% top",
        scrub: 1.5,
      },
    });

    const paragraphMsgSplit = SplitText.create(".benefit-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });

    const paragraphTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });
    paragraphTL.from(paragraphMsgSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.02,
      scrub: 1.5,
    });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br /> Explore the Key Benefits of Choosing
            SPYLT
          </p>

          <div className="mt-20 col-center">
            <TitleClipPath
              title={"Shelf stable"}
              color={"#faeade"}
              className={"first-title"}
              bg={"#c88e64"}
              borderColor={"#222123"}
            />
            <TitleClipPath
              title={"Protein + Caffeine"}
              color={"#222123"}
              className={"second-title"}
              bg={"#faeade"}
              borderColor={"#222123"}
            />
            <TitleClipPath
              title={"Infinitely recyclable"}
              color={"#faeade"}
              className={"third-title"}
              bg={"#7F3B2D"}
              borderColor={"#222123"}
            />
            <TitleClipPath
              title={"Lactose free"}
              color={"#2E2D2F"}
              className={"fourth-title"}
              bg={"#FED775"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>
      <div className="relative overlay-box">
          <VideoPinSection/>
        </div>
    </section>
  );
};

export default BenefitSection;
