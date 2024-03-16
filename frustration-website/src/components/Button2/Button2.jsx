import React, { useState } from 'react';
import styles from './Button2.module.css'; // Importing the CSS file for styling

export const Button2 = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div>
    <button className={styles.moveButton} style={{ left: position.x + 100, top: position.y + 100 }} onClick={handleClick} onMouseEnter={handleClick}>
      What's this!
    </button>
    </div>
  );
};
