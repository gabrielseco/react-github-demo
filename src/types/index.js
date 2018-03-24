// @flow

export type GithubRepo = {
  id: number,
  description: string,
  language: string,
  name: string,
  stargazers_count: number,
  svn_url: string
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
