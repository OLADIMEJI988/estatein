"use client";

import Image from "next/image";

interface CardProps {
  location: string;
  address: string;
  subtext: string;
}

export default function OfficeCard({ location, address, subtext }: CardProps) {
  return (
    <div className="border border-[#262626] p-9 max-lg:px-[20px] rounded-lg flex flex-col justify-between h-full">
      <div className="text-sm">
        <p>{location}</p>
        <p className="mt-[6px] mb-[10px] text-[21px] font-semibold max-lg:leading-7">
          {address}
        </p>
        <p className="text-[14px] text-[#999999]">{subtext}</p>
      </div>

      <div className="flex mt-7 gap-2 max-lg:gap-3 flex-wrap">
        <button className="bg-[#191919] border border-[#262626] rounded-full py-[10px] px-4 flex text-sm tracking-wide items-center gap-1">
          <Image
            className="w-5 h-auto"
            src="/whitemail.svg"
            alt="mail"
            width={22}
            height={22}
            priority
          />
          <p>info@estatein.com</p>
        </button>

        <button className="bg-[#191919] border border-[#262626] rounded-full py-[10px] px-4 flex text-sm tracking-wide items-center gap-1">
          <Image
            className="w-5 h-auto"
            src="/phone.svg"
            alt="phone"
            width={20}
            height={20}
            priority
          />
          <p>08136170619</p>
        </button>

        <button className="bg-[#191919] border border-[#262626] rounded-full py-[10px] px-4 flex text-sm tracking-wide items-center gap-1">
          <Image
            className="w-5 h-auto"
            src="/whiteloc.svg"
            alt="location"
            width={20}
            height={20}
            priority
          />
          <p>Metropolis</p>
        </button>
      </div>

      <button className="bg-[#703BF7] py-[13px] max-lg:mt-8 w-full rounded-lg text-sm max-lg:text-[15px] tracking-wide mt-auto cursor-pointer">
        Get Direction
      </button>
    </div>
  );
}
