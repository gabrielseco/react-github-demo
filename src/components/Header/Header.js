// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './../NavBar';
import { NavItem } from './../NavItem';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <h2 className={styles.title}>Github Demo</h2>
      </Link>
    </div>
    <NavBar>
      <NavItem URL="/">Repos</NavItem>
      <NavItem URL="/orgs">Orgs</NavItem>
    </NavBar>
  </header>
);

export default Header;
