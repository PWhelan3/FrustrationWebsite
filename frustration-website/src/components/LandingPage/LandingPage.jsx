import React from 'react';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
  const handleButtonClick = () => {
    alert("You clicked the button. But nothing happens. Frustrating, isn't it?");
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Frustration.com</h1>
      <p className={styles.paragraph}>The most frustrating website on the internet!</p>
      <form className={styles.form}>
        <label htmlFor="email">Enter your email:</label><br />
        <input type="email" id="email" className={styles.form-input} /><br />
        <button type="submit" className={styles.form-btn}>Subscribe Now</button>
      </form>
      <button onClick={handleButtonClick} className={styles.button}>Click Me</button>
      <div className={styles.copy-wrapper}>
        <p className={styles.copy-text}>© 2024 Frustration.com. All rights reserved.</p>
      </div>
    </div>
  );
};
