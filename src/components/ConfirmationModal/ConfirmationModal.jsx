import React from 'react';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ setOpenConfirmation }) => {
  return (
    <div className="confirmation__container">
      <div className="confirmation__box">
        <p>Permanently delete this sector?</p>
        <div className="confirmation-btns">
          <button onClick={() => setOpenConfirmation(false)}>Cancel</button>

          <button>Yes, delete sector</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
