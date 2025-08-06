//src/planetData/areaData.jsx
const radius = 5.0; // 円弧半径
const center = [0, 0]; // 円弧の中心座標（x, z）

export const areaData = [
  {
    id: 'panda',
    name: 'パンダ',
    description: '山林資源と倫理AIの拠点が共存するエリア。竹が光る夜は特別。',
    imageUrl: '/images/planet/d_panda.png',
    angleDeg: 0,
  },
  {
    id: 'cat',
    name: 'cat',
    description: 'AirPort THE Tower',
    imageUrl: '/images/planet/d_cat.png',
    angleDeg: 35,
  },
  {
    id: 'koala',
    name: 'koala',
    description: 'The Utree U-Spehre',
    imageUrl: '/images/planet/d_koala.png',
    angleDeg: 60,
  },
  {
    id: 'bear',
    name: 'bear',
    description: 'R-P 資源保護エリア',
    imageUrl: '/images/planet/d_bear.png',
    angleDeg: 90,
  },
  {
    id: 'hipo',
    name: 'hipo',
    description: 'The HIPO DAM',
    imageUrl: '/images/planet/d_hipo.png',
    angleDeg: 120,
  },
  {
    id: 'tanuki',
    name: 'tanuki',
    description: 'The Zoon',
    imageUrl: '/images/planet/d_tanuki.png',
    angleDeg: 150,
  },
  {
    id: 'penguin',
    name: 'penguin',
    description: 'Aurora Vision',
    imageUrl: '/images/planet/d_penguin.png',
    angleDeg: 190,
  },
  {
    id: 'dog',
    name: 'dog',
    description: 'The Ariane Studium',
    imageUrl: '/images/planet/d_dog.png',
    angleDeg: 260,
  },

  {
    id: 'other',
    name: 'other',
    description: 'MOZ',
    imageUrl: '/images/planet/d_other.png',
    angleDeg: 300,
  },
  {
    id: 'companion',
    name: 'companion',
    description: 'Beautiful Gate Park',
    imageUrl: '/images/planet/d_companion.png',
    angleDeg: 200,
  },
  {
    id: 'event',
    name: 'event',
    description: 'WORLD MASTER CHAMPION SHIP',
    imageUrl: '/images/planet/d_event.png',
    angleDeg: 220,
  },
  {
    id: 'dark',
    name: 'dark',
    description: 'seculity THE Tallman',
    imageUrl: '/images/planet/d_dark.png',
    angleDeg: 290,
  },
  {
    id: 'rp',
    name: 'rp',
    description: 'AMP SYSTEM ROID ProdutSystem',
    imageUrl: '/images/planet/d_r-p.png',
    angleDeg: 360,
  },
].map((area) => {
  const rad = (area.angleDeg * Math.PI) / 230;
  const x = Math.cos(rad) * radius + center[0];
  const z = Math.sin(rad) * radius + center[1];
  return {
    ...area,
    position: [x, 1.98, z], // Y(高さ)は固定値 2 のまま
  };
});
