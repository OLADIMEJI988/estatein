import Image from "next/image";
import Card from "@/components/OfferCard";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <div className="font-urbanist flex lg:items-stretch justify-between w-full">
        <div className="bg-[#141414] lg:w-[54vw] flex flex-col justify-center items-center lg:text-start">
          <div className="lg:hidden w-full my-5 px-5 flex justify-center">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src="/mainimg.svg"
              alt="banner"
              width={800}
              height={600}
              priority
            />
          </div>

          <div
            className="lg:w-[570px] w-full max-w-[100vw] px-5 max-lg:relative max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:w-[100vw] box-border min-w-[540px]"
          >
            <div className="text-5xl font-urbanist-semibold leading-15 mb-5">
              <p>Discover Your Dream</p>
              <p>Property with Estatein</p>
            </div>

            <p className="text-[#999999] text-sm max-lg:text-lg">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            <div className="flex max-lg:flex-col max-lg:justify-center my-9 max-lg:my-10 gap-4 max-lg:gap-5">
              <button className="bg-[#141414] border border-[#262626] px-[14px] py-[14px] max-lg:py-5 rounded-lg w-full max-sm:max-w-[540px]">
                Learn More
              </button>
              <button className="px-[14px] py-[15px] max-lg:py-5 bg-[#703BF7] rounded-lg w-full max-sm:max-w-[540px]">
                Browse Properties
              </button>
            </div>

            <div className="flex max-lg:grid max-lg:grid-cols-2 gap-3 w-full">
              <div className="w-full max-lg:h-[110px] max-lg:p-5 border border-[#262626] bg-[#191919] p-[13px] rounded-lg text-center lg:text-start">
                <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                  200+
                </p>
                <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
                  Happy Customers
                </p>
              </div>

              <div className="w-full max-lg:h-[110px] max-lg:p-5 border border-[#262626] bg-[#191919] p-[13px] rounded-lg text-center lg:text-start">
                <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                  10k+
                </p>
                <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
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

            <div className="lg:hidden w-full mt-3 h-[110px] p-5 border border-[#262626] bg-[#191919] text-center rounded-lg">
              <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                16+
              </p>
              <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
                Years of Experience
              </p>
            </div>
          </div>
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

      <div className="p-2 bg-[#191919] min-w-[496px] max-lg:mx-5 max-lg:mt-10">
        <div className="flex max-lg:grid max-lg:grid-cols-2 max-lg:text-center gap-4 justify-center p-4 bg-[#141414] border border-[#262626]">
          <Card img="/home.svg" text="Find Your Dream Home" />
          <Card img="/camera.svg" text="Unlock Property Value" />
          <Card img="/property.svg" text="Effortless Property Management" />
          <Card img="/sun.svg" text="Smart Investments, Informed Decisions" />
        </div>
      </div>

      <div className="max-lg:mt-24">
        <FeaturedProperties />
      </div>

      <div className="max-lg:mt-24">
        <Testimonial />
      </div>

      <div className="max-lg:my-24">
        <FAQ />
      </div>
    </>
  );
}
