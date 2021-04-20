import React from "react";
import "./Home.css";
import MainArt from "./MainArt";
import MainDrawings from "./MainDrawings";
import MainProjects from "./MainProjects";

export default function Home() {
  return (
    <div className="home-wrapper">
      <MainArt />

      <MainProjects />

      <MainDrawings />
    </div>
  );
}
