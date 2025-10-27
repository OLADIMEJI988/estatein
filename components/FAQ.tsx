"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaqCard from "./FaqCard";
import ThreeStars from "./ThreeStars";

export default function FAQ() {
  const faq = [
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
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 1024) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < faq.length) {
      setDirection(1);
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setDirection(-1);
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const totalCards = faq.length;
  const currentCount = Math.min(startIndex + cardsPerPage, totalCards);

  return (
    <div className="w-full my-[60px] font-urbanist flex justify-center px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-[1280px]">
        <ThreeStars />

        <div className="mt-[14px] lg:ml-4 max-lg:min-w-[500px]">
          <p className="text-4xl font-semibold text-white max-lg:ml-4">
            Frequently Asked Questions
          </p>

          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-4 gap-4 max-lg:ml-4">
            <p className="text-[#999999] text-base lg:text-[13px] leading-relaxed lg:mr-auto max-w-3xl">
              Find answers to common questions about Estatein&apos;s services,
              property listings, and the real estate process. We&apos;re here to
              provide clarity and assist you every step of the way.
            </p>

            <button className="bg-[#191919] cursor-pointer text-sm max-lg:text-[16px] max-lg:mt-3 border border-[#262626] px-6 py-3 max-lg:py-4 rounded-lg hover:bg-[#1e1e1e] transition">
              View All FAQ’s
            </button>
          </div>

          {/* Cards */}
          <div className="flex overflow-hidden flex-wrap justify-center sm:justify-start gap-7 mt-12 relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              {faq
                .slice(startIndex, startIndex + cardsPerPage)
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
                      className="w-full sm:w-[90%] md:w-[70%] lg:w-[31%]"
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

          {/* Divider */}
          <div className="h-[1px] -mt-10 max-lg:-mt-6 bg-[#262626] w-full"></div>

          {/* Navigation */}
          <div className="flex justify-between w-full gap-4 mt-[14px] items-center">
            <p className="text-white text-sm max-lg:text-base">
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

            <div className="flex gap-2 max-lg:gap-3">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="p-[15px] bg-[#191919] border border-[#262626] rounded-full text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[15px] max-lg:w-[17px]"
                  src="/previous.svg"
                  alt="previous"
                  width={30}
                  height={20}
                  priority
                />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= faq.length}
                className="p-3 bg-[#191919] border border-[#262626] rounded-full text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[21px] max-lg:w-[23px]"
                  src="/next.svg"
                  alt="next"
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
