// FingerHint.jsx

const hints = [
  {
    left: '85%',
    top: '65%',
    image: '/images/planet/cursor2.webp',
    direction: 'vertical',
  },
  {
    left: '50%',
    top: '85%',
    image: '/images/planet/cursor.webp',
    direction: 'horizontal',
  },
];

export default function FingerHint() {
  return (
    <>
      {hints.map((hint, i) => (
        <div
          key={i}
          className={`finger-hint ${hint.direction === 'vertical' ? 'swing-vertical' : 'swing-horizontal'}`}
          style={{
            left: hint.left,
            top: hint.top,
            backgroundImage: `url(${hint.image})`,
          }}
        />
      ))}
    </>
  );
}
