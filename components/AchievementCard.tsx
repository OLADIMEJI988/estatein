interface AchievementProps {
  title: string;
  subtext: string;
}

export default function AchievementCard({ title, subtext }: AchievementProps) {
  return (
    <div className="p-[0.32rem] bg-[#191919] rounded-2xl w-full">
      <div className="border border-[#262626] font-urbanist h-[212px] p-[40px] bg-[#141414] rounded-xl">
        <p className="font-urbanist-semibold text-[24px]">{title}</p>
        <p className="text-[#999999] text-[14px] mt-[24px] leading-6">
          {subtext}
        </p>
      </div>
    </div>
  );
}
