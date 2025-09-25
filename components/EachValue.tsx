import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  img: string;
  title: string;
  subtext: string;

}

export default function EachValue({img, title, subtext}: CardProps) {
  return (
    <>
      <div className="tracking-wide items-start">
        <div className="flex items-center gap-3">
          <Image
            className="w-[55px] h-full object-cover"
            src={img}
            alt="banner"
            width={60}
            height={60}
            priority
          />

          <p className="font-urbanist-semibold text-[20px]">{title}</p>
        </div>

        <p className="mt-[16px] text-[#999999] text-[14px] w-[290px]">{subtext}</p>
      </div>
    </>
  );
}
