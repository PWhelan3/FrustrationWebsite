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
    <div>
    <button className={styles.moveButton} style={{ left: position.x, top: position.y }} onClick={handleClick} onMouseEnter={handleClick}>
      Click Me!
    </button>
    <button className={styles.moveButton} style={{ left: position.x, top: position.y }} onClick={handleClick} onMouseEnter={handleClick}>
      What's this!
    </button>
    <button className={styles.moveButton} style={{ left: position.x, top: position.y }} onClick={handleClick} onMouseEnter={handleClick}>
      Next!
    </button>
    </div>
  );
};
