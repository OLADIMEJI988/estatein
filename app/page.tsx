import Image from "next/image";
import Card from "@/components/OfferCard";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <div className="font-urbanist flex items-stretch justify-between">
        <div className="bg-[#141414] w-[54vw] flex flex-col justify-center items-center">
          <div className="w-[570px]">
            <div className="text-5xl font-urbanist-semibold leading-15 mb-5">
              <p>Discover Your Dream</p>
              <p>Property with Estatein</p>
            </div>
            <p className="text-[#999999] text-sm">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex my-9 gap-4">
              <button className="bg-[#141414] border border-[#262626] px-[14px] py-[14px] rounded-lg">
                Learn More
              </button>
              <button className="px-[14px] py-[15px] bg-[#703BF7] rounded-lg">
                Browse Properties
              </button>
            </div>
            <div className="flex gap-3">
              <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl">200+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Happy Customers
                </p>
              </div>
              <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl">10k+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Properties For Clients
                </p>
              </div>
              <div className="border border-[#262626] bg-[#191919] p-[13px] w-[157px] rounded-lg">
                <p className="font-urbanist-semibold text-2xl">16+</p>
                <p className="text-[#999999] text-[12px] mt-[6px]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[46vw]">
          <Image
            className="w-full h-full object-cover"
            src="/mainimg.svg"
            alt="banner"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      <div className="p-2 bg-[#191919]">
        <div className="flex gap-3 justify-center p-4 bg-[#141414] border border-[#262626]">
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
