import { Icon } from "@iconify/react";
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

const ProjectModal = (props) => {
    const { isOpen,  onOpenChange } = useDisclosure();
  return (
    <div>
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
                  <ModalHeader className="flex flex-col text-[#99D52A] gap-1 text-2xl text-center">
                    {props?.name}
                  </ModalHeader>

                  <Divider />
                  <ModalBody className="justify-center p-4">
                    <div>
                      <p className="text-sm font-semibold">Description:</p>
                      {
                        props?.desc?.map((item, index) => (
                          <p key={index} className="text-sm">🔸{item}</p>
                        ))
                      }
                      <div className="my-3 px-8">
                        <Divider />
                      </div>
                      <p className="text-sm font-semibold mt-2">Technologies Used : 

                      {
                        props?.tech?.map((item, index) => (
                          <span key={index} className="text-sm font-normal">{item}, </span>
                        ))
                      }
                      </p>
                      <div className="my-3 px-8">
                        <Divider />
                      </div>
                      <div className="flex flex-row gap-2 mt-4 place-content-center">
                        {
                          props?.githubLink !== "" && (
                            <a href={props?.githubLink} target="_blank" rel="noreferrer">
                              <Icon icon="bytesize:github" width={32} />
                            </a>)
                        }
                        {
                          props?.liveLink !== "" && (
                            <a href={props?.liveLink} target="_blank" rel="noreferrer">
                              <Icon icon="akar-icons:link" width={32} />
                            </a>
                          )
                        }
                        </div>
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
    </div>
  )
}

export default ProjectModal