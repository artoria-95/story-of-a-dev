import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "../UI/Card.css";
export default function MainArt(props) {
  const btn1 = "Leer más";
  const btn2 = "Ver más artículos";

  return (
    <div>
      <section className="card-wrapper">
        <header className="card-header">
          <h1>Artículo principal</h1>
        </header>
        <div className="card-body">
          <h2>De soñadora conspiranóica a Full Stack Developer</h2>
          <p>
            Año 2019, viernes a la noche.
            <br />
            Las noticias sobre una epidemia brotando se estaban esparciendo. Una
            amiga conspiranoica me escribe para que la ayude a investigar.
            Juntas armamos un grupo con contactos de diferentes paises para
            rastrear la situacion desde diferentes puntos. La enfermedad todavia
            no había salido de China, pero mi amiga y yo desde el principio
            supimos lo que significaba: teníamos que empezar a prepararnos,
            porque esto no iba a quedarse en Wuhan.
            <br />
            Pasaron los meses y tuvimos razón. En un abrir y cerrar de ojos
            estábamos encerrados en nuestras casas con barbijos puestos y
            problemas de internet porque todos teníamos reuniones a la misma
            hora. Millones de personas perdían sus fuentes de ingresos, miles de
            empresas terminaban en quiebra, y había cada vez más muertes y
            reportes de enfermedades, hospitales colapsados, y noticieros
            monotemáticos que sólo hablaban de una versión en vida de la
            película Contagio.
            <br />
            Si en ese momento una versión futurista de mí se aparecía en mi
            habitación y me decía que en un año iba a tener un título y un buen
            trabajo lleno de posibilidades y puertas abiertas a un gran futuro
            lo hubiese considerado un chiste muy cruel y de muy mal gusto. Dada
            la situación, ¿quién lo creería? Entonces apareció Henry con una
            propuesta que parecía demasiado buena para ser real.
          </p>
        </div>
        <footer className="card-foot">
          <Button value={btn1} />
          <Link to="/articles">
            <Button value={btn2} />
          </Link>
        </footer>
      </section>
    </div>
  );
}
