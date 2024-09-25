import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { contactLink } from "../constants/contact";


const ContactModal = (props) => {

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
            Contacts
          </ModalHeader>

          <Divider />
          <ModalBody className="justify-center p-4 text-sm">
                <div className="">
                  <div className="flex flex-row gap-3 mb-3">
                    <Icon icon="mdi:phone" className="w-4 h-4" />
                    <span className="font-semibold">Mobile:</span>
                    <span>+91 8445137008</span>
                  </div>
                  <div className="flex flex-row gap-3 mb-3">
                    <Icon icon="mdi:email" className="w-4 h-4" />
                    <span className="font-semibold">Email:</span>
                    <span>sanchiitvijay@gmail.com</span>
                  </div>
                  <div className="flex flex-row gap-3 mb-3">
                    <Icon icon="ph:address-book-fill" className="w-5 h-5" />
                    <span className="font-semibold">Address:</span>
                    <span>MSRIT, Mathtikere, Bengaluru, Karnataka, India 560054</span>
                  </div>
                  
                  <div className="my-3 px-8">
                        <Divider />
                      </div>
                    <div className="flex flex-row gap-3 mt-6 text-sm mx-auto place-content-center">
                      {contactLink.map((link, index) => (
                        <div key={index} className="flex flex-col gap-3">
                          
                          <Icon icon={link.logo} className="w-6 h-6 mx-auto" />
                          <a href={link.url} target="_blank" rel="noreferrer" className="text-sm">
                            {link.name}
                          </a>

                        </div>
                      ))}
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
  )
}

export default ContactModal;