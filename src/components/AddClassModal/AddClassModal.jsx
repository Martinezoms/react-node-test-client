import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Tag } from '../../atoms';
import './AddClassModal.scss';

const AddClassModal = ({
  setOpenClassModal,
  addClass,
  handleGroupSelection,
  classes,
  dataClass,
  setDataClass,
  groups
}) => {
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
            <select onChange={(e) => handleGroupSelection(e)}>
              <option style={{ color: 'gray' }}>Select option</option>
              {groups.map((group) => (
                <option key={group.id} id={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="item">
          <label htmlFor="name">
            Add class<span>*</span>
          </label>
          <div className="input-add-btn">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Input class..."
              value={dataClass}
              onChange={(e) => setDataClass(e.target.value)}
            />
            <button onClick={addClass}>Add</button>
          </div>
          <div className="class-tags">
            {classes.map((item) => (
              <Tag key={item.id} {...item} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassModal;
