import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Tag } from '../../atoms';
import './AddClassModal.scss';

const AddClassModal = ({ setOpenClassModal }) => {
  return (
    <div className="class__container">
      <div className="class__box">
        <div className="close-btn" onClick={() => setOpenClassModal(false)}>
          <AiOutlineClose />
        </div>
        <div className="item">
          <label htmlFor="sectors">
            Which group is this class under?<span>*</span>
          </label>
          <div id="sectors" className="item__sector">
            <select required>
              <option disabled>Select option</option>
              <option>Beverages</option>
              <option>Meat & milk products</option>
              <option>other</option>
            </select>
          </div>
        </div>

        <div className="item">
          <label htmlFor="name">
            Add class<span>*</span>
          </label>
          <div className="sub-sector">
            <input type="text" id="name" name="name" placeholder="Input class..." required />
            <button>Add</button>
          </div>
          <div className="class-tags">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>

        <div className="item">
          <input type="submit" name="Save" value="Save" />
        </div>
      </div>
    </div>
  );
};

export default AddClassModal;
