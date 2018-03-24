// @flow
import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
  <div
    className={styles.spinner}
    role="alertdialog"
    aria-busy="true"
    aria-live="assertive"
  />
);

export default Spinner;
