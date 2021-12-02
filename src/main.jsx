import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ApiContextProvider, MainContextProvider } from "./contexts";

import App from "./App";

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
