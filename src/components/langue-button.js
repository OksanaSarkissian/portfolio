import React, { useEffect, useState } from "react";
import "../App.css";

export function ButtonLanguage() {
  const [bgColor, setBgColor] = useState("blue");
  const changeLangue = (url) => {
    //TODO
  };
  return (
    <>
      <button onClick={changeLangue} style={{ marginBottom: "20px" }}>
        Langue
      </button>
    </>
  );
}
