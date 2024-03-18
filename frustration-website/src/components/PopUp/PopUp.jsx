import React from 'react';
import styles from './PopUp.module.css';

export const PopUp = () => {
  return (
    <div className={styles.popUp}>
      <div className={styles.topBar}>
        <button className={styles.closeButton}>X</button>
      </div>
      <div className={styles.content}>
        <img src="../assets/moonSmall.png" alt="Pop-up" className={styles.image} />
        <p className={styles.caption}>This is a retro pop-up!</p>
      </div>
    </div>
  );
};
