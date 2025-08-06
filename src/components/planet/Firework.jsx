import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export default function Firework({ position }) {
  const ref = useRef();
  const count = 100;

  // 🔧 mutable な参照で配列を保持
  const positionsRef = useRef(new Float32Array(count * 4));
  const velocitiesRef = useRef(new Float32Array(count * 4));

  // 🧨 初期化ロジック
  useMemo(() => {
    for (let i = 0; i < count; i++) {
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      )
        .normalize()
        .multiplyScalar(Math.random() * 0.3 + 0.1);

      positionsRef.current.set([0, 0, 0], i * 3);
      velocitiesRef.current.set([dir.x, dir.y, dir.z], i * 3);
    }
  }, []);

  // 🔄 毎フレーム更新
  useFrame(() => {
    if (!ref.current) return;
    const pos = positionsRef.current;
    const vel = velocitiesRef.current;

    for (let i = 0; i < count * 3; i++) {
      pos[i] += vel[i] * 0.1;
    }

    // 🔁 更新を通知
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} position={position}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positionsRef.current}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color={'orange'}
        size={0.12}
        sizeAttenuation
        transparent
        opacity={1}
      />
    </points>
  );
}
