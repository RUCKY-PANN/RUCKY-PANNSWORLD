//components/planet/AtmosphericLayer.js

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function AtmosphericLayer() {
  const meshRef = useRef();
  const timeUniform = useRef({ value: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    timeUniform.current.value = t;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} renderOrder={1}>
      <sphereGeometry args={[10, 64, 64]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        depthTest={false} // ← 描画の干渉も排除できる
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: timeUniform.current,
        }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vNormal;
          uniform float uTime;

          vec3 rainbow(float t) {
            return vec3(
              0.5 + 0.5 * sin(t + 0.0),
              0.5 + 0.5 * sin(t + 2.0),
              0.5 + 0.5 * sin(t + 4.0)
            );
          }

          void main() {
            float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.8);
            vec3 color = rainbow(uTime * 0.5);
           // ↓ 元の記述（これを置き換える）
          // gl_FragColor = vec4(color * intensity, intensity * 0.25);
          // ✨ 替わりに入れる例①：より薄く
          gl_FragColor = vec4(color * intensity, intensity * 0.05);

          // ✨ 替わりに入れる例②：蒼ベースにして幻想感アップ
          // vec3 baseColor = vec3(0.2, 0.4, 0.8);
        // gl_FragColor = vec4(mix(baseColor, color, 0.5) * intensity, intensity * 0.2);
          }
        `}
      />
    </mesh>
  );
}
