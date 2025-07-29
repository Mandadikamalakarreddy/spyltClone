"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import spinCircle from "../../public/images/circle-text.svg";
import play from "../../public/images/play.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />
        <div className="abs-center md:scale-100 scale-200">
          <Image
            src={spinCircle}
            alt="circle-text-image"
            priority
            className="spin-circle"
          />
          <div className="play-btn">
            <Image
              src={play}
              alt="play-btn"
              priority
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
