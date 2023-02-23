import axios from "axios";
import { REPOS_PER_PAGE, OPERATION_CANCELLED } from "src/constants";
import { githubApiInstance } from "../config";

const params = {
  per_page: REPOS_PER_PAGE,
  sort: "stars",
};
let cancelToken = null;

// I did not add 'react' as default argument since we need to handle '' as well
export const getSearchRepos = (searchValue, currPage = 1) => {
  if (cancelToken) cancelToken.cancel(OPERATION_CANCELLED);
  cancelToken = axios.CancelToken.source();

  return githubApiInstance.get("search/repositories", {
    params: { ...params, q: searchValue || "react", page: currPage },
    cancelToken: cancelToken.token,
  });
};
