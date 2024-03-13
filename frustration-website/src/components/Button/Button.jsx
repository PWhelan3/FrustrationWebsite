import React, { useState } from 'react';
import styles from './Button.module.css'; // Importing the CSS file for styling

export const Button = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <button className={styles.moveButton} style={{ left: position.x, top: position.y }} onClick={handleClick}>
      Click Me!
    </button>
  );
};
