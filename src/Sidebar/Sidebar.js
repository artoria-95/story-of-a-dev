import React from "react";
import foto from "../Assets/dreamdev.jpeg";
import "./Sidebar.css";
import SideCard from "./SideCard";

export default function Sidebar() {
  const sideData = [
    {
      about: "Sobre la autora",
      summary:
        "Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo.",
    },
    {
      about: "Sobre la página",
      summary:
        "Expetenda tincidunt in sed, ex partem placerat sea, porro commodo exeam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.",
    },
  ];
  return (
    <div className="sidebar">
      <SideCard about={sideData[0].about} summary={sideData[0].summary}>
        <img src={foto} className="photo" />
      </SideCard>
      <SideCard
        foto="null"
        about={sideData[1].about}
        summary={sideData[1].summary}
      />
    </div>
  );
}
