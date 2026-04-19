import React, { useEffect, useState } from 'react';

export const Stars = () => {
  const [stars, setStars] = useState<{ id: number; top: string; size: string; animationDuration: string; animationDelay: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      animationDuration: `${Math.random() * 15 + 5}s`,
      animationDelay: `-${Math.random() * 20}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-x-0 inset-y-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-0 animate-star-drift"
          style={{
            top: star.top,
            right: '-10%',
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
