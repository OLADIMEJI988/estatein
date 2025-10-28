import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  subtext: string;
  moretext: string;
}

export default function PropertyCard({
  img,
  title,
  subtext,
  moretext,
}: CardProps) {
  return (
    <div className="border border-[#262626] bg-transparent w-[370px] max-lg:w-full h-[500px] max-lg:h-[600px] rounded-xl px-[23px] max-lg:px-[15px] pt-7 pb-[26px] flex flex-col justify-between">
      <div className="cursor-pointer overflow-hidden rounded-lg">
        <Image
          className="w-full transform transition-transform duration-300 hover:scale-110"
          src={img}
          alt="property"
          width={300}
          height={200}
          priority
        />
      </div>

      <div className="mt-4">
        <p className="mb-[5px] font-semibold text-white max-lg:text-[25px]">
          {title}
        </p>
        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[#999999] text-[12px] max-lg:text-[15px]">
            {subtext}
          </p>
          <p className="max-lg:hidden mt-4 underline cursor-pointer left-37 absolute">
            {moretext}
          </p>
        </div>
      </div>

      <div className="flex max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 mt-5 gap-2">
        <div className="flex items-center gap-[3px] max-lg:gap-2 justify-center border border-[#262626] bg-[#191919] rounded-2xl max-lg:rounded-full px-3 max-lg:px-4 py-[7px] max-lg:py-[9px]">
          <Image
            className="w-[16px] max-lg:w-[18px]"
            src="/bedroom.svg"
            alt="bedroom"
            width={20}
            height={20}
            priority
          />
          <p className="text-[12px] max-lg:text-[14px]">4-Bedroom</p>
        </div>

        <div className="flex items-center gap-[3px] justify-center border border-[#262626] bg-[#191919] rounded-2xl max-lg:rounded-full px-3 max-lg:px-4 py-[7px] max-lg:py-[9px]">
          <Image
            className="w-[16px] max-lg:w-[18px]"
            src="/bathroom.svg"
            alt="bathroom"
            width={20}
            height={20}
            priority
          />
          <p className="text-[12px] max-lg:text-[14px]">3-Bathroom</p>
        </div>

        <div className="flex items-center gap-[3px] justify-center border border-[#262626] bg-[#191919] rounded-2xl max-lg:rounded-full px-3 max-lg:px-4 py-[7px] max-lg:py-[9px]">
          <Image
            className="w-[16px] max-lg:w-[18px]"
            src="/villa.svg"
            alt="villa"
            width={20}
            height={20}
            priority
          />
          <p className="text-[12px] max-lg:text-[14px]">Villa</p>
        </div>
      </div>

      <div className="mt-5 flex items-center">
        <div>
          <p className="text-[#999999] text-sm max-lg:text-[16px]">Price</p>
          <p className="mt-1 font-semibold tracking-wide max-lg:text-[18px] text-white">
            $550,000
          </p>
        </div>

        <button className="px-8 py-[13px] text-[13px] max-lg:text-[15px] bg-[#703BF7] cursor-pointer rounded-lg ml-auto hover:bg-[#844CFF] transition">
          View Property Details
        </button>
      </div>
    </div>
  );
}
