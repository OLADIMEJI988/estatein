import AnimatedSendSvg from "./AnimatedSendSvg";
import TilesSvg from "./TilesSvg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="relative font-urbanist border border-[#262626] flex flex-col justify-center lg:overflow-hidden max-lg:w-full max-lg:h-[530px]">
        <div className="flex max-lg:flex-col justify-between -mt-[60px] max-lg:-mt-0">
          <div className="max-lg:scale-y-[-1]">
            <TilesSvg />
          </div>
          <div className="transform scale-x-[-1] max-lg:-mt-[70px]">
            <TilesSvg />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left h-auto lg:h-[200px] mt-0 lg:mt-10 mx-4 sm:mx-8 lg:mx-14 px-6 gap-6">
          <div className="max-w-3xl mr-auto">
            <p className="text-[28px] font-bold mb-3">
              Start Your Real Estate Journey Today
            </p>
            <p className="text-[#999999] text-[14px] mb-6 max-lg:mb-4 leading-6">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>

          <button className="w-full lg:w-auto px-5 py-3 text-[18px] lg:text-[14px] sm:text-[14px] h-12 max-lg:h-14 bg-[#703BF7] rounded-lg">
            Explore Properties
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-10 sm:py-[65px] tracking-wide flex flex-col lg:flex-row bg-[#141414] px-6 max-lg:px-[12px] lg:px-[75px] gap-10 lg:gap-20 max-lg:w-full">
        {/* Left Section */}
        <div className="mr-auto">
          <div className="flex items-center">
            <Image
              className="h-[30px] max-lg:h-[40px] object-contain"
              src="/logo.svg"
              alt="logo"
              width={42}
              height={38}
              priority
            />
            <p className="font-urbanist-semibold text-2xl lg:text-xl tracking-wide ml-2">
              Estatein
            </p>
          </div>

          {/* Email Field */}
          <div className="flex font-urbanist lg:w-72 items-center border border-[#262626] focus-within:border-[#703BF7] tracking-wide py-3 max-lg:py-5 px-3 max-lg:px-5 mt-5 rounded-lg mx-auto lg:mx-0 max-lg:w-[350px] transition-colors duration-200 group">
            <Image
              className="h-[17px] max-lg:h-[27px]"
              src="/email.svg"
              alt="logo"
              width={31}
              height={20}
              priority
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none text-[#999999] text-[15px] lg:text-[13px] mr-auto ml-2 w-full placeholder-[#999999]"
            />

            <AnimatedSendSvg />
          </div>
        </div>

        <div className="grid grid-cols-2 bg-transparent max-lg:pl-[6%] max-lg:w-full sm:grid-cols-3 lg:grid-cols-5 gap-8 text-left font-urbanist">
          {[
            {
              title: "Home",
              links: [
                "Hero Section",
                "Features",
                "Properties",
                "Testimonials",
                "FAQ's",
              ],
            },
            {
              title: "About Us",
              links: [
                "Our Story",
                "Our Works",
                "How It Works",
                "Our Team",
                "Our Clients",
              ],
            },
            {
              title: "Services",
              links: [
                "Valuation Mastery",
                "Strategic Marketing",
                "Negotiation Wizardry",
                "Closing Success",
                "Property Management",
              ],
            },
            {
              title: "Properties",
              links: ["Portfolio", "Categories"],
            },
            {
              title: "Contact Us",
              links: ["Contact Form", "Our Offices"],
            },
          ].map((section, idx) => (
            <div key={idx} className="text-[13px]">
              <p className="text-[#999999] text-[16px] lg:text-[14px] mb-4 lg:mb-3">
                {section.title}
              </p>
              {section.links.map((link, i) => (
                <p
                  key={i}
                  className="my-3 lg:my-2 hover:text-[#703BF7] max-lg:text-[14px] cursor-pointer transition-colors"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 font-urbanist tracking-wide flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-6 sm:px-10 lg:px-[75px] bg-[#191919] text-center sm:text-left max-lg:w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:text-[11px] text-[12px] tracking-wide justify-center sm:justify-start">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          <p>Developed by Sholanke Oladimeji</p>
        </div>

        <div className="flex items-center justify-center gap-4 lg:gap-3">
          {[
            "/facebook.svg",
            "/linkedin.svg",
            "/twitter.svg",
            "/youtube.svg",
          ].map((icon, i) => (
            <div
              key={i}
              className="relative h-10 w-10 lg:h-9 lg:w-9 flex justify-center items-center rounded-full bg-[#141414] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#26262674] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Image
                className="h-[22px] lg:h-[17px] cursor-pointer relative z-10"
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
