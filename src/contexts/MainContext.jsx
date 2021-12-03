import { createContext, useContext, useEffect, useState } from "react";
import cookies from "cookie-universal";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export default function MainContextProvider({ children }) {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  //
  useEffect(() => {
    setToken(cookies().get("accessToken"));
  }, []);
  return (
    <MainContext.Provider
      value={{ auth, setAuth, user, setUser, token, setToken }}
    >
      <>{children}</>
    </MainContext.Provider>
  );
}
