import { fetchApi } from "..";

export const craeteUser = (email: string, username: string, password: string) => {
  return fetchApi("auth/local/register", undefined, "POST", { email, username, password });
};
