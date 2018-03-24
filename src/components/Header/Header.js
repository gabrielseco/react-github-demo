// @flow
import React from 'react';
import { NavBar, NavItem } from './../../components';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <h2 className={styles.title}>Github Demo</h2>
    </div>
    <NavBar>
      <NavItem URL="/repos">Repos</NavItem>
      <NavItem URL="/orgs">Orgs</NavItem>
    </NavBar>
  </header>
);

export default Header;
