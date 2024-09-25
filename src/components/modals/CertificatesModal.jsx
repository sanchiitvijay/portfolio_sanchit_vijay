import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { codingPlatforms, codingRating, certificates } from "../constants/certifi";
import { Icon } from "@iconify/react";

const CertificatesModal = (props) => {
  return (
    
    <Modal
    backdrop={"blur"}
    isOpen={props?.isCerOpen}
    onOpenChange={props?.onCerOpenChange}
    className="w-[360px] bg-zinc-950/90 md:w-[1000px]"
    hideCloseButton
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1 text-[23px] text-center">
            Coding Platform & Certifications
          </ModalHeader>

          <Divider />
          <ModalBody className="justify-center p-4">
              <div className="text-lg font-semibold text-[#99D52A]">
                Coding Platforms Ratings:
                </div>
                {
                  codingRating?.map((e, i) => (
                    <div className="" key={i}>
                      <a href={e?.url} alt={e?.name}>
                        <div className="flex flex-row gap-4">
                          {/* <img src={e?.logo} className="w-5 h-5" /> */}
                          <Icon icon={e?.logo} width={18} />
                          <span className="text-sm font-semibold">{e?.name}: </span> 
                          <span className="text-sm">{e?.rating}</span>
                        </div>
                      </a>
                    </div>
                  ))
                }
                <Divider/>
                <div className="text-lg font-semibold text-[#99D52A]">
                  Certifications:
                </div>
                {
                  certificates?.map((e, i) => (
                    <div className="" key={i}>
                      <div className=" gap-1">
                        <span className="text-sm text-semibold">🔸 {e?.name}</span>
                        <span className="text-sm te"> --by {e?.org}</span>
                      </div>
                        {/* <span className="text-sm">{e?.description}</span> */}
                    </div>
                  ))
                }

                <Divider/>

                <div className="flex flex-row gap-4 mx-auto">
                  {
                    codingPlatforms?.map((e, i) => (
                      <a href={e?.url} alt={e?.name} key={i}>
                          <Icon icon={e?.logo} width={25} />
                      </a>
                    )
                  )}
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

export default CertificatesModal