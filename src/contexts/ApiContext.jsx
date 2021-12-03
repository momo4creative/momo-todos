import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from "cookie-universal";

import { handleSuccessApi, handleErrorApi } from "../helpers/HandleApiResult";
import { useMainContext } from "./MainContext";

const ApiContext = createContext();
export const useApiContext = () => useContext(ApiContext);

const API_URL = import.meta.env.VITE_API_URL;

export default function ApiContextProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsLoading } = useMainContext();

  const [token, setToken] = useState(cookies().get("accessToken"));
  const [user, setUser] = useState();

  const headerOpt = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // FETCH DATA
  const fetchData = async (method = "get", url = "", data = null) => {
    try {
      const response = await axios[method](API_URL + url, data, headerOpt);
      handleSuccessApi(response.data);
    } catch (err) {
      if (err) {
        handleErrorApi(err.response);
        const status = err.response.status;
        if (status == 401) {
          if (
            location.pathname != "/auth/login" &&
            location.pathname != "/auth/register"
          )
            navigate("/auth/login");
        }
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // API AUTH
  const ApiAuth = {
    get: async () => {
      setIsLoading(true);
      fetchData("get", "/auth");
    },
  };

  // API TODOS
  const ApiTodos = {
    getAll: async () => {
      fetchData("get", "/todos");
    },
  };

  return (
    <ApiContext.Provider value={{ ApiAuth, ApiTodos }}>
      <>{children}</>
    </ApiContext.Provider>
  );
}
