import Image from "next/image";

interface ValueProps {
  img: string;
  title: string;
  subtext: string;
}

export default function EachValue({img, title, subtext}: ValueProps) {
  return (
    <>
      <div className="tracking-wide items-start">
        <div className="flex items-center gap-3">
          <Image
            className="w-[55px] max-lg:w-[70px] h-full object-cover"
            src={img}
            alt="banner"
            width={60}
            height={60}
            priority
          />

          <p className="font-urbanist-semibold text-[20px] max-lg:text-[25px]">{title}</p>
        </div>

        <p className="mt-[16px] text-[#999999] text-[14px] max-lg:text-[17px] w-[290px] max-lg:w-full">{subtext}</p>
      </div>
    </>
  );
}
