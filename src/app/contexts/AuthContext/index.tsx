import { getMe } from "@api/user";
import { getFromStorage, refreshToken } from "@app/utils";
import { User } from "@shared/user";
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext<{ isAuthenticated: boolean; isLoading: boolean; user: User | undefined }>({
  isAuthenticated: false,
  isLoading: true,
  user: undefined,
});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      await refreshToken();
      const token = getFromStorage("token");
      if (token) {
        await loginWithToken(token);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const loginWithToken = async (token: string) => {
    const user = await getMe(token);
    setUser(user);
    setIsAuthenticated(true);
  };

  return <AuthContext.Provider value={{ isAuthenticated, isLoading, user }}>{!isLoading && children}</AuthContext.Provider>;
}

export default AuthProvider;
