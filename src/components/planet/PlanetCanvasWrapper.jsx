import { useEffect, useState } from 'react';
import PlanetCanvas from './PlanetCanvas.jsx';
export default function PlanetCanvasWrapper() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return <PlanetCanvas />;
}
