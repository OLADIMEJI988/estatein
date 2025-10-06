import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  subtext: string;
  moretext: string;
  price: string;
  location: string;
  destination: string;
}

export default function AvailableProperty({
  img,
  title,
  subtext,
  moretext,
  price,
  location,
  destination,
}: CardProps) {
  return (
    <div className="border font-urbanist border-[#262626] bg-transparent min-w-[357px] rounded-xl px-[23px] pt-7 pb-[26px]">
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

      <div className="mt-[24px]">
        <div className="border max-w-[305px] mb-[16px] flex justify-center border-[#262626] bg-[#191919] py-1 rounded-full text-[13px]">
          <p>{location} - <span>{destination}</span></p>
        </div>
        <p className="mb-[5px]">{title}</p>
        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[#999999] text-[12px]">{subtext}</p>
          <p className="mt-4 underline cursor-pointer left-37 absolute">
            {moretext}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center">
        <div>
          <p className="text-[#999999] text-sm">Price</p>
          <p className="mt-1 font-semibold tracking-wide">{price}</p>
        </div>

        <button className="px-8 py-[13px] text-[13px] bg-[#703BF7] cursor-pointer rounded-lg ml-auto">
          View Property Details
        </button>
      </div>
    </div>
  );
}
