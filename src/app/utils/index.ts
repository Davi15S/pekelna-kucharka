import { getRefreshToken } from "@api/auth";

export const getToken = () => getFromStorage("token") ?? "";

export const refreshToken = async () => {
  const refreshToken = getFromStorage("refreshToken");
  if (refreshToken) {
    await getRefreshToken(refreshToken)
      .then((res) => {
        setToStorage(res.jwt, "token");
        setToStorage(res.refreshToken, "refreshToken");
        return res;
      })
      .catch(() => {
        clearStorage();
        return;
      });
  }
};

export const clearStorage = () => {
  setToStorage(null, "refreshToken");
  setToStorage(null, "token");
};

export const enableScroll = () => (document.documentElement.style.overflowY = "auto");

export const disableScroll = () => (document.documentElement.style.overflowY = "hidden");

export const getImage = (imageLink: string) => `${process.env.NEXT_PUBLIC_SERVER}${imageLink}`;

export const getFromStorage = (key: string) => localStorage.getItem(key) ?? null;

export const setToStorage = (value: string | null, key: string) => {
  if (value) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};
