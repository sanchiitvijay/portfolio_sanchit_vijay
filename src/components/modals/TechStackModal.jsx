import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import {
  developerTools,
  fullstack,
  programmingLanguages,
  softSkills,
} from "../constants/techstack";

const TechStackModal = (props) => {
  return (
    <Modal
      backdrop={"blur"}
      isOpen={props?.isTechOpen}
      onOpenChange={props?.onTechOpenChange}
      className="w-[360px] bg-zinc-950/90 md:w-[800px]"
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
              Tech stacks
            </ModalHeader>

            <Divider />
            <ModalBody className="justify-center p-4">
              <div className="text-lg font-semibold">
                <span className="text-[#99D52A]">Fullstack: </span>
                {fullstack?.map((e, i) => (
                  <span className="text-sm my-auto" key={i}>
                    {e},{" "}
                  </span>
                ))}
              </div>

              <div className="my-1 px-8">
                <Divider />
              </div>
              <div className="text-lg font-semibold">
                <span className="text-[#99D52A]">Programming Languages: </span>
                {programmingLanguages?.map((e, i) => (
                  <span className="text-sm my-auto" key={i}>
                    {e},{" "}
                  </span>
                ))}
              </div>

              <div className="my-1 px-8">
                <Divider />
              </div>
              <div className="text-lg font-semibold">
                <span className="text-[#99D52A]">Developer Tools: </span>
                {developerTools?.map((e, i) => (
                  <span className="text-sm my-auto" key={i}>
                    {e},{" "}
                  </span>
                ))}
              </div>

              <div className="my-1 px-8">
                <Divider />
              </div>
              <div className="text-lg font-semibold">
                <span className="text-[#99D52A]">Soft Skills: </span>
                {softSkills?.map((e, i) => (
                  <span className="text-sm my-auto" key={i}>
                    {e},{" "}
                  </span>
                ))}
              </div>
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
  );
};

export default TechStackModal;
