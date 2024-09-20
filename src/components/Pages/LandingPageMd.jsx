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
import TechStack from "../Molecules/TechStack";
import WorkCard from "../Molecules/WorkCard";
import Services from "../Molecules/Services";
import SocialHandle from "../Molecules/SocialHandle";
import WorkExperience from "../Molecules/WorkExperience";
import Timeline from "rsuite/Timeline";
import TimelineItem from "../Molecules/TimelineItem";
import content from "@/lib/constants";
import InfoGraphics from "../Molecules/InfoGraphics";
import Quote from "../Molecules/Quote";
import NameCard from "../Organisms/NameCard";
import { Icon } from "@iconify/react";

const LandingPageMd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-[834px] p-6 flex flex-wrap gap-4 mx-auto max-md:hidden">
      <div className="flex flex-wrap w-[67%] h-[476px] gap-4 justify-between">
        <InfoGraphics />
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
          <WorkExperience onOpen={onOpen} />
          <Modal
            backdrop={"blur"}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="w-[360px] bg-zinc-950/90 md:w-[800px]"
            hideCloseButton
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
                    Experience
                  </ModalHeader>

                  <Divider />
                  <ModalBody className="justify-center p-4">
                    <Timeline
                      className="custom-timeline"
                      isItemActive={(index) => index === 0}
                    >
                      <Timeline.Item>
                        <TimelineItem
                          timeline={content.timeline[0]}
                          title={content.title[0]}
                          company={content.company[0]}
                          description={content.para.content1}
                        />
                      </Timeline.Item>

                      {/* <Timeline.Item>
                        <TimelineItem
                          timeline={content.timeline[1]}
                          title={content.title[1]}
                          company={content.company[1]}
                          description={content.para.content2}
                        />
                      </Timeline.Item>

                      <Timeline.Item>
                        <TimelineItem
                          timeline={content.timeline[2]}
                          title={content.title[2]}
                          company={content.company[2]}
                          description={content.para.content3}
                        />
                      </Timeline.Item> */}
                    </Timeline>
                  </ModalBody>
                  <ModalFooter className="justify-center">
                    <Button
                      color="danger"
                      variant="flat"
                      onPress={onClose}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className="flex flex-col gap-4 h-[508px]">
        <div className="w-[243px] h-[50%] rounded-2xl">
          <TechStack />
        </div>
        <div className="w-[243px] h-[70%] rounded-2xl">
          <Services />
        </div>
      </div>

      <div className="flex flex-row gap-4 w-[834px] h-fit">
        <div className="flex flex-col gap-4 h-[334px]">
          <div className="w-[264px] h-[64%] rounded-2xl gap-2 items-center">
            <Quote />
          </div>
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
