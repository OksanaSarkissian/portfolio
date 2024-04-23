import React, { useEffect, useState } from "react";
import "../App.css";

export function ButtonTheme() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ marginBottom: "20px" }}>
          Theme
        </button>
    </>
  );
}
