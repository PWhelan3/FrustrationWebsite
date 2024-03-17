import React, { useState } from 'react';
import styles from './Button2.module.css'; // Importing the CSS file for styling

export const Button2 = () => {
  const [position, setPosition] = useState({ x: 500, y: 300 });

  const handleClick = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
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
