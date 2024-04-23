import React, { useEffect, useState } from "react";
import "../App.css";

const OKSADATA = [
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "logo512.png",
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
      <img
        className="float-start me-5"
        src={oksaData[0]?.urlImg}
        alt="Description"
      />

      <p className="text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
        elit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectus
        tincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra libero
        et risus dapibus, non malesuada leo vehicula. Sed eget massa ac metus
        posuere finibus vel sit amet nulla. In hac habitasse platea dictumst.
        Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer a
        sapien at mauris sollicitudin accumsan. Nullam condimentum, eros sit
        amet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sit
        amet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur nec
        diam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipit
        turpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitae
        vehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisi
        libero laoreet nisi, non pharetra dolor libero eget elit. Duis efficitur
        urna id mauris interdum tincidunt. Sed scelerisque purus a massa
        maximus, ac hendrerit ipsum commodo. Fusce ac tempus elit. Fusce
        condimentum malesuada metus, in tincidunt ex pulvinar et. Ut lobortis
        diam eget dui hendrerit aliquet. Integer id metus mi.
      </p>
      <p>
        {oksaData[0]?.nom} {oksaData[0]?.prénom}
      </p>
    </>
  );
}
