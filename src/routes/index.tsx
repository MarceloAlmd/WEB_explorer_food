import { BrowserRouter } from "react-router-dom";

import { Customer } from "./customer.routes";
import { Public } from "./public.routes";
import { Admin } from "./admin.routes";

export function Routers() {
  return (
    <BrowserRouter>
      <Customer />
    </BrowserRouter>
  );
}
