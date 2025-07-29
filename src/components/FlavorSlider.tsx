"use client";

import { useMediaQuery } from "react-responsive";
import FlavorSliderMobile from "./FlavorSliderMobile";
import FlavorSliderDesktop from "./FlavorSliderDesktop";

const FlavorSlider = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <>
      {isTablet ? <FlavorSliderMobile /> : <FlavorSliderDesktop />}
    </>
  );
};

export default FlavorSlider;

