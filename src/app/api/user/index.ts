import { User } from "@shared/user";
import { fetchApi } from "..";

export const getMe = (token: string) => {
  return fetchApi<User>("users/me?populate=*", token);
};
