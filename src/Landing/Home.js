import React from "react";
import "./Home.css";
import MainArt from "./MainArt";
import MainDrawings from "./MainDrawings";
import MainProjects from "./MainProjects";

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="main-art">
        <MainArt />
      </section>
      <section className="main-projects">
      <MainProjects />
      </section>
      <section className="main-drawings">
      <MainDrawings />
      </section>
      <div></div>
    </div>
  );
}
