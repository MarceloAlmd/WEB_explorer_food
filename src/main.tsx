import React from "react";
import ReactDOM from "react-dom/client";
import { Routers } from "./routes";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import GlobalStyles from "./styles/global.ts";
import { register } from "swiper/element/bundle";
import { AuthProvider } from "./context/auth.context.tsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
register();

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
