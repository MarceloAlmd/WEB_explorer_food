import { ReactNode } from "react";

export interface AuthProps {
  children: ReactNode;
}

export interface LoginProps {
  email: string;
  password: string;
}

interface User {
  created_at: string;
  email: string;
  id: number;
  name: string;
  role: string;
  updated_at: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

// export interface UserProps {
//   created_at: string;
//   email: string;
//   id: string | number;
//   name: string;
//   role: string;
//   updated_at: string;
// }

// export interface ContextType {
//   login: ({ email, password }: LoginProps) => void;
//   user: UserProps | null;
//   logout: () => void;
// }
