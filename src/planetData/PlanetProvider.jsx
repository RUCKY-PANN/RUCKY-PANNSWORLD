// src/planetData/PlanetProvider.js
import { PlanetContext } from '@/planetData/PlanetContext';
import { useState } from 'react';

export const PlanetProvider = ({ children }) => {
  // 🌍 地理的なアクティブエリア)
  const [activeArea, setActiveArea] = useState(null);

  // 🧠 表示階層 ('upper', 'middle', 'lower')
  const [visibleSection, setVisibleSection] = useState('upper');

  // 🪓 断面図モードのON/OFF
  const [crossSectionView, setCrossSectionView] = useState(false);

  return (
    <PlanetContext.Provider
      value={{
        activeArea,
        setActiveArea,
        visibleSection,
        setVisibleSection,
        crossSectionView,
        setCrossSectionView,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
