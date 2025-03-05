"use client";

import { useState } from "react";
import Image from "next/image";
import UpperBackgroundImage from "/public/assets/backgrounds/HeroUpperBg.jpg";
import LowerBackgroundImage from "/public/assets/backgrounds/HeroLowerBg.png";
import TopLeftFrame from "/public/assets/frames/TopLeftFrame.png";
import TopRightFrame from "/public/assets/frames/TopRightFrame.png";
import Navbar from "@/components/Navbar";
import AngelsContainer from "./AngelsContainer";
import CenterText from "./CenterText";
import AboutSection from "./AboutSection";
// import { Menu } from "lucide-react"

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev); // Toggle menu state
    console.log("Menu state:", !isMenuOpen); // For debugging
  };

  return (
    <div className="relative">
      {/* Background Part */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between">
        <div className="relative h-full max-h-[800px] md:max-h-[800px]">
          <Image
            src={UpperBackgroundImage || "/placeholder.svg"}
            alt="Background texture"
            priority
            className="w-full h-[100%] md:h-full object-cover"
            quality={90}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[40vh] z-[99]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(237, 230, 222, 0.06) 0%, rgb(240, 235, 228) 100%)",
              // background: "linear-gradient(to bottom, #ffffff 0%, #000000 100%)"
            }}
          />
        </div>
        <div className="h-full max-h-[600px] relative">
          <Image
            src={LowerBackgroundImage || "/placeholder.svg"}
            alt="Background texture"
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Content Part */}
      <div className="relative z-10 h-full pt-[100px] md:pt-0">
        <div className="flex justify-between mx-4 md:mx-12 pt-4 md:pt-6">
          <Image 
            src={TopLeftFrame} 
            alt="Top left frame" 
            className="hidden md:block w-32 h-32" 
          />
          <Navbar 
            isOpen={isMenuOpen} 
            onToggle={handleMenuToggle} 
          />
          <Image
            src={TopRightFrame}
            alt="Top right frame"
            className="hidden md:block w-32 h-32"
          />
        </div>
        <AngelsContainer />
        <CenterText />
        <AboutSection />
      </div>
    </div>
  );
};

export default HeroSection;
