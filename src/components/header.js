import React, { useEffect, useState } from "react";
import "../App.css";
import { ButtonTheme } from "./theme-button";
import i18n from "../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

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
        <button onClick={() => changePage("/oksana")}>
          {i18n.t("ok-about-me")}
        </button>
        <button onClick={() => changePage("/background")}>
          {i18n.t("ok-background")}
        </button>
        <button onClick={() => changePage("/projects")}>
          {i18n.t("ok-my-projects")}
        </button>
        <ButtonTheme />
        <FontAwesomeIcon
          className="App-link"
          icon={faLanguage}
          onClick={() => changeLangue()}
        />
      </div>
    </header>
  );
}
