"use client";

import { useContext, createContext, useState, useEffect } from "react";

const SignUpContext = createContext(null);

export const SignUpProvider = ({ children }) => {

  const [isDialogOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    console.log(isDialogOpen);
  }, [isDialogOpen]);

  return (
    <SignUpContext.Provider
      value={{
        isDialogOpen,
        toggleSignUp: (bool) => setIsOpen(bool),
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
