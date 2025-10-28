"use client";

import ThreeStars from "@/components/ThreeStars";
import InputValidation from "./InputValidation";
import DropdownValidation from "./DropdownValidation";
import Image from "next/image";

export default function ReachOut() {
  return (
    <div className="items-start mr-auto mt-[110px] max-lg:w-full font-urbanist">
      <ThreeStars />
      <div className="mt-[14px] ml-4 max-lg:ml-2 tracking-wide">
        <p className="text-[38px] max-lg:text-[35px] font-urbanist-semibold">
          Let&lsquo;s Make it Happen
        </p>
        <p className="mt-[10px] text-[#999999] text-[14px] max-lg:text-[15px] pr-[130px] max-lg:pr-[25px]">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don&lsquo;t wait; let&lsquo;s embark on this exciting journey
          together.
        </p>
      </div>

      <div className="flex flex-col gap-8 border border-[#262626] rounded-lg p-[60px] max-lg:px-[15px] max-lg:py-[30px] max-lg:mr-[23px] ml-4 max-lg:ml-0 max-lg:w-auto mt-12">
        {/* First Row - Text Inputs */}
        <div className="flex max-lg:flex-col gap-[30px]">
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
          <InputValidation
            title="Phone"
            placeholder="Enter Phone Number"
            required
            pattern={/^\d{10,15}$/}
            errorMessage="Phone number must be 10–15 digits."
          />
        </div>

        {/* Second Row - Dropdowns */}
        <div className="flex max-lg:flex-col gap-[30px] mt-[20px] max-lg:mt-0">
          <DropdownValidation
            title="Preferred Location"
            options={["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Other"]}
            placeholder="Select Location"
          />
          <DropdownValidation
            title="Property Type"
            options={["Apartment", "House", "Duplex", "Studio", "Penthouse"]}
            placeholder="Select Property Type"
          />
          <DropdownValidation
            title="No. of Bathrooms"
            options={["1", "2", "3", "4", "5+"]}
            placeholder="Select no. of Bathrooms"
          />
          <DropdownValidation
            title="No. of Bedrooms"
            options={["1", "2", "3", "4", "5+"]}
            placeholder="Select no. of Bedrooms"
          />
        </div>

        {/* Third Row */}
        <div className="flex max-lg:flex-col gap-[30px] w-full mt-[20px] max-lg:mt-0 items-start">
          {/* Left column: Dropdown */}
          <div className="flex flex-col w-[101%] max-lg:w-full">
            <DropdownValidation
              title="Budget"
              options={[
                "$50k - $100k",
                "$100k - $250k",
                "$250k - $500k",
                "$500k - $1M",
                "$1M+",
              ]}
              placeholder="Select Budget"
            />
          </div>

          {/* Right column: Inputs */}
          <div className="flex max-lg:flex-col gap-[20px] w-full -mt-[1px]">
            <div className="tracking-wide flex flex-col justify-center min-w-[47%] max-lg:w-full">
              <p className="mb-2">Preferred Contact Method</p>

              {/* Input wrapper */}
              <div className="relative flex items-center border mt-1 bg-[#191919] border-[#262626] focus-within:border-[#703BF7] rounded-md px-3 py-[11px]">
                {/* Left Icon */}
                <Image
                  className="h-[17px] w-[17px] mr-3"
                  src="/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />

                {/* Input */}
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="flex-1 bg-transparent cursor-pointer text-white placeholder:text-[13px] placeholder:text-[#666666] focus:outline-none pr-6 max-lg:pr-0"
                />

                {/* Right Circle */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 bg-[#703BF7] rounded-full"></div>
              </div>
            </div>

            <div className="tracking-wide flex flex-col justify-center w-full mt-[4px]">
              <div className="mb-[32px] max-lg:mb-0"></div>
              <div className="relative w-full">
                {/* Mail Icon */}
                <Image
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-[17px] w-[17px]"
                  src="/whitemail.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {/* Input */}
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="border w-full bg-[#191919] cursor-pointer border-[#262626] focus:border-[#703BF7] placeholder:text-[13px] placeholder:text-[#666666] pl-10 pr-8 p-3 rounded-md focus:outline-none"
                />
                {/* Circle on the right */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 border border-[#703BF7] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="gap-[30px] w-full mt-[20px] max-lg:mt-0 items-start">
          <p>Message</p>
          <textarea
            placeholder="Enter your Message here.."
            className="border border-[#262626] rounded-md bg-[#191919] w-full h-[150px] cursor-pointer placeholder:text-[#666666] px-[20px] py-[16px] mt-[16px] text-white align-top focus:outline-none focus:border-[#703BF7] resize-none"
          />
        </div>

        <div className="flex max-lg:flex-col items-center justify-between">
          <div className="flex items-center gap-[6px] max-lg:gap-[10px]">
            <input
              type="checkbox"
              name="price"
              className="appearance-none w-[20px] h-[20px] border border-[#262626] rounded-sm bg-[#191919] checked:bg-transparent checked:border-[#703BF7] checked:before:content-['✓'] checked:before:text-[#703BF7] checked:before:flex checked:before:items-center checked:before:justify-center cursor-pointer"
            />
            <p className="text-[#999999] text-[14px]">
              I agree with <span className="underline cursor-pointer">Terms of Use</span> and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>
            </p>
          </div>

          <button className="bg-[#703BF7] px-[25px] py-[14px] rounded-lg text-[15px] cursor-pointer max-lg:w-full max-lg:mt-8">Send Your Message</button>
        </div>
      </div>
    </div>
  );
}
