// @flow
import React from 'react';
import styles from './RepoItem.scss';
import { GithubRepo } from '../../types';

type Props = {
  repo: GithubRepo
};

const RepoItem = ({ repo }: Props) => (
  <li className={`${styles.repoItem} repo-item`}>
    <a href={repo.svn_url} target="_blank" className={styles.title}>
      <p>{repo.name}</p>
    </a>
    {repo.description ? (
      <p className={styles.description}>{repo.description}</p>
    ) : (
      <p className={styles.description}>No description provided</p>
    )}
    <div className={styles.row}>
      {repo.language ? (
        <p className={styles.language}>{repo.language}</p>
      ) : null}
      <p className={styles.stars}>
        <span className={styles.star}>
          <svg
            aria-label="stars"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
            />
          </svg>
        </span>
        {repo.stargazers_count}
      </p>
    </div>
  </li>
);

export default RepoItem;
