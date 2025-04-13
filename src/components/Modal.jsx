import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageSrc} alt="Full View" />
      </div>
    </div>
  );
};

export default Modal;
