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
    <div className="border border-[#262626] bg-transparent w-[370px] rounded-xl px-[23px] pt-7 pb-[26px]">
      <div className="cursor-pointer overflow-hidden rounded-lg">
        <Image
          className="w-full transform transition-transform duration-300 hover:scale-108"
          src={img}
          alt="banner"
          width={300}
          height={200}
          priority
        />
      </div>

      <div className="mt-4">
        <p className="mb-[5px]">{title}</p>
        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[#999999] text-[12px]">{subtext}</p>
          <p className="mt-4 underline cursor-pointer left-37 absolute">
            {moretext}
          </p>
        </div>
      </div>

      <div className="flex mt-5 gap-2">
        <div className="flex items-center gap-[3px] justify-center border border-[#262626] bg-[#191919] rounded-2xl px-3 py-[7px]">
          <Image
            className="w-[16px]"
            src="/bedroom.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          ></Image>
          <p className="text-[12px]">4-Bedroom</p>
        </div>

        <div className="flex items-center gap-[3px] justify-center border border-[#262626] bg-[#191919] rounded-2xl px-3 py-[7px]">
          <Image
            className="w-[16px]"
            src="/bathroom.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          ></Image>
          <p className="text-[12px]">3-Bathroom</p>
        </div>

        <div className="flex items-center gap-[3px] justify-center border border-[#262626] bg-[#191919] rounded-2xl px-3 py-[7px]">
          <Image
            className="w-[16px]"
            src="/villa.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          ></Image>
          <p className="text-[12px]">Villa</p>
        </div>
      </div>

      <div className="mt-5 flex items-center">
        <div>
          <p className="text-[#999999] text-sm">Price</p>
          <p className="mt-1 font-semibold tracking-wide">$550,000</p>
        </div>

        <button className="px-8 py-[13px] text-[13px] bg-[#703BF7] cursor-pointer rounded-lg ml-auto">
          View Property Details
        </button>
      </div>
    </div>
  );
}
