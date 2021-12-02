import { createContext, useContext } from "react";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export default function MainContextProvider() {
  return (
    <MainContext.Provider>
      <>{children}</>
    </MainContext.Provider>
  );
}
