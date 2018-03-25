// @flow
import React from 'react';
import styles from './Orgs.scss';
import type { GithubOrg } from './../../types';

type Props = {
  orgs: GithubOrg
};

const Orgs = ({ orgs }: Props) => (
  <div>
    {orgs.map(org => {
      return (
        <div key={org.id} className={styles.container}>
          <img
            className={styles.picture}
            src={org.avatar_url}
            alt={org.login}
          />
          <p className={styles.title}>{org.login}</p>
        </div>
      );
    })}
  </div>
);

export default Orgs;
