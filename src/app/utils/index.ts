import Cookies from "js-cookie";
import { getRefreshToken } from "@api/auth";

export const setCookie = (name: string, value: string) => Cookies.set(name, value, { path: "/", domain: "localhost" });

export const removeCookie = (name: string) => Cookies.remove(name, { path: "/", domain: "localhost" });

export const getToken = () => Cookies.get("token") ?? "";

export const refreshToken = async () => {
  const refreshToken = getFromStorage("refreshToken");
  if (refreshToken) {
    const res = await getRefreshToken(refreshToken);
    if (!res) {
      setToStorage(null, "refreshToken");
      return;
    } else {
      setCookie("token", res.jwt);
      setToStorage(res.refreshToken, "refreshToken");
      return res;
    }
  }
};

export const enableScroll = () => (document.documentElement.style.overflowY = "auto");

export const disableScroll = () => (document.documentElement.style.overflowY = "hidden");

export const getImage = (imageLink: string) => `${process.env.NEXT_PUBLIC_SERVER}${imageLink}`;

export const getFromStorage = (key: string) => localStorage.getItem(key) ?? null;

export const setToStorage = (value: string | null, key: string) => {
  const composedKey = key;
  if (value) {
    localStorage.setItem(composedKey, value);
  } else {
    localStorage.removeItem(composedKey);
  }
};
