import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [sectors, setSectors] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [groups, setGroups] = useState([]);
  const [classes, setClasses] = useState([]);

  const getSectors = async () => {
    try {
      const res = await axios.get('http://localhost:4000/sector/all');
      setSectors(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getData = async (table, secondaryId, state) => {
    let bodyObjKey;

    if (table === 'division') {
      bodyObjKey = 'sectorId';
    }

    if (table === 'group') {
      bodyObjKey = 'divisionId';
    }

    if (table === 'class') {
      bodyObjKey = 'groupId';
    }

    try {
      const res = await axios.post(`http://localhost:4000/${table}/all`, { [bodyObjKey]: secondaryId });
      if (state) {
        state(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSectors();
  }, []);

  const value = { sectors, divisions, setDivisions, groups, setGroups, classes, setClasses, getData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
