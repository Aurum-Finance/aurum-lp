// components/HeroSection/AngelsContainer.tsx
import Image from "next/image"
import HeroRightAngel from "/public/assets/angels/HeroRightAngel.png"
import HeroLeftAngel from "/public/assets/angels/HeroLeftAngel.png"
import HeroTextBg from "/public/assets/symbols/HeroTextBg.png"

const AngelsContainer = () => {
  return (
    <div className="relative">
      {/* Left Angel */}
      <div className="absolute left-8 md:left-24 top-72 md:top-20 animate-float">
        <Image
          src={HeroLeftAngel}
          alt="Left angel"
          quality={90}
          className="w-40 h-64 md:w-64 md:h-80 object-contain"
        />
      </div>
      {/* Right Angel */}
      <div className="absolute right-3 md:right-36 -top-6 md:-top-10 animate-float-delayed">
        <Image
          src={HeroRightAngel}
          alt="Right angel"
          quality={90}
          className="w-28 h-44 md:w-36 md:h-56 object-contain"
        />
      </div>
      {/* Center Background */}
      <div
        className="absolute -top-[100px] md:-top-[170px] z-[-1] w-full h-[500px] md:h-[782px] flex flex-col items-center"
        style={{
          backgroundImage: `url(${HeroTextBg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}

export default AngelsContainer