import TilesSvg from "./TilesSvg";

export default function Footer() {
  return (
    <div className="relative font-urbanist border border-[#262626] flex flex-col mb-10 justify-center overflow-hidden">
      <div className="flex justify-between -mt-[60px]">
        <TilesSvg />

        <div className="transform scale-x-[-1]">
          <TilesSvg />
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center h-[200px] mt-10 mx-14 px-6">
        <div className="max-w-3xl mr-auto">
          <p className="text-[28px] font-bold mb-3">
            Start Your Real Estate Journey Today
          </p>
          <p className="text-[#999999] text-[13px] mb-6 leading-6">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <button className="px-[14px] text-[13px] h-12 bg-[#703BF7] rounded-lg">
          Explore Properties
        </button>
      </div>
    </div>
  );
}
