import { areaData } from '@/planetData/areaData.jsx';
import { Html } from '@react-three/drei';
import { useState } from 'react';
import styles from './SectorDialog.module.css';

export default function SectorDialog({ sectorId, onClose, position }) {
  const sector = areaData.find((area) => area.id === sectorId);
  if (!sector) return null;
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // アニメーション後に閉じる
    }, 500); // fade-out duration に合わせる
  };

  return (
    <Html position={position} transform pointerEvents="auto">
      <div
        className={`${styles.dialogWrapper} ${isClosing ? styles['fade-out'] : styles['fade-in']}`}
      >
        <div className={styles.circleEffect}></div>

        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="閉じる"
        >
          --
        </button>
        <img src={sector.imageUrl} alt={sector.name} className={styles.image} />
        <h2>{sector.name}</h2>
        <p style={{ fontSize: '0.9rem' }}>{sector.description}</p>
      </div>
    </Html>
  );
}
