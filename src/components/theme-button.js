import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ButtonTheme() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useState(defaultDark ? "dark" : "light");
const [icon, setIcon] = useState(theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon");

useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    setIcon(theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon")
  }, [theme]);

  return (
        <FontAwesomeIcon className="App-link" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} icon={icon} />
  );
}
