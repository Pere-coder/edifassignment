'use client';

import { useContext, createContext, useState, useEffect } from "react";

const FacilityContext = createContext(null);

export const FacilityProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   console.log(isOpen);
  // },[isOpen])

  return (
    <FacilityContext.Provider
      value={{
        isOpen,
        toggleFacility: () => setIsOpen(true),
      }}
    >
      {children}
    </FacilityContext.Provider>
  );
};

export const useFacility = () => useContext(FacilityContext);
