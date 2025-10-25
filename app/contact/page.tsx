"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Card from "@/components/OfferCard";
import ThreeStars from "@/components/ThreeStars";
import InputValidation from "@/components/InputValidation";
import DropdownValidation from "@/components/DropdownValidation";
import OfficeCard from "@/components/OfficeCard";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2;

  // --- Data (expand as needed) ---
  const officeCards = useMemo(
    () => [
      {
        category: "All",
        location: "Main Headquarters",
        address: "123 Estatein Plaza, City Center, Metropolis",
        subtext:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      },
      {
        category: "Regional",
        location: "Regional Offices",
        address: "456 Urban Avenue, Downtown District, Metropolis",
        subtext:
          "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      },
      {
        category: "International",
        location: "International Branch",
        address: "789 Global Way, Capital City, Abroad",
        subtext:
          "Our international branch represents Estatein’s global outreach, connecting clients from all over the world with our innovative real estate solutions.",
      },
      {
        category: "Regional",
        location: "Suburban Office",
        address: "12 Meadow Lane, Uptown Area, Metropolis",
        subtext:
          "This regional office serves suburban clients, offering tailored real estate solutions in fast-growing neighborhoods.",
      },
      // add more cards if needed
    ],
    []
  );

  // --- Filter by tab ---
  const filteredOffices = useMemo(
    () =>
      activeTab === "All"
        ? officeCards
        : officeCards.filter((c) => c.category === activeTab),
    [activeTab, officeCards]
  );

  const totalCards = filteredOffices.length;
  const totalPages = Math.max(1, Math.ceil(totalCards / cardsPerPage));
  const currentPage = Math.floor(startIndex / cardsPerPage) + 1;

  // --- Navigation handlers ---
  const handleNext = () => {
    if (startIndex + cardsPerPage < totalCards) {
      setStartIndex((s) => s + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((s) => Math.max(0, s - cardsPerPage));
    }
  };

  // When switching tabs reset pagination to first page
  const handleSetTab = (tab: TabType) => {
    setActiveTab(tab);
    setStartIndex(0);
  };
  // Animate indicator position by index of tab
  const tabs = ["All", "Regional", "International"] as const;
  type TabType = (typeof tabs)[number];

  const activeTabIndex = tabs.indexOf(activeTab);

  return (
    <>
      {/* Header Section */}
      <div
        className="font-urbanist relative px-[65px] py-[95px]"
        style={{
          background:
            "linear-gradient(90deg, #1D1D1D 0%, #1B1B1B 3%, transparent 40%)",
        }}
      >
        <p className="font-urbanist-semibold text-[38px]">
          Get in Touch with Estatein
        </p>
        <p className="text-[#999999] mt-[10px] text-[14px]">
          Welcome to Estatein's Contact Us page. We're here to assist you with
          any inquiries, requests, or feedback you may have. Whether you're
          looking to buy or sell a property, explore investment opportunities,
          or simply want to connect, we're just a message away. Reach out to us,
          and let's start a conversation.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="p-2 bg-[#191919] mb-[80px]">
        <div className="flex gap-3 justify-center p-4 bg-[#141414] border border-[#262626]">
          <Card img="/mail.svg" text="sholanke49@gmail.com" />
          <Card img="/purplephone.svg" text="+234 8136170619" />
          <Card img="/location.svg" text="Main Headquarters" />
          <Card img="/flower.svg" text="Instagram LinkedIn Facebook" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mx-[65px] mb-[80px] font-urbanist">
        <ThreeStars />

        <div className="mt-[14px] ml-4 tracking-wide">
          <p className="text-4xl font-urbanist-semibold text-white">
            Let's Connect
          </p>

          <p className="text-[#999999] text-[13px] mr-auto mt-4">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with Estatein.
            Whether you're a prospective client, partner, or simply curious
            about our services, we're here to answer your questions and provide
            the assistance you need.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-8 border border-[#262626] rounded-lg p-[60px] ml-4 mt-12">
          <div className="flex gap-[30px]">
            <InputValidation
              title="First Name"
              placeholder="Enter First Name"
              required
              minLength={2}
            />
            <InputValidation
              title="Last Name"
              placeholder="Enter Last Name"
              required
              minLength={2}
            />
            <InputValidation
              title="Email"
              placeholder="Enter your Email"
              required
              pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              errorMessage="Please enter a valid email address."
            />
          </div>

          <div className="flex gap-[30px] mt-[20px]">
            <InputValidation
              title="Phone"
              placeholder="Enter Phone Number"
              required
            />
            <DropdownValidation
              title="Inquiry Type"
              options={["Apartment", "House", "Duplex", "Studio", "Penthouse"]}
              placeholder="Select Inquiry Type"
            />
            <DropdownValidation
              title="How Did You Hear About Us?"
              options={[
                "A friend",
                "Twitter",
                "LinkedIn",
                "Facebook",
                "Instagram",
              ]}
              placeholder="Select"
            />
          </div>

          <div className="gap-[30px] w-full mt-[20px] items-start">
            <p>Message</p>
            <textarea
              placeholder="Enter your Message here.."
              className="border border-[#262626] rounded-md bg-[#191919] w-full h-[150px] cursor-pointer placeholder:text-[#666666] px-[20px] py-[16px] mt-[16px] text-white align-top focus:outline-none focus:border-[#703BF7] resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] border border-[#262626] rounded-sm bg-[#191919] checked:border-[#703BF7] checked:before:content-['✓'] checked:before:text-[#703BF7] checked:before:flex checked:before:items-center checked:before:justify-center cursor-pointer"
              />
              <p className="text-[#999999] text-[14px]">
                I agree with{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            <button className="bg-[#703BF7] px-[25px] py-[14px] rounded-lg text-[15px] cursor-pointer">
              Send Your Message
            </button>
          </div>
        </div>
      </div>

      {/* Office Locations Section */}
      <div className="mx-[65px] mb-[80px] font-urbanist">
        <ThreeStars />

        <div className="mt-[14px] ml-4 tracking-wide">
          <p className="text-4xl font-urbanist-semibold text-white">
            Discover Our Office Locations
          </p>

          <p className="text-[#999999] text-[13px] mr-auto mt-4">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the
            Estatein office nearest to you.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative ml-4 mt-12">
          <div className="w-auto inline-flex bg-[#191919] p-3 text-white gap-[10px] rounded-lg tracking-wide border border-[#262626]">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => handleSetTab(tab)}
                className={`relative px-7 py-3 rounded-lg border border-[#262626] cursor-pointer transition-colors duration-200 focus:outline-none ${
                  activeTab === tab
                    ? "bg-[#141414] text-white border border-[#262626]"
                    : "bg-[#191919] text-[#999999] hover:bg-[#141414]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="absolute left-0 top-full mt-2 w-full pointer-events-none">
            <div className="relative">
              <motion.div
                layout
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="absolute h-0.5 bg-[#703BF7] rounded"
                style={{
                  left: `${activeTabIndex * 33.3333}%`,
                  width: `33.3333%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="ml-4 mt-[45px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${startIndex}`} 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex gap-5"
            >
              {filteredOffices
                .slice(startIndex, startIndex + cardsPerPage)
                .map((office, idx) => (
                  <div
                    key={idx}
                    className="w-[48%] h-[350px] flex-shrink-0 flex flex-col"
                  >
                    <div className="flex-grow flex">
                      <OfficeCard {...office} />
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between w-full gap-2 mt-6 items-center">
            {/* Counter: current page of total pages */}
            <p className="text-white text-sm -mt-3">
              <span
                className={currentPage === 1 ? "opacity-40" : "opacity-100"}
              >
                {String(currentPage).padStart(2, "0")}
              </span>{" "}
              of{" "}
              <span className={totalPages === 1 ? "opacity-40" : "opacity-100"}>
                {String(totalPages).padStart(2, "0")}
              </span>
            </p>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="py-[12px] px-[11px] bg-[#191919] border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[15.7px] rounded-full"
                  src="/previous.svg"
                  alt="previous"
                  width={30}
                  height={20}
                  priority
                />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= totalCards}
                className="p-[8px] bg-[#191919] border border-[#262626] rounded-4xl text-white cursor-pointer disabled:opacity-40"
              >
                <Image
                  className="w-[21px] rounded-full"
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
    </>
  );
}
