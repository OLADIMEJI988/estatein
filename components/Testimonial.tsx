"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import ThreeStars from "./ThreeStars";

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
      <div className="items-start mt-2">
        <ThreeStars />

        <div className="mt-[14px] ml-4 tracking-wide">
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
