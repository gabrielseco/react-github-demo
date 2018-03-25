// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Spinner, ReposList } from './../../components';
import GithubApi from './../../services/GithubApi';
import styles from './ReposPage.scss';
import { GithubRepo } from './../../types';

type State = {
  repos: GithubRepo[],
  isLoading: boolean
};

type Props = {
  username: string
};

class ReposPage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      repos: [],
      isLoading: this.props.isLoading
    };

    this.searchRepos = debounce(this.searchRepos, 500);
  }

  componentWillReceiveProps(props) {
    this.setState(prevState => {
      return {
        ...prevState,
        isLoading: props.isLoading
      };
    });

    if (props.username.trim() !== '') {
      this.searchRepos(props.username);
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          repos: [],
          isLoading: false
        };
      });
    }
  }

  async searchRepos(username: string) {
    if (username !== '') {
      const repos = await GithubApi.getRepos(username);

      this.setState(prevState => {
        return {
          ...prevState,
          repos: repos,
          isLoading: false
        };
      });
    }
  }

  renderResults(repos: GithubRepo[]) {
    if (repos.length === 0) {
      return null;
    }
    return (
      <div className={styles.reposContainer}>
        <ReposList repos={repos} />
      </div>
    );
  }

  render() {
    const { repos, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          this.renderResults(repos)
        )}
      </div>
    );
  }
}

export default ReposPage;
