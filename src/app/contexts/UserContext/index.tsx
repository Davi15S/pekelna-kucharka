import { User } from "@shared/user";
import { createContext } from "react";

export const UserContext = createContext<{ user: User | null; setUser: (user: User | null) => void }>({
  user: null,
  setUser: () => null,
});

export const UserProvider = UserContext.Provider;
