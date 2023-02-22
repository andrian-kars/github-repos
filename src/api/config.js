import axios from "axios";
import { GITHUB_API_URL } from "src/constants";
import { TOKEN } from "./token";

export const githubApiInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
