import React from 'react';
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Exit</a>
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <a className={styles.link} href="/">I need Help!</a>
                </li>
                <li>
                    <a className={styles.link} href="/">Menu</a>
                </li>
                <li>
                    <a className={styles.link} href="/">About</a>
                </li>
                <li>
                    <a className={styles.link} href="/">Toggle View</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
