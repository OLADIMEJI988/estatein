"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Loader from "./Loader";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) => {
    const isActive =
      pathname === path ||
      pathname.startsWith(`${path}/`) ||
      (path === "/property" && pathname.includes("property"));

    return `px-[14px] py-[12px] rounded-lg border transition-colors duration-700
    ${
      isActive
        ? "bg-[#141414] border-[#262626]"
        : "bg-transparent border-transparent"
    }`;
  };

  return (
    <>
      <Loader />
      <div className="min-w-[535px] border borderbg bg-[#1A1A1A] flex justify-between max-lg:px-4 px-12 items-center py-[14px] font-urbanist">
        <div className="flex items-center">
          <Image
            className="h-[30px] object-contain"
            src="/logo.svg"
            alt="logo"
            width={42}
            height={38}
            priority
          />
          <p className="font-urbanist-semibold text-xl tracking-wide">
            Estatein
          </p>
        </div>

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

        <div className="flex items-center lg:hidden">
          <Image
            className="h-[30px] object-contain"
            src="/hamburger.svg"
            alt="logo"
            width={42}
            height={38}
            priority
          />
        </div>
      </div>
    </>
  );
}
