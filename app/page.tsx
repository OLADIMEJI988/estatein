"use client";

import Image from "next/image";
import Card from "@/components/OfferCard";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import RotatingBadge from "@/components/RotatingBadge";

export default function Home() {
  return (
    <>
      <div className="font-urbanist flex lg:items-stretch justify-between w-full mt-[30px] relative">
        <div className="bg-[#141414] lg:w-[54vw] flex flex-col justify-center items-center lg:text-start">
          <div className="lg:hidden w-full my-5 px-5 mobile:max-lg:px-[12px] flex justify-center">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src="/mainimg.svg"
              alt="banner"
              width={800}
              height={600}
              priority
            />
          </div>

          <div className="lg:w-[570px] w-full max-w-[100vw] mobile:max-xxm:mt-[60px] xxm:max-lg:mt-[50px] px-5 mobile:max-lg:px-[12px] mobile:max-lg:relative mobile:max-lg:left-1/2 mobile:max-lg:-translate-x-1/2 mobile:max-lg:w-[100vw] box-border min-w-0 w-100% mobile:max-lg:tracking-wide">
            <div className="text-5xl mobile:max-lg:text-[33px] font-urbanist-semibold mb-5">
              <p>Discover Your Dream</p>
              <p className="mt-[10px]">Property with Estatein</p>
            </div>

            <p className="text-[#999999] text-sm mobile:max-lg:text-[15px] mobile:max-lg:-tracking-normal mobile:max-lg:leading-6">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            <div className="flex mobile:max-lg:flex-col mobile:max-lg:justify-center my-9 mobile:max-lg:my-10 gap-4 mobile:max-lg:gap-5">
              <button className="bg-[#141414] border border-[#262626] px-[14px] py-[14px] mobile:max-lg:py-3 rounded-lg w-full max-sm:max-w-[540px] mobile:max-lg:text-[16px] mobile:max-lg:h-14">
                Learn More
              </button>
              <button className="px-[14px] py-[15px] mobile:max-lg:py-3 bg-[#703BF7] rounded-lg w-full max-sm:max-w-[540px] mobile:max-lg:text-[16px] mobile:max-lg:h-14">
                Browse Properties
              </button>
            </div>

            <div className="flex mobile:max-lg:grid mobile:max-lg:grid-cols-2 gap-3 w-full">
              <div className="w-full mobile:max-lg:h-24 mobile:max-lg:p-0 mobile:max-lg:flex mobile:max-lg:flex-col mobile:max-lg:justify-center mobile:max-lg:items-center border border-[#262626] bg-[#191919] p-[13px] rounded-lg text-center lg:text-start">
                <p className="font-urbanist-semibold text-2xl">200+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Happy Customers
                </p>
              </div>

              <div className="w-full mobile:max-lg:h-24 mobile:max-lg:p-0 mobile:max-lg:flex mobile:max-lg:flex-col mobile:max-lg:justify-center mobile:max-lg:items-center border border-[#262626] bg-[#191919] p-[13px] rounded-lg text-center lg:text-start">
                <p className="font-urbanist-semibold text-2xl">10k+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Properties For Clients
                </p>
              </div>

              <div className="hidden lg:flex lg:flex-col w-full border border-[#262626] bg-[#191919] p-[13px] rounded-lg text-center lg:text-start">
                <p className="font-urbanist-semibold text-2xl">16+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Years of Experience
                </p>
              </div>
            </div>

            <div className="lg:hidden w-full mt-3 h-24 flex flex-col justify-center items-center border border-[#262626] bg-[#191919] text-center rounded-lg">
              <p className="font-urbanist-semibold text-2xl">16+</p>
              <p className="text-[#999999] text-[12px] mt-[6px]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="translate-x-1 mobile:max-lg:hidden">
          <RotatingBadge />
        </div>

       <div className="lg:hidden">
          <RotatingBadge />
        </div>


        <div className="w-[46vw]">
          <Image
            className="hidden lg:flex w-full h-full object-cover"
            src="/mainimg.svg"
            alt="banner"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      <div className="p-2 mobile:max-lg:p-1 bg-[#191919] min-w-0 mobile:max-lg:mx-[12px] mobile:max-lg:mt-10">
        <div className="flex mobile:max-lg:grid mobile:max-lg:grid-cols-2 mobile:max-lg:text-center gap-4 mobile:max-lg:gap-3 justify-center p-4 mobile:max-lg:p-[12px] bg-[#141414] border border-[#262626]">
          <Card img="/home.svg" text="Find Your Dream Home" />
          <Card img="/camera.svg" text="Unlock Property Value" />
          <Card img="/property.svg" text="Effortless Property Management" />
          <Card img="/sun.svg" text="Smart Investments, Informed Decisions" />
        </div>
      </div>

      <div className="mobile:max-lg:mt-24">
        <FeaturedProperties />
      </div>

      <div className="mobile:max-lg:mt-24">
        <Testimonial />
      </div>

      <div className="mobile:max-lg:my-24">
        <FAQ />
      </div>
    </>
  );
}
