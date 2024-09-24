import { CardBody } from "@nextui-org/react";
import { MyCard } from "../common/MyCard";
import { Icon } from "@iconify/react";

const SocialHandle = () => {
  return (
    <MyCard
      color="zinc"
      className="w-36 h-20 justify-center  items-center flex flex-col gap-1 p-0 md:w-full"
    >
      <CardBody className="flex flex-row items-center overflow-hidden justify-center gap-2 p-0">
        {/* <Icon
          icon="logos:linkedin-icon"
          className="cursor-pointer size-7 md:size-10"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/sanchiitvijay/",
              "_blank",
              "noopener noreferrer"
            )
          }
        /> */}
        Other Circullum 
      </CardBody>
    </MyCard>
  );
};

export default SocialHandle;
