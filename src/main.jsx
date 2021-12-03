import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ApiContextProvider, MainContextProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
