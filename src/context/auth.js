import { createContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    const fakeUser = { name: "Free User" };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  const context = { 
    user, 
    login, 
    logout,
    isAuthenticated: !!user 
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
