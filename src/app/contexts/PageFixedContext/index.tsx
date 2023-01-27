import { createContext } from "react";

export const PageFixedContext = createContext<{
  isFixed: boolean | undefined;
  handleIsFixed: () => void;
}>({
  isFixed: undefined,
  handleIsFixed: () => undefined,
});

export const PageFixedContextProvider = PageFixedContext.Provider;
