import axios from "axios";
import { GITHUB_API_URL } from "src/constants";
import { TOKEN } from "./token";

export const githubApiInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
