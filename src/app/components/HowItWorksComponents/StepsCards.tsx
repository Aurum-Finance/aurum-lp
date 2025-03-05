import type React from "react";
import Image from "next/image";
import type { StepCard } from "@/types";
import { formatHighlightedText } from "@/utils/textFormatter";
import { cn } from "@/utils/cn";

interface StepsCardsProps extends StepCard {
  className?: string;
}

const StepsCards: React.FC<StepsCardsProps> = ({
  id,
  image,
  title,
  description,
  width,
  height,
  className,
}) => {
  const renderDescription = () => {
    if (typeof description === "string") {
      return (
        <p className="text-black max-w-72 text-md mt-3">
          {formatHighlightedText(description)}
        </p>
      );
    }

    return (
      <div className="text-black max-w-72 text-md mt-3">
        <p>{description.text}</p>
        <ul className="mt-2 space-y-2">
          {description.points?.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">◈</span>
              <span>
                <span className="text-[#800020] font-bold">{point.label}</span>
                {`: ${point.description}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={cn("flex w-full md:w-auto", className)}>
      <div className="w-1/2 md:w-auto md:mb-5">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Step ${id} illustration`}
          width={Number.parseInt(width)}
          height={Number.parseInt(height)}
          className="object-contain"
          quality={90}
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-6 items-start w-full md:w-auto">
        <div className=" bg-gradient-to-t from-[#A88142] to-[#F3EB93] p-1 rotate-45 shrink-0">
          <div className="w-8 md:w-10 h-8 md:h-10 bg-white flex items-center justify-center">
            <span className="text-[#464032] text-2xl md:text-3xl font-bold -rotate-45">
              {id}
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-instrument italic text-[#800020] max-w-64">
            {title}
          </h2>
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default StepsCards;
