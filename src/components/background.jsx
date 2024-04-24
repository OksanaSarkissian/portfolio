import React, { useEffect, useState } from "react";
import "../App.css";

const BACKGROUNDDATA = [
  { label: "Licence bac +2", annee: "2022", name: "GRETA du Var" },
  { label: "Bachelor bac +3", annee: "2023", name: "Esimed" },
  { label: "Master 1 bac +4", annee: "2024", name: "Esimed" },
  "logo192.png",
];
export function Background() {
  const [backgroundData, setBackgroundData] = useState([]);
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        setBackgroundData(BACKGROUNDDATA);
      },
      (error) => {
        console.log(error);
      }
    )
    .catch((e) => {
      //gérer l'erreur
    });
  return (
    <>
      <div className="flex-grow-1">
        {backgroundData.map((school, index) => {
          return (
            <div key={index}>
              <h2>{school?.annee}</h2>
              <h3>{school?.label}</h3>
              <h6>{school?.name}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}
