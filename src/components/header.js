import React, { useEffect, useState } from "react";
import "../App.css";
import { ButtonTheme } from "./theme-button";
import i18n from "../i18n";

export function Header() {
  const changePage = (url) => {
    window.location.href = url;
  };
  const [langue, setLangue] = useState("fr");
  const changeLangue = () => {
    console.log(langue);
    i18n.changeLanguage(langue);
    setLangue(langue === "fr" ? "en" : "fr");
  };
  return (
    <header className="App-header">
      <div className="header-button-parent">
        <button
          onClick={() => changePage("/oksana")}
          style={{ marginBottom: "20px" }}
        >
          {i18n.t("ok-about-me")}
        </button>
        <button
          onClick={() => changePage("/background")}
          style={{ marginBottom: "20px" }}
        >
          {i18n.t("ok-background")}
        </button>
        <button
          onClick={() => changePage("/projects")}
          style={{ marginBottom: "20px" }}
        >
          {i18n.t("ok-my-projects")}
        </button>
        <ButtonTheme />
        <button onClick={() => changeLangue()} style={{ marginBottom: "20px" }}>
          Langue
        </button>
      </div>
    </header>
  );
}
