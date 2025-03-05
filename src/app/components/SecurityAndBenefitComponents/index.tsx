// SecurityAndBenefits/index.tsx
import React from "react";
import Image from "next/image";
import { SecurityFrame } from "./SecurityFrame";
import { BenefitsFrame } from "./BenefitsFrame";
import BottomImage from "/public/assets/architecture/SecurityAndBenefitsBottom.svg";
import SecurityAndBenefitsImage from "/public/assets/angels/SecurityAndBenefits.svg";

const gridStyles = {
  container: "min-h-screen md:h-[160vh] h-[2000px] max-h-[1500px] relative flex flex-col lg:flex-row justify-between overflow-hidden bg-black",
  background: "absolute w-full h-full z-[1]",
  gridLines: "absolute w-full h-full flex justify-between z-[10] lg:flex",
  verticalLine: "h-full bg-[#464032] w-[1px]",
  contentLayer: "relative z-[2] w-full h-full px-4 md:px-8 lg:px-16 py-12 lg:py-24",
} as const;

interface FrameContent {
  title: string;
  items: string[];
}

const securityContent: FrameContent = {
  title: "Fortified Architecture",
  items: [
    "Fortified Architecture",
    "200% collateralization shield",
    "Dual oracle system",
    "Daily strategy optimization",
    "Golden Compass navigation",
  ],
};

const benefitsContent: FrameContent = {
  title: "Nobility of Benefits",
  items: [
    "Full deposit yield generation",
    "Flexible aurSOL utilization",
    "Transparent operations",
  ],
};

const SecurityAndBenefits: React.FC = () => {
  return (
    <section className={gridStyles.container}>
      {/* Background Grid - Only visible on desktop */}
      <div className="block">
        <div className={gridStyles.background}>
          <div className="absolute w-full h-full flex flex-col items-end bg-transparent z-[100]">
            <div className="w-full h-[1px] bg-[#464032] mt-24" />
            <div className="relative w-full h-full max-h-[200px] md:max-h-[621px] flex justify-end">
              <div className="absolute top-[170px] md:top-[300px] left-0 w-full h-[1px] bg-[#464032] -translate-y-1/2" />
              <div className="w-full h-full max-h-[165px] md:max-w-[621px] max-w-[165px] md:max-h-[621px] mr-8 md:mr-16 rounded-full border-[1px] border-[#464032]" />
            </div>
            <div className="w-[50%] h-[2px] bg-[#464032]" />
            <div className="w-full h-full flex items-start">
              <div className="absolute md:-left-32 md:-bottom-40 w-full h-full max-w-[165px] max-h-[165px] md:max-w-[621px] md:max-h-[621px] mr-16 rounded-full border-[1px] border-[#464032]" />
            </div>
          </div>
          <div className={gridStyles.gridLines}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={gridStyles.verticalLine} />
            ))}
          </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className={gridStyles.contentLayer}>
        {/* Title Section */}
        <div className="flex flex-col items-start mb-8 lg:mb-0">
          <h2 className="text-[#EDE5B3] font-sans text-6xl md:text-6xl lg:text-8xl">
            Security &
          </h2>
          <div className="flex items-center lg:-mt-4">
            <span className="text-[#EDE5B370] italic text-5xl md:text-7xl lg:text-[120px] font-instrument">
              Benefit
            </span>
            <div className="w-32 md:w-48 lg:w-64 h-16 md:h-20 lg:h-28 rounded-full ml-4">
              <Image
                src={SecurityAndBenefitsImage}
                alt="security person"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Frames */}
        <div className="flex flex-col lg:flex-row justify-between mt-24 lg:pl-8 gap-8 lg:gap-0">
          {/* Mobile layout stacks frames vertically */}
          <div className="w-full lg:w-[45%] lg:translate-y-12">
            <BenefitsFrame content={benefitsContent} />
          </div>
          <div className="w-full lg:w-[45%] lg:flex lg:justify-center lg:-translate-y-64">
            <SecurityFrame content={securityContent} />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="absolute bottom-0 right-0 w-1/2 lg:w-auto">
          <Image
            src={BottomImage}
            alt="Architecture"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityAndBenefits;