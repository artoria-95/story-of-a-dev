import React from "react";

const SideCard = (props) => {
  return (
    <div className="sidecard">
      <div className="sidecard-content">
        <img src={foto} alt="ana" className="photo" />
        <h2 className="sidecard">Sobre la autora</h2>
        <p className="bio-p">Estoy loca.</p>
        <button className="more">Leer más</button>
      </div>
    </div>
  );
};

export default SideCard;
