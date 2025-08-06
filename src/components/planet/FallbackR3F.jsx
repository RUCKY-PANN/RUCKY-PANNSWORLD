// src/components/planet/FallbackR3F.jsx
import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';

function LoadingCircle() {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid rgba(173, 216, 230, 0.3)',
        borderTop: '4px solid #ddf',
        borderRadius: '50%',
        animation: 'spin 1.2s linear infinite',
        boxShadow: '0 0 8px #ddf',
      }}
    />
  );
}

export default function FallbackR3F() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Html center>
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 1.2s ease-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#ddf',
          background: 'rgba(0, 20, 40, 0.6)',
          padding: '1.2em',
          borderRadius: '12px',
          backdropFilter: 'blur(6px)',
          fontSize: '0.95rem',
          fontFamily: 'system-ui, sans-serif',
          width: '220px',
        }}
      >
        <LoadingCircle />
        <div style={{ marginTop: '0.8em' }}>＜Loading...＞</div>
      </div>
    </Html>
  );
}
