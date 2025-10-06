"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaqCard from "./FaqCard";
import ThreeStars from "./ThreeStars";

export default function FAQ() {
  const properties = [
    {
      title: "How do I search for properties on Estatein?",
      subtext:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      subtext:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      subtext:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How can I contact an Estatein agent?",
      subtext:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?",
      subtext:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      subtext:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      subtext:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      subtext:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?",
      subtext:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
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
      <div className="items-start mt-2">
        <ThreeStars />

        <div className="mt-[14px] ml-4 tracking-wide">
          <p className="text-4xl font-urbanist-semibold text-white">
            Frequently Asked Questions
          </p>
          <div className="flex items-center mt-3">
            <p className="text-[#999999] text-[13px] mr-auto w-[900px]">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>

            <button className="bg-[#191919] cursor-pointer text-sm border -translate-y-2 border-[#262626] px-[17px] py-[15px] rounded-lg">
              View All FAQ’s
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-5 justify-center mt-12 mb-[32.5px] relative">
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
                      <FaqCard
                        title={property.title}
                        subtext={property.subtext}
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
