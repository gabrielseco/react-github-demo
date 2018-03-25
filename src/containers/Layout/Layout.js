import React from 'react';
import { Header, Footer, SearchBox } from './../../components';
import styles from './Layout.scss';
import utils from './../../stylesheets/utils/flexbox.scss';

export default function Layout({ routes, onChange }) {
  return (
    <div className={utils.flexboxSticky}>
      <Header />
      <main className={utils.flex1}>
        <div className={styles.wrapper}>
          <div className={styles.searchBoxContainer}>
            <SearchBox
              classesInput={styles.searchBox}
              placeholder="Start typing to search for users"
              onChange={onChange}
            />
          </div>
        </div>
        {routes}
      </main>
      <Footer />
    </div>
  );
}
