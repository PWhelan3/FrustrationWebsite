import React, { useState, useEffect } from 'react';
import styles from './MouseAwareButton.module.css';



export const MouseAwareButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    
    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Adjust the time here for how long the button stays visible after mouse stops moving
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className={styles.container}>
      {isVisible && (
        <button
          onClick={handleClick}
          className={styles.btn}
        >
          Mouse-aware Button
        </button>
      )}
    </div>
  );
};
