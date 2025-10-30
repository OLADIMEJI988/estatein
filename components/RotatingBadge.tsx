"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RotatingBadge() {
  const controller = useAnimation();

  useEffect(() => {
    controller.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 15, ease: "linear" },
    });
  }, [controller]);

  return (
    <div className="absolute flex items-center justify-center mobile:max-xxm:translate-y-[270px] xxm:max-lg:translate-y-[310px] mobile:max-lg:translate-x-3 lg:top-0 lg:mt-[95px] left-0 lg:left-1/2 size-[120px] rounded-full border border-[#262626] bg-[#141414] lg:-translate-x-1/2">
      <motion.svg
        animate={controller}
        viewBox="0 0 100 100"
        className="size-[100px] absolute"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
        />
        <text
          letterSpacing="3"
          fontSize="11"
          fontWeight="500"
          fill="white"
        >
          <textPath href="#circlePath" startOffset="0%">
            ✨ Discover your dream property ✨ Discover your dream property
          </textPath>
        </text>
      </motion.svg>

      <div className="size-[55px] flex items-center justify-center absolute bg-[#191919] rounded-full border border-[#333]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
