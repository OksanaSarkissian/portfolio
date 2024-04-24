import React, { useEffect, useState } from "react";
import "../App.css";

const OKSADATA = [
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "logo512.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverraelit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectustincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra liberoet risus dapibus, non malesuada leo vehicula. Sed eget massa ac metusposuere finibus vel sit amet nulla. In hac habitasse platea dictumst.Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer asapien at mauris sollicitudin accumsan. Nullam condimentum, eros sitamet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sitamet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur necdiam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipitturpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitaevehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisilibero laoreet nisi, non pharetra dolor libero eget elit.",
  },
];
export function Oksana() {
  const [oksaData, setOksaData] = useState([]);
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        setOksaData(OKSADATA);
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
      {oksaData.map((oksa, index) => {
        return (
          <div className="content flex-grow-1" key={index}>
            <div>
              <img
                className="float-start me-5"
                src={oksa?.urlImg}
                alt="Description"
                width="500px"
                height="auto"
              />
              <p>
                {oksa?.nom} {oksa?.prénom}
              </p>
              <p className="text-start">{oksa?.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
