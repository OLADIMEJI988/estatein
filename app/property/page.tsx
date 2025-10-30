"use client";

import Dropdown from "@/components/Dropdown";
import ThreeStars from "@/components/ThreeStars";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < properties.length) {
      setDirection(1);
      setStartIndex((prev) => prev + cardsPerPage); 
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
    }
  };

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  const totalCards = properties.length;
  const currentCount = Math.min(startIndex + cardsPerPage, totalCards);

  return (
    <>
      <div
        className="font-urbanist relative mb-[170px] mt-[12px] lg:mt-[30px] max-lg:mb-0 border-b border-[#262626] px-[65px] max-lg:px-[12px] py-[100px] max-lg:pt-[40px] max-lg:pb-[50px]"
        style={{
          background:
            "linear-gradient(90deg, #1D1D1D 0%, #1B1B1B 3%, transparent 40%)",
        }}
      >
        <p className="font-urbanist-semibold text-[38px] max-lg:text-[35px]">
          Find Your Dream Property
        </p>
        <p className="text-[#999999] mt-[10px] text-[14px] max-lg:text-[15px]">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>

        <div className="flex justify-center relative">
          <div className="p-[9px] max-lg:p-1 bg-[#191919] rounded-t-2xl max-lg:rounded-2xl absolute translate-y-[50px] max-lg:translate-y-[65px] w-[1000px] max-lg:w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search For A Property"
                className="bg-[#141414] border placeholder:text-[#666666] text-[#999999] border-[#262626] w-full rounded-t-xl max-lg:rounded-xl tracking-wide px-[20px] py-[23px] max-lg:py-[20px] pr-[140px] cursor-pointer focus:outline-none focus:border-[#703BF7]"
              />
              <button className="absolute right-[12px] top-1/2 -translate-y-1/2 bg-[#703BF7] py-[13px] px-[15px] flex max-lg:justify-center items-center rounded-lg cursor-pointer">
                <Image
                  className="h-[20px] w-[20px] mr-[6px] max-lg:mr-0"
                  src="/whitesearchicon.svg"
                  alt=""
                  width={20}
                  height={20}
                  priority
                />
                <p className="text-[14px] tracking-wide max-lg:hidden">
                  Find Property
                </p>
              </button>
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="p-[9px] max-lg:p-[16px] max-lg:mt-6 bg-[#191919] flex max-lg:flex-col max-lg:w-full rounded-xl z-50 absolute translate-y-[130px] gap-[18px] max-lg:gap-4">
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

      <div className="mx-[60px] max-lg:mx-[12px] max-lg:mt-[555px] font-urbanist overflow-hidden mb-[120px] max-lg:mb-[100px] max-lg:w-full">
        <div className="items-start mr-auto">
          <ThreeStars />
          <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
            <p className="text-[38px] max-lg:text-[35px] font-urbanist-semibold">
              Discover a World of Possibilities
            </p>
            <p className="mt-[10px] text-[#999999] text-[14px] max-lg:text-[15px] pr-[130px] max-lg:pr-[12px]">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>

          {/* Cards */}
          <div className="flex gap-5 justify-center mx-[60px] max-lg:mx-0 max-lg:mr-[22px] mt-12 mb-[34px] relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              {properties
                .slice(startIndex, startIndex + cardsPerPage)
                .map((property, idx) => (
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
                      delay: idx * 0.05,
                    }}
                  >
                    <AvailableProperty {...property} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="h-[1px] bg-[#262626] w-full max-lg:w-[95%] -mt-2 lg:-mt-1"></div>

          {/* Navigation */}
          <div className="flex justify-between w-full gap-2 mt-[14px] items-center">
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
            <div className="flex gap-2 max-lg:gap-3 max-lg:mr-[20px]">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="py-[12px] px-[11px] rounded-full bg-[#191919] border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[15.7px] max-lg:w-[17px]"
                  src="/previous.svg"
                  alt="banner"
                  width={30}
                  height={20}
                  priority
                />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= totalCards}
                className="p-[8px] bg-[#191919] rounded-full border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[21px] max-lg:w-[23px]"
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
