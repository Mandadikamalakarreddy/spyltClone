"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { flavorlists } from "@/constants";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavorSliderMobile = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Vertical scroll animations for mobile/tablet
    flavorlists.forEach((flavor, index) => {
      gsap.fromTo(
        `.flavor-item-${index}`,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.flavor-item-${index}`,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for drink images
      gsap.to(`.drink-${index}`, {
        y: -50,
        scrollTrigger: {
          trigger: `.flavor-item-${index}`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Elements animation
      gsap.to(`.elements-${index}`, {
        rotation: 10,
        scale: 1.1,
        scrollTrigger: {
          trigger: `.flavor-item-${index}`,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    // Title animations for mobile
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        y: -20,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          y: -15,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          y: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
      <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSliderMobile;