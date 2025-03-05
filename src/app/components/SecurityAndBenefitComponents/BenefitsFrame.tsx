import React from "react";
import Image from "next/image";
import SecurityAndBenefitsFrame from "/public/assets/frames/SecurityAndBenefits.svg";
import PointsSymbol from "/public/assets/symbols/PointsSymbol.svg";

interface BenefitsFrameProps {
  content: {
    title: string;
    items: string[];
  };
}
// SecurityFrame.tsx and BenefitsFrame.tsx (they share similar structure)
export const BenefitsFrame: React.FC<BenefitsFrameProps> = ({ content }) => {
  return (
    <div className="w-full max-w-[530px] relative">
      {/* Frame Image */}
      <Image
        src={SecurityAndBenefitsFrame}
        alt="Security and Benefits Frame"
        className="w-full h-auto object-contain"
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
        <h3 className="text-[#FFFCEF] text-3xl md:text-4xl lg:text-5xl font-instrument italic mb-4 lg:mb-6 text-center">
          {content.title}
        </h3>
        <ul className="space-y-3 md:space-y-4">
          {content.items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 md:gap-3"
            >
              <Image
                src={PointsSymbol}
                alt={`point ${index}`}
                width={20}
                height={20}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <span className="text-[#FFDFAA] text-base md:text-lg lg:text-xl leading-tight">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};