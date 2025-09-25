import TilesSvg from "./TilesSvg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="relative font-urbanist border border-[#262626] flex flex-col justify-center overflow-hidden">
        <div className="flex justify-between -mt-[60px]">
          <TilesSvg />

          <div className="transform scale-x-[-1]">
            <TilesSvg />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center h-[200px] mt-10 mx-14 px-6">
          <div className="max-w-3xl mr-auto">
            <p className="text-[28px] font-bold mb-3">
              Start Your Real Estate Journey Today
            </p>
            <p className="text-[#999999] text-[13px] mb-6 leading-6">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>

          <button className="px-[14px] text-[13px] h-12 bg-[#703BF7] rounded-lg">
            Explore Properties
          </button>
        </div>
      </div>

      <div className="py-[65px] tracking-wide flex bg-[#141414] px-[75px]">
        <div className="mr-auto">
          <div className="flex items-center">
            <Image
              className="h-[30px] object-contain"
              src="/logo.svg"
              alt="logo"
              width={42}
              height={38}
              priority
            />
            <p className="font-urbanist-semibold text-xl tracking-wide">
              Estatein
            </p>
          </div>

          <div className="flex font-urbanist w-72 items-center border border-[#262626] tracking-wide py-3 px-3 mt-[22px] cursor-pointer rounded-lg">
            <Image
              className="h-[17px]"
              src="/email.svg"
              alt="logo"
              width={31}
              height={20}
              priority
            />
            <p className="text-[#999999] text-[13px] mr-auto">
              Enter Your Email
            </p>
            <Image
              className="h-[17px]"
              src="/send.svg"
              alt="logo"
              width={30}
              height={20}
              priority
            />
          </div>
        </div>

        <div className="flex gap-10 font-urbanist">
          <div className="text-[13px]">
            <p className="text-[#999999] text-[14px] mb-3">Home</p>
            <p>Hero Section</p>
            <p className="my-2">Features</p>
            <p>Properties</p>
            <p className="my-2">Testimonials</p>
            <p>FAQ's</p>
          </div>

          <div className="text-[13px]">
            <p className="text-[#999999] text-[14px] mb-3">About Us</p>
            <p>Our Story</p>
            <p className="my-2">Our Works</p>
            <p>How It Works</p>
            <p className="my-2">Our Team</p>
            <p>Our Clients</p>
          </div>

          <div className="text-[13px]">
            <p className="text-[#999999] text-[14px] mb-3">Properties</p>
            <p>Portfolio</p>
            <p className="my-2">Categories</p>
          </div>

          <div className="text-[13px]">
            <p className="text-[#999999] text-[14px] mb-3">Services</p>
            <p>Valuation Mastery</p>
            <p className="my-2">Strategic Marketing</p>
            <p>Negotiation Wizardry</p>
            <p className="my-2">Closing Success</p>
            <p>Property Management</p>
          </div>

          <div className="text-[13px]">
            <p className="text-[#999999] text-[14px] mb-3">Contact Us</p>
            <p>Contact Form</p>
            <p className="my-2">Our Offices</p>
          </div>
        </div>
      </div>

      <div className="py-[14px] font-urbanist tracking-wide flex items-center justify-between px-[75px] bg-[#191919]">
        <div className="gap-6 flex text-[11px] tracking-wide">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="flex items-center gap-[7px]">
          {[
            "/facebook.svg",
            "/linkedin.svg",
            "/twitter.svg",
            "/youtube.svg",
          ].map((icon, i) => (
            <div
              key={i}
              className="relative h-9 w-9 flex justify-center items-center rounded-full bg-[#141414] group overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#26262674] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

              {/* Icon */}
              <Image
                className="h-[17px] cursor-pointer relative z-10"
                src={icon}
                alt="logo"
                width={42}
                height={38}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
