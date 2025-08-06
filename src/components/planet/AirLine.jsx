//components/planet/AirLine.jsx

//AirLine
import { Html } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

export default function AirLine({
  count = 8,
  activeSector = 1,
  visible = true,
}) {
  const group = useRef();

  const NomadoTextures = useLoader(TextureLoader, [
    '/images/airline/AirLine.webp',
    '/images/airline/AirLine2.webp',
  ]);

  const baseRadius = 4;

  const phrasesBySector = {
    1: ['ノマドライン', 'ロイド達の交通手段', '大陸間交流に欠かせない'],
  };

  const phrases = phrasesBySector[activeSector] ?? ['ロイド達の交通手段こそ'];

  const NomadoRefs = Array.from({ length: count }, () => useRef());

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    NomadoRefs.forEach((ref, i) => {
      const angle = (i / count) * Math.PI * 2 + t * 0.1;
      const radius = baseRadius + Math.sin(t * 0.5 + i) * 0.5;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(t * 0.5 + i) * 0.3 + 1.8; // 上空でゆらぐY位置

      if (ref.current) {
        ref.current.position.set(x, y, z); // XZ軌道上のY揺らぎへ
      }
    });
  });

  return (
    <group ref={group} visible={visible}>
      {NomadoRefs.map((ref, i) => (
        <group key={i} ref={ref}>
          {/* スプライト */}
          <sprite scale={[0.2, 0.2, 0.2]} renderOrder={70}>
            <spriteMaterial
              map={NomadoTextures[i % NomadoTextures.length]}
              color="white"
              opacity={0.95}
              transparent={true} //  透明部分を有効にする
              depthWrite={false} // 背後のオブジェクトと干渉しないように
            />
          </sprite>

          {/* 説明 */}
          <Html distanceFactor={15}>
            <div
              style={{
                background: 'rgba(45,36,45,42.17)',
                padding: '4px 6px',
                borderRadius: '14px',
                fontSize: '0.4rem',
                color: '#fff',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                useSelect: 'none',
              }}
            >
              {phrases[i % phrases.length]}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
