import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";
import { BsPlayCircle } from "react-icons/bs";

export default function TrailerModal({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="flex hover:text-[var(--pink)] transition-all duration-300
                       items-center gap-2 cursor-pointer"
      >
        <span className="">
          <BsPlayCircle size={44} />{" "}
        </span>
        <span className="md:text-lg font-semibold">Watch Trailer</span>
      </div>
      <Modal
        className="bg-[var(--black)] pb-6"
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
      >
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center text-white gap-2">
                <span className="text-lg font-semibold">Watch Trailer</span>
                <span className="text-xs opacity-50">{title}</span>
              </ModalHeader>
              <ModalBody className="w-full overflow-hidden">
                <ReactPlayer url={url} width={"100%"} height={"700px"} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
