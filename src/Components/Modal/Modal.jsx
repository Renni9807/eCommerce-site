import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Large view" />
      </div>
    </div>
  );
};

export default Modal;
