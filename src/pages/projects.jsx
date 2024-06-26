import React, { useEffect, useState } from "react";
 
import i18n from "../hooks/i18n";

const PROJECTSDATA = [
  {
    label: "ok-label-mx-ecole",
    desc: "ok-desc-mx-ecole",
    annee: "2022",
    name: "MX ECOLE",
    urlImg:
      "https://www.mxecole.fr/wp-content/uploads/2024/03/cropped-LOGO-ECOLE-MX-PUGETVILLE.bmp",
    link: "",
  },
  {
    label: "ok-label-bataille-navale",
    desc: "ok-desc-bataille-navale",
    annee: "2023",
    name: "Esimed",
    urlImg: "",
    link: "",
  },
  {
    label: "Portfolio",
    desc: "ok-desc-portfolio",
    annee: "2024",
    name: "Esimed",
    urlImg: "",
    link: "#",
  },
];
export function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
  setProjectsData(PROJECTSDATA);
  }, [])
  // fetch(`https://dog.ceo/api/breeds/image/random`)
  //   .then((response) => response.json())
  //   .then(
  //     (result) => {
  //       // console.log(result);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  //   .catch((e) => {
  //     //gérer l'erreur
  //   });
  return (
    <div className="content">
      {projectsData.map((project, index) => {
        return (
          <div
            className="bg-test d-flex flex-column rounded p-4 col-lg-3 col-md-8 col-sm-8 m-5 "
            key={index}
          >
            <div className="">
              <h2>{project?.annee}</h2>
              <h3>{i18n.t(project?.label)}</h3>
              <h6>{project?.name}</h6>
              
              
            </div>
              <p className="text-right flex-grow-1 ">{i18n.t(project?.desc)}</p>
            {project?.link && (
              <a className="p-5" href={project?.link} target="_blank" rel="noreferrer">
                <button className="rounded">{i18n.t('ok-savoir-plus')}</button>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
