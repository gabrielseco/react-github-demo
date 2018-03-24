// @flow
import React from 'react';
import styles from './Footer.scss';
import applyClasses from './../../utils/applyClasses';

const footerIconClassNames = applyClasses({
  footerIcon: true,
  'fa fa-heart-o': true
});

const Footer = () => (
  <footer className={styles.footer}>
    <p>Gabriel García Seco</p>
    <p>
      Made with <i className={footerIconClassNames} />, Madrid 2018
    </p>
  </footer>
);

export default Footer;
