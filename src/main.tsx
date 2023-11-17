import React from "react";
import ReactDOM from "react-dom/client";
import { Cart } from "./pages/cart";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Cart />
    </ThemeProvider>
  </React.StrictMode>
);
