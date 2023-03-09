import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("token") ?? "";
};

export const enableScroll = () => (document.documentElement.style.overflowY = "auto");
export const disableScroll = () => (document.documentElement.style.overflowY = "hidden");
