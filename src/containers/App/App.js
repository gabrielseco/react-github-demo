// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Header, Footer, SearchBox, Spinner } from './../../components';
import GithubApi from './../../services/GithubApi';
import { GithubRepos } from './../../types';
import styles from './App.scss';
import utils from './../../stylesheets/utils/flexbox.scss';

type State = {
  repos: GithubRepos[],
  search: string,
  isLoading: boolean
};

class App extends Component {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      repos: [],
      search: '',
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.searchRepos = debounce(this.searchRepos, 500);
  }

  onChange({ value }) {
    this.setState({
      search: value,
      isLoading: true
    });

    this.searchRepos(value);
  }

  async searchRepos(value: string) {
    if (value !== '') {
      const repos = await GithubApi.getRepos(value);

      this.setState(prevState => {
        return {
          ...prevState,
          repos: repos,
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

export default App;
