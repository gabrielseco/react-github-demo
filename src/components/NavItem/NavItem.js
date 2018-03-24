// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.scss';

type Props = {
  URL: string
};

const NavItem = ({ URL, children }: Props) => (
  <li className={styles.navItem}>
    <Link className={styles.navLink} to={URL}>
      {children}
    </Link>
  </li>
);

export default NavItem;
