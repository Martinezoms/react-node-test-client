import React, { useState } from 'react';
import { Tag } from '../../atoms';
import { Card, ConfirmationModal } from '../../components';
import AddClassModal from '../../components/AddClassModal/AddClassModal';
import './Admin.scss';

const Admin = () => {
  const [openClassModal, setOpenClassModal] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  return (
    <div className="admin__container">
      {openClassModal && <AddClassModal setOpenClassModal={setOpenClassModal} />}
      {openConfirmation && <ConfirmationModal setOpenConfirmation={setOpenConfirmation} />}
      <h3>Edit sectors here</h3>

      <hr />

      <form>
        <p>
          Select sector<span>*</span>
        </p>
        <div className="industry-checkbox">
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Manufacturing</label>
          </div>
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Service</label>
          </div>
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Other</label>
          </div>
        </div>
        <div className="item">
          <label htmlFor="name">
            Division<span>*</span>
          </label>
          <input type="text" id="name" name="name" placeholder="Input divison..." required />
        </div>

        <div className="item">
          <label htmlFor="name">Add group?</label>
          <div className="sub-sector">
            <input type="text" id="name" name="name" placeholder="Input group..." required />
            <button>Add</button>
          </div>
          <div className="group-tags">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>

        <div className="add-class" onClick={() => setOpenClassModal(true)}>
          <p>Add/Remove class?</p>
        </div>

        <div className="item">
          <input type="submit" name="Save" value="Save" />
        </div>
      </form>

      <div className="admin__sector-cards">
        <div>
          <Card setOpenConfirmation={setOpenConfirmation} />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Admin;
