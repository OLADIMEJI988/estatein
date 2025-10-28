import Block from "./Block";
import Bolt from "./Bolt";

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
      <div className="border border-[#262626] w-[540px] max-lg:w-full font-urbanist p-[40px] max-lg:px-[20px] bg-[#141414] rounded-xl">
        <div className="flex max-lg:flex-col gap-[20px]">
          <div className="mr-auto">
            <p className="text-[#999999] text-[16px]">
              Since <span>{year}</span>
            </p>
            <p className="text-[24px] max-lg:text-[25px] font-urbanist-semibold mt-[4px]">
              {corpname}
            </p>
          </div>
          <button className="bg-[#191919] border border-[#262626] h-[49px] px-[20px] max-lg:text-[17px] rounded-lg cursor-pointer">
            Visit Website
          </button>
        </div>

        <div className="mt-[30px] flex">
          <div className="mr-16 max-lg:mr-12">
            <div className="flex">
              <Block />
              <p className="text-[#999999] text-[14px] max-lg:text-[15px] ml-[4px]">Domain</p>
            </div>
            <p className="mt-[6px] max-lg:text-[17px]">Commercial Real Estate</p>
          </div>

          <div className="w-[1px] h-[50px] max-lg:h-[75px] mx-4 bg-[#262626]"></div>

          <div>
            <div className="flex">
              <Bolt />
              <p className="text-[#999999] text-[14px] max-lg:text-[15px] ml-[4px]">Category</p>
            </div>
            <p className="mt-[6px] max-lg:text-[17px]">{category}</p>
          </div>
        </div>

        <div className="mt-[30px] border border-[#262626] w-full rounded-xl p-[24px]">
          <p className="text-[15px] max-lg:text-[17px] text-[#999999]">What They Said 🤗</p>
          <p className="mt-[10px] text-[15px] max-lg:text-[17px]">{feedback}</p>
        </div>
      </div>
    </div>
  );
}
