import React, { useEffect, useState } from "react";
import "../App.css";
import i18n from "../i18n";

const OKSADATA = [
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "https://media.licdn.com/dms/image/C4E03AQF-RJ0rOcRHjA/profile-displayphoto-shrink_200_200/0/1650003575481?e=2147483647&v=beta&t=DDUSC8QdKMba_1Fec9w05C2-0n1qZNRkg3jvmuO39o0",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverraelit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectustincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra liberoet risus dapibus, non malesuada leo vehicula. Sed eget massa ac metusposuere finibus vel sit amet nulla. In hac habitasse platea dictumst.Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer asapien at mauris sollicitudin accumsan. Nullam condimentum, eros sitamet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sitamet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur necdiam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipitturpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitaevehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisilibero laoreet nisi, non pharetra dolor libero eget elit.",
  },
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverraelit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectustincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra liberoet risus dapibus, non malesuada leo vehicula. Sed eget massa ac metusposuere finibus vel sit amet nulla. In hac habitasse platea dictumst.Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer asapien at mauris sollicitudin accumsan. Nullam condimentum, eros sitamet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sitamet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur necdiam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipitturpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitaevehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisilibero laoreet nisi, non pharetra dolor libero eget elit.",
  },
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverraelit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectustincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra liberoet risus dapibus, non malesuada leo vehicula. Sed eget massa ac metusposuere finibus vel sit amet nulla. In hac habitasse platea dictumst.Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer asapien at mauris sollicitudin accumsan. Nullam condimentum, eros sitamet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sitamet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur necdiam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipitturpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitaevehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisilibero laoreet nisi, non pharetra dolor libero eget elit.",
  },
  {
    nom: "SARKISSIAN",
    prénom: "oksana",
    hobby: "lecture",
    urlImg: "",
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
      <div className="content flex-grow-1">
        {oksaData.map((oksa, index) => {
          return (
            <div className="d-flex flex-wrap my-5" key={index}>
              <div className="d-flex flex-wrap justify-content-end w-100">
                <div className="d-flex split left col-lg-4 justify-content-center mb-5">
                  {oksa?.urlImg && (
                    <img
                    className="rounded-circle col-lg-4 col-md-4 col-sm-4"
                      src={oksa?.urlImg}
                      alt="Description"
                      width="500px"
                      height="auto"
                    />
                  )}
                </div>
                <div className="rounded col-lg-8 bg-test mx-5 pr-5">
                  <p>
                    {oksa?.nom} {oksa?.prénom}
                  </p>
                  <p className="text-start">{i18n.t("ok-lorem")}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
