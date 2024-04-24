import React, { useEffect, useState } from "react";
import "../App.css";
import { ButtonTheme } from "./theme-button";
import i18n from "../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Header() {
  
  const [bgHeader, setBgHeader] = useState('header');
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  const [langue, setLangue] = useState("fr");
  const changeLangue = () => {
    console.log(langue);
    i18n.changeLanguage(langue);
    setLangue(langue === "fr" ? "en" : "fr");
  };
  const listenScrollEvent = e => {
    if (window.scrollY > 50) {
      setBgHeader('scroll header')
    }else{
      setBgHeader('header')
    }
  }

    window.addEventListener('scroll', listenScrollEvent)

  return (
    <div className={bgHeader}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 150 150"
        id="header-logo"
        className="App-link"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => changePage("/")}
      >
        <path d="M5.73431 76.934L35.7431 46.9649L71.5004 46.9649L71.5004 146.645C71.5004 146.659 71.5005 146.673 71.5006 146.687C34.3638 144.922 4.59879 115.051 3.06231 77.9035C4.01799 77.9876 5.00285 77.6645 5.73431 76.934ZM3.16265 70.0139C5.56266 34.1943 34.2356 5.55926 70.1027 3.16244L34.8799 38.3387H26.3928C24.0075 38.3387 22.0739 40.2697 22.0739 42.6518C22.0739 44.9843 23.928 46.8844 26.2447 46.9624L3.16265 70.0139ZM78.1731 3.06946C77.1146 3.02331 76.0501 3 74.9802 3C73.341 3 71.7146 3.05472 70.1027 3.16244L72.1449 1.12291C73.5343 -0.264673 75.787 -0.264673 77.1765 1.12291C77.7086 1.65436 78.0548 2.33683 78.1731 3.06946ZM123.466 21.7545L78.2185 66.9423V3.63536C78.2185 3.44459 78.2032 3.25541 78.1731 3.06946C95.5932 3.82883 111.406 10.7716 123.466 21.7545ZM128.215 26.5003C126.707 24.8459 125.122 23.2622 123.466 21.7545L144.266 0.982549C145.577 -0.327516 147.704 -0.327516 149.016 0.982548C150.328 2.29273 150.328 4.41677 149.016 5.72672L128.215 26.5003ZM128.066 123.433L118.678 114.058H122.366C124.752 114.058 126.685 112.126 126.685 109.744C126.685 107.362 124.752 105.431 122.366 105.431H110.04L79.6099 75.0411L128.215 26.5003C139.861 39.272 146.96 56.2504 146.96 74.885C146.96 93.599 139.8 110.643 128.066 123.433ZM123.302 128.164C124.963 126.662 126.552 125.083 128.066 123.433L148.735 144.075C150.047 145.385 150.047 147.509 148.735 148.819C147.423 150.129 145.296 150.129 143.985 148.819L123.302 128.164ZM123.302 128.164C111.274 139.052 95.5417 145.933 78.2181 146.699C78.2184 146.681 78.2185 146.663 78.2185 146.645V114.058L109.177 114.058L123.302 128.164ZM3.16265 70.0139C3.0548 71.6236 3 73.2479 3 74.885C3 75.8962 3.02091 76.9025 3.06231 77.9035C2.30407 77.8367 1.5642 77.5135 0.98385 76.934C-0.327945 75.6239 -0.327955 73.4999 0.98385 72.1898L3.16265 70.0139ZM78.2181 146.699C78.1897 148.527 76.6968 150 74.8595 150C73.0183 150 71.5232 148.521 71.5006 146.687C72.6536 146.742 73.8137 146.77 74.9802 146.77C76.0653 146.77 77.1448 146.746 78.2181 146.699ZM100.539 105.431L78.2185 83.1399V105.431L100.539 105.431ZM71.5004 38.3387L44.3808 38.3387L71.5004 11.2549V38.3387Z" />
      </svg>
      <header className="App-header mb-5">
        <div className="ctas">
          <ButtonTheme />
          <FontAwesomeIcon
            className="App-link-light"
            icon={faLanguage}
            onClick={() => changeLangue()}
          />
        </div>
        <nav>
          <button onClick={() => changePage("/oksana")}>
            {i18n.t("ok-about-me")}
          </button>
          <button onClick={() => changePage("/background")}>
            {i18n.t("ok-background")}
          </button>
          <button onClick={() => changePage("/projects")}>
            {i18n.t("ok-my-projects")}
          </button>
        </nav>
      </header>
    </div>
  );
}
