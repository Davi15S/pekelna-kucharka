import { createContext } from "react";

export const PageTitleContext = createContext<{
  title: string | undefined;
  setTitle: (title: string | undefined) => void;
}>({
  title: undefined,
  setTitle: () => undefined,
});

export const PageTitleProvider = PageTitleContext.Provider;
