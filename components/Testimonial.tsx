"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const properties = [
    {
      img: "/5star.svg",
      title: "Exceptional Service!",
      subtext:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      profileimg: "/wade.svg",
      country: "USA, California",
    },
    {
      img: "/5star.svg",
      title: "Efficient and Reliable",
      subtext:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      profileimg: "/emelie.svg",
      country: "USA, Florida",
    },
    {
      img: "/5star.svg",
      title: "Trusted Advisors",
      subtext:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      profileimg: "/john.svg",
      country: "USA, Nevada",
    },
    {
      img: "/5star.svg",
      title: "Trusted Advisors",
      subtext:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      profileimg: "/john.svg",
      country: "USA, Nevada",
    },
    {
      img: "/5star.svg",
      title: "Exceptional Service!",
      subtext:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      profileimg: "/wade.svg",
      country: "USA, California",
    },
    {
      img: "/5star.svg",
      title: "Efficient and Reliable",
      subtext:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      profileimg: "/emelie.svg",
      country: "USA, Florida",
    },
    {
      img: "/5star.svg",
      title: "Efficient and Reliable",
      subtext:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      profileimg: "/emelie.svg",
      country: "USA, Florida",
    },
    {
      img: "/5star.svg",
      title: "Trusted Advisors",
      subtext:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      profileimg: "/john.svg",
      country: "USA, Nevada",
    },
    {
      img: "/5star.svg",
      title: "Exceptional Service!",
      subtext:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      profileimg: "/wade.svg",
      country: "USA, California",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < properties.length) {
      setDirection(1);
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setDirection(-1);
      setStartIndex(startIndex - 3);
    }
  };

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const totalCards = properties.length;
  const cardsPerPage = 3;
  const currentCount = Math.min(startIndex + cardsPerPage, totalCards);

  return (
    <div className="overflow-hidden my-16 font-urbanist flex justify-center mx-auto items-center">
      <div className="items-start">
        <div className="flex mt-2">
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

        <div className="ml-5 mt-[19px] tracking-wide">
          <p className="text-4xl font-urbanist-semibold text-white">
            What Our Clients Say
          </p>
          <div className="flex items-center mt-3">
            <p className="text-[#999999] text-[13px] mr-auto w-[900px]">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>

            <button className="bg-[#191919] -mt-8 cursor-pointer text-sm border border-[#262626] px-[17px] py-[15px] rounded-lg">
              View All Testimonials
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-5 justify-center mt-14 mb-[33px] relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              {properties
                .slice(startIndex, startIndex + 3)
                .map((property, idx) => {
                  const exitDelay = idx * 0.05;
                  return (
                    <motion.div
                      key={property.title + idx + startIndex}
                      custom={direction}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: exitDelay,
                      }}
                    >
                      <TestimonialCard
                        img={property.img}
                        title={property.title}
                        subtext={property.subtext}
                        name={property.name}
                        country={property.country}
                        profileimg={property.profileimg}
                      />
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>

          <div className="h-[1px] bg-[#262626] w-full"></div>

          {/* Navigation */}
          <div className="flex justify-between w-full gap-2 mt-[14px] items-center">
            {/* Counter */}
            <p className="text-white text-sm -mt-3">
              <span className={startIndex === 0 ? "opacity-40" : "opacity-100"}>
                {currentCount.toString().padStart(2, "0")}
              </span>{" "}
              of{" "}
              <span
                className={
                  startIndex + cardsPerPage >= totalCards
                    ? "opacity-40"
                    : "opacity-100"
                }
              >
                {totalCards.toString().padStart(2, "0")}
              </span>
            </p>

            {/* Navigations */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="py-[12px] px-[11px] bg-[#191919] border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[15.7px] rounded-full"
                  src="/previous.svg"
                  alt="banner"
                  width={30}
                  height={20}
                  priority
                />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= properties.length}
                className="p-[8px] bg-[#191919] border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[21px] rounded-full"
                  src="/next.svg"
                  alt="banner"
                  width={30}
                  height={20}
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
