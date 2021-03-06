// @flow
import axios from 'axios';
import { GithubRepo } from './../types';

const BASE_URL = 'https://api.github.com';

const GithubApi = {
  getRepos: (username: string): Promise<GithubRepo[]> => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=10`;
    return axios.get(url).then(response => response.data);
  },
  getUserData: (username: string) => {
    return axios
      .all([
        axios.get(`${BASE_URL}/users/${username}`),
        axios.get(`${BASE_URL}/users/${username}/orgs`)
      ])
      .then(([user, orgs]) => ({
        user: user.data,
        orgs: orgs.data
      }));
  }
};

export default GithubApi;
