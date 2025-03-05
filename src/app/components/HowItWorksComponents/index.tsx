import React from "react";
import Image from "next/image";
import { HOW_IT_WORKS_DATA } from "@/constants/constants";
import StepsCards from "./StepsCards";
import PathLine from "./Pathline";
import QuoteSection from "./QuoteSection";
import HowItWorksBg from "/public/assets/backgrounds/HowItWorksBg.jpg";
import LeftPathLine from "/public/assets/LeftPathLine.svg";
import RightPathLine from "/public/assets/RightPathLine.svg";
import BottomPathLine from "/public/assets/BottomPathLine.svg";
import TopPathLine from "/public/assets/TopPathLine.svg";
import QuoteRightBg from "/public/assets/backgrounds/QuoteRightBg.svg";

const styles = {
  gradient:
    "linear-gradient(to bottom, rgba(237, 230, 222, 0.06) 0%, rgb(240, 235, 228) 100%)",
  section: "relative overflow-hidden bg-[#EFEAE4]",
  background: "absolute w-full h-full z-0",
  content: "relative  container mx-auto px-4 md:pl-14 pt-16 md:pt-32",
  heading:
    "text-4xl md:text-6xl text-center font-instrument italic text-[#464032] md:flex hidden",
  accent: "text-[#800020]",
  stepsLayout:
    "flex flex-col md:flex-row md:justify-between md:items-start relative gap-16 md:gap-0",
} as const;

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Background Part */}
      <div className={styles.background}>
        <div className="relative">
          <Image
            src={HowItWorksBg || "/placeholder.svg"}
            alt="Decorative background"
            priority
            className="w-full h-full md:min-h-[800px] min-h-[1000px] object-cover"
            quality={90}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[400px]"
            style={{ background: styles.gradient }}
          />
        </div>
      </div>
      {/* Content Part */}
      <div className={styles.content}>
        <div className={styles.stepsLayout}>
          <h1
            className={
              "text-4xl md:text-6xl text-center font-instrument italic text-[#464032] block md:hidden"
            }
          >
            How It <span className={styles.accent}>Works</span>
          </h1>
          {/* Mobile: Step 1 horizontal layout */}
          <div className="w-full md:w-auto">
            <StepsCards
              {...HOW_IT_WORKS_DATA[0]}
              className="flex-row md:flex-col items-center justify-start -ml-6"
            />
          </div>

          {/* Path lines - visible only on desktop */}
          <div className="hidden md:block">
            <PathLine src={LeftPathLine} direction="left" />
          </div>
          <div className="w-full flex justify-center md:hidden h-12 -mt-10">
            <div>
              <PathLine src={TopPathLine} direction="left" />
            </div>
          </div>

          {/* Center content with heading and Step 2 */}
          <div className="flex flex-col gap-12 md:gap-24 items-center w-full md:w-auto">
            <h1 className={styles.heading}>
              How It <span className={styles.accent}>Works</span>
            </h1>
            {/* Mobile: Step 2 reverse horizontal layout */}
            <StepsCards
              {...HOW_IT_WORKS_DATA[1]}
              className="flex-row-reverse md:flex-col items-center"
            />
          </div>

          {/* Path lines - visible only on desktop */}
          <div className="hidden md:block">
            <PathLine src={RightPathLine} direction="right" />
          </div>
          <div className="w-full flex justify-center md:hidden h-12 ml-10 -mt-16 mb-5 ">
            <div>
              <PathLine src={BottomPathLine} direction="right" />
            </div>
          </div>

          {/* Mobile: Step 3 vertical layout */}
          <div className="relative flex w-full md:w-auto z-[2]">
            <StepsCards
              {...HOW_IT_WORKS_DATA[2]}
              className="w-full flex-col items-start gap-5"
            />
            <Image
              src={QuoteRightBg || "/placeholder.svg"}
              alt="Right decorative frame"
              className="w-full md:hidden absolute -right-10 max-w-[60vw] max-h-[50vh] -top-14 object-cover -z-10 opacity-60"
            />
          </div>
        </div>
      </div>
      <QuoteSection />
    </section>
  );
};

export default HowItWorks;
