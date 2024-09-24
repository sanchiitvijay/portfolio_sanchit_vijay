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

const PorjectModal = (props) => {
    const { isOpen,  onOpenChange } = useDisclosure();
  return (
    <div>
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

export default PorjectModal