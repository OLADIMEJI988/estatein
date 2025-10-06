"use client";

import ThreeStars from "@/components/ThreeStars";
import InputValidation from "./InputValidation";
import DropdownValidation from "./DropdownValidation";

export default function ReachOut() {
  return (
    <div className="items-start mr-auto mt-[110px] font-urbanist">
      <ThreeStars />
      <div className="mt-[14px] ml-4 tracking-wide">
        <p className="text-[38px] font-urbanist-semibold">
          Let's Make it Happen
        </p>
        <p className="mt-[10px] text-[#999999] text-[14px] pr-[130px]">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>
      </div>

      <div className="flex flex-col gap-8 border border-[#262626] rounded-lg p-[60px] ml-4 mt-12">
        {/* First Row - Text Inputs */}
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
          <InputValidation
            title="Phone"
            placeholder="Enter Phone Number"
            required
            pattern={/^\d{10,15}$/}
            errorMessage="Phone number must be 10–15 digits."
          />
        </div>

        {/* Second Row - Dropdowns */}
        <div className="flex gap-[30px] mt-[20px]">
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
            options={["1", "2", "3", "4+", "5+"]}
            placeholder="Select no. of Bathrooms"
          />
          <DropdownValidation
            title="No. of Bedrooms"
            options={["1", "2", "3", "4+", "5+"]}
            placeholder="Select no. of Bedrooms"
          />
        </div>

        {/* Third Row */}
        <div className="flex gap-[30px] w-full mt-[20px]">
          <div className="w-[101%]">
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

          <div className="flex gap-[20px] w-full">
            <div className="tracking-wide flex flex-col justify-center w-full">
              <p className="mb-2">Preferred Contact Method</p>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="border mt-1 bg-[#191919] border-[#262626] focus:border-[#703BF7] placeholder:text-[13px] placeholder:text-[#666666] p-3 rounded-md focus:outline-none"
              />
            </div>

            <div className="tracking-wide flex flex-col justify-center w-full">
              <div className="mb-[32px]"></div>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border mt-1 bg-[#191919] border-[#262626] focus:border-[#703BF7] placeholder:text-[13px] placeholder:text-[#666666] p-3 rounded-md focus:outline-none"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
