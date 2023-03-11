import { fetchApi } from "..";
import { LoginRes } from "./types";

export const createUser = (email: string, username: string, password: string) => {
  return fetchApi("auth/local/register", undefined, "POST", { email, username, password });
};

export const loginUser = (email: string, password: string) => {
  return fetchApi<LoginRes>("auth/local", undefined, "POST", { identifier: email, password });
};

export const getRefreshToken = (refreshToken: string) => {
  return fetchApi<{ jwt: string; refreshToken: string }>("token/refresh", undefined, "POST", { refreshToken: refreshToken });
};
