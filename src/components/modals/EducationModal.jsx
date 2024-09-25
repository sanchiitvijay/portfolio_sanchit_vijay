import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
// import TimelineItem from '../core/TimelineItem'
import { Timeline } from "rsuite";
import { education } from "../constants/education";
import TimeLineEducation from "../common/TimeLineEducation";

const EducationModal = (props) => {
  return (
    <Modal
      backdrop={"blur"}
      isOpen={props?.isOpen}
      onOpenChange={props?.onOpenChange}
      className="w-[360px] bg-zinc-950/90 md:w-[800px]"
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
              Education
            </ModalHeader>

            <Divider />

            {education.map((e, i) => (
              <ModalBody className="justify-center p-4" key={i}>
                <Timeline
                  className="custom-timeline"
                  isItemActive={(index) => index === 0}
                >
                  <Timeline.Item>
                    <TimeLineEducation
                      timeline={e?.timeline}
                      name={e?.name}
                      location={e?.location}
                      degree={e?.degree}
                      marks={e?.marks}
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

export default EducationModal;
