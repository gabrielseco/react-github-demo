// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Footer,
  SearchBox,
  Spinner,
  ReposList
} from './../../components';
import GithubApi from './../../services/GithubApi';
import { GithubRepo, GithubUser, GithubOrg } from './../../types';
import styles from './App.scss';
import utils from './../../stylesheets/utils/flexbox.scss';

type State = {
  repos: GithubRepo[],
  user: GithubUser,
  orgs: GithubOrg[],
  isLoading: boolean,
  pathname: string
};

class App extends Component {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      repos: [],
      isLoading: false,
      pathname: this.props.location.pathname
    };
    this.onChange = this.onChange.bind(this);
    this.searchRepos = debounce(this.searchRepos, 500);
  }

  componentWillReceiveProps(props) {
    this.setState(prevState => {
      return {
        ...prevState,
        pathname: props.location.pathname
      };
    });
  }

  onChange({ value }) {
    this.setState({
      isLoading: value !== ''
    });

    if (this.state.pathname === '/' || this.state.pathname === '/repos') {
      this.searchRepos(value);
    }

    if (this.state.pathname === '/orgs') {
      this.searchOrgs(value);
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

  async searchOrgs(username: string) {
    if (username !== '') {
      const { user, orgs } = await GithubApi.getUserData(username);

      this.setState(prevState => {
        return {
          ...prevState,
          user: user,
          orgs: orgs,
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
      <div className={utils.flexboxSticky}>
        <Header />
        <main className={utils.flex1}>
          <div className={styles.wrapper}>
            <div className={styles.searchBoxContainer}>
              <SearchBox
                classesInput={styles.searchBox}
                placeholder="Start typing to search for users"
                onChange={this.onChange}
              />
            </div>
          </div>
          {isLoading ? (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            this.renderResults(repos)
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
