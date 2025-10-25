"use client";

import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  subtext: string;
}

export default function ManagementOffer({ img, title, subtext }: CardProps) {
  return (
    <div className="border border-[#242424] bg-[#141414] rounded-xl w-full p-[35px] tracking-wide">
      <div className="flex items-center gap-4 text-lg mb-[18px]">
        <div>
          <Image
            className="w-[62px] h-auto"
            src={img}
            alt="home"
            width={62}
            height={62}
            priority
          />
        </div>

        <p className="text-[17px]">{title}</p>
      </div>

      <p className="text-[#999999] text-[14px] leading-[20px]">{subtext}</p>
    </div>
  );
}
