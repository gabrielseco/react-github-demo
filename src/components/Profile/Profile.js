// @flow
import React from 'react';
import styles from './Profile.scss';
import type { GithubUser } from './../../types';

type Props = {
  data: GithubUser
};

const Profile = ({ data }: Props) => (
  <div className={styles.container}>
    <a href={data.html_url} target="_blank">
      <img
        className={styles.picture}
        src={data.avatar_url}
        alt={data.name}
        title={data.name}
      />
      <p className={styles.title}>{data.name}</p>
      {data.bio ? (
        <p className={styles.description}>{data.bio}</p>
      ) : (
        <p className={styles.description}>No description provided</p>
      )}
    </a>
  </div>
);

export default Profile;
