import React from "react";
import Button from "../UI/Button";
import "../UI/Card.css";
import Preview from "./Preview";

export default function MainProjects() {
  const btnProj = "Ver más proyectos";
  const prev = [
    {
      name: "Henry App",
      photo:
        "https://th.bing.com/th/id/OIP.CXx8FRA9mctVCzZOpf20vAHaEo?w=298&h=186&c=7&o=5&dpr=1.5&pid=1.7",
        description: "Una plataforma educativa en la cual accedes a tu material de estudio"
    },
    {
      name: "Ecommerce",
      photo: "https://th.bing.com/th/id/OIP.AH4BxL02VRz-eucqCKnwLgHaFj?w=236&h=180&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Venta de hardware"
    },
    {
        name: "Random App",
        photo: "https://th.bing.com/th/id/OIP.diqqd7wFDANsy1csUHK3mQHaE6?w=256&h=180&c=7&o=5&dpr=1.5&pid=1.7",
        description: "Mix de idioteces"
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
          <Button value={btnProj} />
        </footer>
      </div>
    </div>
  );
}
