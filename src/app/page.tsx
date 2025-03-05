import HeroSection from "./components/HeroComponents";
import HowItWorks from "./components/HowItWorksComponents";
import SecurityAndBenefits from "./components/SecurityAndBenefitComponents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1640px] mx-auto overflow-hidden">
      <HeroSection />
      <HowItWorks />
      <SecurityAndBenefits />
      <Footer />
    </div>
  );
}
