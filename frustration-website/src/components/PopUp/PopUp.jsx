import React, { useState } from 'react';
import styles from './PopUp.module.css';

const PopUp = ({ imageUrl, caption, onClose }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    const handleOpenPopUp = () => {
      setShowPopUp(true);
    };

    const handleClosePopUp = () => {
      setShowPopUp(false);
    };

    return (
        <div>
          <button onClick={handleOpenPopUp}>Open Pop-Up</button>
          {showPopUp && (
            <div className={styles.popUp}>
              <div className={styles.topBar}>
                <button className={styles.closeButton} onClick={handleClosePopUp}>
                  X
                </button>
              </div>
              <div className={styles.content}>
                <img src={imageUrl} alt="Pop-up" className={styles.image} />
                <p className={styles.caption}>{caption}</p>
              </div>
            </div>
          )}
        </div>
      );
    };
    export default PopUp;