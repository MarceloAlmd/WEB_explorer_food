import { Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

export function Public() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
