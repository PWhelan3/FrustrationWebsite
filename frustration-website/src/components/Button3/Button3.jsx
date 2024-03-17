import React, { useState } from 'react';
import styles from './Button3.module.css'; // Importing the CSS file for styling

export const Button3 = () => {
  const [position, setPosition] = useState({ x: 1000, y: 100 });

  const handleClick = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
      setPosition({ x: randomX, y: randomY });
  };

  return (
    <div>
    <button className={styles.moveButton} style={{ left: position.x  + 100, top: position.y + 100 }} onClick={handleClick} onMouseEnter={handleClick}>
      Next!
    </button>
    </div>
  );
};
