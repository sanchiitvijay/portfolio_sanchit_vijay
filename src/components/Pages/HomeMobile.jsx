import InfoGraphics from "../core/InfoGraphics";
import NameCard from "../core/NameCard";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import TechStack from "../core/TechStack";
import "rsuite/Timeline/styles/index.css";
import { Icon } from "@iconify/react";
import ExperienceModal from "../modals/ExperienceModal";
import Education from "../core/Education";
import EducationModal from "../modals/EducationModal";
import TechStackModal from "../modals/TechStackModal";
import WorkCard from "../core/WorkCard";
import Contact from "../core/Contact";
import OtherCircular from "../core/OtherCircular";

const HomeMobile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isTechOpen,
    onOpen: onTechOpen,
    onOpenChange: onTechOpenChange,
  } = useDisclosure();

  const {
    isOpen: isServicesOpen,
    onOpen: onServicesOpen,
    onOpenChange: onServicesOpenChange,
  } = useDisclosure();

  return (
    <div className="flex flex-col w-[100%] justify-center items-center gap-10 md:hidden">
      <InfoGraphics />
      <NameCard />
      <Education onOpen={onOpen} />
      <EducationModal isOpen={isOpen} onOpenChange={onOpenChange}/>

      <div className="flex flex-row gap-4 scale-[1.15] mt-2">
        <div className="flex flex-col gap-4">
          <Button
            className="w-[172px] h-[80px] text-xl bg-zinc-950 font-semibold transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700 hover:transition-all"
            startContent={
              <Icon icon="mage:file-download" style={{ color: "#99d52a" }} />
            }
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1Fq5tRrS4ZNOUdeKaTuFB6xs41lpTgKpL?usp=sharing"
              );
            }}
          >
            Resume
          </Button>
          <Button
            className="w-[172px] h-full text-xl bg-direction bg-cover font-semibold transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700 hover:transition-all"
            onPress={onServicesOpen}
          >
            Experience
          </Button>
          <ExperienceModal
            isServicesOpen={isServicesOpen}
            onServicesOpenChange={onServicesOpenChange}
          />
        </div>
        <div className="flex flex-col gap-4">
        <TechStack onOpen={onTechOpen} />
          <TechStackModal
            isTechOpen={isTechOpen}
            onTechOpenChange={onTechOpenChange}
          />
          <OtherCircular />
        </div>
      </div>
      <div className=" w-full rounded-2xl">
          <WorkCard />
        </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-1 ">
        <Contact />
      </div>
    </div>
  );
};

export default HomeMobile;
