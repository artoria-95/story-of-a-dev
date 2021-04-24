import React from "react";
import {Link} from 'react-router-dom';
import Button from "../UI/Button";
import '../UI/Card.css';
export default function MainArt(props) {
  const btn1 = 'Leer más';
  const btn2 = 'Ver más artículos';

  return (
    <div>
      <section className="card-wrapper">
        <header className="card-header">
          <h1>Articulo principal</h1>
        </header>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </div>
        <footer className="card-foot">
          <Button value={btn1} />
          <Link to="/articles"><Button value={btn2} /></Link>
        </footer>
      </section>
    </div>
  );
}
