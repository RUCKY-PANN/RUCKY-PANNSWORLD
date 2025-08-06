//components/planet/ShaderMateria.jsx
// Planetにまとわせるカスタムシェーダーレイヤー（時間・光表現用）
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { DoubleSide } from 'three';
import fragmentShader from '../../shaders/custom.frag?raw';
import vertexShader from '../../shaders/custom.vert?raw';

export default function ShaderMateria() {
  const ref = useRef();
  const { clock } = useThree();

  useFrame(() => {
    if (ref.current?.material?.uniforms?.time) {
      ref.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref} position={[0, 3, 0]}>
      <sphereGeometry args={[10, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={DoubleSide}
        uniforms={{
          time: { value: 0 },
          intensity: { value: 0.5 },
        }}
      />
    </mesh>
  );
}
