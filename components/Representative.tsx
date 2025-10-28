"use client";

import Image from "next/image";
import AnimatedSendSvg from "./AnimatedSendSvg";

interface StepProps {
  img: string;
  name: string;
  role: string;
}

export default function Representative({ img, name, role }: StepProps) {
  return (
    <>
      <div className="border border-[#262626] p-[24px] max-lg:py-[30px] rounded-xl">
        <div className="">
          <Image
            className="w-full h-full object-cover"
            src={img}
            alt="banner"
            width={300}
            height={200}
            priority
          />
        </div>

        <div className="bg-[#703BF7] -translate-y-5 max-lg:-translate-y-7 mx-auto flex justify-center items-center w-[60px] h-[40px] max-lg:w-[75px] max-lg:h-[50px] rounded-full">
          <Image
            className="object-cover ml-[2px] max-lg:h-10 cursor-pointer"
            src="/twitter.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />
        </div>

        <div className="mt-[10px] text-center">
          <p className="text-[20px] max-lg:text-[22px] font-urbanist-semibold tracking-wide">
            {name}
          </p>
          <p className="mt-1 text-[#999999] text-[16px] max-lg:text-[17px] mb-[20px]">{role}</p>
          <div className="relative w-full flex">
            <div className="h-9 w-9 max-lg:h-[50px] max-lg:w-[50px] flex justify-center items-center bg-[#703BF7] rounded-full absolute right-3 top-1/2 transform -translate-y-1/2">
              <AnimatedSendSvg />
            </div>

            <input
              type="text"
              placeholder="Say Hello 👋"
              className="text-white w-full border border-[#262626] pl-[20px] py-[14px] max-lg:py-5 bg-[#191919] rounded-full placeholder:text-white tracking-wide text-[16px] cursor-pointer focus:outline-none focus:border-[#703BF7]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
