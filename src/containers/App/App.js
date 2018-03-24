// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { withRouter } from 'react-router-dom';
import { Header, Footer, SearchBox, Spinner } from './../../components';
import GithubApi from './../../services/GithubApi';
import { GithubRepos, GithubUser, GithubOrg } from './../../types';
import styles from './App.scss';
import utils from './../../stylesheets/utils/flexbox.scss';

type State = {
  repos: GithubRepos[],
  user: GithubUser,
  orgs: GithubOrg[],
  search: string,
  isLoading: boolean,
  pathname: string
};

class App extends Component {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      repos: [],
      search: '',
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
      search: value,
      isLoading: true
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

  renderResults(repos: GithubRepos[]) {
    if (repos.length === 0) {
      return null;
    }
    return <pre>{JSON.stringify(repos, null, 4)}</pre>;
  }

  render() {
    const { repos, search, isLoading } = this.state;
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
            <pre>{search}</pre>
            {isLoading ? <Spinner /> : this.renderResults(repos)}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
