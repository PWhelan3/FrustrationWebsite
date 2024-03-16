import React, { useState } from 'react';
import styles from './Button1.module.css'; // Importing the CSS file for styling

export const Button1 = () => {
  const [position, setPosition] = useState({ x: 200, y: 200 });

  const handleClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div>
    <button className={styles.moveButton} style={{ left: position.x, top: position.y }} onClick={handleClick} onMouseEnter={handleClick}>
      Click Me!
    </button>
    </div>
  );
};
