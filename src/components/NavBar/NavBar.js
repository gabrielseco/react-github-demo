// @flow
import React from 'react';
import styles from './NavBar.scss';

const NavBar = ({ children }) => (
  <nav className={styles.navBar}>
    <ul className={styles.navWrapper}>{children}</ul>
  </nav>
);

export default NavBar;
