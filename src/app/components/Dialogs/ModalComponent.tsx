import React from "react";
import { Modal, Fade } from "@mui/material";

const ModalComponent = ({
  isOpen,
  closeModal,
  children,
}: {
    isOpen: boolean;
    closeModal: () => void;
    children: JSX.Element;
}) => {
  return (
    <>
      <Modal
        open={isOpen}
        onClose={closeModal}
        className="flex h-100 w-80 mx-auto items-center justify-center"
      >
        <Fade in={isOpen} timeout={500}>
          {children}
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComponent;
