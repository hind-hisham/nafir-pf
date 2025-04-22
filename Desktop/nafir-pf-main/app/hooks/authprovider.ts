"use client";

import { useContext } from "react";
import { AuthContext } from "../context/authcotext"; 

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used witin AuthContextProvider");
  }

  return context;
};

export default useAuthContext;

