// Continent.jsx
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Continent({ area }) {
  const texture = useLoader(TextureLoader, area.textureUrl);

  return (
    <mesh position={area.position} scale={area.scale}>
      <sphereGeometry args={[area.height, 32, 32]} />
      <meshStandardMaterial
        map={texture} // テクスチャ画像（模様など）
        color={area.color} // ベース色
        roughness={0.7} // マット具合（0=ツルツル, 1=ざらざら）
        metalness={0.1} // 金属っぽさ（0=無, 1=完全金属）
        transparent={true} // α有効にする
        alphaTest={0.1} // αテスト（必要なら）
      />
    </mesh>
  );
}
