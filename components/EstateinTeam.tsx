import Representative from "./Representative";
import ThreeStars from "./ThreeStars";

export default function EstateinTeam() {
  return (
    <div className="mt-[100px]">
      <div className="items-start mr-auto">
        <ThreeStars />

        <div className=" mt-[16px] ml-5 tracking-wide">
          <p className="text-[38px] font-urbanist-semibold">
            Meet the Estatein Team
          </p>
          <p className="mt-[10px] text-[#999999] text-[15px] pr-[130px]">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>

        <div className="flex mt-[60px] ml-5 gap-[20px]">
           <Representative img="/max.svg" name="Max Mitchell" role="Founder" />
           <Representative img="/sarah.svg" name="Sarah Johnson" role="Chief Real Estate Officer" />
           <Representative img="/david.svg" name="David Brown" role="Head of Property Management" />
           <Representative img="/michael.svg" name="Michael Turner" role="Legal Counsel" />
        </div>

      </div>
    </div>
  );
}
