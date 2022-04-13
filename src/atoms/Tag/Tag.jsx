import React from 'react';
import axios from 'axios';
import { useAppContext } from '../../utils/AppContext';
import { AiOutlineClose } from 'react-icons/ai';
import './Tag.scss';

const Tag = ({ name, id, data }) => {
  const { getData, setDivisions, setGroups, setClasses } = useAppContext();

  const deleteItem = async () => {
    if (data.sectorId) {
      try {
        const resTwo = await axios.post(`http://localhost:4000/group/deleteAll`, { divisionId: data.id });
        const groupsArray = resTwo.data.groups;
        getData('group', data.id, setGroups);

        groupsArray.map(async (group) => {
          await axios.post(`http://localhost:4000/class/deleteAll`, { groupId: group.id });
          getData('class', group.id, setClasses);
        });

        const resOne = await axios.post(`http://localhost:4000/division/delete`, { id, sectorId: data.sectorId });
        console.log(resOne.data.message);
        getData('division', data.sectorId, setDivisions);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (data.divisionId) {
      try {
        await axios.post(`http://localhost:4000/class/deleteAll`, { groupId: data.id });
        getData('class', data.id, setClasses);

        const resOne = await axios.post(`http://localhost:4000/group/delete`, { id, divisionId: data.divisionId });
        console.log(resOne.data.message);
        getData('group', data.divisionId, setGroups);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (data.groupId) {
      try {
        const res = await axios.post(`http://localhost:4000/class/delete`, { id, groupId: data.groupId });
        console.log(res.data.message);
        getData('class', data.groupId, setClasses);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="tag__container">
      <p>{name}</p>
      <AiOutlineClose onClick={deleteItem} />
    </div>
  );
};

export default Tag;
