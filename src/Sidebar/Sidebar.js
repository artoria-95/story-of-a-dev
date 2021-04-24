import React from "react";
import foto from "../Assets/dreamdev.jpeg";
import "./Sidebar.css";
import SideCard from "./SideCard";

export default function Sidebar() {
  const sideData = [
    {
      about: "Sobre la autora",
      summary:
        "Ana Paula Barua, también conocida como Arthuriana, es Full Stack Web Developer graduada del HENRY bootcamp. Actualmente trabaja como Application Development Associate en Accenture Argentina. En su tiempo libre, se dedica a soñar compulsivamente y mimar felinos.",
      link: "/biography",
    },
    {
      about: "Sobre la página",
      summary: "Inició como una suerte de blog y a medida que se fué desarrollando la idea se convirtió en una página personal y portfolio 2.0, resultando en un pantallazo de lo que pasa por el cerebro de su creadora.",
      link: "/about",
    },
  ];
  return (
    <div className="sidebar">
      <SideCard about={sideData[0].about} summary={sideData[0].summary} link={sideData[0].link}>
        <img src={foto} className="photo" />
      </SideCard>
      <SideCard
        foto="null"
        about={sideData[1].about}
        summary={sideData[1].summary}
        link={sideData[1].link}
      />
    </div>
  );
}
