import { githubApiInstance } from "../config";

const params = {};

export const getSearchRepos = () =>
  githubApiInstance.get("search/repositories", {
    params: { ...params },
  });
