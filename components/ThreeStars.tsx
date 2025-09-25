"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ThreeStars() {
  return (
    <div className="flex">
      {[0, 1, 2].map((idx) => {
        const initialScales = [1, 0.7, 0.5];
        const initialOpacities = [1, 0.6, 0.3];

        return (
          <motion.svg
            key={idx}
            width="29"
            height="18"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              scale: [initialScales[idx], 1.5, initialScales[idx]],
              opacity: [initialOpacities[idx], 1, initialOpacities[idx]],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5,
            }}
          >
            <g clipPath="url(#clip0_75_958)">
              <path
                d="M15 30.0165C23.2843 30.0165 30 23.3008 30 15.0165C30 6.73225 23.2843 0.0166016 15 0.0166016C6.71573 0.0166016 0 6.73225 0 15.0165C0 23.3008 6.71573 30.0165 15 30.0165Z"
                fill="#666666"
              />
              <path
                d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z"
                fill="#141414"
              />
              <path
                d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                fill="#141414"
              />
              <path
                d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z"
                fill="#141414"
              />
              <path
                d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z"
                fill="#141414"
              />
            </g>
            <defs>
              <clipPath id="clip0_75_958">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
        );
      })}
    </div>
  );
}
