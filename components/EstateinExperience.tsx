import ExperienceStep from "./ExperienceStep";
import ThreeStars from "./ThreeStars";

export default function EstateinExperience() {
  return (
    <div className="mt-[100px]">
      <div className="items-start mr-auto">
        <ThreeStars />

        <div className=" mt-[16px] ml-5 tracking-wide">
          <p className="text-[38px] font-urbanist-semibold">
            Navigating the Estatein Experience
          </p>
          <p className="mt-[10px] text-[#999999] text-[15px] pr-[130px]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
      </div>

      <div className="flex ">
        <ExperienceStep
          stepnum="Step 01"
          title="Discover a World of Possibilities"
          subtext="Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location."
        />
        <ExperienceStep
          stepnum="Step 02"
          title="Narrowing Down Your Choices"
          subtext="Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
        />
        <ExperienceStep
          stepnum="Step 03"
          title="Personalized Guidance"
          subtext="Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
        />
      </div>

      <div className="flex">
        <ExperienceStep
          stepnum="Step 04"
          title="See It for Yourself"
          subtext="Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
        />
        <ExperienceStep
          stepnum="Step 05"
          title="Making Informed Decisions"
          subtext="Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed."
        />
        <ExperienceStep
          stepnum="Step 06"
          title="Getting the Best Deal"
          subtext="We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
        />
      </div>
    </div>
  );
}
