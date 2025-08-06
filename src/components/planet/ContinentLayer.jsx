//ContinentLayer.jsx
import { areaData } from '@/planetData/areaData';
import { continentShapeMap } from '@/planetData/continentShapeMap';
import { useTexture } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import SectorDialog from './SectorDialog';

export default function ContinentLayer({
  setActiveSector,
  setDialogPosition,
  onReady,
}) {
  const [activeId, setActiveId] = useState(null);
  const particleRef = useRef();

  useEffect(() => {
    if (onReady && particleRef.current) {
      requestAnimationFrame(() => onReady(particleRef));
    }
  }, [onReady]);

  const ContinentMesh = ({ shapeData }) => {
    const isTower = ['dark', 'cat'].includes(shapeData.id);

    const geometry = useMemo(() => {
      const radius = shapeData.radius?.[0] || 1;

      return new THREE.SphereGeometry(
        radius,
        64,
        32,
        // 0,
        //Math.PI * 2,
        //0,
        isTower ? Math.PI : Math.PI / 2,
      );
    }, [shapeData.id, shapeData.radius]);

    const texture = useTexture(shapeData.textureUrl);

    useEffect(() => {
      texture.center.set(0.5, 0.5);
      texture.rotation = 0;
      texture.repeat.set(1, 1);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.needsUpdate = true;
    }, [texture]);

    const material = useMemo(() => {
      return new THREE.MeshStandardMaterial({
        map: texture,
        metalness: shapeData.reflection || 0.3,
        roughness: 1.0 - (shapeData.reflection || 0.3),
        flatShading: false,
        side: THREE.DoubleSide,
        lights: true,
      });
    }, [texture, shapeData.reflection]);

    return (
      <mesh
        geometry={geometry}
        material={material}
        position={shapeData.position}
        rotation={[-Math.PI / 2, 0, 0]}
        name={`continent-${shapeData.id}`}
        scale={['dark', 'cat'].includes(shapeData.id) ? [1, 1, 5] : [1, 1, 1.5]}
        receiveShadow
        castShadow
        onClick={() => {
          setActiveSector(shapeData.id);
          setDialogPosition(shapeData.position);
          setActiveId(shapeData.id);
        }}
      />
    );
  };

  return (
    <>
      <group name="ContinentLayer">
        {areaData.map(({ id }) => {
          const shapeData = continentShapeMap[id];
          if (!shapeData || shapeData.visible === false) return null;
          shapeData.id = id; // shapeData に ID を埋め込み

          return (
            <group key={id}>
              <ContinentMesh shapeData={shapeData} />

              {id === 'rp' && (
                <mesh
                  receiveShadow
                  castShadow
                  ref={particleRef}
                  position={[
                    shapeData.position[0],
                    shapeData.height + 0.03,
                    shapeData.position[2],
                  ]}
                >
                  <sphereGeometry args={[0.12, 10, 50]} />
                  <meshStandardMaterial color="yellow" emissive="orange" />
                  {[...Array(80)].map((_, i) => {
                    const angle = (i / 100) * Math.PI * 5;
                    const radius = 0.6 + Math.random() * 0.1;
                    const px = Math.cos(angle) * radius;
                    const pz = Math.sin(angle) * radius;
                    const height = 0.1 + Math.random() * 0.2;

                    return (
                      <mesh
                        key={i}
                        position={[px, 0.1 / 2, pz]}
                        receiveShadow
                        castShadow
                      >
                        <boxGeometry args={[0.02, height, 0.02]} />
                        <meshStandardMaterial
                          color="#48f04c"
                          metalness={0.6}
                          roughness={0.3}
                          emissive="#22e127"
                        />
                      </mesh>
                    );
                  })}
                </mesh>
              )}
            </group>
          );
        })}
      </group>

      {activeId && (
        <SectorDialog
          sectorId={activeId}
          position={continentShapeMap[activeId]?.position}
          onClose={() => setActiveId(null)}
        />
      )}
    </>
  );
}
