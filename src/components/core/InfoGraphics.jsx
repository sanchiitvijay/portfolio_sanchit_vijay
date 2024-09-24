import { useState } from "react";
import OtherCir from "../common/Certificates";
import Time from "../common/Time";

const InfoGraphics = (props) => {
  return (
    <div className="w-[90%] flex flex-row gap-3 scale-[1.2] md:scale-[1] md:w-full ">
      <div className="md:w-[164px] md:h-[100px] md:rounded-2xl sm:w-[90%]">
        <Time/>
      </div>
      <div className="md:w-[347px] md:h-[100px] md:rounded-2xl sm:w-[90%]">
        <OtherCir onCerOpen={props?.onCerOpen} />
      </div>
    </div>
  );
};

export default InfoGraphics;
