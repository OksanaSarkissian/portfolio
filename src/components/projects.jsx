import React, { useEffect, useState } from "react";
import "../App.css";

const PROJECTSDATA = [
  {
    label: "Conception et développement site web personnalisé",
    desc: "Création du cahier des charges, conception de la base de données ainsi que le maquettage en collaboration avec la responsable de a société. Développement du site d'inscription en ligne à des cours de motocross et d'un back office pour la création des cours, l'accés à la liste des élèves à l'emploi du temps ainsi que l'accés aux inscrit aux cours.",
    annee: "2022",
    name: "MX ECOLE",
    urlImg: "logo192.png",
    link: "#",
  },
  {
    label: "Bataille navale",
    desc: "Création du cahier des charges, conception de la base de données ainsi que le maquettage d'un jeu de bataille navale. Développement du jeu en Node js avec Express pour le back, architecture MVC en JS pour le front.",
    annee: "2023",
    name: "Esimed",
    urlImg: "logo192.png",
    link: "#",
  },
  {
    label: "Portfolio",
    desc: "Développement du portfolio en React pour le front, Node js pour le back avec une base de données pour la possibilité de modifier les couleurs de thème et le contenu à l'aide d'un back office. Ainsi que l'internationalisation complète du site.",
    annee: "2024",
    name: "Esimed",
    urlImg: "",
    link: "#",
  },
];
export function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        setProjectsData(PROJECTSDATA);
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
      {projectsData.map((project, index) => {
        return (
          <div className="col-md-12 mb-5" key={index}>
            {project?.urlImg && (
              <a href={project?.link}><img
                className={
                  index % 2 === 0
                    ? "float-start col-md-4 me-5"
                    : "float-end col-md-4 me-5"
                }
                src={project?.urlImg}
                alt="Description"
              /></a>
            )}
            <div className="col-md-12">
              <h2>{project?.annee}</h2>
              <h3>{project?.label}</h3>
              <p className="text-right">{project?.desc}</p>
              <h6>{project?.name}</h6>
            </div>
          </div>
        );
      })}
    </>
  );
}
