import Image from "next/image";

interface ClientProps {
  year: string;
  corpname: string;
  category: string;
  feedback: string;
}

export default function Client({
  year,
  corpname,
  category,
  feedback,
}: ClientProps) {
  return (
    <div className="p-[6px] bg-[#191919] rounded-2xl">
      <div className="border border-[#262626] w-[540px] font-urbanist p-[40px] bg-[#141414] rounded-xl">
        <div className="flex gap-[20px]">
          <div className="mr-auto">
            <p className="text-[#999999] text-[16px]">
              Since <span>{year}</span>
            </p>
            <p className="text-[24px] font-urbanist-semibold mt-[4px]">
              {corpname}
            </p>
          </div>
          <button className="bg-[#191919] border border-[#262626] h-[49px] px-[20px] rounded-lg cursor-pointer">
            Visit Website
          </button>
        </div>

        <div className="mt-[30px] flex">
          <div className="mr-16">
            <div className="flex">
              <Image
                className="w-[20px] transform transition-transform duration-300 hover:scale-108"
                src="/domainicon.svg"
                alt="banner"
                width={30}
                height={20}
                priority
              />
              <p className="text-[#999999] text-[14px] ml-[4px]">Domain</p>
            </div>
            <p className="mt-[6px]">Commercial Real Estate</p>
          </div>

          <div className="w-[1px] h-[50px] mx-4 bg-[#262626]"></div>

          <div>
            <div className="flex">
              <Image
                className="w-[20px] transform transition-transform duration-300 hover:scale-108"
                src="/graybolt.svg"
                alt="banner"
                width={30}
                height={20}
                priority
              />
              <p className="text-[#999999] text-[14px] ml-[4px]">Category</p>
            </div>
            <p className="mt-[6px]">{category}</p>
          </div>
        </div>

        <div className="mt-[30px] border border-[#262626] w-full rounded-xl p-[24px]">
          <p className="text-[15px] text-[#999999]">What They Said 🤗</p>
          <p className="mt-[10px] text-[15px]">{feedback}</p>
        </div>
      </div>
    </div>
  );
}
