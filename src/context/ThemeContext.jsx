"use client";
import React from "react";
import { useState } from "react";

const ThemeContext = React.createContext({
  mode: "dark",
  changeMode: () => {},
});

export const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const modeHandler = () => {
    setMode((prev)=>(prev === "dark"? "light":"dark"));
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        changeMode: modeHandler,
      }}
    >
      <div className={`theme ${mode}`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
