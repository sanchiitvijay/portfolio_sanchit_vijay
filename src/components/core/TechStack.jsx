import { CardBody, CardHeader } from "@nextui-org/react";
import LogoMarquee from "../common/LogoMarquee";
import { MyCard } from "../common/MyCard";
import LogoMarqueeFull from "../common/LogoMarqueeFull";

const TechStack = (props) => {
  
  return (
    <button onClick={props?.onOpen} className="w-full h-full">

    <MyCard
      color="zinc"
      className="h-[210px] w-36 items-center justify-center md:w-full md:h-full"
      >
      <CardHeader className="px-0 py-0 mt-2 font-semibold justify-center text-xl md:text-2xl">
        TechStack
      </CardHeader>
      <CardBody className="py-4 items-center -mt-2 md:py-6 overflow-hidden">
        {<LogoMarquee />}
        {<LogoMarqueeFull />}
      </CardBody>
    </MyCard>
      </button>
  );
};

export default TechStack;
