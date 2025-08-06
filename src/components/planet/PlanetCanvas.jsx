//components/planet/PlanetCanvas.jsx

import PlanetScene from './PlanetScene';

import { PlanetProvider } from '@/planetData/PlanetProvider';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FallbackR3F from './FallbackR3F';
export default function PlanetCanvas() {
  return (
    <PlanetProvider>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 5,
          overflow: 'hidden',
          zIndex: 0,
          backgroundColor: '#0000',
        }} // ← DOM側Canvasのスタイル
        gl={{
          alpha: true,
          preserveDrawingBuffer: true,
          antialias: true, // ← ギザギザ軽減
        }}
      >
        <Suspense fallback={<FallbackR3F />}>
          <PlanetScene />
        </Suspense>
      </Canvas>
    </PlanetProvider>
  );
}
