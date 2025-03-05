import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterBg from "/public/assets/backgrounds/FooterBg.png";
import FooterShade from "/public/assets/backgrounds/FooterShade.png";
import FooterLogo from "/public/assets/symbols/FooterLogo.svg";
import Telegram from "/public/assets/symbols/telegram.svg";
import Discord from "/public/assets/symbols/discord.svg";
import Twitter from "/public/assets/symbols/X.svg";
import GemBorder from "/public/assets/frames/gemBorder.svg";
import MarkBorder from "/public/assets/frames/MaskBorder.svg";
import FooterAngel from "/public/assets/angels/FooterAngel.svg";

// social media links
const socialLinks = [
  {
    name: "Telegram",
    icon: "telegram",
    href: "https://t.me/+IfXkNEQpsbVkYTZk",
  },
  { name: "Twitter", icon: "twitter", href: "https://x.com/Aurum_Fi" },
  // { name: "Discord", icon: "discord", href: "#" },
];

// Define navigation links
const navLinks = [
  { name: "About Aurum", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Security & Benefit", href: "#security" },
  { name: "Contact us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative">
      <div className="relative h-[800px] flex flex-col items-center">
        {/* Background Images */}
        <Image
          src={FooterBg}
          alt="Background texture"
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Image
          src={FooterLogo}
          alt="Logo"
          className="absolute  -translate-x-[10px] translate-y-10 w-[70%] h-[70%] opacity-70"
        />
        <Image
          src={FooterShade}
          alt="Shade"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Container */}
        <div className="relative z-[2] flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 text-center">
          {/* Aurum Logo/Text */}
          <div className="relative w-full">
            <h2 className="text-[#FFF6BB] text-[105px] md:text-[212px] font-instrument italic">
              AURUM
            </h2>
            <Image
              src={FooterAngel}
              alt="Footer Angel"
              className="absolute -top-6 right-2 md:top-0 md:right-0 w-32 md:w-52 h-36 md:h-60"
            />
          </div>

          {/* Community Text */}
          <p className="text-[#EDE5B390] text-[20px] md:text-[40px] -mt-5 md:-mt-14 font-instrument italic mb-12">
            Follow us and join the community on
          </p>

          {/* Social Links */}
          <div className="flex gap-8 mb-16">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-14 h-14 bg-gradient-to-t from-[#A88142] to-[#F3EB93] p-1 rounded-sm rotate-45 hover:scale-110 transition-transform"
              >
                <div className="w-full h-full bg-[#28241C] flex items-center justify-center ">
                  <span className="text-[#F3EB93] text-2xl -rotate-45">
                    {/* Replace with your actual icon component */}
                    {social.icon === "telegram" && (
                      <Image src={Telegram} alt="telegram" />
                    )}
                    {social.icon === "twitter" && (
                      <Image src={Twitter} alt="Twitter" />
                    )}
                    {social.icon === "discord" && (
                      <Image src={Discord} alt="Discord" />
                    )}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="w-full flex justify-center max-w-3xl mb-3">
            <div className="relative">
              <Image src={GemBorder} alt="Frame with Gem" className="" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex  md:flex-row flex-col gap-8 text-[#8B8575] font-instrument italic text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#F3EB93] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="w-full flex justify-center max-w-3xl mt-3">
            <div className="relative">
              <Image src={MarkBorder} alt="Frame with Gem" className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
