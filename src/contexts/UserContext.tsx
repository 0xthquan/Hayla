import { createContext } from "react";

export interface User {
  id: number;
  name: string;
  score: number;
  role: string;
}

export const UserContext = createContext<[User[], React.Dispatch<React.SetStateAction<User[]>>]>(null as any)