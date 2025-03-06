"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/symbols/logo.svg";
import gsap from "gsap";
import NavbarBg from "/public/assets/backgrounds/NavbarBg.svg";
import NavPointsSymbol from "/public/assets/symbols/NavPointsSymbol.svg";
import TopLeftFrame from "/public/assets/frames/TopLeftFrame.png";
import TopRightFrame from "/public/assets/frames/TopRightFrame.png";
import Telegram from "/public/assets/symbols/telegram.svg";
import Discord from "/public/assets/symbols/discord.svg";
import Twitter from "/public/assets/symbols/X.svg";
import MarkBorder from "/public/assets/frames/MaskBorder.svg";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SocialLink {
  icon: "telegram" | "twitter" | "discord";
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { label: "About Aurum", href: "#About" },
  { label: "How It Works", href: "#HowItWorks" },
  { label: "Security & Benefit", href: "#SecurityAndBenifits" },
];

const socialLinks: SocialLink[] = [
  { icon: "telegram", href: "#", label: "Telegram" },
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "discord", href: "#", label: "Discord" },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, onToggle }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    gsap.set(menuRef.current, {
      yPercent: -100,
      display: "none",
    });
    gsap.set(overlayRef.current, {
      opacity: 0,
      display: "none",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
      gsap.set([menuRef.current, overlayRef.current], { display: "block" });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(menuRef.current, {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(menuLinksRef.current?.children || [], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        });
    } else {
      tl.to(menuRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.in",
      })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        })
        .set([menuRef.current, overlayRef.current], { display: "none" })
        .set(menuLinksRef.current?.children || [], {
          opacity: 0,
          y: 20,
        });
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block w-full">
        <div className="fixed w-[60%] mx-auto top-0 left-0 m-4 right-0 p-[2px] bg-gradient-to-br from-[#FFFCDC] via-[#F3EB93] to-[#936821] z-[999]">
          <div className="flex items-center justify-between bg-white border border-[#C89B3C40] px-4">
            {/* Left Menu Items */}
            <div className="flex items-center space-x-4">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={"/"}
                  className="text-slide-container relative overflow-hidden text-[#464032] px-11 py-2 transition-colors text-xl font-instrument italic"
                >
                  <span className="inline-block transition-transform duration-300 hover-slide-up">
                    {item.label}
                  </span>
                  <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 hover-slide-up-clone">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Logo */}
            <div className="rounded-full py-1">
              <Image src={Logo} alt="Logo" className="w-16 h-16" />
            </div>

            {/* Right Menu Items */}
            <div className="flex items-center space-x-4">
              <Link
                href={"/"}
                className="text-slide-container relative overflow-hidden text-[#464032] px-11 py-2 transition-colors text-xl font-instrument italic"
              >
                <span className="inline-block transition-transform duration-300 hover-slide-up">
                  {navItems[2].label}
                </span>
                <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 hover-slide-up-clone">
                  {navItems[2].label}
                </span>
              </Link>
              <Link
                href="https://docs.aurumfi.xyz"
                className="relative overflow-hidden bg-[#EDE5B3] text-[#464032] font-instrument italic px-7 py-2 group"
              >
                <span className="relative text-xl z-10 group-hover:text-white transition-colors duration-300">
                 Almanac
                </span>
                <span className="absolute inset-0 bg-[#800020] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 m-4 right-0 p-[2px] bg-gradient-to-br from-[#FFFCDC] via-[#F3EB93] to-[#936821] z-[999]">
        <div className="flex justify-between items-center px-4 py-3 border bg-white border-[#C89B3C40]">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="text-[#464032] text-3xl ml-2 italic font-instrument">
              Aurum
            </span>
          </div>
          <button
            onClick={onToggle}
            className="p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-16 h-[2px] bg-[#B89654] mb-1" />
            <div className="w-16 h-[2px] bg-[#B89654] mb-1" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/30 backdrop-blur-lg md:hidden z-[998]"
      />

      {/* Mobile Menu Content */}
      <div
        ref={menuRef}
        className="fixed inset-x-4 top-28 p-[1px] pt-[2px] md:hidden z-[999] overflow-auto bg-gradient-to-br from-[#FFFCDC] via-[#F3EB93] to-[#936821]"
      >
        <div
          className="min-h-full flex flex-col"
          style={{
            backgroundImage: `url(${NavbarBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Menu Header */}
          <div className="flex justify-between p-3">
            <Image
              src={TopLeftFrame}
              alt="Top left frame"
              className="block w-12 h-12"
            />
            <button
              onClick={onToggle}
              className="text-[#464032] text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>
            <Image
              src={TopRightFrame}
              alt="Top right frame"
              className="block w-12 h-12"
            />
          </div>

          {/* Navigation Links */}
          <div ref={menuLinksRef} className="flex flex-col px-8">
            {[...navItems, { label: "Contact us", href: "/contact" }].map(
              (item, index) => (
                <div key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className="text-[#464032] font-instrument italic text-2xl py-4 flex items-center gap-3"
                    onClick={onToggle}
                  >
                    <span className="text-[#800020]">
                      <Image src={NavPointsSymbol} alt="*" />
                    </span>
                    {item.label}
                  </Link>
                  {index < navItems.length && (
                    <div className="w-full h-[1px] bg-[#00000016]" />
                  )}
                </div>
              )
            )}
          </div>

          {/* Social Links */}
          <div className="mt-4 px-8 pb-8">
            <p className="text-[#464032] font-instrument italic text-xl mb-6 text-center">
              Follow us and join the community on
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  className="w-14 h-14 bg-gradient-to-t from-[#A88142] to-[#F3EB93] p-1 rounded-sm rotate-45 hover:scale-110 transition-transform"
                >
                  <div className="w-full h-full bg-[#28241C] flex items-center justify-center">
                    <span className="text-[#F3EB93] text-2xl -rotate-45">
                      {social.icon === "telegram" && (
                        <Image src={Telegram} alt="Telegram" />
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
          </div>

          {/* Bottom Decorative Elements */}
          <div className="relative flex justify-center">
            <Image src={MarkBorder} alt="Frame with Gem" className="w-[80%]" />
          </div>
          <div className="flex justify-between p-3">
            <Image
              src={TopLeftFrame}
              alt="Bottom left frame"
              className="block w-12 h-12 -rotate-90"
            />
            <Image
              src={TopRightFrame}
              alt="Bottom right frame"
              className="block w-12 h-12 rotate-90"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-slide-container:hover .hover-slide-up {
          transform: translateY(-120%);
        }

        .text-slide-container:hover .hover-slide-up-clone {
          transform: translateY(-120%);
        }
      `}</style>
    </>
  );
};

export default Navbar;