import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../../utils/AppContext';
import './Home.scss';

const Home = () => {
  const [edit, setEdit] = useState(false);

  // For the form
  const [name, setName] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedAgreement, setSelectedAgreement] = useState('');

  const [userDivisions, setUserDivisions] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [userClasses, setUserClasses] = useState([]);

  const { sectors, getData } = useAppContext();

  const handleSelection = (e, table, state, dataState) => {
    const index = e.target.selectedIndex;
    dataState(e.target.value);
    const el = e.target.childNodes[index];
    const id = el.getAttribute('id');
    getData(table, id, state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem('userId'));
    const form = {
      name,
      sector: selectedSector,
      division: selectedDivision,
      group: selectedGroup,
      class: selectedClass,
      agreement: JSON.stringify(selectedAgreement)
    };

    if (!userId) {
      createUser(form);
    } else {
      form.id = userId;
      form.updatedAt = new Date();
      editUser(form);
    }
    setEdit(true);
  };

  const createUser = async (form) => {
    try {
      const res = await axios.post(`http://localhost:4000/user/create`, form);
      const { sector, division, group, id } = res.data.userInfo;
      setSelectedClass(res.data.userInfo.class);
      setSelectedDivision(division);
      setSelectedGroup(group);
      setSelectedSector(sector);

      localStorage.setItem('userId', JSON.stringify(id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const editUser = async (form) => {
    try {
      const res = await axios.post(`http://localhost:4000/user/edit`, form);
      const { sector, division, group } = res.data.userInfo;
      setSelectedClass(res.data.userInfo.class);
      setSelectedDivision(division);
      setSelectedGroup(group);
      setSelectedSector(sector);
    } catch (error) {
      console.log(error.messages);
    }
  };

  const fetchUserData = async () => {
    const id = JSON.parse(localStorage.getItem('userId'));
    if (id) {
      try {
        const res = await axios.post(`http://localhost:4000/user/`, { id });
        const { name } = res.data.user;
        setName(name);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="home__container">
      <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Your name..."
            required
            onChange={(e) => setName(e.target.value)}
            disabled={edit ? true : false}
          />
        </div>

        <div className="item">
          <label htmlFor="sectors">
            Sectors<span>*</span>
          </label>
          <div id="sectors" className="item__sector">
            <select
              value={selectedSector}
              onChange={(e) => handleSelection(e, 'division', setUserDivisions, setSelectedSector)}
              disabled={edit ? true : false}
            >
              <option style={{ color: 'gray' }}> </option>
              {sectors.map((sector) => (
                <option key={sector.id} id={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {userDivisions.length > 0 && (
          <div className="item">
            <label htmlFor="divisions">
              Divisions<span>*</span>
            </label>
            <div id="divisions" className="item__sector">
              <select
                value={selectedDivision}
                onChange={(e) => handleSelection(e, 'group', setUserGroups, setSelectedDivision)}
                disabled={edit ? true : false}
              >
                <option style={{ color: 'gray' }}> </option>
                {userDivisions.map((division) => (
                  <option key={division.id} id={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {userGroups.length > 0 && (
          <div className="item">
            <label htmlFor="groups">
              Groups<span>*</span>
            </label>
            <div id="groups" className="item__sector">
              <select
                value={selectedGroup}
                onChange={(e) => handleSelection(e, 'class', setUserClasses, setSelectedGroup)}
                disabled={edit ? true : false}
              >
                <option style={{ color: 'gray' }}> </option>
                {userGroups.map((group) => (
                  <option key={group.id} id={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {userClasses.length > 0 && (
          <div className="item">
            <label htmlFor="classes">
              Classes<span>*</span>
            </label>
            <div id="classes" className="item__sector">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                disabled={edit ? true : false}
              >
                <option style={{ color: 'gray' }}> </option>
                {userClasses.map((item) => (
                  <option key={item.id} id={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div className="item agreement">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            onChange={(e) => setSelectedAgreement(e.target.checked)}
            disabled={edit ? true : false}
          />
          <label htmlFor="agreement">Agree to terms</label>
        </div>

        <div className="form-buttons">
          <div className="item">
            <input type="submit" name="Save" value="Save" onSubmit={handleSubmit} disabled={edit ? true : false} />
          </div>
          {edit && (
            <div className="item">
              <button onClick={() => setEdit(false)}>Edit</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Home;
