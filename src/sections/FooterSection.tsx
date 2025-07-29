"use client"

import { FaInstagram, FaYoutube  } from "react-icons/fa";
import Image from "next/image";
import titok from "../../public/images/tiktok.svg";
import footer from "../../public/images/footer-drink.png";
import arrow from "../../public/images/arrow.svg";





const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="2xl:h-[120dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center z-10 text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>
        <Image src={footer} alt="" className=" abs-center top-0 object-contain  md:hidden block"/>

        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          className="absolute bottom-0 object-contain mix-blend-lighten md:block hidden"
        />

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <FaYoutube size={34} className="text-white"/>
          </div>
          <div className="social-btn">
            <FaInstagram size={34} className="text-white"/>
          </div>
          <div className="social-btn">
            <Image src={titok} alt="tiktok" priority />
          </div>
        </div>

        <div className="mt-40 md:px-10 z-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div className="z-10">
              <p>SPYLT Flavors</p>
            </div>
            <div className="z-10">
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div className="z-10">
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg z-10">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex z-10 justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
                suppressHydrationWarning={true}
              />
              <Image src={arrow} alt="arrow" priority />
            </div>
          </div>
        </div>
        <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;