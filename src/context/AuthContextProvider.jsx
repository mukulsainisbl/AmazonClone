import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
