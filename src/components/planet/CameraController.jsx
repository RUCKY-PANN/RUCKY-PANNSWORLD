// src/components/planet/CameraController.jsx

// Planetを見つめるカメラの動的制御コンポーネント
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

export default function CameraController({ target }) {
  const { camera } = useThree();
  const targetRef = useRef(new Vector3(0, 0, 0)); // ← Z軸から10 → Z軸 = 0 で正面視

  useEffect(() => {
    if (Array.isArray(target)) {
      const targetVec = new Vector3(...target);
      targetRef.current = targetVec;

      // 初期視点の位置も設定（例：斜め上から見下ろす）
      camera.position.set(targetVec.x, targetVec.y + 5, targetVec.z + 5);
      camera.lookAt(targetVec);
      camera.updateProjectionMatrix();
    }
  }, [target]);

  useFrame(() => {
    camera.position.lerp(targetRef.current, 0.1);
    camera.lookAt(
      targetRef.current.x,
      targetRef.current.y,
      targetRef.current.z,
    );
  });

  return null;
}
