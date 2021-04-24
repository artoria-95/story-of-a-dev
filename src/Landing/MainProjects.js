import React from "react";
import Button from "../UI/Button";
import "../UI/Card.css";
import Preview from "./Preview";
import ecommerce from '../Assets/PC-creative.png';
import random from '../Assets/random-app.png';
import happ from '../Assets/Henry-app.png';
import { Link } from "react-router-dom";


export default function MainProjects() {
  const btnProj = "Ver más proyectos";
  const prev = [
    {
      name: "Henry App",
      photo: happ,
        description: "Una plataforma pensada para alumnos de HENRY, donde pueden acceder a su material de estudio, Seminarios grabados, ver su estado de cuenta y acceder a una bolsa de trabajo una vez graduados. Desarrollado a modo de examen final grupal, en un equipo de 7 personas."
    },
    {
      name: "PC-Creative",
      photo: ecommerce,
      description: "Proyecto de E-Commerce desarrollado junto a un equipo de 7 personas en modalidad de examen grupal, durante la etapa de HENRY Labs."
    },
    {
        name: "Random App",
        photo: random,
        description: "(¡En construcción!) Una aplicación desarrollada como proyecto personal, llena de sorpresas a modo de entretenimiento, que se fueron desarrollando a la par del conocimiento de la autora. "
      }
  ];
  return (
    <div>
      <div className="card-wrapper">
        <header className="card-header">
          <h1>Proyectos destacados</h1>
        </header>
        <div className="card-body">
          
        <Preview name={prev[0].name} photo={prev[0].photo} description={prev[0].description} className="pre" />
        <Preview name={prev[1].name} photo={prev[1].photo} description={prev[1].description} className="pre"/>
        <Preview name={prev[2].name} photo={prev[2].photo} description={prev[2].description} className="pre" />
          
        </div>
        <footer className="card-foot">
          <Link to="/projects"><Button value={btnProj} /></Link>
        </footer>
      </div>
    </div>
  );
}
