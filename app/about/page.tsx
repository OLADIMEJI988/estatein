"use client"

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Value from "@/components/Value";
import Achievements from "@/components/Achievements";
import ThreeStars from "@/components/ThreeStars";
import EstateinExperience from "@/components/EstateinExperience";
import EstateinTeam from "@/components/EstateinTeam";

export default function About() {
  return (
    <div className="font-urbanist mt-[70px] mb-[120px] max-w-[1200px] mx-auto px-4 overflow-hidden">

      <div className="flex items-center gap-[40px]">
        <div className="items-start mr-auto">
          <ThreeStars />

          <div className=" mt-[16px] ml-5 tracking-wide">
            <p className="text-[38px] font-urbanist-semibold">Our Journey</p>
            <p className="mt-[10px] text-[#999999] text-[15px] w-[550px]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>

          <div className="flex gap-[17px] ml-5 mt-[55px]">
            <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
              <p className="font-urbanist-semibold text-2xl">200+</p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Happy Customers
              </p>
            </div>
            <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
              <p className="font-urbanist-semibold text-2xl">10k+</p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Properties For Clients
              </p>
            </div>
            <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
              <p className="font-urbanist-semibold text-2xl">16+</p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            className="w-[580px] h-full object-cover"
            src="/houseonhand.svg"
            alt="banner"
            width={300}
            height={200}
            priority
          />
        </div>
      </div>

      <Value />

      <Achievements />

      <EstateinExperience />

      <EstateinTeam />

    </div>
  );
}
