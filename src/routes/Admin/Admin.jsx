import React, { useState } from 'react';
import { useAppContext } from '../../utils/AppContext';
import { AddClassModal } from '../../components';
import { Tag } from '../../atoms';

import axios from 'axios';
import './Admin.scss';

const Admin = () => {
  const [openClassModal, setOpenClassModal] = useState(false);

  const [selectedSectorId, setSelectedSectorId] = useState('');
  const [selectedDivisionId, setSelectedDivisionId] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState('');

  const [division, setDivision] = useState('');
  const [group, setGroup] = useState('');
  const [dataClass, setDataClass] = useState('');

  const { sectors, divisions, setDivisions, groups, setGroups, classes, setClasses, getData } = useAppContext();

  const handleSectorRadioBtn = (sectorId) => {
    setSelectedSectorId(sectorId);
    getData('division', sectorId, setDivisions);
  };

  const handleDivisionSelection = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute('id');
    setSelectedDivisionId(id);
    getData('group', id, setGroups);
  };

  const handleGroupSelection = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute('id');
    setSelectedGroupId(id);
    getData('class', id, setClasses);
  };

  // Add division
  const addDivision = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/division/create', {
        sectorId: selectedSectorId,
        name: division
      });
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
    setDivision('');
    getData('division', selectedSectorId, setDivisions);
  };

  // Add group
  const addGroup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/group/create', {
        divisionId: selectedDivisionId,
        name: group
      });
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }

    setGroup('');
    getData('group', selectedDivisionId, setGroups);
  };

  // Add class
  const addClass = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/class/create', {
        groupId: selectedGroupId,
        name: dataClass
      });
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
    setDataClass('');
    getData('class', selectedGroupId, setClasses);
  };

  return (
    <div className="admin__container">
      <div>
        {openClassModal && (
          <AddClassModal
            setOpenClassModal={setOpenClassModal}
            addClass={addClass}
            handleGroupSelection={handleGroupSelection}
            classes={classes}
            dataClass={dataClass}
            setDataClass={setDataClass}
            groups={groups}
            setClasses={setClasses}
            setGroups={setGroups}
            setDivisions={setDivisions}
          />
        )}
        <h3>Edit sectors here</h3>

        <hr />

        <form>
          <p>
            Select sector<span>*</span>
          </p>
          <div className="sector-checkbox">
            {sectors.map((sector) => (
              <div key={sector.id} className="item">
                <input
                  type="radio"
                  id={sector.id}
                  name="sector"
                  value={sector.name}
                  required
                  onChange={() => handleSectorRadioBtn(sector.id)}
                />
                <label htmlFor="agreement">{sector.name}</label>
              </div>
            ))}
          </div>

          <div className="item">
            <label htmlFor="division">
              Division<span>*</span>
            </label>
            <div className="input-add-btn">
              <input
                type="text"
                id="division"
                name="division"
                value={division}
                placeholder="Input division..."
                onChange={(e) => setDivision(e.target.value)}
              />
              <button onClick={addDivision}>Add</button>
            </div>
            <div className="group-tags">
              {divisions.map((division) => (
                <Tag key={division.id} {...division} data={division} />
              ))}
            </div>
          </div>

          <div className="item">
            <label htmlFor="sectors">
              Select division to add group to<span>*</span>
            </label>
            <div id="divisions" className="item__division">
              <select id={division.id} onChange={(e) => handleDivisionSelection(e)}>
                <option style={{ color: 'gray' }}>select option</option>
                {divisions.map((division) => (
                  <option key={division.id} id={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="item">
            <label htmlFor="group">Add group</label>
            <div className="input-add-btn">
              <input
                type="text"
                id="group"
                name="name"
                value={group}
                placeholder="Input group..."
                onChange={(e) => setGroup(e.target.value)}
              />
              <button onClick={addGroup}>Add</button>
            </div>
            <div className="group-tags">
              {groups.map((group) => (
                <Tag key={group.id} {...group} data={group} />
              ))}
            </div>
          </div>

          <div className="add-class" onClick={() => setOpenClassModal(true)}>
            <p>Add/Remove class?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
