"use client";

import { div } from "framer-motion/client";
import Image from "next/image";

interface StepProps {
  img: string;
  name: string;
  role: string;
}

export default function Representative({ img, name, role }: StepProps) {
  return (
    <>
      <div className="border border-[#262626] p-[24px] rounded-xl">
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

        <div className="bg-[#703BF7] -translate-y-5 mx-auto flex justify-center items-center w-[60px] h-[40px] rounded-full">
          <Image
            className="object-cover ml-[2px] cursor-pointer"
            src="/twitter.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />
        </div>

        <div className="mt-[10px] text-center">
          <p className="text-[20px] font-urbanist-semibold tracking-wide">
            {name}
          </p>
          <p className="mt-1 text-[#999999] text-[16px] mb-[20px]">{role}</p>
          <div className="relative w-full flex">
            <div className="h-9 w-9 flex justify-center items-center bg-[#703BF7] rounded-full absolute right-3 top-1/2 transform -translate-y-1/2">
              <Image
                src="/send.svg"
                alt="banner"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </div>

            <input
              type="text"
              placeholder="Say Hello"
              className="text-white w-full border border-[#262626] pl-[20px] py-[14px] bg-[#191919] rounded-full placeholder:text-white tracking-wide text-[16px] cursor-pointer focus:outline-none focus:border-[#703BF7]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
