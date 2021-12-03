import { createContext, useContext } from "react";
import axios from "axios";
import { useMainContext } from "./MainContext";

const ApiContext = createContext();
export const useApiContext = () => useContext(ApiContext);

const API_URL = import.meta.env.VITE_API_URL;

export default function ApiContextProvider({ children }) {
  // context
  const { token, setAuth } = useMainContext();

  // handle respon api
  const handleResponSuccess = (data) => {
    console.log("Success -> ", data);
  };

  const handleResponError = (error) => {
    console.error("Error -> ", error.data);
  };

  // fetch api
  const headerOpt = { headers: { Authorization: `Bearer ${token}` } };
  const fetchApi = async (method, url, data = null) => {
    try {
      const response = data
        ? await axios[method](API_URL + url, data, headerOpt)
        : await axios[method](API_URL + url, headerOpt);
      handleResponSuccess(response);
    } catch (err) {
      handleResponError(err.response);
      return err.response;
    }
  };

  // API AUTH
  const ApiAuth = {
    get: () => {
      fetchApi("get", "/auth").then((err) => {
        if (err) setAuth(false);
        console.log(err);
      });
    },

    register: (data, cb) => {
      fetchApi("post", "/auth/register", data).then((err) => cb(err));
    },
  };
  //
  return (
    <ApiContext.Provider value={{ ApiAuth }}>
      <>{children}</>
    </ApiContext.Provider>
  );
}
