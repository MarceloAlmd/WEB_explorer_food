import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
