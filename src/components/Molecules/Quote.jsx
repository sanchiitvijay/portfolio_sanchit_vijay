import { MyCard } from "../Atoms/MyCard";
import { CardBody, Image } from "@nextui-org/react";
import climax from "@/assets/Pics/ClimaxFCx1.webp";

const Quote = () => {
  return (
    <MyCard
      className="gap-2 items-center md:w-full sm:w-[390px] md:h-full"
      color="zinc"
    >
      <CardBody className="flex text-wrap text-center font-garamond md:text-[22px] gap-4 leading-tight sm:text-base">
        <Image src={climax} alt="Climax from Fight Club" />
        <p>
          You met me at a very strange time in my{" "}
          <span className="text-[#99D52A]">Sprint</span> cycle.
        </p>
      </CardBody>
    </MyCard>
  );
};

export default Quote;
