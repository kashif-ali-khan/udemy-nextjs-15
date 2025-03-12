"use client";

import { createContext, useContext } from "react";
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const themeObject: Theme = {
  colors: {
    primary: "red",
    secondary: "blue",
  },
};

export const ThemeContext = createContext<Theme>(themeObject);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={themeObject}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
