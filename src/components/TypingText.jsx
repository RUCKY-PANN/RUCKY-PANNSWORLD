// src/components/common/TypingText.jsx
import { useEffect, useState } from 'react';

export default function TypingText({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="typing-text">{displayed}</p>;
}
