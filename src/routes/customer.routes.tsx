import { Routes, Route } from "react-router-dom";

import { Requests } from "../pages/requests";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";

export function Customer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
