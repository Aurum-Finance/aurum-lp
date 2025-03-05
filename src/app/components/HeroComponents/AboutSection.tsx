import Image from "next/image"
import HeroArch from "/public/assets/architecture/HeroArch.svg"
import AboutLogo from "/public/assets/symbols/AboutLogo.png"

const AboutSection = () => {
  return (
    <div id="#About" className="w-full flex flex-col md:flex-row justify-center items-center mt-48 md:mt-0 px-4 md:mx-40">
      {/* Left content */}
      <div className="w-full md:w-[70%] flex flex-col items-start md:text-left">
        <Image
          src={AboutLogo || "/placeholder.svg"}
          alt="About us symbol"
          width={100}
          height={100}
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <h1 className="text-4xl md:text-6xl font-instrument italic text-[#464032] mt-4">
          About
          <span className="pl-1 font-instrument transform rotate-45 bg-[#FFF6BB]">Aurum</span>
        </h1>
        <p className="text-[#464032] w-full md:max-w-[80%] mt-4 md:mt-6 leading-[1.8] md:leading-[2]">
          Welcome to Aurum - where your SOL works tirelessly through time-tested yield strategies. Deposit SOL, receive
          aurSOL, and watch as our strategies navigate your assets through the most rewarding paths in DeFi.
        </p>
      </div>
      {/* Right Image */}
      <div className="w-full flex justify-center mt-8 md:mt-0">
        <Image
          src={HeroArch || "/placeholder.svg"}
          alt="Arch"
          width={200}
          height={200}
          className="w-full max-w-[300px] md:max-w-[574px] h-auto md:h-[574px]"
        />
      </div>
    </div>
  )
}

export default AboutSection

