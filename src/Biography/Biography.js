import classes from "./Biography.module.css";
export default function Biography() {
  return (
    <div className={classes.biography}>
      <div className={classes.biocontent}>
        <p>
          Ana Paula Barua, conocida como Arthuriana en las redes, es Full Stack
          Web Developer graduada del bootcamp{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            className={classes.link}
          >
            Soy HENRY
          </a>{" "}
          (Cohorte 7, Febrero 2021).
          <br />
          A sus 13 años de edad se mudó a la ciudad de Denton, Texas (EEUU) con
          su mamá y su padrastro. En el 2009 participó de concursos de arte y
          teatro, clubs de literatura, talleres teatrales y cantaba para el coro
          de la First Cumberland Presbyterian Church.
          <br />
          En el 2011 por decisión propia volvió a Argentina a vivir con su papá,
          madrastra y hermanos. Se graduó de la escuela de comercio "Dr.
          Dalmacio Vélez Sarsfield" con el título Perito Mercantil (orientación
          contable).
          <br />
          Durante los años siguientes estudió diferentes carreras en las áreas
          de idiomas y salud mental. Trabajó principalmente con personas con
          discapacidades varias y cuidado de personas mayores hasta que se
          desató la pandemia del 2019.
          <br />
          Durante el período de aislamiento social que surgió en el país en
          consecuencia del SARS-CoV-2 (Covid-19), finalmente tomó la decisión de
          cambiar de rumbo y estudiar algo que realmente la apasione. Con esto
          en mente y gracias a la influencia de su tío materno y su mejor amigo,
          descubrió la programación y se dedicó a ello. En Octubre del 2020
          comenzó a cursar el bootcamp del cual se graduó el 19 de febrero del
          2021. Exactamente un mes después, el 19 de Marzo recibió el llamado
          que cambió su vida por completo.
          <br />
          Hoy, trabaja en Accenture Argentina, logró cumplir varias de sus
          metas, y pese a su condición de salud, finalmente puede dedicarse a lo
          que le gusta. Si hace 10 años alguien le hubiese dicho que hoy sería
          programadora, jamás lo hubiera creído. Sin embargo hoy acá está,
          demostrando que nada es imposible si lo intentas, y que nunca es tarde
          para encontrar tu camino.
        </p>
      </div>
      <div className={classes.biocontent}>
          <ul>
          <li>Un color: violeta</li>
          <li>Un sueño: viajar por todo el mundo</li>
          <li>Una canción: Bound to you - Christina Aguilera</li>
          <li>Artistas favoritos: Sia y Queen</li>
          <li>Una serie: The Big Bang Theory</li>
          <li>Top 5 películas: Burlesque, White Chicks, Kung Fu Panda, Las últimas vacaciones, Everafter</li>
          <li>Hobbies: Dibujar, cantar, codear, bailar</li>
          <li>Animal: Gatitos!</li>
          <li>Signo: Cáncer</li>
          </ul>
      </div>
    </div>
  );
}
