import { fetchApi } from "..";

export const createComment = (content: unknown, token: string) => {
  return fetchApi("comments", token, "POST", content);
};
