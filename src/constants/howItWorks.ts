// constants/howItWorks.ts
import { StepCard } from '@/types';
import AngelSculpture from "@/public/assets/architecture/AngelSculpture.png";
import Pillar from "@/public/assets/architecture/Pillar.png";
import YieldArchitecture from "@/public/assets/architecture/YieldArchitecture.png";

export const HOW_IT_WORKS_DATA: StepCard[] = [
  {
    id: 1,
    title: "Deposit SOL",
    image: Pillar,
    width: "151px",
    height: "269px",
    description: "Your journey begins with a SOL deposit. For every 100 SOL entrusted to our vaults, your entire balance starts generating yield immediately through our carefully selected strategies.",
  },
  {
    id: 2,
    title: "Receive aurSOL",
    image: AngelSculpture,
    width: "215px",
    height: "328px",
    description: "Access up to 50 aurSOL for every 100 SOL deposited. Use aurSOL across Solana's ecosystem while your original deposit continues its yield-generating journey.",
  },
  {
    id: 3,
    title: "Intelligent Yield Generation",
    image: YieldArchitecture,
    width: "306px",
    height: "228px",
    description: {
      text: "Your full deposit grows through three proven paths:",
      points: [
        {
          label: "Jito Staking",
          description: "Secure validator rewards + MEV"
        },
        {
          label: "Marinade Finance",
          description: "Liquid staking returns"
        },
        {
          label: "Golden Compass",
          description: "Our proprietary yield optimization engine that navigates through multiple DeFi strategies for optimal returns"
        }
      ]
    }
  }
];