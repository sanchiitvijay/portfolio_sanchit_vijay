import { MyCard } from "../common/MyCard";
import { CardBody, Image, useDisclosure } from "@nextui-org/react";
import climax from "@/assets/Pics/ClimaxFCx1.webp";
import ContactModal from "../modals/ContactModal";

const Contact = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <button  onClick={onOpen} className="h-full w-full">
      <MyCard
        className="gap-2 items-center md:w-full bg-dino bg-cover bg-center sm:w-[390px] md:h-full"
        color="zinc"
      >
        <CardBody className="flex text-wrap text-center font-garamond md:text-2xl gap-4 leading-tight sm:text-lg">
          <p className="mt-6">
            Contact Me
          </p>
        </CardBody>
        <ContactModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </MyCard>
    </button>
  );
};

export default Contact;
