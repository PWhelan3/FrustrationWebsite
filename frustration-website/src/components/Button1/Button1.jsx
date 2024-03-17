import React, { useState } from 'react';
import styles from './Button1.module.css'; // Importing the CSS file for styling

export const Button1 = () => {
  const [position, setPosition] = useState({ x: 700, y: 800 });

  const handleClick = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight -200;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

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
