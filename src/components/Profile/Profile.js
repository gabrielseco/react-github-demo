// @flow
import React from 'react';
import styles from './Profile.scss';
import type { GithubUser } from './../../types';

type Props = {
  data: GithubUser
};

const Profile = ({ data }: Props) => (
  <div className={`${styles.container} profile`}>
    <a href={data.html_url} target="_blank">
      <img
        className={styles.picture}
        src={data.avatar_url}
        alt={data.login}
        title={data.login}
      />
      <p className={styles.title}>
        {data.name !== null ? data.name : data.login}
      </p>
      {data.bio ? (
        <p className={styles.description}>{data.bio}</p>
      ) : (
        <p className={styles.description}>No description provided</p>
      )}
    </a>
  </div>
);

export default Profile;
