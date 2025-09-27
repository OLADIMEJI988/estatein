"use client";

import { motion, AnimatePresence } from "framer-motion";
import ThreeStars from "./ThreeStars";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  return (
    <div className="mt-[100px]">
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

      <div className="flex gap-4 ml-5 mt-[50px]">
        <AchievementCard
          title="3+ Years of Excellence"
          subtext="With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
        />

        <AchievementCard
          title="Happy Clients"
          subtext="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
        />

        <AchievementCard
          title="Industry Recognition"
          subtext="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        />
      </div>
    </div>
  );
}
