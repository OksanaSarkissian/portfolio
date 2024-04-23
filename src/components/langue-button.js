import React, { useEffect, useState } from "react";
import "../App.css";
import i18n from '../i18n';

export function ButtonLanguage({ t }) {
  const [langue, setLangue] = useState("fr");
  const changeLangue = () => {

    i18n.changeLanguage(langue);
    setLangue(langue === "fr" ? "en" : "fr")
  };
  return (
    <>
      <button onClick={() => changeLangue()} style={{ marginBottom: "20px" }}>
        Langue
      </button>
    </>
  );
}
