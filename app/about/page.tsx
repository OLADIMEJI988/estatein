"use client";

import Image from "next/image";
import Value from "@/components/Value";
import Achievements from "@/components/Achievements";
import ThreeStars from "@/components/ThreeStars";
import EstateinExperience from "@/components/EstateinExperience";
import EstateinTeam from "@/components/EstateinTeam";
import ValuedClients from "@/components/ValuedClients";

export default function About() {
  return (
    <div className="font-urbanist mt-[20px] lg:mt-[70px] mb-[120px] max-lg:mb-[100px] max-w-[1200px] max-lg:w-full mx-auto px-4 max-lg:px-[12px] overflow-hidden">
      <div className="flex items-center gap-[40px] max-lg:flex-col-reverse max-lg:gap-10">
        <div className="items-start mr-auto max-lg:mr-0">
          <div className="flex justify-start">
            <ThreeStars />
          </div>

          <div className="mt-[14px] ml-4 tracking-wide max-lg:ml-2">
            <p className="text-[38px] max-lg:text-[35px] font-urbanist-semibold">
              Our Journey
            </p>
            <p className="mt-[10px] text-[#999999] text-[15px] leading-relaxed w-[550px] max-lg:w-full mx-auto max-lg:mx-0">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we&apos;ve
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>

          <div className="flex gap-[17px] ml-5 mt-[55px] max-lg:ml-0 max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-lg:justify-center max-lg:mt-8">
            <div className="border border-[#262626] bg-[#191919] p-[13px] max-lg:p-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-24 w-[157px] rounded-lg max-lg:w-full text-center">
              <p className="font-urbanist-semibold text-2xl">
                200+
              </p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Happy Customers
              </p>
            </div>

            <div className="border border-[#262626] bg-[#191919] p-[13px] max-lg:p-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-24 w-[157px] rounded-lg max-lg:w-full text-center">
              <p className="font-urbanist-semibold text-2xl">
                10k+
              </p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Properties For Clients
              </p>
            </div>

            <div className="border border-[#262626] bg-[#191919] p-[13px] max-lg:p-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-24 w-[157px] rounded-lg max-lg:w-full text-center max-lg:col-span-2">
              <p className="font-urbanist-semibold text-2xl">
                16+
              </p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end max-lg:justify-center w-auto max-lg:h-[320px] max-lg:border max-lg:border-[#262626] max-lg:rounded-xl">
          <Image
            className="w-[580px] h-full object-cover max-lg:w-full max-lg:h-[319px] max-lg:rounded-xl"
            src="/houseonhand.svg"
            alt="banner"
            width={580}
            height={400}
            priority
          />
        </div>
      </div>

      <div>
        <Value />
      </div>

      <div>
        <Achievements />
      </div>

      <div>
        <EstateinExperience />
      </div>

      <div>
        <EstateinTeam />
      </div>

      <div>
        <ValuedClients />
      </div>
    </div>
  );
}
