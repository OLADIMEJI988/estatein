"use client";

import { motion, AnimatePresence } from "framer-motion";
import ThreeStars from "./ThreeStars";

export default function Achievements() {
  return (
    <div className="mt-[120px]">
      <div className="items-start mr-auto">
        <ThreeStars />
        
        <div className=" mt-[16px] ml-5 tracking-wide">
          <p className="text-[38px] font-urbanist-semibold">Our Achievements</p>
          <p className="mt-[10px] text-[#999999] text-[15px] pr-[50px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
      </div>
    </div>
  );
}
