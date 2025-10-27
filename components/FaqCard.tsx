import Image from "next/image";

interface CardProps {
  title: string;
  subtext: string;
}

export default function FaqCard({ title, subtext }: CardProps) {
  return (
    <div className="relative border border-[#262626] bg-transparent w-[370px] max-lg:min-w-[500px] rounded-xl px-[35px] pt-7 pb-[24px] group overflow-hidden cursor-pointer">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#262626] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

      <div className="relative z-10">
        <p className="mb-[2px] text-[17px] max-lg:text-[23px] font-urbanist-semibold h-[51px]">
          {title}
        </p>

        <div className="flex text-[12px] relative gap-[7px] items-center">
          <p className="text-[13px] max-lg:text-[15px] mt-4 max-lg:mt-6 text-[#999999] leading-6">
            {subtext}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-7 max-lg:mt-8 relative z-10">
        <button className="bg-[#191919] cursor-pointer text-sm max-lg:text-base border border-[#262626] px-[17px] py-[14px] rounded-lg transition hover:bg-[#1f1f1f] 
        -translate-y-2 w-auto max-lg:w-full">
          Read More
        </button>
      </div>
    </div>
  );
}
