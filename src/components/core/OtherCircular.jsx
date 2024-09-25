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
        className="w-36 h-20 justify-center mx-auto bg-oceandark items-center flex flex-col gap-1 p-0 md:w-full"
      >
        <div className="flex mx-auto place-content-center place-items-center">
          <CardBody className="flex md:text-xl text-lg overflow-hidden gap-2 px-2">
            Extra Curricular
          </CardBody>
        </div>
        <OtherCircularModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </MyCard>
    </button>
  );
};

export default OtherCircular;
