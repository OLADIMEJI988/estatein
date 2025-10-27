"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Loader from "./Loader";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path: string) => {
    const isActive =
      pathname === path ||
      pathname.startsWith(`${path}/`) ||
      (path === "/property" && pathname.includes("property"));

    return `px-[14px] py-[12px] max-lg:py-[17px] max-lg:px-[22px] rounded-lg border transition-colors duration-700
      ${
        isActive
          ? "bg-[#141414] border-[#262626]"
          : "bg-transparent border-transparent"
      }`;
  };

  return (
    <>
      <Loader />

      {/* Navbar */}
      <div
        className={`min-w-[540px] border borderbg bg-[#1A1A1A] flex justify-between max-lg:px-4 px-12 items-center py-[14px] font-urbanist relative z-50 transition-all duration-300 ${
          menuOpen ? "max-lg:opacity-0 max-lg:pointer-events-none" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            className="h-[30px] max-lg:h-[35px] object-contain"
            src="/logo.svg"
            alt="logo"
            width={42}
            height={38}
            priority
          />
          <p className="font-urbanist-semibold text-xl max-lg:text-2xl tracking-wide">
            Estatein
          </p>
        </div>

        {/* Desktop Links */}
        <div className="max-lg:hidden flex text-sm tracking-wide text-white space-x-1">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/property" className={linkClasses("/property")}>
            Properties
          </Link>
          <Link href="/ourservices" className={linkClasses("/ourservices")}>
            Services
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="max-lg:hidden">
          <Link
            href="/contact"
            className={`border tracking-wide rounded-lg text-sm px-[14px] py-[16px] transition-colors duration-700 ${
              pathname === "/contact"
                ? "bg-[#703BF7] border border-[#262626]"
                : "bg-[#141414] border border-[#262626]"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="flex items-center lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            className="h-[30px] object-contain"
            src="/hamburger.svg"
            alt="open menu"
            width={42}
            height={38}
            priority
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0F0F0F]/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white font-urbanist text-2xl z-40 transition-all duration-500">
          {/* Close Icon */}
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/close.svg"
              alt="close menu"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <Link href="/" onClick={() => setMenuOpen(false)} className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/property" onClick={() => setMenuOpen(false)} className={linkClasses("/property")}>
            Properties
          </Link>
          <Link href="/ourservices" onClick={() => setMenuOpen(false)} className={linkClasses("/ourservices")}>
            Services
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`border tracking-wide rounded-lg text-2xl px-[22px] py-5 transition-colors duration-700 ${
              pathname === "/contact"
                ? "bg-[#703BF7] border border-[#262626]"
                : "bg-[#141414] border border-[#262626]"
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
