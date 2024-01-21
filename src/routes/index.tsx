import { BrowserRouter } from "react-router-dom";

import { Customer } from "./customer.routes";
import { Public } from "./public.routes";
import { Admin } from "./admin.routes";
import { useAuth } from "../context/auth.context";
import { USER_ROLE } from "../utils/role";

export function Routers() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <Admin />;
      case USER_ROLE.CUSTOMER:
        return <Customer />;

      default:
        return <Customer />;
    }
  }

  return <BrowserRouter>{user ? <AccessRoute /> : <Public />}</BrowserRouter>;
}
