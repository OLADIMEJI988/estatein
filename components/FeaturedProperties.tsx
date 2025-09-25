"use client";

import Image from "next/image";
import PropertyCard from "./PropertyCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeStars from "./ThreeStars";

export default function FeaturedProperties() {
  const properties = [
    {
      img: "/seaside.svg",
      title: "Seaside Serenity Villa",
      subtext:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      moretext: "Read More",
    },
    {
      img: "/metropolitan.svg",
      title: "Metropolitan Haven",
      subtext:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      moretext: "Read More",
    },
    {
      img: "/retreat.svg",
      title: "Rustic Retreat Cottage",
      subtext:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
      moretext: "Read More",
    },
    {
      img: "/metropolitan.svg",
      title: "Seaside Serenity Villa 2",
      subtext: "Another charming villa perfect for relaxation by the ocean...",
      moretext: "Read More",
    },
    {
      img: "/retreat.svg",
      title: "Metropolitan Haven 2",
      subtext:
        "Urban living at its finest with luxurious amenities included...",
      moretext: "Read More",
    },
    {
      img: "/seaside.svg",
      title: "Rustic Retreat Cottage 2",
      subtext:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      moretext: "Read More",
    },
    {
      img: "/retreat.svg",
      title: "Seaside Serenity Villa 3",
      subtext:
        "Experience oceanfront luxury with breathtaking sunrise views...",
      moretext: "Read More",
    },
    {
      img: "/seaside.svg",
      title: "Metropolitan Haven 3",
      subtext:
        "Urban living at its finest with luxurious amenities included...",
      moretext: "Read More",
    },
    {
      img: "/metropolitan.svg",
      title: "Rustic Retreat Cottage 3",
      subtext:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      moretext: "Read More",
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
    <div className="overflow-hidden my-[54px] font-urbanist flex justify-center mx-auto items-center">
      <div className="items-start mt-2">
        <ThreeStars />

        <div className="ml-5 tracking-wide mt-[16px]">
          <p className="text-4xl font-urbanist-semibold text-white">
            Featured Properties
          </p>
          <div className="flex items-center mt-4">
            <p className="text-[#999999] text-[13px] mr-auto w-[900px]">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>

            <button className="bg-[#191919] cursor-pointer text-sm border border-[#262626] px-[17px] py-[15px] -translate-y-2 rounded-lg">
              View All Properties
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-5 justify-center mt-12 mb-[34px] relative min-h-[320px]">
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
                      <PropertyCard
                        img={property.img}
                        title={property.title}
                        subtext={property.subtext}
                        moretext={property.moretext}
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
