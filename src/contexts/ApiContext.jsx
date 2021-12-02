import { createContext, useContext, useState } from "react";
import axios from "axios";
import cookies from "cookie-universal";

import { handleSuccessApi, handleErrorApi } from "../helpers/HandleApiResult";

const ApiContext = createContext();
export const useApiContext = () => useContext(ApiContext);

const API_URL = import.meta.env.VITE_API_URL;

export default function ApiContextProvider({ children }) {
  const [token, setToken] = useState(cookies().get("accessToken"));
  const [user, setUser] = useState(cookies().get("user"));

  const headerOpt = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async (method = "get", url = "", data = null) => {
    try {
      const response = await axios[method](API_URL + url, data, headerOpt);
      handleSuccessApi(response.data);
    } catch (err) {
      if (err) {
        handleErrorApi(err.response);
      }
    }
  };

  const ApiAuth = {
    get: async () => fetchData("get", "/auth"),
  };

  return (
    <ApiContext.Provider value={{ ApiAuth }}>
      <>{children}</>
    </ApiContext.Provider>
  );
}
