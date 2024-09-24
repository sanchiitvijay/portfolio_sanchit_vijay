import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import TechStack from "../core/TechStack";
import WorkCard from "../core/WorkCard";
import Services from "../core/Services";
import SocialHandle from "../core/SocialHandle";
import Timeline from "rsuite/Timeline";
import TimelineItem from "../common/TimelineItem";
import content from "@/lib/constants";
import InfoGraphics from "../core/InfoGraphics";
import Quote from "../core/Quote";
import NameCard from "../core/NameCard";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ContactModal from "../modals/ContactModal";
import CertificatesModal from "../modals/CertificatesModal";
import Education from "../core/Education";
import EducationModal from "../modals/EducationModal";
import ExperienceModal from "../modals/ExperienceModal";
import TechStackModal from "../modals/TechStackModal";

const LandingPageMd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isServicesOpen,
    onOpen: onServicesOpen,
    onOpenChange: onServicesOpenChange,
  } = useDisclosure();
  const {
    isOpen: isTechOpen,
    onOpen: onTechOpen,
    onOpenChange: onTechOpenChange,
  } = useDisclosure();
  const [isCerOpen, setIsCerOpen] = useState(false);

  const onCerClose = () => setIsCerOpen(false);
  const onCerOpen = () => setIsCerOpen(true);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const onContactClose = () => setIsContactOpen(false);
  const onContactOpen = () => setIsContactOpen(true);

  return (
    <div className="w-[834px] p-6 z-0 flex flex-wrap gap-4 mx-auto max-md:hidden">
      <div className="flex flex-wrap w-[67%] h-[476px] gap-4 justify-between">
        <InfoGraphics onCerOpen={onCerOpen} />

        <div className=" w-[526px] h-[256px] rounded-2xl">
          <NameCard />
        </div>
        <div className=" w-[164px] h-[80px] rounded-2xl">
          <Button
            className="w-full h-full text-xl font-semibold bg-zinc-950 transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700 hover:transition-all"
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
        </div>
        <div className="w-[346px] h-[80px] rounded-2xl">
          {/* <CertificatesModal onCerClose={onCerClose} /> */}
          <Education onOpen={onOpen} />
          <EducationModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
      </div>

      <div className="flex flex-col gap-4 h-[508px]">
        <div className="w-[243px] h-[50%] rounded-2xl">
          <TechStack onOpen={onTechOpen} />
          <TechStackModal
            isTechOpen={isTechOpen}
            onTechOpenChange={onTechOpenChange}
          />
        </div>
        <div className="w-[243px] h-[70%] rounded-2xl">
          <Services onOpen={onServicesOpen} />
          <ExperienceModal
            isServicesOpen={isServicesOpen}
            onServicesOpenChange={onServicesOpenChange}
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-[-28px] w-[834px] h-fit">
        <div className="flex flex-col gap-4 h-[334px]">
          <div
            className="w-[264px] h-[64%] rounded-2xl gap-2 items-center "
            onClick={onContactOpen}
          >
            <Quote onContactOpen={onContactOpen} />
          </div>
          {isContactOpen && <ContactModal onContactClose={onContactClose} />}
          <div className=" w-[264px] h-[25%] rounded-2xl">
            <SocialHandle />
          </div>
        </div>
        <div className=" w-full h-[89%] rounded-2xl">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPageMd;
