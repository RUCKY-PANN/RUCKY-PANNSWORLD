// src/planetData/PlanetContext.jsx
import { createContext, useContext, useState } from 'react';

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [activeArea, setActiveArea] = useState('other'); // ← 初期値を 'other' にして安全に
  const [planetState, setPlanetState] = useState({});
  const [currentState, setCurrentState] = useState({});

  const value = {
    currentState,
    planetState,
    activeArea,
    setActiveArea,
    setPlanetState,
    setCurrentState,
  };

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};

export const usePlanetContext = () => useContext(PlanetContext);
