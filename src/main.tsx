import React from "react";
import ReactDOM from "react-dom/client";
import { Routers } from "./routes";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import GlobalStyles from "./styles/global.ts";
import { AuthProvider } from "./context/auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
