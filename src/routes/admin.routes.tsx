import { Routes, Route } from "react-router-dom";

import { UpdateOrNewDish } from "../pages/updateOrNewDish";
import { Requests } from "../pages/requests";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { NotFoundError } from "../components/notFoundError/notFoundError.comp";

export function Admin() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<UpdateOrNewDish />} />
      <Route path="/create" element={<UpdateOrNewDish />} />

      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}
