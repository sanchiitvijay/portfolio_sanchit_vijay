import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Timeline } from "rsuite";
import { experience } from "../constants/experience";
import TimelineItem from "../common/TimelineItem";

const ExperienceModal = (props) => {
  return (
    <Modal
      backdrop={"blur"}
      isOpen={props?.isServicesOpen}
      onOpenChange={props?.onServicesOpenChange}
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
            {experience?.map((e, i) => (
              <ModalBody className="justify-center p-4" key={i}>
                <Timeline
                  className="custom-timeline"
                  isItemActive={(index) => index === 0}
                >
                  <Timeline.Item>
                    <TimelineItem
                      timeline={e?.timeline}
                      company={e?.company}
                      desc={e?.desc}
                      tech={e?.tech}
                      link={e?.link}
                      role={e?.role}
                      location={e?.location}
                    />
                  </Timeline.Item>
                </Timeline>
              </ModalBody>
            ))}

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
  );
};

export default ExperienceModal;
