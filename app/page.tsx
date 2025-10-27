import Image from "next/image";
import Card from "@/components/OfferCard";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <div className="font-urbanist flex lg:items-stretch justify-between max-lg:justify-center">
        <div className="bg-[#141414] lg:w-[54vw] lg:flex lg:flex-col justify-center items-center lg:text-start">
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

          <div className="lg:w-[570px] max-lg:px-5">
            <div className="text-5xl font-urbanist-semibold leading-15 mb-5">
              <p>Discover Your Dream</p>
              <p>Property with Estatein</p>
            </div>
            <p className="text-[#999999] text-sm max-lg:text-lg">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex max-lg:flex-col max-lg:justify-center my-9 max-lg:my-10 gap-4 max-lg:gap-5">
              <button className="bg-[#141414] border border-[#262626] px-[14px] py-[14px] max-lg:py-5 rounded-lg">
                Learn More
              </button>
              <button className="px-[14px] py-[15px] max-lg:py-5 bg-[#703BF7] rounded-lg">
                Browse Properties
              </button>
            </div>
            <div className="flex max-lg:grid max-lg:grid-cols-2 min-w-[495px] max-lg:text-center gap-3">
              <div className="max-lg:w-full max-lg:h-[110px] max-lg:p-5 border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                  200+
                </p>
                <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
                  Happy Customers
                </p>
              </div>
              <div className="max-lg:w-full max-lg:h-[110px] max-lg:p-5 border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                  10k+
                </p>
                <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
                  Properties For Clients
                </p>
              </div>
              <div className="max-lg:hidden max-lg:h-[110px] max-lg:p-5 border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl max-lg:text-3xl">
                  16+
                </p>
                <p className="text-[#999999] text-[12px] max-lg:text-[14px] mt-[6px]">
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

      <div>
        <FeaturedProperties />
      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <FAQ />
      </div>
    </>
  );
}
