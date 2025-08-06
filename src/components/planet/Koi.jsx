//components/planet/Koi.jsx

// PANNS-GODの化身「Koi」：Planet周回しながら詩的メッセージを発信
import { Html } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

export default function Koi({ count = 5, activeSector = 1, visible = true }) {
  const group = useRef();

  const koiTextures = useLoader(TextureLoader, [
    '/images/koi/koi1.webp',
    '/images/koi/koi2.webp',
    '/images/koi/koi3.webp',
  ]);

  const baseRadius = 7;

  const phrasesBySector = {
    1: ['光があふれる', '遊泳中', '夢と希望'],
    2: ['遊泳中', 'われは神', '永遠'],
    3: ['次の旅はいずこへ', '偉大なり', '超越した存在'],
    4: ['われらは永遠なり', 'ははははは'],
    5: ['われが吐き出すコアが世界を動かす', 'ここからの景色は最高だ'],
  };

  const phrases = phrasesBySector[activeSector] ?? ['ようこそ'];

  const koiRefs = Array.from({ length: count }, () => useRef());

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    koiRefs.forEach((ref, i) => {
      const angle = (i / count) * Math.PI * 2 + t * 0.1;
      const radius = baseRadius + Math.sin(t * 0.5 + i) * 0.5;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(t * 0.6 + i) * 0.4 + 4.8; // 上空でゆらぐY位置

      if (ref.current) {
        ref.current.position.set(x, y, z); // 🐟 鯉はXZ軌道上のY揺らぎへ
      }
    });
  });

  return (
    <group ref={group} visible={visible}>
      {koiRefs.map((ref, i) => (
        <group key={i} ref={ref}>
          {/*  Koiのスプライト */}
          <sprite scale={[0.8, 0.8, 0.8]} renderOrder={60}>
            <spriteMaterial
              map={koiTextures[i % koiTextures.length]}
              color="white"
              opacity={0.85}
              transparent={true} // ✅ 透明部分を有効にする
              depthWrite={false} // ✅ 背後のオブジェクトと干渉しないように
            />
          </sprite>

          {/* セリフ（距離感維持） */}
          <Html distanceFactor={12}>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                color: '#333',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
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
