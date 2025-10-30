"use client";

import Image from "next/image";

import Card from "@/components/OfferCard";
import ThreeStars from "@/components/ThreeStars";
import ManagementOffer from "@/components/ManagementOffer";

export default function Services() {
  return (
    <>
      <div
        className="font-urbanist relative mt-[12px] lg:mt-[30px] px-[65px] max-lg:px-[12px] py-[95px] max-lg:py-[50px] max-lg:w-full"
        style={{
          background:
            "linear-gradient(90deg, #1D1D1D 0%, #1B1B1B 3%, transparent 40%)",
        }}
      >
        <p className="font-urbanist-semibold text-[38px] max-lg:text-[35px]">
          Elevate Your Real Estate Experience
        </p>
        <p className="text-[#999999] mt-[10px] text-[14px] max-lg:text-[15px]">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </p>
      </div>

      <div className="p-2 bg-[#191919] mb-[80px]">
        <div className="flex max-lg:grid max-lg:grid-cols-2 max-lg:text-center gap-4 max-lg:gap-3 justify-center p-4 max-lg:p-3 bg-[#141414] border border-[#262626]">
          <Card img="/home.svg" text="Find Your Dream Home" />
          <Card img="/camera.svg" text="Unlock Property Value" />
          <Card img="/property.svg" text="Effortless Property Management" />
          <Card img="/sun.svg" text="Smart Investments, Informed Decisions" />
        </div>
      </div>

      <div className="mx-[65px] max-lg:mx-[12px] mb-[80px] font-urbanist">
        <ThreeStars />

        <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
          <p className="text-4xl max-lg:text-[35px] font-urbanist-semibold text-white">
            Unlock Property Value
          </p>

          <p className="text-[#999999] text-[13px] max-lg:text-[15px] mr-auto mt-4">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey
          </p>
        </div>

        <div className="mt-[50px] ml-4 max-lg:ml-0">
          <div className="flex max-lg:flex-col gap-5">
            <ManagementOffer
              img="/valuation.svg"
              title="Valuation Mastery"
              subtext="Discover the true worth of your property with our expert valuation services."
            />
            <ManagementOffer
              img="/marketing.svg"
              title="Strategic Marketing"
              subtext="Selling a property requires more than just a listing; it demands a strategic marketing approach."
            />
            <ManagementOffer
              img="/negotiation.svg"
              title="Negotiation Wizardry"
              subtext="Negotiating the best deal is an art, and our negotiation experts are masters of it."
            />
          </div>

          <div className="flex max-lg:flex-col gap-5 mt-5">
            <ManagementOffer
              img="/microphone.svg"
              title="Closing Success"
              subtext="A successful sale is not complete until the closing. We guide you through the intricate closing process."
            />

            <div className="relative border border-[#242424] w-[239%] max-lg:w-full rounded-xl overflow-hidden">
              <Image
                src="/abstract.svg"
                alt="home"
                fill
                className="object-cover max-lg:hidden"
                priority
              />

              <Image
                src="/smabstract.svg"
                alt="home"
                fill
                className="object-cover lg:hidden"
                priority
              />

              <div className="absolute inset-0 bg-[#191919]/40"></div>

              <div className="relative z-10 py-[59px] px-[50px] max-lg:px-[20px] text-white">
                <div className="flex max-lg:flex-col justify-between items-center">
                  <p className="text-[22px] max-lg:text-[30px] font-semibold">
                    Unlock the Value of Your Property Today
                  </p>

                  <button className="bg-[#141414] max-lg:w-full max-lg:mt-5 border border-[#262626] tracking-wide rounded-lg text-sm px-[14px] py-[13px] max-lg:py-[15px] cursor-pointer">
                    Learn More
                  </button>
                </div>
                <p className="text-sm max-lg:text-[15px] mt-5 text-[#999999]">
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[65px] max-lg:mx-[12px] mb-[80px] font-urbanist">
        <ThreeStars />

        <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
          <p className="text-4xl max-lg:text-[35px] font-urbanist-semibold text-white">
            Effortless Property Management
          </p>

          <p className="text-[#999999] text-[13px] max-lg:text-[15px] mr-auto mt-4">
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you
          </p>
        </div>

        <div className="mt-[50px] ml-4 max-lg:ml-0">
          <div className="flex max-lg:flex-col gap-5">
            <ManagementOffer
              img="/harmony.svg"
              title="Tenant Harmony"
              subtext="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
            />
            <ManagementOffer
              img="/ease.svg"
              title="Maintenance Ease"
              subtext="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
            />
            <ManagementOffer
              img="/peace.svg"
              title="Financial Peace of Mind"
              subtext="Managing property finances can be complex. Our financial experts take care of rent collection"
            />
          </div>

          <div className="flex max-lg:flex-col gap-5 mt-5">
            <ManagementOffer
              img="/sun.svg"
              title="Legal Guardian"
              subtext="Stay compliant with property laws and regulations effortlessly."
            />

            <div className="relative border border-[#242424] w-[239%] max-lg:w-full rounded-xl overflow-hidden">
              <Image
                src="/abstract.svg"
                alt="home"
                fill
                className="object-cover max-lg:hidden"
                priority
              />

              <Image
                src="/smabstract.svg"
                alt="home"
                fill
                className="object-cover lg:hidden"
                priority
              />

              <div className="absolute inset-0 bg-[#191919]/40"></div>

              <div className="relative z-10 py-[59px] px-[50px] max-lg:px-[20px] text-white">
                <div className="flex max-lg:flex-col justify-between items-center">
                  <p className="text-[22px] max-lg:text-[29px] font-semibold">
                    Experience Effortless Property Management
                  </p>

                  <button className="bg-[#141414] max-lg:w-full max-lg:mt-5 border border-[#262626] tracking-wide rounded-lg text-sm px-[14px] py-[13px] max-lg:py-[15px] cursor-pointer">
                    Learn More
                  </button>
                </div>
                <p className="text-sm max-lg:text-[15px] mt-5 text-[#999999] max-lg:leading-[20px]">
                  Ready to experience hassle-free property management? Explore
                  our Property Management Service categories and let us handle
                  the complexities while you enjoy the benefits of property
                  ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-lg:flex-col gap-12 mx-[65px] max-lg:mx-[12px] mb-[80px] font-urbanist">
        <div className="w-[55%] max-lg:w-full">
          <ThreeStars />

          <div className="ml-4 max-lg:ml-0 mt-[14px] tracking-wide">
            <p className="text-4xl max-lg:ml-2 max-lg:text-[35px] font-urbanist-semibold text-white leading-[52px]">
              Smart Investments, Informed Decisions
            </p>

            <p className="text-[#999999] max-lg:ml-2 text-[13px] max-lg:text-[15px] mr-auto max-lg: mt-[13px]">
              Building a real estate portfolio requires a strategic approach.
              Estatein's Investment Advisory Service empowers you to make smart
              investments and informed decisions.
            </p>

            <div className="relative max-lg:flex max-lg:justify-center border mt-[35px] border-[#242424] w-full rounded-lg overflow-hidden">
              <Image
                src="/smabstract.svg"
                alt="home"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-[#191919]/40 max-lg:w-full"></div>

              <div className="relative z-10 p-[35px] max-lg:px-[20px] text-white">
                <div className="justify-between items-center">
                  <p className="text-[19px] max-lg:text-[29px] font-semibold">
                    Unlock Your Investment Potential
                  </p>

                  <p className="text-xs max-lg:text-[15px] my-7 text-[#999999] leading-[18px] max-lg:leading-[21px]">
                    Explore our Property Management Service categories and let
                    us handle the complexities while you enjoy the benefits of
                    property ownership.
                  </p>

                  <button className="bg-[#141414] border border-[#262626] tracking-wide rounded-lg text-sm px-[14px] w-full py-[11px] max-lg:py-[15px] cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#191919] p-[10px] rounded-xl grid grid-cols-2 max-lg:grid-cols-1 gap-[10px]">
          <ManagementOffer
            img="/valuation.svg"
            title="Market Insight"
            subtext="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
          />

          <ManagementOffer
            img="/flame.svg"
            title="ROI Assessment"
            subtext="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
          />

          <ManagementOffer
            img="/bulb.svg"
            title="Customized Strategies"
            subtext="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
          />

          <ManagementOffer
            img="/sun.svg"
            title="Diversification Mastery"
            subtext="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
          />
        </div>
      </div>
    </>
  );
}
