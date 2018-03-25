// @flow
import React, { Component, Fragment } from 'react';
import debounce from 'lodash.debounce';
import GithubApi from './../../services/GithubApi';
import { Spinner, Profile, Orgs } from './../../components';
import styles from './OrgsPage.scss';
import { GithubUser, GithubOrg } from './../../types';

type State = {
  user: GithubUser,
  orgs: GithubOrg[],
  isLoading: boolean
};

type Props = {
  username: string,
  isLoading: boolean
};

class OrgsPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      orgs: undefined,
      isLoading: this.props.isLoading
    };

    this.searchOrgs = debounce(this.searchOrgs, 500);
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
      this.searchOrgs(username.trim());
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          orgs: undefined,
          user: undefined,
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

  renderResults(user, orgs) {
    if (user === undefined && orgs === undefined) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Profile data={user} />
        <Orgs orgs={orgs} />
      </div>
    );
  }

  render() {
    const { user, orgs, isLoading } = this.state;
    return (
      <Fragment>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          this.renderResults(user, orgs)
        )}
      </Fragment>
    );
  }
}

export default OrgsPage;
