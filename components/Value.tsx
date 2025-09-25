"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EachValue from "./EachValue";
import ThreeStars from "./ThreeStars";

export default function Value() {
  return (
    <div className="flex items-center gap-[30px] mt-[120px]">
      <div className="items-start mr-auto">
        <ThreeStars />
        
        <div className=" mt-[16px] ml-5 tracking-wide">
          <p className="text-[38px] font-urbanist-semibold">Our Values</p>
          <p className="mt-[10px] text-[#999999] text-[15px] w-[400px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
      </div>

      <div className="p-2 bg-[#191919] rounded-xl w-full">
        <div className="border border-[#262626] p-[50px] bg-[#141414] rounded-xl">
          <div className="flex">
            <div>
              <EachValue
                img="/purplestar.svg"
                title="Trust"
                subtext="Trust is the cornerstone of every successful real estate transaction."
              />
            </div>

            <div className="w-[1px] h-[120px] mx-4 bg-[#262626]"></div>

            <div>
              <EachValue
                img="/excellence.svg"
                title="Excellence"
                subtext="We set the bar high for ourselves. From the properties we list to the services we provide."
              />
            </div>
          </div>

          {/* LIne */}
          <div className="h-[1px] w-full bg-[#262626] my-[24px]"></div>

          <div className="flex">
            <div>
              <EachValue
                img="/purpleclient.svg"
                title="Client-Centric"
                subtext="Your dreams and needs are at the center of our universe. We listen, understand."
              />
            </div>

            <div className="w-[1px] h-[120px] mx-4 bg-[#262626]"></div>

            <div>
              <EachValue
                img="/purplestar.svg"
                title="Our Commitment"
                subtext="We are dedicated to providing you with the highest level of service, professionalism."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
