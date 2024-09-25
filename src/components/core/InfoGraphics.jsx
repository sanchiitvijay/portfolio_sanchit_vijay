import OtherCir from "../common/Certificates";
import Time from "../common/Time";
import { useDisclosure } from "@nextui-org/react";
import CertificatesModal from "../modals/CertificatesModal";

const InfoGraphics = (props) => {
  const {
    isOpen: isCerOpen,
    onOpen: onCerOpen,
    onOpenChange: onCerOpenChange,
  } = useDisclosure();


  return (
    <div className="w-[90%] flex flex-row gap-3 scale-[1.2] md:scale-[1] md:w-full ">
      <div className="md:w-[164px] md:h-[100px] md:rounded-2xl sm:w-[90%]">
        <Time/>
      </div>
      <div className="md:w-[347px] bg-duck md:h-[100px] md:rounded-2xl sm:w-[90%]">
        <OtherCir onCerOpen={onCerOpen} />
      </div>

      <CertificatesModal isCerOpen={isCerOpen} onCerOpenChange={onCerOpenChange} />
    </div>
  );
};

export default InfoGraphics;
