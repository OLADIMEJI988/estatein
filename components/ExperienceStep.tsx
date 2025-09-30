interface StepProps {
  stepnum: string;
  title: string;
  subtext: string;
}

export default function ExperienceStep({ stepnum, title, subtext }: StepProps) {
  return (
    <div className="w-[413px] ml-5 tracking-wide mt-[60px]">
      <div className="border-l-[1.5px] border-[#703BF7] p-4 text-[16px]">
        {stepnum}
      </div>

      {/* Hover group */}
      <div className="relative px-9 py-10 h-[220px] cursor-pointer flex flex-col group overflow-hidden">
        {/* Gradient glow */}
        <div
          className="absolute top-0 left-0 w-[200px] h-[200px] 
            bg-[linear-gradient(135deg,#703BF7_0%,transparent_22%)] 
            opacity-25 pointer-events-none"
        />

        <span className="relative z-10 font-urbanist-semibold text-[20px]">
          {title}
        </span>

        <span className="relative z-10 mt-[16px] text-[13px] leading-6 text-[#999999]">
          {subtext}
        </span>

        {/* Top border */}
        <div className="absolute top-0 left-0 h-[1.5px] w-[calc(100%-24px)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#703BF7_0%,#703BF7_5%,#262626_40%,#262626_100%)] transition-opacity duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#703BF7_0%,#703BF7_25%,#262626_70%,#262626_100%)] transition-opacity duration-[2000ms] ease-in-out opacity-0 group-hover:opacity-100" />
        </div>

        {/* Left border */}
        <div className="absolute top-0 left-0 w-[1.5px] h-[calc(100%-24px)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#703BF7_0%,#703BF7_10%,#262626_70%,#262626_100%)] transition-opacity duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#703BF7_0%,#703BF7_35%,#262626_90%,#262626_100%)] transition-opacity duration-[2000ms] ease-in-out opacity-0 group-hover:opacity-100" />
        </div>

        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-6 h-[1.5px] bg-[#262626]"
          style={{ width: "calc(100% - 48px)" }}
        ></div>

        {/* Right border */}
        <div
          className="absolute top-6 right-0 w-[1.3px] bg-[#262626]"
          style={{ height: "calc(100% - 48px)" }}
        ></div>

        {/* Rounded corners */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[#262626] rounded-tr-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#262626] rounded-br-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[#262626] rounded-bl-xl" />
      </div>
    </div>
  );
}
