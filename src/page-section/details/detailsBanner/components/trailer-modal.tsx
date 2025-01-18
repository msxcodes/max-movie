import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";
import { BsPlayCircle } from "react-icons/bs";
import "../details-banner.css"

export default function TrailerModal({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="" style={{ zIndex: "50" }}>
      <div
        onClick={onOpen}
        style={{ width: "max-content" }}
        className="flex hover:text-[var(--pink)] transition-all duration-300 modal-container
                       items-center gap-2 cursor-pointer"
      >
        <span className="">
          <BsPlayCircle size={44} />{" "}
        </span>
        <span className="md:text-lg title-text font-semibold">Watch Trailer</span>
      </div>
      <Modal
        className="bg-[var(--black)] pb-6 modal-box"
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center text-white gap-2">
                <span className="text-lg font-semibold">Watch Trailer</span>
                <span className="text-xs opacity-50">{title}</span>
              </ModalHeader>
              <ModalBody style={{ height: "700px" }} className="w-full h-[700px] overflow-hidden">
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
