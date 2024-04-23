import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <>
      <footer className="App-footer"><a className="App-link" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></footer>
    </>
  );
}
