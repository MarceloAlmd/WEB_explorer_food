import { Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { NotFoundError } from "../components/notFoundError/notFoundError.comp";

export function Public() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}
