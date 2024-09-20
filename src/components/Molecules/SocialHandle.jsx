import { CardBody } from "@nextui-org/react";
import { MyCard } from "../Atoms/MyCard";
import { Icon } from "@iconify/react";

const SocialHandle = () => {
  return (
    <MyCard
      color="zinc"
      className="w-36 h-20 justify-center  items-center flex flex-col gap-1 p-0 md:w-full"
    >
      <CardBody className="flex flex-row items-center overflow-hidden justify-center gap-2 p-0">
        <Icon
          icon="logos:linkedin-icon"
          className="cursor-pointer size-7 md:size-10"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/sanchiitvijay/",
              "_blank",
              "noopener noreferrer"
            )
          }
        />
        <Icon
          icon="bytesize:github"
          className="cursor-pointer size-7 md:size-10"
          onClick={() =>
            window.open(
              "https://www.github.com/sanchiitvijay/",
              "_blank",
              "noopener noreferrer"
            )
          }
        />
        <Icon
          icon="oui:email"
          className="cursor-pointer  size-9 md:size-11"
          onClick={() =>
            window.open(
              "mailto:sanchiitvijay@gmail.com",
              "_blank",
              "noopener noreferrer"
            )
          }
        />
      </CardBody>
    </MyCard>
  );
};

export default SocialHandle;
