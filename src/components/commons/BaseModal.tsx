/* eslint-disable import/order */
import React, { useState } from "react";
import { Modal } from "@mui/material";

interface BaseModalProps {
  children: JSX.Element;
  buttonElement: JSX.Element;
}

const BaseModal = (props: BaseModalProps): JSX.Element => {
  const { children, buttonElement } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>{buttonElement}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{React.cloneElement(children, { handleClose })}</div>
      </Modal>
    </div>
  );
};

export default BaseModal;
