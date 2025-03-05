import Link from "next/link";
import Image from "next/image";
import ButtonBorder from "../../../../public/assets/ButtonBorder.svg";
import TopBorder from "../../../../public/assets/Topborder.svg";
import BottomBorder from "../../../../public/assets/BottomBorder.svg";
import JoinCommunity from "@/components/JoinCommunityButton";

const CenterText = () => {
  return (
    <div className="flex flex-col items-center pt-14 px-4">
      <h1 className="text-6xl md:text-8xl font-instrument italic text-[#464032]">
        Aurum
      </h1>
      <p className="text-5xl md:text-[100px] font-instrument italic text-[#800020] -mt-2">
        Finance
      </p>
      <p className="text-black text-lg md:text-2xl mt-4 text-center max-w-xl">
        Turn Your SOL into a Yield-Generating Treasury
      </p>
      <Link
        href="https://t.me/+IfXkNEQpsbVkYTZk"
        className="relative flex justify-center items-center mt-8 px-8 py-3 text-white text-xl transition-colors group"
      >
        <Image
          className="absolute -top-[10px] w-[282px] h-[100px]"
          src={ButtonBorder}
          alt="Border"
        />
        <div className="absolute flex flex-col gap-9 transition-all duration-500 ease-in-out group-hover:gap-12">
          <Image src={TopBorder} alt="Top Border" />
          <Image src={BottomBorder} alt="Bottom Border" />
        </div>
        <JoinCommunity text="Join Community" href="#" />
      </Link>
    </div>
  );
};

export default CenterText;