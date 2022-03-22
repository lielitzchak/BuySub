import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  let [auth, setAuth] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.getItem("jwtToken");
      let tokenDecoded = jwt_decode(token);
      setAuth(tokenDecoded);
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth,loading, setLoading }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
