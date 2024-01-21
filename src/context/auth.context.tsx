import { createContext, useContext, useEffect, useState } from "react";
import { AuthProps, AuthState, ContextType, LoginProps } from "./auth";
import { api } from "../api/axios";
import { Alert } from "../components/alert/alert.comp";

const AuthContext = createContext({} as ContextType);

export function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState<AuthState>({ user: null, token: null });
  const [alert, setAlert] = useState<boolean>(false);
  console.log(data.user);
  const handleShowAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const logout = () => {
    localStorage.removeItem("@exploreFood:user");
    localStorage.removeItem("@exploreFood:token");
    setData({ user: null, token: null });
  };

  const login = async ({ email, password }: LoginProps) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@exploreFood:user", JSON.stringify(user));
      localStorage.setItem("@exploreFood:token", token);
      setData({ user, token });

      handleShowAlert();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("@exploreFood:user");
    const token = localStorage.getItem("@exploreFood:token");

    if (user && token) {
      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ login, user: data.user, logout }}>
        {children}
      </AuthContext.Provider>
      {alert && <Alert message={`seja bem vindo ${data.user?.name}`} />}
    </>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
