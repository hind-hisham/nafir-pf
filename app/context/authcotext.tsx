"use client";



import { createContext, useReducer, useEffect, ReactNode, Dispatch, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  profile_pic : string;
  user: string;
  // role?: string;
}

interface AuthState {
  user: User | null;
}

type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

interface AuthContextType extends AuthState {
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      dispatch({ type: "LOGIN", payload: parsedUser });
    }
    setIsLoading(false);

  }, []);


  if (isLoading) return null; 
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
