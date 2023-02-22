import { githubApiInstance } from "../config";

const params = {
  per_page: 5,
};

// I did not add 'react' as default argument since we need to handle '' as well
export const getSearchRepos = (searchValue) => {
  return githubApiInstance.get("search/repositories", {
    params: { ...params, q: searchValue || "react" },
  });
};
