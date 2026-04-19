import React, { useEffect, useState } from 'react';

export const Typewriter = ({ texts }: { texts: string[] }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="text-[var(--color-cyan)] text-glow">
      {text}
      <span className="animate-pulse inline-block w-[2px] h-[1em] align-middle bg-[var(--color-cyan)] ml-1"></span>
    </span>
  );
};
