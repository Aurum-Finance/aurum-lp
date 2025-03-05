import type React from "react";
import Image from "next/image";
import QuoteRightBg from "/public/assets/backgrounds/QuoteRightBg.svg";
import QuoteLeftBg from "/public/assets/backgrounds/QuoteLeftBg.svg";
import HowItWorksContainer from "/public/assets/frames/HowItWorksContainer.svg";

const QuoteSection: React.FC = () => {
  return (
    <div
      className={
        "relative flex flex-col md:flex-row items-center justify-between  md:h-[70vh] md:max-h-[500px] w-full bg-[#EFEAE4] mt-16 mb-24 md:mb-14 md:mt-[160px]"
      }
    >
      {/* Left BG - Hidden on mobile */}
      <div className="w-full md:w-auto">
        <Image
          src={QuoteLeftBg || "/placeholder.svg"}
          alt="Left decorative frame"
          className="absolute md:relative -mt-16 md:mt-0 w-[50%] h-auto max-w-[406px] md:h-[403px] md:w-auto object-cover"
        />
      </div>
      {/* Container for background image */}
      <div className="relative w-full max-w-[668px] h-full px-4 md:px-0">
        <Image
          src={HowItWorksContainer || "/placeholder.svg"}
          alt="Decorative frame"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <p className="text-[#464032] text-[16px] -mt-4 md:px-2 px-5 sm:text-xl md:text-4xl font-instrument italic text-center max-w-[600px]">
            <span className="text-[#800020]">100%</span> of all generated yields
            flow back to you.
          </p>
        </div>
      </div>

      {/* Right BG - Hidden on mobile */}
      <Image
        src={QuoteRightBg || "/placeholder.svg"}
        alt="Right decorative frame"
        className="hidden md:block max-w-[406px] h-[403px] object-cover"
      />
    </div>
  );
};

export default QuoteSection;
