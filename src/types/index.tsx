// types/index.ts
import { StaticImageData } from "next/image";

export interface StepCard {
  id: number;
  title: string;
  image: StaticImageData;
  description: string | DescriptionWithPoints;
  width: string;
  height: string;
}

export interface DescriptionWithPoints {
  text: string;
  points?: {
    label: string;
    description: string;
  }[];
}

// You might want to add more interfaces for other components
export interface NavigationItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

// Add any other interfaces you might need for the project