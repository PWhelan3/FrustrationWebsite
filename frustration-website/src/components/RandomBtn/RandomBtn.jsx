import React, { useState } from 'react';
import styles from "./RandomBtn.module.css";

export const RandomBtn = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = () => {
    const newX = getRandomPosition(window.innerWidth);
    const newY = getRandomPosition(window.innerHeight);
    setPosition({ x: newX, y: newY });
  };

  const getRandomPosition = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'black',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Move Me Randomly
    </button>
  );
};
