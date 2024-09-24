import NameTag from "../common/NameTag";
import ProPic from "../common/ProPic";
import CTA from "./CTA";
import MyChip from "../common/MyChip";
import Marquee from "../magicui/marquee";
import { MyCard } from "../common/MyCard";

const NameCard = () => {
  return (
    <MyCard
      color="zinc"
      className="px-5 py-5 w-[90%] scale-[1.2] md:scale-[1] md:w-full md:h-full "
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-start gap-3">
          <ProPic />
          <div className="flex flex-col">
            <NameTag />
            <div className="flex gap-1 -mt-2 md:-mt-1">
              <MyChip variant="secondary" text="Bangalore,India" emoji="📍" />
              <MyChip variant="secondary" text="BE CSE, MSRIT" emoji="🎓" />
            </div>

            <div className="ml-1 w-44 flex items-center justify-center rounded-lg overflow-hidden shadow-xl -mt-1.5 md:w-[300px]">
              <Marquee className="[--duration:20s]">
                <MyChip
                  variant="secondary"
                  text="MERN Developer"
                  emoji="🏢"
                />
                <MyChip
                  variant="secondary"
                  text="Competitive Programmer"
                  emoji="💻"
                />
                <MyChip variant="secondary" text="Hindi & English" emoji="🗣️" />
              </Marquee>
            </div>
          </div>
        </div>

        <CTA />
      </div>
    </MyCard>
  );
};

export default NameCard;
