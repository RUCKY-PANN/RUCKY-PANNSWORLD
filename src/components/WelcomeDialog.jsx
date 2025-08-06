import { useEffect, useRef, useState } from 'react';

export default function WelcomeDialog() {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  if (!visible) return null;

  const [fadeClass, setFadeClass] = useState('fade-in');

  const closeDialog = () => {
    setFadeClass('fade-out');
    setTimeout(() => setVisible(false), 300); // アニメーション後に非表示
  };

  return (
    visible && (
      <div
        className={`welcome-dialog ${fadeClass}`}
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: dragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        <button onClick={closeDialog}>✖</button>
        <h2 className="welcome-title">ようこそRUCKY-PANNへ</h2>
        <h3>----Planet操作方法----</h3>
        <p className="welcome-msg">
          <br />
          ●球体:ドラッグ：回転ができます。
          <br />
          ●マウスボールや指で拡大操作も可能：大陸内のエリアはクリックできます。
        </p>
      </div>
    )
  );
}
