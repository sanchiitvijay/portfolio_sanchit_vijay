import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { data } from "../constants/othercer";


const OtherCircularModal = (props) => {

  return (
    
    <Modal
    backdrop={"blur"}
    isOpen={props?.isOpen}
    onOpenChange={props?.onOpenChange}
    className="w-[360px] bg-zinc-950/90 md:w-[1000px]"
    hideCloseButton
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1 text-2xl text-center">
            Other Circular Activities
          </ModalHeader>

          <Divider />
          <ModalBody className="justify-center p-4">
               <div className="flex flex-col gap-4">
                    {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="text-md">🔸{item.title}</div>
                        <div className="text-sm">{item.desc}</div>
                    </div>
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
  )
}

export default OtherCircularModal;