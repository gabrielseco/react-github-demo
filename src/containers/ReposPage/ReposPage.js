// @flow
import React, { Component, Fragment } from 'react';
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
  username: string,
  isLoading: boolean
};

class ReposPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      isLoading: this.props.isLoading
    };

    this.searchRepos = debounce(this.searchRepos, 500);
  }

  componentDidMount() {
    this.update({
      isLoading: this.props.isLoading,
      username: this.props.username
    });
  }

  componentWillReceiveProps(props) {
    this.update({
      isLoading: props.isLoading,
      username: props.username
    });
  }

  update({ isLoading, username }: { isLoading: boolean, username: string }) {
    this.setState(prevState => {
      return {
        ...prevState,
        isLoading: isLoading
      };
    });

    if (username.trim() !== '') {
      this.searchRepos(username.trim());
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
      <Fragment>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          this.renderResults(repos)
        )}
      </Fragment>
    );
  }
}

export default ReposPage;
