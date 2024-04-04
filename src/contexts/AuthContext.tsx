import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("isAuthenticated has changed: ", isAuthenticated);
  }, [isAuthenticated]);

  const login = () => {
    console.log("login");
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("logout");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
