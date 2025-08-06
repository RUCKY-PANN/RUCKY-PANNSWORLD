//components/planet/PlanetScene.jsx

import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState } from 'react';
import AirLine from './AirLine';
import ContinentLayer from './ContinentLayer';
import Firework from './Firework';
import Koi from './Koi';
import PlanetBase from './PlanetBase';

export default function PlanetScene() {
  const [dialogPosition, setDialogPosition] = useState([0, 0, 0]); // 位置情報
  const [activeSector, setActiveSector] = useState(null); // アクティブなセクターID

  return (
    <>
      {/* ライト追加 */}
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        position={[10, 20, 10]}
      />

      {/* AirLine */}
      <AirLine
        count={6}
        activeSector={activeSector ?? 1}
        visible={true}
        yBounds={{ min: 45, max: 50 }} //  Y高さ制御用の範囲
      />
      {/* KOI 空間演出 */}
      <Koi
        count={5}
        activeSector={activeSector ?? 1}
        visible={true}
        yBounds={{ min: 70, max: 100 }} //  Y高さ制御用の範囲
      />
      {/* 大陸地形構造表示 */}
      <ContinentLayer
        setActiveSector={setActiveSector}
        setDialogPosition={setDialogPosition}
      />
      {/* 大陸　断面図とトリガー */}
      <PlanetBase
        activeSector={activeSector}
        setActiveSector={setActiveSector}
      />
      {/* パーティクル */}
      <Firework position={[0.2, 1, 0]} />
      {/* 大陸情報ダイアログ */}

      {/* 視点操作など */}
      <PerspectiveCamera makeDefault position={[0, 20, 40]} fov={30} />
      <OrbitControls
        minDistance={10} // 最小ズーム（離れられる限界）
        maxDistance={30} // 最大ズーム（近づける限界）
        enableZoom={true}
        zoomSpeed={0.5}
      />
      <Html center>{/* HUD or Debug UI */}</Html>
    </>
  );
}
