import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ApiContextProvider } from "./contexts";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
