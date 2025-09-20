import Image from "next/image";

interface CardProps {
  title: string;
  subtext: string;
}

export default function FaqCard({ title, subtext }: CardProps) {
  return (
    <div className="relative border border-[#262626] bg-transparent w-[370px] rounded-xl px-[35px] pt-7 pb-[24px] group overflow-hidden cursor-pointer">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#262626] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

      <div className="relative z-10">
        <p className="mb-[2px] text-[17px] font-urbanist-semibold h-[51px]">
          {title}
        </p>
        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[13px] mt-4 text-[#999999] leading-6">{subtext}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-7 relative z-10">
        <button className="bg-[#191919] cursor-pointer text-sm border -translate-y-2 border-[#262626] px-[17px] py-[14px] rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}
