// @flow

export type GithubRepos = {
  id: number,
  name: string,
  language: string,
  stargazers_count: number
};

export type GithubUser = {
  avatar_url: string,
  bio: ?string,
  blog: ?string,
  company: ?string,
  created_at: string,
  email: ?string,
  followers: number,
  following: number,
  hireable: boolean,
  id: number,
  location: string,
  name: string,
  public_repos: number
};

export type GithubOrg = {
  avatar_url: string,
  description: ?string,
  id: number,
  login: string
};
