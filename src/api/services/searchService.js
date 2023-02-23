import { REPOS_PER_PAGE } from "src/constants";
import { githubApiInstance } from "../config";

const params = {
  per_page: REPOS_PER_PAGE,
};

// I did not add 'react' as default argument since we need to handle '' as well
export const getSearchRepos = (searchValue) => {
  return githubApiInstance.get("search/repositories", {
    params: { ...params, q: searchValue || "react" },
  });
};
