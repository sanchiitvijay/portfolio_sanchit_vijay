import InfoGraphics from "../Molecules/InfoGraphics";
import NameCard from "../Organisms/NameCard";
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
import SocialHandle from "../Molecules/SocialHandle";
import "rsuite/Timeline/styles/index.css";
import TimelineItem from "../Molecules/TimelineItem";
import { Timeline } from "rsuite";
import WorkExperience from "../Molecules/WorkExperience";
import content from "@/lib/constants";
import Quote from "../Molecules/Quote";
import { Icon } from "@iconify/react";

const HomeMobile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col w-[100%] justify-center items-center gap-10 md:hidden">
      <InfoGraphics />
      <NameCard />
      <WorkExperience onOpen={onOpen} />
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-[360px] bg-zinc-950/90"
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

                  <Timeline.Item>
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
                  </Timeline.Item>
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

      <div className="flex flex-row gap-4 scale-[1.15] mt-2">
        <div className="flex flex-col gap-4">
          <Button
            className="w-[172px] h-[80px] text-xl bg-zinc-950 font-semibold transition ease-in-out ring-[1px] ring-zinc-900 hover:ring-zinc-700 hover:transition-all"
            startContent={
              <Icon icon="mage:file-download" style={{ color: "#99d52a" }} />
            }
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/1saPsB7Lnnpk_S98K3g7P94RCN6uOTlMt7ph25-QDYpI/export?format=pdf"
              );
            }}
          >
            Resume
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <TechStack />
          <SocialHandle />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-1 ">
        <Quote />
      </div>
    </div>
  );
};

export default HomeMobile;
