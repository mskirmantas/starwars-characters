import "react-app-polyfill/stable";
import "core-js/stable";
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
