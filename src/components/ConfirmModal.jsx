import React from 'react';

export const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm action</h2>
        <p>{message || "Are you sure?"}</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Yes</button>
          <button className="cancel-btn" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};