import Metrics from "../Atoms/Metrics";

const InfoGraphics = () => {
  return (
    <div className="w-[90%] flex flex-row gap-3 scale-[1.2] md:scale-[1] md:w-full ">
      <div className="md:w-[164px] md:h-[140px] md:rounded-2xl sm:w-[90%]">
        <Metrics header={20} footer="Projects" />
      </div>
      <div className="md:w-[164px] md:h-[140px] md:rounded-2xl sm:w-[90%]">
        <Metrics header={4} footer="Years Expertise" />
      </div>
      <div className="md:w-[164px] md:h-[140px] md:rounded-2xl sm:w-[90%]">
        <Metrics header={15} footer="Clients" />
      </div>
    </div>
  );
};

export default InfoGraphics;
