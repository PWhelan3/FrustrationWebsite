import React from 'react';
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <a className={styles.title} href="/">Exit</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
