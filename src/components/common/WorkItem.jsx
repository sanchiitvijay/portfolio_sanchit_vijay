import { Card, Image, CardFooter, useDisclosure } from "@nextui-org/react";
import herocard from "@/assets/Pics/herocard.webp";
import ProjectModal from "../modals/ProjectModal";

const WorkItem = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <button onClick={onOpen}>

    <Card isFooterBlurred className="border-none size-28 md:size-52">
      <Image
        isBlurred
        alt="Woman listing to music"
        className="object-cover"
        src={herocard}
      />

      <CardFooter className="flex flex-col before:bg-white/10 border-white/20 overflow-hidden py-1 absolute bottom-0 shadow-xl z-10">
        <p className="font-bold text-xsm md:text-base">{props?.name}</p>
        <p className="text-xsm max-md:hidden md:text-xsm">{props?.briefDesc}</p>
      </CardFooter>
    </Card>

    <ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} {...props}/>
    </button>
  );
};

export default WorkItem;
