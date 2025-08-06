//  楕円形アウトライン生成関数
export function generateEllipseOutline(
  cx,
  cz,
  rx = 0.5,
  rz = 0.3,
  steps = 8,
  angleOffset = 0,
) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (2 * Math.PI * i) / steps + angleOffset;
    const x = cx + Math.cos(angle) * rx;
    const z = cz + Math.sin(angle) * rz;
    points.push([x, z]);
  }
  return points;
}

// 🧭 放射状の位置計算補助関数
export function getPolarPosition(angleDeg, radius) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = Math.cos(angleRad) * radius;
  const z = Math.sin(angleRad) * radius;
  return [x, 0, z];
}

// 🧩 各エリアの初期設定マップ
export const rawShapeMap = {
  panda: {
    angle: 75,
    distance: 5,
    radius: [0.5, 0.3],
    borderColor: '#8BC34A',
    trigger: 'panda-dialog',
    textureUrl: '/images/planet/panda.webp',
    height: 0.35,
    scale: [1, 5, 1],
  },
  cat: {
    angle: 85,
    distance: 4.0,
    radius: [0.2, 0.2],
    borderColor: '#118e14',
    trigger: 'cat-dialog',
    textureUrl: '/images/planet/cat.webp',
    height: 1.6,
    scale: [1, 1, 10],
    gradient: 'lime-to-green',
    reflection: 0.5,
    waterColor: '#55DDE0',
  },
  bear: {
    angle: 50,
    distance: 4.8,
    radius: [0.2, 0.2],
    borderColor: '#FF7043',
    trigger: 'bear-dialog',
    textureUrl: '/images/planet/bear.webp',
    height: 0.4,
    scale: [4, 1, 1],
  },
  hipo: {
    angle: 105,
    distance: 5.5,
    radius: [0.3, 0.3],
    borderColor: '#4DD0E1',
    trigger: 'hipo-dialog',
    textureUrl: '/images/planet/hipo.webp',
    height: 0.5,
    scale: [1, 1, 1],
  },
  penguin: {
    angle: 200,
    distance: 6.8,
    radius: [0.5, 0.4],
    borderColor: '#ffffff',
    trigger: 'penguin-dialog',
    textureUrl: '/images/planet/penguin.webp',
    height: 0.1,
    scale: [1.2, 1, 2],
  },
  dog: {
    angle: 165,
    distance: 6,
    radius: [0.5, 0.5],
    borderColor: '#00BCD4',
    trigger: 'dog-dialog',
    textureUrl: '/images/planet/dog.webp',
    height: 0.3,
    scale: [1, 1, 1],
  },
  koala: {
    angle: 140,
    distance: 6,
    radius: [0.2, 0.2],
    borderColor: '#037b34',
    trigger: 'koala-dialog',
    textureUrl: '/images/planet/koala.webp',
    height: 1.2,
    scale: [1, 1, 1],
  },
  other: {
    angle: 360,
    distance: 6.8,
    radius: [0.3, 0.224],
    borderColor: '#0097A7',
    trigger: 'other-dialog',
    textureUrl: '/images/planet/other.webp',
    height: 0.2,
    scale: [1, 5, 1],
  },
  tanuki: {
    angle: 255,
    distance: 5,
    radius: [0.33, 0.3],
    borderColor: '#00ACC1',
    trigger: 'tanuki-dialog',
    textureUrl: '/images/planet/tanuki.webp',
    height: 0.5,
    scale: [1, 1, 1],
  },
  companion: {
    angle: 285,
    distance: 2.9,
    radius: [0.3, 0.3],
    borderColor: '#80DEEA',
    trigger: 'companion-dialog',
    textureUrl: '/images/planet/companion.webp',
    height: 0.5,
    scale: [1, 1, 1],
  },
  event: {
    angle: 315,
    distance: 3.8,
    radius: [0.35, 0.3],
    borderColor: '#FFCA28',
    trigger: 'event-dialog',
    textureUrl: '/images/planet/event.webp',
    height: 0.5,
    scale: [1, 1, 1],
  },
  dark: {
    angle: 345,
    distance: 2.7,
    radius: [0.4, 0.4],
    borderColor: '#006064',
    trigger: 'dark-dialog',
    textureUrl: '/images/planet/dark.webp',
    height: 2,
    scale: [1, 1, 1],
  },
  rp: {
    angle: 0,
    distance: 0.0,
    radius: [1, 1],
    borderColor: '#0097A7',
    trigger: 'rp-dialog',
    textureUrl: '/images/planet/rp.webp',
    height: 1.5,
    scale: [1, 1, 1],
  },
};

// 🌍 各エリアごとの拡張設定
export const continentShapeMap = Object.fromEntries(
  Object.entries(rawShapeMap).map(([id, config]) => {
    const position = getPolarPosition(config.angle, config.distance);
    const [x, , z] = position;
    const [rx, rz] = config.radius ?? [0.5, 0.3];
    const angleOffset = (config.angle * Math.PI) / 180;
    const outline = generateEllipseOutline(0, 0, rx, rz, 8, angleOffset); // そのまま

    // ✨個別演出パラメータ（例）
    const visualEffectMap = {
      panda: {
        gradient: 'lime-to-green',
        reflection: 0.5,
        waterColor: '#55DDE0',
      },
      cat: { gradient: 'cyan-to-blue', reflection: 0.3, waterColor: '#55DDE0' },
      bear: {
        gradient: 'orange-to-red',
        reflection: 0.4,
        waterColor: '#55DDE0',
      },
      hipo: {
        gradient: 'aqua-to-teal',
        reflection: 0.6,
        waterColor: '#55DDE0',
      },
      penguin: {
        gradient: 'white-to-lightblue',
        reflection: 0.2,
        waterColor: '#55DDE0',
      },
      dog: { gradient: 'cyan-to-navy', reflection: 0.5, waterColor: '#55DDE0' },
      koala: {
        gradient: 'skyblue-to-gray',
        reflection: 0.3,
        waterColor: '#55DDE0',
      },
      other: {
        gradient: 'deepblue-to-teal',
        reflection: 0.2,
        waterColor: '#55DDE0',
      },
      tanuki: {
        gradient: 'blue-to-green',
        reflection: 0.4,
        waterColor: '#55DDE0',
      },
      companion: {
        gradient: 'lightblue-to-silver',
        reflection: 0.7,
        waterColor: '#55DDE0',
      },
      event: {
        gradient: 'gold-to-yellow',
        reflection: 0.6,
        waterColor: '#55DDE0',
      },
      dark: {
        gradient: 'darkblue-to-black',
        reflection: 0.8,
        waterColor: '#55DDE0',
      },
      rp: {
        gradient: 'turquoise-to-cobalt',
        reflection: 1.0,
        waterColor: '#55DDE0',
      },
    };

    const { gradient, reflection } = visualEffectMap[id];
    const displayRadius = (rx + rz) / 2 || 0.5;
    return [
      id,
      {
        ...config,
        position,
        outline,
        gradient, // 🌈 グラデーション（表面演出）
        reflection, // 💡 光反射率
        visible: true,
        displayRadius, // ✅ ← SphereGeometry 用に使える値
      },
    ];
  }),
);
