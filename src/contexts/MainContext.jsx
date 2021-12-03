import { createContext, useContext, useState } from "react";
import { Loader } from "../component/main";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export default function MainContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MainContext.Provider value={{ setIsLoading }}>
      {isLoading && <Loader />}
      <>{children}</>
    </MainContext.Provider>
  );
}
