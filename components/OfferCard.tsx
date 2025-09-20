import Image from "next/image";

interface CardProps {
  img: string;
  text: string;
}

export default function Card({ img, text }: CardProps) {
  return (
    <div className="bg-[#191919] font-urbanist relative border border-[#262626] w-80 h-36 rounded-xl">
      <Image
        className="w-6 h-6 absolute top-3 right-3"
        src="/greyarrow.svg"
        alt="arrow"
        width={28}
        height={28}
        priority
      />

      <div className="flex flex-col items-center gap-4 mt-5">
        <div>
          <Image
            className="w-[62px] h-auto"
            src={img}
            alt="home"
            width={62}
            height={62}
            priority
          />
        </div>

        <div className="text-[14px]">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
