// components/planet/AreaTrigger.jsx
import { continentShapeMap } from '@/planetData/continentShapeMap';
import { useCursor } from '@react-three/drei';
import { useMemo, useState } from 'react';
import * as THREE from 'three';

export default function ContinentLayer({ showDialog }) {
  return (
    <group>
      {Object.entries(continentShapeMap).map(([id, data]) => {
        const { outline, borderColor, position, trigger } = data;

        // フラット地形の構成（ShapeGeometry）
        const geometry = useMemo(() => {
          const shape = new THREE.Shape();
          outline.forEach(([x, y], index) =>
            index === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y),
          );
          shape.lineTo(outline[0][0], outline[0][1]); // 閉じる
          return new THREE.ShapeGeometry(shape);
        }, [outline]);

        // マテリアル：色付き、両面描画、安全な fallback
        const material = useMemo(
          () =>
            new THREE.MeshStandardMaterial({
              color: new THREE.Color(borderColor ?? '#ff00ff'), // fallback: 鮮やか紫
              flatShading: true,
              side: THREE.DoubleSide,
            }),
          [borderColor],
        );
        const [hovered, setHovered] = useState(false);
        useCursor(hovered); // "pointer" に切り替わる
        return (
          <mesh
            key={id}
            geometry={geometry}
            material={material}
            position={position ?? [0, 0.5, 0]} // ⬆️ 微浮上で沈み込み防止
            rotation={[-Math.PI / 2, 0, 0]} // ⬅️ 正しい向きに補正
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            name={`continent-${id}`}
            onClick={() => {
              console.log(`Clicked: ${id}`);
              if (typeof showDialog === 'function' && trigger) {
                showDialog(trigger);
              } else {
                console.warn('Dialog not triggered:', trigger);
              }
            }}
          />
        );
      })}
    </group>
  );
}
