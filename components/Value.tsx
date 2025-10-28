"use client";

import EachValue from "./EachValue";
import ThreeStars from "./ThreeStars";

export default function Value() {
  return (
    <div className="flex max-lg:flex-col items-center gap-[30px] mt-[120px] max-lg:mt-[110px]">
      <div className="items-start mr-[5px] max-lg:items-center max-lg:w-full">
        <ThreeStars />
        
        <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
          <p className="text-[38px] font-urbanist-semibold">Our Values</p>
          <p className="mt-[10px] text-[#999999] text-[15px] max-lg:text-[17px] w-[400px] max-lg:w-full">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
      </div>

      <div className="p-2 bg-[#191919] rounded-xl w-full">
        <div className="border border-[#262626] p-[48px] max-lg:px-[30px] max-lg:py-[35px] bg-[#141414] rounded-xl">
          <div className="flex max-lg:flex-col">
            <div>
              <EachValue
                img="/purplestar.svg"
                title="Trust"
                subtext="Trust is the cornerstone of every successful real estate transaction."
              />
            </div>

            <div className="w-[1px] max-lg:w-full h-[120px] max-lg:h-[1px] max-lg:my-10 mx-4 bg-[#262626]"></div>

            <div>
              <EachValue
                img="/excellence.svg"
                title="Excellence"
                subtext="We set the bar high for ourselves. From the properties we list to the services we provide."
              />
            </div>
          </div>

          {/* Middle LIne */}
          <div className="h-[1px] w-full bg-[#262626] my-[24px] max-lg:my-10"></div>

          <div className="flex max-lg:flex-col">
            <div>
              <EachValue
                img="/purpleclient.svg"
                title="Client-Centric"
                subtext="Your dreams and needs are at the center of our universe. We listen, understand."
              />
            </div>

            <div className="w-[1px] max-lg:w-full h-[120px] max-lg:h-[1px] mx-4 max-lg:my-10 bg-[#262626]"></div>

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
