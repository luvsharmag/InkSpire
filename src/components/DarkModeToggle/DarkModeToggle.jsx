"use client";
import React, { useEffect } from "react";
import styles from "./DarkModeToggle.module.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const ctx = useContext(ThemeContext);
  const mode = ctx.mode;
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  return (
    <div className={styles.container} onClick={ctx.changeMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
