"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ThreeStars from "./ThreeStars";
import Client from "./Client";

export default function ValuedClients() {
  const clients = [
    {
      year: "2019",
      corpname: "ABC Corporation",
      category: "Luxury Home Development",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      year: "2018",
      corpname: "GreenTech Enterprises",
      category: "Retail Space",
      feedback:
        "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      year: "2020",
      corpname: "Skyline Developers",
      category: "Commercial Office",
      feedback:
        "Working with Estatein streamlined our search for premium office spaces. Their market insights saved us valuable time and resources.",
    },
    {
      year: "2021",
      corpname: "UrbanNest Properties",
      category: "Residential Complex",
      feedback:
        "Estatein’s expertise in residential planning gave us confidence. Their recommendations aligned perfectly with our long-term vision.",
    },
    {
      year: "2019",
      corpname: "Harbor Logistics",
      category: "Industrial Warehouse",
      feedback:
        "From site selection to final acquisition, Estatein provided unmatched guidance. They played a vital role in expanding our logistics network.",
    },
    {
      year: "2022",
      corpname: "BlueWave Hospitality",
      category: "Hotel & Leisure",
      feedback:
        "Estatein’s deep understanding of hospitality real estate allowed us to secure a location that boosted our occupancy rates significantly.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < clients.length) {
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
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const totalCards = clients.length;
  const currentCount = Math.min(startIndex + cardsPerPage, totalCards);

  return (
    <div className="mt-[100px]">
      <div className="items-start mr-auto">
        <ThreeStars />

        <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
          <p className="text-[38px] max-lg:text-[35px] font-urbanist-semibold">
            Our Valued Clients
          </p>
          <p className="mt-[10px] text-[#999999] text-[15px] pr-[130px] max-lg:pr-0">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we&apos;ve had the pleasure of serving
          </p>
        </div>

        <div>
          {/* Cards */}
          <div className="flex gap-5 justify-center mt-12 mb-[32.5px] relative flex-wrap">
            <AnimatePresence mode="wait" custom={direction}>
              {clients.slice(startIndex, startIndex + cardsPerPage).map((client, idx) => {
                const exitDelay = idx * 0.05;
                return (
                  <motion.div
                    key={client.corpname + idx + startIndex}
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
                    <Client
                      year={client.year}
                      corpname={client.corpname}
                      category={client.category}
                      feedback={client.feedback}
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
            <p className="text-white text-sm max-lg:text-base -mt-3">
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

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="py-[12px] px-[11px] bg-[#191919] rounded-full border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[15.7px] max-lg:w-[17px]"
                  src="/previous.svg"
                  alt="prev"
                  width={30}
                  height={20}
                  priority
                />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= clients.length}
                className="p-[8px] bg-[#191919] border border-[#262626] rounded-4xl rounded-full text-white cursor-pointer disabled:opacity-40"
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
