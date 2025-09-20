import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  subtext: string;
  name: string;
  country: string;
  profileimg: string;
}

export default function TestimonialCard({
  img,
  title,
  subtext,
  name,
  country,
  profileimg,
}: CardProps) {
  return (
    <div className="relative border border-[#262626] cursor-pointer bg-transparent w-[370px] rounded-xl px-[38px] pt-7 pb-8 group overflow-hidden">
      <div className="absolute inset-0 bg-[#262626] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

      <Image
        className="w-[194px] relative z-10"
        src={img}
        alt="banner"
        width={30}
        height={20}
        priority
      />

      <div className="mt-[28px] relative z-10">
        <p className="mb-[5px] text-[18px] font-urbanist-semibold">{title}</p>
        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[12px] mt-[1px] leading-6 h-[94px]">{subtext}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6 relative z-10">
        <Image
          className="w-[46px]"
          src={profileimg}
          alt="banner"
          width={30}
          height={20}
          priority
        />
        <div className="text-[14px]">
          <p>{name}</p>
          <p className="text-[#999999] mt-[2px]">{country}</p>
        </div>
      </div>
    </div>
  );
}
