import { CardBody, CardHeader } from "@nextui-org/react";
import LogoMarquee from "../Atoms/LogoMarquee";
import { MyCard } from "../Atoms/MyCard";
import LogoMarqueeFull from "../Atoms/LogoMarqueeFull";

const TechStack = () => {
  return (
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
  );
};

export default TechStack;
