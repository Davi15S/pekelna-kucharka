import { User } from "@shared/user";
import { createContext, useContext } from "react";

export const UserContext = createContext<{ user: User | undefined; setUser: (user: User | undefined) => void }>({
  user: undefined,
  setUser: () => undefined,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = UserContext.Provider;
