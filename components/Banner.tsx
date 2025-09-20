"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  // const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      // setIsVisible(false);
    }, 500);
  };

  // if (!isVisible) return null;

  return (
    <div
      className={`overflow-hidden bg-[#1A1A1A] transition-all duration-500 ${
        isClosing
          ? "max-h-0 opacity-0 -translate-y-5"
          : "max-h-20 opacity-100 translate-y-0"
      }`}
    >
      <div className="relative w-full font-urbanist">
        <Image
          className="w-full h-11 object-cover"
          src="/Abstract Design.svg"
          alt="banner"
          width={700}
          height={38}
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white ml-auto tracking-wide text-[13px] text-center">
            ✨ Discover Your Dream Property with Estatein
          </p>

          <p className="text-white ml-3 underline cursor-pointer tracking-wide text-[13px] text-center">
            Learn More
          </p>

          <div
            className="p-[5px] ml-auto mr-6 bg-[#303030] hover:bg-[#141414] smooth-transition cursor-pointer rounded-full"
            onClick={handleClose}
          >
            <Image
              className="w-full h-[17px] object-cover"
              src="/close.svg"
              alt="close"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
