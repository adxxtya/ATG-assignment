"use client";
import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext({
  isToggled: false,
  toggleHandler: () => {},
});

export const useToggle = () => {
  return useContext(ToggleContext);
};

export const ToggleProvider = ({ children }: any) => {
  const [isToggled, setToggled] = useState(false);

  const toggleHandler = () => {
    setToggled(!isToggled);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};
