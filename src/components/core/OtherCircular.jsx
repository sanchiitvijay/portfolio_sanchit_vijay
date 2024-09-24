import { CardBody, useDisclosure } from "@nextui-org/react";
import { MyCard } from "../common/MyCard";
import { Icon } from "@iconify/react";
import OtherCircularModal from "../modals/OtherCircularModal";

const OtherCircular = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <button className="w-full h-full" onClick={onOpen}>

    <MyCard
      color="zinc"
      className="w-36 h-20 justify-center  items-center flex flex-col gap-1 p-0 md:w-full"
      >
      <CardBody className="flex flex-row items-center overflow-hidden justify-center gap-2 p-0">
        Other Circullum 
      </CardBody>
      <OtherCircularModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </MyCard>
    </button>
  );
};

export default OtherCircular;
