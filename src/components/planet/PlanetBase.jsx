//src/components/planet/PlanetBase.jsx
import { usePlanetContext } from '@/planetData/PlanetContext';
import { areaData } from '@/planetData/areaData';
import airFragmentShader from '@/shaders/airFragmentShader.glsl?raw';
import fragmentShader from '@/shaders/planetFragmentShader.glsl?raw';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import AreaTrigger from './AreaTrigger';

//パーティクル
import Firework from './Firework';

export default function PlanetBase({
  activeSector = null,
  setActiveSector,
  areas,
}) {
  const [fireworks, setFireworks] = useState([]);
  const { setActiveArea } = usePlanetContext();
  const sectionTexture = useTexture('/images/planet/planet_cross_section.webp');
  const airTexture = useTexture('/images/planet/upper3.webp');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!areas || areas.length === 0) return;

      const randomArea = areas[Math.floor(Math.random() * areas.length)];
      if (!randomArea?.ref?.current) return;

      const worldPosition = new THREE.Vector3();
      randomArea.ref.current.getWorldPosition(worldPosition);

      const scaledPosition = worldPosition.clone().divideScalar(2.2);

      setFireworks((prev) => [
        ...prev,
        {
          id: `fw-${Date.now()}`,
          position: scaledPosition,
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [areas]);

  const vertexShaderCode = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    mvPosition.z -= 0.0005;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertexShaderCode,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
        },
        transparent: true,
        side: THREE.DoubleSide,
      }),
    [fragmentShader],
  );

  const materialAir = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: airFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: airTexture },
        },
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: false,
      }),
    [airFragmentShader, airTexture],
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    material?.uniforms?.uTime && (material.uniforms.uTime.value = elapsed);
    materialAir?.uniforms?.uTime &&
      (materialAir.uniforms.uTime.value = elapsed);
  });

  const applyOffset = (position, offset = [-0.1, 0, 0]) => {
    if (!Array.isArray(position)) return [0, 0, 0];
    return position.map((v, i) => v + offset[i]);
  };

  const fallbackState = {
    theme: 'light',
    glowEnabled: false,
  };

  return (
    <group name="PlanetBase">
      <ambientLight intensity={0.6} />
      <pointLight intensity={2.0} position={[4, 4, 4]} />

      {/* 空気層 */}
      <mesh position={[0, 4, 0]} scale={[8.5, 8.5, 8.5]} renderOrder={56}>
        <sphereGeometry
          args={[1.0, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          polygonOffsetFactor={10}
          polygonOffsetUnits={10}
        />
        <primitive object={materialAir} attach="material" />
      </mesh>

      {/* 断面 */}
      {sectionTexture && (
        <mesh
          position={[0, -0.05, 0]} //
          rotation={[Math.PI / 2, 0, 0]}
          scale={[5.2, 5.2, 1]}
          renderOrder={55} //
        >
          <planeGeometry args={[3, 3]} />

          <meshBasicMaterial
            transparent
            map={sectionTexture}
            opacity={1.0}
            side={THREE.DoubleSide}
            depthWrite={false}
            polygonOffset={false}
            polygonOffsetFactor={5}
            polygonOffsetUnits={5}
          />
        </mesh>
      )}

      {/* 下半球 */}

      <mesh
        position={[0, 0, 0]}
        scale={[5.2, 5.2, 5.2]}
        material={material}
        renderOrder={40}
      >
        <sphereGeometry
          args={[1.5, 64, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]}
        />
      </mesh>

      {/* パーティクル群 */}
      {fireworks.map((fw) => (
        <Firework key={fw.id} position={fw.position} />
      ))}

      {/* トリガー */}
      {areaData.map(({ id, name, position, sector }) => {
        if (!Array.isArray(position)) return null;
        const visual = fallbackState;
        if (activeSector !== null && sector !== activeSector) return null;
        const finalPosition = applyOffset(position);
        return (
          <AreaTrigger
            key={id}
            id={id}
            label={name}
            position={finalPosition}
            theme={visual.theme}
            glowEnabled={visual.glowEnabled}
            onClick={() => {
              setActiveArea(id);
              setActiveSector?.(id);
            }}
          />
        );
      })}
    </group>
  );
}
