/* eslint-disable react/prop-types */
import NumberTicker from "../magicui/number-ticker";
import { MyCard } from "./MyCard";

const Metrics = (props) => {
  return (
    <MyCard
      color="zinc"
      className="p-1 w-full h-[88px] flex flex-col items-center md:h-full"
    >
      <div className="text-4xl font-bold text-[#99D52A] text-center tracking-tighter md:text-6xl">
        <NumberTicker value={props.header} stiffVal={100} />
      </div>
      <div className="-mt-2 text-white text-sm font-medium text-center leading-none md:text-xl md:-mt-4">
        {props.footer}
      </div>
    </MyCard>
  );
};

export default Metrics;
