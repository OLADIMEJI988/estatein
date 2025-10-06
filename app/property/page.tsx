"use client";

import Dropdown from "@/components/Dropdown";
import ThreeStars from "@/components/ThreeStars";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AvailableProperty from "@/components/AvailableProperty";
import ReachOut from "@/components/ReachOut";

export default function Property() {
  const dropdown = [
    {
      img: "/droploc.svg",
      title: "Location",
      options: ["New York", "London", "Lagos", "Dubai", "Tokyo"],
    },
    {
      img: "/dropproperty.svg",
      title: "Property Type",
      options: ["Apartment", "House", "Villa", "Townhouse", "Penthouse"],
    },
    {
      img: "/dropcamera.svg",
      title: "Pricing Range",
      options: [
        "$50k - $100k",
        "$100k - $250k",
        "$250k - $500k",
        "$500k - $1M",
        "Above $1M",
      ],
    },
    {
      img: "/dropcube.svg",
      title: "Property Size",
      options: [
        "500 - 1000 sqft",
        "1000 - 2000 sqft",
        "2000 - 3500 sqft",
        "3500 - 5000 sqft",
        "5000+ sqft",
      ],
    },
    {
      img: "/dropcalender.svg",
      title: "Build Year",
      options: [
        "Before 2000",
        "2000 - 2010",
        "2011 - 2015",
        "2016 - 2020",
        "2021+",
      ],
    },
  ];

  const properties = [
    {
      img: "/seaside.svg",
      title: "Seaside Serenity Villa",
      subtext:
        "Wake up to the soothing melody of waves. This beachfront villa offers... ",
      moretext: "Read More",
      price: "$1,250,000",
      location: "Coastal Escapes",
      destination: "Where Waves Beckon",
    },
    {
      img: "/metropolitan.svg",
      title: "Metropolitan Haven",
      subtext:
        "Immerse yourself in the energy of the city. This modern apartment in the heart... ",
      moretext: "Read More",
      price: "$650,000",
      location: "Urban Oasis",
      destination: "Life in the Heart of the City",
    },
    {
      img: "/retreat.svg",
      title: "Rustic Retreat Cottage",
      subtext:
        "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... ",
      moretext: "Read More",
      price: "$350,000",
      location: "Countryside Charm",
      destination: "Escape to Nature's Embrace",
    },
    {
      img: "/metropolitan.svg",
      title: "Seaside Serenity Villa 2",
      subtext:
        "Immerse yourself in the energy of the city. This modern apartment in the heart...",
      moretext: "Read More",
      price: "$900,000",
      location: "Urban Oasis",
      destination: "Life in the Heart of the City",
    },
    {
      img: "/retreat.svg",
      title: "Metropolitan Haven 2",
      subtext:
        "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
      moretext: "Read More",
      price: "$700,000",
      location: "Countryside Charm",
      destination: "Escape to Nature's Embrace",
    },
    {
      img: "/seaside.svg",
      title: "Rustic Retreat Cottage 2",
      subtext:
        "Wake up to the soothing melody of waves. This beachfront villa offers...",
      moretext: "Read More",
      price: "$550,000",
      location: "Coastal Escapes",
      destination: "Where Waves Beckon",
    },
    {
      img: "/retreat.svg",
      title: "Seaside Serenity Villa 3",
      subtext:
        "Experience oceanfront luxury with breathtaking sunrise views...",
      moretext: "Read More",
      price: "$1,250,000",
      location: "Countryside Charm",
      destination: "Escape to Nature's Embrace",
    },
    {
      img: "/seaside.svg",
      title: "Metropolitan Haven 3",
      subtext:
        "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
      moretext: "Read More",
      price: "$1,000,000",
      location: "Coastal Escapes",
      destination: "Where Waves Beckon",
    },
    {
      img: "/metropolitan.svg",
      title: "Rustic Retreat Cottage 3",
      subtext:
        "Wake up to the soothing melody of waves. This beachfront villa offers...",
      moretext: "Read More",
      price: "$450,000",
      location: "Urban Oasis",
      destination: "Life in the Heart of the City",
      
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

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
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  const totalCards = properties.length;
  const cardsPerPage = 3;
  const currentCount = Math.min(startIndex + cardsPerPage, totalCards);

  return (
    <>
      <div
        className="font-urbanist relative mb-[165px] border-b border-[#262626] px-[65px] py-[100px]"
        style={{
          background:
            "linear-gradient(90deg, #1D1D1D 0%, #1B1B1B 3%, transparent 40%)",
        }}
      >
        <p className="font-urbanist-semibold text-[38px]">
          Find Your Dream Property
        </p>
        <p className="text-[#999999] mt-[10px] text-[14px]">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>

        <div className="flex justify-center relative">
          <div className="p-[9px] bg-[#191919] rounded-t-2xl absolute translate-y-[50px] w-[1000px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search For A Property"
                className="bg-[#141414] border placeholder:text-[#666666] text-[#999999] border-[#262626] w-full rounded-t-xl tracking-wide px-[20px] py-[23px] pr-[140px] cursor-pointer focus:outline-none focus:border-[#703BF7]"
              />
              <button className="absolute right-[12px] top-1/2 -translate-y-1/2 bg-[#703BF7] py-[13px] px-[15px] flex items-center rounded-lg cursor-pointer">
                <Image
                  className="h-[20px] w-[20px] mr-[6px]"
                  src="/whitesearchicon.svg"
                  alt=""
                  width={20}
                  height={20}
                  priority
                />
                <p className="text-[14px] tracking-wide">Find Property</p>
              </button>
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="p-[9px] bg-[#191919] flex rounded-xl z-50 absolute translate-y-[130px] gap-[18px]">
            {dropdown.map((item, index) => (
              <Dropdown
                key={index}
                img={item.img}
                title={item.title}
                options={item.options}
                isOpen={activeDropdown === index}
                onToggle={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-[60px] font-urbanist overflow-hidden mb-[120px]">
        <div className="items-start mr-auto">
          <ThreeStars />
          <div className="mt-[14px] ml-4 tracking-wide">
            <p className="text-[38px] font-urbanist-semibold">
              Discover a World of Possibilities
            </p>
            <p className="mt-[10px] text-[#999999] text-[14px] pr-[130px]">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>

          {/* Cards */}
          <div className="flex gap-5 justify-center mx-[60px] mt-12 mb-[34px] relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              {properties
                .slice(startIndex, startIndex + 3)
                .map((property, idx) => (
                  <motion.div
                    key={property.title + idx + startIndex}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.05 }}
                  >
                    <AvailableProperty {...property} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="h-[1px] bg-[#262626] w-full"></div>

          {/* Navigation */}
          <div className="flex justify-between w-full gap-2 mt-[14px] items-center">
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

        <ReachOut />
      </div>
    </>
  );
}
