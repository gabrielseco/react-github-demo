// @flow
import React, { Component } from 'react';
import { RepoItem } from './../RepoItem';
import styles from './ReposList.scss';
import { repos as reposMock } from './repos';
import { GithubRepo } from './../../types';

type Props = {
  repos: GithubRepo[]
};

class ReposList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { repos } = this.props;
    const reposCollection = repos.map(repo => {
      return <RepoItem repo={repo} key={repo.id} />;
    });
    return <ol className={styles.reposList}>{reposCollection}</ol>;
  }
}

ReposList.defaultProps = {
  repos: reposMock
};

export default ReposList;
